import fs from "node:fs";
import path from "node:path";

function listGalleryImages(): string[] {
  const dir = path.join(process.cwd(), "public", "gallery");
  try {
    return fs
      .readdirSync(dir)
      .filter((f) => /\.(jpe?g|png|webp|avif|gif)$/i.test(f))
      .sort()
      .map((f) => `/gallery/${f}`);
  } catch {
    return [];
  }
}

export default function Gallery() {
  const images = listGalleryImages();

  return (
    <section id="gallery" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-dune-950 via-ocean-950/30 to-dune-950" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-gorse-400/90">
            The Scene
          </p>
          <h2 className="font-display text-5xl text-dune-100 md:text-6xl">
            Gallery
          </h2>
        </div>

        {images.length === 0 ? (
          <div className="mx-auto max-w-2xl border border-dashed border-dune-100/20 bg-dune-900/30 p-12 text-center">
            <p className="text-dune-200/70">
              Drop photos into{" "}
              <code className="font-mono text-gorse-400">public/gallery/</code>{" "}
              and they'll show up here automatically.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {images.map((src, i) => (
              <div
                key={src}
                className={`group relative overflow-hidden bg-dune-900 ${
                  i % 7 === 0 ? "row-span-2 aspect-[3/4]" : "aspect-square"
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt=""
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-dune-950/40 to-transparent opacity-0 transition group-hover:opacity-100" />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
