"use client";

import {
  AngularTechIcon,
  Css3TechIcon,
  ExpressTechIcon,
  Html5TechIcon,
  JsTechIcon,
  MongoTechIcon,
  NextTechIcon,
  NodeTechIcon,
  ReactTechIcon,
  ReduxTechIcon,
  TsTechIcon,
} from "./TechIcons";

const SPEED_SECONDS = 18;

const skills = [
  {
    label: "HTML5",
    Icon: Html5TechIcon,
    accent: "from-orange-500/20 to-orange-600/10",
    ring: "ring-orange-500/25",
  },
  {
    label: "CSS3",
    Icon: Css3TechIcon,
    accent: "from-sky-500/20 to-sky-600/10",
    ring: "ring-sky-500/25",
  },
  {
    label: "JavaScript",
    Icon: JsTechIcon,
    accent: "from-yellow-400/25 to-amber-500/10",
    ring: "ring-yellow-400/30",
  },
  {
    label: "TypeScript",
    Icon: TsTechIcon,
    accent: "from-blue-500/20 to-blue-700/10",
    ring: "ring-blue-500/25",
  },
  {
    label: "React",
    Icon: ReactTechIcon,
    accent: "from-cyan-400/20 to-cyan-500/10",
    ring: "ring-cyan-400/25",
  },
  {
    label: "Redux",
    Icon: ReduxTechIcon,
    accent: "from-violet-500/20 to-violet-700/10",
    ring: "ring-violet-500/25",
  },
  {
    label: "Angular",
    Icon: AngularTechIcon,
    accent: "from-rose-500/20 to-red-700/10",
    ring: "ring-rose-500/25",
  },
  {
    label: "Next.js",
    Icon: NextTechIcon,
    accent: "from-slate-500/20 to-slate-700/10",
    ring: "ring-slate-500/25",
  },
  {
    label: "Node.js",
    Icon: NodeTechIcon,
    accent: "from-emerald-500/20 to-green-700/10",
    ring: "ring-emerald-500/25",
  },
  {
    label: "Express",
    Icon: ExpressTechIcon,
    accent: "from-zinc-500/20 to-zinc-700/10",
    ring: "ring-zinc-500/25",
  },
  {
    label: "MongoDB",
    Icon: MongoTechIcon,
    accent: "from-green-500/20 to-lime-700/10",
    ring: "ring-green-500/25",
  },
];

export default function SkillBar() {
  return (
    <>
      <style>
        {`
            @keyframes marquee-scroll {
                0% { transform: translate3d(0, 0, 0); }
                100% { transform: translate3d(-50%, 0, 0); }
            }
            
            .skill-track {
                display: flex;
                align-items: center;
                gap: 5rem;
                width: max-content;
                animation: marquee-scroll ${SPEED_SECONDS}s linear infinite;
                animation-play-state: running;
                will-change: transform;
                transform: translate3d(0, 0, 0);
            }

            .skill-track:hover {
                animation-play-state: paused;
            }

            @media (prefers-reduced-motion: reduce) {
                .skill-track {
                    animation: none;
                    transform: none;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 1rem;
                    width: 100%;
                }
            }`}
      </style>

      <div className="w-full py-3 mb-5">
        <div className="mx-auto max-w-screen-xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="skill-track whitespace-nowrap select-none" role="list">
            {[...skills, ...skills].map((skill, index) => {
              const Icon = skill.Icon;

              return (
                <span
                  key={`${skill.label}-${index}`}
                  role="listitem"
                  aria-hidden={index >= skills.length}
                  className={`inline-flex min-w-[156px] items-center gap-3 rounded-full bg-gradient-to-r px-5 py-3 text-sm font-semibold text-slate-800 ring-1 ${skill.accent} ${skill.ring} shadow-[0_10px_30px_rgba(15,23,42,0.08)] dark:text-slate-100 dark:shadow-[0_10px_30px_rgba(2,6,23,0.3)]`}
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] dark:bg-slate-950/70">
                    <Icon className="h-7 w-7" />
                  </span>
                  <span>{skill.label}</span>
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

