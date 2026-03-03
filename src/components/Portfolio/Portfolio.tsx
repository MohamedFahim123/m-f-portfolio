"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Footer from "./sections/Footer";
import HeroSection from "./sections/HeroSection";
import Navigation from "./sections/Navigation";

const AboutSection = dynamic(() => import("./sections/AboutSection"));
const ContactSection = dynamic(() => import("./sections/ContactSection"));
const ProjectsSection = dynamic(() => import("./sections/ProjectsSection"));
const SkillsSection = dynamic(() => import("./sections/SkillsSection"));

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const sections = ["home", "about", "skills", "projects", "contact"] as const;

  useEffect(() => {
    const observedElements = new Set<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id !== "home") {
            entry.target.classList.add("section-visible");
          }
        });
      },
      {
        root: null,
        threshold: [0.15, 0.35, 0.55],
        rootMargin: "-80px 0px -50% 0px",
      },
    );

    const observeAvailableSections = () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (!element || observedElements.has(element)) return;
        if (id !== "home") {
          element.classList.add("scroll-reveal");
        }
        observer.observe(element);
        observedElements.add(element);
      });
    };

    observeAvailableSections();

    const domObserver = new MutationObserver(() => {
      observeAvailableSections();
    });
    domObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      domObserver.disconnect();
      observer.disconnect();
      observedElements.clear();
    };
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navigation
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <main>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
