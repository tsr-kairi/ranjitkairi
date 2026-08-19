import React, { useEffect, useRef } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  color: string;
}

/**
 * Premium animated hero background inspired by modern AI-site hero templates:
 * - Canvas particle network (drifting glowing particles with connection lines)
 * - Rotating conic-gradient spotlight beams
 * - Aurora gradient blobs with mouse parallax depth
 */
const AnimatedHeroBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // ---- Canvas particle network ----
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width = 0;
    let height = 0;
    let raf = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let particles: Particle[] = [];

    const colors = ['168, 85, 247', '34, 211, 238', '236, 72, 153'];

    const createParticles = () => {
      const count = Math.max(30, Math.floor((width * height) / 14000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: -(Math.random() * 0.35 + 0.05),
        r: Math.random() * 1.8 + 0.6,
        color: colors[Math.floor(Math.random() * colors.length)],
      }));
    };

    const resize = () => {
      width = container.clientWidth;
      height = container.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      createParticles();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Connection lines between nearby particles
      const maxDist = 130;
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < maxDist * maxDist) {
            const dist = Math.sqrt(distSq);
            ctx.strokeStyle = `rgba(168, 85, 247, ${(1 - dist / maxDist) * 0.16})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Particles
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, 0.7)`;
        ctx.fill();
      }

      if (!prefersReducedMotion) {
        raf = requestAnimationFrame(draw);
      }
    };

    resize();
    draw();

    const observer = new ResizeObserver(resize);
    observer.observe(container);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  // ---- Mouse parallax ----
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 40, damping: 20 });
  const sy = useSpring(my, { stiffness: 40, damping: 20 });

  const blobX = useTransform(sx, [0, 1], [-40, 40]);
  const blobY = useTransform(sy, [0, 1], [-40, 40]);
  const beamX = useTransform(sx, [0, 1], [25, -25]);
  const beamY = useTransform(sy, [0, 1], [15, -15]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };

  const beamDurations = [17, 14, 21];
  const beamRotations = [22, -22, 0];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Aurora blobs — slow drifting gradient clouds */}
      <motion.div style={{ x: blobX, y: blobY }} className="absolute inset-0">
        <motion.div
          className="absolute -top-1/3 -left-1/4 w-[70%] h-[70%] rounded-full bg-gradient-to-r from-purple-600/25 via-fuchsia-500/15 to-pink-500/20 blur-3xl"
          animate={{ x: [0, 60, 0], y: [0, 40, 0], scale: [1, 1.12, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-1/4 -right-1/4 w-[70%] h-[70%] rounded-full bg-gradient-to-r from-cyan-500/20 via-blue-500/15 to-indigo-500/20 blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, -30, 0], scale: [1.08, 1, 1.08] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        />
      </motion.div>

      {/* Rotating conic-gradient spotlight beams */}
      <motion.div
        style={{ x: beamX, y: beamY }}
        className="absolute inset-0 pointer-events-none"
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute top-8 left-1/2 w-[26em] h-[38em]"
            style={{
              transformOrigin: '50% 0',
              filter: 'blur(18px) opacity(0.5)',
              backgroundImage:
                'conic-gradient(from 0deg at 50% -5%, transparent 45%, rgba(168, 85, 247, 0.28) 49%, rgba(168, 85, 247, 0.5) 50%, rgba(168, 85, 247, 0.28) 51%, transparent 55%)',
            }}
            initial={{ rotate: beamRotations[i], opacity: 0 }}
            animate={{
              rotate: [beamRotations[i], -beamRotations[i], beamRotations[i]],
              opacity: 1,
            }}
            transition={{
              rotate: {
                duration: beamDurations[i],
                repeat: Infinity,
                ease: 'easeInOut',
              },
              opacity: { duration: 1.5, delay: 0.4 + i * 0.2 },
            }}
          />
        ))}
      </motion.div>

      {/* Canvas particle network */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Bottom fade for smooth transition into next section */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-gray-900 to-transparent" />
    </div>
  );
};

export default AnimatedHeroBackground;
