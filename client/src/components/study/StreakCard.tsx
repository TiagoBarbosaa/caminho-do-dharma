import { Flame, History } from "lucide-react";
import type { usePracticeLog } from "@/hooks/usePracticeLog";

type Log = ReturnType<typeof usePracticeLog>;

interface StreakCardProps {
  practiceLog: Log;
  onMicroPractice: () => void;
}

export function StreakCard({ practiceLog, onMicroPractice }: StreakCardProps) {
  const { streak, daysThisWeek, recent, hasToday } = practiceLog;

  return (
    <section className="streak-section" id="habito">
      <div className="container">
        <div className="streak-grid">
          <div className="streak-card">
            <div className="streak-icon">
              <Flame size={20} />
            </div>
            <div>
              <p className="kicker">HÁBITO GENTIL</p>
              <h2>
                {streak === 0
                  ? "Comece hoje — um passo basta."
                  : `${streak} dia${streak > 1 ? "s" : ""} com presença`}
              </h2>
              <p>
                {hasToday
                  ? "Você já registrou algo hoje. Sem cobrança: só continuidade."
                  : "Ainda não há registro hoje. Dois minutos de respiração já contam."}
              </p>
              <p className="streak-week">{daysThisWeek} de 7 dias nesta semana</p>
              {!hasToday && (
                <button type="button" className="primary-button" onClick={onMicroPractice}>
                  Prática de 2 minutos
                </button>
              )}
            </div>
          </div>
          <div className="streak-history">
            <div className="streak-history-head">
              <History size={16} />
              <strong>Práticas recentes</strong>
            </div>
            {recent.length === 0 ? (
              <p className="streak-empty">Nenhuma prática registrada ainda.</p>
            ) : (
              <ul>
                {recent.slice(0, 6).map((e) => (
                  <li key={e.id}>
                    <time>{e.date}</time>
                    <span>{e.label}</span>
                    {e.minutes != null && <small>{e.minutes} min</small>}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
