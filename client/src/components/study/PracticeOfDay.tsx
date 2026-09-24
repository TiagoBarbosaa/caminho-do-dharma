import { Sparkles, ArrowRight } from "lucide-react";
import { challenges } from "@/data/challenges";
import { meditationOptions } from "@/data/meditations";
import { useChallengeProgress } from "@/hooks/useChallengeProgress";

interface PracticeOfDayProps {
  onGoPractice: () => void;
  onGoChallenge: () => void;
}

export function PracticeOfDay({ onGoPractice, onGoChallenge }: PracticeOfDayProps) {
  const { activeId, currentDay, completedDays } = useChallengeProgress();

  const active = challenges.find((c) => c.id === activeId);
  const dayNum = activeId ? currentDay(activeId) : 1;
  const day = active?.sequence.find((d) => d.day === dayNum);

  // Fallback: rotate meditation by day of year
  const doy = Math.floor(
    (Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000,
  );
  const med = meditationOptions[doy % meditationOptions.length];

  const doneToday =
    activeId && day
      ? (completedDays[activeId] ?? []).includes(day.day)
      : false;

  return (
    <section className="practice-of-day" id="hoje">
      <div className="container">
        <div className="pod-card">
          <div className="pod-badge">
            <Sparkles size={14} /> PRÁTICA DE HOJE
          </div>
          {day && active ? (
            <>
              <h2>
                {active.title} · Dia {day.day}
              </h2>
              <p className="pod-title">{day.title}</p>
              <p className="pod-focus">{day.focus}</p>
              <p className="pod-body">{day.practice}</p>
              <div className="pod-actions">
                <button className="primary-button" onClick={onGoChallenge}>
                  {doneToday ? "Ver trilha" : "Abrir trilha"} <ArrowRight size={16} />
                </button>
                <button className="text-button" onClick={onGoPractice}>
                  Meditação guiada
                </button>
              </div>
            </>
          ) : (
            <>
              <h2>Uma pausa consciente</h2>
              <p className="pod-title">{med.title}</p>
              <p className="pod-body">{med.description}</p>
              <div className="pod-actions">
                <button className="primary-button" onClick={onGoPractice}>
                  Iniciar · {med.duration} <ArrowRight size={16} />
                </button>
                <button className="text-button" onClick={onGoChallenge}>
                  Começar trilha de 7 ou 21 dias
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
