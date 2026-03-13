
import { ExternalLinkIcon, GithubIcon } from "@/components/Icons";
import Image from "next/image";
import Link from "next/link";
import { MotionItem } from "./Portfolio/sections/MotionSection";

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
  delay?: number;
}

const ProjectCard = ({ project, delay = 0 }: ProjectCardProps) => {
  return (
    <div className="group relative h-full">
      <div className="absolute -inset-1 rounded-xl bg-gray-500 opacity-25 blur transition duration-500 group-hover:opacity-75"></div>
      <div className="relative flex h-full flex-col overflow-hidden rounded-xl bg-white dark:bg-gray-900">
        <MotionItem
          className="relative flex h-60 items-center justify-center overflow-hidden"
          delay={delay}
          variant="zoom"
        >
          <Link
            target="_blank"
            href={project.demo}
            className="relative block h-full w-full"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
              loading="lazy"
              className="object-cover"
            />
          </Link>
        </MotionItem>
        <div className="flex h-full flex-col p-6">
          <MotionItem
            as="h3"
            className="mb-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-purple-600 dark:text-white dark:group-hover:text-purple-400"
            delay={delay + 0.06}
            variant="slide-right"
          >
            <Link target="_blank" href={project.demo}>
              {project.title}
            </Link>
          </MotionItem>
          <MotionItem
            as="p"
            className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300"
            delay={delay + 0.12}
            variant="fade"
          >
            {project.description}
          </MotionItem>
          <div className="mb-4 flex flex-wrap gap-2">
            {project.tech.map((tech, index) => (
              <MotionItem
                key={tech}
                as="span"
                className="rounded-full bg-gradient-to-r from-blue-100 to-purple-100 px-3 py-1 text-xs font-medium text-purple-700 dark:from-blue-900/30 dark:to-purple-900/30 dark:text-purple-300"
                delay={delay + 0.16 + index * 0.02}
                variant="fade"
              >
                {tech}
              </MotionItem>
            ))}
          </div>
          <div className="mt-auto flex space-x-4">
            {project.github &&
              (typeof project.github === "string" ? (
                <MotionItem delay={delay + 0.3} variant="slide-right">
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center text-gray-600 transition-colors hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
                  >
                    <GithubIcon className="mr-1 h-5 w-5" />
                    Code
                  </Link>
                </MotionItem>
              ) : (
                <>
                  <MotionItem delay={delay + 0.3} variant="slide-right">
                    <Link
                      href={project.github[0]}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center text-gray-600 transition-colors hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
                    >
                      <GithubIcon className="mr-1 h-5 w-5" />
                      FE-Repo
                    </Link>
                  </MotionItem>
                  <MotionItem delay={delay + 0.34} variant="slide-right">
                    <Link
                      href={project.github[1]}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center text-gray-600 transition-colors hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
                    >
                      <GithubIcon className="mr-1 h-5 w-5" />
                      BE-Repo
                    </Link>
                  </MotionItem>
                </>
              ))}
            <MotionItem delay={delay + 0.38} variant="slide-left">
              <Link
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center text-gray-600 transition-colors hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
              >
                <ExternalLinkIcon className="mr-1 h-5 w-5" />
                Demo
              </Link>
            </MotionItem>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
