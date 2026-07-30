"use client";
import profileImg from '@/src/img/image.png';
export default function AboutSection() {
  return (
    <section id="about" className="py-20 max-w-7xl mx-auto scroll-mt-20">
      <div className="flex flex-col md:flex-row items-center gap-12">
        
        {/* Frame Foto Profile */}
        <div className="relative group w-64 h-64 sm:w-80 sm:h-80 shrink-0">
          {/* Border glowing di belakang foto */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-500 to-neutral-600 opacity-30 group-hover:opacity-60 transition duration-500 blur-lg"></div>
          
          {/* Elemen pembungkus diberi group */}
<div className="relative w-full h-full rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 group w-64 h-64 sm:w-80 sm:h-80 shrink-0">
  <img
    src={profileImg.src}
    alt="Profile Emil"
    /* group-hover untuk desktop, group-active untuk mobile */
    className="w-full h-full object-cover object-[center_40%] grayscale group-hover:grayscale-0 group-active:grayscale-0 transition-all duration-500"
    onError={(e) => {
      e.currentTarget.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60";
    }}
  />
</div>
        </div>

        {/* Deskripsi Tentang Kamu */}
        <div className="space-y-2 flex-1">

            <h2 className="text-3xl sm:text-5xl font-bold text-neutral-100 tracking-tight leading-tight">
             Tentang Saya
            </h2>

          <p className="text-neutral-400 leading-relaxed text-base sm:text-lg">
            Frontend Developer (UI/UX) yang adaptif dan terbiasa bekerja secara remote atau jarak jauh. Berfokus pada pengembangan antarmuka web yang responsif mobile-first, intuitif, dan menerapkan User-friendly design mindset dengan memperhatikan detail visual yang tinggi. Mahir menganalisis referensi antarmuka aplikasi populer dan mengonversinya langsung menjadi kode Frontend modular (Next.js, React, Tailwind CSS) berbasis vibe coding secara presisi.
          </p>

        </div>

      </div>
    </section>
  );
}