import React from 'react';

interface SectionAmbienceProps {
  variant?: 'purple' | 'blue' | 'pink' | 'cyan';
  className?: string;
}

const variants = {
  purple: {
    dot: 'rgba(168, 85, 247, 0.07)',
    orb1: 'rgba(168, 85, 247, 0.18)',
    orb2: 'rgba(236, 72, 153, 0.12)',
    orb3: 'rgba(59, 130, 246, 0.08)',
  },
  blue: {
    dot: 'rgba(59, 130, 246, 0.06)',
    orb1: 'rgba(59, 130, 246, 0.14)',
    orb2: 'rgba(34, 211, 238, 0.10)',
    orb3: 'rgba(168, 85, 247, 0.08)',
  },
  pink: {
    dot: 'rgba(236, 72, 153, 0.06)',
    orb1: 'rgba(236, 72, 153, 0.14)',
    orb2: 'rgba(168, 85, 247, 0.12)',
    orb3: 'rgba(251, 113, 133, 0.08)',
  },
  cyan: {
    dot: 'rgba(34, 211, 238, 0.06)',
    orb1: 'rgba(34, 211, 238, 0.12)',
    orb2: 'rgba(59, 130, 246, 0.12)',
    orb3: 'rgba(168, 85, 247, 0.08)',
  },
};

/**
 * Reusable ambient background layer for sections: a fading dot grid plus
 * large blurred glow orbs, so no section ever feels flat. Cheap (pure CSS
 * blur + background-image), pointer-events disabled.
 */
const SectionAmbience = ({ variant = 'purple', className = '' }: SectionAmbienceProps) => {
  const c = variants[variant];
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {/* Fading dot grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, ${c.dot} 1px, transparent 1px)`,
          backgroundSize: '26px 26px',
          maskImage: 'radial-gradient(ellipse 90% 70% at 50% 40%, black, transparent)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 70% at 50% 40%, black, transparent)',
        }}
      />
      {/* Glow orbs */}
      <div
        className="absolute -top-24 -left-24 w-[480px] h-[480px] rounded-full blur-[120px]"
        style={{ background: c.orb1 }}
      />
      <div
        className="absolute -bottom-32 -right-24 w-[520px] h-[520px] rounded-full blur-[130px]"
        style={{ background: c.orb2 }}
      />
      <div
        className="absolute top-1/3 left-1/2 w-[300px] h-[300px] rounded-full blur-[110px] -translate-x-1/2"
        style={{ background: c.orb3 }}
      />
      {/* Hairline top accent */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
};

export default SectionAmbience;
