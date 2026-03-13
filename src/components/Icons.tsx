import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const baseProps = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  strokeWidth: 1.8,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};

function IconBase(props: IconProps) {
  return <svg {...baseProps} {...props} />;
}

export function DownloadIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 3v11" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 20h14" />
    </IconBase>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </IconBase>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M6 6 18 18" />
      <path d="M18 6 6 18" />
    </IconBase>
  );
}

export function SunIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2.5" />
      <path d="M12 19.5V22" />
      <path d="m4.93 4.93 1.77 1.77" />
      <path d="m17.3 17.3 1.77 1.77" />
      <path d="M2 12h2.5" />
      <path d="M19.5 12H22" />
      <path d="m4.93 19.07 1.77-1.77" />
      <path d="m17.3 6.7 1.77-1.77" />
    </IconBase>
  );
}

export function MoonIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z" />
    </IconBase>
  );
}

export function ArrowUpIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 19V5" />
      <path d="m6.5 10.5 5.5-5.5 5.5 5.5" />
    </IconBase>
  );
}

export function ExternalLinkIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M14 5h5v5" />
      <path d="M10 14 19 5" />
      <path d="M19 14v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4" />
    </IconBase>
  );
}

export function GithubIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M9 19c-4.5 1.4-4.5-2.5-6.3-3" />
      <path d="M15 21v-3.5a3.1 3.1 0 0 0-.9-2.4c3-.3 6.2-1.5 6.2-6.7A5.2 5.2 0 0 0 19 4.8 4.8 4.8 0 0 0 18.9 1S17.7.7 15 2.6a13.2 13.2 0 0 0-6 0C6.3.7 5.1 1 5.1 1A4.8 4.8 0 0 0 5 4.8a5.2 5.2 0 0 0-1.3 3.6c0 5.2 3.2 6.4 6.2 6.7a3.1 3.1 0 0 0-.9 2.4V21" />
    </IconBase>
  );
}

export function LinkedinIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M8 10v9" />
      <path d="M8 6.5v.01" />
      <path d="M12 19v-5a3 3 0 0 1 6 0v5" />
      <path d="M12 10v9" />
    </IconBase>
  );
}

export function WhatsappIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M20 12a8 8 0 0 1-11.7 7l-4.3 1 1.1-4.2A8 8 0 1 1 20 12Z" />
      <path d="M9.7 8.8c-.3-.7-.6-.7-.9-.7h-.7c-.2 0-.5.1-.7.4-.2.3-.8.8-.8 2s.8 2.3.9 2.4c.1.2 1.6 2.6 4 3.5 1.9.7 2.3.6 2.7.6.4-.1 1.3-.5 1.5-1 .2-.5.2-1 .1-1.1-.1-.1-.4-.2-.8-.4l-1.4-.7c-.3-.1-.6-.2-.8.2l-.4.6c-.1.2-.3.2-.6.1a6.1 6.1 0 0 1-1.8-1.1 6.8 6.8 0 0 1-1.2-1.5c-.1-.3 0-.4.1-.5l.4-.5c.1-.2.2-.3.3-.5.1-.1.1-.3 0-.5l-.6-1.4Z" />
    </IconBase>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </IconBase>
  );
}
