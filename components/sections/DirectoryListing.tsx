"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { Arrow } from "@/components/icons";
import { Badge, Container } from "@/components/ui";
import { SmartImage } from "@/components/ui/SmartImage";
import type { ImageAsset } from "@/lib/images";

export type DirectoryEntry = {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: ImageAsset;
  href?: string;
};

export function DirectoryListing({
  entries,
  filters,
  basePath,
}: {
  entries: DirectoryEntry[];
  filters: string[];
  basePath: "/products" | "/species";
}) {
  const [active, setActive] = useState("All");
  const prefersReducedMotion = useReducedMotion();
  const visible = active === "All"
    ? entries
    : entries.filter((entry) => entry.category === active);

  return (
    <Container className="py-12 sm:py-16">
      <div aria-label={`Filter ${basePath.slice(1)}`} className="mb-8 flex gap-2 overflow-x-auto pb-2" role="group">
        {["All", ...filters].map((filter) => (
          <button
            aria-pressed={active === filter}
            className={`min-h-11 shrink-0 rounded-full border px-4 text-sm font-semibold transition ${active === filter ? "border-brand-900 bg-brand-900 text-white" : "border-brand-200 bg-white text-brand-900 hover:border-brand-600 hover:bg-brand-50"}`}
            key={filter}
            onClick={() => setActive(filter)}
            type="button"
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((entry, index) => (
          <motion.article
            className="group relative overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-md transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-lg"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
            key={entry.slug}
            transition={{ duration: prefersReducedMotion ? 0 : 0.35, delay: prefersReducedMotion ? 0 : index * 0.04 }}
            viewport={{ once: true, amount: 0.2 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <Link className="absolute inset-0 z-10 rounded-3xl focus-visible:outline-4 focus-visible:outline-brand-700" href={entry.href ?? `${basePath}/${entry.slug}`} rel={entry.href ? "noopener noreferrer" : undefined} target={entry.href ? "_blank" : undefined}>
              <span className="sr-only">{entry.href ? `View ${entry.title} on Kemin’s website` : `Explore ${entry.title}`}</span>
            </Link>
            <div className="relative h-52 overflow-hidden">
              <SmartImage asset={entry.image} className="size-full transition-transform duration-500 group-hover:scale-105" imageClassName="transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
            </div>
            <div className="p-6">
              <Badge>{entry.category}</Badge>
              <h2 className="mt-4 font-heading text-xl font-semibold text-brand-900">{entry.title}</h2>
              <p className="mt-2 text-sm leading-6 text-ink-600">{entry.description}</p>
              <span className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-brand-800">
                Explore <Arrow aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </motion.article>
        ))}
      </div>
    </Container>
  );
}
