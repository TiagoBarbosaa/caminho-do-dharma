import { useCallback, useEffect, useState } from "react";
import { journalPrompts } from "@/data/meditations";
import type { JournalEntry } from "@/types";

const STORAGE_KEY = "dharma-v1-journal-entries";
const LEGACY_KEY = "dharma-v1-journal";
const LEGACY_OLD = "dharma-journal";

function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

function uid() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function loadEntries(): JournalEntry[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as JournalEntry[];

    // migrate single-text journal
    const legacy =
      localStorage.getItem(LEGACY_KEY) ?? localStorage.getItem(LEGACY_OLD);
    if (legacy && legacy.trim()) {
      const entry: JournalEntry = {
        id: uid(),
        date: todayISO(),
        prompt: journalPrompts[0],
        text: legacy,
        updatedAt: new Date().toISOString(),
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify([entry]));
      return [entry];
    }
  } catch {
    /* ignore */
  }
  return [];
}

export function useJournal(completedCount: number) {
  const [open, setOpen] = useState(false);
  const [entries, setEntries] = useState<JournalEntry[]>(loadEntries);
  const [draft, setDraft] = useState("");
  const prompt = journalPrompts[completedCount % journalPrompts.length];

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  }, [entries]);

  // Load today's draft if exists
  useEffect(() => {
    const today = entries.find((e) => e.date === todayISO());
    if (today) setDraft(today.text);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const saveToday = useCallback(() => {
    const date = todayISO();
    setEntries((prev) => {
      const idx = prev.findIndex((e) => e.date === date);
      const entry: JournalEntry = {
        id: idx >= 0 ? prev[idx].id : uid(),
        date,
        prompt,
        text: draft,
        updatedAt: new Date().toISOString(),
      };
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = entry;
        return next;
      }
      return [entry, ...prev];
    });
  }, [draft, prompt]);

  useEffect(() => {
    if (!draft.trim()) return;
    const t = window.setTimeout(saveToday, 800);
    return () => window.clearTimeout(t);
  }, [draft, saveToday]);

  const history = entries
    .filter((e) => e.text.trim())
    .sort((a, b) => b.date.localeCompare(a.date));

  const exportMarkdown = useCallback(() => {
    const lines = history.map(
      (e) => `## ${e.date}\n\n> ${e.prompt}\n\n${e.text}\n`,
    );
    const blob = new Blob([`# Caderno de presença\n\n${lines.join("\n")}`], {
      type: "text/markdown",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `caminho-do-dharma-diario.md`;
    a.click();
    URL.revokeObjectURL(url);
  }, [history]);

  return {
    open,
    setOpen,
    text: draft,
    setText: setDraft,
    prompt,
    history,
    exportMarkdown,
  };
}
