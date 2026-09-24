import { Map as MapIcon } from "lucide-react";
import { traditions } from "@/data/traditions";

export function TraditionsMap() {
  return (
    <section className="traditions-section" id="tradicoes">
      <div className="container">
        <div className="section-heading-row">
          <div>
            <p className="kicker">ORIENTAÇÃO</p>
            <h2>
              Mapa das
              <br />
              <span>tradições.</span>
            </h2>
          </div>
          <p className="section-description">
            Famílias úteis para estudar — não caixas rígidas. Cada uma tem textos, ênfases e
            limites próprios.
          </p>
        </div>

        <div className="traditions-grid">
          {traditions.map((t) => (
            <article key={t.id} className={`tradition-card color-${t.color}`}>
              <div className="tradition-header">
                <MapIcon size={18} />
                <h3>{t.name}</h3>
              </div>
              <p className="tradition-region">{t.region}</p>
              <ul className="tradition-emphasis">
                {t.emphasis.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
              <p>
                <strong>Textos:</strong> {t.texts}
              </p>
              <p>
                <strong>Horizonte:</strong> {t.ideal}
              </p>
              <p className="tradition-caution">
                <strong>Cuidado:</strong> {t.caution}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
