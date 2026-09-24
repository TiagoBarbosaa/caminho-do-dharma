import { ArrowRight, BookOpen, Compass, Leaf, X } from "lucide-react";
import { useEffect, useState } from "react";

const KEY = "dharma-v1-onboarding-done";

interface OnboardingProps {
  onStartLesson: () => void;
  onStartPractice: () => void;
}

export function Onboarding({ onStartLesson, onStartPractice }: OnboardingProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const dismiss = () => {
    try {
      localStorage.setItem(KEY, "1");
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="onboarding-overlay" role="dialog" aria-modal="true" aria-label="Boas-vindas">
      <div className="onboarding-card">
        <button type="button" className="onboarding-close" onClick={dismiss} aria-label="Fechar">
          <X size={18} />
        </button>
        <div className="onboarding-mark">
          <Leaf size={22} />
        </div>
        <p className="kicker">BEM-VINDO</p>
        <h2>Três passos simples</h2>
        <p className="onboarding-lede">
          Este espaço é para estudar e praticar com calma — sem pressa e sem promessas milagrosas.
        </p>
        <ol className="onboarding-steps">
          <li>
            <Compass size={16} />
            <span>
              <strong>Comece pela trilha</strong> — a lição 01 abre o mapa.
            </span>
          </li>
          <li>
            <BookOpen size={16} />
            <span>
              <strong>Leia no seu ritmo</strong> — use o modo leitura nas lições.
            </span>
          </li>
          <li>
            <Leaf size={16} />
            <span>
              <strong>Uma respiração conta</strong> — mesmo 2 minutos de prática.
            </span>
          </li>
        </ol>
        <div className="onboarding-actions">
          <button
            type="button"
            className="primary-button"
            onClick={() => {
              dismiss();
              onStartLesson();
            }}
          >
            Começar pela lição 01 <ArrowRight size={16} />
          </button>
          <button
            type="button"
            className="text-button"
            onClick={() => {
              dismiss();
              onStartPractice();
            }}
          >
            Ir à prática de hoje
          </button>
        </div>
      </div>
    </div>
  );
}
