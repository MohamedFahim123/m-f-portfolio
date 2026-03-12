"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, Dispatch, SetStateAction } from "react";
import { useEffect, useState } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";

interface NavigationProps {
  activeSection: string;
  scrollToSection: (section: string) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const Navigation = ({
  activeSection,
  scrollToSection,
  mobileMenuOpen,
  setMobileMenuOpen,
}: NavigationProps) => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);
  const sections = ["home", "about", "skills", "projects", "contact"];

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="fixed top-0 px-4 z-50 w-full bg-white shadow-md transition-colors duration-300 dark:bg-gradient-to-b dark:from-black dark:to-gray-800">
      <div className="mx-auto max-w-6xl">
        <div className="flex h-16 items-center justify-between">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            <Link href={"/"}>
              <Image
                src="/assets/favicon.svg"
                alt="mohamed fahim logo"
                width={40}
                height={40}
                priority
              />
            </Link>
          </div>

          <div className="hidden space-x-8 md:flex">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
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
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="/pdfs/Mohamed_Fahim-Mern-Stack.pdf"
              download="Mohamed_Fahim_CV.pdf"
              className="hidden items-center gap-2 rounded-full border border-purple-500 px-4 py-2 text-sm font-semibold text-purple-600 transition-all duration-300 hover:scale-105 hover:bg-purple-50 dark:text-purple-400 dark:hover:bg-white/5 sm:flex"
            >
              CV
              <AiOutlineDownload className="h-4 w-4" />
            </a>
            <button
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
              className="rounded-lg cursor-pointer p-2 transition-colors hover:scale-110"
              aria-label="Toggle theme"
            >
              {mounted && resolvedTheme === "dark" ? (
                <FaSun className="h-5 w-5 text-yellow-500" />
              ) : (
                <FaMoon className="h-5 w-5 text-gray-700" />
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-lg cursor-pointer p-2 md:hidden"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-list"
              data-mobile-nav-toggle
            >
              {mobileMenuOpen ? (
                <FaTimes className="h-5 w-5" />
              ) : (
                <FaBars className="h-5 w-5" />
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
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
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
                </button>
              ))}
              <a
                href="/pdfs/Mohamed_Fahim-Mern-Stack.pdf"
                download="Mohamed_Fahim_CV.pdf"
                data-mobile-nav-item
                style={
                  {
                    "--nav-delay": `${0.04 + sections.length * 0.05}s`,
                  } as CSSProperties
                }
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl border border-purple-500 px-4 py-3 text-sm font-semibold text-purple-600 transition-colors hover:bg-purple-50 dark:text-purple-400 dark:hover:bg-white/5"
              >
                Download CV
                <AiOutlineDownload className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
