"use client";

import { motion, useReducedMotion } from "motion/react";
import { Arrow, Check, Clock, Stethoscope } from "@/components/icons";
import { Button, Container, SectionHeading } from "@/components/ui";

const steps = [
  {
    number: "01",
    title: "Describe the problem",
    description:
      "Share the animal, symptoms and what you have observed so far.",
  },
  {
    number: "02",
    title: "Talk to a vet",
    description:
      "Discuss your concerns and answer a few follow-up questions.",
  },
  {
    number: "03",
    title: "Get a prescribed plan",
    description:
      "Receive next-step guidance, including a prescription when appropriate.",
  },
];

export function DoctorConsult() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="consult-heading"
      className="overflow-hidden bg-brand-50 py-20 sm:py-28"
      id="consultation"
    >
      <Container className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.45 }}
          viewport={{ once: true, amount: 0.2 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <SectionHeading
            description="A focused veterinary conversation can help you organize what you are seeing and consider the right next step."
            eyebrow="Veterinary consultation"
            id="consult-heading"
            title="A clearer path from concern to care."
          />
          <ol className="mt-9 space-y-6">
            {steps.map((step) => (
              <li className="flex gap-4" key={step.number}>
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl border border-brand-200 bg-white font-heading text-sm font-bold text-brand-700">
                  {step.number}
                </span>
                <div className="pt-0.5">
                  <h3 className="font-heading text-base font-semibold text-brand-900">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-ink-600">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <Button className="mt-9" href="/contact" size="lg" withArrow>
            Request a Consultation
          </Button>
          <p className="mt-3 max-w-md text-xs leading-5 text-ink-500">
            Consultations do not replace an in-person examination when one is
            needed. In an emergency, contact a local veterinary provider.
          </p>
        </motion.div>

        <motion.div
          aria-label="Illustration of a veterinary consultation"
          className="relative mx-auto w-full max-w-lg"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
          role="img"
          transition={{
            duration: prefersReducedMotion ? 0 : 0.5,
            delay: prefersReducedMotion ? 0 : 0.1,
          }}
          viewport={{ once: true, amount: 0.2 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="absolute inset-8 rounded-[2.5rem] bg-brand-200/60 blur-3xl" />
          <div className="relative rounded-[2rem] border border-white bg-white p-4 shadow-xl sm:p-6">
            <div className="flex items-center justify-between border-b border-ink-100 px-2 pb-4">
              <div className="flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-2xl bg-brand-100 text-brand-800">
                  <Stethoscope aria-hidden="true" className="size-6" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-brand-900">
                    Veterinary consultation
                  </span>
                  <span className="mt-0.5 block text-xs text-ink-500">
                    Care conversation preview
                  </span>
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-2.5 py-1.5 text-[0.65rem] font-semibold text-brand-800">
                <span className="size-1.5 rounded-full bg-brand-500" />
                Available by request
              </span>
            </div>

            <div className="space-y-4 px-1 py-5 sm:px-2">
              <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-brand-100 px-4 py-3 text-sm leading-6 text-brand-900">
                My young goat has been eating less today. What details should I
                watch for?
              </div>
              <div className="flex max-w-[90%] gap-2.5">
                <span className="grid size-8 shrink-0 place-items-center rounded-xl bg-brand-900 text-white">
                  <Stethoscope aria-hidden="true" className="size-4" />
                </span>
                <div className="rounded-2xl rounded-bl-md bg-ink-50 px-4 py-3 text-sm leading-6 text-ink-700">
                  Note when it began, any changes in drinking, and other signs.
                  A veterinarian can help assess what to do next.
                </div>
              </div>
              <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-ink-100 bg-white px-3 py-2 text-xs text-ink-500">
                <Clock aria-hidden="true" className="size-3.5" />
                Example conversation only
              </div>
            </div>

            <div className="flex items-center gap-2 border-t border-ink-100 pt-4">
              <div className="flex min-h-11 flex-1 items-center rounded-xl bg-ink-50 px-4 text-sm text-ink-400">
                Describe what you have noticed...
              </div>
              <span className="grid size-11 place-items-center rounded-xl bg-brand-600 text-white">
                <Arrow aria-hidden="true" className="size-5" />
              </span>
            </div>
            <p className="mt-3 flex items-center justify-center gap-1.5 text-[0.65rem] text-ink-400">
              <Check aria-hidden="true" className="size-3" />
              A visual example; no message is being sent
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
