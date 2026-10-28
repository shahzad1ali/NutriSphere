"use client";

import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import {
  Certificate,
  Flask,
  Package,
  Shield,
  Stethoscope,
  Truck,
} from "@/components/icons";
import { Container, SectionHeading } from "@/components/ui";
import { images } from "@/lib/images";
import { SmartImage } from "@/components/ui/SmartImage";

const advantages = [
  // TODO: Verify product formulation, cold-chain delivery, quality testing,
  // nationwide coverage and laboratory service claims before publishing.
  {
    title: "Nutrition-formulated",
    description:
      "Thoughtful product guidance shaped around animal needs and professional care.",
    figure: "01",
    figureLabel: "care conversation",
    icon: Stethoscope,
    href: "https://www.kemin.com/in/en/home",
    span: "lg:col-span-5",
    style: "bg-brand-50",
  },
  {
    title: "Cold-chain delivery",
    description:
      "Handling guidance helps teams consider product-specific storage needs.",
    figure: "Cold",
    figureLabel: "handling matters",
    icon: Truck,
    href: "https://www.kemin.com/in/en/home",
    span: "lg:col-span-7",
    style: "bg-white",
  },
  {
    title: "Quality-tested batches",
    description:
      "A focus on quality conversations from sourcing through product selection.",
    figure: "Batch",
    figureLabel: "level focus",
    icon: Certificate,
    href: "https://www.kemin.com/in/en/home",
    span: "lg:col-span-4",
    style: "bg-white",
  },
  {
    title: "Nationwide support",
    description:
      "Connect with the team to discuss animal-health needs and available support.",
    figure: "Wide",
    figureLabel: "service conversations",
    icon: Shield,
    href: "/species",
    span: "lg:col-span-4",
    style: "bg-brand-50",
  },
  {
    title: "Lab services",
    description:
      "Explore nutrition planning resources to support informed nutrition discussions.",
    figure: "Lab",
    figureLabel: "nutrition planning guidance",
    icon: Flask,
    href: "https://www.kemin.com/in/en/home",
    span: "lg:col-span-4",
    style: "bg-white",
  },
];

export function WhyNutritech() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="why-heading"
      className="bg-white py-20 sm:py-28"
      id="approach"
    >
      <Container>
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
          viewport={{ once: true, amount: 0.35 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <SectionHeading
            description="A connected approach brings professional guidance, practical product support and useful resources into one conversation."
            eyebrow="The Nutritech difference"
            id="why-heading"
            title="Support designed around animal wellbeing."
          />
        </motion.div>
        <motion.div
          className="mt-12 grid gap-4 lg:grid-cols-12"
          initial="hidden"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: prefersReducedMotion ? 0 : 0.08,
              },
            },
          }}
          viewport={{ once: true, amount: 0.12 }}
          whileInView="visible"
        >
          {advantages.map(
            ({
              description,
              figure,
              figureLabel,
              href,
              icon: AdvantageIcon,
              span,
              style,
              title,
            }) => (
              <motion.article
                className={`${span} ${style} group relative flex min-h-[16rem] flex-col overflow-hidden rounded-3xl border border-ink-100 p-6 transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-lg sm:p-8`}
                key={`${title}-${figure}`}
                variants={{
                  hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 18 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: prefersReducedMotion ? 0 : 0.42 },
                  },
                }}
              >
                <Link className="absolute inset-0 z-10 rounded-3xl focus-visible:outline-4 focus-visible:outline-brand-700" href={href}>
                  <span className="sr-only">Learn about {title}</span>
                </Link>
                <svg
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-2 -top-3 h-36 w-40 text-brand-200/60 transition-transform duration-500 group-hover:scale-110"
                  fill="none"
                  viewBox="0 0 160 140"
                >
                  <path d="M24 70 55 16h62l31 54-31 54H55L24 70Z" stroke="currentColor" />
                  <path d="m48 70 19-33h38l19 33-19 33H67L48 70Z" stroke="currentColor" />
                  <circle cx="24" cy="70" r="3" fill="currentColor" />
                  <circle cx="117" cy="16" r="3" fill="currentColor" />
                  <circle cx="148" cy="70" r="3" fill="currentColor" />
                  <circle cx="117" cy="124" r="3" fill="currentColor" />
                </svg>
                <span className="relative grid size-12 place-items-center rounded-2xl bg-white text-brand-700 shadow-sm">
                  <AdvantageIcon aria-hidden="true" className="size-6" />
                </span>
                <h3 className="relative mt-6 font-heading text-xl font-semibold tracking-[-0.035em] text-brand-900">
                  {title}
                </h3>
                <p className="relative mt-2 max-w-lg text-sm leading-6 text-ink-600">
                  {description}
                </p>
                <div className="relative mt-auto flex items-end justify-between gap-4 pt-5">
                  <span>
                    <span className="block font-heading text-2xl font-bold tracking-[-0.04em] text-brand-800">
                      {figure}
                    </span>
                    <span className="mt-0.5 block text-xs font-medium text-ink-500">
                      {figureLabel}
                    </span>
                  </span>
                  <Package
                    aria-hidden="true"
                    className="mb-1 size-5 text-brand-700/80 transition-transform group-hover:translate-x-1"
                  />
                </div>
              </motion.article>
            ),
          )}
        </motion.div>
        <p className="mt-4 text-xs leading-5 text-ink-500">
          Product availability, quality processes, delivery coverage and service
          details should be confirmed for each region.
        </p>
        <div className="mt-14 grid grid-cols-3 items-center gap-3 sm:gap-6" aria-label="Scenes from animal-health work">
          {[images.farm.farm1, images.lab.lab2, images.farm.farm3].map((image, index) => (
            <div className="relative mx-auto aspect-square w-full max-w-52 overflow-hidden [clip-path:polygon(25%_4%,75%_4%,100%_50%,75%_96%,25%_96%,0_50%)]" key={`${image.src}-${index}`}>
              <SmartImage asset={image} className="size-full" sizes="(max-width: 640px) 30vw, 180px" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
