# GC Kuts — Giancarlo Colombo (Barber, Smithtown NY)

Personal-brand website for Giancarlo Colombo (@gckuts), an independent barber at
Mike's Custom Kuts. Single-page site whose one job is to get visitors booking.

**Stack:** Next.js 15 (App Router) · Tailwind CSS v4 · TypeScript · deploy on Vercel.

---

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

---

## How booking works

Every "Book" button opens an on-site **booking modal** (it doesn't bounce the
visitor to another site). By default the modal shows a branded panel — the
service list plus a "Continue to Booksy" button.

To make booking happen fully in-page: once Giancarlo sends his Booksy **website
widget** link, paste it into `BOOKSY_WIDGET_URL` in `lib/content.ts`. The modal
then loads the live Booksy booking flow in an iframe instead of the panel.
(He gets that link in the Booksy Biz app: Online Booking → Website Integration.)

How the button reaches the modal: each button fires a small global event
(`lib/booking.ts`); the single `<BookingModal>` in `app/page.tsx` listens for it.
That avoids passing props through every section just to open one modal.

---

## Project structure

```
gckuts-site/
├── app/
│   ├── layout.tsx        # fonts (Anton / Manrope / Space Mono), metadata
│   ├── page.tsx          # assembles sections + JSON-LD + <BookingModal>
│   └── globals.css       # Tailwind v4 import, design tokens (@theme), animations
├── components/
│   ├── Nav.tsx           # "use client" — sticky/scroll state + mobile menu
│   ├── Reveal.tsx        # "use client" — scroll-in animation wrapper
│   ├── BookButton.tsx    # "use client" — opens the booking modal
│   ├── BookingModal.tsx  # "use client" — the on-site booking overlay
│   ├── Hero.tsx  Services.tsx  About.tsx  Gallery.tsx
│   ├── Reviews.tsx  Location.tsx  Footer.tsx  MobileBookBar.tsx
│   └── FadeBars.tsx      # the signature fade motif
├── lib/
│   ├── content.ts        # ALL business content: services, prices, reviews, config
│   └── booking.ts        # the open-booking signal
└── public/               # portrait.jpg + cut-01/02/03.jpg (real photos)
```

**Editing content:** almost everything lives in `lib/content.ts`.

**Server vs. client:** every component is a Server Component (zero JS) by
default. Only `Nav`, `Reveal`, `BookButton`, and `BookingModal` are `"use client"`
because they use browser APIs. Keeping that boundary small is what keeps it fast.

---

## Before launch — checklist

Search the codebase for `PLACEHOLDER` to find these.

- [x] **Photos** — portrait + 3 cuts are in `/public` and wired into the Hero and
      gallery. Add more cuts anytime: drop files in `/public` and add them to the
      `cuts` array in `components/Gallery.tsx`.
- [ ] **Booksy widget** — paste his website-widget link into `BOOKSY_WIDGET_URL`
      (`lib/content.ts`) to make booking happen fully in-page.
- [ ] **Hours** — confirm real hours, edit `hours` in `lib/content.ts`.
- [ ] **Reviews** — testimonials in `lib/content.ts` are original blurbs based on
      his real review themes; swap in client-approved quotes.
- [ ] **Domain** — set the real URL in `metadataBase` (`app/layout.tsx`).
- [ ] **OG image** — add `/public/og.jpg` (1200×630) and uncomment `images` in metadata.

---

## Deploy to Vercel

1. Push this folder to a new GitHub repo.
2. vercel.com → New Project → import the repo. Framework auto-detects Next.js.
   No env vars needed.
3. Deploy. Add a custom domain later in Settings → Domains.
