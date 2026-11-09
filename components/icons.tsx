import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function Icon({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function ArrowUpRight(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M7 17 17 7M7 7h10v10" />
    </Icon>
  );
}

export function ArrowDown(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 4v16m-6-6 6 6 6-6" />
    </Icon>
  );
}

export function ArrowRight(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 12h16m-6-6 6 6-6 6" />
    </Icon>
  );
}

export function ChevronDown(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="m6 9 6 6 6-6" />
    </Icon>
  );
}

export function Close(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="m6 6 12 12M6 18 18 6" />
    </Icon>
  );
}

export function ExternalLink(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M14 5h5v5m0-5-9 9" />
      <path d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" />
    </Icon>
  );
}

export function HealthIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 21S3 15.5 3 9a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 6.5-9 12-9 12Z" />
      <path d="M7 12h3l1.5-3 2 6 1.5-3h2" />
    </Icon>
  );
}

export function ClimateIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M20 4C10 3 4 7 5 14c1 5 6 6 9 3 4-3 4-9 6-13Z" />
      <path d="M4 21c2-6 6-9 12-12" />
    </Icon>
  );
}

export function AnimalIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M8 10 5 5l6 3m5 2 3-5-6 3" />
      <path d="M5 13c0-4 3-6 7-6s7 2 7 6-3 7-7 7-7-3-7-7Z" />
      <path d="M9 13h.01M15 13h.01M10 16h4" />
    </Icon>
  );
}

export function EducationIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="m3 9 9-5 9 5-9 5-9-5Z" />
      <path d="M7 12v5c3 2 7 2 10 0v-5M21 9v6" />
    </Icon>
  );
}

export function HeritageIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 21h16M5 18h14M6 9h12M4 9l8-6 8 6M7 9v9m5-9v9m5-9v9" />
    </Icon>
  );
}

export function ScienceIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M9 3h6M10 3v6l-6 9c-1 2 0 3 2 3h12c2 0 3-1 2-3l-6-9V3" />
      <path d="M7 15h10M9 12h.01M14 17h.01" />
    </Icon>
  );
}
