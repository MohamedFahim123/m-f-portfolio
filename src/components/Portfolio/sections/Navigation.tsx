"use client";

import { useTheme } from "next-themes";
import {
  CloseIcon,
  DownloadIcon,
  MenuIcon,
  MoonIcon,
  SunIcon,
} from "@/components/Icons";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import Container from "@/components/ui/Container";

const sections = ["home", "about", "skills", "projects", "contact"] as const;

const Navigation = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const elements = sections
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    if (elements.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        threshold: [0.2, 0.4, 0.6],
        rootMargin: "-80px 0px -45% 0px",
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 z-50 w-full px-4 bg-white shadow-md transition-colors duration-300 dark:bg-gradient-to-b dark:from-black dark:to-gray-800">
      <Container className="overflow-hidden">
        <div className="flex h-16 items-center justify-between">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            <Link href="/">
              <Image
                src="/assets/favicon.svg"
                alt="mohamed fahim logo"
                width={40}
                height={40}
                sizes="40px"
              />
            </Link>
          </div>

          <div className="hidden space-x-8 md:flex">
            {sections.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className={`relative rounded-full px-1 py-1 capitalize ${
                  activeSection === section
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-300"
                } transition-colors hover:text-blue-600 dark:hover:text-blue-400`}
              >
                <span className="relative z-10">{section}</span>
                <span
                  className={`absolute inset-x-0 -bottom-1 mx-auto h-0.5 rounded-full bg-blue-500 transition-all duration-300 ${
                    activeSection === section
                      ? "w-full opacity-100"
                      : "w-0 opacity-0"
                  }`}
                />
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Link
              href="/pdfs/Mohamed_Fahim-Mern-Stack.pdf"
              download="Mohamed_Fahim_CV.pdf"
              className="hidden items-center gap-2 rounded-full border border-purple-500 px-4 py-2 text-sm font-semibold text-purple-600 transition-all duration-300 hover:scale-105 hover:bg-purple-50 dark:text-purple-400 dark:hover:bg-white/5 sm:flex"
            >
              CV
              <DownloadIcon className="h-4 w-4" />
            </Link>
            <button
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
              className="rounded-lg cursor-pointer p-2 transition-colors hover:scale-110"
              aria-label="Toggle theme"
              name="theme-toggle"
              title="theme-toggle"
            >
              {mounted && resolvedTheme === "dark" ? (
                <SunIcon className="h-5 w-5 text-yellow-500" />
              ) : (
                <MoonIcon className="h-5 w-5 text-gray-700" />
              )}
            </button>

            <button
              name="mobile-nav-toggle"
              title="mobile-nav-toggle"
              onClick={() => setMobileMenuOpen((current) => !current)}
              className="rounded-lg cursor-pointer p-2 md:hidden"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-list"
              data-mobile-nav-toggle
            >
              {mobileMenuOpen ? (
                <CloseIcon className="h-5 w-5" />
              ) : (
                <MenuIcon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        <div
          className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out md:hidden ${
            mobileMenuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="min-h-0">
            <div
              id="mobile-nav-list"
              data-mobile-nav={mobileMenuOpen ? "open" : "closed"}
              className="mt-2 rounded-2xl border border-white/50 bg-white/90 p-2 shadow-lg backdrop-blur dark:border-white/10 dark:bg-gray-900/90"
            >
              {sections.map((section, index) => (
                <a
                  title={`mobile-nav-item-${section}`}
                  key={section}
                  href={`#${section}`}
                  onClick={closeMobileMenu}
                  data-mobile-nav-item
                  style={
                    {
                      "--nav-delay": `${0.04 + index * 0.05}s`,
                    } as CSSProperties
                  }
                  className={`block w-full rounded-xl px-4 py-3 text-left capitalize transition-colors ${
                    activeSection === section
                      ? "bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400"
                      : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                  }`}
                >
                  {section}
                </a>
              ))}
              <Link
                href="/pdfs/Mohamed_Fahim-Mern-Stack.pdf"
                download="Mohamed_Fahim_CV.pdf"
                onClick={closeMobileMenu}
                data-mobile-nav-item
                style={
                  {
                    "--nav-delay": `${0.04 + sections.length * 0.05}s`,
                  } as CSSProperties
                }
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl border border-purple-500 px-4 py-3 text-sm font-semibold text-purple-600 transition-colors hover:bg-purple-50 dark:text-purple-400 dark:hover:bg-white/5"
              >
                Download CV
                <DownloadIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navigation;
