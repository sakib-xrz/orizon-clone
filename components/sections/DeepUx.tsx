import { GradientButton } from "@/components/ui/GradientButton";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";

export function DeepUx() {
  return (
    <section className="mx-auto w-full max-w-[1200px] px-5 py-12 sm:px-6 lg:px-8 lg:py-20">
      <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr] lg:items-end">
        <h2 className="text-4xl font-bold sm:text-5xl lg:text-[56px]">
          From{" "}
          <span className="bg-heading-gradient bg-clip-text text-transparent">
            simple apps
          </span>{" "}
          to
          enterprise-scale UX
        </h2>
        <p className="text-[15px] leading-relaxed text-muted lg:text-base">
          We don&apos;t just create screens – we design experiences optimized
          for conversion and retention.
        </p>
      </div>

      <Reveal className="mt-10">
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-card-lg bg-navy p-8 text-white sm:p-10">
            <SectionLabel light>Deep UX</SectionLabel>
            <h3 className="mt-6 max-w-sm text-2xl font-bold text-white sm:text-3xl">
              Multi-tenant B2B, workflow-heavy, data-dense products
            </h3>
            <div className="mt-8">
              <GradientButton href="#contact">Contact us</GradientButton>
            </div>
            <div className="mt-10 h-40 rounded-t-xl bg-white/5" />
          </div>

          <div className="overflow-hidden rounded-card-lg bg-[#0a0820] p-6">
            <div className="grid h-full grid-cols-6 gap-2">
              {Array.from({ length: 48 }).map((_, i) => {
                const color =
                  i % 7 === 0
                    ? "#ec4899"
                    : i % 5 === 0
                    ? "#6a4bff"
                    : "rgba(255,255,255,0.08)";
                return (
                  <div
                    key={i}
                    className="rounded-[3px]"
                    style={{ backgroundColor: color, height: 12 + (i % 4) * 6 }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
