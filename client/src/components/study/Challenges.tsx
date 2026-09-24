import { useState } from "react";
import { CalendarDays, Check, ChevronRight } from "lucide-react";
import { challenges } from "@/data/challenges";
import { useChallengeProgress } from "@/hooks/useChallengeProgress";

export function Challenges() {
  const { activeId, setActiveId, completedDays, toggleDay, currentDay } =
    useChallengeProgress();
  const [expanded, setExpanded] = useState<string | null>(activeId);

  return (
    <section className="challenges-section" id="desafios">
      <div className="container">
        <div className="section-heading-row">
          <div>
            <p className="kicker">CONTINUIDADE</p>
            <h2>
              Trilhas de
              <br />
              <span>7 e 21 dias.</span>
            </h2>
          </div>
          <p className="section-description">
            Sequências leves para criar hábito. Pule um dia se precisar — o caminho não exige
            perfeição.
          </p>
        </div>

        <div className="challenges-list">
          {challenges.map((ch) => {
            const isOpen = expanded === ch.id;
            const done = completedDays[ch.id] ?? [];
            const progress = Math.round((done.length / ch.days) * 100);

            return (
              <article key={ch.id} className={`challenge-card ${isOpen ? "is-open" : ""}`}>
                <button
                  type="button"
                  className="challenge-summary"
                  onClick={() => setExpanded(isOpen ? null : ch.id)}
                >
                  <div className="challenge-icon">
                    <CalendarDays size={20} />
                  </div>
                  <div className="challenge-meta">
                    <h3>{ch.title}</h3>
                    <p>{ch.description}</p>
                    <div className="challenge-progress-bar">
                      <span style={{ width: `${progress}%` }} />
                    </div>
                    <small>
                      {done.length} de {ch.days} dias · {progress}%
                    </small>
                  </div>
                  <ChevronRight
                    size={18}
                    className={`challenge-chevron ${isOpen ? "rotated" : ""}`}
                  />
                </button>

                {isOpen && (
                  <div className="challenge-days">
                    <div className="challenge-toolbar">
                      <button
                        type="button"
                        className={`challenge-activate ${activeId === ch.id ? "active" : ""}`}
                        onClick={() => setActiveId(activeId === ch.id ? null : ch.id)}
                      >
                        {activeId === ch.id ? "Trilha ativa" : "Tornar trilha ativa"}
                      </button>
                    </div>
                    {ch.sequence.map((day) => {
                      const isDone = done.includes(day.day);
                      const isCurrent = activeId === ch.id && currentDay(ch.id) === day.day;
                      return (
                        <div
                          key={day.day}
                          className={`challenge-day ${isDone ? "is-done" : ""} ${isCurrent ? "is-current" : ""}`}
                        >
                          <button
                            type="button"
                            className="challenge-day-check"
                            onClick={() => toggleDay(ch.id, day.day)}
                            aria-label={isDone ? "Desmarcar dia" : "Marcar dia concluído"}
                          >
                            {isDone ? <Check size={14} /> : day.day}
                          </button>
                          <div>
                            <strong>
                              Dia {day.day}: {day.title}
                            </strong>
                            <span className="challenge-focus">{day.focus}</span>
                            <p>{day.practice}</p>
                            <small>{day.durationMin} min</small>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
