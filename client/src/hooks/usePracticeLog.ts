import { useCallback, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "dharma-v1-practice-log";

export type PracticeKind = "meditation" | "challenge" | "lesson" | "micro";

export interface PracticeEvent {
  id: string;
  date: string; // YYYY-MM-DD
  kind: PracticeKind;
  label: string;
  minutes?: number;
}

function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

function load(): PracticeEvent[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as PracticeEvent[];
  } catch {
    /* ignore */
  }
  return [];
}

function uid() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}

/** Consecutive days ending today (or yesterday if today empty — still counts as active streak overnight) */
function calcStreak(dates: Set<string>): number {
  if (dates.size === 0) return 0;
  const sorted = [...dates].sort();
  let streak = 0;
  const cursor = new Date();
  // If nothing today, start from yesterday (don't break streak until day ends unused)
  if (!dates.has(todayISO())) {
    cursor.setDate(cursor.getDate() - 1);
  }
  while (true) {
    const key = cursor.toISOString().slice(0, 10);
    if (dates.has(key)) {
      streak += 1;
      cursor.setDate(cursor.getDate() - 1);
    } else break;
  }
  return streak;
}

export function usePracticeLog() {
  const [events, setEvents] = useState<PracticeEvent[]>(load);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
  }, [events]);

  const log = useCallback((kind: PracticeKind, label: string, minutes?: number) => {
    const date = todayISO();
    setEvents((prev) => {
      // avoid duplicate identical logs same day
      if (prev.some((e) => e.date === date && e.kind === kind && e.label === label)) {
        return prev;
      }
      return [
        { id: uid(), date, kind, label, minutes },
        ...prev,
      ].slice(0, 200);
    });
  }, []);

  const datesWithPractice = useMemo(
    () => new Set(events.map((e) => e.date)),
    [events],
  );

  const streak = useMemo(() => calcStreak(datesWithPractice), [datesWithPractice]);

  const recent = useMemo(
    () => [...events].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 14),
    [events],
  );

  const daysThisWeek = useMemo(() => {
    const start = new Date();
    start.setDate(start.getDate() - 6);
    let n = 0;
    for (let i = 0; i < 7; i += 1) {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      if (datesWithPractice.has(d.toISOString().slice(0, 10))) n += 1;
    }
    return n;
  }, [datesWithPractice]);

  return { events, log, streak, recent, daysThisWeek, hasToday: datesWithPractice.has(todayISO()) };
}
