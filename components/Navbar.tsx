"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/login", label: "Login" }
];

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/5 bg-slate-950/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-bluevora-teal to-bluevora shadow-soft">
            <span className="text-lg font-black tracking-tighter text-white">
              B
            </span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-bluevora-light">
              Bluevora
            </span>
            <span className="text-[11px] text-slate-400">
              Smart oceans, smarter livelihoods
            </span>
          </div>
        </Link>

        <button
          className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-slate-200 hover:bg-white/10 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Open navigation</span>
          <div className="space-y-1.5">
            <span className="block h-0.5 w-5 rounded-full bg-current" />
            <span className="block h-0.5 w-4 rounded-full bg-current" />
            <span className="block h-0.5 w-5 rounded-full bg-current" />
          </div>
        </button>

        <div className="hidden items-center gap-8 md:flex">
          <div className="flex items-center gap-6 text-sm font-medium text-slate-200">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative transition-colors ${
                    active ? "text-bluevora-light" : "text-slate-300 hover:text-slate-50"
                  }`}
                >
                  {item.label}
                  {active && (
                    <span className="absolute -bottom-1 left-0 h-0.5 w-6 rounded-full bg-gradient-to-r from-bluevora-teal to-bluevora" />
                  )}
                </Link>
              );
            })}
          </div>
          <Link href="/dashboard" className="btn-primary text-xs">
            View Dashboard
          </Link>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/5 bg-slate-950/95 px-4 pb-4 pt-2 md:hidden">
          <div className="flex flex-col gap-2 text-sm font-medium text-slate-100">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between rounded-lg px-3 py-2 ${
                    active ? "bg-white/10 text-bluevora-light" : "hover:bg-white/5"
                  }`}
                >
                  <span>{item.label}</span>
                  {active && (
                    <span className="h-1.5 w-1.5 rounded-full bg-bluevora-light" />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};

