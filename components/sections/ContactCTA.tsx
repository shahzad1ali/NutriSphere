"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { Arrow, Check } from "@/components/icons";
import { Button, Container } from "@/components/ui";
import { SmartImage } from "@/components/ui/SmartImage";
import { images } from "@/lib/images";

const contactSlides = [
  { image: images.species.poultry, caption: "Practical support for poultry flocks." },
  { image: images.species.cattle, caption: "Thoughtful care for cattle herds." },
  { image: images.species.goatSheep, caption: "Support for goats and sheep." },
  { image: images.species.aquaculture, caption: "Care for aquatic animal systems." },
  { image: images.species.petCare, caption: "Veterinary care for companion animals." },
  { image: images.species.equine, caption: "Care and nutrition for equine health." },
];

function RequiredLabel({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: string;
}) {
  return (
    <label
      className="mb-1.5 block text-xs font-semibold text-ink-700"
      htmlFor={htmlFor}
    >
      {children}
      <span aria-hidden="true" className="text-brand-500"> *</span>
      <span className="sr-only"> (required)</span>
    </label>
  );
}

export function ContactCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [phone, setPhone] = useState("");
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const intervalId = window.setInterval(() => {
      setActiveSlideIndex((currentIndex) => (currentIndex + 1) % contactSlides.length);
    }, 3000);

    return () => window.clearInterval(intervalId);
  }, [prefersReducedMotion]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity() || submitting) return;

    setSubmitting(true);
    setError("");

    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result: { error?: string } = await response.json();

      if (!response.ok) {
        setError(result.error ?? "Your enquiry could not be sent. Please try again.");
        return;
      }

      setSubmitted(true);
      form.reset();
      setPhone("");
    } catch {
      setError("We could not reach the mail service. Please try again shortly.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section aria-labelledby="contact-heading" className="bg-gradient-to-b from-white via-brand-50/60 to-white py-14 sm:py-20" id="contact">
      <Container>
        <motion.div
          className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-900 via-ink-900 to-ink-950 px-5 py-10 text-white shadow-xl shadow-brand-900/15 sm:px-10 sm:py-14 lg:px-14 lg:py-16"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-36 size-96 rounded-full border border-white/10"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-8 -top-20 size-64 rounded-full border border-white/10"
          />
          <div className="relative grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
            <div className="max-w-lg">
              <p className="text-xs font-bold uppercase tracking-[0.17em] text-brand-300">
                Start a conversation
              </p>
              <h2
                className="mt-4 font-heading text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl"
                id="contact-heading"
              >
                Connect With Us
              </h2>
              <p className="mt-4 leading-7 text-white/75">
                Tell us a little about what you need. Our team can help direct
                your enquiry to the right animal-health support.
              </p>
              <div className="mt-6 flex items-center gap-3 text-sm text-white/80">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white/10 text-brand-200">
                  <Arrow aria-hidden="true" className="size-5" />
                </span>
                Product details, consultation requests and general enquiries
              </div>
              <figure className="relative mt-8 aspect-[4/3] w-full max-w-md overflow-hidden rounded-3xl border border-white/15 shadow-xl">
                <AnimatePresence initial={false} mode="wait">
                  <motion.div
                    animate={{ opacity: 1 }}
                    className="absolute inset-0"
                    exit={{ opacity: 0 }}
                    initial={prefersReducedMotion ? false : { opacity: 0 }}
                    key={contactSlides[activeSlideIndex].image.src}
                    transition={{ duration: prefersReducedMotion ? 0 : 0.45 }}
                  >
                    <SmartImage
                      asset={contactSlides[activeSlideIndex].image}
                      className="size-full"
                      imageClassName="object-center"
                      sizes="(max-width: 1024px) 90vw, 420px"
                    />
                  </motion.div>
                </AnimatePresence>
                <AnimatePresence initial={false} mode="wait">
                  <motion.figcaption
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-ink-950/90 via-ink-950/55 to-transparent px-5 pb-4 pt-12 text-sm font-semibold text-white"
                    exit={{ opacity: 0, y: 6 }}
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 6 }}
                    key={contactSlides[activeSlideIndex].caption}
                    transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
                  >
                    {contactSlides[activeSlideIndex].caption}
                  </motion.figcaption>
                </AnimatePresence>
              </figure>
            </div>

            <div className="rounded-3xl bg-white p-5 text-ink-900 shadow-xl sm:p-7">
              {submitted ? (
                <div
                  aria-live="polite"
                  className="flex min-h-[24rem] flex-col items-center justify-center text-center"
                  role="status"
                >
                  <span className="grid size-14 place-items-center rounded-2xl bg-brand-100 text-brand-800">
                    <Check aria-hidden="true" className="size-7" />
                  </span>
                  <h3 className="mt-5 font-heading text-xl font-semibold text-brand-900">
                    Thanks for reaching out.
                  </h3>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-ink-600">
                    Your enquiry was sent to the NutriSphere team. We will be in touch.
                  </p>
                  <Button
                    className="mt-6"
                    onClick={() => setSubmitted(false)}
                    size="sm"
                    variant="secondary"
                  >
                    Send another enquiry
                  </Button>
                </div>
              ) : (
                <form className="grid gap-4 sm:grid-cols-2" onSubmit={handleSubmit}>
                  <div>
                    <RequiredLabel htmlFor="contact-name">Name</RequiredLabel>
                    <input
                      autoComplete="name"
                      className="min-h-12 w-full rounded-xl border border-ink-200 bg-white px-3.5 text-sm text-ink-900 placeholder:text-ink-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
                      id="contact-name"
                      maxLength={100}
                      minLength={2}
                      name="name"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <RequiredLabel htmlFor="contact-phone">Pakistan mobile number</RequiredLabel>
                    <input
                      autoComplete="tel-national"
                      className="min-h-12 w-full rounded-xl border border-ink-200 bg-white px-3.5 text-sm text-ink-900 placeholder:text-ink-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
                      id="contact-phone"
                      aria-describedby="contact-phone-help"
                      inputMode="numeric"
                      maxLength={11}
                      minLength={11}
                      name="phone"
                      onChange={(event) => setPhone(event.currentTarget.value.replace(/\D/g, "").slice(0, 11))}
                      pattern="03[0-9]{9}"
                      placeholder="03123456789"
                      required
                      title="Enter an 11-digit Pakistan mobile number starting with 03."
                      type="tel"
                      value={phone}
                    />
                    
                  </div>
                  <div className="sm:col-span-2">
                    <RequiredLabel htmlFor="contact-species">Species</RequiredLabel>
                    <select
                      className="min-h-12 w-full rounded-xl border border-ink-200 bg-white px-3.5 text-sm text-ink-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
                      defaultValue=""
                      id="contact-species"
                      name="species"
                      required
                    >
                      <option disabled value="">
                        Select a species or group
                      </option>
                      <option>Cattle and buffalo</option>
                      <option>Goats and sheep</option>
                      <option>Poultry</option>
                      <option>Aquaculture</option>
                      <option>Pet care</option>
                      <option>Equine</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <RequiredLabel htmlFor="contact-message">Message</RequiredLabel>
                    <textarea
                      className="min-h-28 w-full resize-y rounded-xl border border-ink-200 bg-white px-3.5 py-3 text-sm text-ink-900 placeholder:text-ink-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
                      id="contact-message"
                      maxLength={1000}
                      minLength={10}
                      name="message"
                      placeholder="How can we help?"
                      required
                    />
                  </div>
                  <div aria-live="polite" className="sm:col-span-2" role="status">
                    {error ? (
                      <p className="mb-3 rounded-xl bg-brand-50 px-4 py-3 text-sm text-brand-800">
                        {error}
                      </p>
                    ) : null}
                    <Button
                      className="w-full"
                      disabled={submitting}
                      size="md"
                      type="submit"
                      withArrow
                    >
                      {submitting ? "Sending enquiry..." : "Send enquiry"}
                    </Button>
                    <p className="mt-3 text-center text-xs leading-5 text-ink-500">
                      Please do not include urgent medical information here.
                      Contact a local veterinarian for immediate care.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
