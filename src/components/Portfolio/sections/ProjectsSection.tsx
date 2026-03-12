import React from "react";
import ProjectCard from "../../ProjectCards";
import MotionSection, { MotionItem } from "./MotionSection";
const ProjectsSection = () => {
  const projects = [
    {
      title: "WDI Multi Vendor E-Commerce",
      description:
        "Multi-vendor e-commerce platform built with Next.js, TypeScript, and Tailwind CSS. Features a polished storefront experience with category browsing, product discovery, and a responsive shopping flow across devices.",
      tech: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "ShadCN UI",
        "i18next",
        "Zustand",
        "sooner",
        "react-pro-sidebar",
        "react-hook-form",
      ],
      demo: "https://wdi-dev-e-commerce.vercel.app/en",
      image: "/assets/wdi.webp",
    },
    {
      title: "FunJoy",
      description:
        "Interactive storefront for FunJoy, centered on browsing inflatable games and party experiences through a playful, conversion-focused user experience.",
      tech: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "ShadCN UI",
        "framer-motion",
        "react-hook-form",
      ],
      demo: "https://fun-joy-front.vercel.app/",
      image: "/assets/funjoy.webp",
    },
    {
      title: "VAMAR Interior Design",
      description:
        "Brand-focused website for VAMAR Interior Design, showcasing services, company information, contact paths, and a polished visual presentation tailored to the interior design space.",
      tech: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "ShadCN UI",
        "framer-motion",
        "nodemailer",
        "react-hook-form",
      ],
      demo: "https://www.vamar.ae/",
      image: "/assets/vamar.webp",
    },
    {
      title: "UP Site",
      description:
        "Responsive landing-page style website with a polished presentation and conversion-focused sections, deployed on Vercel for a fast public-facing experience.",
      tech: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "ShadCN UI",
        "framer-motion",
      ],
      demo: "https://up-site-omega.vercel.app/",
      github: "https://github.com/MohamedFahim123/UpSite",
      image: "/assets/upsite.webp",
    },
    {
      title: "TECNO E-Commerce",
      description:
        "Multi-actor e-commerce platform with customer, seller, and admin dashboards. Includes authentication, wishlist and cart flows, product browsing, order history, and responsive storefront experiences built in a component-based SPA.",
      tech: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Bootstrap",
        "IndexedDB",
        "Chart.js",
        "Swiper.js",
      ],
      github: "https://github.com/MohamedFahim123/cst-project",
      demo: "https://cst-project-xi.vercel.app",
      image: "/assets/tecno.webp",
    },
    {
      title: "BookStoreTask",
      description:
        "Bookstore web app with authentication, cart syncing, checkout using Stripe, and modular routing. Built with a scalable React + TypeScript setup and Redux-powered state management.",
      tech: [
        "React",
        "TypeScript",
        "Redux Toolkit",
        "React Router",
        "Stripe",
        "Vite",
      ],
      github: "https://github.com/MohamedFahim123/BookStoreTask",
      demo: "https://book-store-task.vercel.app",
      image: "/assets/bookstore.webp",
    },
  ];

  return (
    <MotionSection
      as="section"
      id="projects"
      className="py-20 px-4 bg-white dark:bg-gray-800"
      delay={0.1}
    >
      <div className="max-w-6xl mx-auto">
        <MotionItem
          as="h2"
          className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12"
          variant="fade"
        >
          Featured Projects
        </MotionItem>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <MotionItem
              key={project.title}
              className="h-full"
              delay={0.08 + index * 0.05}
              variant="zoom"
            >
              <ProjectCard project={project} />
            </MotionItem>
          ))}
        </div>
      </div>
    </MotionSection>
  );
};

export default React.memo(ProjectsSection);
