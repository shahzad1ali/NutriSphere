"use client";

import { useEffect, useId, useRef } from "react";
import type { KeyboardEvent as ReactKeyboardEvent, ReactNode } from "react";
import { Close } from "@/components/icons";

type AccessibleModalProps = {
  title: string;
  onClose: () => void;
  children: ReactNode;
  className?: string;
  onKeyDown?: (event: ReactKeyboardEvent<HTMLDivElement>) => void;
};

export function AccessibleModal({
  title,
  onClose,
  children,
  className,
  onKeyDown,
}: AccessibleModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const titleId = useId();

  useEffect(() => {
    const previousFocus = document.activeElement instanceof HTMLElement
      ? document.activeElement
      : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.querySelector<HTMLElement>("button")?.focus();

    function handleKeyDown(event: globalThis.KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((element) => element.offsetParent !== null);
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      previousFocus?.focus();
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] grid place-items-center bg-ink-950/85 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        aria-labelledby={titleId}
        aria-modal="true"
        className={`relative max-h-[90dvh] w-full overflow-auto rounded-3xl bg-white p-5 shadow-2xl sm:p-7 ${className ?? ""}`}
        onKeyDown={onKeyDown}
        ref={dialogRef}
        role="dialog"
      >
        <div className="mb-4 flex items-center justify-between gap-4">
          <h2 className="font-heading text-lg font-semibold text-brand-900" id={titleId}>
            {title}
          </h2>
          <button
            aria-label="Close dialog"
            className="grid size-11 shrink-0 place-items-center rounded-xl text-brand-900 hover:bg-brand-50"
            onClick={onClose}
            type="button"
          >
            <Close aria-hidden="true" className="size-5" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
