import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import MotionSection from "./MotionSection";

const HeroSection = () => {
  return (
    <MotionSection
      as="section"
      id="home"
      className="pt-32 pb-20 px-4 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-black dark:via-gray-800 dark:to-black"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="mb-2 bg-gray-200 w-fit mx-auto rounded-full border-1 shadow-[0_6px_15px_rgba(0,0,0,0.18),0_25px_50px_rgba(0,0,0,0.28),0_60px_120px_rgba(0,0,0,0.25),0_0_0_1px_rgba(255,255,255,0.06)_inset]">
          <Image
            src="/assets/MyImage.jpg"
            width={300}
            height={300}
            alt="my image"
            priority
            className="h-[300px] object-contain object-top mx-auto rounded-full"
          />
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
          <span className="bg-gradient-to-br from-black via-blue-900 to-gray-800 bg-clip-text text-transparent dark:from-gray-900 dark:via-white dark:to-gray-400">
            Mohamed Fahim
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 font-light">
          Full Stack Developer | MEARN
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            href="#contact"
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold"
          >
            Get In Touch
          </Link>
          <Link
            href={"/pdfs/Mohamed_Fahim-Mern-Stack.pdf"}
            download
            className="px-8 py-3 border-2 border-purple-600 text-purple-600 dark:text-purple-400 rounded-full  hover:scale-105 transition-all duration-300 font-semibold"
          >
            Download CV
            <AiOutlineDownload className="inline-block ml-2 w-6 h-6" />
          </Link>
        </div>
      </div>
    </MotionSection>
  );
};

export default React.memo(HeroSection);
