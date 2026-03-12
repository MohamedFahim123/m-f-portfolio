"use client";

import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string | string[];
  demo: string;
  image: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="group relative h-full">
      <div className="absolute -inset-1 rounded-xl bg-gray-500 opacity-25 blur transition duration-500 group-hover:opacity-75"></div>
      <div className="relative flex h-full flex-col overflow-hidden rounded-xl bg-white dark:bg-gray-900">
        <div className="relative flex h-60 items-center justify-center overflow-hidden">
          <Link target="_blank" href={project.demo}>
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="max-width: 200px; max-height: 200px;"
              loading="lazy"
              className="h-full w-full object-fit"
            />
          </Link>
        </div>
        <div className="flex h-full flex-col p-6">
          <h3 className="mb-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-purple-600 dark:text-white dark:group-hover:text-purple-400">
            <Link target="_blank" href={project.demo}>
              {project.title}
            </Link>
          </h3>
          <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            {project.description}
          </p>
          <div className="mb-4 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-gradient-to-r from-blue-100 to-purple-100 px-3 py-1 text-xs font-medium text-purple-700 dark:from-blue-900/30 dark:to-purple-900/30 dark:text-purple-300"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-auto flex space-x-4">
            {project.github &&
              (typeof project.github === "string" ? (
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center text-gray-600 transition-colors hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
                >
                  <FaGithub className="mr-1 h-5 w-5" />
                  Code
                </Link>
              ) : (
                <>
                  <Link
                    href={project.github[0]}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center text-gray-600 transition-colors hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
                  >
                    <FaGithub className="mr-1 h-5 w-5" />
                    FE-Repo
                  </Link>
                  <Link
                    href={project.github[1]}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center text-gray-600 transition-colors hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
                  >
                    <FaGithub className="mr-1 h-5 w-5" />
                    BE-Repo
                  </Link>
                </>
              ))}
            <Link
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center text-gray-600 transition-colors hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
            >
              <FaExternalLinkAlt className="mr-1 h-5 w-5" />
              Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
