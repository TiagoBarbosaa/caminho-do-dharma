import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "dharma-v1-challenges";

interface ChallengeState {
  activeId: string | null;
  completedDays: Record<string, number[]>;
}

function load(): ChallengeState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as ChallengeState;
  } catch {
    /* ignore */
  }
  return { activeId: null, completedDays: {} };
}

export function useChallengeProgress() {
  const [state, setState] = useState<ChallengeState>(load);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const setActiveId = useCallback((id: string | null) => {
    setState((s) => ({ ...s, activeId: id }));
  }, []);

  const toggleDay = useCallback((challengeId: string, day: number) => {
    setState((s) => {
      const list = s.completedDays[challengeId] ?? [];
      const next = list.includes(day)
        ? list.filter((d) => d !== day)
        : [...list, day].sort((a, b) => a - b);
      return {
        ...s,
        completedDays: { ...s.completedDays, [challengeId]: next },
      };
    });
  }, []);

  /** Next incomplete day, or last day if all done */
  const currentDay = useCallback(
    (challengeId: string) => {
      const done = new Set(state.completedDays[challengeId] ?? []);
      for (let d = 1; d <= 31; d += 1) {
        if (!done.has(d)) return d;
      }
      return 1;
    },
    [state.completedDays],
  );

  return {
    activeId: state.activeId,
    completedDays: state.completedDays,
    setActiveId,
    toggleDay,
    currentDay,
  };
}
