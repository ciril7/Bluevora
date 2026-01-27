import React from "react";

export interface ChartPoint {
  day: string;
  value: number;
}

interface ChartSectionProps {
  title: string;
  subtitle?: string;
  unit: string;
  points: ChartPoint[];
}

/**
 * Minimal SVG line chart for the last 7 days of sensor data.
 * Keeps dependencies light while conveying an analytics-style overview.
 */
export const ChartSection: React.FC<ChartSectionProps> = ({
  title,
  subtitle,
  unit,
  points
}) => {
  const values = points.map((p) => p.value);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const paddingY = (max - min || 1) * 0.25;
  const chartMin = min - paddingY;
  const chartMax = max + paddingY;

  const width = 100;
  const height = 40;

  const pathD = points
    .map((point, index) => {
      const x = (index / (points.length - 1 || 1)) * width;
      const y =
        height -
        ((point.value - chartMin) / (chartMax - chartMin || 1)) * height;
      return `${index === 0 ? "M" : "L"} ${x},${y}`;
    })
    .join(" ");

  return (
    <section className="card-surface p-4 md:p-5">
      <header className="flex items-center justify-between gap-3">
        <div>
          <h2 className="text-sm font-semibold text-slate-50">{title}</h2>
          {subtitle && (
            <p className="mt-1 text-xs text-slate-400">
              {subtitle}
            </p>
          )}
        </div>
        <span className="badge-soft bg-bluevora/10 text-bluevora-light ring-1 ring-bluevora/40">
          7-day trend
        </span>
      </header>

      <div className="mt-4 md:mt-5">
        <div className="relative overflow-hidden rounded-lg bg-slate-900/80 px-3 py-4">
          <svg
            viewBox={`0 0 ${width} ${height}`}
            className="h-28 w-full text-bluevora"
            preserveAspectRatio="none"
          >
            {/* Gradient fill under line */}
            <defs>
              <linearGradient
                id="lineGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor="#0B8ECF" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#0B8ECF" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d={`${pathD} L ${width},${height} L 0,${height} Z`}
              fill="url(#lineGradient)"
              className="opacity-60"
            />
            <path
              d={pathD}
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              strokeLinecap="round"
            />
            {points.map((point, index) => {
              const x = (index / (points.length - 1 || 1)) * width;
              const y =
                height -
                ((point.value - chartMin) / (chartMax - chartMin || 1)) *
                  height;
              return (
                <circle
                  key={point.day}
                  cx={x}
                  cy={y}
                  r={1.5}
                  className="fill-bluevora-light"
                />
              );
            })}
          </svg>
          <div className="mt-3 flex items-center justify-between text-[11px] text-slate-500">
            <span>
              Range:{" "}
              <span className="font-medium text-slate-300">
                {min.toFixed(1)}–{max.toFixed(1)} {unit}
              </span>
            </span>
            <span>Data from last 7 days</span>
          </div>
        </div>

        <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-slate-400">
          {points.map((point) => (
            <span
              key={point.day}
              className="inline-flex items-center gap-1 rounded-full bg-slate-900/80 px-2 py-1"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-bluevora-light" />
              <span className="font-medium text-slate-200">
                {point.day}
              </span>
              <span>{point.value.toFixed(1)}</span>
              <span className="text-slate-500">{unit}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

