import { ArrowRight, Compass, Play } from "lucide-react";

interface HeroProps {
  onStartTrail: () => void;
  onStartPractice: () => void;
}

export function Hero({ onStartTrail, onStartPractice }: HeroProps) {
  return (
    <section className="hero-section" id="top">
      <div className="container hero-grid">
        <div className="hero-copy fade-up">
          <div className="eyebrow">
            <span className="eyebrow-line" /> UM COMEÇO GENTIL
          </div>
          <h1>
            Estudar.
            <br />
            <i>Praticar.</i>
            <br />
            Ver com mais clareza.
          </h1>
          <p className="hero-lede">
            Um espaço para caminhar pelos ensinamentos do budismo com curiosidade, presença e os
            pés no chão.
          </p>
          <div className="hero-actions">
            <button className="primary-button" onClick={onStartTrail}>
              Começar a trilha <ArrowRight size={17} />
            </button>
            <button className="text-button" onClick={onStartPractice}>
              <span className="play-icon">
                <Play size={12} fill="currentColor" />
              </span>{" "}
              Prática de hoje
            </button>
          </div>
          <div className="hero-note">
            <span className="avatar-stack">
              <span>☼</span>
              <span>◌</span>
              <span>✦</span>
            </span>
            <span>Uma prática de cada vez.</span>
          </div>
        </div>

        <div className="hero-art fade-up delay-1" aria-hidden="true">
          <div className="hero-art-bg">
            <div className="hero-art-sun" />
            <div className="hero-art-hills" />
            <div className="hero-art-mist" />
          </div>
          <div className="hero-art-overlay" />
          <div className="hero-art-caption">
            <span>TRILHA 01</span>
            <strong>Fundamentos</strong>
            <small>Comece onde você está.</small>
          </div>
          <div className="hero-art-stamp">
            <Compass size={17} />
            <span>
              presença
              <br />
              cotidiana
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
