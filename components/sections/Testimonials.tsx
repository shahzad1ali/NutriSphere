"use client";

import { motion, useReducedMotion } from "motion/react";
import { useRef, useState } from "react";
import type { KeyboardEvent, PointerEvent } from "react";
import { Arrow } from "@/components/icons";
import { Container, SectionHeading } from "@/components/ui";
import { sampleTestimonials } from "@/lib/data";

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const pointerStart = useRef<number | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const activeTestimonial = sampleTestimonials[activeIndex];

  function move(direction: -1 | 1) {
    setActiveIndex((current) => {
      return (
        (current + direction + sampleTestimonials.length) %
        sampleTestimonials.length
      );
    });
  }

  function handleKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      move(1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      move(-1);
    }
  }

  function handlePointerDown(event: PointerEvent<HTMLElement>) {
    pointerStart.current = event.clientX;
  }

  function handlePointerUp(event: PointerEvent<HTMLElement>) {
    if (pointerStart.current === null) return;
    const distance = event.clientX - pointerStart.current;
    pointerStart.current = null;
    if (Math.abs(distance) < 40) return;
    move(distance < 0 ? 1 : -1);
  }

  return (
    <motion.section
      aria-labelledby="testimonials-heading"
      className="bg-white py-20 sm:py-28"
      id="stories"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.45 }}
      viewport={{ once: true, amount: 0.12 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <SectionHeading
            description="Sample reflections illustrating the kinds of conversations Nutritech aims to support."
            eyebrow="In their words"
            id="testimonials-heading"
            title="Care conversations that matter."
          />
          <div
            aria-label="Sample testimonials"
            aria-roledescription="carousel"
            className="touch-pan-y rounded-[2rem] bg-brand-50 p-6 sm:p-10"
            onKeyDown={handleKeyDown}
            onPointerCancel={() => {
              pointerStart.current = null;
            }}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            tabIndex={0}
          >
            <p aria-live="polite" className="sr-only">
              Sample {activeIndex + 1} of {sampleTestimonials.length}
            </p>
            <motion.figure
              animate={{ opacity: 1, x: 0 }}
              initial={prefersReducedMotion ? false : { opacity: 0, x: 10 }}
              key={activeTestimonial.name}
              transition={{ duration: prefersReducedMotion ? 0 : 0.22 }}
            >
              <blockquote className="mt-6 font-heading text-xl font-medium leading-[1.5] tracking-[-0.025em] text-brand-900 sm:text-2xl">
                “{activeTestimonial.quote}”
              </blockquote>
              <figcaption className="mt-7 flex flex-wrap items-center justify-between gap-4">
                <span>
                  <span className="block text-sm font-bold text-brand-900">
                    {activeTestimonial.name}
                  </span>
                  <span className="mt-1 block text-xs text-ink-600">
                    {activeTestimonial.role} · {activeTestimonial.species}
                  </span>
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-500">
                  Sample content
                </span>
              </figcaption>
            </motion.figure>
            <div className="mt-8 flex items-center justify-between border-t border-brand-200 pt-5">
              <div className="flex items-center gap-2" role="group" aria-label="Choose testimonial">
                {sampleTestimonials.map((testimonial, index) => (
                  <button
                    aria-current={index === activeIndex ? "true" : undefined}
                    aria-label={`Show sample testimonial ${index + 1}: ${testimonial.name}`}
                    className="grid size-11 place-items-center rounded-full focus-visible:outline-brand-700"
                    key={testimonial.name}
                    onClick={() => setActiveIndex(index)}
                    type="button"
                  >
                    <span
                      aria-hidden="true"
                      className={`size-2.5 rounded-full transition ${
                        index === activeIndex
                          ? "bg-brand-700 ring-4 ring-brand-100"
                          : "bg-brand-300 hover:bg-brand-500"
                      }`}
                    />
                  </button>
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  aria-label="Previous testimonial"
                  className="grid size-11 place-items-center rounded-xl border border-brand-200 text-brand-800 transition hover:bg-white focus-visible:outline-brand-700"
                  onClick={() => move(-1)}
                  type="button"
                >
                  <Arrow aria-hidden="true" className="size-4 rotate-180" />
                </button>
                <button
                  aria-label="Next testimonial"
                  className="grid size-11 place-items-center rounded-xl bg-brand-700 text-white transition hover:bg-brand-800 focus-visible:outline-brand-700"
                  onClick={() => move(1)}
                  type="button"
                >
                  <Arrow aria-hidden="true" className="size-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-5 text-right text-xs text-ink-500">
          Testimonials are fictional sample content for layout preview only.
        </p>
      </Container>
    </motion.section>
  );
}
