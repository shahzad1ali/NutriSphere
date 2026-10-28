"use client";

import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/ui";

const approaches = [
  {
    number: "01",
    title: "Prevention",
    text: "Good preventive care begins with observation, appropriate hygiene and plans made with nutrition professionals for the animals and conditions involved.",
  },
  {
    number: "02",
    title: "Treatment",
    text: "When an animal needs attention, a qualified nutritionist can assess the situation and guide responsible, product-specific next steps.",
  },
  {
    number: "03",
    title: "Nutrition",
    text: "Feeding choices should reflect species, life stage, environment and management goals, with expert input when plans need to change.",
  },
];

export function DescriptionBlock() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section aria-labelledby="approach-heading" className="overflow-hidden bg-white py-20 sm:py-28">
      <Container>
        <div className="mb-12 max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.17em] text-brand-700">Our Approach</p>
          <h2 className="mt-4 font-heading text-3xl font-semibold tracking-[-0.04em] text-brand-900 sm:text-4xl" id="approach-heading">
            Better care grows from good conversations.
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3 md:gap-10">
          {approaches.map((item, index) => (
            <motion.article
              className="border-t border-brand-200 pt-5"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
              key={item.number}
              transition={{ duration: prefersReducedMotion ? 0 : 0.35, delay: prefersReducedMotion ? 0 : index * 0.08 }}
              viewport={{ once: true, amount: 0.3 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <span className="font-heading text-5xl font-semibold tracking-[-0.06em] text-brand-300">{item.number}</span>
              <h3 className="mt-4 font-heading text-xl font-semibold text-brand-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-ink-600">{item.text}</p>
            </motion.article>
          ))}
        </div>
        <div className="relative mt-14 rounded-2xl border-l-4 border-brand-600 bg-ink-50 px-6 py-7 text-ink-800 shadow-sm sm:px-10 sm:py-9">
          <p className="max-w-4xl font-heading text-lg font-medium leading-8 sm:text-2xl">
            “Informed animal care is a partnership between attentive people, useful knowledge and trusted nutrition expertise.”
          </p>
        </div>
      </Container>
    </section>
  );
}
