import Link from "next/link";

export default function HomePage() {
  return (
    <div className="ocean-gradient rounded-3xl border border-white/10 bg-slate-950/80 p-6 shadow-soft md:p-10">
      {/* HERO */}
      <section className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-200">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
            Live pilot with coastal co-ops
          </div>

          <h1 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl lg:text-5xl">
            Smart Oceans.{" "}
            <span className="bg-gradient-to-r from-bluevora-light to-blue-400 bg-clip-text text-transparent">
              Smarter Livelihoods.
            </span>
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300 md:text-base">
            Bluevora connects IoT sensor grids, ocean analytics, and a digital
            marketplace into one platform—so seaweed farmers and coastal
            communities can protect crops, respond to changing conditions, and
            sell directly to global buyers.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link href="/dashboard" className="btn-primary">
              View Dashboard
            </Link>
            <Link href="#learn-more" className="btn-secondary">
              Learn More
            </Link>
            <p className="text-xs text-slate-400">
              No hardware required to explore the demo.
            </p>
          </div>

          <dl className="mt-7 grid grid-cols-2 gap-6 text-xs text-slate-200 md:grid-cols-3">
            <div>
              <dt className="text-slate-400">Sensors deployed</dt>
              <dd className="mt-1 text-lg font-semibold text-bluevora-light">
                120+
              </dd>
            </div>
            <div>
              <dt className="text-slate-400">Farmers onboarded</dt>
              <dd className="mt-1 text-lg font-semibold">480+</dd>
            </div>
            <div>
              <dt className="text-slate-400">Additional income</dt>
              <dd className="mt-1 text-lg font-semibold text-emerald-300">
                18–25%
              </dd>
            </div>
          </dl>
        </div>

        {/* Hero card */}
        <div className="card-surface relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_0,rgba(126,211,247,0.35),transparent_55%),radial-gradient(circle_at_90%_100%,rgba(15,185,177,0.2),transparent_55%)]" />
          <div className="relative flex flex-col justify-between gap-5 p-5 text-xs">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-[11px] uppercase tracking-[0.14em] text-slate-400">
                  Live farm snapshot
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-50">
                  Bohol Seaweed Co-op
                </p>
              </div>
              <span className="badge-soft bg-emerald-500/10 text-emerald-200 ring-1 ring-emerald-500/40">
                All lines stable
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-slate-900/70 p-3">
                <p className="text-[11px] text-slate-400">Surface temperature</p>
                <p className="mt-1 text-lg font-semibold text-slate-50">
                  24.6
                  <span className="ml-1 text-xs text-slate-400">°C</span>
                </p>
                <p className="mt-1 text-[11px] text-emerald-300">
                  Safe for Kappaphycus
                </p>
              </div>
              <div className="rounded-xl bg-slate-900/70 p-3">
                <p className="text-[11px] text-slate-400">Turbidity window</p>
                <p className="mt-1 text-lg font-semibold text-slate-50">
                  14.3
                  <span className="ml-1 text-xs text-slate-400">NTU</span>
                </p>
                <p className="mt-1 text-[11px] text-amber-300">
                  Watch for next 3h
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between gap-3 rounded-xl bg-slate-900/70 px-3 py-2.5">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <p className="text-[11px] text-slate-300">
                  Auto-routing new harvest lot to buyers in{" "}
                  <span className="font-semibold text-slate-50">EU &amp; APAC</span>.
                </p>
              </div>
              <span className="text-[10px] text-slate-500">Bluevora OS</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section
        id="learn-more"
        className="mt-14 grid gap-8 border-t border-white/5 pt-10 md:grid-cols-2"
      >
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
            The Problem
          </h2>
          <p className="mt-3 text-lg font-semibold text-slate-50">
            Seaweed farmers are operating blind in a volatile ocean.
          </p>
          <p className="mt-3 text-sm text-slate-300">
            Climate-driven temperature swings, changing salinity, and extreme
            weather events are causing unpredictable crop loss. At the same time,
            farmers remain locked into opaque value chains that erode margins and
            bargaining power.
          </p>
        </div>

        <div className="grid gap-3 text-sm text-slate-200">
          <div className="card-surface flex items-start gap-3 p-4">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-rose-400" />
            <p>Crop loss due to sudden environmental changes</p>
          </div>
          <div className="card-surface flex items-start gap-3 p-4">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-rose-400" />
            <p>No real-time monitoring for seaweed farms</p>
          </div>
          <div className="card-surface flex items-start gap-3 p-4">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-rose-400" />
            <p>Dependency on middlemen</p>
          </div>
          <div className="card-surface flex items-start gap-3 p-4">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-rose-400" />
            <p>Income instability for fishermen and farmers</p>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="mt-14 grid gap-8 md:grid-cols-2">
        <div className="card-surface p-5">
          <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
            The Bluevora Platform
          </h2>
          <p className="mt-3 text-lg font-semibold text-slate-50">
            Real-time sensing, intelligent alerts, and transparent trade.
          </p>
          <p className="mt-3 text-sm text-slate-300">
            Bluevora combines IoT sensor networks, edge analytics, and a digital
            marketplace into a single pane of glass for coastal communities.
          </p>

          <ul className="mt-4 space-y-3 text-sm text-slate-200">
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-bluevora-light" />
              <span>
                IoT-based real-time monitoring of{" "}
                <span className="font-semibold">temperature, pH, salinity, and turbidity</span>.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-bluevora-light" />
              <span>
                Early warning alerts for heat waves, algal blooms, and critical
                thresholds.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-bluevora-light" />
              <span>
                Digital marketplace that connects farmers{" "}
                <span className="font-semibold">directly to verified buyers</span>.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-bluevora-light" />
              <span>
                Tools for sustainable seaweed cultivation and climate adaptation.
              </span>
            </li>
          </ul>
        </div>

        {/* How it works */}
        <div className="card-surface p-5">
          <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
            How It Works
          </h2>
          <ol className="mt-4 space-y-4 text-sm text-slate-200">
            <li className="flex gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-bluevora/80 text-xs font-semibold">
                1
              </span>
              <div>
                <p className="font-semibold text-slate-50">
                  Sensors collect ocean data
                </p>
                <p className="mt-1 text-slate-300">
                  Bluevora-ready sensor kits capture high-frequency readings of
                  ocean conditions across each farm line and depth.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-bluevora/80 text-xs font-semibold">
                2
              </span>
              <div>
                <p className="font-semibold text-slate-50">
                  Data is analyzed in the cloud
                </p>
                <p className="mt-1 text-slate-300">
                  Our algorithms learn local baselines, detect anomalies, and
                  forecast risk windows tailored to each community.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-bluevora/80 text-xs font-semibold">
                3
              </span>
              <div>
                <p className="font-semibold text-slate-50">
                  Farmers receive alerts &amp; market access
                </p>
                <p className="mt-1 text-slate-300">
                  Farmers get clear, local-language alerts and can list harvest
                  lots directly to buyers through the Bluevora marketplace.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* IMPACT */}
      <section className="mt-14 card-surface p-5 md:p-6">
        <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
              Impact &amp; SDGs
            </h2>
            <p className="mt-3 text-lg font-semibold text-slate-50">
              Building climate-resilient blue economies with every data point.
            </p>
            <p className="mt-3 text-sm text-slate-300">
              Bluevora is aligned with Sustainable Development Goals around{" "}
              decent work, climate action, life below water, and reduced
              inequalities. Each deployment strengthens local food security
              while unlocking premium seaweed markets.
            </p>
          </div>

          <div className="grid gap-4 text-xs text-slate-200 md:w-80">
            <div className="rounded-2xl bg-slate-900/80 px-4 py-3">
              <p className="text-[11px] font-medium text-slate-400">
                Sustainability
              </p>
              <p className="mt-1 text-sm font-semibold text-emerald-300">
                Healthier oceans, regenerative livelihoods
              </p>
              <p className="mt-1 text-[11px] text-slate-400">
                Optimized harvest timing reduces crop waste and protects fragile
                coastal ecosystems.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-900/80 px-4 py-3">
              <p className="text-[11px] font-medium text-slate-400">
                Economic growth
              </p>
              <p className="mt-1 text-sm font-semibold text-bluevora-light">
                +18–25% income uplift
              </p>
              <p className="mt-1 text-[11px] text-slate-400">
                Direct-to-buyer pricing and quality-linked premiums reward
                better practices.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-900/80 px-4 py-3">
              <p className="text-[11px] font-medium text-slate-400">
                SDGs in focus
              </p>
              <p className="mt-1 text-[11px] text-slate-300">
                SDG 1, 8, 13, 14, and 10 through climate-resilient coastal jobs,
                inclusive marketplaces, and nature-positive production.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-12 border-t border-white/5 pt-6 text-xs text-slate-400">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-4">
            <span className="font-semibold text-slate-200">Bluevora</span>
            <span className="hidden h-1 w-1 rounded-full bg-slate-600 md:inline-block" />
            <p>IoT-enabled seaweed monitoring &amp; marketplace for coastal communities.</p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="mailto:hello@bluevora.io"
              className="hover:text-slate-200"
            >
              hello@bluevora.io
            </a>
            <div className="flex items-center gap-3 text-slate-500">
              <a href="#" className="hover:text-slate-200">
                LinkedIn
              </a>
              <a href="#" className="hover:text-slate-200">
                X
              </a>
              <a href="#" className="hover:text-slate-200">
                GitHub
              </a>
            </div>
          </div>
        </div>
        <p className="mt-3 text-[11px] text-slate-600">
          © {new Date().getFullYear()} Bluevora. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

