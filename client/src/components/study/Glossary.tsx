import { useMemo, useState } from "react";
import { BookMarked, Search } from "lucide-react";
import { glossary } from "@/data/glossary";

export function Glossary() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return glossary;
    return glossary.filter(
      (t) =>
        t.term.toLowerCase().includes(q) ||
        t.pali?.toLowerCase().includes(q) ||
        t.definition.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <section className="glossary-section" id="glossario">
      <div className="container">
        <div className="section-heading-row">
          <div>
            <p className="kicker">VOCABULÁRIO</p>
            <h2>
              Glossário
              <br />
              <span>com cuidado.</span>
            </h2>
          </div>
          <p className="section-description">
            Termos centrais — e o que eles <em>não</em> significam, para evitar atalhos comuns.
          </p>
        </div>

        <div className="glossary-search">
          <Search size={16} />
          <input
            type="search"
            placeholder="Buscar termo (ex.: anatta, mettā…)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Buscar no glossário"
          />
        </div>

        <div className="glossary-grid">
          {filtered.map((term) => (
            <article key={term.term} className="glossary-card">
              <div className="glossary-card-top">
                <BookMarked size={16} />
                <h3>{term.term}</h3>
                {term.pali && <span className="glossary-pali">{term.pali}</span>}
              </div>
              <p>{term.definition}</p>
              <p className="glossary-not">
                <strong>Não significa:</strong> {term.notMeaning}
              </p>
            </article>
          ))}
          {filtered.length === 0 && (
            <p className="glossary-empty">Nenhum termo encontrado para “{query}”.</p>
          )}
        </div>
      </div>
    </section>
  );
}
