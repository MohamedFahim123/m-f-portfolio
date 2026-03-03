"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import type { Dispatch, SetStateAction } from "react";
import { useEffect, useState } from "react";
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
    <nav className="fixed top-0 z-50 w-full bg-white shadow-md transition-colors duration-300 dark:bg-gradient-to-b dark:from-black dark:to-gray-800">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
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
                className={`capitalize ${
                  activeSection === section
                    ? "border-b-1 text-blue-600 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-300"
                } transition-colors hover:text-blue-600 dark:hover:text-blue-400`}
              >
                {section}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
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
            >
              {mobileMenuOpen ? (
                <FaTimes className="h-5 w-5" />
              ) : (
                <FaBars className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="space-y-2 py-4 md:hidden">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block w-full rounded px-4 py-2 text-left capitalize text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                {section}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
