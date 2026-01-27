import { MetricCard } from "../../components/MetricCard";
import { AlertPanel } from "../../components/AlertPanel";
import { ChartSection } from "../../components/ChartSection";
import { MarketplaceCard } from "../../components/MarketplaceCard";
import {
  currentMetrics,
  liveAlerts,
  temperatureTrend,
  marketplaceListings
} from "../../data/mockSensorData";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <header className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-xl font-semibold tracking-tight text-slate-50 md:text-2xl">
            Farm Operations Dashboard
          </h1>
          <p className="mt-1 text-sm text-slate-400">
            Real-time ocean conditions, risk alerts, and marketplace visibility
            for your seaweed farms.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-xs">
          <span className="badge-soft bg-emerald-500/10 text-emerald-200 ring-1 ring-emerald-500/40">
            Live • Synced 30s ago
          </span>
          <span className="badge-soft bg-slate-900/90 text-slate-300 ring-1 ring-white/5">
            Co-op: Bohol Seaweed Network
          </span>
        </div>
      </header>

      {/* METRICS */}
      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {currentMetrics.map((metric) => (
          <MetricCard
            key={metric.label}
            label={metric.label}
            value={metric.value}
            unit={metric.unit}
            status={metric.status}
            trend={metric.trend}
          />
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        {/* CHART */}
        <ChartSection
          title="Surface temperature trend"
          subtitle="Overlaying satellite SST and in-situ buoy data for your farm polygon."
          unit="°C"
          points={temperatureTrend}
        />

        {/* ALERTS */}
        <AlertPanel alerts={liveAlerts} />
      </section>

      {/* MARKETPLACE PREVIEW */}
      <section className="space-y-4">
        <header className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-sm font-semibold text-slate-50">
              Marketplace Preview
            </h2>
            <p className="mt-1 text-xs text-slate-400">
              Upcoming harvest lots ready to be published to Bluevora&apos;s global
              buyer network.
            </p>
          </div>
          <button
            type="button"
            className="btn-secondary text-xs"
          >
            View full marketplace
          </button>
        </header>

        <div className="grid gap-4 md:grid-cols-3">
          {marketplaceListings.map((listing) => (
            <MarketplaceCard key={listing.id} listing={listing} />
          ))}
        </div>
      </section>
    </div>
  );
}

