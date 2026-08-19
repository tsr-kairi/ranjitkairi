import React from 'react';

interface MarqueeProps {
  children: React.ReactNode;
  reverse?: boolean;
  speed?: number; // seconds for one full loop
  className?: string;
  pauseOnHover?: boolean;
}

/**
 * Infinite scrolling marquee (motionsites.ai style).
 * Content is duplicated once so the -50% translate loops seamlessly.
 */
const Marquee = ({
  children,
  reverse = false,
  speed = 30,
  className = '',
  pauseOnHover = true,
}: MarqueeProps) => {
  return (
    <div
      className={`marquee overflow-hidden whitespace-nowrap select-none ${pauseOnHover ? 'marquee-pause-hover' : ''} ${className}`}
      style={{ ['--marquee-speed' as string]: `${speed}s` }}
    >
      <div className={`marquee-track ${reverse ? 'marquee-reverse' : ''}`}>
        <div className="marquee-content">{children}</div>
        <div className="marquee-content" aria-hidden="true">{children}</div>
      </div>
      <style type="text/css">{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee-scroll var(--marquee-speed, 30s) linear infinite;
          will-change: transform;
        }
        .marquee-reverse {
          animation-direction: reverse;
        }
        .marquee-content {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }
        .marquee-pause-hover:hover .marquee-track {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Marquee;
