import { FeaturedMedia } from "@/components/sections/FeaturedMedia";
import { FAQ } from "@/components/sections/FAQ";
import { Hero } from "@/components/sections/Hero";
import { MarketsGrid } from "@/components/sections/MarketsGrid";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { DoctorConsult } from "@/components/sections/DoctorConsult";
import { WhyNutritech } from "@/components/sections/WhyNutritech";
import { ResourcesPreview } from "@/components/sections/ResourcesPreview";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { Testimonials } from "@/components/sections/Testimonials";
import { PhotoGallery } from "@/components/sections/PhotoGallery";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1}>
      <Hero />
      <MarketsGrid />
      <FeaturedMedia />
      <ProductShowcase />
      <WhyNutritech />
      <DoctorConsult />
      <ResourcesPreview />
      <StatsStrip />
      <Testimonials />
      <PhotoGallery />
      <FAQ />
      <ContactCTA />
    </main>
  );
}
