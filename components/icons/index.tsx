import type { ReactNode, SVGProps } from "react";

export type IconProps = SVGProps<SVGSVGElement>;

function IconFrame({
  children,
  className,
  ...props
}: IconProps & { children: ReactNode }) {
  const isLabeled = Boolean(props["aria-label"]);

  return (
    <svg
      aria-hidden={isLabeled ? undefined : true}
      className={className}
      fill="none"
      focusable="false"
      height="24"
      role={isLabeled ? "img" : undefined}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.75"
      viewBox="0 0 24 24"
      width="24"
      {...props}
    >
      {children}
    </svg>
  );
}

export function Cow(props: IconProps) {
  return (
    <IconFrame {...props}>
      <path d="M5 9 2.5 6.5 3 4l4 2M19 9l2.5-2.5L21 4l-4 2" />
      <path d="M5 8.5A3.5 3.5 0 0 1 8.5 5h7A3.5 3.5 0 0 1 19 8.5v6A4.5 4.5 0 0 1 14.5 19h-5A4.5 4.5 0 0 1 5 14.5zM8 10h.01M16 10h.01M9 15h6" />
      <path d="M9 19v2m6-2v2M5 11H3.5a1.5 1.5 0 0 0 0 3H5m14-3h1.5a1.5 1.5 0 0 1 0 3H19" />
    </IconFrame>
  );
}

export function Chicken(props: IconProps) {
  return (
    <IconFrame {...props}>
      <path d="M14.5 7a5.5 5.5 0 1 0 2.8 10.2c2.1-1.2 3.2-3.7 2.5-6.1L22 9l-3.2-.3A5.5 5.5 0 0 0 14.5 7Z" />
      <path d="M10 8.5 8.5 6 11 5l1.5 2.2M10.5 12h.01M7.8 12.5l-4.3 1 3 2.2-.5 3.3 4-2M13 18v2m4-2v2m1-9h.01" />
    </IconFrame>
  );
}

export function Fish(props: IconProps) {
  return (
    <IconFrame {...props}>
      <path d="M3 12c2.2-3.4 5.3-5 9-5s6.8 1.6 9 5c-2.2 3.4-5.3 5-9 5s-6.8-1.6-9-5Z" />
      <path d="m3 12-2-3v6l2-3Zm9-5c1.4 1.3 2.1 2.9 2.1 5s-.7 3.7-2.1 5" />
      <circle cx="17" cy="11" r=".75" fill="currentColor" stroke="none" />
    </IconFrame>
  );
}

export function Dog(props: IconProps) {
  return (
    <IconFrame {...props}>
      <path d="M7 7 4 5 3 9l2.5 3M17 7l3-2 1 4-2.5 3" />
      <path d="M5.5 9A3.5 3.5 0 0 1 9 5.5h6A3.5 3.5 0 0 1 18.5 9v6a4.5 4.5 0 0 1-4.5 4.5h-4A4.5 4.5 0 0 1 5.5 15zM9 11h.01M15 11h.01M9 15c1.7 1.5 4.3 1.5 6 0" />
      <path d="M10 19.5V22m4-2.5V22" />
    </IconFrame>
  );
}

export function Sheep(props: IconProps) {
  return (
    <IconFrame {...props}>
      <path d="M7 9a3 3 0 0 1 5-2.2A3 3 0 0 1 17 9a2.8 2.8 0 0 1 1.5 5A3.5 3.5 0 0 1 15 19H9a3.5 3.5 0 0 1-3.5-5A2.8 2.8 0 0 1 7 9Z" />
      <path d="M9 11h.01M15 11h.01M10 14h4m-5 5v2m6-2v2" />
    </IconFrame>
  );
}

export function Vaccine(props: IconProps) {
  return (
    <IconFrame {...props}>
      <path d="m8 5 11 11m-8-14 3 3m-7 7 3-3m-8 8 8-8m-6 10 4-4m-7 7 3-3m8-16 2-2m6 6-2 2" />
      <path d="m12 8 4-4m-5 10 4-4m-4-4 4-4m-7 7 4 4" />
    </IconFrame>
  );
}

export function Pill(props: IconProps) {
  return (
    <IconFrame {...props}>
      <path d="M7.2 20.3a5 5 0 0 1-3.5-8.5l8.1-8.1a5 5 0 0 1 7.1 7.1l-8.1 8.1a5 5 0 0 1-3.6 1.4Z" />
      <path d="m8.2 8.2 7.6 7.6" />
    </IconFrame>
  );
}

export function Stethoscope(props: IconProps) {
  return (
    <IconFrame {...props}>
      <path d="M6 4v5a4 4 0 0 0 8 0V4M4 4h4m4 0h4m-4 5v3a6 6 0 0 0 12 0v-1" />
      <circle cx="20" cy="9" r="2" />
      <path d="M18 12v2a4 4 0 0 1-8 0v-1" />
    </IconFrame>
  );
}

export function Microscope(props: IconProps) {
  return (
    <IconFrame {...props}>
      <path d="m9 4 4-2 4 7-4 2-4-7Zm2.5 4.5-4 2.3a5 5 0 0 0 5 8.7l2.3-1.3M7 21h14m-8-4 2 4m3-7a4 4 0 0 1-4 4H9" />
    </IconFrame>
  );
}

export function Leaf(props: IconProps) {
  return (
    <IconFrame {...props}>
      <path d="M20.5 3.5C12 3.5 5 5.8 5 12.5a6 6 0 0 0 6 6c6.7 0 9-7 9.5-15Z" />
      <path d="M3 21c3.5-5.5 7.7-9.2 13-12" />
    </IconFrame>
  );
}

