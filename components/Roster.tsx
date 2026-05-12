const players = [
  { name: "Kasey Smith", photo: "/players/kasey.jpg" },
  { name: "Kaden Smith", photo: "/players/kaden.jpg" },
  { name: "Blake Webster", photo: "/players/blake.jpg" },
  { name: "Chase Dorius", photo: "/players/chase.jpg" },
];

export default function Roster() {
  return (
    <section id="roster" className="bg-dune-950 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-gorse-400/90">
            The Foursome
          </p>
          <h2 className="font-display text-5xl text-dune-100 md:text-6xl">
            The Roster
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {players.map((p) => (
            <div
              key={p.name}
              className="group relative overflow-hidden border border-dune-100/15 bg-dune-900/30 transition hover:border-gorse-400/40"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-ocean-800 to-dune-800">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.photo}
                  alt={p.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-dune-950 via-dune-950/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="font-display text-2xl text-dune-100">
                    {p.name}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
