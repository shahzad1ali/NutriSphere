import type { Metadata } from "next";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { DirectoryListing } from "@/components/sections/DirectoryListing";
import { getProductCardImage, productPages } from "@/lib/data";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore selected Kemin animal nutrition products by species and category.",
  alternates: { canonical: "/products" },
};

export default function ProductDirectoryPage() {
  const entries = productPages.map((product) => ({
    slug: product.slug,
    title: product.title,
    category: product.category,
    description: product.tagline,
    image: getProductCardImage(product),
    href: product.keminUrl,
  }));
  const filters = [...new Set(productPages.map(({ category }) => category))];

  return (
    <main id="main-content" tabIndex={-1}>
      <PageHero
        breadcrumbs={[{ label: "Products" }]}
        description="Explore selected Kemin animal nutrition products. Product range and availability may vary by region."
        eyebrow="Kemin product information"
        title="Animal nutrition products"
      />
      <ProductShowcase />
      <DirectoryListing basePath="/products" entries={entries} filters={filters} />
    </main>
  );
}
