import type { ComponentType } from "react";
import type { IconProps } from "@/components/icons";
import { cn } from "@/lib/utils";

type HexIconProps = {
  icon: ComponentType<IconProps>;
  variant?: "red" | "dark" | "outline" | "glass";
  className?: string;
};

const variantClasses = {
  red: "bg-brand-500 text-white shadow-sm",
  dark: "bg-ink-900 text-white shadow-sm",
  outline: "border border-brand-500 bg-white text-brand-600",
  glass: "border border-white/25 bg-white/15 text-white shadow-sm backdrop-blur-sm",
} as const;

export function HexIcon({
  icon: Icon,
  variant = "red",
  className,
}: HexIconProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "grid aspect-square place-items-center [clip-path:polygon(25%_5%,75%_5%,100%_50%,75%_95%,25%_95%,0_50%)]",
        variantClasses[variant],
        className,
      )}
    >
      <Icon className="size-1/2" />
    </span>
  );
}
