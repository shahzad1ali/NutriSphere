"use client";

import { motion, useReducedMotion } from "motion/react";
import { Arrow } from "@/components/icons";
import { Badge, Container, SectionHeading } from "@/components/ui";
import { resourceArticles } from "@/lib/data";
import Link from "next/link";
import { SmartImage } from "@/components/ui/SmartImage";
import { images } from "@/lib/images";

export function ResourcesPreview() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="resources-heading"
      className="bg-brand-50 py-20 sm:py-28"
      id="resources"
    >
      <Container>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            description="Practical reading to help prepare for better conversations about animal health."
            eyebrow="Knowledge for better care"
            id="resources-heading"
            title="From Our Experts"
          />
          <Link
            className="group inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-brand-700"
            href="/library"
          >
            View all resources
            <Arrow
              aria-hidden="true"
              className="size-4 transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {resourceArticles.map((article, index) => (
            <motion.article
              className="group relative flex min-h-[28rem] flex-col overflow-hidden rounded-3xl border border-brand-100 bg-white shadow-md transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-lg"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              key={article.title}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.4,
                delay: prefersReducedMotion ? 0 : index * 0.08,
              }}
              viewport={{ once: true, amount: 0.2 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <Link className="absolute inset-0 z-10 rounded-3xl focus-visible:outline-4 focus-visible:outline-brand-700" href={article.href}>
                <span className="sr-only">Learn more: {article.title}</span>
              </Link>
              <div className="relative h-40 overflow-hidden">
                <SmartImage
                  asset={index === 0 ? images.products.nutrition : index === 1 ? images.products.feedAdditives : images.species.petCare}
                  className="size-full transition-transform duration-500 group-hover:scale-105"
                  imageClassName="transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
              <div className="flex items-center justify-between gap-3">
                <Badge>{article.category}</Badge>
                <span className="text-xs font-medium text-ink-500">
                  {article.readTime}
                </span>
              </div>
              <h3 className="mt-5 font-heading text-lg font-semibold leading-snug tracking-[-0.03em] text-brand-900">
                {article.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-ink-600">
                {article.description}
              </p>
              <span className="group mt-auto inline-flex min-h-11 items-center gap-2 pt-4 text-sm font-semibold text-brand-700">
                Learn More
                <Arrow
                  aria-hidden="true"
                  className="size-4 transition-transform group-hover:translate-x-1"
                />
              </span>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
