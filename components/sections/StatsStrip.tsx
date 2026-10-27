"use client";

import { useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Certificate, HeartPulse, Shield, Truck } from "@/components/icons";
import type { IconProps } from "@/components/icons";
import type { ComponentType } from "react";
import { Container } from "@/components/ui";

type Stat = {
  value: number;
  suffix: string;
  label: string;
  icon: ComponentType<IconProps>;
};

const stats: Stat[] = [
  { value: 1200, suffix: "+", label: "care conversations", icon: HeartPulse },
  { value: 18, suffix: "", label: "regions supported", icon: Truck },
  { value: 98, suffix: "%", label: "on-time deliveries", icon: Certificate },
  { value: 24, suffix: "/7", label: "access to guidance", icon: Shield },
];

function CountUp({
  value,
  suffix,
  active,
  reduceMotion,
}: {
  value: number;
  suffix: string;
  active: boolean;
  reduceMotion: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    if (reduceMotion) {
      const frame = window.requestAnimationFrame(() => setCount(value));
      return () => window.cancelAnimationFrame(frame);
    }

    let frame = 0;
    let startTime = 0;
    const duration = 1400;
    const update = (time: number) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setCount(Math.round(value * eased));
      if (progress < 1) frame = window.requestAnimationFrame(update);
    };

    frame = window.requestAnimationFrame(update);
    return () => window.cancelAnimationFrame(frame);
  }, [active, reduceMotion, value]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export function StatsStrip() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      aria-label="Illustrative NutriSphere figures"
      className="bg-ink-900 py-14 text-white sm:py-16"
      ref={sectionRef}
    >
      <Container>
        <div className="grid grid-cols-2 gap-y-8 md:grid-cols-4 md:gap-y-0">
          {stats.map(({ icon: StatIcon, label, suffix, value }, index) => (
            <div
              className={`flex items-center gap-3 px-2 sm:gap-4 md:px-6 ${
                index > 0 ? "md:border-l md:border-white/15" : ""
              }`}
              key={label}
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-white/10 text-brand-300 sm:size-12">
                <StatIcon aria-hidden="true" className="size-5 sm:size-6" />
              </span>
              <span>
                <span className="block font-heading text-2xl font-bold tracking-[-0.04em] text-white sm:text-3xl">
                  <CountUp
                    active={isVisible}
                    reduceMotion={Boolean(prefersReducedMotion)}
                    suffix={suffix}
                    value={value}
                  />
                </span>
                <span className="mt-1 block text-xs font-medium text-white/65 sm:text-sm">
                  {label}
                </span>
              </span>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-white/50">
          Illustrative placeholders shown for design preview only.
        </p>
      </Container>
    </section>
  );
}
