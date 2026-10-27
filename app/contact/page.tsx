import type { Metadata } from "next";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Contact NutriSphere",
  description:
    "Contact NutriSphere about veterinary medicines, vaccines, nutrition and animal-health consultation.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <PageHero
        breadcrumbs={[{ label: "Contact" }]}
        description="Share your question and the animal or product it concerns. Our team will receive your enquiry by email."
        eyebrow="We are here to help"
        title="Talk with the NutriSphere team"
      />
      <ContactCTA />
    </main>
  );
}
