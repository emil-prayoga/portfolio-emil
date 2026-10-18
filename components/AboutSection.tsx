import Link from "next/link";
import { ArrowUpRight, Code2, Gauge, WandSparkles } from "lucide-react";

const highlights = [
  { icon: Code2, value: "5+", label: "Web projects" },
  { icon: Gauge, value: "Mobile-first", label: "Cara membangun" },
  { icon: WandSparkles, value: "UI × Code", label: "Fokus utama" },
];

export default function AboutSection() {
  return (
    <section id="about" className="gallery-section border-t border-white/10">
      <div className="gallery-shell grid gap-10 md:grid-cols-[.8fr_1.2fr] md:gap-20">
        <div><p className="gallery-label mb-4">Sedikit tentang saya</p><h2 className="max-w-[8ch] text-5xl font-semibold leading-[.95] tracking-[-.065em] sm:text-6xl">Desain yang terasa. Kode yang bekerja.</h2></div>
        <div>
          <p className="max-w-3xl text-lg leading-8 text-[#d1d0d5] sm:text-xl sm:leading-9">Saya Frontend Developer yang menyukai titik temu antara desain dan teknologi. Saya mengubah ide dan referensi menjadi antarmuka web yang responsif, intuitif, dan teliti sampai ke detail kecilnya.</p>
          <div className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {highlights.map(({ icon: Icon, value, label }) => <div key={label} className="rounded-2xl border border-white/10 bg-white/[.035] p-4"><Icon aria-hidden="true" className="mb-5 h-4 w-4 text-[#c8f36a]" /><p className="text-lg font-semibold tracking-tight">{value}</p><p className="mt-1 text-xs text-[#89877f]">{label}</p></div>)}
          </div>
          <Link href="#experience" className="gallery-focus mt-7 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#c8f36a]">Lihat perjalanan saya <ArrowUpRight aria-hidden="true" className="h-4 w-4" /></Link>
        </div>
      </div>
    </section>
  );
}
