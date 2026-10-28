import Link from "next/link";
import { ChevronDown } from "@/components/icons";
import { Container, SectionHeading } from "@/components/ui";

const questions = [
  {
    question: "How do I place an order?",
    answer:
      "Use the contact form to tell us which products or animal-health support you are looking for. Our team can follow up about availability, ordering steps and regional requirements.",
  },
  {
    question: "Do I need specialist guidance before choosing a feed additive?",
    answer:
      "Product suitability depends on species, life stage, feed formulation and local requirements. Discuss options with an animal nutritionist before making changes.",
  },
  {
    question: "How should feed additives and other products be stored?",
    answer:
      "Follow the storage instructions on the specific product label and any guidance from the supplier or nutrition professional. Requirements differ between products, so do not assume one storage range applies to all items.",
  },
  {
    question: "Where do you deliver?",
    answer:
      "Delivery availability depends on the destination and product. Contact our team with your region to ask about current service coverage and handling options.",
  },
  {
    question: "Can I speak with a nutritionist?",
    answer:
      "You can request a consultation using the form on this page. A nutrition professional can advise on whether a remote conversation is suitable or an in-person examination is needed.",
  },
  {
    question: "Are the products shown on this page available now?",
    answer:
      "Product examples shown here are sample catalog content only. Ask our team about real products, current availability, local authorization and product-specific information.",
  },
];

export function FAQ() {
  return (
    <section aria-labelledby="faq-heading" className="bg-white py-20 sm:py-28" id="faq">
      <Container className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
        <div>
          <SectionHeading
            description="Answers to common questions about getting started with animal-health support."
            eyebrow="Good to know"
            id="faq-heading"
            title="Frequently asked questions."
          />
          <p className="mt-6 text-sm leading-6 text-ink-600">
            Need guidance for a specific product or animal?{" "}
            <Link
              className="inline-flex min-h-11 items-center font-semibold text-brand-700 underline underline-offset-4"
              href="/contact"
            >
              Contact our team.
            </Link>
          </p>
        </div>
        <div className="divide-y divide-ink-100 border-y border-ink-100">
          {questions.map(({ answer, question }, index) => (
            <details className="group py-1" key={question}>
              <summary className="flex min-h-[4.5rem] cursor-pointer list-none items-center justify-between gap-4 py-4 font-heading text-base font-semibold text-brand-900 focus-visible:rounded-lg sm:text-lg [&::-webkit-details-marker]:hidden">
                <span className="flex items-start gap-4">
                  <span className="pt-0.5 text-xs font-semibold text-brand-700">
                    0{index + 1}
                  </span>
                  {question}
                </span>
                <ChevronDown
                  aria-hidden="true"
                  className="size-5 shrink-0 text-brand-700 transition-transform group-open:rotate-180"
                />
              </summary>
              <p className="max-w-2xl pb-5 pl-9 pr-8 text-sm leading-7 text-ink-600">
                {answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
