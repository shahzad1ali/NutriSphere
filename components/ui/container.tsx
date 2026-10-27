import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  size?: "default" | "wide" | "narrow";
};

const sizeClasses = {
  default: "max-w-7xl",
  wide: "max-w-[90rem]",
  narrow: "max-w-4xl",
} as const;

export function Container({
  size = "default",
  className,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full px-5 sm:px-8 lg:px-10", sizeClasses[size], className)}
      {...props}
    />
  );
}
