"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Chicken,
  Cow,
  Dog,
  FeedAdditive,
  Fish,
  Flask,
  Horse,
  Leaf,
  Microscope,
  Pill,
  Sheep,
  Stethoscope,
} from "@/components/icons";
import type { IconProps } from "@/components/icons";
import { HexIcon } from "@/components/icons/HexIcon";
import type { ComponentType } from "react";
import type { ImageAsset, ImageFallbackIcon } from "@/lib/images";
import { cn } from "@/lib/utils";

const fallbackIcons: Record<ImageFallbackIcon, ComponentType<IconProps>> = {
  Chicken,
  Cow,
  Dog,
  Fish,
  Flask,
  Horse,
  Leaf,
  Microscope,
  Pill,
  Sheep,
  Stethoscope,
  FeedAdditive,
};

const blurDataURL =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxwYXRoIGZpbGw9IiNmZmU0ZTYiIGQ9Ik0wIDBoOHY4SDB6Ii8+PC9zdmc+";

type SmartImageProps = {
  asset: ImageAsset;
  sizes: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  objectPosition?: string;
};

export function SmartImage({
  asset,
  sizes,
  className,
  imageClassName,
  priority = false,
  objectPosition = "center",
}: SmartImageProps) {
  const [failed, setFailed] = useState(false);
  const FallbackIcon = fallbackIcons[asset.fallbackIcon];
  const imageSrc = asset.src;

  return (
    <div
      className={cn(
        "relative isolate overflow-hidden bg-gradient-to-br from-surface via-white to-brand-50",
        className,
      )}
    >
      {failed ? (
        <div
          aria-label={asset.alt}
          className="absolute inset-0 grid place-items-center overflow-hidden bg-[radial-gradient(circle_at_75%_20%,color-mix(in_srgb,var(--color-brand-500)_10%,transparent),transparent_34%),linear-gradient(135deg,var(--color-white),var(--color-surface))]"
          role="img"
        >
          <svg
            aria-hidden="true"
            className="absolute inset-0 size-full text-brand-500/15"
            fill="none"
            preserveAspectRatio="xMidYMid slice"
            viewBox="0 0 240 160"
          >
            <path d="m25 1 31 18v36L25 73-6 55V19L25 1Zm100 40 31 18v36l-31 18-31-18V59l31-18Zm100-40 31 18v36l-31 18-31-18V19l31-18Z" stroke="currentColor" />
            <circle cx="56" cy="19" r="3" fill="currentColor" />
            <circle cx="156" cy="59" r="3" fill="currentColor" />
          </svg>
          <HexIcon
            className="relative size-24 bg-white/75 shadow-sm sm:size-32"
            icon={FallbackIcon}
            variant="red"
          />
        </div>
      ) : (
        <Image
          alt={asset.alt}
          className={cn("object-cover", imageClassName)}
          fill
          onError={() => setFailed(true)}
          placeholder="blur"
          blurDataURL={blurDataURL}
          priority={priority}
          sizes={sizes}
          src={imageSrc}
          style={{ objectPosition }}
        />
      )}
    </div>
  );
}
