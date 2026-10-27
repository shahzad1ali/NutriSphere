"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { Check } from "@/components/icons";
import { Button } from "@/components/ui";

export function NewsletterSignup() {
  const [subscribed, setSubscribed] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    // TODO: Connect newsletter signup to the approved subscription API.
    setSubscribed(true);
    form.reset();
  }

  if (subscribed) {
    return (
      <div
        aria-live="polite"
        className="flex min-h-16 items-center gap-3 rounded-2xl border border-brand-200 bg-brand-50 px-4 py-3 text-sm font-medium text-brand-900"
        role="status"
      >
        <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-brand-100 text-brand-800">
          <Check aria-hidden="true" className="size-5" />
        </span>
        <span>Thank you. Newsletter signup is ready once the service is connected.</span>
        <button
          className="ml-auto min-h-11 shrink-0 px-2 text-xs font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-900"
          onClick={() => setSubscribed(false)}
          type="button"
        >
          Subscribe another
        </button>
      </div>
    );
  }

  return (
    <form
      className="grid gap-2 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start"
      onSubmit={handleSubmit}
    >
      <div>
        <label className="sr-only" htmlFor="newsletter-email">
          Email address for newsletter
        </label>
        <input
          autoComplete="email"
          className="min-h-12 w-full rounded-xl border border-ink-200 bg-white px-4 text-sm text-ink-900 placeholder:text-ink-500 focus:border-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-200"
          id="newsletter-email"
          maxLength={254}
          name="email"
          placeholder="Your email address"
          required
          type="email"
        />
      </div>
      <Button
        className="min-h-12 w-full bg-brand-500 text-white hover:bg-brand-600 sm:w-auto"
        size="md"
        type="submit"
      >
        Subscribe
      </Button>
    </form>
  );
}
