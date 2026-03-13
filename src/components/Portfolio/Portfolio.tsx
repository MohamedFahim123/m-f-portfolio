import Footer from "./sections/Footer";
import HeroSection from "./sections/HeroSection";
import Navigation from "./sections/Navigation";
import ScrollToTopButton from "./sections/ScrollToTopButton";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";
import ProjectsSection from "./sections/ProjectsSection";
import SkillsSection from "./sections/SkillsSection";

export default function Portfolio() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <ScrollToTopButton />
      <Footer />
    </>
  );
}
