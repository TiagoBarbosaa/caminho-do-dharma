import { useState } from "react";
import { ArrowLeft, BookOpen, Check, ExternalLink, Sparkles, Type } from "lucide-react";
import type { Module } from "@/types";
import { moduleQuizzes } from "@/data/quizzes";
import { moduleSources } from "@/data/sources";
import { LessonQuiz } from "./LessonQuiz";

interface LessonViewProps {
  module: Module;
  onBack: () => void;
  onComplete: () => void;
}

export function LessonView({ module, onBack, onComplete }: LessonViewProps) {
  const [readingMode, setReadingMode] = useState(false);
  const quiz = moduleQuizzes[module.number] ?? [];
  const sources = moduleSources[module.number] ?? [];
  const summary = module.lesson.sections.map((s) => s.title).join(" · ");

  return (
    <section
      id="lesson"
      className={`lesson-section ${readingMode ? "is-reading-mode" : ""}`}
    >
      <div className="container">
        <div className="lesson-toolbar">
          <button className="back-link" onClick={onBack}>
            <ArrowLeft size={15} /> Voltar para a trilha
          </button>
          <button
            type="button"
            className={`reading-toggle ${readingMode ? "is-active" : ""}`}
            onClick={() => setReadingMode((v) => !v)}
            aria-pressed={readingMode}
          >
            {readingMode ? <BookOpen size={14} /> : <Type size={14} />}
            {readingMode ? "Sair do modo leitura" : "Modo leitura"}
          </button>
        </div>

        <div className="lesson-header">
          <div>
            <p className="kicker">LIÇÃO {module.number}</p>
            <h2>{module.title}</h2>
            <p className="lesson-summary">
              <strong>Em 30 segundos:</strong> {summary}.
            </p>
            <p className="lesson-intro">{module.lesson.intro}</p>
          </div>
          {!readingMode && (
            <span className={`lesson-badge ${module.color}`}>estudo guiado</span>
          )}
        </div>

        <div className="lesson-body">
          <div className="lesson-sections">
            {module.lesson.sections.map((section, index) => (
              <article className="lesson-block" key={section.title}>
                <span className="lesson-index">0{index + 1}</span>
                <div>
                  <h3>{section.title}</h3>
                  <p>{section.body}</p>
                </div>
              </article>
            ))}

            {sources.length > 0 && (
              <div className="lesson-sources">
                <p className="kicker">FONTES PARA IR MAIS FUNDO</p>
                <ul>
                  {sources.map((s) => (
                    <li key={s.url}>
                      <a href={s.url} target="_blank" rel="noreferrer">
                        {s.title} <ExternalLink size={12} />
                      </a>
                      {s.note && <span className="source-note">{s.note}</span>}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {quiz.length > 0 && !readingMode && <LessonQuiz questions={quiz} />}
          </div>

          {!readingMode && (
            <aside className="lesson-practice">
              <div className="practice-icon">
                <Sparkles size={19} />
              </div>
              <p className="kicker">LEVE PARA A VIDA</p>
              <h3>Uma pequena experiência</h3>
              <p>{module.lesson.practice}</p>
              <button className="primary-button" onClick={onComplete}>
                Concluir esta lição <Check size={16} />
              </button>
            </aside>
          )}
        </div>

        {readingMode && (
          <div className="reading-complete">
            <button className="primary-button" onClick={onComplete}>
              Concluir esta lição <Check size={16} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
