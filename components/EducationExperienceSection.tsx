import React from 'react';

const educationData = [
  {
    degree: "S1 Sistem Informasi", 
    institution: "Universitas Bahaudin Mudhary Madura",
    period: "2024 — Sekarang",
    description: [
      "Fokus pada perancangan sistem informasi, arsitektur web modern, manajemen basis data, desain UI/UX mobile maupun dekstop, dan pengembangan perangkat lunak.",
      "Aktif dalam berbagai kegiatan praktikum akademik, proyek riset kolaboratif, dan mengeksplorasi teknologi modern."

    ],
  },
];

const experienceData = [
  {
    role: "Koordinator Asisten Praktikum Database",
    organization: "Universitas Bahaudin Mudhary Madura",
    period: "Apr 2026 — Jul 2026",
    description: [
      "Memimpin dan mengoordinasikan tim asisten praktikum dalam perancangan materi, penyusunan soal ujian, serta pelaksanaan modul basis data.",
      "Membimbing puluhan mahasiswa dalam pemahaman konsep relational database, perancangan ERD, normalisasi data, dan optimasi kueri SQL."
    ],
  },
  {
    role: "Pemateri Java & Database",
    organization: "Universitas Bahaudin Mudhary Madura",
    period: "Maret 2026",
    description: [
      "Menyampaikan materi pemrograman dasar dan konsep Object-Oriented Programming (OOP) secara terstruktur menggunakan bahasa Java.",
      "Memberikan sesi mentoring interaktif mengenai perancangan basis data dasar serta integrasi CRUD antara Java dan MySQL bagi peserta."
    ],
  },
  {
    role: "Web Developer Freelance & Open Source",
    organization: "Emilabs & Open Source Projects",
    period: "Mar 2026 — Sekarang",
    description: [
      "Merancang dan mengimplementasikan aplikasi web interaktif berkinerja tinggi menggunakan Next.js, Tailwind CSS, TypeScript, dan Supabase.",
      "Membangun berbagai proyek nyata seperti Notes App, E-Commerce Hijab Collection, dan platform portofolio interaktif dengan standar UI/UX modern."
    ],
  },
  {
    role: "Asisten Praktikum Pemrograman Python",
    organization: "Universitas Bahaudin Mudhary Madura",
    period: "Nov 2025 — Jan 2026",
    description: [
      "Mendampingi sesi praktikum pemrograman Python dasar, konsep logika algoritma, dan pemahaman struktur data bagi mahasiswa tingkat awal.",
      "Membantu mahasiswa dalam pemecahan masalah teknis (debugging), logika pemodelan, serta melakukan evaluasi tugas praktikum mingguan."
    ],
  },
  {
    role: "Peserta IDCamp 2025 - Frontend Web",
    organization: "Dicoding Indonesia",
    period: "Okt 2025 — Feb 2026",
    description: [
      "Menyelesaikan alur belajar (learning path) Frontend Web Development bersertifikat standar industri yang diselenggarakan oleh Dicoding.",
      "Menguasai fundamental pengembangan web modern, mencakup HTML5, CSS3, JavaScript ES6+, DOM manipulation, dan prinsip responsive web design."
    ],
  },
];

