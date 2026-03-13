import type { SVGProps } from "react";

type TechIconProps = SVGProps<SVGSVGElement>;

function SvgBase(props: TechIconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    />
  );
}

export function Html5TechIcon(props: TechIconProps) {
  return (
    <SvgBase {...props}>
      <path d="M9 6h30l-2.7 30.4L24 40 11.7 36.4 9 6Z" fill="#E44D26" />
      <path d="M24 8.5h12.2l-2.3 26.1L24 37.9V8.5Z" fill="#F16529" />
      <path d="M15.2 12.8h17.6l-.4 4.5H20.1l.3 4h11.6l-1.1 11.1-6.9 1.9-7-1.9-.5-5.5h4.4l.2 2.1 2.9.8 3-.8.3-3.6H16.3l-1.1-13.6Z" fill="#fff" />
    </SvgBase>
  );
}

export function Css3TechIcon(props: TechIconProps) {
  return (
    <SvgBase {...props}>
      <path d="M9 6h30l-2.7 30.4L24 40 11.7 36.4 9 6Z" fill="#1572B6" />
      <path d="M24 8.5h12.2l-2.3 26.1L24 37.9V8.5Z" fill="#33A9DC" />
      <path d="M15.5 12.8h17.2l-.4 4.5H20.4l.3 4h11.2l-1.1 11.2-6.8 1.8-6.8-1.8-.4-5h4.3l.2 1.8 2.7.7 2.8-.7.4-3.8H16.7l-1.2-13.5Z" fill="#fff" />
    </SvgBase>
  );
}

export function JsTechIcon(props: TechIconProps) {
  return (
    <SvgBase {...props}>
      <rect x="6" y="6" width="36" height="36" rx="6" fill="#F7DF1E" />
      <path d="M25.5 31.4c.8 1.3 1.8 2.3 3.7 2.3 1.5 0 2.5-.8 2.5-1.9 0-1.4-1.1-1.9-2.9-2.7l-1-.4c-2.9-1.2-4.8-2.8-4.8-6 0-3 2.3-5.3 5.9-5.3 2.6 0 4.4.9 5.7 3.2l-3.1 2c-.7-1.2-1.4-1.7-2.6-1.7s-1.9.8-1.9 1.7c0 1.2.8 1.7 2.6 2.5l1 .4c3.4 1.5 5.3 3 5.3 6.4 0 3.7-2.9 5.7-6.8 5.7-3.8 0-6.2-1.8-7.4-4.1l3.8-2.1ZM17.2 31.8c.6 1 1.1 1.8 2.4 1.8 1.2 0 2-.5 2-2.3V17.6h4.6v13.8c0 4.2-2.5 6.1-6 6.1-3.2 0-5-1.7-5.9-3.7l3.9-2Z" fill="#111827" />
    </SvgBase>
  );
}

export function TsTechIcon(props: TechIconProps) {
  return (
    <SvgBase {...props}>
      <rect x="6" y="6" width="36" height="36" rx="6" fill="#3178C6" />
      <path d="M16 19h15.7v3.7h-5.4V38h-4.7V22.7H16V19ZM33.4 28.5c1 .7 2.1 1.2 3.4 1.5 1.6.4 2.2.8 2.2 1.6 0 .9-.8 1.4-2 1.4-1.6 0-3-.6-4.3-1.8l-2.4 3c1.7 1.6 4 2.5 6.8 2.5 4 0 6.7-2.1 6.7-5.5 0-3-1.8-4.4-5.4-5.3-1.7-.4-2.4-.7-2.4-1.5s.7-1.3 1.9-1.3c1.4 0 2.6.4 4 1.4l2.1-3c-1.7-1.3-3.7-2-6-2-3.8 0-6.4 2.2-6.4 5.4 0 3.1 2 4.4 5.8 5.3Z" fill="#fff" />
    </SvgBase>
  );
}

