import { Reveal } from "@/components/ui/Reveal";

const COL_A = [
  "Branding & Visual Identity",
  "Mobile App & Web Design",
  "User Experience Design",
  "Marketing",
  "Design Systems",
  "Website Development",
  "Blockchain / Decentralized Platforms",
];

const COL_B = [
  "Wireframing & User Testing",
  "Strategy & Design",
  "Prototyping",
  "E-commerce & Shopify",
  "CRM, CMS, Web Apps",
  "Web 3.0 Design",
  "Audit",
];

const COL_C = [
  "App Development",
  "Animation & Motion Design",
  "Accessibility",
  "AI design",
  "AR, XR Design",
  "SaaS",
];

function Col({ items }: { items: string[] }) {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li key={item}>
          <a
            href="#"
            className="text-[15px] text-ink/80 transition-colors hover:text-primary-blue"
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
}

export function ServiceTags() {
  return (
    <section className="mx-auto w-full max-w-[1200px] px-5 pb-16 sm:px-6 lg:px-8">
      <Reveal>
        <div className="rounded-card-lg bg-input-bg p-8 sm:p-12">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Col items={COL_A} />
            <Col items={COL_B} />
            <div>
              <Col items={COL_C} />
              <a
                href="#contact"
                className="mt-4 inline-flex items-center gap-2 text-[15px] text-ink/80"
              >
                Don&apos;t see it?{" "}
                <span className="font-semibold text-primary-blue">Ask us</span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-blue text-white">
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path
                      d="M4 12L12 4M12 4H5M12 4V11"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
