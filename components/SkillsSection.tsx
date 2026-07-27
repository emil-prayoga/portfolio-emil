"use client";

import { motion } from "framer-motion";

const skillsTop = [
  { 
    name: "Next.js", 
    category: "Framework",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
  },
  { 
    name: "React", 
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  },
  { 
    name: "Tailwind CSS", 
    category: "Styling",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
  },
  { 
    name: "TypeScript", 
    category: "Language",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
  },
  { 
    name: "JavaScript", 
    category: "Language",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
  },
  { 
    name: "Supabase", 
    category: "Backend/DB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg"
  },
];

// Baris Bawah (5 Skill)
const skillsBottom = [
  { 
    name: "Figma", 
    category: "UI/UX Design",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
  },
  { 
    name: "Git & GitHub", 
    category: "Tools",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
  },
  { 
    name: "HTML5", 
    category: "Fundamentals",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
  },
  { 
    name: "CSS3", 
    category: "Fundamentals",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
  },
  { 
    name: "Node.js", 
    category: "Runtime",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
  },
];

export default function SkillsSection() {
  // Duplikasi array biar jalannya seamless tanpa jeda kosong
  const duplicatedTop = [...skillsTop, ...skillsTop, ...skillsTop];
  const duplicatedBottom = [...skillsBottom, ...skillsBottom, ...skillsBottom];

  return (
    <section id="skills" className="py-20 max-w-7xl mx-auto overflow-hidden scroll-mt-20">
      <div className="mb-12 text-center space-y-2 md:text-left">
        <h2 className="text-3xl sm:text-5xl font-bold text-neutral-100 tracking-tight leading-tight text-center">
          Keahlian & Teknologi
        </h2>
        <p className="text-neutral-400 text-base sm:text-lg leading-relaxed text-center mt-2">
          Teknologi dan tools yang biasa saya gunakan untuk membangun aplikasi web modern.
        </p>
      </div>

      {/* Marquee Container */}
      <div className="mt-20 relative flex flex-col gap-4 w-full overflow-hidden py-2">
        {/* Blur Fade In/Out Kiri & Kanan */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 sm:w-24 bg-gradient-to-r from-neutral-950 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 sm:w-24 bg-gradient-to-l from-neutral-950 to-transparent" />

        {/* BARIS 1: Muter ke Kiri (6 Skills) */}
        <motion.div
          className="flex gap-4 w-max shrink-0"
          animate={{
            x: ["0%", "-33.33%"],
          }}
          transition={{
            ease: "linear",
            duration: 22,
            repeat: Infinity,
          }}
        >
          {duplicatedTop.map((skill, index) => (
            <div
              key={`top-${index}`}
              className="mb-8 flex items-center gap-3.5 px-5 py-3 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-800/80 transition-all duration-300 shrink-0 group"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-7 h-7 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
              />
              <div>
                <p className="text-sm font-semibold text-neutral-200 group-hover:text-white">
                  {skill.name}
                </p>
                <p className="text-[10px] text-neutral-500 uppercase tracking-wider">
                  {skill.category}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* BARIS 2: Muter ke Kanan (5 Skills) */}
        <motion.div
          className="flex gap-4 w-max shrink-0"
          animate={{
            x: ["-33.33%", "0%"],
          }}
          transition={{
            ease: "linear",
            duration: 22,
            repeat: Infinity,
          }}
        >
          {duplicatedBottom.map((skill, index) => (
            <div
              key={`bottom-${index}`}
              className="flex items-center gap-3.5 px-5 py-3 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-800/80 transition-all duration-300 shrink-0 group"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-7 h-7 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
              />
              <div>
                <p className="text-sm font-semibold text-neutral-200 group-hover:text-white">
                  {skill.name}
                </p>
                <p className="text-[10px] text-neutral-500 uppercase tracking-wider">
                  {skill.category}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}