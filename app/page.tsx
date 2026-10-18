import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import EducationExperienceSection from '@/components/EducationExperienceSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactFooterSection from '@/components/ContactFooterSection';

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">Lewati ke konten utama</a>
      <Navbar />
      <main id="main-content" className="min-h-screen">
        <HeroSection />
        <AboutSection />
        <EducationExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactFooterSection />
      </main>
    </>
  );
}
