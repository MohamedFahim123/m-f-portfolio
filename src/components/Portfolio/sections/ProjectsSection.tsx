import React from "react";
import ProjectCard from "../../ProjectCards";
import MotionSection from "./MotionSection";
const ProjectsSection = () => {
  const projects = [
    {
      title: "Skill-Up (Full-Stack)",
      description: `A Full-stack education platform.
            Key technical implementations include JWT auth with role-based authorization (RBAC),
            an optimized video delivery system for lessons, and automated email services for account security.
            Stripe Payment Integration.
            The platform also features 3 Dashboards for instructors, students, and admins. each dashboard has its own features and permissions.`,
      tech: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Next.js",
        "React.js",
        "Zustand",
        "CSS3",
        "Tawilwind CSS",
        "Framer Motion",
      ],
      github: "https://github.com/Ahmed-Ossamaa/skill-up",
      demo: "https://skill-up-edu.vercel.app/",
      image: "/assets/project.webp",
    },
    {
      title: "El-Mister LMS (Full-Stack)",
      description: `Full-stack Private Lessons platform.
            Key technical implementations include JWT auth with role-based authorization (RBAC),
            Socket.io for real-time Chat between users and Notification system.
            AI Integration(for C.S), Sripe Payment Integration,OAuth Integration.
            an optimized video delivery system for lessons, and automated email services for account security.
            The platform also features 4 Dashboards for instructors,Parents, students, and admins.`,
      tech: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Socket.io",
        "Next.js",
        "React.js",
        "Redux",
        "CSS3",
        "Tawilwind CSS",
        "Framer Motion",
      ],
      github: [
        "https://github.com/Ahmed-Ossamaa/lms-elmister-iti-api",
        "https://github.com/Ahmed-Ossamaa/lms-elmister-iti-ui",
      ],
      demo: "https://lms-elmister-iti-ui.vercel.app/",
      image: "/assets/project.webp",
    },

    {
      title: "E-Commerce Platform",
      description:
        "SPA e-commerce with user authentication, Admin dashboard (Management and Stats), using only Vanilla JS. (No Frameworks)",
      tech: ["JS", "HTML5", "CSS3", "Bootstrap"],
      github: "https://github.com/Ahmed-Ossamaa/Ecommerce-ITI-Vanilla-js",
      demo: "https://e-commerce-iti-delta.vercel.app/",
      image:
        "/assets/project.webp",
    },
    {
      title: "Book Tracker (Full-Stack)",
      description:
        "Full-stack Book tracking app with full CRUD operations and JWT auth. Admin Dashboard featuring role-based access control for usesr and book management",
      tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/Ahmed-Ossamaa/book-tracker",
      demo: "https://book-tracker-delta-pearl.vercel.app/",
      image: "/assets/project.webp",
    },

    {
      title: "Nala Automotive (Full-Stack)",
      description:
        "Full-stack Car resale platform with full CRUD operations and JWT auth .Admin Dashboard featuring role-based access control for users and cars management",
      tech: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Tailwind CSS",
        "React-Query",
      ],
      github: "https://github.com/Ahmed-Ossamaa/Nala-Automotive",
      demo: "https://nala-automotive.vercel.app/",
      image: "/assets/project.webp",
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
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
     
    </MotionSection>
  );
};

export default React.memo(ProjectsSection);
