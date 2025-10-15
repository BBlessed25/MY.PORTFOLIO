import './index.css';
import { ThemeProvider } from './components/ThemeContext';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { SEO } from './components/SEO';

export default function App(){
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <SEO
          title="John Ayodeji - Frontend Developer | React Specialist"
          description="Frontend developer specializing in React, TypeScript, and modern web technologies. Creating beautiful, performant, and accessible web experiences."
          image="https://example.com/og-image.jpg"
          url="https://johnayodeji.dev"
        />
        <Navigation />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
