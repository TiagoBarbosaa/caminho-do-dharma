import { useCallback, useEffect, useMemo, useState } from "react";
import { modules } from "@/data/modules";

const STORAGE_KEY = "dharma-v1-completed";

function loadCompleted(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      // migrate from old key if present
      const legacy = localStorage.getItem("dharma-completed");
      if (legacy) {
        localStorage.setItem(STORAGE_KEY, legacy);
        localStorage.removeItem("dharma-completed");
        return JSON.parse(legacy) as string[];
      }
      return [];
    }
    return JSON.parse(raw) as string[];
  } catch {
    return [];
  }
}

export function useProgress() {
  const [completed, setCompleted] = useState<string[]>(loadCompleted);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(completed));
  }, [completed]);

  const progress = useMemo(
    () => Math.round((completed.length / modules.length) * 100),
    [completed],
  );

  const isComplete = useCallback(
    (title: string) => completed.includes(title),
    [completed],
  );

  const isLocked = useCallback(
    (index: number) => {
      if (index === 0) return false;
      return !completed.includes(modules[index - 1].title);
    },
    [completed],
  );

  const toggleModule = useCallback((title: string) => {
    setCompleted((current) =>
      current.includes(title)
        ? current.filter((item) => item !== title)
        : [...current, title],
    );
  }, []);

  const markComplete = useCallback((title: string) => {
    setCompleted((current) =>
      current.includes(title) ? current : [...current, title],
    );
  }, []);

  return {
    completed,
    progress,
    isComplete,
    isLocked,
    toggleModule,
    markComplete,
    total: modules.length,
  };
}
