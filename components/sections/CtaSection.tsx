"use client";

import { GradientButton } from "@/components/ui/GradientButton";
import { Reveal } from "@/components/ui/Reveal";

export function CtaSection() {
  return (
    <section id="contact" className="container-x py-12 lg:py-20">
      <Reveal>
        <div className="rounded-card-lg border border-ink/5 bg-white p-8 shadow-soft sm:p-12 lg:p-14">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-bold sm:text-5xl">
                Let&apos;s <span className="gradient-text">talk</span>
              </h2>
              <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-muted">
                Design done right and fast by people you can trust.
              </p>
              <GradientButton href="#contact" media="avatars" className="mt-7">
                Contact Us
              </GradientButton>
              <p className="mt-4 font-hand text-lg text-muted">
                * We also get booked fast 🔥
              </p>
            </div>

            <div className="aspect-[16/11] w-full overflow-hidden rounded-card bg-[linear-gradient(135deg,#e9e9f5,#d2d3ea)]">
              <div className="flex h-full items-center justify-center p-8">
                <div className="aspect-video w-full max-w-md rounded-lg bg-navy shadow-soft">
                  <div className="flex h-full items-center justify-center">
                    <span className="text-xs uppercase tracking-[0.2em] text-white/40">
                      Laptop mockup
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
