"use client";

import { useEffect, useState } from "react";
// import { Badge } from "@/components/ui/badge";
// import { ArrowDownRight } from "lucide-react";

const words = [
  "Frontend Developer.",
  "QA Tester.",
  "UI/UX Enthusiast.",
  "Full-Stack Learner.",
];

export default function HeroSection() {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[textIndex];

    // Tentukan kecepatan ngetik / hapus
    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentWord.length) {
      // Pas kata selesai diketik, beri jeda 2 detik sebelum mulai menghapus
      speed = 2000;
    } else if (isDeleting && charIndex === 0) {
      // Pas kata selesai dihapus, lanjut ke kata berikutnya
      speed = 500;
    }

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex === currentWord.length) {
        setIsDeleting(true);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % words.length);
      } else {
        setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex]);

  const currentText = words[textIndex].substring(0, charIndex);

  return (
    <section id="home" className="py-24 md:py-32 max-w-7xl mx-auto flex flex-col justify-center items-center space-y-6">
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-800/60 text-emerald-400 text-xs font-medium">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        Open for opportunities
      </div>

      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-neutral-100 tracking-tight leading-tight">
        Halo, Saya <span className="text-emerald-400">Emil</span> 
      </h1>

      <div className="text-xl sm:text-3xl font-medium text-neutral-400 h-10 flex items-center">
        <span>Saya seorang&nbsp;</span>
        <span className="text-neutral-100 font-semibold border-r-2 border-emerald-400 pr-1 animate-pulse">
          {currentText}
        </span>
      </div>

      <p className="text-neutral-400 max-w-2xl text-base sm:text-lg leading-relaxed">
        Frontend & Full-Stack Developer yang berfokus membangun pengalaman web interaktif, cepat, dan estetik menggunakan Next.js, Tailwind CSS, dan Supabase.
      </p>

      <div className="pt-4 flex flex-wrap items-center gap-4">
        <a
          href="#projects"
          className="px-6 py-3 rounded-xl bg-neutral-100 text-neutral-950 font-semibold text-sm hover:bg-neutral-400 transition-all"
        >
          Lihat Project
        </a>
        <a
          href="#contact"
          className="px-6 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-200 font-semibold text-sm hover:border-neutral-700 hover:bg-neutral-800 transition-all"
        >
          Hubungi Saya
        </a>
      </div>
    </section>
  );
}