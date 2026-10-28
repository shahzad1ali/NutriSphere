import type { Metadata } from "next";
import { DoctorConsult } from "@/components/sections/DoctorConsult";
import { MarketsGrid } from "@/components/sections/MarketsGrid";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Animal Health Solutions",
  description:
    "Explore animal-health support by species and learn about nutrition consultation options.",
  alternates: { canonical: "/solutions" },
};

export default function SolutionsPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <PageHero
        breadcrumbs={[{ label: "Solutions" }]}
        description="Explore information by species and connect with nutrition professionals for guidance shaped around your needs."
        eyebrow="Animal health solutions"
        title="Practical support for every animal in your care."
      />
      <MarketsGrid />
      <DoctorConsult />
    </main>
  );
}
