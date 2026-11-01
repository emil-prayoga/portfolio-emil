import Link from "next/link";
import { ArrowUpRight, Code2, Layers3, Sparkles } from "lucide-react";

const highlights = [
  { icon: Code2, value: "4", label: "Aplikasi live" },
  { icon: Layers3, value: "Full-Stack", label: "Web Development" },
  { icon: Sparkles, value: "AI Integration", label: "Pengembangan Fitur" },
];

export default function AboutSection() {
  return (
    <section id="about" className="gallery-section">
      <div className="gallery-shell">
        <div className="gallery-heading ">
          <div> <h2 className=" text-5xl font-semibold leading-[.95] tracking-[-.065em] sm:text-6xl">Tentang saya.</h2> </div>
          <div><p>Mengenal lebih dekat perjalanan dan pendekatan saya dalam pengembangan web.</p> </div>
        </div>
      </div>
      <div className="gallery-shell  ">
          <p className="text-[#bcb9b1] text-md leading-8  sm:leading-9">Saya Web Developer yang berfokus pada pengembangan aplikasi web menggunakan React dan Next.js. Saya memiliki pengalaman membangun antarmuka yang responsif, mengintegrasikan API, serta mengembangkan fitur berbasis database dan AI. Berkedudukan di Sumenep, Madura, saya terbuka terhadap peluang freelance maupun kolaborasi.</p>
          <div className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {highlights.map(({ icon: Icon, value, label }) => <div key={label} aria-label={`${value} ${label}`} className="rounded-2xl border border-white/10 bg-white/[.035] p-4"><Icon aria-hidden="true" className="mb-5 h-4 w-4 text-[#c8f36a]" /><p className="text-lg font-semibold tracking-tight">{value}</p><p className="mt-1 text-xs text-[#89877f]">{label}</p></div>)}
          </div>
          <Link href="#experience" className="gallery-focus mt-7 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#c8f36a]">Lihat perjalanan saya <ArrowUpRight aria-hidden="true" className="h-4 w-4" /></Link>
        </div>
    </section>
  );
}
