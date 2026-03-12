import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import MotionSection, { MotionItem } from "./MotionSection";

const ContactSection = () => {
  return (
    <MotionSection
      as="section"
      id="contact"
      className="py-20 px-4"
      delay={0.12}
    >
      <div className="max-w-4xl mx-auto text-center">
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
        <MotionItem
          delay={0.12}
          variant="slide-right"
          className="mb-10 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-600 dark:text-gray-300"
        >
          <a
            href="tel:+201030678209"
            className="rounded-full border border-gray-300 px-4 py-2 transition-colors hover:border-blue-500 hover:text-blue-600 dark:border-gray-700 dark:hover:border-blue-400 dark:hover:text-blue-400"
          >
            +20 103 067 8209
          </a>
          <a
            href="tel:+201093359827"
            className="rounded-full border border-gray-300 px-4 py-2 transition-colors hover:border-blue-500 hover:text-blue-600 dark:border-gray-700 dark:hover:border-blue-400 dark:hover:text-blue-400"
          >
            +20 109 335 9827
          </a>
        </MotionItem>
        <div className="flex flex-wrap justify-center gap-8">
          <MotionItem delay={0.14} variant="slide-right">
            <a
              href="mailto:mohamedfahim1045@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-green-600 transition-colors"
            >
              <SiGmail className="w-12 h-12 mb-2" />
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
              <FaGithub className="w-12 h-12 mb-2" />
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
              <FaLinkedin className="w-12 h-12 mb-2" />
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
              <FaWhatsapp className="w-12 h-12 mb-2" />
              <span>WhatsApp</span>
            </a>
          </MotionItem>
        </div>
      </div>
    </MotionSection>
  );
};

export default React.memo(ContactSection);
