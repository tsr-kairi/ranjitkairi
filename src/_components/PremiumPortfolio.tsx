import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

import Navigation from './Navigation';
import HeroSection from './HeroSection';
import MarqueeSection from './MarqueeSection';
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

  // Scroll progress bar (top edge, fills as you scroll)
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white overflow-hidden relative">
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[3px] z-[60] origin-left bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 shadow-lg shadow-purple-500/30"
      />
      <Navigation />
      <HeroSection isLoaded={isLoaded} />
      <MarqueeSection />
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