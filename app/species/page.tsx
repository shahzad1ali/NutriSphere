import type { Metadata } from "next";
import { DirectoryListing } from "@/components/sections/DirectoryListing";
import { speciesPages } from "@/lib/data";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Species",
  description: "Explore Nutritech animal-health information by species.",
  alternates: { canonical: "/species" },
};

export default function SpeciesDirectoryPage() {
  const entries = speciesPages.map((species) => ({
    slug: species.slug,
    title: species.title,
    category: ["pet-care", "equine"].includes(species.slug) ? "Companion animals" : "Farm animals",
    description: species.tagline,
    image: species.image,
  }));

  return (
    <main id="main-content" tabIndex={-1}>
      <PageHero
        breadcrumbs={[{ label: "Species" }]}
        description="Browse sample information and professional care resources for the animals you support."
        eyebrow="Animal health"
        title="Explore by species"
      />
      <DirectoryListing basePath="/species" entries={entries} filters={["Farm animals", "Companion animals"]} />
    </main>
  );
}
