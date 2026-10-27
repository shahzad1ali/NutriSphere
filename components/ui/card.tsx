import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  interactive?: boolean;
};

export function Card({
  interactive = false,
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-ink-100 bg-white p-6 shadow-md",
        interactive &&
          "transition duration-200 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg",
        className,
      )}
      {...props}
    />
  );
}
