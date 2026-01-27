import React from "react";

export type MetricStatus = "Safe" | "Warning" | "Risk";

export interface MetricCardProps {
  label: string;
  value: number;
  unit: string;
  status: MetricStatus;
  trend?: "up" | "down" | "flat";
}

const statusColors: Record<MetricStatus, string> = {
  Safe: "bg-emerald-500/15 text-emerald-300 ring-emerald-500/40",
  Warning: "bg-amber-500/15 text-amber-300 ring-amber-500/40",
  Risk: "bg-rose-500/15 text-rose-300 ring-rose-500/40"
};

export const MetricCard: React.FC<MetricCardProps> = ({
  label,
  value,
  unit,
  status,
  trend = "flat"
}) => {
  const trendIcon =
    trend === "up" ? "▲" : trend === "down" ? "▼" : "●";

  return (
    <section className="card-surface flex flex-1 flex-col justify-between p-4 md:p-5">
      <header className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
            {label}
          </p>
          <p className="mt-3 flex items-baseline gap-1.5">
            <span className="text-2xl font-semibold text-slate-50 md:text-3xl">
              {value.toFixed(1)}
            </span>
            <span className="text-xs font-medium text-slate-400">{unit}</span>
          </p>
        </div>
        <span
          className={`badge-soft ring-1 ${statusColors[status]} px-2.5 py-1`}
        >
          <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-current" />
          {status}
        </span>
      </header>

      <footer className="mt-4 flex items-center justify-between text-xs text-slate-400">
        <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/80 px-2.5 py-1">
          <span className="text-[10px]">{trendIcon}</span>
          <span className="font-medium">
            {trend === "up" && "Rising slightly"}
            {trend === "down" && "Falling slightly"}
            {trend === "flat" && "Stable"}
          </span>
        </span>
        <span className="text-[11px]">
          Live feed from <span className="font-semibold text-slate-200">Buoy #03</span>
        </span>
      </footer>
    </section>
  );
};

