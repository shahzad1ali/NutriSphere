import type { Metadata } from "next";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Contact Nutritech",
  description:
    "Contact Nutritech about feed additives, nutrition programs and animal-nutrition consultation.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <PageHero
        breadcrumbs={[{ label: "Contact" }]}
        description="Share your question and the animal or product it concerns. Our team will receive your enquiry by email."
        eyebrow="We are here to help"
        title="Talk with the Nutritech team"
      />
      <ContactCTA />
    </main>
  );
}
