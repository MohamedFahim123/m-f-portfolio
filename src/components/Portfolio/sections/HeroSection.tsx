import Image from "next/image";
import Link from "next/link";
import React from "react";
import { DownloadIcon } from "@/components/Icons";
import AmbientShapes from "./AmbientShapes";
import MotionSection, { MotionItem } from "./MotionSection";
import Container from "@/components/ui/Container";

const HeroSection = () => {
  return (
    <MotionSection
      as="section"
      id="home"
      className="pt-32 pb-20 px-4 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(248,251,255,0.98)_0%,rgba(236,244,255,0.98)_48%,rgba(245,247,255,0.98)_100%)] dark:bg-[linear-gradient(135deg,rgba(2,6,23,0.98)_0%,rgba(15,23,42,0.98)_52%,rgba(8,15,30,0.98)_100%)]"></div>
      <AmbientShapes variant="hero" />
      <Container className="text-center relative z-10">
        <MotionItem
          delay={0.08}
          className="mb-2 bg-gray-200 w-fit mx-auto rounded-full border-1 shadow-[0_6px_15px_rgba(0,0,0,0.18),0_25px_50px_rgba(0,0,0,0.28),0_60px_120px_rgba(0,0,0,0.25),0_0_0_1px_rgba(255,255,255,0.06)_inset]"
          variant="zoom"
        >
          <Image
            src="/assets/MyImage.webp"
            width={300}
            height={300}
            alt="my image"
            priority
            fetchPriority="high"
            quality={75}
            sizes="(max-width: 640px) 250px, 300px"
            className="h-[250px] w-[250px] object-contain object-top mx-auto rounded-full sm:h-[300px] sm:w-[300px]"
          />
        </MotionItem>
        <MotionItem
          as="h1"
          delay={0.16}
          className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight"
          variant="slide-right"
        >
          <span className="bg-gradient-to-br from-black via-blue-900 to-gray-800 bg-clip-text text-transparent dark:from-gray-900 dark:via-white dark:to-gray-400">
            Mohamed Fahim
          </span>
        </MotionItem>
        <MotionItem
          as="p"
          delay={0.24}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 font-light"
          variant="fade"
        >
          Front-End Developer | React, Next.js & TypeScript
        </MotionItem>
        <div className="flex flex-col items-center justify-center gap-10 sm:gap-4 sm:flex-row">
          <MotionItem as="div" delay={0.32} variant="slide-right">
            <Link
              href="#contact"
              className="px-8 py-3  bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold"
            >
              Get In Touch
            </Link>
          </MotionItem>
          <MotionItem as="div" delay={0.4} variant="slide-left">
            <a
              href="/pdfs/Mohamed_Fahim-Mern-Stack.pdf"
              download="Mohamed_Fahim_CV.pdf"
              className="px-8 py-3 border-2 border-purple-600 text-purple-600 dark:text-purple-400 rounded-full  hover:scale-105 transition-all duration-300 font-semibold"
            >
              Download CV
              <DownloadIcon className="ml-2 inline-block h-6 w-6" />
            </a>
          </MotionItem>
        </div>
      </Container>
    </MotionSection>
  );
};

export default React.memo(HeroSection);
