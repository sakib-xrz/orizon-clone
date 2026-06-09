import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";

export function WhyOrizon() {
  return (
    <section className="container-x py-12 lg:py-16">
      <SectionLabel>Why Orizon</SectionLabel>
      <Reveal className="mt-6">
        <div className="overflow-hidden rounded-card-lg bg-navy p-8 text-white sm:p-12 lg:p-16">
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <h2 className="text-4xl font-bold text-white sm:text-5xl">
              We are a design leader
            </h2>
            <div className="aspect-[16/7] w-full overflow-hidden rounded-card bg-[linear-gradient(120deg,#1f1a4a,#2b1f6a)]">
              <div className="flex h-full items-end gap-2 p-4">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-full flex-1 rounded-xl bg-white/10"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-10 border-t border-white/10 pt-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h3 className="text-xl font-bold text-white">
                Designing world-class products &amp; brands
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-white/60">
                We&apos;ve helped top startups and other enterprises turn their
                ideas and goals into refined products and brands that generate
                millions in revenue.
              </p>
              <p className="mt-6 text-4xl font-bold text-white">
                10M+ <span className="text-base font-medium text-white/50">views</span>
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">
                Pushing boundaries &amp; influencing designers everywhere
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-white/60">
                Our designs are inspiring millions of people across social media
                and product teams. We shape new trends and push the boundaries.
              </p>
              <p className="mt-6 text-4xl font-bold text-white">
                200k <span className="text-base font-medium text-white/50">followers</span>
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
