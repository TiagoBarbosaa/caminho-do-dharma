import { Leaf, Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

interface HeaderProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  activeNav: string;
  onNavigate: (label: string, id: string) => void;
}

const NAV_ITEMS: [string, string][] = [
  ["Início", "top"],
  ["Trilha", "trilha"],
  ["Tradições", "tradicoes"],
  ["Glossário", "glossario"],
  ["Trilhas", "desafios"],
  ["Prática", "pratica"],
  ["Biblioteca", "biblioteca"],
  ["Sobre", "sobre"],
];

export function Header({ menuOpen, setMenuOpen, activeNav, onNavigate }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="topbar">
      <div className="container topbar-inner">
        <button className="brand" onClick={() => onNavigate("Início", "top")}>
          <span className="brand-mark">
            <Leaf size={18} />
          </span>
          <span>
            <strong>Caminho</strong>
            <em>do Dharma</em>
          </span>
        </button>

        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={menuOpen ? "main-nav is-open" : "main-nav"}>
          {NAV_ITEMS.map(([label, id]) => (
            <button
              key={label}
              className={activeNav === label ? "nav-link active" : "nav-link"}
              onClick={() => onNavigate(label, id)}
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="header-actions">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro"}
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button className="profile-button" onClick={() => onNavigate("Trilha", "trilha")}>
            <span className="profile-dot">A</span>
            <span className="profile-label">Meu caminho</span>
          </button>
        </div>
      </div>
    </header>
  );
}
