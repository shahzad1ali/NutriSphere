"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { Arrow, Cow, Chicken, Package } from "@/components/icons";
import { Badge, Card, Container, SectionHeading } from "@/components/ui";
import { keminProducts, type ProductCategory } from "@/lib/data";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { SmartImage } from "@/components/ui/SmartImage";

const categories = Object.keys(keminProducts) as ProductCategory[];

const categoryIcons = {
  "Poultry Nutrition": Chicken,
  "Ruminant Nutrition": Cow,
} satisfies Record<ProductCategory, typeof Cow>;

export function ProductShowcase() {
  const [activeCategory, setActiveCategory] =
    useState<ProductCategory>("Ruminant Nutrition");
  const prefersReducedMotion = useReducedMotion();
  const products = keminProducts[activeCategory];

  function handleTabKeyDown(event: React.KeyboardEvent<HTMLButtonElement>) {
    const currentIndex = categories.indexOf(activeCategory);
    let nextIndex = currentIndex;

    if (event.key === "ArrowRight") nextIndex = (currentIndex + 1) % categories.length;
    else if (event.key === "ArrowLeft") {
      nextIndex = (currentIndex - 1 + categories.length) % categories.length;
    } else if (event.key === "Home") nextIndex = 0;
    else if (event.key === "End") nextIndex = categories.length - 1;
    else return;

    event.preventDefault();
    setActiveCategory(categories[nextIndex]);
    document.getElementById(`product-tab-${nextIndex}`)?.focus();
  }

  return (
    <motion.section
      aria-labelledby="products-heading"
      className="bg-white py-20 sm:py-28"
      id="services"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
      viewport={{ once: true, amount: 0.08 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <Container>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            description="Explore selected Kemin animal nutrition products and open their official product information."
            eyebrow="Explore our range"
            id="products-heading"
            title="Kemin nutrition, by species."
          />
          <p className="max-w-sm text-sm leading-6 text-ink-500">
            Product range and availability may vary by region. Check Kemin’s official product information.
          </p>
        </div>

        <div
          aria-label="Product categories"
          className="relative mt-10 flex gap-1 overflow-x-auto border-b border-brand-200 pb-px"
          role="tablist"
        >
          {categories.map((category, index) => {
            const selected = category === activeCategory;
            const CategoryIcon = categoryIcons[category];
            return (
              <button
                aria-controls="product-panel"
                aria-selected={selected}
                className={cn(
                  "relative inline-flex min-h-12 shrink-0 items-center gap-2 rounded-t-xl px-4 text-sm font-semibold transition focus-visible:outline-brand-700",
                  selected
                    ? "text-brand-900"
                    : "text-ink-500 hover:bg-white/60 hover:text-brand-800",
                )}
                id={`product-tab-${index}`}
                key={category}
                onClick={() => setActiveCategory(category)}
                onKeyDown={handleTabKeyDown}
                role="tab"
                tabIndex={selected ? 0 : -1}
                type="button"
              >
                <CategoryIcon aria-hidden="true" className="size-4" />
                {category}
                {selected ? (
                  <motion.span
                    className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-brand-600"
                    layoutId="product-tab-indicator"
                    transition={{
                      duration: prefersReducedMotion ? 0 : 0.22,
                    }}
                  />
                ) : null}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            aria-labelledby={`product-tab-${categories.indexOf(activeCategory)}`}
            className="grid gap-4 pt-6 sm:grid-cols-2 lg:grid-cols-3"
            id="product-panel"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
            key={activeCategory}
            role="tabpanel"
            transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
          >
            {products.map((product) => (
              <Card className="group relative flex min-h-[24rem] flex-col overflow-hidden p-0 transition hover:-translate-y-1 hover:border-brand-300" key={product.slug} interactive>
                <Link className="absolute inset-0 z-10 rounded-3xl focus-visible:outline-4 focus-visible:outline-brand-700" href={product.keminUrl} target="_blank" rel="noopener noreferrer">
                  <span className="sr-only">View {product.name} on Kemin’s website</span>
                </Link>
                <div className="relative h-36 overflow-hidden">
                  <SmartImage
                    asset={product.image}
                    className="size-full transition-transform duration-500 group-hover:scale-105"
                    imageClassName="transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
                <div className="flex min-h-[18rem] flex-col p-6">
                <div className="flex items-start justify-between gap-3">
                  <span className="grid size-11 place-items-center rounded-2xl bg-brand-50 text-brand-700">
                    <Package aria-hidden="true" className="size-5" />
                  </span>
                  <Badge
                    className="text-[0.65rem]"
                    tone="red"
                  >
                    Kemin product
                  </Badge>
                </div>
                <h3 className="mt-6 font-heading text-lg font-semibold tracking-[-0.03em] text-brand-900">
                  {product.name}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Badge tone="neutral">{product.species}</Badge>
                </div>
                <span className="mt-auto inline-flex min-h-11 w-fit items-center gap-2 pt-3 text-sm font-semibold text-brand-800">
                  View product details <Arrow aria-hidden="true" className="size-4" />
                </span>
                </div>
              </Card>
            ))}
          </motion.div>
        </AnimatePresence>
      </Container>
    </motion.section>
  );
}
