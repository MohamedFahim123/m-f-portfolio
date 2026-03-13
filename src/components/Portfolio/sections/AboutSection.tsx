import React from "react";
import MotionSection, { MotionItem } from "./MotionSection";
import Container from "@/components/ui/Container";

const AboutSection = () => {
  return (
    <MotionSection
      as="section"
      id="about"
      className="py-20 px-4 dark:bg-gray-800 [content-visibility:auto] [contain-intrinsic-size:1px_560px]"
      delay={0.05}
    >
      <Container>
        <MotionItem
          as="h2"
          className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12"
          variant="fade"
        >
          About Me
        </MotionItem>
        <div className="grid sm:grid-cols-1 gap-12 items-center">
          <MotionItem
            as="p"
            className="text-lg text-gray-800 dark:text-gray-300 mb-4"
            delay={0.1}
            variant="slide-right"
          >
            I{"'"}m a front-end developer with 2 years of experience building
            responsive, high-performance web applications using React.js,
            Next.js, and TypeScript. I care deeply about clean architecture,
            accessible UI, and performance-focused implementation.
          </MotionItem>
          <MotionItem
            as="p"
            className="text-lg text-gray-800 dark:text-gray-300 mb-4"
            delay={0.18}
            variant="fade"
          >
            I{"'"}m currently working as a Full-Stack Developer at Pulse
            Management, where I ship production experiences like WDI, Vamar,
            and UpSite. Before that, I worked remotely as a Front-End Developer
            at Valkii and helped deliver 7+ client-facing products for real
            users.
          </MotionItem>
          <MotionItem
            as="p"
            className="text-lg text-gray-800 dark:text-gray-300"
            delay={0.26}
            variant="slide-left"
          >
            My background also includes the ITI intensive MERN program, and I
            enjoy solving product problems through scalable components,
            state-driven interfaces, SSR/SSG patterns, and polished user
            experiences.
          </MotionItem>
        </div>
      </Container>
    </MotionSection>
  );
};

export default React.memo(AboutSection);