export function ReactTechIcon(props: TechIconProps) {
  return (
    <SvgBase {...props}>
      <circle cx="24" cy="24" r="3.2" fill="#61DAFB" />
      <ellipse cx="24" cy="24" rx="17" ry="6.6" stroke="#61DAFB" strokeWidth="2.4" />
      <ellipse cx="24" cy="24" rx="17" ry="6.6" stroke="#61DAFB" strokeWidth="2.4" transform="rotate(60 24 24)" />
      <ellipse cx="24" cy="24" rx="17" ry="6.6" stroke="#61DAFB" strokeWidth="2.4" transform="rotate(120 24 24)" />
    </SvgBase>
  );
}

export function ReduxTechIcon(props: TechIconProps) {
  return (
    <SvgBase {...props}>
      <path d="M16.5 29.7c1.4 1.4 3.1 2.1 4.8 2.1 3.2 0 5.4-2.2 6.1-5.7 1-4.9-1.2-9-4.8-9.6-1.4-.2-2.9.2-4.1 1.1-.7.5-1.4 1.1-1.9 1.9" stroke="#764ABC" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M31.2 18.7c2.2.3 3.9 1.4 4.7 3 1.5 3-1 7-5.8 9.4-4.2 2.1-8.8 2-11.4.1" stroke="#764ABC" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M18.2 16.8c-2.2-.4-4.1 0-5.3 1.3-2.3 2.4-1.3 7 2 11.3 2.9 3.8 7.2 5.4 10.4 4.3" stroke="#764ABC" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="17" cy="15.7" r="2.3" fill="#764ABC" />
      <circle cx="33.2" cy="18.4" r="2.3" fill="#764ABC" />
      <circle cx="17.3" cy="31.8" r="2.3" fill="#764ABC" />
    </SvgBase>
  );
}

export function AngularTechIcon(props: TechIconProps) {
  return (
    <SvgBase {...props}>
      <path d="M24 5 10.5 9.7l2.1 20L24 43l11.4-13.3 2.1-20L24 5Z" fill="#DD0031" />
      <path d="M24 5v38l11.4-13.3 2.1-20L24 5Z" fill="#C3002F" />
      <path d="m24 12-8 19h3.8l1.6-4h5.2l1.6 4H32l-8-19Zm1.2 11.8h-2.4l1.2-3.1 1.2 3.1Z" fill="#fff" />
    </SvgBase>
  );
}

export function NextTechIcon(props: TechIconProps) {
  return (
    <SvgBase {...props}>
      <circle cx="24" cy="24" r="18" fill="#111827" />
      <path d="M17 31V17h2.2l9.6 11.5V17H31v14h-2L19.2 19.4V31H17Z" fill="#fff" />
      <path d="M28 28.6 32.6 35" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
    </SvgBase>
  );
}

export function NodeTechIcon(props: TechIconProps) {
  return (
    <SvgBase {...props}>
      <path d="m24 6 13 7.5v15L24 36l-13-7.5v-15L24 6Z" fill="#3C873A" />
      <path d="M19.3 29.5V18.4h2.1l5.3 6.7v-6.7H29v11.1h-2l-5.4-6.8v6.8h-2.3Z" fill="#fff" />
    </SvgBase>
  );
}

export function ExpressTechIcon(props: TechIconProps) {
  return (
    <SvgBase {...props}>
      <rect x="6" y="12" width="36" height="24" rx="8" fill="#111827" />
      <path d="M14 24h8.5M14 20.5H21M14 27.5h7" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
      <path d="m26 20.5 8 7M34 20.5l-8 7" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
    </SvgBase>
  );
}

export function MongoTechIcon(props: TechIconProps) {
  return (
    <SvgBase {...props}>
      <path d="M24 8c3.2 3.4 5.2 8.1 5.2 13 0 7.2-4.1 13.3-5.2 14.7-1.1-1.4-5.2-7.5-5.2-14.7 0-4.9 2-9.6 5.2-13Z" fill="#47A248" />
      <path d="M24 11c1.3 2 2.1 5 2.1 8.2 0 4.8-1.3 9.2-2.1 11.5-.8-2.3-2.1-6.7-2.1-11.5 0-3.2.8-6.2 2.1-8.2Z" fill="#fff" fillOpacity=".35" />
      <path d="M24 8v28" stroke="#2F6B2F" strokeWidth="1.8" strokeLinecap="round" />
    </SvgBase>
  );
}
