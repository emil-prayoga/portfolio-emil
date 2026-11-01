// components/JsonLd.tsx — structured data Person + WebSite
// Validasi di https://search.google.com/test/rich-results

const SITE_URL = "https://portofolio-emil-prayoga-albani.vercel.app";

const person = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Emil Prayoga Albani",
      url: SITE_URL,
      image: `${SITE_URL}/opengraph-image`,
      jobTitle: "Web Developer",
      description:
        "Web developer yang membangun aplikasi web responsif dengan React, Next.js, Supabase, dan integrasi AI.",
      email: "mailto:emilalbani54@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sumenep",
        addressRegion: "Jawa Timur",
        addressCountry: "ID",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Universitas Bahaudin Mudhary Madura",
      },
      knowsAbout: [
        "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS",
        "Supabase", "REST API", "AI integration", "UI/UX",
      ],
      sameAs: [
        "https://github.com/emil-prayoga",
        "https://linkedin.com/in/emilprayogaalbani",
        "https://instagram.com/emil_prayoga_albani",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Emil Prayoga Albani — Portofolio",
      inLanguage: "id-ID",
      publisher: { "@id": `${SITE_URL}/#person` },
    },
  ],
};

export function PersonJsonLd() {
  return (
    <script
      type="application/ld+json"
      // aman: konten statis milik sendiri, bukan input pengguna
      dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
    />
  );
}

/* Untuk halaman case study, tambahkan juga:
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "SiRT Digital",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: "https://sim-rt-etzn.vercel.app/",
  author: { "@id": `${SITE_URL}/#person` },
  description: "Sistem informasi web untuk pengelolaan data warga dan administrasi RT."
}
*/
