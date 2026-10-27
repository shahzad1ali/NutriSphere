import type { Metadata } from "next";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { DirectoryListing } from "@/components/sections/DirectoryListing";
import { productPages } from "@/lib/data";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Products",
  description: "Browse sample animal-health product information by category.",
  alternates: { canonical: "/products" },
};

export default function ProductDirectoryPage() {
  const entries = productPages.map((product) => ({
    slug: product.slug,
    title: product.title,
    category: product.category,
    description: product.tagline,
    image: product.image,
  }));
  const filters = [...new Set(productPages.map(({ category }) => category))];

  return (
    <main id="main-content" tabIndex={-1}>
      <PageHero
        breadcrumbs={[{ label: "Products" }]}
        description="Illustrative product entries for review. Product availability and guidance vary by region."
        eyebrow="Product information"
        title="Browse our sample catalog"
      />
      <ProductShowcase />
      <DirectoryListing basePath="/products" entries={entries} filters={filters} />
    </main>
  );
}
