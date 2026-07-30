import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import EducationExperienceSection from '@/components/EducationExperienceSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactFooterSection from '@/components/ContactFooterSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 px-6 md:px-12 lg:px-20 font-sans relative">
      {/* 1. Navbar */}
      <Navbar />

      {/* 2. Hero Section */}
      <HeroSection />

      <div className="max-w-7xl mx-auto  my-6" />

      {/* 3. About Section */}
      <AboutSection />

      <div className="max-w-7xl mx-auto my-6" />

      {/* 4. Education & Experience */}
      <EducationExperienceSection />

      

      <div className="max-w-7xl mx-auto my-6" />

      {/* 6. Projects Section */}
      <ProjectsSection />

      <div className="max-w-7xl mx-auto  my-6" />

      {/* 5. Skills Auto-Scroll */}
      <SkillsSection />

      

      {/* 7. Contact & Footer */}
      <ContactFooterSection />
    </main>
  );
}