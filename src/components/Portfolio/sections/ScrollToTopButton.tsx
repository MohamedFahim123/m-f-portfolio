"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateScrollState = () => {
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress =
        scrollHeight > 0 ? Math.min(scrollTop / scrollHeight, 1) : 0;

      setIsVisible(scrollTop > 320);
      setProgress(nextProgress);
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateScrollState);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed cursor-pointer right-4 bottom-4 z-40 sm:right-8 sm:bottom-8 ${
        isVisible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-5 opacity-0"
      } transition-all duration-300 ease-out`}
      style={{
        background: `conic-gradient(from 180deg, #ad46ff ${
          progress * 360
        }deg, rgb(203 213 225 / 0.45) 0deg)`,
        borderRadius: "9999px",
        padding: "2px",
      }}
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/95 text-purple-500 shadow-[0_14px_30px_rgba(37,99,235,0.25)] backdrop-blur transition-transform duration-300 hover:-translate-y-1 dark:bg-gray-900/95 dark:text-purple-500">
        <FaArrowUp className="h-4 w-4 animate-[bounce_2.2s_ease-in-out_infinite]" />
      </span>
    </button>
  );
}
