import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: "primary" | "neutral" | "red";
};

const toneClasses = {
  primary: "bg-brand-100 text-brand-800",
  neutral: "bg-ink-100 text-ink-700",
  red: "bg-brand-50 text-brand-700",
} as const;

export function Badge({
  tone = "primary",
  className,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold tracking-[0.04em]",
        toneClasses[tone],
        className,
      )}
      {...props}
    />
  );
}
