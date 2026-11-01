import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { siteUrl } from "@/src/data/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

const portfolioUrl = siteUrl;
const portfolioTitle = "Emil Prayoga Albani — Web Developer React & Next.js";
const portfolioDescription =
  "Web developer dari Sumenep, Madura. Membangun website dan aplikasi web responsif dengan React, Next.js, Supabase, dan integrasi AI untuk UMKM dan tim produk. Terbuka untuk freelance dan remote.";

export const metadata: Metadata = {
  metadataBase: new URL(portfolioUrl),
  title: portfolioTitle,
  description: portfolioDescription,
  keywords: [
    "Emil Prayoga Albani",
    "web developer Sumenep",
    "web developer Madura",
    "jasa pembuatan website UMKM",
    "Next.js developer Indonesia",
    "React developer",
  ],

  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: portfolioTitle,
    description: portfolioDescription,
    url: "/",
    siteName: "Emil Prayoga Albani",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Emil Prayoga Albani — Web Developer React & Next.js",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: portfolioTitle,
    description: portfolioDescription,
    images: ["/opengraph-image"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Emil Prayoga Albani",
  url: portfolioUrl,
  jobTitle: "Web Developer (React & Next.js)",
  description: portfolioDescription,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sumenep",
    addressRegion: "Jawa Timur",
    addressCountry: "ID",
  },
  sameAs: [
    "https://github.com/emil-prayoga",
    "https://linkedin.com/in/emilprayogaalbani",
    "https://instagram.com/emil_prayoga_albani",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Emil Prayoga Albani - Portofolio",
  url: portfolioUrl,
  inLanguage: "id-ID",
  author: {
    "@type": "Person",
    name: "Emil Prayoga Albani",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
