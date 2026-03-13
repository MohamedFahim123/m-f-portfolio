"use client";

import { cn } from "@/lib/utils";
import {
  createContext,
  type CSSProperties,
  type ElementType,
  type ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

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

type MotionContextValue = {
  isReady: boolean;
  reduceMotion: boolean;
};

const MotionContext = createContext<MotionContextValue>({
  isReady: false,
  reduceMotion: false,
});

let sharedMotionObserver: IntersectionObserver | null = null;
const sharedMotionCallbacks = new WeakMap<Element, () => void>();

const getSharedMotionObserver = () => {
  if (sharedMotionObserver) {
    return sharedMotionObserver;
  }

  sharedMotionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        const callback = sharedMotionCallbacks.get(entry.target);

        if (!callback) {
          return;
        }

        callback();
        sharedMotionCallbacks.delete(entry.target);
        sharedMotionObserver?.unobserve(entry.target);
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -6% 0px",
    },
  );

  return sharedMotionObserver;
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
  const itemRef = useRef<HTMLElement | null>(null);
  const { isReady, reduceMotion } = useContext(MotionContext);
  const [isVisible, setIsVisible] = useState(false);
  const MotionTag = Tag as ElementType;

  useEffect(() => {
    const itemElement = itemRef.current;

    if (!itemElement || !isReady) {
      return;
    }

    if (reduceMotion) {
      setIsVisible(true);
      return;
    }

    const observer = getSharedMotionObserver();
    const revealItem = () => {
      setIsVisible(true);
    };

    sharedMotionCallbacks.set(itemElement, revealItem);
    observer.observe(itemElement);

    return () => {
      sharedMotionCallbacks.delete(itemElement);
      observer.unobserve(itemElement);
    };
  }, [isReady, reduceMotion]);

  return (
    <MotionTag
      ref={itemRef}
      className={cn(className)}
      data-motion-item
      data-motion-ready={isReady}
      data-motion-variant={variant}
      data-visible={isVisible}
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
  const [isReady, setIsReady] = useState(false);
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

  return (
    <MotionContext.Provider value={{ isReady, reduceMotion }}>
      <MotionTag
        id={id}
        className={cn("scroll-mt-24", className)}
        data-motion-section
        data-motion-ready={isReady}
        data-motion-variant={variant}
        style={buildMotionStyle(delay)}
      >
        {children}
      </MotionTag>
    </MotionContext.Provider>
  );
}
