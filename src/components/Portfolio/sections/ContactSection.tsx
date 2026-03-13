import React from "react";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  WhatsappIcon,
} from "@/components/Icons";
import AmbientShapes from "./AmbientShapes";
import MotionSection, { MotionItem } from "./MotionSection";
import Container from "@/components/ui/Container";

const ContactSection = () => {
  return (
    <MotionSection
      as="section"
      id="contact"
      className="relative overflow-hidden py-20 px-4"
      delay={0.12}
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(233,247,255,0.78)_48%,rgba(255,255,255,0)_100%)] dark:bg-[linear-gradient(180deg,rgba(2,6,23,0)_0%,rgba(8,47,73,0.26)_46%,rgba(2,6,23,0)_100%)]"></div>
      <AmbientShapes variant="contact" className="opacity-90" />
      <Container className="relative z-10 max-w-4xl mx-auto overflow-hidden text-center">
        <MotionItem
          as="h2"
          className="text-4xl font-bold text-gray-900 dark:text-white mb-8"
          variant="fade"
        >
          Get In Touch
        </MotionItem>
        <MotionItem
          as="p"
          className="text-xl text-gray-600 dark:text-gray-300 mb-12"
          delay={0.08}
          variant="fade"
        >
          I{"'"}m open to front-end and full-stack opportunities, freelance
          work, and product collaborations.
        </MotionItem>
        <div className="mb-10 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-600 dark:text-gray-300">
          <MotionItem delay={0.12} variant="slide-right">
            <a
              href="tel:+201030678209"
              className="rounded-full border border-gray-300 px-4 py-2 transition-colors hover:border-blue-500 hover:text-blue-600 dark:border-gray-700 dark:hover:border-blue-400 dark:hover:text-blue-400"
            >
              +20 103 067 8209
            </a>
          </MotionItem>
          <MotionItem delay={0.18} variant="slide-left">
            <a
              href="tel:+201093359827"
              className="rounded-full border border-gray-300 px-4 py-2 transition-colors hover:border-blue-500 hover:text-blue-600 dark:border-gray-700 dark:hover:border-blue-400 dark:hover:text-blue-400"
            >
              +20 109 335 9827
            </a>
          </MotionItem>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <MotionItem delay={0.14} variant="slide-right">
            <a
              href="mailto:mohamedfahim1045@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-green-600 transition-colors"
            >
              <MailIcon className="mb-2 h-12 w-12" />
              <span>Email</span>
            </a>
          </MotionItem>
          <MotionItem delay={0.2} variant="fade-up">
            <a
              href="https://github.com/MohamedFahim123"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center text-gray-600 dark:text-gray-300  hover:text-black dark:hover:text-white  transition-colors"
            >
              <GithubIcon className="mb-2 h-12 w-12" />
              <span>GitHub</span>
            </a>
          </MotionItem>
          <MotionItem delay={0.26} variant="fade-up">
            <a
              href="https://www.linkedin.com/in/mohamed-elsayed-63ab39249"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors"
            >
              <LinkedinIcon className="mb-2 h-12 w-12" />
              <span>LinkedIn</span>
            </a>
          </MotionItem>
          <MotionItem delay={0.32} variant="slide-left">
            <a
              href="https://wa.me/201030678209"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-green-600 transition-colors"
            >
              <WhatsappIcon className="mb-2 h-12 w-12" />
              <span>WhatsApp</span>
            </a>
          </MotionItem>
        </div>
      </Container>
    </MotionSection>
  );
};

export default React.memo(ContactSection);
