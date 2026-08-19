import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  /** Max tilt angle in degrees (default 8) */
  maxTilt?: number;
  /** Hover scale (default 1.02) */
  scale?: number;
  style?: React.CSSProperties;
}

/**
 * Wraps children in a 3D tilt card — the element tilts
 * (rotateX/rotateY) following the cursor position.
 */
const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className,
  maxTilt = 8,
  scale = 1.02,
  style,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(my, [0, 1], [maxTilt, -maxTilt]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-maxTilt, maxTilt]), {
    stiffness: 150,
    damping: 20,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        ...style,
        rotateX,
        rotateY,
        transformPerspective: 1000,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale }}
      transition={{ type: 'spring', stiffness: 150, damping: 20 }}
    >
      {children}
    </motion.div>
  );
};

export default TiltCard;
