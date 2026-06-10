import { Reveal } from "@/components/ui/Reveal";

const COLS = [
  {
    title: "Fast-paced & no bullshit",
    body: "Forget a useless 80-slide presentation. We focus on design deliverables every week. And when we commit to a deadline, we make it happen. Always.",
  },
  {
    title: "We make the complex simple",
    body: "From neurotech companies to admin tools with intricate access policies, we understand your product and simplify it for the people who use it.",
  },
  {
    title: "Flexible collaboration & payments",
    body: "Whether you're starting from scratch and need an autonomous team or are looking for staff augmentation with a lot of collaboration, we've got you covered.",
  },
];

export function GetThingsDone() {
  return (
    <section className="mx-auto w-full max-w-[1200px] px-5 py-12 sm:px-6 lg:px-8 lg:py-16">
      <Reveal>
        <div className="overflow-hidden rounded-card-lg bg-[linear-gradient(135deg,#2b00d4,#3a28dc_60%,#4f4cff)] p-8 text-white sm:p-12 lg:p-16">
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <h2 className="max-w-md text-4xl font-bold text-white sm:text-5xl">
              We get things done, right &amp; fast
            </h2>
            <div className="aspect-[16/8] w-full rounded-card bg-white/10" />
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-3">
            {COLS.map((c) => (
              <div key={c.title}>
                <h3 className="text-xl font-bold text-white">{c.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-white/70">
                  {c.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t border-white/15 pt-6 text-sm text-white/80 sm:flex-row sm:items-center sm:gap-12">
            <span>
              <strong className="text-white">2-3x</strong> faster than internal
              design teams
            </span>
            <span>No big upfront payment. No commitment.</span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
