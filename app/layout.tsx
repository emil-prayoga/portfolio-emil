import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { cookies } from "next/headers";
import { siteUrl } from "@/src/data/site";
import {
  isValidLocale,
  defaultLocale
} from "@/src/data/translations";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

const portfolioUrl = siteUrl;

export const metadata: Metadata = {
  metadataBase: new URL(portfolioUrl),
  title: `Emil Prayoga Albani — Web Developer React & Next.js`,
  description: `Web developer from Sumenep, Madura. Building responsive websites and web applications with React, Next.js, Supabase, and AI integration.`,
  alternates: {
    canonical: "/",
    languages: {
      id: "/id",
      en: "/en",
      "x-default": "/id",
    },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get("NEXT_LOCALE")?.value;
  const locale = isValidLocale(cookieLocale) ? cookieLocale : defaultLocale;

  return (
    <html lang={locale} className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
