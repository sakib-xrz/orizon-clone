# Orizon Homepage — High-Fidelity Recreation

A responsive, animated recreation of the [orizon.co](https://www.orizon.co/)
homepage, built for **learning / portfolio practice only**.

> Legal note: This project recreates the *visual design* from observation. No
> copyrighted media (logos, photos, fonts, project imagery) from the original
> site is bundled — everything is reproduced as a code-generated placeholder.
> See [`public/README-ASSETS.md`](public/README-ASSETS.md) for the full list of
> placeholders and what to swap in if you have licensed assets.

## Tech stack

- **Next.js 16** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS v3** (design tokens extracted from the live site)
- **Framer Motion** — load, scroll-reveal, hover and slider animations
- **Lenis** — smooth scrolling
- Fonts via `next/font/google`: **Plus Jakarta Sans** (stand-in for the paid
  *Biennale*) + **Caveat** (handwritten note)

## Getting started

```bash
# from the orizon-clone/ directory
npm install
npm run dev
```

Then open <http://localhost:3000>.

```bash
npm run build   # production build (static export of the homepage)
npm run start   # serve the production build
```

## Project structure

```
orizon-clone/
├─ app/
│  ├─ layout.tsx        # fonts, metadata, smooth-scroll + reduced-motion provider
│  ├─ page.tsx          # composes all sections in order
│  ├─ globals.css       # tokens, gradient-text utility, reduced-motion rules
│  └─ icon.svg          # favicon (placeholder mark)
├─ components/
│  ├─ layout/           # Header, MobileMenu, Footer
│  ├─ sections/         # Hero, LogoStrip, FeaturedProjects, Engagements,
│  │                    # Testimonials, WhyOrizon, GetThingsDone, PeopleLove,
│  │                    # Services, ServiceTags, DeepUx, TrustedBy, CtaSection
│  ├─ ui/               # GradientButton, OrizonLogo, SectionLabel, AvatarStack,
│  │                    # Marquee, Reveal, ClientLogo
│  └─ providers/        # SmoothScrollProvider (Lenis + MotionConfig)
├─ public/README-ASSETS.md
├─ tailwind.config.ts   # colors, gradients, shadows, keyframes
└─ next.config.ts
```

## Design tokens (extracted from the live site)

| Token | Value |
| --- | --- |
| Ink / heading text | `#0f0928` |
| Muted body text | `#665f82` |
| Primary cyan base | `#007980` |
| Shape cyan | `#00AEB8` |
| Logo cyan / highlight | `#00F8FF` |
| Button border | `#8EFDFF` |
| Input / panel bg | `#f4f3f9` |
| Section backgrounds | navy `#0f0928`, cyan gradient, deep cyan `#007980` |

Buttons are gradient pills (`#007980 → #00AEB8 → #00F8FF`) with a cyan glow shadow and a
circular arrow that rotates on hover. Selected headings use a cyan tonal
`background-clip:text` gradient (`.gradient-text`).

## Accessibility & performance

- Semantic landmarks (`header`, `main`, `nav`, `footer`, `section`, `article`).
- `aria-label` / `aria-modal` / `role` on the menu, dialog and carousel controls.
- Visible `focus-visible` rings on all interactive elements.
- Animations use only `transform` / `opacity`.
- Respects `prefers-reduced-motion` (Lenis disabled + Framer Motion
  `MotionConfig reducedMotion="user"` + CSS fallback).
- Homepage is statically prerendered (`○ (Static)`), no console / hydration /
  TypeScript errors.

## Responsive breakpoints

Verified at Desktop (1440+), Laptop (1024–1366), Tablet (768–1023) and Mobile
(375–767). The desktop nav is hamburger-driven (matching the original); the
full-screen mobile menu opens from the right with numbered nav items.

---

## Pixel-perfect improvement checklist

Things that still need a **manual** touch to reach 1:1 fidelity:

1. **Font — Biennale (paid).** The original uses the commercial *Biennale*
   typeface. This build uses **Plus Jakarta Sans** (free) which is slightly
   wider, so the hero heading size/tracking were nudged to keep the 2-line wrap.
   License Biennale and swap it in `app/layout.tsx` for an exact match, then
   restore `text-[78px]` on the hero `h1`.
2. **Heading gradient.** The original fills headings with a *gradient image*
   (`Gradient Vector.webp`) via `background-clip:text`; this uses a CSS linear
   gradient. Drop in the real image for an exact gradient.
3. **Client logos.** Government of Canada, Western Digital, talent.com,
   Instantly, ZARA, TELUS and Venmo are trademarks → currently text stand-ins.
   Replace with licensed SVG logos in `components/ui/ClientLogo.tsx`.
4. **Photography & 3D.** Team photos, founder headshots/video thumbnails, the 3D
   Orizon logo render, project case-study covers and device mockups are
   placeholders (gradients/silhouettes). Swap with licensed media — see
   `public/README-ASSETS.md`.
5. **Project / service card imagery.** Featured-project and bento service cards
   use gradient backgrounds instead of the real cover art.
6. **Motion fine-tuning.** Easing/durations approximate the Webflow/GSAP feel
   (≈0.7s `cubic-bezier(0.22,1,0.36,1)` reveals, spring button hovers). Tune to
   match the original frame-for-frame if needed.
7. **Cookie-consent banner.** The original shows a cookie preferences modal;
   omitted here as non-visual chrome (add if required).
8. **Exact section rhythm.** Vertical spacing is matched closely but not to the
   pixel; fine-tune `py-*` values per section against the live site if you need
   exact parity.
