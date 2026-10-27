import type { Metadata } from "next";
import { DescriptionBlock } from "@/components/sections/DescriptionBlock";
import { FeaturedMedia } from "@/components/sections/FeaturedMedia";
import { PhotoGallery } from "@/components/sections/PhotoGallery";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhyNutriSphere } from "@/components/sections/WhyNutriSphere";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "About NutriSphere",
  description:
    "Learn how NutriSphere brings animal-health products, practical resources and veterinary guidance together.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <PageHero
        breadcrumbs={[{ label: "About" }]}
        description="We connect animal-health information, practical resources and professional guidance to support informed care conversations."
        eyebrow="About NutriSphere"
        title="Science and care, working together for animal wellbeing."
      />
      <FeaturedMedia />
      <PhotoGallery />
      <DescriptionBlock />
      <WhyNutriSphere />
      <StatsStrip />
      <Testimonials />
    </main>
  );
}
