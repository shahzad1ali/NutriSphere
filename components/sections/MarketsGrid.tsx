"use client";

import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import {
  Arrow,
  Chicken,
  Cow,
  Dog,
  Fish,
  Horse,
  Sheep,
} from "@/components/icons";
import { Container, SectionHeading } from "@/components/ui";
import { SmartImage } from "@/components/ui/SmartImage";
import { images } from "@/lib/images";

const markets = [
  {
    title: "Poultry",
    slug: "poultry",
    description:
      "Medicines, vaccines and nutrition support for healthy flock management.",
    icon: Chicken,
    image: images.species.poultry,
  },
  {
    title: "Cattle and Buffalo",
    slug: "cattle",
    description:
      "Everyday veterinary and nutrition essentials for large ruminants.",
    icon: Cow,
    image: images.species.cattle,
  },
  {
    title: "Goats and Sheep",
    slug: "goat-sheep",
    description:
      "Practical preventive care and feeding support for small ruminants.",
    icon: Sheep,
    image: images.species.goatSheep,
  },
  {
    title: "Aquaculture",
    slug: "aquaculture",
    description:
      "Animal-health resources for fish and aquatic production systems.",
    icon: Fish,
    image: images.species.aquaculture,
  },
  {
    title: "Pet Care",
    slug: "pet-care",
    description:
      "Thoughtful health and nutrition options for companion animals.",
    icon: Dog,
    image: images.species.petCare,
  },
  {
    title: "Equine",
    slug: "equine",
    description:
      "Veterinary care and nutritional support for horses and equines.",
    icon: Horse,
    image: images.species.equine,
  },
];

export function MarketsGrid() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section aria-labelledby="markets-heading" className="bg-white py-20 sm:py-28" id="markets">
      <Container>
        <div className="my-5 flex flex-col items-start gap-6 overflow-hidden rounded-[2rem] bg-brand-50 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7">
          <p className="max-w-lg text-sm leading-6 text-ink-600">
            Explore dedicated care information for the species and systems you support.
          </p>
          <div className="relative mr-10 h-36 w-full max-w-xs shrink-0">
            <div aria-hidden="true" className="absolute inset-0 translate-x-10 translate-y-10 rounded-2xl bg-brand-300" />
            <SmartImage
              asset={images.farm.farm3}
              className="relative size-full rounded-2xl shadow-md"
              sizes="(max-width: 640px) 80vw, 320px"
            />
          </div>
        </div>
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <SectionHeading
              description="Different species have different needs. Find practical animal-health support shaped around the animals you care for."
              eyebrow="Who we support"
              id="markets-heading"
              title="Expertise for Every Species"
            />
            <Link
              className="group inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-800"
              href="/species"
            >
              View all species
              <Arrow aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: prefersReducedMotion ? 0 : 0.08,
              },
            },
          }}
          viewport={{ once: true, amount: 0.15 }}
          whileInView="visible"
        >
          {markets.map(({ description, icon: MarketIcon, image, slug, title }) => (
            <motion.article
              className="group relative overflow-hidden rounded-3xl border border-ink-100 bg-white transition duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-lg"
              key={title}
              variants={{
                hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: prefersReducedMotion ? 0 : 0.4 },
                },
              }}
            >
              <Link className="absolute inset-0 z-10 rounded-3xl focus-visible:outline-4 focus-visible:outline-brand-700" href={`/species/${slug}`}>
                <span className="sr-only">Explore {title} solutions</span>
              </Link>
              <div className="relative h-40 overflow-hidden">
                <SmartImage asset={image} className="size-full transition-transform duration-500 group-hover:scale-105" imageClassName="transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
              </div>
              <div className="relative p-6 sm:p-7">
                <span className="relative grid size-12 place-items-center rounded-2xl bg-brand-50 text-brand-700 transition duration-300 group-hover:rotate-[-6deg] group-hover:scale-110 group-hover:bg-brand-100">
                  <MarketIcon aria-hidden="true" className="size-6" />
                </span>
                <h3 className="relative mt-5 font-heading text-xl font-semibold tracking-[-0.035em] text-brand-900">{title}</h3>
                <p className="relative mt-3 min-h-12 text-sm leading-6 text-ink-600">{description}</p>
                <span className="group/link relative mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-brand-700">
                  View Solutions
                  <Arrow aria-hidden="true" className="size-4 transition-transform group-hover/link:translate-x-1" />
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
