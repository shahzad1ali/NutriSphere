"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { Arrow, Check } from "@/components/icons";
import { Button, Container } from "@/components/ui";
import { SmartImage } from "@/components/ui/SmartImage";
import type { ImageAsset } from "@/lib/images";

const contactSlides: {
  image: ImageAsset;
  title: string;
  caption: string;
}[] = [
  {
    image: {
      src: "/nutrition/poultry.jpg",
      alt: "Poultry feeding in a farm setting",
      category: "species",
      fallbackIcon: "Chicken",
    },
    title: "Poultry nutrition",
    caption: "Practical nutrition support for thriving flocks.",
  },
  {
    image: {
      src: "/nutrition/poultrynutrti.jpg",
      alt: "Poultry nutrition and feed",
      category: "species",
      fallbackIcon: "Chicken",
    },
    title: "Feed with purpose",
    caption: "Thoughtful feeding strategies for every flock.",
  },
  {
    image: {
      src: "/nutrition/cow.jpg",
      alt: "Cattle grazing in a green pasture",
      category: "species",
      fallbackIcon: "Cow",
    },
    title: "Cattle & buffalo",
    caption: "Nutrition guidance shaped around herd needs.",
  },
  {
    image: {
      src: "/nutrition/goats.jpg",
      alt: "Goat in a green pasture",
      category: "species",
      fallbackIcon: "Sheep",
    },
    title: "Goats & sheep",
    caption: "Balanced support for small-ruminant systems.",
  },
  {
    image: {
      src: "/nutrition/aquacul.jpg",
      alt: "Fish swimming in an aquaculture system",
      category: "species",
      fallbackIcon: "Fish",
    },
    title: "Aquaculture",
    caption: "Nutrition for healthy aquatic production.",
  },
  {
    image: {
      src: "/nutrition/aquaculture.jpg",
      alt: "Aquaculture production facility",
      category: "species",
      fallbackIcon: "Fish",
    },
    title: "Aquaculture systems",
    caption: "Practical insights for aquatic feed programs.",
  },
  {
    image: {
      src: "/nutrition/petca.jpg",
      alt: "A person caring for a companion cat",
      category: "species",
      fallbackIcon: "Dog",
    },
    title: "Pet nutrition",
    caption: "Everyday nutrition for companion animals.",
  },
  {
    image: {
      src: "/nutrition/Equine.jpg",
      alt: "Horse in an outdoor paddock",
      category: "species",
      fallbackIcon: "Horse",
    },
    title: "Equine nutrition",
    caption: "Nutrition support for horses at every stage.",
  },
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
  const activeSlide = contactSlides[activeSlideIndex];

  useEffect(() => {
    if (prefersReducedMotion) return;

    const intervalId = window.setInterval(() => {
      setActiveSlideIndex((currentIndex) => (currentIndex + 1) % contactSlides.length);
    }, 4500);

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
          className="relative overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_top_left,_rgba(197,29,33,0.18),_transparent_32%),linear-gradient(135deg,#1d1d1f_0%,#111827_38%,#0b1220_100%)] px-5 py-10 text-white shadow-[0_30px_80px_rgba(15,23,42,0.24)] sm:px-10 sm:py-14 lg:px-14 lg:py-16"
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
          <div className="pointer-events-none absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="relative grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
            <div className="max-w-lg">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-400/30 bg-brand-500/10 px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-brand-200 backdrop-blur-sm">
                <span className="inline-block h-2 w-2 rounded-full bg-brand-300 shadow-[0_0_18px_rgba(252,165,165,0.9)]" />
                Start a conversation
              </div>
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
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white/10 text-brand-200 ring-1 ring-white/10">
                  <Arrow aria-hidden="true" className="size-5" />
                </span>
                Product details, consultation requests and general enquiries
              </div>
              <figure className="group relative mt-8 aspect-[4/3] w-full max-w-md overflow-hidden rounded-[2rem] border border-white/15 bg-white/5 p-1 shadow-[0_22px_60px_rgba(0,0,0,0.35)] ring-1 ring-white/10">
                <div className="relative size-full overflow-hidden rounded-[1.7rem]">
                  <AnimatePresence initial={false} mode="wait">
                    <motion.div
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute inset-0"
                      exit={{ opacity: 0, scale: 1.04 }}
                      initial={prefersReducedMotion ? false : { opacity: 0, scale: 1.02 }}
                      key={`${activeSlide.title}-${activeSlideIndex}`}
                      transition={{ duration: prefersReducedMotion ? 0 : 0.6, ease: "easeOut" }}
                    >
                      <SmartImage
                        asset={activeSlide.image}
                        className="size-full"
                        imageClassName="scale-100 object-center transition-transform duration-[4500ms] ease-out group-hover:scale-[1.04]"
                        sizes="(max-width: 1024px) 90vw, 420px"
                      />
                    </motion.div>
                  </AnimatePresence>
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/93 via-ink-950/20 to-ink-950/10"
                  />
                  <div className="absolute inset-x-5 top-5 flex items-center justify-between gap-3 sm:inset-x-6 sm:top-6">
                    <span className="rounded-full border border-white/20 bg-ink-950/30 px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-white shadow-sm backdrop-blur-md">
                      Nutrition by species
                    </span>
                    <span className="rounded-full border border-white/15 bg-ink-950/30 px-3 py-1.5 font-mono text-xs font-medium tabular-nums text-white/90 backdrop-blur-md">
                      {String(activeSlideIndex + 1).padStart(2, "0")} /{" "}
                      {String(contactSlides.length).padStart(2, "0")}
                    </span>
                  </div>
                  <AnimatePresence initial={false} mode="wait">
                    <motion.figcaption
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute inset-x-5 bottom-5 z-10 sm:inset-x-6 sm:bottom-6"
                      exit={{ opacity: 0, y: 6 }}
                      initial={prefersReducedMotion ? false : { opacity: 0, y: 6 }}
                      key={`${activeSlide.title}-caption-${activeSlideIndex}`}
                      transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
                    >
                      <span className="inline-block rounded-full border border-brand-300/30 bg-brand-500/15 px-2.5 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-brand-100 backdrop-blur-sm">
                        {activeSlide.title.split(" ")[0]}
                      </span>
                      <span className="mt-3 block font-heading text-2xl font-semibold tracking-[-0.035em] text-white sm:text-3xl">
                        {activeSlide.title}
                      </span>
                      <span className="mt-1.5 block max-w-xs text-sm leading-6 text-white/80">
                        {activeSlide.caption}
                      </span>
                    </motion.figcaption>
                  </AnimatePresence>
                </div>
              </figure>
              <div
                aria-label="Choose animal nutrition image"
                className="mt-4 flex max-w-md items-center justify-center gap-2"
                role="group"
              >
                {contactSlides.map((slide, index) => (
                  <button
                    aria-label={`Show ${slide.title}`}
                    aria-pressed={activeSlideIndex === index}
                    className="group/dot flex min-h-8 items-center justify-center px-0.5 focus-visible:rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-300"
                    key={`${slide.title}-${index}`}
                    onClick={() => setActiveSlideIndex(index)}
                    type="button"
                  >
                    <span
                      className={`h-1 rounded-full transition-all duration-300 ${
                        activeSlideIndex === index
                          ? "w-8 bg-brand-300 shadow-[0_0_18px_rgba(252,165,165,0.85)]"
                          : "w-2 bg-white/35 group-hover/dot:bg-white/70"
                      }`}
                    />
                  </button>
                ))}
              </div>
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
                    Your enquiry was sent to the Nutritech team. We will be in touch.
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
                      Please include practical nutrition and feeding details, not private medical records.
                      Contact a local nutritionist for immediate care.
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
