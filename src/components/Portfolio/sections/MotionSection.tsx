"use client";

import { ElementType, ReactNode, useEffect, useState } from "react";

interface MotionSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
  id?: string;
}

type FramerModule = typeof import("framer-motion");
let framerModuleCache: FramerModule | null = null;
let framerModulePromise: Promise<FramerModule> | null = null;

const loadFramerMotion = () => {
  if (framerModuleCache) return Promise.resolve(framerModuleCache);
  if (!framerModulePromise) {
    framerModulePromise = import("framer-motion").then((module) => {
      framerModuleCache = module;
      return module;
    });
  }
  return framerModulePromise;
};

export default function MotionSection({
  children,
  className,
  delay = 0,
  as: Tag = "div",
  id,
}: MotionSectionProps) {
  const [framer, setFramer] = useState<FramerModule | null>(null);
  const [reduceMotion, setReduceMotion] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setReduceMotion(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    let mounted = true;
    loadFramerMotion().then((module) => {
      if (mounted) setFramer(module);
    });

    return () => {
      mounted = false;
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  if (!framer || reduceMotion) {
    return (
      <Tag id={id} className={className}>
        {children}
      </Tag>
    );
  }

  const MotionTag = framer.motion.create(Tag);

  return (
    <MotionTag
      id={id}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.45, ease: "easeOut", delay }}
    >
      {children}
    </MotionTag>
  );
}
