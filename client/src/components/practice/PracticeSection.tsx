import { useEffect, useRef } from "react";
import {
  Check,
  Download,
  Headphones,
  Pause,
  PenLine,
  Play,
  Quote,
  RotateCcw,
  SunMedium,
} from "lucide-react";
import { ambientOptions, meditationOptions } from "@/data/meditations";
import type { useMeditation } from "@/hooks/useMeditation";
import type { useJournal } from "@/hooks/useJournal";
import { ReminderSettings } from "@/components/study/ReminderSettings";

type MeditationState = ReturnType<typeof useMeditation>;
type JournalState = ReturnType<typeof useJournal>;

interface PracticeSectionProps {
  meditation: MeditationState;
  journal: JournalState;
  onPracticeComplete?: (label: string, minutes: number) => void;
}

export function PracticeSection({ meditation, journal, onPracticeComplete }: PracticeSectionProps) {
  const {
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
    useAudioFile,
  } = meditation;

  const wasRunning = useRef(false);
  useEffect(() => {
    if (wasRunning.current && !running && timer === 0 && onPracticeComplete) {
      onPracticeComplete(selected.title, Math.round(selected.durationSeconds / 60));
    }
    wasRunning.current = running;
  }, [running, timer, onPracticeComplete, selected]);

  return (
    <section className="practice-section" id="pratica">
      <div className="container practice-grid">
        <div className="practice-intro">
          <p className="kicker light">PARA HOJE</p>
          <h2>
            Uma pausa
            <br />
            <i>consciente.</i>
          </h2>
          <p>Não é preciso mudar nada agora. Apenas perceber o que já está acontecendo.</p>
          <button
            className="light-button"
            onClick={() => journal.setOpen(!journal.open)}
          >
            <PenLine size={16} />{" "}
            {journal.open ? "Fechar reflexão" : "Escrever uma reflexão"}
          </button>
          <div className="practice-reminder-wrap">
            <ReminderSettings />
          </div>
        </div>

        <div className="practice-card">
          <div className="practice-card-top">
            <span className="practice-icon">
              <SunMedium size={20} />
            </span>
            <span>
              PRÁTICAS GUIADAS · {selected.duration.toUpperCase()}
              {useAudioFile ? " · ÁUDIO" : " · VOZ"}
            </span>
            <span className="practice-dots">•••</span>
          </div>

          <div className="voice-controls">
            <label>
              <Headphones size={14} /> Voz
              <select
                value={voiceName}
                onChange={(e) => setVoiceName(e.target.value)}
                aria-label="Selecionar voz"
                disabled={useAudioFile}
              >
                <option value="">Voz natural padrão</option>
                {voices.map((voice) => (
                  <option key={voice.name} value={voice.name}>
                    {voice.name}
                  </option>
                ))}
              </select>
            </label>
            <label>
              <span className="speed-label">◌</span> Velocidade
              <select
                value={speed}
                onChange={(e) => setSpeed(Number(e.target.value))}
                aria-label="Velocidade da voz"
                disabled={useAudioFile}
              >
                <option value={0.62}>Lenta</option>
                <option value={0.78}>Calma</option>
                <option value={0.95}>Natural</option>
                <option value={1.12}>Ágil</option>
              </select>
            </label>
            <label>
              <span className="speed-label">✦</span> Ambiente
              <select
                value={ambient}
                onChange={(e) => setAmbient(e.target.value)}
                aria-label="Som ambiente"
              >
                {ambientOptions.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.title}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="meditation-picker">
            {meditationOptions.map((item) => (
              <button
                key={item.id}
                className={
                  selectedId === item.id ? "meditation-choice active" : "meditation-choice"
                }
                onClick={() => selectMeditation(item.id)}
              >
                <strong>{item.title}</strong>
                <span>{item.description}</span>
                <small>
                  {item.duration}
                  {item.audioUrl ? " · áudio" : ""}
                </small>
              </button>
            ))}
          </div>

          <div className="practice-quote">
            <Quote size={23} />
            <p>
              Observe a respiração como quem escuta uma chuva mansa. Não é preciso fazê-la
              diferente.
            </p>
          </div>

          <div className="breath-visual">
            <div className={`breath-circle ${running ? "is-breathing" : ""}`}>
              <span>{running ? "presente" : "inspire"}</span>
              <small>{running ? "com você" : "com calma"}</small>
            </div>
            <div className="breath-labels">
              <span>{formatTime(timer)}</span>
              <span>
                {timer === 0
                  ? "prática concluída"
                  : running
                    ? selected.title
                    : "pronto para começar"}
              </span>
              <span>{selected.duration}</span>
            </div>
          </div>

          <div className="timer-actions">
            <button className="practice-play" onClick={toggle}>
              <span>
                {running ? (
                  <Pause size={14} fill="currentColor" />
                ) : (
                  <Play size={15} fill="currentColor" />
                )}
              </span>
              {running ? "Pausar prática" : timer === 0 ? "Recomeçar" : "Iniciar prática"}
            </button>
            <button
              className="reset-button"
              onClick={reset}
              aria-label="Reiniciar temporizador"
            >
              <RotateCcw size={16} />
            </button>
          </div>
        </div>
      </div>

      {journal.open && (
        <div className="container journal-wrap">
          <div className="journal-card">
            <div>
              <p className="kicker">CADERNO DE PRESENÇA</p>
              <h3>{journal.prompt}</h3>
            </div>
            <textarea
              value={journal.text}
              onChange={(e) => journal.setText(e.target.value)}
              placeholder="Escreva algumas linhas, sem tentar encontrar a resposta perfeita..."
              aria-label="Diário de reflexão"
            />
            <div className="journal-footer">
              <span className="saved-note">
                <Check size={13} /> Salvo neste dispositivo
              </span>
              {journal.history.length > 0 && (
                <button type="button" className="journal-export" onClick={journal.exportMarkdown}>
                  <Download size={13} /> Exportar histórico
                </button>
              )}
            </div>
          </div>
          {journal.history.length > 0 && (
            <div className="journal-history">
              <p className="kicker">HISTÓRICO</p>
              {journal.history.slice(0, 8).map((entry) => (
                <article key={entry.id} className="journal-history-item">
                  <time>{entry.date}</time>
                  <p className="journal-history-prompt">{entry.prompt}</p>
                  <p>{entry.text.slice(0, 180)}{entry.text.length > 180 ? "…" : ""}</p>
                </article>
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
}
