import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { Arrow } from "@/components/icons";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonCommonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  withArrow?: boolean;
  className?: string;
};

type NativeButtonProps = ButtonCommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "className"> & {
    href?: undefined;
  };
type LinkButtonProps = ButtonCommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children" | "className"> & {
    href: string;
  };
type ButtonProps = NativeButtonProps | LinkButtonProps;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-500 text-white shadow-sm hover:bg-brand-600",
  secondary:
    "border border-brand-200 bg-white text-brand-900 hover:border-brand-300 hover:bg-brand-50",
  ghost: "bg-transparent text-brand-900 hover:bg-brand-50",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "min-h-11 gap-2 rounded-xl px-4 text-sm",
  md: "min-h-12 gap-2.5 rounded-2xl px-5 text-sm",
  lg: "min-h-14 gap-3 rounded-2xl px-6 text-base",
};

export function buttonStyles({
  variant = "primary",
  size = "md",
  className,
}: Pick<ButtonCommonProps, "variant" | "size" | "className"> = {}): string {
  return cn(
    "group inline-flex items-center justify-center font-semibold tracking-[-0.01em] transition duration-200 ease-out active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );
}

function ArrowIcon({ withArrow }: { withArrow: boolean }) {
  return withArrow ? (
    <Arrow
      aria-hidden="true"
      className="size-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1"
    />
  ) : null;
}

export function Button(props: NativeButtonProps): ReactNode;
export function Button(props: LinkButtonProps): ReactNode;
export function Button(props: ButtonProps) {
  if ("href" in props && typeof props.href === "string") {
    const {
      href,
      children,
      variant,
      size,
      withArrow = false,
      className,
      ...linkAttributes
    } = props;
    return (
      <a
        {...linkAttributes}
        href={href}
        className={buttonStyles({ variant, size, className })}
      >
        {children}
        <ArrowIcon withArrow={withArrow} />
      </a>
    );
  }

  const {
    children,
    variant,
    size,
    withArrow = false,
    className,
    type = "button",
    ...buttonAttributes
  } = props;
  return (
    <button
      {...buttonAttributes}
      type={type}
      className={buttonStyles({ variant, size, className })}
    >
      {children}
      <ArrowIcon withArrow={withArrow} />
    </button>
  );
}
