# Catering & Confectionery Landing Page

Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion + lucide-react.

## Before this goes live — replace everything in `lib/data.ts`

That one file drives the whole site. Nothing else needs touching for a content update:

- `business.name`, `whatsappNumber` (this is what the WhatsApp buttons link to — currently a fake number), `phoneDisplay`, `email`, `city`, `deliveryAreas`, `instagram`
- `testimonials` — currently placeholder quotes. Real testimonials with real names convert far better than generic ones.
- `menuCategories` — real prices. Guessed prices are worse than no prices.
- Every `<PhotoSlot label="..." />` across `components/*.tsx` is a dashed-border placeholder. Swap each for a real `<Image>` (see below) once you have photography — this is the single highest-leverage thing left to do.

## Adding real photos

1. Drop images in `/public/images/`, or host them (Supabase Storage, Cloudinary, etc.) and add that domain to `remotePatterns` in `next.config.js`.
2. Replace `<PhotoSlot label="..." />` with `next/image`:
   ```tsx
   import Image from "next/image";
   <Image src="/images/red-velvet.jpg" alt="Red velvet cake" fill className="object-cover rounded-2xl" />
   ```
   Keep the parent's `aspect-*` wrapper div — that's what controls the crop.

## Running locally

```bash
npm install
npm run dev
```

## Deploying (matches your existing Colab → GitHub → Vercel pattern)

1. Push this project to a new GitHub repo via your usual Colab Contents-API script (full-file overwrite, `get_sha()` first — same as your other repos). Suggested repo name: `ImperioKDB/<business-name>-landing`.
2. In Vercel: New Project → import that repo → framework auto-detects as Next.js → deploy. No env vars needed unless you wire the contact form to a real backend (see below).
3. Point the custom domain at Vercel once your friend buys one (Namecheap/Google Domains → Vercel's DNS instructions).
4. Update `siteUrl` in `app/layout.tsx` and `app/sitemap.ts`/`app/robots.ts` to the real domain — this is currently `https://example.com` and Open Graph/canonical tags will be wrong until you do.

## The contact form doesn't email anyone yet

Right now, submitting the inquiry form just opens WhatsApp pre-filled with what was typed — so nothing gets silently lost, but there's no database record. If you want submissions logged, the fastest option given you already use Supabase elsewhere: create a `leads` table and insert from a new `app/api/contact/route.ts`. Ask if you want that wired up.

## SEO strategy (condensed)

- **Structured data**: `FoodEstablishment` JSON-LD is already in `app/layout.tsx` — fill in real address/phone once known. Consider `Bakery` or `CateringService` type instead if that fits better once Google's guidance is checked at launch time.
- **Google Business Profile**: bigger lever than any on-page SEO for a local caterer. Claim/verify it, use the same NAP (name/address/phone) as the site, add the real photos here first — Google surfaces these in local pack results before organic search does.
- **Page speed**: `next/image` (once wired up) handles compression/lazy-loading automatically. Keep hero images under ~200KB each.
- **Local keywords**: title/description already target "`<city>` caterer", "small chops `<city>`" etc. — revisit once you know what people actually search (Google's Keyword Planner or just autocomplete in an incognito search).
- **Backlinks**: getting listed on Nigerian wedding-vendor directories and getting tagged by clients on Instagram will do more for ranking in month one than any meta tag.
- **Sitemap/robots**: already generated at `/sitemap.xml` and `/robots.txt` — submit the sitemap URL in Google Search Console after the domain is live.

## Conversion recommendations

- **WhatsApp is the primary conversion path** — every CTA routes there. Once the real number is in `lib/data.ts`, test every single button on an actual phone; a wrong country-code format silently breaks `wa.me` links.
- **Reply speed matters more than the page**: a beautifully designed page with a 6-hour WhatsApp reply time will convert worse than a plain page with a 5-minute reply time. Whoever owns the phone needs to know this is now a sales channel, not a personal chat.
- **Put a phone number to call, not just WhatsApp** — some corporate/event clients still prefer to call before a booking; the Contact section already includes this.
- **Real photos before real copy polish.** Right now every visual gap is a labeled placeholder, which is honest but converts at roughly 0%. This is the one item on this whole list to prioritize above the rest.
