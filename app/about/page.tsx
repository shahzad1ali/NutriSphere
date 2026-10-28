import type { Metadata } from "next";
import { DescriptionBlock } from "@/components/sections/DescriptionBlock";
import { FeaturedMedia } from "@/components/sections/FeaturedMedia";
import { PhotoGallery } from "@/components/sections/PhotoGallery";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhyNutritech } from "@/components/sections/WhyNutritech";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "About Nutritech",
  description:
    "Learn how Nutritech brings animal-health products, practical resources and nutrition guidance together.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <PageHero
        breadcrumbs={[{ label: "About" }]}
        description="We connect animal-health information, practical resources and professional guidance to support informed care conversations."
        eyebrow="About Nutritech"
        title="Science and care, working together for animal wellbeing."
      />
      <FeaturedMedia />
      <PhotoGallery />
      <DescriptionBlock />
      <WhyNutritech />
      <StatsStrip />
      <Testimonials />
    </main>
  );
}
