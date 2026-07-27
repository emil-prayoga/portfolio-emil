"use client";
export default function AboutSection() {
  return (
    <section id="about" className="py-20 max-w-7xl mx-auto scroll-mt-20">
      <div className="flex flex-col md:flex-row items-center gap-12">
        
        {/* Frame Foto Profile */}
        <div className="relative group w-64 h-64 sm:w-80 sm:h-80 shrink-0">
          {/* Border glowing di belakang foto */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-500 to-neutral-600 opacity-30 group-hover:opacity-60 transition duration-500 blur-lg"></div>
          
          <div className="relative w-full h-full rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900">
            {/* Ganti src dengan lokasi fotomu nanti di public/images/foto-emil.jpg */}
            <img
              src="/images/foto-emil.jpg" 
              alt="Profile Emil"
              className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
              onError={(e) => {
                // Placeholder kalau foto belum dimasukkan
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
            Halo! Aku Emil. Aku seorang developer yang berfokus pada pengembangan antarmuka web (Frontend) dan sistem web modern. Berawal dari rasa penasaran melihat bagaimana web interaktif dibangun, kini aku terbiasa menggunakan ekosistem React, Next.js, dan Tailwind CSS.
          </p>

          <p className="text-neutral-400 leading-relaxed text-base sm:text-lg">
            Selain koding, aku selalu berfokus pada struktur kode yang rapi clean code, performa web yang cepat, serta pengalaman pengguna (UX) yang intuitif.
          </p>

          {/* Statistik / Info Ringkas */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-neutral-800/80">
            <div>
              <h3 className="text-2xl font-bold text-neutral-100">6+</h3>
              <p className="text-xs text-neutral-500">Projek Selesai</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-neutral-100">100%</h3>
              <p className="text-xs text-neutral-500">Komitmen & Antusiasme</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-neutral-100">Full-Stack</h3>
              <p className="text-xs text-neutral-500">Focused Learner</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}