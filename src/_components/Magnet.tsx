import React, { useEffect, useRef, useState } from 'react';

interface MagnetProps {
  children: React.ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

/**
 * Mouse-following magnetic hover (motionsites.ai style).
 * The wrapped content drifts toward the cursor once it comes within
 * `padding` px of the element edge, then eases back on leave.
 */
const Magnet = ({
  children,
  padding = 100,
  strength = 2,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className = '',
}: MagnetProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const distX = Math.abs(e.clientX - (rect.left + rect.width / 2));
      const distY = Math.abs(e.clientY - (rect.top + rect.height / 2));
      const isNear =
        distX < rect.width / 2 + padding && distY < rect.height / 2 + padding;
      if (isNear) {
        const x = (e.clientX - (rect.left + rect.width / 2)) / strength;
        const y = (e.clientY - (rect.top + rect.height / 2)) / strength;
        setActive(true);
        setPosition({ x, y });
      } else {
        setActive(false);
        setPosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [padding, strength]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: active ? activeTransition : inactiveTransition,
        willChange: 'transform',
        display: 'inline-block',
      }}
    >
      {children}
    </div>
  );
};

export default Magnet;
