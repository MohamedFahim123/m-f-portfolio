import React from "react";
import MotionSection from "./MotionSection";

const AboutSection = () => {
  return (
    <MotionSection
      as="section"
      id="about"
      className="py-20 px-4 dark:bg-gray-800 [content-visibility:auto] [contain-intrinsic-size:1px_560px]"
      delay={0.05}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          About Me
        </h2>
        <div className="grid sm:grid-cols-1 gap-12 items-center">
          <div className="text-lg text-gray-800 dark:text-gray-300">
            <p className=" mb-4">
              I{"'"}m a passionate full-stack developer with expertise in
              building modern web applications using the MEARN stack. I love
              creating efficient, scalable, and user-friendly solutions.
            </p>
            <p className="mb-4">
              With a strong foundation in both frontend and backend development,
              I bring ideas to life through clean code and intuitive design.
            </p>
            <p>
              When I{"'"}m not coding, I{"'"}m learning new technologies.
            </p>
          </div>
        </div>
      </div>
    </MotionSection>
  );
};

export default React.memo(AboutSection);
