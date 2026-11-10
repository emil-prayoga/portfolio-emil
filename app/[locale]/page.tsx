import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EducationExperienceSection from "@/components/EducationExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesSection from "@/components/ServicesSection";
import ContactFooterSection from "@/components/ContactFooterSection";
import { type Locale } from "@/src/data/translations";

export const dynamicParams = false;

export async function generateStaticParams() {
  return [{ locale: "id" }, { locale: "en" }];
}

export default async function LocalePage({
  params,
}: Readonly<{
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const validLocale: Locale = locale === "id" || locale === "en" ? (locale as Locale) : "id";

  return (
    <>
      <a href="#main-content" className="skip-link">
        {validLocale === "id" ? "Lewati ke konten utama" : "Skip to main content"}
      </a>
      <Navbar locale={validLocale} />
      <main id="main-content" tabIndex={-1} className="min-h-screen">
        <HeroSection locale={validLocale} />
        <AboutSection locale={validLocale} />
        <EducationExperienceSection locale={validLocale} />
        <ProjectsSection locale={validLocale} />
        <ServicesSection locale={validLocale} />
        <SkillsSection locale={validLocale} />
        <ContactFooterSection locale={validLocale} />
      </main>
    </>
  );
}
