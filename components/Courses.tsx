type Course = {
  name: string;
  designer: string;
  year: string;
  blurb: string;
  photo: string;
};

const courses: Course[] = [
  {
    name: "Bandon Dunes",
    designer: "David McLay Kidd",
    year: "1999",
    blurb:
      "The original. The course that started it all — fescue fairways tracing the bluffs above the Pacific.",
    photo: "/courses/bandon-dunes.jpg",
  },
  {
    name: "Pacific Dunes",
    designer: "Tom Doak",
    year: "2001",
    blurb:
      "Routinely ranked among the best courses on Earth. Minimalist design draped over a wild dunescape.",
    photo: "/courses/pacific-dunes.jpg",
  },
  {
    name: "Bandon Trails",
    designer: "Coore & Crenshaw",
    year: "2005",
    blurb:
      "The inland one — meadows, forest, and dunes. A wholly different test from the coastal three.",
    photo: "/courses/bandon-trails.jpg",
  },
  {
    name: "Old Macdonald",
    designer: "Doak & Urbina",
    year: "2010",
    blurb:
      "A tribute to C.B. Macdonald's template holes. Massive greens. Endless options. Pure links.",
    photo: "/courses/old-macdonald.jpg",
  },
  {
    name: "Sheep Ranch",
    designer: "Coore & Crenshaw",
    year: "2020",
    blurb:
      "The cliff course. Nine holes hang on the edge of the Pacific. Greens carved into the bluffs.",
    photo: "/courses/sheep-ranch.jpg",
  },
];

export default function Courses() {
  return (
    <section id="courses" className="relative bg-dune-950 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-gorse-400/90">
            Five Links, One Resort
          </p>
          <h2 className="font-display text-5xl text-dune-100 md:text-6xl">
            The Courses
          </h2>
        </div>

        <div className="space-y-6">
          {courses.map((c, i) => (
            <div
              key={c.name}
              className={`group grid overflow-hidden border border-dune-100/15 bg-dune-900/30 md:grid-cols-2 ${
                i % 2 === 1 ? "md:[&>:first-child]:order-2" : ""
              }`}
            >
              <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.photo}
                  alt={c.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-dune-950/40 to-transparent" />
              </div>

              <div className="flex flex-col justify-center gap-4 p-8 md:p-12">
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-gorse-400/90">
                  <span>{c.designer}</span>
                  <span className="text-dune-300/40">·</span>
                  <span>{c.year}</span>
                </div>
                <h3 className="font-display text-4xl text-dune-100 md:text-5xl">
                  {c.name}
                </h3>
                <p className="max-w-md text-base leading-relaxed text-dune-200/80">
                  {c.blurb}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
