import { Marquee } from "@/components/ui/Marquee";
import { ClientLogo, CLIENT_LOGOS } from "@/components/ui/ClientLogo";
import { Reveal } from "@/components/ui/Reveal";

export function TrustedBy() {
  return (
    <section className="container-x py-12 lg:py-16">
      <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr] lg:items-end">
        <h2 className="text-4xl font-bold sm:text-5xl">
          <span className="gradient-text">Trusted by</span>
          <br className="hidden sm:block" /> awesome clients
        </h2>
        <p className="text-[15px] leading-relaxed text-muted lg:text-base">
          Not to brag, but a lot of hot startups and market leaders reach out
          &amp; touch base to commission our work.
        </p>
      </div>

      <Reveal className="mt-12 border-y border-ink/5 py-10">
        <Marquee>
          {CLIENT_LOGOS.map((logo) => (
            <div
              key={logo.name}
              className="flex h-10 items-center px-2 opacity-80"
            >
              <ClientLogo name={logo.name} />
            </div>
          ))}
        </Marquee>
      </Reveal>
    </section>
  );
}
