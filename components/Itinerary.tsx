const flights = [
  {
    leg: "Outbound",
    flight: "Delta DL4105",
    depart: { airport: "SLC", city: "Salt Lake City", time: "3:02 PM", date: "Tue, Jul 21, 2026" },
    arrive: { airport: "EUG", city: "Eugene", time: "4:02 PM", date: "Tue, Jul 21, 2026" },
  },
  {
    leg: "Return",
    flight: "Delta DL3708",
    depart: { airport: "EUG", city: "Eugene", time: "6:00 AM", date: "Sun, Jul 26, 2026" },
    arrive: { airport: "SLC", city: "Salt Lake City", time: "8:53 AM", date: "Sun, Jul 26, 2026" },
  },
];

export default function Itinerary() {
  return (
    <section id="itinerary" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-dune-950 via-ocean-950/40 to-dune-950" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-gorse-400/90">
            The Itinerary
          </p>
          <h2 className="font-display text-5xl text-dune-100 md:text-6xl">
            Flights & dates
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {flights.map((f) => (
            <div
              key={f.flight}
              className="group relative overflow-hidden border border-dune-100/15 bg-dune-900/40 p-8 backdrop-blur-sm transition hover:border-gorse-400/40"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.3em] text-gorse-400">
                  {f.leg}
                </span>
                <span className="font-mono text-xs text-dune-300/70">
                  {f.flight}
                </span>
              </div>

              <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
                <div>
                  <div className="font-display text-5xl text-dune-100">
                    {f.depart.airport}
                  </div>
                  <div className="mt-1 text-sm text-dune-300/80">
                    {f.depart.city}
                  </div>
                  <div className="mt-3 text-lg text-dune-100">
                    {f.depart.time}
                  </div>
                  <div className="text-xs text-dune-300/70">{f.depart.date}</div>
                </div>

                <div className="flex flex-col items-center text-dune-300/40">
                  <div className="text-2xl">✈</div>
                  <div className="mt-1 h-px w-12 bg-dune-300/30" />
                </div>

                <div className="text-right">
                  <div className="font-display text-5xl text-dune-100">
                    {f.arrive.airport}
                  </div>
                  <div className="mt-1 text-sm text-dune-300/80">
                    {f.arrive.city}
                  </div>
                  <div className="mt-3 text-lg text-dune-100">
                    {f.arrive.time}
                  </div>
                  <div className="text-xs text-dune-300/70">{f.arrive.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-sm text-dune-300/60">
          Five days on the Oregon coast. Bring waterproofs.
        </div>
      </div>
    </section>
  );
}
