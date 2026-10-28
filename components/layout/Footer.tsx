import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import { connection } from "next/server";
import {
  Arrow,
  Chicken,
  Clock,
  Cow,
  Dog,
  Facebook,
  Fish,
  Horse,
  Instagram,
  Linkedin,
  MapPin,
  Mail,
  MessageCircle,
  PhoneCall,
  Sheep,
  Stethoscope,
} from "@/components/icons";
import type { IconProps } from "@/components/icons";
import { HexIcon } from "@/components/icons/HexIcon";
import { NewsletterSignup } from "@/components/layout/NewsletterSignup";
import { Container } from "@/components/ui";
import type { ComponentType } from "react";

type FooterLink = {
  label: string;
  href: string;
};

type SpeciesLink = FooterLink & {
  icon: ComponentType<IconProps>;
};

async function CurrentYear() {
  await connection();
  return <>{new Date().getFullYear()}</>;
}

const speciesLinks: SpeciesLink[] = [
  { label: "Poultry", href: "/species/poultry", icon: Chicken },
  { label: "Cattle", href: "/species/cattle", icon: Cow },
  { label: "Buffalo", href: "/species/buffalo", icon: Cow },
  { label: "Goats & sheep", href: "/species/goat-sheep", icon: Sheep },
  { label: "Aquaculture", href: "/species/aquaculture", icon: Fish },
  { label: "Pet care", href: "/species/pet-care", icon: Dog },
  { label: "Equine", href: "/species/equine", icon: Horse },
];

const solutionLinks: FooterLink[] = [
  { label: "Kemin Feed Additives", href: "https://www.kemin.com/in/en/home" },
  { label: "Poultry Nutrition", href: "https://www.kemin.com/in/en/home" },
  { label: "Cattle & Buffalo Nutrition", href: "https://www.kemin.com/in/en/home" },
  { label: "Aquaculture Nutrition", href: "https://www.kemin.com/in/en/home" },
];

const companyLinks: FooterLink[] = [
  { label: "Our approach", href: "/about" },
  { label: "Markets", href: "/species" },
  { label: "Contact", href: "/contact" },
];

const resourceLinks: FooterLink[] = [
  { label: "Knowledge library", href: "/library" },
  { label: "Farm & lab gallery", href: "/about#gallery" },
  { label: "FAQs", href: "/library#faq" },
];

const legalLinks: FooterLink[] = [
  { label: "Privacy", href: "/contact" },
  { label: "Terms", href: "/contact" },
  { label: "Cookie settings", href: "/contact" },
  { label: "Animal Welfare Statement", href: "/contact" },
];

