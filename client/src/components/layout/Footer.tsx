import { Leaf } from "lucide-react";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="brand footer-brand">
          <span className="brand-mark">
            <Leaf size={18} />
          </span>
          <span>
            <strong>Caminho</strong>
            <em>do Dharma</em>
          </span>
        </div>
        <p>Um guia para estudar, praticar e viver com mais presença.</p>
        <div className="footer-right">
          <span>feito com calma</span>
          <span className="footer-dot">·</span>
          <span>2026</span>
        </div>
      </div>
    </footer>
  );
}
