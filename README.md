# NutriSphere

A responsive veterinary and animal-health landing page built with Next.js App
Router, TypeScript, Tailwind CSS v4, React and Motion.

## Setup

Requirements: Node.js 20+ and npm.

```bash
npm install
cp .env.example .env.local
# Set NEXT_PUBLIC_SITE_URL to the verified public HTTPS origin.
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Check production output
with `npm run lint`, `npx tsc --noEmit` and `npm run build`.

## Project structure

```text
app/                 App Router layout, page, metadata and route UI
components/icons/    Reusable inline SVG icons
components/layout/   Header, footer, newsletter and floating contact actions
components/sections/ Landing-page sections
components/ui/       Buttons, image system, galleries, cards and headings
lib/data.ts          Sample product, species, guide and testimonial content
lib/images.ts        Typed local image assets and descriptive alt text
lib/site.ts          Canonical site-origin configuration
public/images/       Local animal-care, farm and laboratory image assets
```

## Local image assets

The supplied JPEGs are organized under `public/images/` and referenced through
the typed map in `lib/images.ts`. `SmartImage` displays a branded illustrated
fallback when a matching image is not available.

```text
farm/{cattle-blood-sampling,dairy-cow-care,goat-veterinary-care,poultry-health-check,poultry-house,veterinary-cattle-consultation}.jpeg
lab/{laboratory-team,microscope-technician}.jpeg
species/{pet-care-consultation,pet-care-exam,pet-clinic,veterinary-cat-exam}.jpeg
```

The additional cat-care photo is hosted locally and was downloaded from
Unsplash. See the [Unsplash License](https://unsplash.com/license).

## Design tokens

| Token | Value |
| --- | --- |
| Brand 50 | `#FFF1F2` |
| Brand 100 | `#FFE0E3` |
| Brand 200 | `#FDBFC6` |
| Brand 300 | `#F98C99` |
| Brand 400 | `#EE566A` |
| Brand 500 | `#C8102E` |
| Brand 600 | `#A90D27` |
| Brand 700 | `#8A0B20` |
| Brand 800 | `#6B0919` |
| Brand 900 | `#4A0611` |
| White | `#FFFFFF` |
| Ink 900 | `#1F2933` |
| Ink 700 | `#3E4C59` |
| Ink 500 | `#616E7C` |
| Ink 100 | `#E4E7EB` |
| Surface | `#F8F9FA` |
| Accent teal | `#2CB5BD` (thin lines and small details) |

Plus Jakarta Sans is used for headings and Inter for body text. Text on light
surfaces use dark ink/brand shades for contrast. Red is used for primary
actions and highlights, with teal reserved for small accents.

## Content and deployment TODOs

- Set `NEXT_PUBLIC_SITE_URL` to the verified public HTTPS domain. Until set,
  canonical metadata and sitemap URLs use the reserved `.example` placeholder
  and robots disallows crawling.
- Add the verified business address, service area, phone and contact details to
  the MedicalBusiness structured data and update the phone contact link.
- Confirm regional and clinical claims with qualified reviewers before
  publication.
- Homepage statistics show sample catalog counts, not verified business
  performance figures.
- Replace the fictional sample product catalog and sample testimonials with
  approved, current content; verify product availability, prescription status,
  labels and regional requirements.
- Replace species descriptions and six sample guides with reviewed,
  region-appropriate content.
- Add the approved video URL to the FeaturedMedia modal. Replace any supplied
  photos that are not licensed or approved for NutriSphere publication.
- Configure SMTP for contact-form delivery and connect the newsletter to an
  approved subscription service.
- Add verified social profile URLs and approved privacy and terms pages.
- Verify footer address, phone, WhatsApp, email and working hours; replace the
  sample "Vets online now" indicator with a real availability signal or remove it.
- Add approved Privacy, Terms, Cookie Settings and Animal Welfare Statement
  pages; those footer placeholders currently route to `/contact`.
- Replace contact-form routing in the floating Call, WhatsApp and Email actions
  with verified channel endpoints when those details are available.

The newsletter form remains a front-end demonstration and does not send or
store submitted data. Configure `SMTP_HOST`, `SMTP_PORT` (`465` or
`587`), `SMTP_USER`, `SMTP_PASSWORD`, and `CONTACT_TO_EMAIL` in `.env.local` to
enable the contact form email delivery. For Gmail, use an account-specific
app password stored only in `.env.local`; never commit it. Product and medical
information on this site must be reviewed for applicable regional regulations
before publication.
