import { useMemo, useState } from "react";
import { ArrowRight, BookOpen, Brain, CirclePlay, ExternalLink, Library as LibraryIcon, Sparkles } from "lucide-react";
import { resources } from "@/data/resources";

const ICON_MAP = {
  BookOpen,
  CirclePlay,
  Library: LibraryIcon,
  ExternalLink,
} as const;

const FILTERS = ["Tudo", "Leituras", "Vídeos", "Referências"] as const;

export function Library() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("Tudo");

  const filtered = useMemo(
    () => (filter === "Tudo" ? resources : resources.filter((r) => r.category === filter)),
    [filter],
  );

  return (
    <section className="library-section" id="biblioteca">
      <div className="container">
        <div className="section-heading-row library-heading">
          <div>
            <p className="kicker">CURADORIA</p>
            <h2>
              Aprender com
              <br />
              <span>boas raízes.</span>
            </h2>
          </div>
          <p className="section-description">
            Leituras e referências selecionadas para ampliar o estudo — sem excesso, sem ruído.
          </p>
        </div>

        <div className="filter-row">
          <div className="filter-tabs">
            {FILTERS.map((item) => (
              <button
                key={item}
                className={filter === item ? "filter-tab active" : "filter-tab"}
                onClick={() => setFilter(item)}
              >
                {item}
              </button>
            ))}
          </div>
          <button className="all-link" onClick={() => setFilter("Tudo")}>
            Ver toda a biblioteca <ArrowRight size={15} />
          </button>
        </div>

        <div className="resource-grid">
          {filtered.map((resource) => {
            const Icon = ICON_MAP[resource.icon] ?? BookOpen;
            return (
              <a
                className="resource-card"
                href={resource.link}
                target="_blank"
                rel="noreferrer"
                key={resource.title}
              >
                <div className="resource-icon">
                  <Icon size={19} />
                </div>
                <div className="resource-content">
                  <div className="resource-type">
                    {resource.type}
                    <span>↗</span>
                  </div>
                  <h3>{resource.title}</h3>
                  <p>{resource.description}</p>
                  <span className="resource-meta">{resource.meta}</span>
                </div>
              </a>
            );
          })}
        </div>

        <div className="grounding-note">
          <div className="grounding-icon">
            <Brain size={22} />
          </div>
          <div>
            <strong>Um lembrete importante</strong>
            <p>
              Estudar é também experimentar. Se um ensinamento não fizer sentido agora, deixe-o
              respirar — e volte a ele depois.
            </p>
          </div>
          <Sparkles className="grounding-spark" size={19} />
        </div>
      </div>
    </section>
  );
}
