import { useEffect, useState } from "react";
import { modules } from "@/data/modules";
import { useProgress } from "@/hooks/useProgress";
import { useMeditation } from "@/hooks/useMeditation";
import { useJournal } from "@/hooks/useJournal";
import { usePracticeLog } from "@/hooks/usePracticeLog";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/layout/Hero";
import { ModuleGrid } from "@/components/modules/ModuleGrid";
import { LessonView } from "@/components/modules/LessonView";
import { PracticeSection } from "@/components/practice/PracticeSection";
import { Library } from "@/components/library/Library";
import { Glossary } from "@/components/study/Glossary";
import { TraditionsMap } from "@/components/study/TraditionsMap";
import { Challenges } from "@/components/study/Challenges";
import { PracticeOfDay } from "@/components/study/PracticeOfDay";
import { Onboarding } from "@/components/study/Onboarding";
import { About } from "@/components/study/About";
import { StreakCard } from "@/components/study/StreakCard";

function goTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Início");
  const [selectedLesson, setSelectedLesson] = useState<number | null>(null);

  const progress = useProgress();
  const meditation = useMeditation();
  const journal = useJournal(progress.completed.length);
  const practiceLog = usePracticeLog();

  useEffect(() => {
    if (selectedLesson === null) return;
    const frame = window.requestAnimationFrame(() =>
      document.getElementById("lesson")?.scrollIntoView({ behavior: "smooth", block: "start" }),
    );
    return () => window.cancelAnimationFrame(frame);
  }, [selectedLesson]);

  // Log completed meditation when timer hits 0 while was running path handled in PracticeSection via callback
  const navigate = (label: string, id: string) => {
    setActiveNav(label);
    setMenuOpen(false);
    goTo(id);
  };

  const startMicro = () => {
    meditation.selectMeditation("respiracao");
    meditation.reset();
    // set timer to 2 min via select - need micro: temporarily override
    navigate("Prática", "pratica");
    practiceLog.log("micro", "Prática de 2 minutos", 2);
  };

  return (
    <div className="app-shell">
      <Header
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        activeNav={activeNav}
        onNavigate={navigate}
      />

      <Onboarding
        onStartLesson={() => {
          setSelectedLesson(0);
          navigate("Trilha", "trilha");
        }}
        onStartPractice={() => navigate("Prática", "pratica")}
      />

      <main>
        <Hero
          onStartTrail={() => navigate("Trilha", "trilha")}
          onStartPractice={() => navigate("Prática", "pratica")}
        />

        <StreakCard practiceLog={practiceLog} onMicroPractice={startMicro} />

        <PracticeOfDay
          onGoPractice={() => navigate("Prática", "pratica")}
          onGoChallenge={() => navigate("Trilhas", "desafios")}
        />

        <ModuleGrid
          progress={progress.progress}
          completedCount={progress.completed.length}
          total={progress.total}
          isComplete={progress.isComplete}
          isLocked={progress.isLocked}
          onRead={setSelectedLesson}
          onToggle={progress.toggleModule}
        />

        {selectedLesson !== null && (
          <LessonView
            module={modules[selectedLesson]}
            onBack={() => setSelectedLesson(null)}
            onComplete={() => {
              const m = modules[selectedLesson];
              progress.markComplete(m.title);
              practiceLog.log("lesson", `Lição ${m.number}: ${m.title}`);
              setSelectedLesson(null);
            }}
          />
        )}

        <TraditionsMap />
        <Glossary />
        <Challenges />

        <PracticeSection
          meditation={meditation}
          journal={journal}
          onPracticeComplete={(label, minutes) =>
            practiceLog.log("meditation", label, minutes)
          }
        />

        <Library />
        <About />
      </main>

      <Footer />
    </div>
  );
}
