type Round = {
  course: string;
  time: string;
  tag?: "AM" | "PM";
};

type Day = {
  date: string;
  weekday: string;
  rounds: Round[];
};

const days: Day[] = [
  {
    weekday: "Tuesday",
    date: "Jul 21",
    rounds: [{ course: "Travel Day · SLC → EUG → Bandon", time: "—" }],
  },
  {
    weekday: "Wednesday",
    date: "Jul 22",
    rounds: [
      { course: "Bandon Trails", time: "9:10 AM", tag: "AM" },
      { course: "Sheep Ranch", time: "3:40 PM", tag: "PM" },
    ],
  },
  {
    weekday: "Thursday",
    date: "Jul 23",
    rounds: [
      { course: "Sheep Ranch", time: "7:50 AM", tag: "AM" },
      { course: "Pacific Dunes", time: "2:50 PM", tag: "PM" },
    ],
  },
  {
    weekday: "Friday",
    date: "Jul 24",
    rounds: [
      { course: "Old Macdonald", time: "8:00 AM", tag: "AM" },
      { course: "Bandon Dunes", time: "1:40 PM", tag: "PM" },
    ],
  },
  {
    weekday: "Saturday",
    date: "Jul 25",
    rounds: [
      { course: "Old Macdonald", time: "8:40 AM", tag: "AM" },
      { course: "Bandon Dunes", time: "3:40 PM", tag: "PM" },
    ],
  },
  {
    weekday: "Sunday",
    date: "Jul 26",
    rounds: [{ course: "Travel Day · Bandon → EUG → SLC", time: "—" }],
  },
];

export default function Schedule() {
  return (
    <section id="schedule" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-dune-950 via-ocean-950/40 to-dune-950" />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-gorse-400/90">
            Tee Sheet
          </p>
          <h2 className="font-display text-5xl text-dune-100 md:text-6xl">
            The Schedule
          </h2>
          <p className="mt-4 text-sm text-dune-300/70">
            Eight rounds. All five courses.
          </p>
        </div>

        <div className="space-y-4">
          {days.map((d) => (
            <div
              key={d.date}
              className="grid grid-cols-[auto_1fr] gap-6 border border-dune-100/15 bg-dune-900/30 p-6 md:grid-cols-[160px_1fr] md:gap-8"
            >
              <div className="flex flex-col justify-center border-r border-dune-100/10 pr-6">
                <div className="text-xs uppercase tracking-[0.3em] text-gorse-400">
                  {d.weekday}
                </div>
                <div className="mt-1 font-display text-2xl text-dune-100 md:text-3xl">
                  {d.date}
                </div>
              </div>

              <div className="flex flex-col justify-center gap-3">
                {d.rounds.map((r, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-3">
                      {r.tag && (
                        <span className="border border-dune-100/20 px-2 py-0.5 font-mono text-[10px] tracking-wider text-dune-300/80">
                          {r.tag}
                        </span>
                      )}
                      <span className="font-display text-xl text-dune-100 md:text-2xl">
                        {r.course}
                      </span>
                    </div>
                    <span className="font-mono text-sm text-dune-200/70 md:text-base">
                      {r.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
