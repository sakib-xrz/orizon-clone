# Assets & legal notes

This is a **learning / portfolio recreation** of the visual design of
[orizon.co](https://www.orizon.co/). To stay legally safe, **no copyrighted
media from the original site is bundled**. Every brand asset, photo, logo and
3D render is reproduced as a visually-similar, code-generated placeholder
(inline SVG, CSS gradients, or silhouettes).

If you want a true pixel-for-pixel copy for private study, replace the
placeholders below with properly-licensed assets. Do **not** ship the original
copyrighted assets in a public/production build.

## What is a placeholder (and what to swap)

| Placeholder in code | Real asset on orizon.co | Where |
| --- | --- | --- |
| `components/ui/OrizonLogo.tsx` (generated SVG mark + "Orizon" wordmark) | Orizon brand logo / 3D logo render (trademark) | Header, Footer, Mobile menu |
| `app/icon.svg` (favicon) | Orizon favicon (trademark) | Browser tab |
| `components/ui/ClientLogo.tsx` (text stand-ins) | Government of Canada, Western Digital, talent.com, Instantly, ZARA, TELUS, Venmo logos (trademarks) | Logo strips |
| `components/ui/AvatarStack.tsx` (gradient silhouettes) | Team member / founder photos | Hero & CTA buttons |
| `FeaturedProjects.tsx` gradient cards | Project case-study cover images (Vivodyne, Travelwise, Instantly, Creek, etc.) | Featured projects |
| `Engagements.tsx` gradient device mockups | Phone / tablet product mockups | Engagements |
| `Testimonials.tsx` gradient cards | Founder video thumbnails (Sean Rad, Bryan Johnson, David Kalt) + company logos | Word on the street |
| `WhyOrizon.tsx` gradient block | Team group photo | Why Orizon |
| `PeopleLove.tsx` floating bubbles | Avatar + client-logo bubble composition | People love working with us |
| `Services.tsx` gradient bento cards | Service preview imagery | What we excel at |
| `DeepUx.tsx` grid graphic + block | Dashboard screenshot + wireframe graphic | Deep UX |
| `CtaSection.tsx` laptop block | Laptop mockup photo | Let's talk |

## Fonts

The original uses **Biennale** (a paid/commercial typeface). This recreation
uses **Plus Jakarta Sans** (free, via `next/font/google`) as the closest free
stand-in, plus **Caveat** for the handwritten "We get booked fast" note.
To match exactly, license Biennale and swap the font in `app/layout.tsx`.
