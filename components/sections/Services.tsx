import { GradientButton } from "@/components/ui/GradientButton";
import { Reveal } from "@/components/ui/Reveal";

type Service = {
  title: string;
  desc: string;
  gradient: string;
  className: string;
};

const SERVICES: Service[] = [
  {
    title: "UI/UX Design",
    desc: "Design experiences that feel effortless, premium, and built to win loyalty.",
    gradient: "linear-gradient(165deg,#7b2ff7,#3a1063)",
    className: "lg:col-span-3 lg:row-span-2",
  },
  {
    title: "Landing Page Design",
    desc: "Turn first impressions into momentum with landing pages built to convert.",
    gradient: "linear-gradient(135deg,#5b4bff,#2b00d4)",
    className: "lg:col-span-5",
  },
  {
    title: "Spatial Computing Design, 3D & AR",
    desc: "Bring 3D and AR to life through experiences that feel fluid and real.",
    gradient: "linear-gradient(165deg,#2a2a32,#0a0a0f)",
    className: "lg:col-span-4 lg:row-span-2",
  },
  {
    title: "Design for AI, LLMs, NLP",
    desc: "Design AI experiences that go far beyond chat and feel clear in context.",
    gradient: "linear-gradient(135deg,#f24aa0,#b8268a)",
    className: "lg:col-span-5",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="mx-auto w-full max-w-[1200px] px-5 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="text-4xl font-bold sm:text-5xl">
          <span className="bg-heading-gradient bg-clip-text text-transparent">
            What
          </span>
          <br className="hidden sm:block" /> we excel at
        </h2>
        <div className="flex items-center gap-4">
          <GradientButton href="#services" variant="outline" className="px-5">
            View all services
          </GradientButton>
        </div>
      </div>

      <Reveal className="mt-10">
        <div className="grid gap-5 lg:grid-cols-12 lg:grid-rows-2">
          {SERVICES.map((s) => (
            <article
              key={s.title}
              className={`group relative flex min-h-[240px] flex-col justify-end overflow-hidden rounded-card p-7 text-white ${s.className}`}
              style={{ backgroundImage: s.gradient }}
            >
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
              <div className="relative">
                <h3 className="text-2xl font-bold">{s.title}</h3>
                <p className="mt-2 max-w-[34ch] text-sm leading-relaxed text-white/75">
                  {s.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
