import React from "react";

export interface Alert {
  id: string;
  type: "warning" | "critical" | "info";
  message: string;
  metric: string;
  timestamp: string;
}

interface AlertPanelProps {
  alerts: Alert[];
}

export const AlertPanel: React.FC<AlertPanelProps> = ({ alerts }) => {
  if (!alerts.length) {
    return (
      <section className="card-surface p-4 md:p-5">
        <header className="flex items-center justify-between gap-3">
          <h2 className="text-sm font-semibold text-slate-50">
            Live Alerts
          </h2>
          <span className="badge-soft bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-500/40">
            All clear
          </span>
        </header>
        <p className="mt-3 text-xs text-slate-400">
          No active alerts detected in the last 24 hours. Ocean conditions are
          within safe ranges for current seaweed crops.
        </p>
      </section>
    );
  }

  return (
    <section className="card-surface p-4 md:p-5">
      <header className="flex items-center justify-between gap-3">
        <div>
          <h2 className="text-sm font-semibold text-slate-50">
            Live Alerts
          </h2>
          <p className="mt-1 text-xs text-slate-400">
            Automated early warnings from Bluevora&apos;s coastal sensor mesh.
          </p>
        </div>
        <span className="badge-soft bg-amber-500/10 text-amber-300 ring-1 ring-amber-500/40">
          {alerts.length} active
        </span>
      </header>

      <ul className="mt-4 space-y-3 text-xs">
        {alerts.map((alert) => (
          <li
            key={alert.id}
            className="flex items-start justify-between gap-3 rounded-lg bg-slate-900/80 px-3 py-2.5"
          >
            <div className="flex flex-1 items-start gap-2.5">
              <span
                className={`mt-0.5 h-2 w-2 rounded-full ${
                  alert.type === "critical"
                    ? "bg-rose-400"
                    : alert.type === "warning"
                    ? "bg-amber-300"
                    : "bg-bluevora-light"
                }`}
              />
              <div>
                <p className="font-medium text-slate-100">{alert.metric}</p>
                <p className="mt-0.5 text-[11px] text-slate-400">
                  {alert.message}
                </p>
              </div>
            </div>
            <span className="shrink-0 text-[11px] text-slate-500">
              {alert.timestamp}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

