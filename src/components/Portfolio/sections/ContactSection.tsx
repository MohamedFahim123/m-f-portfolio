import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import MotionSection from "./MotionSection";
const ContactSection = () => {
  return (
    <MotionSection
      as="section"
      id="contact"
      className="py-20 px-4"
      delay={0.12}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Get In Touch
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
          I{"'"}m always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>
        <div className="flex justify-center space-x-8">
          <a
            href="mailto:aossama2015@gmail.com"
            target="_blank"
            className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-green-600 transition-colors"
          >
            <SiGmail className="w-12 h-12 mb-2" />
            <span>Email</span>
          </a>
          <a
            href="https://github.com/Ahmed-Ossamaa"
            target="_blank"
            className="flex flex-col items-center text-gray-600 dark:text-gray-300  hover:text-black dark:hover:text-white  transition-colors"
          >
            <FaGithub className="w-12 h-12 mb-2" />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/ahmed-ossama25/"
            target="_blank"
            className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors"
          >
            <FaLinkedin className="w-12 h-12 mb-2" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://wa.me/201554580561"
            target="_blank"
            className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-green-600 transition-colors"
          >
            <FaWhatsapp className="w-12 h-12 mb-2" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </MotionSection>
  );
};

export default React.memo(ContactSection);
