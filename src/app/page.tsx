import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import SkillsSection from '@/components/sections/SkillsSection';
import EducationSection from '@/components/sections/EducationSection';
import ExperienceTimelineSection from '@/components/sections/ExperienceTimelineSection';
import BlogSection from '@/components/sections/BlogSection';
import AiOptimizerSection from '@/components/sections/AiOptimizerSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden"> {/* Added overflow-x-hidden to prevent horizontal scroll from animations */}
        <HeroSection id="home" />
        <AboutSection id="about" />
        <ProjectsSection id="projects" />
        <SkillsSection id="skills" />
        <EducationSection id="education" />
        <ExperienceTimelineSection id="experience" />
        {/* <BlogSection id="blog" />  // Uncomment when blog is fully ready and has actual content/navigation */}
        <AiOptimizerSection id="ai-optimizer" />
        <ContactSection id="contact" />
      </main>
      <Footer />
    </>
  );
}
