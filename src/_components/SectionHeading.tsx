import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  badge: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: 'center' | 'left';
  titleClassName?: string;
  className?: string;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 40, rotateX: 12, transformPerspective: 1200 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transformPerspective: 1200,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
};

/**
 * Unified premium section header (motionsites.ai style):
 * glass badge pill + big gradient headline + animated underline + subtitle.
 */
const SectionHeading = ({
  badge,
  title,
  subtitle,
  align = 'center',
  titleClassName = 'text-5xl md:text-6xl',
  className = '',
}: SectionHeadingProps) => {
  const center = align === 'center';
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={`mb-16 ${center ? 'text-center' : 'text-left'} ${className}`}
    >
      <motion.span
        variants={fadeInUp}
        className="inline-block px-4 py-1 text-sm font-medium text-purple-400 bg-purple-900/30 rounded-full mb-4 border border-purple-500/20 backdrop-blur-sm"
      >
        {badge}
      </motion.span>
      <motion.h2
        variants={fadeInUp}
        className={`${titleClassName} font-bold text-white mb-6 leading-tight`}
      >
        {title}
      </motion.h2>
      <motion.div
        variants={{
          hidden: { scaleX: 0 },
          visible: {
            scaleX: 1,
            transition: { delay: 0.3, duration: 0.8, type: 'spring' },
          },
        }}
        className={`w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full ${center ? 'mx-auto' : ''}`}
      />
      {subtitle && (
        <motion.p
          variants={fadeInUp}
          className={`text-xl text-gray-400 max-w-3xl mt-8 leading-relaxed ${center ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
