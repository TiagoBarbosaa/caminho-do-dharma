import { useCallback, useEffect, useRef, useState } from "react";

const STORAGE_KEY = "dharma-v1-reminder";

interface ReminderConfig {
  enabled: boolean;
  time: string; // HH:MM
}

function load(): ReminderConfig {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as ReminderConfig;
  } catch {
    /* ignore */
  }
  return { enabled: false, time: "08:00" };
}

export function useReminder() {
  const [config, setConfig] = useState<ReminderConfig>(load);
  const [permission, setPermission] = useState<NotificationPermission>(
    typeof Notification !== "undefined" ? Notification.permission : "default",
  );
  const timerRef = useRef<number | null>(null);
  const lastFiredRef = useRef<string>("");

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  }, [config]);

  const requestPermission = useCallback(async () => {
    if (typeof Notification === "undefined") return false;
    const result = await Notification.requestPermission();
    setPermission(result);
    return result === "granted";
  }, []);

  const setEnabled = useCallback((enabled: boolean) => {
    setConfig((c) => ({ ...c, enabled }));
  }, []);

  const setTime = useCallback((time: string) => {
    setConfig((c) => ({ ...c, time }));
  }, []);

  // Poll every 30s for the scheduled minute
  useEffect(() => {
    if (!config.enabled || permission !== "granted") {
      if (timerRef.current) window.clearInterval(timerRef.current);
      return;
    }

    const tick = () => {
      const now = new Date();
      const hh = String(now.getHours()).padStart(2, "0");
      const mm = String(now.getMinutes()).padStart(2, "0");
      const key = `${now.toISOString().slice(0, 10)}-${hh}:${mm}`;
      if (`${hh}:${mm}` === config.time && lastFiredRef.current !== key) {
        lastFiredRef.current = key;
        try {
          new Notification("Caminho do Dharma", {
            body: "Um momento para praticar ou refletir — no seu ritmo.",
            icon: "/icon-192.png",
            tag: "dharma-daily",
          });
        } catch {
          /* ignore */
        }
      }
    };

    tick();
    timerRef.current = window.setInterval(tick, 30000);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [config.enabled, config.time, permission]);

  return {
    enabled: config.enabled,
    time: config.time,
    permission,
    setEnabled,
    setTime,
    requestPermission,
  };
}
