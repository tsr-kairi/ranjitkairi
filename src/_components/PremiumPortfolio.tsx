import React, { useState, useEffect, useRef } from 'react';

import Navigation from './Navigation';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ExperienceSection from './ExperienceSection';
import SkillsSection from './SkillsSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import FloatingIcons from './FloatingIcons';

const PremiumPortfolio = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white overflow-hidden relative">
      <Navigation />
      <HeroSection isLoaded={isLoaded} />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection isLoaded={isLoaded} />
      <ContactSection />
      <Footer />
      <FloatingIcons />
    </div>
  );
};

export default PremiumPortfolio;