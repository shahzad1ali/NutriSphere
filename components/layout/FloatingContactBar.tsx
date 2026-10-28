"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Mail, MessageCircle, PhoneCall } from "@/components/icons";

export function FloatingContactBar() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const footer = document.getElementById("site-footer");
    if (!footer || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => setHidden(entry.isIntersecting),
      { threshold: 0.05 },
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  if (hidden) return null;

  return (
    <aside
      aria-label="Quick contact options"
      className="fixed inset-x-0 bottom-3 z-40 mx-auto flex w-[calc(100%-1.5rem)] max-w-fit items-center gap-1 rounded-2xl border border-white/10 bg-ink-950/95 p-1.5 text-white shadow-xl backdrop-blur-xl sm:bottom-5 sm:gap-2 sm:p-2"
    >
      <span className="hidden whitespace-nowrap px-3 text-xs font-semibold text-white/80 lg:inline">
        Let&apos;s Work Together
      </span>
      <Link
        aria-label="Request a phone call from Nutritech"
        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-3 text-xs font-semibold transition hover:bg-white/10 sm:px-4"
        href="/contact"
        title="Go to the contact form to request a call"
      >
        <PhoneCall aria-hidden="true" className="size-4 text-brand-300" />
        <span>Call</span>
      </Link>
      <Link
        aria-label="Request WhatsApp contact from Nutritech"
        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-3 text-xs font-semibold transition hover:bg-white/10 sm:px-4"
        href="/contact"
        title="Go to the contact form to request WhatsApp contact"
      >
        <MessageCircle aria-hidden="true" className="size-4 text-brand-300" />
        <span>WhatsApp</span>
      </Link>
      <Link
        aria-label="Request email contact from Nutritech"
        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-3 text-xs font-semibold transition hover:bg-white/10 sm:px-4"
        href="/contact"
        title="Go to the contact form to request email contact"
      >
        <Mail aria-hidden="true" className="size-4 text-brand-300" />
        <span>Email</span>
      </Link>
    </aside>
  );
}
