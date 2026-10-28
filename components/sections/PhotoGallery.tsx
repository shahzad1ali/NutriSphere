"use client";

import { motion, useReducedMotion } from "motion/react";
import { Container, SectionHeading } from "@/components/ui";
import { ImageGallery } from "@/components/ui/ImageGallery";
import { images } from "@/lib/images";

const galleryImages = [
  images.farm.farm1,
  images.lab.lab1,
  images.products.feedAdditives,
  images.lab.lab2,
  images.farm.farm3,
  images.lab.lab3,
  images.farm.farm4,
];

export function PhotoGallery() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section aria-labelledby="gallery-heading" className="bg-white py-20 sm:py-28" id="gallery">
      <Container>
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <SectionHeading
            description="A visual glimpse into the people, places and care conversations that shape animal health."
            eyebrow="People and practice"
            id="gallery-heading"
            title="Life at the Farm and Lab"
          />
        </motion.div>
        <div className="mt-10">
          <ImageGallery images={galleryImages} title="Life at the Farm and Lab" />
        </div>
      </Container>
    </section>
  );
}
