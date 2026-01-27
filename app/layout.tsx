import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "../components/Navbar";

export const metadata: Metadata = {
  title: "Bluevora – Smart Oceans. Smarter Livelihoods.",
  description:
    "Bluevora is an IoT-enabled seaweed monitoring and digital marketplace platform for coastal communities and seaweed farmers."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-b from-bluevora-dark via-slate-950 to-bluevora-dark text-slate-50 antialiased">
        <Navbar />
        <main className="mx-auto max-w-6xl px-4 pb-16 pt-24 md:pt-28">
          {children}
        </main>
      </body>
    </html>
  );
}

