# FZSHOTIT Portfolio Website

Built for Fauziyah (FZSHOTIT), London-based wedding, Nikkah, celebration and
content photographer. Next.js 14 (App Router) + TypeScript + Tailwind CSS +
Framer Motion.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. First `npm install` needs internet access once
(to install packages, and the build downloads the Bodoni Moda + Manrope font
files from Google Fonts and self-hosts them. That's completely normal, just needs a
working connection the first time).

```bash
npm run build && npm run start   # production build
```

## What's here

- **Pages**: Home, About, Portfolio (+ Weddings / Nikkah / Celebrations /
  Henna), Services, Testimonials, Contact.
- **Design direction**: rebuilt to match real Awwwards-winning photography
  sites rather than a generic "branded" template. That meant going
  near-monochrome (true near-black + warm off-white) with one accent
  (terracotta, nodding to henna) used sparingly, instead of a multi-color
  brand kit, letting the photography carry the color once real images are
  in. Typography is Unbounded (huge, confident, display only) + Hanken
  Grotesk (body, gets out of the way).
- **Custom cursor** (`Cursor.tsx`): grows and labels itself ("View", "Open")
  over interactive elements. Automatically disabled on touch devices.
- **Film grain** (`Grain.tsx`): a fixed, flickering noise overlay for
  cinematic texture, a real technique used across award-winning portfolio
  sites, generated from an inline SVG filter, no image asset needed.
- **Navigation**: deliberately minimal, logo + a single "Menu" button that
  opens a fullscreen numbered index, no inline nav bar. This is the
  convention almost every award-winning portfolio site uses, chrome stays
  out of the way of the work.
- **Filmstrip gallery** (`Filmstrip.tsx`): a horizontal drag-to-scroll
  gallery (mouse drag on desktop, native touch scroll on mobile) instead of
  a static grid, used on the homepage and portfolio page.
- **Preloader** (`Preloader.tsx`): homepage only, runs once per session.
  Cycles through flickering background words while a counter ticks to 100%,
  then wipes away into the hero.
- **Page transitions** (`Curtain.tsx`): a simple top-to-bottom wipe between
  routes.
- Fully responsive, keyboard-focus visible, fast.

## Adding real photography

Every gallery image right now is `<ImageFrame alt="..." />` with no `src`.
it renders as an elegant placeholder so the layout reads correctly before
real photos are dropped in. To swap one in:

```tsx
<ImageFrame src="/photos/wedding-01.jpg" alt="Description" ratio="aspect-[4/5]" />
```

Two ways to supply photos:
1. Drop files into `public/photos/` and reference them as `/photos/...`.
2. Use the existing Pixieset image URLs directly (already whitelisted in
   `next.config.js` under `images.remotePatterns`), e.g.
   `src="https://images-pw.pixieset.com/site/.../image-1500.jpeg"`.

## Wiring up the contact form

`ContactForm.tsx` is fully built (validation, states, animation) but the
submit handler currently just simulates a send. To make it real, the
cleanest option is a Next.js Route Handler at `src/app/api/contact/route.ts`
that forwards to an email service (Resend, Postmark) or a booking sheet.
happy to wire this once you tell me which service to use.

## Outstanding decisions for Olamide / Fauziyah

- Confirm final copy on Home/About (currently adapted from the existing
  site's real bio, lightly tightened for the new layout).
- Decide where the contact form should actually deliver to.
- Drop in real photography across all `ImageFrame` placeholders.
