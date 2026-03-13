import { cn } from "@/lib/utils";
import type { CSSProperties } from "react";

type AmbientVariant = "hero" | "contact";

interface AmbientShapesProps {
  className?: string;
  variant?: AmbientVariant;
}

type ShapeConfig = {
  className: string;
  style: AmbientStyle;
};

type AmbientStyle = CSSProperties & {
  "--ambient-x1"?: string;
  "--ambient-y1"?: string;
  "--ambient-x2"?: string;
  "--ambient-y2"?: string;
  "--ambient-scale-1"?: string;
  "--ambient-scale-2"?: string;
  "--ambient-rotate-1"?: string;
  "--ambient-rotate-2"?: string;
  "--ambient-opacity-min"?: string;
  "--ambient-opacity-mid"?: string;
  "--ambient-opacity-max"?: string;
  "--ambient-duration"?: string;
  "--ambient-delay"?: string;
};

const shapeMap: Record<AmbientVariant, ShapeConfig[]> = {
  hero: [
    {
      className:
        "absolute -left-20 top-20 h-64 w-64 rounded-full bg-sky-400/20 blur-3xl dark:bg-sky-500/20",
      style: {
        "--ambient-x1": "52px",
        "--ambient-y1": "-28px",
        "--ambient-x2": "-10px",
        "--ambient-y2": "18px",
        "--ambient-scale-1": "1.08",
        "--ambient-scale-2": "0.96",
        "--ambient-opacity-min": "0.65",
        "--ambient-opacity-mid": "0.72",
        "--ambient-opacity-max": "0.9",
        "--ambient-duration": "18s",
      },
    },
    {
      className:
        "absolute right-[-5%] top-28 h-56 w-56 rounded-full bg-cyan-300/20 blur-3xl dark:bg-cyan-400/18",
      style: {
        "--ambient-x1": "-34px",
        "--ambient-y1": "16px",
        "--ambient-x2": "14px",
        "--ambient-y2": "-22px",
        "--ambient-scale-1": "0.95",
        "--ambient-scale-2": "1.06",
        "--ambient-opacity-min": "0.45",
        "--ambient-opacity-mid": "0.54",
        "--ambient-opacity-max": "0.74",
        "--ambient-duration": "21s",
        "--ambient-delay": "1.2s",
      },
    },
    {
      className:
        "absolute bottom-[-8rem] left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-500/18 blur-3xl dark:bg-blue-600/18",
      style: {
        "--ambient-x1": "18px",
        "--ambient-y1": "-24px",
        "--ambient-x2": "-24px",
        "--ambient-y2": "12px",
        "--ambient-scale-1": "1.04",
        "--ambient-scale-2": "0.97",
        "--ambient-opacity-min": "0.38",
        "--ambient-opacity-mid": "0.44",
        "--ambient-opacity-max": "0.6",
        "--ambient-duration": "24s",
        "--ambient-delay": "0.8s",
      },
    },
    {
      className:
        "absolute left-[12%] top-[18%] h-28 w-28 rounded-[2rem] border border-white/40 bg-white/10 backdrop-blur-[2px] dark:border-white/12 dark:bg-white/5",
      style: {
        "--ambient-x1": "26px",
        "--ambient-y1": "14px",
        "--ambient-x2": "-12px",
        "--ambient-y2": "-18px",
        "--ambient-rotate-1": "10deg",
        "--ambient-rotate-2": "-8deg",
        "--ambient-opacity-min": "0.24",
        "--ambient-opacity-mid": "0.28",
        "--ambient-opacity-max": "0.46",
        "--ambient-duration": "16s",
        "--ambient-delay": "0.5s",
      },
    },
    {
      className:
        "absolute right-[16%] top-[14%] h-40 w-[9rem] rounded-full border border-sky-300/45 bg-sky-200/12 backdrop-blur-[2px] dark:border-sky-300/18 dark:bg-sky-300/8",
      style: {
        "--ambient-x1": "-18px",
        "--ambient-y1": "-12px",
        "--ambient-x2": "12px",
        "--ambient-y2": "20px",
        "--ambient-rotate-1": "-8deg",
        "--ambient-rotate-2": "6deg",
        "--ambient-opacity-min": "0.2",
        "--ambient-opacity-mid": "0.24",
        "--ambient-opacity-max": "0.34",
        "--ambient-duration": "19s",
        "--ambient-delay": "1.6s",
      },
    },
  ],
  contact: [
    {
      className:
        "absolute -left-16 top-12 h-52 w-52 rounded-full bg-sky-400/14 blur-3xl dark:bg-sky-500/16",
      style: {
        "--ambient-x1": "26px",
        "--ambient-y1": "-16px",
        "--ambient-x2": "-12px",
        "--ambient-y2": "12px",
        "--ambient-scale-1": "1.06",
        "--ambient-scale-2": "0.98",
        "--ambient-opacity-min": "0.35",
        "--ambient-opacity-mid": "0.4",
        "--ambient-opacity-max": "0.62",
        "--ambient-duration": "17s",
      },
    },
    {
      className:
        "absolute right-[-4rem] bottom-0 h-56 w-56 rounded-full bg-cyan-300/14 blur-3xl dark:bg-cyan-400/16",
      style: {
        "--ambient-x1": "-22px",
        "--ambient-y1": "10px",
        "--ambient-x2": "10px",
        "--ambient-y2": "-16px",
        "--ambient-scale-1": "0.96",
        "--ambient-scale-2": "1.05",
        "--ambient-opacity-min": "0.32",
        "--ambient-opacity-mid": "0.36",
        "--ambient-opacity-max": "0.55",
        "--ambient-duration": "20s",
        "--ambient-delay": "0.8s",
      },
    },
    {
      className:
        "absolute left-1/2 top-[18%] h-32 w-32 -translate-x-1/2 rounded-full border border-sky-300/35 bg-white/40 backdrop-blur-[2px] dark:border-sky-300/14 dark:bg-white/5",
      style: {
        "--ambient-x1": "12px",
        "--ambient-y1": "-14px",
        "--ambient-x2": "-16px",
        "--ambient-y2": "10px",
        "--ambient-rotate-1": "8deg",
        "--ambient-rotate-2": "-6deg",
        "--ambient-opacity-min": "0.16",
        "--ambient-opacity-mid": "0.2",
        "--ambient-opacity-max": "0.28",
        "--ambient-duration": "15s",
        "--ambient-delay": "1.1s",
      },
    },
  ],
};

export default function AmbientShapes({
  className,
  variant = "hero",
}: AmbientShapesProps) {
  const shapes = shapeMap[variant];

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_34%),radial-gradient(circle_at_80%_24%,rgba(14,165,233,0.12),transparent_28%)] dark:bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.22),transparent_34%),radial-gradient(circle_at_80%_24%,rgba(34,211,238,0.12),transparent_26%)]" />
      <div
        data-ambient-beam
        className="absolute inset-y-12 right-[8%] hidden w-28 rounded-full bg-gradient-to-b from-transparent via-white/40 to-transparent blur-md dark:via-sky-200/18 md:block"
        style={
          {
            "--ambient-duration": "14s",
          } as AmbientStyle
        }
      />
      {shapes.map((shape, index) => (
        <div
          key={`${variant}-${index}`}
          data-ambient-float
          className={shape.className}
          style={shape.style}
        />
      ))}
    </div>
  );
}
