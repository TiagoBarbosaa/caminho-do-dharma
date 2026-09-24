import { useState } from "react";
import { Check, CircleHelp } from "lucide-react";
import type { QuizQuestion } from "@/types";

interface LessonQuizProps {
  questions: QuizQuestion[];
  onFinished?: () => void;
}

export function LessonQuiz({ questions, onFinished }: LessonQuizProps) {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [revealed, setRevealed] = useState(false);

  if (!questions.length) return null;

  const allAnswered = questions.every((_, i) => answers[i] !== undefined);
  const score = questions.reduce(
    (acc, q, i) => acc + (answers[i] === q.correctIndex ? 1 : 0),
    0,
  );

  return (
    <div className="lesson-quiz">
      <div className="lesson-quiz-header">
        <CircleHelp size={18} />
        <div>
          <p className="kicker">REFORÇO GENTIL</p>
          <h3>Perguntas para consolidar</h3>
          <p className="lesson-quiz-note">Não é prova — é um espelho do que ficou claro.</p>
        </div>
      </div>

      {questions.map((q, qi) => (
        <div key={qi} className="quiz-item">
          <p className="quiz-question">
            <span>{qi + 1}.</span> {q.question}
          </p>
          <div className="quiz-options">
            {q.options.map((opt, oi) => {
              const selected = answers[qi] === oi;
              const showCorrect = revealed && oi === q.correctIndex;
              const showWrong = revealed && selected && oi !== q.correctIndex;
              return (
                <button
                  key={oi}
                  type="button"
                  className={`quiz-option ${selected ? "is-selected" : ""} ${showCorrect ? "is-correct" : ""} ${showWrong ? "is-wrong" : ""}`}
                  disabled={revealed}
                  onClick={() => setAnswers((a) => ({ ...a, [qi]: oi }))}
                >
                  {opt}
                </button>
              );
            })}
          </div>
          {revealed && (
            <p className="quiz-explanation">{q.explanation}</p>
          )}
        </div>
      ))}

      <div className="quiz-actions">
        {!revealed ? (
          <button
            className="primary-button"
            disabled={!allAnswered}
            onClick={() => {
              setRevealed(true);
              onFinished?.();
            }}
          >
            Ver explicações
          </button>
        ) : (
          <p className="quiz-score">
            <Check size={16} /> {score} de {questions.length} alinhadas ao conteúdo da lição
          </p>
        )}
      </div>
    </div>
  );
}
