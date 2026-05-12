type Spot = {
  name: string;
  location: string;
  cuisine: string;
  blurb: string;
};

const restaurants: Spot[] = [
  {
    name: "The Gallery",
    location: "Main Lodge",
    cuisine: "Italian · Breakfast",
    blurb:
      "Breakfast buffet by morning, Italian classics by night — pizzas and pastas with panoramic views of the original Bandon Dunes course.",
  },
  {
    name: "McKee's Pub",
    location: "Main Lodge",
    cuisine: "Pub Fare",
    blurb:
      "Scottish-style tavern. Burgers, pizzas, hearty pub food. Pacific Northwest microbrews and a deep single-malt list.",
  },
  {
    name: "Pacific Grill",
    location: "Pacific Dunes Clubhouse",
    cuisine: "Seafood",
    blurb:
      "On the second level of Pacific Dunes. The best seafood at the resort — book it for sunset views over the Pacific.",
  },
  {
    name: "Trails End",
    location: "Bandon Trails Clubhouse",
    cuisine: "Pacific Rim",
    blurb:
      "Asian fusion in the woods. A welcome change of pace from links-resort standards — open from first light to late.",
  },
  {
    name: "Ghost Tree Grill",
    location: "Old Macdonald Clubhouse",
    cuisine: "Steakhouse",
    blurb:
      "The biggest restaurant on property. High-end steakhouse — A5 wagyu, dry-aged cuts, the works.",
  },
  {
    name: "Sheep Ranch Clubhouse",
    location: "Sheep Ranch",
    cuisine: "Casual",
    blurb:
      "Grab-and-go burritos and snacks. Built for the turn — fuel up between nine and the cliffside back.",
  },
  {
    name: "Shorty's",
    location: "Practice Center",
    cuisine: "Mexican",
    blurb:
      "Quick-serve Mexican street fare. Tacos and burritos within walking distance of the warm-up range.",
  },
  {
    name: "Charlotte's",
    location: "Bandon Dunes Practice Center",
    cuisine: "BBQ",
    blurb:
      "Seasonal BBQ shack near the practice green. Ribs, brisket, cold drinks. Peak summer only.",
  },
];

const bars: Spot[] = [
  {
    name: "Bunker Bar",
    location: "Below the Lodge",
    cuisine: "Cigars · Spirits",
    blurb:
      "The late-night room. Cigars, whisky, card games, war stories — where every Bandon trip eventually ends up.",
  },
  {
    name: "Puffin Bar",
    location: "The Lodge",
    cuisine: "Cocktails · Lounge",
    blurb:
      "Casual lounge tucked into the lodge. Pre-dinner cocktails, post-round nightcaps.",
  },
  {
    name: "The Library Lounge",
    location: "The Inn",
    cuisine: "Cocktails · Speakeasy",
    blurb:
      "Off the lobby of The Inn. Quiet by day, speakeasy energy after dark.",
  },
];

function SpotCard({ s }: { s: Spot }) {
  return (
    <div className="group flex flex-col gap-3 border border-dune-100/15 bg-dune-900/30 p-6 transition hover:border-gorse-400/40 md:p-8">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-display text-2xl text-dune-100 md:text-3xl">
          {s.name}
        </h3>
        <span className="shrink-0 font-mono text-[10px] uppercase tracking-wider text-dune-300/60">
          {s.location}
        </span>
      </div>
      <div className="text-xs uppercase tracking-[0.3em] text-gorse-400/90">
        {s.cuisine}
      </div>
      <p className="text-sm leading-relaxed text-dune-200/80">{s.blurb}</p>
    </div>
  );
}

export default function Dining() {
  return (
    <section id="dining" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-dune-950 via-ocean-950/30 to-dune-950" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-gorse-400/90">
            Eat · Drink
          </p>
          <h2 className="font-display text-5xl text-dune-100 md:text-6xl">
            On Property
          </h2>
          <p className="mt-4 text-sm text-dune-300/70">
            Every restaurant and bar at Bandon Dunes.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="mb-6 text-xs uppercase tracking-[0.4em] text-dune-300/70">
            Restaurants
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {restaurants.map((s) => (
              <SpotCard key={s.name} s={s} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-6 text-xs uppercase tracking-[0.4em] text-dune-300/70">
            Bars & Lounges
          </h3>
          <div className="grid gap-4 md:grid-cols-3">
            {bars.map((s) => (
              <SpotCard key={s.name} s={s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
