const education = {
  degree: "S1 Sistem Informasi",
  institution: "Universitas Bahaudin Mudhary Madura",
  period: "2024 - Sekarang",
  description: "Mempelajari disiplin ilmu Sistem Informasi selama 5 semester berjalan dengan fokus pada arsitektur web modern.",
};

const experiences = [
  {
    role: "Asisten Praktikum Database",
    organization: "Universitas Bahaudin Mudhary Madura",
    period: "Apr 2026 - Jul 2026",
    description: [
      "Berkolaborasi dengan tim asisten untuk mengarahkan live coding SQL untuk 35+ mahasiswa menggunakan MySQL selama 4 bulan guna meningkatkan pemahaman query kompleks, DDL/DML, dan optimasi database.",
      "Memfasilitasi sesi troubleshooting interaktif dan mengelola rekapitulasi penilaian akhir proyek dengan presisi menggunakan Microsoft Excel untuk 40+ mahasiswa.",
    ],
  },
  {
    role: "Web Developer",
    organization: "Pekerja Lepas dan Proyek Mandiri",
    period: "Mar 2026 - Sekarang",
    description: [
      "Menerjemahkan referensi UI/UX menjadi antarmuka web Next.js yang responsif mobile-first, memastikan navigasi intuitif serta konsistensi elemen visual di berbagai ukuran layar.",
      "Mengoptimalkan alur kerja frontend development menggunakan teknik vibe coding (AI-assisted prompt) untuk mempercepat pembuatan komponen UI modular secara presisi.",
      "Melakukan penjangkauan ke 80+ prospek UMKM secara remote, merancang arsitektur sistem e-commerce, serta mengeksekusi 5+ proyek antarmuka web terintegrasi CI/CD via Vercel & GitHub.",
    ],
  },
  {
    role: "Asisten Praktikum Python",
    organization: "Universitas Bahaudin Mudhary Madura",
    period: "Nov 2025 - Jan 2026",
    description: [
      "Memandu sesi praktikum dan mengajar konsep algoritma serta struktur data kepada 25+ praktikan menggunakan Python selama 3 bulan.",
      "Mengeksekusi live debugging secara real-time untuk membantu praktikan menyelesaikan rangkaian kegiatan praktikum mingguan berbasis 5 modul utama.",
    ],
  },
  {
    role: "Peserta IDCamp 2025",
    organization: "Dicoding Indonesia",
    period: "Sep 2025 - Jan 2026",
    description: [
      "Menyelesaikan program beasiswa belajar intensif alur Front-End Web Developer bersertifikat standar industri selama 4 bulan guna menguasai arsitektur dan fondasi pengembangan web modern.",
      "Menerapkan teknologi HTML5, CSS3, JavaScript ES6+, DOM Manipulation, dan prinsip Responsive Web Design melalui eksekusi proyek submission praktis untuk memastikan performa aplikasi yang intuitif serta lintas perangkat.",
      "Menuntaskan seluruh modul pelatihan akademis dengan standar evaluasi ketat tepat waktu, menghasilkan tingkat kelulusan 100% pada tingkat dasar hingga intermediate serta memperoleh sertifikasi kompetensi resmi Dicoding.",
    ],
  },
];

function ExperienceEntry({ experience }: { experience: (typeof experiences)[number] }) {
  return (
    <article className="grid gap-4 border-b border-white/10 py-7 sm:py-9 md:grid-cols-[minmax(9rem,0.55fr)_minmax(15rem,0.9fr)_minmax(0,1.55fr)] md:gap-8 lg:gap-12">
      <p className="pt-1 text-xs font-semibold tracking-wide text-[#e7785d] sm:text-sm">{experience.period}</p>
      <div>
        <h3 className="font-serif text-2xl leading-tight text-[#f1efe9] sm:text-3xl">{experience.role}</h3>
        <p className="mt-2 text-sm leading-6 text-[#89877f]">{experience.organization}</p>
      </div>
      <ul className="space-y-3 text-sm leading-7 text-[#bcb9b1] sm:text-base">
        {experience.description.map((detail) => (
          <li key={detail} className="relative pl-4 before:absolute before:left-0 before:top-[0.85em] before:h-1 before:w-1 before:rounded-full before:bg-[#e7785d]">{detail}</li>
        ))}
      </ul>
    </article>
  );
}

export default function EducationExperienceSection() {
  return (
    <div className="gallery-shell space-y-24 py-8 sm:space-y-32 sm:py-12">
      <section id="education" className="scroll-mt-24">
        <div className="gallery-heading">
          <h2>Pendidikan</h2>
          <p>Perjalanan akademik dan pencapaian saya.</p>
        </div>
        <article className="grid gap-4 border-y border-white/15 py-7 sm:py-9 md:grid-cols-[minmax(9rem,0.55fr)_minmax(15rem,0.9fr)_minmax(0,1.55fr)] md:gap-8 lg:gap-12">
          <p className="pt-1 text-xs font-semibold tracking-wide text-[#e7785d] sm:text-sm">{education.period}</p>
          <div>
            <h3 className="font-serif text-2xl leading-tight text-[#f1efe9] sm:text-3xl">{education.degree}</h3>
            <p className="mt-2 text-sm leading-6 text-[#89877f]">{education.institution}</p>
          </div>
          <p className="text-sm leading-7 text-[#bcb9b1] sm:text-base">{education.description}</p>
        </article>
      </section>

      <section id="experience" className="scroll-mt-24">
        <div className="gallery-heading">
          <h2>Pengalaman</h2>
          <p>Perjalanan pengalaman profesional saya.</p>
        </div>
        <div className="border-t border-white/15">
          {experiences.map((experience) => <ExperienceEntry key={experience.role} experience={experience} />)}
        </div>
      </section>
    </div>
  );
}
