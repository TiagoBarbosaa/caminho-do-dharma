import { Info, Shield } from "lucide-react";

export function About() {
  return (
    <section className="about-section" id="sobre">
      <div className="container">
        <div className="section-heading-row">
          <div>
            <p className="kicker">TRANSPARÊNCIA</p>
            <h2>
              Sobre, fontes
              <br />
              <span>e limites.</span>
            </h2>
          </div>
          <p className="section-description">
            Credibilidade importa tanto quanto a prática. Aqui está o que este app é — e o que não
            é.
          </p>
        </div>

        <div className="about-grid">
          <article className="about-card">
            <Info size={18} />
            <h3>O que é</h3>
            <p>
              Um guia introdutório e intermediário para estudar budismo com distinção entre texto,
              tradição, interpretação acadêmica e prática cotidiana. O progresso fica neste
              dispositivo (não há conta obrigatória).
            </p>
          </article>
          <article className="about-card">
            <Shield size={18} />
            <h3>O que não é</h3>
            <p>
              Não substitui terapia, medicina ou orientação de um professor qualificado. Não ensina
              práticas esotéricas para improvisar. Não afirma que “a vida é só sofrimento”, que
              nirvāṇa é aniquilação ou que carma justifica o sofrimento alheio.
            </p>
          </article>
          <article className="about-card about-card-wide">
            <h3>Fontes e critério</h3>
            <p>
              O currículo dialoga com suttas (via SuttaCentral e Access to Insight), entradas da
              Stanford Encyclopedia of Philosophy, materiais institucionais de tradições específicas
              e orientações de segurança sobre meditação (ex.: NCCIH). Cada lição aponta fontes para
              ir além do resumo.
            </p>
            <p>
              Critério de redação: distinguir história textual, autoridade religiosa, leitura
              acadêmica, prática introdutória e evidência clínica — sem misturar tudo num único
              slogan.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
