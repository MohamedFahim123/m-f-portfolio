"use client";

import { cn } from "@/lib/utils";
import type { CSSProperties, ElementType, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

type MotionVariant =
  | "fade"
  | "fade-up"
  | "zoom"
  | "slide-left"
  | "slide-right";

interface MotionSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
  id?: string;
  variant?: MotionVariant;
}

interface MotionItemProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
  variant?: MotionVariant;
}

type MotionStyle = CSSProperties & {
  "--motion-delay"?: string;
};

const buildMotionStyle = (delay: number): MotionStyle => ({
  "--motion-delay": `${delay}s`,
});

export function MotionItem({
  children,
  className,
  delay = 0,
  as: Tag = "div",
  variant = "fade-up",
}: MotionItemProps) {
  const MotionTag = Tag as ElementType;

  return (
    <MotionTag
      className={cn(className)}
      data-motion-item
      data-motion-variant={variant}
      style={buildMotionStyle(delay)}
    >
      {children}
    </MotionTag>
  );
}

export default function MotionSection({
  children,
  className,
  delay = 0,
  as: Tag = "div",
  id,
  variant = "fade-up",
}: MotionSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const MotionTag = Tag as ElementType;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const syncMotionPreference = (event?: MediaQueryListEvent) => {
      setReduceMotion(event?.matches ?? mediaQuery.matches);
    };

    setIsReady(true);
    syncMotionPreference();
    mediaQuery.addEventListener("change", syncMotionPreference);

    return () => {
      mediaQuery.removeEventListener("change", syncMotionPreference);
    };
  }, []);

  useEffect(() => {
    const sectionElement = sectionRef.current;

    if (!sectionElement || !isReady) {
      return;
    }

    if (reduceMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          setIsVisible(true);
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -12% 0px",
      },
    );

    observer.observe(sectionElement);

    return () => {
      observer.disconnect();
    };
  }, [isReady, reduceMotion]);

  return (
    <MotionTag
      ref={sectionRef}
      id={id}
      className={cn(className)}
      data-motion-section
      data-motion-ready={isReady}
      data-motion-variant={variant}
      data-visible={isVisible}
      style={buildMotionStyle(delay)}
    >
      {children}
    </MotionTag>
  );
}
