"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { useCallback, useState } from "react";
import { Arrow } from "@/components/icons";
import { Container } from "@/components/ui";
import { AccessibleModal } from "@/components/ui/AccessibleModal";
import { SmartImage } from "@/components/ui/SmartImage";
import { images } from "@/lib/images";

export function FeaturedMedia() {
  const [open, setOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const close = useCallback(() => setOpen(false), []);

  return (
    <section aria-labelledby="featured-media-heading" className="bg-brand-50 py-20 sm:py-28">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            className="relative"
            initial={prefersReducedMotion ? false : { opacity: 0, x: -18 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.45 }}
            viewport={{ once: true, amount: 0.25 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <div className="absolute -bottom-4 -right-4 h-full w-full rounded-[2rem] bg-brand-200" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-xl">
              <SmartImage
                asset={images.farm.farm2}
                className="size-full"
                imageClassName="transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <button
                aria-label="Play NutriSphere farm care introduction"
                className="absolute inset-0 grid place-items-center bg-ink-950/15 transition hover:bg-ink-950/25 focus-visible:outline-white"
                onClick={() => setOpen(true)}
                type="button"
              >
                <span aria-hidden="true" className="grid size-16 place-items-center rounded-full border border-white/60 bg-white/90 pl-1 text-brand-900 shadow-xl transition hover:scale-105">
                  <svg fill="currentColor" height="22" viewBox="0 0 24 24" width="22">
                    <path d="M8 5.5v13l10-6.5z" />
                  </svg>
                </span>
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.45, delay: prefersReducedMotion ? 0 : 0.08 }}
            viewport={{ once: true, amount: 0.25 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.17em] text-brand-700">Care in context</p>
            <h2 className="mt-4 max-w-xl font-heading text-3xl font-semibold leading-tight tracking-[-0.04em] text-brand-900 sm:text-4xl" id="featured-media-heading">
              At NutriSphere, science meets farm care
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-ink-600">
              Animal health is shaped by the details of everyday care. We bring clear product information, practical resources and professional conversations together to help people make informed next steps.
            </p>
            <Link className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-xl border border-brand-800 px-5 text-sm font-semibold text-brand-900 transition hover:bg-brand-900 hover:text-white focus-visible:outline-brand-700" href="/species">
              Learn More
              <Arrow aria-hidden="true" className="size-4" />
            </Link>
            <Link className="ml-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-brand-800 hover:text-brand-900" href="/species">
              Explore species
              <Arrow aria-hidden="true" className="size-4" />
            </Link>
            <Link className="mt-3 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-brand-800 hover:text-brand-900" href="#gallery">
              View all gallery images
              <Arrow aria-hidden="true" className="size-4" />
            </Link>
          </motion.div>
        </div>
      </Container>
      {open ? (
        <AccessibleModal className="max-w-2xl" onClose={close} title="A closer look at animal care">
          <div className="relative aspect-video overflow-hidden rounded-2xl">
            <SmartImage asset={images.farm.farm2} className="size-full" sizes="(max-width: 768px) 96vw, 640px" />
            <div className="absolute inset-0 grid place-items-center bg-ink-950/45 p-6 text-center text-white">
              <p className="max-w-md text-base leading-7">
                Our farm-care film is in development. This space will feature verified NutriSphere stories when a video is available.
              </p>
            </div>
          </div>
          {/* TODO: Add the approved NutriSphere video URL. */}
        </AccessibleModal>
      ) : null}
    </section>
  );
}
