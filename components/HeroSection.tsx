import Image from "next/image";
import Link from "next/link";
import profileImg from "@/src/img/image.png";
import { personalProjects } from "@/src/data/projects";
import { ArrowDownRight, ArrowUpRight, Sparkles } from "lucide-react";

const featuredProject = personalProjects[0];

export default function HeroSection() {
  return (
    <section id="home" className="hero gallery-shell grid grid-cols-1 items-center gap-12 md:grid-cols-[1.1fr_.9fr] md:gap-14 lg:gap-20">
      <div className="flex flex-col items-start">
        <h1 className="hero-title">Halo, saya <span>Emil.</span></h1>
        <p className="hero-role mt-6">Frontend Developer & UI/UX Enthusiast</p>
        <p className="hero-copy mt-5">
          Saya membangun antarmuka web yang responsif, intuitif, dan berkarakter dengan memadukan desain yang matang dan teknologi web modern.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link href="#projects" className="gallery-focus hero-button inline-flex min-h-12 items-center gap-3 px-6 text-sm font-bold">
            Jelajahi karya <ArrowDownRight aria-hidden="true" className="h-4 w-4" />
          </Link>
          <Link href="#contact" className="gallery-focus hero-secondary inline-flex min-h-12 items-center px-6 text-sm font-semibold text-[#f1efe9] transition-colors hover:bg-white/10">
            Hubungi saya
          </Link>
        </div>
      </div>

      <figure className="hero-portrait mx-auto w-full max-w-116 md:ml-auto">
        <div className="relative aspect-4/5">
          <Image src={profileImg} alt="Potret Emil Prayoga Albani" fill priority sizes="(max-width: 767px) 90vw, 40vw" className="object-cover object-[center_32%]" />
          <div className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/45 px-4 py-2 text-xs font-medium text-white backdrop-blur-md">Available for freelance</div>
        </div>
        <figcaption className="flex items-center justify-between gap-4 text-xs sm:text-sm">
          <span>Emil Prayoga Albani</span><span className="text-right">Sumenep, Jawa Timur</span>
        </figcaption>
      </figure>
    </section>
  );
}
