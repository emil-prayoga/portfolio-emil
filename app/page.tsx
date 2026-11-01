import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import EducationExperienceSection from '@/components/EducationExperienceSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ServicesSection from '@/components/ServicesSection';
import ContactFooterSection from '@/components/ContactFooterSection';

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">Lewati ke konten utama</a>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="min-h-screen">
        <HeroSection />
        <AboutSection />
        <EducationExperienceSection />
        <ProjectsSection />
        <ServicesSection />
        <SkillsSection />
        <ContactFooterSection />
      </main>
    </>
  );
}