export default function EducationExperienceSection() {
  // Membagi data pengalaman menjadi 2 bagian untuk kolom kiri dan kolom kanan
  const leftColumnExperiences = experienceData.filter((_, i) => i % 2 === 0);
  const rightColumnExperiences = experienceData.filter((_, i) => i % 2 !== 0);

  return (
    <section id="education" className="py-20 max-w-7xl mx-auto space-y-20 scroll-mt-20">
      
      {/* 🎓 EDUCATION SECTION */}
      <div>
        <div className="mb-12 space-y-2">
          <h2 className="text-3xl sm:text-5xl font-bold text-neutral-100 tracking-tight leading-tight text-center">
            Pendidikan
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed text-center">
            Perjalanan akademik dan pencapaian saya.
          </p>
        </div>

        <div className="relative border-l border-neutral-800 ml-4 md:ml-6 pl-6 md:pl-8">
          {educationData.map((item, index) => (
            <div key={index} className="relative group">
              {/* Titik indikator timeline */}
              <div className="absolute -left-[31px] md:-left-[39px] top-2 w-3.5 h-3.5 rounded-full bg-neutral-800 border-2 border-neutral-950 group-hover:bg-emerald-400 group-hover:scale-125 transition-all z-10" />
              
              <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 hover:border-neutral-700 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                  <h3 className="text-xl font-bold text-neutral-100">{item.degree}</h3>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/50 px-2.5 py-1 rounded-full w-fit">
                    {item.period}
                  </span>
                </div>

                <p className="text-sm font-medium text-neutral-400 mb-4">{item.institution}</p>
                
                <ul className="list-disc list-inside space-y-2 text-neutral-300 text-sm leading-relaxed">
                  {item.description.map((desc, i) => (
                    <li key={i} className="marker:text-emerald-400">
                      <span className="text-neutral-300">{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 💼 EXPERIENCE SECTION */}
      <div id="experience" className="pt-6 scroll-mt-20">
        <div className="mb-12 space-y-2">
          <h2 className="text-3xl sm:text-5xl font-bold text-neutral-100 tracking-tight leading-tight text-center">
            Pengalaman
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed text-center">
            Perjalanan pengalaman profesional saya.
          </p>
        </div>

        {/* 🟢 PEMBUNGKUS UTAMA: 
            'border-l' aktif di HP agar semua kartu menyatu dalam 1 garis.
            'md:border-l-0' mematikan garis ini di layar desktop. */}
        <div className="relative border-l md:border-l-0 border-neutral-800 ml-4 md:ml-0 pl-6 md:pl-0">
          
          {/* Layout Grid 2 Kolom */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            
            {/* KOLOM 1 (KIRI) - Garis aktif khusus desktop (md:border-l) */}
            <div className="relative md:border-l border-neutral-800 md:ml-4 md:pl-8 space-y-8">
              {leftColumnExperiences.map((item, index) => (
                <div key={index} className="relative group">
                  {/* Titik indikator timeline */}
                  <div className="absolute -left-[31px] md:-left-[39px] top-2 w-3.5 h-3.5 rounded-full bg-neutral-800 border-2 border-neutral-950 group-hover:bg-emerald-400 group-hover:scale-125 transition-all z-10" />
                  
                  <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 hover:border-neutral-700 transition-all flex flex-col justify-between">
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-1">
                        <h3 className="text-lg sm:text-xl font-bold text-neutral-100 leading-snug">{item.role}</h3>
                        <span className="text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/50 px-2.5 py-1 rounded-full shrink-0 w-fit">
                          {item.period}
                        </span>
                      </div>

                      <p className="text-sm font-medium text-neutral-400 mb-4">{item.organization}</p>
                      
                      <ul className="list-disc list-inside space-y-2 text-neutral-300 text-sm leading-relaxed">
                        {item.description.map((desc, i) => (
                          <li key={i} className="marker:text-emerald-400">
                            <span className="text-neutral-300">{desc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* KOLOM 2 (KANAN) - Garis aktif khusus desktop (md:border-l) */}
            <div className="relative md:border-l border-neutral-800 md:ml-4 md:pl-8 space-y-8">
              {rightColumnExperiences.map((item, index) => (
                <div key={index} className="relative group">
                  {/* Titik indikator timeline */}
                  <div className="absolute -left-[31px] md:-left-[39px] top-2 w-3.5 h-3.5 rounded-full bg-neutral-800 border-2 border-neutral-950 group-hover:bg-emerald-400 group-hover:scale-125 transition-all z-10" />
                  
                  <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 hover:border-neutral-700 transition-all flex flex-col justify-between">
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-1">
                        <h3 className="text-lg sm:text-xl font-bold text-neutral-100 leading-snug">{item.role}</h3>
                        <span className="text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/50 px-2.5 py-1 rounded-full shrink-0 w-fit">
                          {item.period}
                        </span>
                      </div>

                      <p className="text-sm font-medium text-neutral-400 mb-4">{item.organization}</p>
                      
                      <ul className="list-disc list-inside space-y-2 text-neutral-300 text-sm leading-relaxed">
                        {item.description.map((desc, i) => (
                          <li key={i} className="marker:text-emerald-400">
                            <span className="text-neutral-300">{desc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}