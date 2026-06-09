import { OrizonLogo } from "@/components/ui/OrizonLogo";
import { GradientButton } from "@/components/ui/GradientButton";

const COMPANY = [
  "Home",
  "Services",
  "Our Work",
  "Engagements",
  "Why Orizon",
  "Design Subscription",
  "Careers",
  "Blog",
];

const SERVICES_A = [
  "UX Design",
  "Landing Page Design",
  "Mobile App Design",
  "Design System & UI Kit",
  "Branding & Identity",
  "Web 3.0 Design & NFTs",
  "Presentation Design/Pitch Deck",
  "Apple Vision Pro UX Design",
  "Apple Watch App UX Design",
  "Figma Design Experts",
];

const SERVICES_B = [
  "Spatial Computing & XR Design",
  "Motion & Video Production",
  "Webflow Agency",
  "3D Art & 3D Motion",
  "E-commerce Design Agency",
  "UX design for AI Companies",
  "AI Prototype to Premium",
  "Marketing",
  "Discovery & Strategy",
  "Design Your Brand",
];

const SOCIALS = ["Dribbble", "X", "Instagram", "YouTube", "LinkedIn", "TikTok"];

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="text-sm font-bold text-ink">{title}</h4>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item}>
            <a
              href="#"
              className="text-sm text-muted transition-colors hover:text-primary-blue"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-ink/5 bg-white">
      <div className="container-x py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_2fr]">
          <div>
            <OrizonLogo />
            <p className="mt-6 max-w-xs text-[15px] leading-relaxed text-muted">
              We design world-class digital products and help startups &amp;
              Fortune 500 companies delight humans on the other side of the
              screen.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <GradientButton href="#contact" media="none" className="orizon-btn-footer">
                Contact Us
              </GradientButton>
              <GradientButton
                href="#"
                variant="outline"
                media="none"
                className="orizon-btn-footer"
              >
                Refer Us
              </GradientButton>
            </div>
            <div className="mt-8">
              <p className="text-sm font-bold text-ink">Diverse Supplier</p>
              <p className="text-xs text-muted">
                CAMSC Canadian Supplier Council
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <FooterCol title="Company" items={COMPANY} />
            <FooterCol title="Services" items={SERVICES_A} />
            <FooterCol title="Services" items={SERVICES_B} />
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-ink/5 pt-6 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span>© 2026 Orizon. All Rights Reserved.</span>
            <span className="flex gap-2">
              <a href="#" className="font-semibold text-primary-blue">
                EN
              </a>
              <a href="#" className="hover:text-ink">
                FR
              </a>
            </span>
            <a href="#" className="hover:text-ink">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-ink">
              Cookie Preferences
            </a>
            <a href="#" className="hover:text-ink">
              Terms
            </a>
          </div>
          <div className="flex items-center gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s}
                href="#"
                aria-label={s}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-ink/5 text-[10px] font-semibold text-muted transition hover:bg-primary-blue hover:text-white"
              >
                {s.slice(0, 2)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