export function Shield(props: IconProps) {
  return (
    <IconFrame {...props}>
      <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
      <path d="m9 12 2 2 4-4" />
    </IconFrame>
  );
}

export function Truck(props: IconProps) {
  return (
    <IconFrame {...props}>
      <path d="M3 6h11v12H3zM14 10h4l3 3v5h-7" />
      <circle cx="7.5" cy="18" r="2" />
      <circle cx="17.5" cy="18" r="2" />
      <path d="M17 10v3h4" />
    </IconFrame>
  );
}

export function Certificate(props: IconProps) {
  return (
    <IconFrame {...props}>
      <path d="M5 3h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-5l-2 3-2-3H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
      <path d="M8 8h8M8 12h5" />
      <path d="m15 16 1.2 1.2 2.3-2.4" />
    </IconFrame>
  );
}

export function Phone(props: IconProps) {
  return (
    <IconFrame {...props}>
      <path d="M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
      <path d="M10 6h4m-3 12h2" />
    </IconFrame>
  );
}

export function Arrow(props: IconProps) {
  return (
    <IconFrame {...props}>
      <path d="M5 12h14m-6-6 6 6-6 6" />
    </IconFrame>
  );
}

export function Menu(props: IconProps) {
  return (
    <IconFrame {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </IconFrame>
  );
}

export function Close(props: IconProps) {
  return (
    <IconFrame {...props}>
      <path d="m6 6 12 12M18 6 6 18" />
    </IconFrame>
  );
}

export function Check(props: IconProps) {
  return (
    <IconFrame {...props}>
      <path d="m5 12 4 4L19 6" />
    </IconFrame>
  );
}

export function Horse(props: IconProps) {
  return (
    <IconFrame {...props}>
      <path d="M5 20v-5l2-3-1-4 4-4h5l3 3 3 1-1 4-3 1-2 4v3m-8-7 4 1 3-3m-4-5 2 2m4 5 2 3m-9 0v2m8-2v2" />
      <path d="m15 4 1-2 2 3" />
    </IconFrame>
  );
}

export function MessageCircle(props: IconProps) {
  return (
    <IconFrame {...props}>
      <path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5 8 8 0 0 1-3.3-.7L4 20l1.7-4.2A7.5 7.5 0 1 1 20 11.5Z" />
      <path d="M8 12h.01M12 12h.01M16 12h.01" />
    </IconFrame>
  );
}

export function Mail(props: IconProps) {
  return (
    <IconFrame {...props}>
      <rect height="15" rx="2" width="20" x="2" y="4.5" />
      <path d="m3 6 9 7 9-7" />
    </IconFrame>
  );
}

export function PhoneCall(props: IconProps) {
  return (
    <IconFrame {...props}>
      <path d="M7.2 3H4a1 1 0 0 0-1 1c0 9.4 7.6 17 17 17a1 1 0 0 0 1-1v-3.2a1 1 0 0 0-.8-1l-4.1-.8a1 1 0 0 0-1 .4l-1.8 2.2a15.2 15.2 0 0 1-5.9-5.9l2.2-1.8a1 1 0 0 0 .4-1L8.2 3.8a1 1 0 0 0-1-.8Z" />
      <path d="M14 4a6 6 0 0 1 6 6m-6-3a3 3 0 0 1 3 3" />
    </IconFrame>
  );
}

export function Flask(props: IconProps) {
  return (
    <IconFrame {...props}>
      <path d="M9 3h6m-5 0v6l-5.6 9.3A2.5 2.5 0 0 0 6.5 22h11a2.5 2.5 0 0 0 2.1-3.7L14 9V3" />
      <path d="M7.5 16h9" />
    </IconFrame>
  );
}

export function Package(props: IconProps) {
  return (
    <IconFrame {...props}>
      <path d="m12 3 9 5v8l-9 5-9-5V8l9-5Z" />
      <path d="m3.5 8.5 8.5 5 8.5-5M12 13.5V21m-4.5-16 9 5" />
    </IconFrame>
  );
}

export function Instagram(props: IconProps) {
  return (
    <IconFrame {...props}>
      <rect height="18" rx="5" width="18" x="3" y="3" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r=".75" fill="currentColor" stroke="none" />
    </IconFrame>
  );
}

export function Linkedin(props: IconProps) {
  return (
    <IconFrame {...props}>
      <path d="M5 9v10m0-14v.01M10 19v-6a4 4 0 0 1 8 0v6m-8-6v6" />
    </IconFrame>
  );
}

export function Facebook(props: IconProps) {
  return (
    <IconFrame {...props}>
      <path d="M14 21v-8h3l.5-4H14V7c0-1.2.4-2 2-2h1.7V1.5A22 22 0 0 0 15 1c-3 0-5 1.8-5 5v3H7v4h3v8" />
    </IconFrame>
  );
}

export function ChevronDown(props: IconProps) {
  return (
    <IconFrame {...props}>
      <path d="m6 9 6 6 6-6" />
    </IconFrame>
  );
}

export function HeartPulse(props: IconProps) {
  return (
    <IconFrame {...props}>
      <path d="M20.8 8.8c0 5.2-8.8 11-8.8 11S3.2 14 3.2 8.8A4.8 4.8 0 0 1 12 6a4.8 4.8 0 0 1 8.8 2.8Z" />
      <path d="M4.5 11h4l1.5-3 3 6 1.5-3h5" />
    </IconFrame>
  );
}

export function Clock(props: IconProps) {
  return (
    <IconFrame {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </IconFrame>
  );
}

export function MapPin(props: IconProps) {
  return (
    <IconFrame {...props}>
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </IconFrame>
  );
}
