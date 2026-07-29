import React from 'react';

const educationData = [
  {
    degree: "S1 Sistem Informasi", 
    institution: "Universitas Bahaudin Mudhary Madura",
    period: "2024 — Sekarang",
    description: [
      "Mempelajari disiplin ilmu Sistem Informasi selama 4 semester berjalan dengan fokus pada arsitektur web modern, sistem basis data, desain UI/UX, serta analisis dan desain sistem informasi.",
      "Menerapkan teknologi MySQL, JavaScript, dan Figma melalui eksekusi proyek akademik serta meriset teknologi web modern secara mandiri seperti Next.js, React.js, Tailwind CSS, dan Supabase guna membangun solusi perangkat lunak yang scalable dan berkinerja tinggi.",
      "Mempertahankan konsistensi performa akademik unggul dan kepemimpinan di kampus, dibuktikan dengan kepercayaan menjabat sebagai Asisten Praktikum di 2 mata kuliah inti (Database & Python)."
    ]
  },
];

const experienceData = [
  {
    role: "Asisten Praktikum Database",
    organization: "Universitas Bahaudin Mudhary Madura",
    period: "Apr 2026 — Jul 2026",
    description: [
      "Memimpin tim asisten praktikum dan mengarahkan sesi live coding SQL untuk 35+ mahasiswa praktikan menggunakan MySQL selama 4 bulan guna meningkatkan pemahaman praktis dalam perancangan complex query, DDL/DML, dan optimasi database.",
      "Mengoordinasi materi praktikum mingguan, menyusun standar evaluasi, serta merekap penilaian akhir proyek secara presisi menggunakan Microsoft Excel untuk menjamin transparansi serta akurasi evaluasi akademik.",
      "Memfasilitasi sesi pemecahan masalah (troubleshooting) baik mahasiswa kelas online maupun offline secara interaktif, yang berhasil meningkatkan penguasaan sintaks SQL mahasiswa dan mempercepat waktu penyelesaian tugas akhir praktikum."
    ],
  },
  {
    role: "Panitia Pelatihan Java & Database",
    organization: "Universitas Bahaudin Mudhary Madura",
    period: "Maret 2026",
    description: [
      "Bertindak sebagai pembicara utama dan mentor pelatihan dengan menyampaikan materi fundamental Object-Oriented Programming (OOP) serta live debugging basis data menggunakan Java dan MySQL kepada seluruh peserta pelatihan intensif selama 2 hari berturut-turut.",
      "Merancang alur penyampaian materi dan metode simulasi coding interaktif untuk memudahkan peserta dalam memahami konsep kelas, penyeleksian kondisi, perulangan, serta integrasi database.",
      "Meningkatkan pemahaman teknis peserta secara signifikan, dibuktikan dengan keberhasilan peserta menyelesaikan tantangan studi kasus pemrograman dan kueri SQL di akhir sesi pelatihan."
    ],
  },
  {
    role: "Web Developer",
    organization: "Pekerja Lepas dan Proyek Mandiri",
    period: "Mar 2026 — Sekarang",
    description: [
      "Mengembangkan aplikasi web modern berkinerja tinggi untuk kebutuhan proyek klien dan internal menggunakan Next.js, React.js, Tailwind CSS v4, dan Supabase selama 5 bulan untuk membangun solusi digital yang responsif, aman, dan scalable.",
      "Melakukan pengujian unit (unit testing) serta pengetesan fungsional mandiri secara berkala guna mengidentifikasi celah keamanan, eror logika JavaScript, dan kegagalan kueri PostgreSQL sebelum tahap penerapan (deployment).",
      "Membangun berbagai proyek nyata seperti Notes App, E-Commerce Hijab Collection, dan platform portofolio interaktif dengan standar UI/UX modern.",
    ],
  },
  {
    role: "Asisten Praktikum Python",
    organization: "Universitas Bahaudin Mudhary Madura",
    period: "Nov 2025 — Jan 2026",
    description: [
      "Memandu sesi praktikum dasar pemrograman dan mentransfer pemahaman konsep algoritma serta struktur data kepada 25 praktikan menggunakan Python selama 3 bulan guna membangun fondasi problem-solving yang kuat.",
      "Mengeksekusi live debugging dan analisis eror kode secara real-time di dalam kelas untuk membantu mahasiswa mengidentifikasi bug pada tugas pemrograman mingguan.",
      "Mengakselerasi kelancaran sesi praktikum hingga 100% tepat waktu dan mendorong pencapaian tingkat kelulusan tugas praktikan yang tinggi sesuai standar penilaian laboratorium."
    ],
  },
  {
    role: "Peserta IDCamp 2025",
    organization: "Dicoding Indonesia",
    period: "Sep 2025 — Jan 2026",
    description: [
      "Menyelesaikan program beasiswa belajar intensif alur Front-End Web Developer bersertifikat standar industri selama 4 bulan guna menguasai arsitektur dan fondasi pengembangan web modern.",
      "Menerapkan teknologi HTML5, CSS3, JavaScript ES6+, DOM Manipulation, dan prinsip Responsive Web Design melalui eksekusi proyek submission praktis untuk memastikan performa aplikasi yang intuitif serta lintas perangkat.",
      "Menuntaskan seluruh modul pelatihan akademis dengan standar evaluasi ketat tepat waktu, menghasilkan tingkat kelulusan 100% pada tingkat dasar hingga intermediate serta memperoleh sertifikasi kompetensi resmi Dicoding."
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