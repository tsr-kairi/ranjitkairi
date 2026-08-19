import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      // Track the section currently in view
      let current = '';
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) {
          current = item.id;
        }
      }
      setActiveSection(current);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gray-900/85 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex-shrink-0 flex items-center gap-2.5 cursor-pointer"
            aria-label="Back to top"
          >
            <img src="/logo.svg" alt="Ranjit Kairi" className="h-10 w-10 rounded-xl" />
            <span className="hidden sm:block text-white font-bold text-xl tracking-tight">
              Ranjit<span className="text-purple-400">.dev</span>
            </span>
          </motion.button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.96 }}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </motion.button>
              );
            })}
            <motion.a
              href="resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="ml-3 px-5 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
            >
              Resume
            </motion.a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-xl text-gray-200 hover:bg-white/5 focus:outline-none"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
          >
            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {!mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden bg-gray-900/95 backdrop-blur-xl border-t border-white/10"
          >
            <div className="px-4 py-3 space-y-1">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-white bg-gradient-to-r from-purple-500/20 to-pink-500/20'
                      : 'text-gray-300 hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.a
                href="resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-4 py-3 mt-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl text-base font-medium"
              >
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navigation;