function FooterNav({
  label,
  links,
  className,
}: {
  label: string;
  links: FooterLink[];
  className?: string;
}) {
  return (
    <nav aria-label={label} className={className ?? ""}>
      <h2 className="font-heading text-sm font-semibold text-white">
        {label}
      </h2>
      <ul className="mt-4 space-y-1">
        {links.map(({ href, label: linkLabel }) => (
          <li key={linkLabel}>
            <Link
              className="inline-flex min-h-11 items-center text-sm text-white/75 transition-colors duration-200 hover:text-brand-200 focus-visible:rounded-sm focus-visible:outline-brand-300"
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {linkLabel}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function Footer() {
  // TODO: Replace contact placeholders and social destinations with verified business details.
  return (
    <footer
      className="relative isolate mt-auto w-full overflow-hidden border-t-4 border-brand-500 bg-gradient-to-br from-ink-950 via-brand-900 to-ink-900 pb-0 pt-10 text-white sm:pt-14"
      id="site-footer"
    >
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 size-full text-white/[0.045]"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1440 900"
      >
        <defs>
          <pattern
            height="150"
            id="footer-molecule-pattern"
            patternUnits="userSpaceOnUse"
            width="190"
          >
            <path
              d="m48 1 42 24v48L48 97 6 73V25L48 1Zm94 54 42 24v48l-42 24-42-24V79l42-24Z"
              stroke="currentColor"
              strokeWidth="1.2"
            />
            <path d="m90 49 10 6m0 48 42 24m0-96-42 24" stroke="currentColor" />
            <circle cx="48" cy="1" r="2.5" fill="currentColor" />
            <circle cx="90" cy="25" r="2.5" fill="currentColor" />
            <circle cx="142" cy="55" r="2.5" fill="currentColor" />
          </pattern>
          <radialGradient id="footer-glow">
            <stop stopColor="var(--color-brand-500)" stopOpacity=".2" />
            <stop offset="1" stopColor="var(--color-brand-500)" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect fill="url(#footer-molecule-pattern)" height="100%" width="100%" />
        <circle cx="78%" cy="20%" fill="url(#footer-glow)" r="460" />
      </svg>

      <Container className="relative z-10">
        <div className="relative rounded-[1.75rem] border border-white/80 bg-white p-6 text-ink-900 shadow-xl shadow-black/15 sm:p-8 lg:p-10">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.17em] text-brand-700">
                Stay connected
              </p>
              <h2 className="mt-2 font-heading text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
                Healthy Animals. Stronger Farms.
              </h2>
              <p className="mt-2 max-w-lg text-sm leading-6 text-ink-600">
                Get occasional animal-health resources and practical updates from
                Nutritech.
              </p>
            </div>
            <NewsletterSignup />
          </div>
        </div>

        <div className="mt-12 grid gap-x-6 gap-y-10 border-b border-white/15 pb-10 sm:grid-cols-2 lg:mt-14 lg:grid-cols-12 lg:gap-x-5 xl:gap-x-7">
          <div className="sm:col-span-2 lg:col-span-3">
            <Link
              aria-label="Nutritech home"
              className="group inline-flex min-h-12 items-center gap-3 rounded-xl bg-white px-3 py-1 focus-visible:outline-brand-300"
              href="/"
            >
              <Image
                alt=""
                className="h-auto w-[142px]"
                height={107}
                src="/solutions/Nutritech.png"
                width={180}
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-6 text-white/75">
              Bringing animal-health knowledge, thoughtful products and
              professional care conversations closer together.
            </p>
            <div className="mt-5 flex gap-2" aria-label="Social channels">
              {/* TODO: Add links to verified Nutritech social profiles. */}
              {[
                { label: "Instagram profile forthcoming", Icon: Instagram },
                { label: "LinkedIn profile forthcoming", Icon: Linkedin },
                { label: "Facebook profile forthcoming", Icon: Facebook },
              ].map(({ Icon, label }) => (
                <span
                  aria-label={label}
                  className="grid size-11 place-items-center rounded-xl border border-white/15 bg-white/[0.06] text-white/80 transition duration-200 hover:-translate-y-1 hover:border-brand-300 hover:bg-brand-500/20 hover:text-white"
                  key={label}
                  role="img"
                  title={label}
                >
                  <Icon aria-hidden="true" className="size-4" />
                </span>
              ))}
            </div>

            <Link
              className="mt-7 flex max-w-sm items-center gap-3 rounded-2xl border border-white/15 bg-white/[0.06] p-4 transition hover:border-brand-300/60 hover:bg-white/10 focus-visible:outline-brand-300"
              href="/contact"
            >
              <span className="relative grid size-10 shrink-0 place-items-center rounded-xl bg-brand-500 text-white">
                <span
                  aria-hidden="true"
                  className="absolute right-1 top-1 size-2 rounded-full bg-white motion-safe:animate-pulse"
                />
                <Stethoscope aria-hidden="true" className="size-5" />
              </span>
              <span>
                <span className="block text-sm font-semibold text-white">
                  Find a Nutritionist
                </span>
                <span className="mt-1 block text-xs text-white/70">
                  Nutritionists online now
                </span>
                <span className="mt-1 block text-[0.65rem] text-brand-200">
                  Sample indicator · availability is not live
                </span>
              </span>
              <Arrow aria-hidden="true" className="ml-auto size-4 text-brand-200" />
            </Link>
          </div>

          <nav aria-label="Products by species" className="lg:col-span-2">
            <h2 className="font-heading text-sm font-semibold text-white">
              Products
            </h2>
            <ul className="mt-3 space-y-1">
              {speciesLinks.map(({ href, icon, label }) => (
                <li key={label}>
                  <Link
                    className="group/item flex min-h-11 items-center gap-2.5 rounded-lg text-sm text-white/75 transition-colors duration-200 hover:text-brand-200 focus-visible:outline-brand-300"
                    href={href}
                  >
                    <HexIcon
                      icon={icon}
                      variant="glass"
                      className="size-8 shrink-0 ring-1 ring-inset ring-white/15 transition-colors duration-200 group-hover/item:bg-brand-500 group-hover/item:text-white group-hover/item:ring-brand-500 group-focus-visible/item:bg-brand-500 group-focus-visible/item:text-white group-focus-visible/item:ring-brand-500"
                    />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <FooterNav
            className="lg:col-span-2"
            label="Solutions"
            links={solutionLinks}
          />

          <div className="grid grid-cols-2 gap-x-4 sm:col-span-2 lg:col-span-2 lg:grid-cols-1 lg:gap-8">
            <FooterNav label="Company" links={companyLinks} />
            <FooterNav label="Resources" links={resourceLinks} />
          </div>

          <section
            aria-labelledby="footer-contact-heading"
            className="group rounded-3xl border border-white/15 bg-white/[0.06] p-5 transition-colors duration-200 hover:border-brand-300/40 hover:bg-white/[0.09] sm:col-span-2 lg:col-span-3 lg:p-6"
          >
            <h2
              className="font-heading text-sm font-semibold text-white transition-colors duration-200 group-hover:text-brand-200"
              id="footer-contact-heading"
            >
              Contact
            </h2>
            <address className="mt-4 space-y-3 not-italic text-sm">
              <p className="flex gap-3 text-white/75">
                <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-brand-200" />
                <span>Business address to be confirmed</span>
              </p>
              <Link
                className="flex min-h-11 items-center gap-3 text-white/75 transition hover:text-brand-200 focus-visible:rounded-sm focus-visible:outline-brand-300"
                href="/contact"
              >
                <PhoneCall aria-hidden="true" className="size-4 shrink-0 text-brand-200" />
                Phone details forthcoming
              </Link>
              <Link
                className="flex min-h-11 items-center gap-3 text-white/75 transition hover:text-brand-200 focus-visible:rounded-sm focus-visible:outline-brand-300"
                href="/contact"
              >
                <MessageCircle aria-hidden="true" className="size-4 shrink-0 text-brand-200" />
                WhatsApp details forthcoming
              </Link>
              <Link
                className="flex min-h-11 items-center gap-3 text-white/75 transition hover:text-brand-200 focus-visible:rounded-sm focus-visible:outline-brand-300"
                href="/contact"
              >
                <Mail aria-hidden="true" className="size-4 shrink-0 text-brand-200" />
                Email details forthcoming
              </Link>
              <p className="flex gap-3 pt-1 text-white/75">
                <Clock aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-brand-200" />
                <span>Working hours to be confirmed</span>
              </p>
            </address>
            {/* TODO: Add verified address, phone, WhatsApp, email and working hours. */}
          </section>
        </div>

        <div
          aria-hidden="true"
          className="mt-8 h-px bg-white/15 sm:mt-10"
        />

        <div className="relative z-10 flex flex-col gap-6 pt-6 text-sm text-white/75 lg:flex-row lg:items-start lg:justify-between">
          <p className="max-w-3xl leading-6">
            Product availability, labeling and claims may vary by regional
            regulations. Always follow local nutrition guidance and approved
            product information.
          </p>
          <nav
            aria-label="Legal information"
            className="flex max-w-2xl flex-wrap gap-x-5 gap-y-1 lg:justify-end"
          >
            {/* TODO: Replace contact-page placeholders with approved legal pages and cookie preferences. */}
            {legalLinks.map(({ href, label }) => (
              <Link
                className="inline-flex min-h-11 items-center text-sm text-white/75 underline-offset-4 transition hover:text-brand-200 hover:underline focus-visible:rounded-sm focus-visible:outline-brand-300"
                href={href}
                key={label}
                title={`${label} information is forthcoming`}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="relative z-10 my-2 flex flex-col-reverse items-start justify-between gap-4 border-t border-white/15 pt-4 sm:flex-row sm:items-center">
          <p className="text-xs font-medium text-white/65">
            ©{" "}
            <span className="inline-block min-w-[2.5rem]">
              <Suspense fallback="…">
                <CurrentYear />
              </Suspense> 
            </span>{" "}
            Nutritech. All rights reserved.
          </p>
          <a
            aria-label="Back to top"
            className="group inline-flex min-h-11 items-center gap-2 self-end rounded-full border border-white/25 px-4 text-xs font-semibold text-white transition hover:border-brand-300 hover:bg-white/10 hover:text-brand-100 focus-visible:outline-brand-300 sm:self-auto"
            href="#main-content"
          >
            Back to top
            <span className="grid size-7 place-items-center rounded-full bg-white/10 transition-transform group-hover:-translate-y-0.5">
              <Arrow aria-hidden="true" className="size-4 -rotate-90" />
            </span>
          </a>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-[0.34em] left-1/2 z-0 -translate-x-1/2 select-none whitespace-nowrap font-heading text-[clamp(5rem,18vw,16rem)] font-bold leading-[0.8] tracking-[-0.075em] text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.055)]"
        >
          Nutritech
        </div>
      </Container>
    </footer>
  );
}
