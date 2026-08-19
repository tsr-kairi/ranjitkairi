import React from 'react';
import Marquee from './Marquee';

const services = [
  'Frontend Development',
  'React.js',
  'Next.js',
  'UI Engineering',
  'TypeScript',
  'AI-Powered Dev',
  'WordPress',
  'Performance Optimization',
  'Component Libraries',
  'Responsive Design',
];

const techStack = [
  'React',
  'Next.js',
  'TypeScript',
  'JavaScript',
  'Node.js',
  'Tailwind CSS',
  'GraphQL',
  'Redux',
  'Jest',
  'Docker',
  'AWS',
  'Git',
];

/**
 * Dual-row infinite marquee strip (motionsites.ai "seamless marquee
 * scroller" style) that sits between the hero and about sections.
 */
const MarqueeSection = () => {
  return (
    <section
      className="relative z-10 py-16 md:py-20 bg-gray-900/60 border-y border-white/5 overflow-hidden"
      aria-label="Skills and services"
    >
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-gray-900 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-gray-900 to-transparent z-10" />

      {/* Row 1 - big gradient keywords */}
      <Marquee speed={38} className="mb-6">
        {services.map((service) => (
          <span key={service} className="flex items-center">
            <span className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent opacity-70 hover:opacity-100 transition-opacity mx-4 md:mx-6 whitespace-nowrap">
              {service}
            </span>
            <span className="text-2xl md:text-4xl text-purple-500/40">✦</span>
          </span>
        ))}
      </Marquee>

      {/* Row 2 - tech pills scrolling the other way */}
      <Marquee reverse speed={26}>
        {techStack.map((tech) => (
          <span key={tech} className="flex items-center mx-2 md:mx-3">
            <span className="px-5 py-2.5 md:px-6 md:py-3 rounded-full border border-white/10 bg-white/5 text-sm md:text-base font-medium text-gray-300 hover:text-white hover:border-purple-400/40 hover:bg-purple-500/10 transition-colors whitespace-nowrap">
              {tech}
            </span>
            <span className="ml-4 md:ml-5 w-1.5 h-1.5 rounded-full bg-purple-500/50" />
          </span>
        ))}
      </Marquee>
    </section>
  );
};

export default MarqueeSection;
