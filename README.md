# Ash's Resorts

Timeshare rental platform — Koala-style homepage plus a login-gated owner
dashboard showing resort listings and rental payouts. Built with Next.js 15
(App Router), TypeScript, and Tailwind CSS v4. Authentication is handled by
Firebase Auth (email/password + Google sign-in). There is still no
database — resort, booking, and testimonial content lives in plain
TypeScript data files, ready to swap for a real backend later.

## Pages

- **Homepage** (`/`) — a close structural match to the Go‑Koala reference
  layout: sticky header with search pill, hero with search bar, exclusive
  deals carousel, "Timeshare Rentals Made Easy" section, trust/testimonials
  + press strip, featured stays carousel, featured destinations, upcoming
  events, experience/trust icons. On mobile, a fixed bottom nav bar
  replaces the desktop search pill + nav links (see "Dashboard visibility"
  below for what's in it).
- **Login page** (`/login`) — Koala-style owner sign-in, backed by real
  Firebase Authentication. Owners can sign in with email/password or
  "Continue with Google". A signed-in owner who revisits `/login` is
  redirected straight to `/dashboard`.
- **Dashboard** (`/dashboard`) — gated behind Firebase Auth. Signed-out
  visitors are redirected to `/login` (with a `callbackUrl` back to
  `/dashboard`); once signed in they land on their resort listings. Shows
  every resort booking as its own card (reference number, dates, status,
  payout), a "Full-Service · 90-Day Rental Guarantee" section, and guest
  testimonials.

## Dashboard visibility (client-requested behavior)

Per the client's decision, the Dashboard is **login-only** — it does not
appear in navigation until the owner signs in:

- **Signed out:** desktop nav shows "Owner sign in"; the mobile bottom bar
  shows Explore / Wishlist / Login.
- **Signed in:** desktop nav shows "Dashboard" (linking to `/dashboard`
  instead of `/login`); the mobile bottom bar shows Explore / Wishlist /
  **Dashboard**, with Dashboard sitting in the same slot beside Wishlist.

This is enforced two ways: the nav items themselves only render the
Dashboard link/label once Firebase confirms a signed-in user, and the
`/dashboard` route itself is guarded (see `src/components/RequireAuth.tsx`)
so it can't be reached directly by a signed-out visitor either.

Out of scope for this phase: booking engine, payment processing,
multi-listing search, renter-facing checkout, and a database (MongoDB is
intentionally not wired up yet — see "Notes for future phases").

## Stack

- Next.js 15 / App Router / TypeScript
- Tailwind CSS v4
- Firebase Authentication (email/password + Google) — client-side only,
  see `src/lib/firebase.ts` and `src/components/AuthProvider.tsx`
- No database — all content in `src/lib/*.ts`

## Getting started

1. Copy `.env.example` to `.env.local` and fill in your Firebase project's
   config values (see the checklist inside `.env.example` for exactly
   where to find them and which sign-in methods to enable).
2. Install dependencies and run the dev server:

   ```bash
   npm install
   npm run dev
   ```

3. Visit `http://localhost:3000`.

Without a valid `.env.local`, the homepage still renders fine, but
`/login` will fail to sign anyone in (Firebase will throw an
`auth/invalid-api-key` error) and `/dashboard` will keep redirecting back
to `/login` since no one can ever get authenticated.

## Updating content

Nothing is stored in a database. To change what's on the site, edit these
files directly:

- **Dashboard listings & payouts** → `src/lib/dashboardContent.ts`. Each
  resort has a `bookings` array; each booking gets its own reference
  number, status (`Paid` / `Pending` / `Expired`), date range, and payout
  amount, and renders as its own card on `/dashboard`. Scoped for 3–4
  resorts — currently 2 real bookings are in place (Marriott's Cypress
  Harbour ×2); the grid and totals already scale to 3 or 4 without code
  changes, and `rsort-img3.webp` / `rsort-img4.webp` are sitting in
  `public/images/` unused, ready for the next two resorts once their
  details come in.
- **Dashboard testimonials** → same file, `testimonials` array.
- **Homepage content** (listings, destinations, events, testimonials,
  footer links) → `src/lib/homeContent.ts`.
- **Resort photos** → `public/images/`. Ash's real Cypress Harbour photos
  are already in place (`rsort-img1.webp` through `rsort-img4.webp`);
  point new `image` fields at additional files dropped into that folder.
- **Branding** (colors/logo) → `src/app/globals.css` (color tokens at the
  top) and `src/app/layout.tsx` (fonts).
- **Guarantee section copy** → `src/components/GuaranteeSection.tsx`.

## Managing owner logins

Owner accounts are managed entirely in the Firebase Console — there is no
signup form in the app itself (this is an owner-only dashboard, not a
public account system):

- **Email/password:** Firebase Console → Authentication → Users → "Add
  user". Give the owner that email + a password to sign in with.
- **Google:** no setup needed per-owner — the first time someone signs in
  with "Continue with Google", Firebase creates their account
  automatically. If you want to restrict *which* Google accounts can reach
  the dashboard, that would need to be enforced with a small allow-list
  check (not currently implemented — flag it if you want this added).

## Project structure

```
src/
  app/
    page.tsx                    # Homepage — Koala-style layout
    login/page.tsx               # Firebase-backed owner sign-in
    dashboard/page.tsx           # Listings + payouts + guarantee + testimonials (auth-gated)
    pages/home/                  # Homepage-only sections
      Hero.tsx
      ListingCarousel.tsx / ResortCard.tsx
      WhatIsSection.tsx
      TrustSection.tsx
      FeaturedDestinations.tsx
      UpcomingEvents.tsx
      ExperienceIcons.tsx
      VacationersGuide.tsx (currently unused on the page)
      NewsletterBand.tsx (currently unused on the page)
      SiteFooter.tsx
  components/
    SiteHeader.tsx                # Sticky header w/ search pill (desktop) — Dashboard/Login link swaps by auth state
    MobileBottomNav.tsx           # Fixed bottom nav (mobile) — Dashboard/Login tab swaps by auth state
    AuthProvider.tsx              # Firebase auth state, exposed app-wide via useAuth()
    RequireAuth.tsx               # Client-side route guard used by /dashboard
    LoginForm.tsx                 # Firebase email/password + Google sign-in form
    DashboardHeader.tsx           # Shows signed-in owner's email + real sign-out
    ResortStub.tsx                 # One card per booking (dashboard)
    Testimonials.tsx
    GuaranteeSection.tsx
  lib/
    firebase.ts                   # Firebase app/auth initialization (client-only, lazy)
    types.ts                      # Resort / Booking / Testimonial types + formatCents
    dashboardContent.ts            # Dashboard data — resorts, bookings, testimonials
    homeContent.ts                # Homepage data
public/
  images/                          # Resort photos + illustrative placeholders
  videos/hero-video.mp4            # Hero background video
```

## Deployment

Any Next.js host works (Vercel is the path of least resistance). Set the
same `NEXT_PUBLIC_FIREBASE_*` environment variables from `.env.example` in
your host's environment variable settings — without them, sign-in will
fail in production the same way it does locally without `.env.local`.

Also add your production domain under Firebase Console → Authentication →
Settings → Authorized domains, or Google sign-in's popup will be rejected
on the live site (localhost is allowed by default, production domains are
not, and must be added by hand).

## Notes for future phases

Booking engine, payment processing/commission splitting, multi-listing
search, and a real database (MongoDB, to store resorts/bookings/testimonials
instead of the static TypeScript files) are not included here — keep them
scoped and quoted separately if the client wants to move off static content
later.
