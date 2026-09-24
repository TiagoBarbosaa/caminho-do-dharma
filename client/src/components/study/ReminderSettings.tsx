import { Bell, BellOff } from "lucide-react";
import { useReminder } from "@/hooks/useReminder";

export function ReminderSettings() {
  const { enabled, time, permission, setEnabled, setTime, requestPermission } = useReminder();

  return (
    <div className="reminder-settings">
      <div className="reminder-header">
        {enabled ? <Bell size={16} /> : <BellOff size={16} />}
        <strong>Lembrete diário</strong>
      </div>
      <p className="reminder-desc">
        Um aviso suave no horário que você escolher (funciona com o app aberto ou instalado como
        PWA, conforme o navegador permitir).
      </p>
      <div className="reminder-controls">
        <label>
          Horário
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            aria-label="Horário do lembrete"
          />
        </label>
        <button
          type="button"
          className={`reminder-toggle ${enabled ? "is-on" : ""}`}
          onClick={async () => {
            if (!enabled) {
              const ok = await requestPermission();
              if (ok) setEnabled(true);
            } else {
              setEnabled(false);
            }
          }}
        >
          {enabled ? "Ativo" : "Ativar"}
        </button>
      </div>
      {permission === "denied" && (
        <p className="reminder-warn">
          Notificações bloqueadas neste navegador. Você pode liberar nas configurações do site.
        </p>
      )}
    </div>
  );
}
