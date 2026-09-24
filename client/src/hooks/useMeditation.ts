import { useCallback, useEffect, useRef, useState } from "react";
import { meditationOptions } from "@/data/meditations";
import { useAmbientSound } from "./useAmbientSound";

const formatTime = (seconds: number) =>
  `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;

export function useMeditation() {
  const [selectedId, setSelectedId] = useState("respiracao");
  const [ambient, setAmbient] = useState("silencio");
  const [timer, setTimer] = useState(300);
  const [running, setRunning] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [voiceName, setVoiceName] = useState("");
  const [speed, setSpeed] = useState(0.78);

  const speechRef = useRef<SpeechSynthesisUtterance | null>(null);
  const cueTimeoutRef = useRef<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const ambientSound = useAmbientSound();

  const selected = meditationOptions.find((m) => m.id === selectedId) ?? meditationOptions[0];
  const useAudioFile = Boolean(selected.audioUrl);

  useEffect(() => {
    const loadVoices = () => {
      const available = window.speechSynthesis
        .getVoices()
        .filter((v) => v.lang.toLowerCase().startsWith("pt"));
      setVoices(available);
      if (!voiceName && available[0]) setVoiceName(available[0].name);
    };
    loadVoices();
    window.speechSynthesis.addEventListener("voiceschanged", loadVoices);
    return () => window.speechSynthesis.removeEventListener("voiceschanged", loadVoices);
  }, [voiceName]);

  const stopAudio = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (!running) return;
    const interval = window.setInterval(() => {
      setTimer((value) => {
        if (value <= 1) {
          setRunning(false);
          window.speechSynthesis.cancel();
          speechRef.current = null;
          if (cueTimeoutRef.current) window.clearTimeout(cueTimeoutRef.current);
          stopAudio();
          ambientSound.stop();
          return 0;
        }
        return value - 1;
      });
    }, 1000);
    return () => window.clearInterval(interval);
  }, [running, ambientSound, stopAudio]);

  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
      if (cueTimeoutRef.current) window.clearTimeout(cueTimeoutRef.current);
      stopAudio();
      ambientSound.stop();
    };
  }, [ambientSound, stopAudio]);

  const speakCue = useCallback(
    (text: string) => {
      try {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = "pt-BR";
        utterance.rate = speed;
        utterance.pitch = 0.92;
        utterance.voice =
          voices.find((v) => v.name === voiceName) || voices[0] || null;

        utterance.onend = () => {
          if (speechRef.current !== utterance) return;
          cueTimeoutRef.current = window.setTimeout(() => {
            if (speechRef.current === utterance) {
              speakCue(
                "Continue em silêncio, percebendo a respiração sem precisar mudá-la. O corpo está aqui. Você pode simplesmente permanecer.",
              );
            }
          }, 35000);
        };

        utterance.onerror = () => {
          speechRef.current = null;
        };

        speechRef.current = utterance;
        window.speechSynthesis.speak(utterance);
      } catch (err) {
        console.warn("Speech synthesis unavailable:", err);
      }
    },
    [speed, voices, voiceName],
  );

  const playAudioFile = useCallback(
    (url: string) => {
      stopAudio();
      const audio = new Audio(url);
      audioRef.current = audio;
      audio.play().catch((err) => {
        console.warn("Audio file failed, falling back to TTS:", err);
        speakCue(selected.script);
      });
    },
    [selected.script, speakCue, stopAudio],
  );

  const selectMeditation = useCallback(
    (id: string) => {
      if (running) {
        setRunning(false);
        window.speechSynthesis.cancel();
        speechRef.current = null;
        if (cueTimeoutRef.current) window.clearTimeout(cueTimeoutRef.current);
        stopAudio();
        ambientSound.stop();
      }
      const option = meditationOptions.find((m) => m.id === id);
      setSelectedId(id);
      setTimer(option?.durationSeconds ?? 300);
    },
    [running, ambientSound, stopAudio],
  );

  const toggle = useCallback(() => {
    if (timer === 0) setTimer(selected.durationSeconds);

    if (running) {
      window.speechSynthesis.pause();
      audioRef.current?.pause();
      ambientSound.suspend();
      setRunning(false);
      return;
    }

    if (window.speechSynthesis.paused || (audioRef.current && audioRef.current.paused && audioRef.current.currentTime > 0)) {
      window.speechSynthesis.resume();
      void audioRef.current?.play();
      ambientSound.resume();
      setRunning(true);
      return;
    }

    speechRef.current = null;
    window.speechSynthesis.cancel();
    if (cueTimeoutRef.current) window.clearTimeout(cueTimeoutRef.current);
    stopAudio();
    ambientSound.start(ambient);

    if (selected.audioUrl) {
      playAudioFile(selected.audioUrl);
    } else {
      speakCue(selected.script);
    }
    setRunning(true);
  }, [
    timer,
    running,
    selected,
    ambient,
    ambientSound,
    speakCue,
    playAudioFile,
    stopAudio,
  ]);

  const reset = useCallback(() => {
    setRunning(false);
    setTimer(selected.durationSeconds);
    speechRef.current = null;
    window.speechSynthesis.cancel();
    if (cueTimeoutRef.current) window.clearTimeout(cueTimeoutRef.current);
    stopAudio();
    ambientSound.stop();
  }, [selected, ambientSound, stopAudio]);

  return {
    selectedId,
    selected,
    ambient,
    setAmbient,
    timer,
    running,
    voices,
    voiceName,
    setVoiceName,
    speed,
    setSpeed,
    selectMeditation,
    toggle,
    reset,
    formatTime,
    durationLabel: selected.duration,
    useAudioFile,
  };
}
