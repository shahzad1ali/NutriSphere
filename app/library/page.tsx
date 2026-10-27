import type { Metadata } from "next";
import { LibrarySection } from "@/components/sections/LibrarySection";
import { FAQ } from "@/components/sections/FAQ";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Knowledge Library",
  description: "Sample guides and resources for animal-health conversations.",
  alternates: { canonical: "/library" },
};

export default function LibraryIndexPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <PageHero
        breadcrumbs={[{ label: "Knowledge Library" }]}
        description="Practical sample guides for conversations about animal health, nutrition, and care."
        eyebrow="Knowledge for better care"
        title="Knowledge Library"
      />
      <LibrarySection />
      <FAQ />
    </main>
  );
}
