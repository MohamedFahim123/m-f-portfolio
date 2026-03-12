import React from "react";
import SkillBar from "../../SkillsBar";
import MotionSection, { MotionItem } from "./MotionSection";

const SkillsSection = () => {
  const skills = {
    languages: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "SASS"],
    frontend: [
      "React.js",
      "Next.js",
      "Angular",
      "Tailwind CSS",
      "Bootstrap",
      "MUI",
    ],
    state: [
      "Redux",
      "Redux Toolkit",
      "Zustand",
      "React Query",
      "Context API",
    ],
    backend: [
      "Node.js",
      "Express.js",
      "Nest.js",
      "GraphQL",
      "JWT",
      "Bcrypt.js",
      "Multer",
    ],
    forms: [
      "React Hook Form",
      "Formik",
      "Yup",
      "Zod",
      "Validator",
    ],
    tools: ["Git", "GitHub", "Postman", "Axios", "Chart.js", "Framer Motion"],
    focus: [
      "Responsive Design",
      "Performance Optimization",
      "SSR / SSG",
      "API Integration",
      "Web Accessibility",
    ],
  };

  return (
    <MotionSection
      as="section"
      id="skills"
      className="py-20 px-4 [content-visibility:auto] [contain-intrinsic-size:1px_960px]"
      delay={0.08}
    >
      <div className="max-w-6xl mx-auto">
        <MotionItem
          as="h2"
          className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12"
          variant="fade"
        >
          Skills & Technologies
        </MotionItem>
        <MotionItem delay={0.08} variant="fade" className="mb-5">
          <SkillBar />
        </MotionItem>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], index) => (
            <MotionItem
              key={category}
              className="relative group h-full"
              delay={0.12 + index * 0.06}
              variant={index % 2 === 0 ? "slide-right" : "slide-left"}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative h-full bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 capitalize flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3 text-white text-sm font-bold">
                    {category[0].toUpperCase()}
                  </span>
                  {category}
                </h3>
                <div className="space-y-2">
                  {items.map((skill) => (
                    <div key={skill} className="flex items-center group/item">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3 group-hover/item:scale-150 transition-transform"></div>
                      <span className="text-gray-700 dark:text-gray-300 group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400 transition-colors">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </MotionItem>
          ))}
        </div>
      </div>
    </MotionSection>
  );
};

export default React.memo(SkillsSection);
