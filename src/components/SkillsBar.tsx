"use client";

import { useRef } from "react";
import { FaCss3Alt, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import {
    SiAngular,
    SiExpress,
    SiJavascript,
    SiMongodb,
    SiNextdotjs,
    SiRedux,
    SiTypescript,
} from "react-icons/si";

const ICON_SIZE = 50;
const SPEED_SECONDS = 20;

const icons = [
  { Comp: FaHtml5, color: "#E34F26", label: "HTML5" },
  { Comp: FaCss3Alt, color: "#1572B6", label: "CSS3" },
  { Comp: SiJavascript, color: "#F0DB4F", label: "JavaScript" },
  { Comp: SiTypescript, color: "#3178C6", label: "TypeScript" },
  { Comp: FaReact, color: "#61DAFB", label: "React" },
  { Comp: SiRedux, color: "#764ABC", label: "Redux" },
  { Comp: SiAngular, color: "#DD0031", label: "Angular" },
  { Comp: SiNextdotjs, color: "#000000 dark:#dddddd", label: "Next.js" },
  { Comp: FaNodeJs, color: "#339933", label: "Node.js" },
  { Comp: SiExpress, color: "#000000 dark:#fff", label: "Express" },
  { Comp: SiMongodb, color: "#47A248", label: "MongoDB" },
];

export default function SkillBar() {
  const trackRef = useRef(null);

  return (
    <>
      <style>
        {`
            @keyframes scroll-left {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
            
            .skill-track {
                animation: scroll-left ${SPEED_SECONDS}s linear infinite;
                animation-play-state: running;
            }
            .skill-track:hover {
                animation-play-state: paused;
            }

            @media (prefers-reduced-motion: reduce) {
                .skill-track {
                    animation: none;
                    transform: none;
                }
            }`}
      </style>

      <div className="w-full py-3 mb-5">
        <div className="max-w-screen-xl mx-auto overflow-hidden">
          <div
            ref={trackRef}
            className="skill-track flex items-center whitespace-nowrap select-none"
            aria-hidden="false"
            role="list"
            style={{ gap: "5rem" }}
          >
            {[...icons, ...icons].map((ic, idx) => {
              const Icon = ic.Comp;
              return (
                <div
                  key={idx}
                  role="listitem"
                  className="flex items-center justify-center"
                  style={{ width: ICON_SIZE + 24, height: ICON_SIZE + 24 }}
                >
                  <Icon
                    title={ic.label}
                    aria-label={ic.label}
                    size={ICON_SIZE}
                    style={{
                      color: ic.color,
                      filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.5))",
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

