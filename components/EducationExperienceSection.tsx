
const education = {
  degree: "S1 Sistem Informasi",
  institution: "Universitas Bahaudin Mudhary Madura",
  period: "2024 - Sekarang",
  description:
    "Mempelajari pengembangan perangkat lunak, basis data, dan teknologi web sebagai bagian dari studi Sistem Informasi.",
};

const experiences = [
  {
    role: "Asisten Praktikum Database",
    organization: "Universitas Bahaudin Mudhary Madura",
    period: "Apr 2026 - Jul 2026",
    description: [
      "Berkolaborasi dengan tim asisten dalam membimbing 35+ mahasiswa mempelajari SQL menggunakan MySQL, mencakup query, DDL/DML, dan pengelolaan basis data.",
      "Membantu praktikan melakukan troubleshooting query serta merekap penilaian proyek menggunakan Microsoft Excel untuk 40+ mahasiswa.",
    ],
  },
  
{
  role: "Pengembangan Web Mandiri",
  organization: "Proyek Mandiri & Pengembangan Portofolio",
  period: "Mar 2026 - Sekarang",
  description: [
    "Mengembangkan proyek web mandiri menggunakan React dan Next.js dengan fokus pada antarmuka responsif, pengalaman pengguna, dan implementasi UI/UX.",
    "Memanfaatkan AI-assisted development untuk membantu implementasi komponen UI, sekaligus meninjau dan menyesuaikan kode sesuai kebutuhan proyek.",
    "Contoh keputusan yang diambil sendiri: merancang skema data (relasi produk, pesanan, pengguna) dan validasi input sebelum data disimpan, agar aplikasi tetap aman dan konsisten.",
    "Secara aktif membangun jaringan profesional, menjangkau prospek UMKM, serta mengeksplorasi peluang proyek freelance dan kolaborasi di bidang pengembangan website dan sistem informasi."
  ]
},

  {
    role: "Asisten Praktikum Python",
    organization: "Universitas Bahaudin Mudhary Madura",
    period: "Nov 2025 - Jan 2026",
    description: [
      "Membimbing 25+ praktikan dalam memahami konsep algoritma dan pemrograman menggunakan Python.",
      "Membantu proses debugging serta penyelesaian latihan praktikum berdasarkan lima modul pembelajaran.",
    ],
  },
  {
    role: "Peserta IDCamp 2025",
    organization: "Dicoding Indonesia",
    period: "Sep 2025 - Jan 2026",
    description: [
      "Mengikuti program beasiswa pembelajaran Front-End Web Development melalui Dicoding Indonesia.",
      "Mempelajari HTML5, CSS3, JavaScript ES6+, DOM manipulation, dan responsive web design melalui modul pembelajaran dan proyek submission.",
      "Menyelesaikan jalur pembelajaran yang diikuti dan memperoleh sertifikat sesuai capaian program.",
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
          <h2>Pendidikan.</h2>
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
          <h2>Pengalaman.</h2>
          <p>Pengalaman kerja, kegiatan, dan proyek mandiri saya.</p>
        </div>
        <div className="border-t border-white/15">
          {experiences.map((experience) => <ExperienceEntry key={experience.role} experience={experience} />)}
        </div>
      </section>
    </div>
  );
}
