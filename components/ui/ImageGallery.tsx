"use client";

import { motion, useReducedMotion } from "motion/react";
import { useCallback, useState } from "react";
import { Arrow } from "@/components/icons";
import { AccessibleModal } from "@/components/ui/AccessibleModal";
import { SmartImage } from "@/components/ui/SmartImage";
import type { ImageAsset } from "@/lib/images";

type ImageGalleryProps = {
  images: readonly ImageAsset[];
  title: string;
  columns?: "masonry" | "row";
};

export function ImageGallery({
  images,
  title,
  columns = "masonry",
}: ImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const close = useCallback(() => setActiveIndex(null), []);
  const move = useCallback(
    (direction: -1 | 1) => {
      setActiveIndex((current) =>
        current === null ? null : (current + direction + images.length) % images.length,
      );
    },
    [images.length],
  );
  const activeImage = activeIndex === null ? null : images[activeIndex];

  return (
    <>
      <div
        className={
          columns === "masonry"
            ? "columns-2 gap-3 space-y-3 md:columns-3"
            : "grid grid-cols-3 gap-3"
        }
      >
        {images.map((image, index) => (
          <motion.button
            animate={{ opacity: 1, y: 0 }}
            aria-label={`Open image ${index + 1}: ${image.alt}`}
            className={`group relative mb-3 block w-full overflow-hidden rounded-2xl text-left ring-offset-2 transition hover:ring-2 hover:ring-brand-600 focus-visible:ring-2 focus-visible:ring-brand-700 ${columns === "masonry" && index % 3 === 1 ? "h-52 sm:h-64" : "h-40 sm:h-48"}`}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
            key={image.src ?? `${image.category}-${image.alt}-${index}`}
            onClick={() => setActiveIndex(index)}
            transition={{ duration: prefersReducedMotion ? 0 : 0.35, delay: prefersReducedMotion ? 0 : index * 0.04 }}
            type="button"
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <SmartImage
              asset={image}
              className="size-full transition-transform duration-500 group-hover:scale-105"
              imageClassName="transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 48vw, (max-width: 1024px) 31vw, 360px"
            />
          </motion.button>
        ))}
      </div>
      {activeImage && activeIndex !== null ? (
        <AccessibleModal
          className="max-w-5xl"
          onClose={close}
          onKeyDown={(event) => {
              if (event.key === "ArrowLeft") {
                event.preventDefault();
                move(-1);
              } else if (event.key === "ArrowRight") {
                event.preventDefault();
                move(1);
              }
          }}
          title={title}
        >
          <div className="relative">
            <div
              className="relative h-[65dvh] overflow-hidden rounded-2xl bg-ink-950"
              onTouchStart={(event) => {
                event.currentTarget.dataset.startX = String(event.touches[0]?.clientX ?? 0);
              }}
              onTouchEnd={(event) => {
                const start = Number(event.currentTarget.dataset.startX ?? 0);
                const delta = (event.changedTouches[0]?.clientX ?? start) - start;
                if (Math.abs(delta) > 50) move(delta > 0 ? -1 : 1);
              }}
            >
              <SmartImage
                asset={activeImage}
                className="size-full"
                imageClassName="object-contain"
                sizes="(max-width: 768px) 96vw, 80vw"
              />
            </div>
            {images.length > 1 ? (
              <>
                <button
                  aria-label="Previous image"
                  className="absolute left-2 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-xl bg-white text-brand-900 shadow-lg"
                  onClick={() => move(-1)}
                  type="button"
                >
                  <Arrow aria-hidden="true" className="size-5 rotate-180" />
                </button>
                <button
                  aria-label="Next image"
                  className="absolute right-2 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-xl bg-white text-brand-900 shadow-lg"
                  onClick={() => move(1)}
                  type="button"
                >
                  <Arrow aria-hidden="true" className="size-5" />
                </button>
              </>
            ) : null}
            <p aria-live="polite" className="mt-3 text-center text-sm text-ink-600">
              {activeImage.alt} · {activeIndex + 1} of {images.length}
            </p>
          </div>
        </AccessibleModal>
      ) : null}
    </>
  );
}
