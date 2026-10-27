"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  Arrow,
  Certificate,
  Leaf,
  Pill,
  Shield,
  Stethoscope,
  Vaccine,
} from "@/components/icons";
import { Badge, Button, Container } from "@/components/ui";
import { cn } from "@/lib/utils";

const orbitItems = [
  { icon: Pill, label: "Medicines", position: "left-1/2 top-0 -translate-x-1/2" },
  { icon: Vaccine, label: "Vaccines", position: "right-0 top-[24%]" },
  { icon: Stethoscope, label: "Consultation", position: "right-[8%] bottom-[8%]" },
  { icon: Leaf, label: "Nutrition", position: "left-[8%] bottom-[8%]" },
  { icon: Shield, label: "Prevention", position: "left-0 top-[24%]" },
];

const trustItems = [
  {
    icon: Pill,
    value: "04",
    label: "areas of care",
  },
  {
    icon: Certificate,
    value: "05",
    label: "animal groups",
  },
  {
    value: "01",
    label: "connected approach",
    icon: Shield,
  },
];

export function Hero() {
  // TODO: verify the cold-chain and veterinarian-approval statements before launch.
  const prefersReducedMotion = useReducedMotion();
  const motionTransition = (duration: number, delay = 0) => ({
    duration: prefersReducedMotion ? 0 : duration,
    delay: prefersReducedMotion ? 0 : delay,
  });
  const orbitTransition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 72, repeat: Infinity, ease: "linear" as const };

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden bg-[radial-gradient(ellipse_at_80%_35%,var(--color-brand-50),transparent_48%),linear-gradient(120deg,var(--color-white),var(--color-surface))] text-ink-900"
      id="home"
    >
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 size-full opacity-[0.07]"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1440 800"
      >
        <defs>
          <pattern
            height="116"
            id="molecule-grid"
            patternUnits="userSpaceOnUse"
            width="200"
          >
            <path
              d="m50 1 48 28v56l-48 28L2 85V29L50 1Zm100 56 48 28m-100 0 48-28m-48-28 52 28"
              fill="none"
              stroke="var(--color-ink-700)"
              strokeOpacity=".35"
              strokeWidth="1"
            />
            <circle cx="50" cy="1" r="2.5" fill="var(--color-ink-700)" fillOpacity=".45" />
            <circle cx="98" cy="29" r="2.5" fill="var(--color-ink-700)" fillOpacity=".45" />
            <circle cx="98" cy="85" r="2.5" fill="var(--color-ink-700)" fillOpacity=".45" />
            <circle cx="50" cy="113" r="2.5" fill="var(--color-ink-700)" fillOpacity=".45" />
            <circle cx="2" cy="85" r="2.5" fill="var(--color-ink-700)" fillOpacity=".45" />
            <circle cx="2" cy="29" r="2.5" fill="var(--color-ink-700)" fillOpacity=".45" />
          </pattern>
          <radialGradient id="hero-glow">
            <stop stopColor="var(--color-brand-500)" stopOpacity=".14" />
            <stop offset="1" stopColor="var(--color-brand-500)" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect fill="url(#molecule-grid)" height="100%" width="100%" />
        <circle cx="76%" cy="48%" fill="url(#hero-glow)" r="520" />
      </svg>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-56 size-[34rem] rounded-full bg-brand-200/35 blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-72 left-[24%] size-[38rem] rounded-full bg-brand-100/50 blur-[120px]"
      />

      <Container className="relative grid min-h-[42rem] items-center gap-8 py-16 sm:py-20 lg:min-h-[45rem] lg:grid-cols-[1fr_0.92fr] lg:gap-4 lg:py-20">
        <div className="relative z-10 max-w-2xl">
          <Badge className="border border-brand-200 bg-white text-brand-800" tone="primary">
            <span
              aria-hidden="true"
              className="size-1.5 rounded-full bg-brand-300"
            />
            Animal health, considered
          </Badge>
          <h1
            className="mt-7 max-w-2xl font-heading text-[2.8rem] font-semibold leading-[1.06] tracking-[-0.055em] text-ink-900 sm:text-6xl lg:text-[4.25rem]"
            id="hero-heading"
          >
            Science-Backed Care{" "}
            <span className="text-brand-600">for Every Animal</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-ink-600 sm:text-lg sm:leading-8">
            Veterinary medicines, vaccines and thoughtfully designed nutrition
            come together with professional guidance to support healthier
            animals at every stage.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              href="/products"
              size="lg"
              withArrow
            >
              Explore Medicines
            </Button>
            <Button
              className="border border-ink-200 bg-white text-ink-800 hover:border-brand-300 hover:bg-brand-50"
              href="/contact"
              size="lg"
              variant="secondary"
            >
              Book a Vet Consultation
            </Button>
          </div>

          <div
            aria-label="NutriSphere care overview"
            className="mt-10 grid max-w-xl grid-cols-3 border-t border-ink-200 pt-6"
            role="group"
          >
            {trustItems.map(({ icon: TrustIcon, label, value }, index) => (
              <div
                className={cn(
                  "flex flex-col gap-1.5 pr-2",
                  index > 0 && "border-l border-ink-200 pl-3 sm:pl-5",
                )}
                key={label}
              >
                <div className="flex items-center gap-2">
                  <TrustIcon
                    aria-hidden="true"
                    className="size-4 shrink-0 text-brand-600"
                  />
                  <span className="font-heading text-lg font-bold tracking-[-0.03em] text-ink-900 sm:text-xl">
                    {value}
                  </span>
                </div>
                <span className="text-[0.68rem] font-medium leading-4 text-ink-500 sm:text-xs">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div
          aria-label="Illustration of connected animal-health care"
          className="relative mx-auto flex min-h-[22rem] w-full max-w-[34rem] items-center justify-center sm:min-h-[29rem] lg:min-h-[36rem]"
          role="img"
        >
          <motion.div
            animate={
              prefersReducedMotion
                ? { opacity: 1 }
                : { opacity: 1, scale: 1, y: [0, -8, 0] }
            }
            className="relative flex aspect-square w-[min(76vw,25rem)] items-center justify-center sm:w-[min(70vw,29rem)]"
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.94 }}
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : {
                    opacity: motionTransition(0.7, 0.15),
                    scale: motionTransition(0.7, 0.15),
                    y: {
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }
            }
          >
            <div
              aria-hidden="true"
              className="absolute inset-[10%] rounded-full border border-ink-200"
            />
            <div
              aria-hidden="true"
              className="absolute inset-[19%] rounded-full border border-dashed border-brand-300/50"
            />
            <div className="relative grid size-[56%] place-items-center rounded-full border border-brand-200/80 bg-[radial-gradient(circle_at_32%_26%,var(--color-white),color-mix(in_srgb,var(--color-brand-100)_72%,transparent)_38%,color-mix(in_srgb,var(--color-brand-500)_13%,transparent)_78%)] shadow-xl">
              <div
                aria-hidden="true"
                className="absolute inset-[12%] rounded-full border border-white/90"
              />
              <div
                aria-hidden="true"
                className="absolute inset-[23%] rounded-full border border-brand-200/60"
              />
              <div               className="relative grid size-[38%] place-items-center rounded-full border border-white/90 bg-white/80 text-brand-700 shadow-lg backdrop-blur-sm">
                <Leaf aria-hidden="true" className="size-1/2" />
              </div>
              <svg
                aria-hidden="true"
                className="absolute inset-0 size-full"
                fill="none"
                viewBox="0 0 240 240"
              >
                <ellipse
                  cx="120"
                  cy="120"
                  rx="102"
                  ry="42"
                  stroke="var(--color-ink-700)"
                  strokeOpacity=".45"
                  strokeWidth="1"
                  transform="rotate(-35 120 120)"
                />
                <ellipse
                  cx="120"
                  cy="120"
                  rx="102"
                  ry="42"
                  stroke="var(--color-brand-500)"
                  strokeOpacity=".38"
                  strokeWidth="1"
                  transform="rotate(42 120 120)"
                />
                <circle cx="46" cy="55" r="4" fill="var(--color-brand-300)" />
                <circle cx="201" cy="157" r="3" fill="var(--color-ink-700)" fillOpacity=".55" />
              </svg>
            </div>

            <motion.div
              animate={prefersReducedMotion ? { rotate: 0 } : { rotate: 360 }}
              className="absolute inset-[1%] rounded-full"
              transition={orbitTransition}
            >
              {orbitItems.map(({ icon: OrbitIcon, label, position }) => (
                <span
                  className={cn(
                    "absolute grid size-11 place-items-center rounded-2xl border border-white bg-white text-brand-700 shadow-md backdrop-blur-md sm:size-14",
                    position,
                  )}
                  key={label}
                >
                  <OrbitIcon aria-hidden="true" className="size-5 sm:size-6" />
                </span>
              ))}
            </motion.div>

            <motion.div
              animate={
                prefersReducedMotion
                  ? { opacity: 1, x: 0 }
                  : { opacity: 1, x: 0, y: [0, -5, 0] }
              }
              className="absolute left-0 top-[15%] hidden rounded-2xl border border-ink-100 bg-white/95 px-4 py-3 shadow-lg backdrop-blur-xl sm:block"
              initial={prefersReducedMotion ? false : { opacity: 0, x: -12 }}
              transition={
                prefersReducedMotion
                  ? { duration: 0 }
                  : {
                      opacity: motionTransition(0.5, 0.55),
                      x: motionTransition(0.5, 0.55),
                      y: {
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }
              }
            >
              <div className="flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-xl bg-brand-50 text-brand-700">
                  <Vaccine aria-hidden="true" className="size-5" />
                </span>
                <span>
                  <span className="block text-xs font-semibold text-ink-900">
                    Veterinary product guidance
                  </span>
                  <span className="mt-1 block text-[0.65rem] text-ink-500">
                    Information for informed care
                  </span>
                </span>
              </div>
            </motion.div>

            <motion.div
              animate={
                prefersReducedMotion
                  ? { opacity: 1, x: 0 }
                  : { opacity: 1, x: 0, y: [0, 6, 0] }
              }
              className="absolute bottom-[12%] right-0 rounded-2xl border border-ink-100 bg-white/95 px-4 py-3 shadow-lg backdrop-blur-xl"
              initial={prefersReducedMotion ? false : { opacity: 0, x: 12 }}
              transition={
                prefersReducedMotion
                  ? { duration: 0 }
                  : {
                      opacity: motionTransition(0.5, 0.7),
                      x: motionTransition(0.5, 0.7),
                      y: {
                        duration: 5.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }
              }
            >
              <div className="flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-xl bg-brand-50 text-brand-700">
                  <Shield aria-hidden="true" className="size-5" />
                </span>
                <span>
                  <span className="block text-xs font-semibold text-ink-900">
                    Animal-health support
                  </span>
                  <span className="mt-1 block text-[0.65rem] text-ink-500">
                    Considered animal nutrition
                  </span>
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>

      <a
        aria-label="Scroll down to explore medicines"
        className="absolute bottom-5 left-1/2 z-10 hidden min-h-11 -translate-x-1/2 flex-col items-center justify-center gap-1 py-1 text-ink-500 transition hover:text-brand-700 md:flex"
        href="#services"
      >
        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.15em]">
          Scroll to explore
        </span>
        <Arrow
          aria-hidden="true"
          className="size-4 rotate-90 motion-safe:animate-bounce"
        />
      </a>
    </section>
  );
}
