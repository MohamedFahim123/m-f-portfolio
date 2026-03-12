import React from "react";
import MotionSection, { MotionItem } from "./MotionSection";

const AboutSection = () => {
  return (
    <MotionSection
      as="section"
      id="about"
      className="py-20 px-4 dark:bg-gray-800 [content-visibility:auto] [contain-intrinsic-size:1px_560px]"
      delay={0.05}
    >
      <div className="max-w-6xl mx-auto">
        <MotionItem
          as="h2"
          className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12"
          variant="fade"
        >
          About Me
        </MotionItem>
        <div className="grid sm:grid-cols-1 gap-12 items-center">
          <MotionItem
            className="text-lg text-gray-800 dark:text-gray-300"
            delay={0.1}
            variant="slide-right"
          >
            <p className=" mb-4">
              I{"'"}m a front-end developer with 2 years of experience building
              responsive, high-performance web applications using React.js,
              Next.js, and TypeScript. I care deeply about clean architecture,
              accessible UI, and performance-focused implementation.
            </p>
            <p className="mb-4">
              I{"'"}m currently working as a Full-Stack Developer at Pulse
              Management, where I ship production experiences like WDI, Vamar,
              and UpSite. Before that, I worked remotely as a Front-End
              Developer at Valkii and helped deliver 7+ client-facing products
              for real users.
            </p>
            <p>
              My background also includes the ITI intensive MERN program, and I
              enjoy solving product problems through scalable components,
              state-driven interfaces, SSR/SSG patterns, and polished user
              experiences.
            </p>
          </MotionItem>
        </div>
      </div>
    </MotionSection>
  );
};

export default React.memo(AboutSection);
