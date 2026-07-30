import React from 'react';

const monthOrder: Record<string, number> = {
  Jan: 0,
  Feb: 1,
  Mar: 2,
  Apr: 3,
  May: 4,
  Jun: 5,
  Jul: 6,
  Aug: 7,
  Sep: 8,
  Oct: 9,
  Nov: 10,
  Dec: 11,
};

const parsePeriodStart = (period: string) => {
  const match = period.match(/^([A-Za-z]{3})\s+(\d{4})/);

  if (!match) {
    return [0, 0];
  }

  return [Number(match[2]), monthOrder[match[1]] ?? 0];
};

const sortByPeriodDesc = <T extends { period: string }>(items: T[]) => {
  return [...items].sort((a, b) => {
    const [aYear, aMonth] = parsePeriodStart(a.period);
    const [bYear, bMonth] = parsePeriodStart(b.period);

    return bYear - aYear || bMonth - aMonth;
  });
};

const educationData = [
  {
    degree: "S1 Sistem Informasi", 
    institution: "Universitas Bahaudin Mudhary Madura",
    period: "2024 — Sekarang",
    description: [
      "Mempelajari disiplin ilmu Sistem Informasi selama 4 semester berjalan dengan fokus pada arsitektur web modern, sistem basis data, desain UI/UX, serta interaksi manusia dan komputer.",
    ]
  },
];

const experienceData = [
  {
    role: "Asisten Praktikum Database",
    organization: "Universitas Bahaudin Mudhary Madura",
    period: "Apr 2026 - Jul 2026",
    description: [
      "Berkolaborasi dengan tim asisten untuk mengarahkan live coding SQL untuk 35+ mahasiswa menggunakan MySQL selama 4 bulan guna meningkatkan pemahaman query kompleks, DDL/DML, dan optimasi database. ",
      "Memfasilitasi sesi troubleshooting interaktif dan mengelola rekapitulasi penilaian akhir proyek dengan presisi menggunakan Microsoft Excel untuk 40+ mahasiswa. ",
    ],
  },
  {
    role: "Web Developer",
    organization: "Pekerja Lepas dan Proyek Mandiri",
    period: "Mar 2026 - Sekarang",
    description: [
      "Menerjemahkan referensi UI/UX menjadi antarmuka web Next.js yang responsif mobile-first, memastikan navigasi intuitif serta konsistensi elemen visual di berbagai ukuran layar. ",
      "Mengoptimalkan alur kerja frontend development menggunakan teknik vibe coding (AI-assisted prompt) untuk mempercepat pembuatan komponen UI modular secara presisi.",
      "Melakukan penjangkauan ke 80+ prospek UMKM secara remote, merancang arsitektur sistem e-commerce, serta mengeksekusi 5+ proyek antarmuka web terintegrasi CI/CD via Vercel & GitHub.",
    ],
  },
  {
    role: "Asisten Praktikum Python",
    organization: "Universitas Bahaudin Mudhary Madura",
    period: "Nov 2025 - Jan 2026",
    description: [
      "Memandu sesi praktikum dan mengajar konsep algoritma serta struktur data kepada 25+ praktikan menggunakan Python selama 3 bulan. ",
      "Mengeksekusi live debugging secara real-time untuk membantu praktikan menyelesaikan rangkaian kegiatan praktikum mingguan berbasis 5 modul utama.",
    ]
  },
  {
    role: "Peserta IDCamp 2025",
    organization: "Dicoding Indonesia",
    period: "Sep 2025 - Jan 2026",
    description: [
      "Menyelesaikan program beasiswa belajar intensif alur Front-End Web Developer bersertifikat standar industri selama 4 bulan guna menguasai arsitektur dan fondasi pengembangan web modern.",
      "Menerapkan teknologi HTML5, CSS3, JavaScript ES6+, DOM Manipulation, dan prinsip Responsive Web Design melalui eksekusi proyek submission praktis untuk memastikan performa aplikasi yang intuitif serta lintas perangkat.",
      "Menuntaskan seluruh modul pelatihan akademis dengan standar evaluasi ketat tepat waktu, menghasilkan tingkat kelulusan 100% pada tingkat dasar hingga intermediate serta memperoleh sertifikasi kompetensi resmi Dicoding."
    ],
  },
];

export default function EducationExperienceSection() {
  const sortedEducationData = sortByPeriodDesc(educationData);
  const sortedExperienceData = sortByPeriodDesc(experienceData);

  // Membagi data pengalaman menjadi 2 bagian untuk kolom kiri dan kolom kanan
  const splitIndex = Math.ceil(sortedExperienceData.length / 2);
  const leftColumnExperiences = sortedExperienceData.slice(0, splitIndex);
  const rightColumnExperiences = sortedExperienceData.slice(splitIndex);

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
          {sortedEducationData.map((item, index) => (
            <div key={index} className="relative group">
              {/* Titik indikator timeline */}
              <div className="absolute -left-7.75 md:-left-9.75 top-2 w-3.5 h-3.5 rounded-full bg-neutral-800 border-2 border-neutral-950 group-hover:bg-emerald-400 group-hover:scale-125 transition-all z-10" />
              
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
                  <div className="absolute -left-7.75 md:-left-9.75 top-2 w-3.5 h-3.5 rounded-full bg-neutral-800 border-2 border-neutral-950 group-hover:bg-emerald-400 group-hover:scale-125 transition-all z-10" />
                  
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
                  <div className="absolute -left-7.75 md:-left-9.75 top-2 w-3.5 h-3.5 rounded-full bg-neutral-800 border-2 border-neutral-950 group-hover:bg-emerald-400 group-hover:scale-125 transition-all z-10" />
                  
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