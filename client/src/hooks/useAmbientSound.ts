import { useCallback, useRef } from "react";

type AmbientKind = "silencio" | "chuva" | "floresta" | "mar" | string;

export function useAmbientSound() {
  const audioContextRef = useRef<AudioContext | null>(null);
  const cleanupRef = useRef<(() => void) | null>(null);

  const getContext = useCallback(() => {
    if (!audioContextRef.current) {
      audioContextRef.current = new AudioContext();
    }
    return audioContextRef.current;
  }, []);

  const stop = useCallback(() => {
    cleanupRef.current?.();
    cleanupRef.current = null;
  }, []);

  const start = useCallback(
    (kind: AmbientKind) => {
      stop();
      if (kind === "silencio") return;

      try {
        const context = getContext();
        void context.resume();

        const length = context.sampleRate * 3;
        const buffer = context.createBuffer(1, length, context.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < length; i += 1) {
          data[i] = (Math.random() * 2 - 1) * 0.35;
        }

        const source = context.createBufferSource();
        source.buffer = buffer;
        source.loop = true;

        const filter = context.createBiquadFilter();
        filter.type = kind === "mar" ? "lowpass" : "bandpass";
        filter.frequency.value =
          kind === "chuva" ? 1800 : kind === "floresta" ? 950 : 520;
        filter.Q.value = kind === "mar" ? 0.7 : 0.35;

        const gain = context.createGain();
        gain.gain.value = kind === "chuva" ? 0.06 : 0.045;

        source.connect(filter).connect(gain).connect(context.destination);
        source.start();

        const pulse = window.setInterval(() => {
          gain.gain.setTargetAtTime(
            kind === "mar"
              ? 0.025 + Math.random() * 0.035
              : 0.025 + Math.random() * 0.04,
            context.currentTime,
            kind === "mar" ? 1.8 : 0.35,
          );
        }, kind === "mar" ? 1800 : 700);

        if (kind === "floresta") {
          const bird = context.createOscillator();
          const birdGain = context.createGain();
          bird.type = "sine";
          bird.frequency.value = 2100;
          birdGain.gain.value = 0.008;
          bird.connect(birdGain).connect(context.destination);
          bird.start();

          const birdPulse = window.setInterval(() => {
            bird.frequency.setTargetAtTime(
              1750 + Math.random() * 900,
              context.currentTime,
              0.2,
            );
            birdGain.gain.setTargetAtTime(
              0.004 + Math.random() * 0.012,
              context.currentTime,
              0.15,
            );
          }, 4200);

          cleanupRef.current = () => {
            window.clearInterval(pulse);
            window.clearInterval(birdPulse);
            try {
              source.stop();
              bird.stop();
            } catch {
              /* already stopped */
            }
          };
        } else {
          cleanupRef.current = () => {
            window.clearInterval(pulse);
            try {
              source.stop();
            } catch {
              /* already stopped */
            }
          };
        }
      } catch (err) {
        console.warn("Ambient sound unavailable:", err);
      }
    },
    [getContext, stop],
  );

  const suspend = useCallback(() => {
    void audioContextRef.current?.suspend();
  }, []);

  const resume = useCallback(() => {
    void audioContextRef.current?.resume();
  }, []);

  return { start, stop, suspend, resume };
}
