import React from 'react';
import { motion, Variants } from 'framer-motion';

type RevealDirection = 'up' | 'down' | 'left' | 'right' | 'none';

interface Scroll3DRevealProps {
  children: React.ReactNode;
  /** Direction the element travels from while revealing */
  direction?: RevealDirection;
  /** Max rotation in degrees (default 15) */
  rotate?: number;
  /** Delay in seconds */
  delay?: number;
  /** Animation duration in seconds */
  duration?: number;
  /** Travel distance in px (default 60) */
  distance?: number;
  className?: string;
  style?: React.CSSProperties;
  /** Whether the animation runs only once (default true) */
  once?: boolean;
  /** Viewport amount required to trigger (default 0.2) */
  amount?: number;
  /** Viewport margin (e.g. "-100px") */
  margin?: string;
}

/**
 * Wraps children in a scroll-triggered 3D reveal:
 * the element rotates (rotateX/rotateY) and translates into view
 * with a perspective transform, giving depth as the user scrolls.
 */
const Scroll3DReveal: React.FC<Scroll3DRevealProps> = ({
  children,
  direction = 'up',
  rotate = 15,
  delay = 0,
  duration = 0.7,
  distance = 60,
  className,
  style,
  once = true,
  amount = 0.2,
  margin,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const hidden: Record<string, any> = {
    opacity: 0,
    transformPerspective: 1200,
    y: 0,
    x: 0,
    rotateX: 0,
    rotateY: 0,
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const visible: Record<string, any> = {
    opacity: 1,
    transformPerspective: 1200,
    y: 0,
    x: 0,
    rotateX: 0,
    rotateY: 0,
    transition: {
      duration,
      delay,
      ease: [0.16, 1, 0.3, 1],
    },
  };

  switch (direction) {
    case 'up':
      hidden.y = distance;
      hidden.rotateX = rotate;
      break;
    case 'down':
      hidden.y = -distance;
      hidden.rotateX = -rotate;
      break;
    case 'left':
      hidden.x = -distance;
      hidden.rotateY = rotate;
      break;
    case 'right':
      hidden.x = distance;
      hidden.rotateY = -rotate;
      break;
    case 'none':
    default:
      break;
  }

  const variants: Variants = { hidden, visible };

  return (
    <motion.div
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount, margin }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default Scroll3DReveal;
