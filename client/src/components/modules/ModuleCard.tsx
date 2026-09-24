import { Check, ChevronRight, Clock3 } from "lucide-react";
import type { Module } from "@/types";

interface ModuleCardProps {
  module: Module;
  complete: boolean;
  locked: boolean;
  onRead: () => void;
  onToggle: () => void;
}

export function ModuleCard({ module, complete, locked, onRead, onToggle }: ModuleCardProps) {
  return (
    <article
      className={`module-card ${complete ? "is-complete" : ""} ${locked ? "is-locked" : ""}`}
    >
      <div className={`module-number ${module.color}`}>
        {complete ? <Check size={17} /> : module.number}
      </div>
      <div className="module-content">
        <div className="module-meta">
          <span>{module.level}</span>
          <span>{complete ? "Concluído" : module.status}</span>
          <span>
            <Clock3 size={13} /> {module.duration}
          </span>
        </div>
        <h3>{module.title}</h3>
        <p>{module.description}</p>
        <div className="module-actions">
          <button className="module-link" disabled={locked} onClick={onRead}>
            {locked ? "Conclua o anterior" : "Ler lição"}
            <ChevronRight size={15} />
          </button>
          <button className="complete-link" disabled={locked} onClick={onToggle}>
            {complete ? <Check size={14} /> : "Marcar"}
          </button>
        </div>
      </div>
    </article>
  );
}
