"use client";

import { Marquee } from "@/components/ui/Marquee";
import { ClientLogo, CLIENT_LOGOS } from "@/components/ui/ClientLogo";

export function LogoStrip() {
  return (
    <section className="border-y border-ink/5 py-10" aria-label="Trusted by">
      <div className="container-x">
        <Marquee>
          {CLIENT_LOGOS.map((logo) => (
            <div
              key={logo.name}
              className="flex h-10 items-center px-2 opacity-80 transition-opacity hover:opacity-100"
            >
              <ClientLogo name={logo.name} />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
