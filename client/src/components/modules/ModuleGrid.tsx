import { modules } from "@/data/modules";
import { ProgressRing } from "./ProgressRing";
import { ModuleCard } from "./ModuleCard";

interface ModuleGridProps {
  progress: number;
  completedCount: number;
  total: number;
  isComplete: (title: string) => boolean;
  isLocked: (index: number) => boolean;
  onRead: (index: number) => void;
  onToggle: (title: string) => void;
}

export function ModuleGrid({
  progress,
  completedCount,
  total,
  isComplete,
  isLocked,
  onRead,
  onToggle,
}: ModuleGridProps) {
  return (
    <section className="progress-section" id="trilha">
      <div className="container">
        <div className="section-heading-row">
          <div>
            <p className="kicker">SUA JORNADA</p>
            <h2>
              Um mapa para seguir
              <br />
              <span>sem se perder.</span>
            </h2>
          </div>
          <div className="progress-summary">
            <ProgressRing progress={progress} />
            <div>
              <strong>Seu ritmo importa.</strong>
              <p>
                {completedCount === 0
                  ? "Comece pelo primeiro módulo."
                  : `${completedCount} de ${total} módulos concluídos.`}
              </p>
            </div>
          </div>
        </div>

        <div className="module-grid">
          {modules.map((module, index) => (
            <ModuleCard
              key={module.title}
              module={module}
              complete={isComplete(module.title)}
              locked={isLocked(index)}
              onRead={() => onRead(index)}
              onToggle={() => onToggle(module.title)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
