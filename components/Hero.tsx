export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background: Bandon Dunes course photo with dark overlay */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/courses/bandon-dunes.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dune-950/80 via-dune-950/70 to-dune-950" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 50% 30%, rgba(15,31,38,0), rgba(21,17,13,0.6) 70%)",
          }}
        />
      </div>

      {/* Top nav */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-6 md:px-12">
        <div className="font-display text-xl tracking-widest text-dune-100/90">
          BANDON · MMXXVI
        </div>
        <div className="hidden gap-8 text-xs uppercase tracking-[0.3em] text-dune-200/70 md:flex">
          <a href="#itinerary" className="hover:text-gorse-400 transition">
            Itinerary
          </a>
          <a href="#schedule" className="hover:text-gorse-400 transition">
            Schedule
          </a>
          <a href="#courses" className="hover:text-gorse-400 transition">
            Courses
          </a>
          <a href="#roster" className="hover:text-gorse-400 transition">
            Roster
          </a>
          <a href="#gallery" className="hover:text-gorse-400 transition">
            Gallery
          </a>
        </div>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 flex min-h-[calc(100vh-96px)] flex-col items-center justify-center px-6 text-center">
        <p className="mb-6 text-xs uppercase tracking-[0.5em] text-gorse-400/90">
          July 21 — 26, 2026
        </p>
        <h1 className="mb-8 max-w-5xl text-balance font-display text-6xl font-medium leading-[0.95] md:text-8xl lg:text-9xl">
          The Boys at
          <br />
          <span className="italic text-gorse-400">Bandon Dunes</span>
        </h1>
        <p className="mb-12 max-w-xl text-balance text-base text-dune-200/80 md:text-lg">
          Five days. Eight rounds. All five courses at the greatest links resort
          on the continent.
        </p>
        <a
          href="#itinerary"
          className="group inline-flex items-center gap-3 border border-dune-100/30 px-8 py-4 text-xs uppercase tracking-[0.3em] text-dune-100 transition hover:border-gorse-400 hover:text-gorse-400"
        >
          The Trip
          <span className="transition group-hover:translate-x-1">→</span>
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-dune-200/40">
        <div className="h-12 w-px bg-gradient-to-b from-transparent to-dune-200/60" />
      </div>
    </section>
  );
}
