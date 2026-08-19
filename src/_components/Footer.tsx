import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp, Heart } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  const socials = [
    { icon: Github, href: 'https://github.com/tsr-kairi', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/ranjitkairi/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:ranjitkairi.dev@gmail.com', label: 'Email' },
  ];

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative z-10 overflow-hidden border-t border-white/5">
      {/* Gradient glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/60 to-transparent" />
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          {/* Brand */}
          <div>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2 mb-4 cursor-pointer" aria-label="Back to top">
              <img src="/logo.svg" alt="Ranjit Kairi" className="h-10 w-10 rounded-lg" />
              <span className="text-white font-bold text-xl">
                Ranjit<span className="text-purple-400">.dev</span>
              </span>
            </button>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Senior Frontend Developer crafting scalable React & Next.js experiences — powered by AI-assisted workflows.
            </p>
          </div>

          {/* Quick links */}
          <div className="md:text-center">
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider text-gray-300">Quick Links</h4>
            <div className="flex flex-wrap md:justify-center gap-x-5 gap-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById(link.href.slice(1));
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-sm text-gray-400 hover:text-purple-300 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Socials + back to top */}
          <div className="md:text-right">
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider text-gray-300">Connect</h4>
            <div className="flex md:justify-end gap-3 mb-5">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                  className="p-2.5 rounded-xl border border-white/10 bg-white/5 text-gray-300 hover:text-white hover:border-purple-500/40 hover:bg-purple-500/10 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300 hover:text-white hover:border-purple-500/40 transition-colors"
            >
              Back to top
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-gray-500">
            © {year} Ranjit Kairi. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 flex items-center">
            Built with <Heart className="w-4 h-4 text-pink-500 fill-current mx-1" /> using React & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
