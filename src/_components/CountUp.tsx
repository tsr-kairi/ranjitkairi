import React, { useEffect, useRef } from 'react';
import { animate, useInView } from 'framer-motion';

interface CountUpProps {
  end: number;
  suffix?: string;
  duration?: number;
  className?: string;
  decimals?: number;
}

/**
 * Number that counts up from 0 to `end` when scrolled into view
 * (motionsites.ai "count-up stats band" style).
 */
const CountUp = ({ end, suffix = '', duration = 1.8, className = '', decimals = 0 }: CountUpProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const controls = animate(0, end, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (value) => {
        if (ref.current) {
          ref.current.textContent = `${value.toFixed(decimals)}${suffix}`;
        }
      },
    });
    return () => controls.stop();
  }, [inView, end, suffix, duration, decimals]);

  return (
    <span ref={ref} className={className}>
      {(0).toFixed(decimals)}{suffix}
    </span>
  );
};

export default CountUp;
