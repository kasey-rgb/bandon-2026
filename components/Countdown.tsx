"use client";

import { useEffect, useState } from "react";

const TARGET = new Date("2026-07-21T15:02:00-06:00"); // wheels up SLC, Mountain Time

function diff(now: Date) {
  const ms = TARGET.getTime() - now.getTime();
  const clamp = Math.max(ms, 0);
  const days = Math.floor(clamp / (1000 * 60 * 60 * 24));
  const hours = Math.floor((clamp / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((clamp / (1000 * 60)) % 60);
  const seconds = Math.floor((clamp / 1000) % 60);
  return { days, hours, minutes, seconds };
}

export default function Countdown() {
  const [time, setTime] = useState(() => diff(new Date()));
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const id = setInterval(() => setTime(diff(new Date())), 1000);
    return () => clearInterval(id);
  }, []);

  const cells = [
    { label: "Days", value: time.days },
    { label: "Hours", value: time.hours },
    { label: "Minutes", value: time.minutes },
    { label: "Seconds", value: time.seconds },
  ];

  return (
    <section className="border-y border-dune-100/10 bg-dune-950 py-20">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="mb-3 text-xs uppercase tracking-[0.4em] text-gorse-400/90">
          Wheels up
        </p>
        <h2 className="mb-12 font-display text-3xl text-dune-100 md:text-4xl">
          Time until Salt Lake → Eugene
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
          {cells.map((c) => (
            <div
              key={c.label}
              className="border border-dune-100/10 bg-dune-900/30 p-6 backdrop-blur-sm"
            >
              <div className="font-display text-5xl text-dune-100 md:text-6xl tabular-nums">
                {mounted ? String(c.value).padStart(2, "0") : "--"}
              </div>
              <div className="mt-2 text-xs uppercase tracking-[0.3em] text-dune-300/70">
                {c.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
