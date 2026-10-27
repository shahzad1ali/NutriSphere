"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { useMemo, useState } from "react";
import { Arrow } from "@/components/icons";
import { Badge, Container, SectionHeading } from "@/components/ui";
import { SmartImage } from "@/components/ui/SmartImage";
import { sampleGuides, type SampleGuide } from "@/lib/data";
import { cn } from "@/lib/utils";

const filters = ["All", "Poultry", "Cattle", "Aquaculture", "Pet Care", "Vaccines"] as const;
type GuideFilter = (typeof filters)[number];

export function LibrarySection({ headingAs = "h2" }: { headingAs?: "h1" | "h2" }) {
  const [active, setActive] = useState<GuideFilter>("All");
  const prefersReducedMotion = useReducedMotion();
  const guides = useMemo(
    () => active === "All"
      ? sampleGuides
      : sampleGuides.filter((guide: SampleGuide) => guide.category === active),
    [active],
  );

  return (
    <section aria-labelledby="library-heading" className="bg-white py-20 sm:py-28" id="library">
      <Container>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            className="[&>h1]:text-brand-500 [&>h2]:text-brand-500 [&>p:last-child]:text-ink-700"
            description="Explore practical sample guides for conversations about animal health, nutrition and care."
            eyebrow="Ideas for informed care"
            as={headingAs}
            id="library-heading"
            title="Knowledge Library"
          />
          <Link className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-brand-500 hover:text-brand-700" href="#faq">
            Frequently asked questions <Arrow aria-hidden="true" className="size-4" />
          </Link>
        </div>
        <div aria-label="Filter guides by topic" className="mt-8 flex gap-2 overflow-x-auto pb-2" role="group">
          {filters.map((filter) => (
            <button
              aria-pressed={active === filter}
              className={cn(
                "min-h-11 shrink-0 rounded-full border px-4 text-sm font-semibold transition focus-visible:outline-brand-700",
                active === filter
                  ? "border-brand-500 bg-brand-500 text-white"
                  : "border-brand-200 bg-white text-brand-500 hover:border-brand-500 hover:bg-brand-50",
              )}
              key={filter}
              onClick={() => setActive(filter)}
              type="button"
            >
              {filter}
            </button>
          ))}
        </div>
        <motion.div
          className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          layout
        >
          {guides.map((guide, index) => (
            <motion.article
              className="group relative overflow-hidden rounded-3xl border border-brand-100 bg-white shadow-md transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-lg"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
              key={guide.slug}
              layout
              transition={{ duration: prefersReducedMotion ? 0 : 0.3, delay: prefersReducedMotion ? 0 : index * 0.04 }}
              viewport={{ once: true, amount: 0.15 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <Link className="absolute inset-0 z-10 rounded-3xl focus-visible:outline-4 focus-visible:outline-brand-700" href={`/library/${guide.slug}`}>
                <span className="sr-only">Read guide: {guide.title}</span>
              </Link>
              <div className="relative h-48 overflow-hidden">
                <SmartImage asset={guide.image} className="size-full transition-transform duration-500 group-hover:scale-105" imageClassName="transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <Badge>{guide.category}</Badge>
                  <span className="text-xs font-medium text-ink-500">{guide.readTime}</span>
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold leading-snug text-brand-500">{guide.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink-700">{guide.description}</p>
                <span className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-brand-500 transition-colors duration-200 group-hover:text-brand-700">
                  Read Guide <Arrow aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
