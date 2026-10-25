import type { SVGProps } from "react";
import type { ServiceIcon } from "@/lib/services";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true as const,
};

export function ServiceGlyph({
  name,
  ...props
}: IconProps & { name: ServiceIcon }) {
  const svg = { ...base, ...props, className: props.className ?? "h-7 w-7" };
  switch (name) {
    case "search":
      return (
        <svg {...svg}>
          <circle cx="11" cy="11" r="6" />
          <path d="M16 16.5 20 20" />
        </svg>
      );
    case "spark":
      return (
        <svg {...svg}>
          <path d="M12 3.5 13.4 8 18 9.2 13.4 10.6 12 15.2 10.6 10.6 6 9.2 10.6 8 12 3.5Z" />
          <path d="M18 14.5 18.7 16.6 20.8 17.3 18.7 18 18 20.1 17.3 18 15.2 17.3 17.3 16.6 18 14.5Z" />
        </svg>
      );
    case "tooth":
      return (
        <svg {...svg}>
          <path d="M8 6.5c1.6-2 6.4-2 8 0 1.4 1.8.8 4.2.2 6.2-.5 1.6-.4 3 .4 4.6.6 1.2-.2 2.7-1.8 2.7-1.1 0-1.6-.8-1.9-1.8-.3-1.1-.6-1.5-1.9-1.5s-1.6.4-1.9 1.5c-.3 1-.8 1.8-1.9 1.8-1.6 0-2.4-1.5-1.8-2.7.8-1.6.9-3 .4-4.6C7.2 10.7 6.6 8.3 8 6.5Z" />
        </svg>
      );
    case "extract":
      return (
        <svg {...svg}>
          <path d="M9 4.5h6" />
          <path d="m10 4.5.4 2.2c.2.9-.2 1.8-.9 2.3L8 10.2V19a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-8.8l-1.5-1.2a2 2 0 0 1-.9-2.3l.4-2.2" />
        </svg>
      );
    case "whiten":
      return (
        <svg {...svg}>
          <path d="M12 3v3" />
          <path d="m5.5 6.5 2.1 2.1" />
          <path d="m18.5 6.5-2.1 2.1" />
          <path d="M8 13.5c.8-2.8 7.2-2.8 8 0-1.2 4.2-2 6-4 6s-2.8-1.8-4-6Z" />
        </svg>
      );
    case "bridge":
      return (
        <svg {...svg}>
          <path d="M4 15c1.2-4 2.4-6 4-6s2.6 2 4 2 2.4-2 4-2 2.8 2 4 6" />
          <path d="M5 15h14" />
          <path d="M7 15v3M12 15v3M17 15v3" />
        </svg>
      );
    case "braces":
      return (
        <svg {...svg}>
          <path d="M8 5c0 2-.8 3-2 3.5C8 9 8 10 8 12s0 3-2 3.5C7.2 16 8 17 8 19" />
          <path d="M16 5c0 2 .8 3 2 3.5-2 .5-2 1.5-2 3.5s0 3 2 3.5c-1.2.5-2 1.5-2 3.5" />
          <path d="M8 9h8M8 15h8" />
        </svg>
      );
    case "root":
      return (
        <svg {...svg}>
          <path d="M9 4h6l-1 6 2 9-4-2-4 2 2-9-1-6Z" />
          <path d="M12 8v7" />
        </svg>
      );
    case "implant":
      return (
        <svg {...svg}>
          <path d="M10 3h4v3l-1 2h-2L10 6V3Z" />
          <path d="m9 8 6 2-6 2 6 2-6 2 6 2" />
        </svg>
      );
    case "guard":
      return (
        <svg {...svg}>
          <path d="M5 9c2.2-3 11.8-3 14 0 0 6-2.2 9.5-7 11-4.8-1.5-7-5-7-11Z" />
          <path d="M8.5 11.5c1.6 1.2 5.4 1.2 7 0" />
        </svg>
      );
  }
}

export function IconMenu(props: IconProps) {
  return (
    <svg {...base} {...props} className={props.className ?? "h-6 w-6"}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function IconClose(props: IconProps) {
  return (
    <svg {...base} {...props} className={props.className ?? "h-6 w-6"}>
      <path d="M6 6 18 18M18 6 6 18" />
    </svg>
  );
}

export function IconCalendar(props: IconProps) {
  return (
    <svg {...base} {...props} className={props.className ?? "h-5 w-5"}>
      <rect x="4" y="5.5" width="16" height="14.5" rx="3" />
      <path d="M8 3.5v3.5M16 3.5v3.5M4 10.5h16" />
      <path d="m9 14.2 1.8 1.8 4-4.2" />
    </svg>
  );
}

export function IconWhatsapp(props: IconProps) {
  return (
    <svg {...props} viewBox="0 0 24 24" aria-hidden className={props.className ?? "h-5 w-5"}>
      <path
        fill="currentColor"
        d="M12.04 3C7.31 3 3.5 6.73 3.5 11.36c0 1.47.4 2.9 1.16 4.16L3.4 21l5.62-1.2a8.7 8.7 0 0 0 3.02.54h.01c4.73 0 8.55-3.73 8.55-8.36C20.6 6.73 16.77 3 12.04 3Zm4.9 11.84c-.2.58-1.18 1.1-1.64 1.16-.42.06-.96.08-1.55-.1-.36-.1-.82-.26-1.41-.51-2.48-1.07-4.1-3.57-4.22-3.74-.12-.17-1.01-1.34-1.01-2.56 0-1.22.64-1.82.87-2.07.22-.24.49-.3.65-.3h.47c.15 0 .35-.06.55.42.2.5.7 1.72.76 1.84.06.13.1.28.02.45-.08.17-.12.28-.24.43-.12.15-.25.33-.36.44-.12.12-.24.25-.1.49.13.24.6.99 1.29 1.6.89.79 1.64 1.04 1.88 1.16.24.12.38.1.52-.06.14-.17.6-.7.76-.94.16-.24.32-.2.54-.12.22.08 1.4.66 1.64.78.24.12.4.18.46.28.06.1.06.58-.14 1.16Z"
      />
    </svg>
  );
}
