export default function LoginPage() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <section className="card-surface w-full max-w-md p-6 md:p-8">
        <header className="mb-6 text-center">
          <h1 className="text-lg font-semibold tracking-tight text-slate-50">
            Sign in to Bluevora
          </h1>
          <p className="mt-1 text-xs text-slate-400">
            Secure access to your farm operations and marketplace controls.
          </p>
        </header>

        <form className="space-y-4">
          <div className="space-y-1.5 text-sm">
            <label
              htmlFor="email"
              className="block text-xs font-medium text-slate-200"
            >
              Work email
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="you@bluevora.coop"
              className="w-full rounded-lg border border-white/10 bg-slate-950/60 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bluevora-light focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            />
          </div>

          <div className="space-y-1.5 text-sm">
            <label
              htmlFor="password"
              className="block text-xs font-medium text-slate-200"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              placeholder="••••••••"
              className="w-full rounded-lg border border-white/10 bg-slate-950/60 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bluevora-light focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            />
          </div>

          <button type="submit" className="btn-primary w-full text-sm">
            Log in
          </button>
        </form>

        <p className="mt-4 text-center text-[11px] text-slate-500">
          This is a demo environment. Authentication is mocked for showcase
          purposes only.
        </p>
      </section>
    </div>
  );
}

