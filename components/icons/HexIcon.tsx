import Image from "next/image";
import type { ComponentType } from "react";
import type { IconProps } from "@/components/icons";
import { cn } from "@/lib/utils";

type HexIconProps = {
  variant?: "red" | "dark" | "outline" | "glass";
  className?: string;
} & (
  | {
      icon: ComponentType<IconProps>;
      src?: never;
      alt?: never;
    }
  | {
      icon?: never;
      src: string;
      alt: string;
    }
);

const variantClasses = {
  red: "bg-brand-500 text-white shadow-sm",
  dark: "bg-ink-900 text-white shadow-sm",
  outline: "border border-brand-500 bg-white text-brand-600",
  glass: "border border-white/25 bg-white/15 text-white shadow-sm backdrop-blur-sm",
} as const;

export function HexIcon({
  icon: Icon,
  src,
  alt,
  variant = "red",
  className,
}: HexIconProps) {
  return (
    <span
      aria-hidden={src ? undefined : true}
      className={cn(
        "grid aspect-square place-items-center [clip-path:polygon(25%_5%,75%_5%,100%_50%,75%_95%,25%_95%,0_50%)]",
        variantClasses[variant],
        className,
      )}
    >
      {src ? (
        <Image
          alt={alt}
          className="size-1/2 object-contain"
          height={100}
          src={src}
          width={100}
        />
      ) : Icon ? (
        <Icon className="size-1/2" />
      ) : null}
    </span>
  );
}
