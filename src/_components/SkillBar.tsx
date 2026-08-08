import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  color: string;
}

const SkillBar: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 100);
    return () => clearTimeout(timer);
  }, [index]);

  // Extract the gradient colors from the color string
  const gradientColors = skill.color
    .replace('from-', '')
    .replace('to-', '')
    .split(' ')
    .map(color => `var(--tw-gradient-${color})`);

  return (
    <div 
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between items-center mb-3">
        <span className="text-gray-200 font-medium text-sm md:text-base">
          {skill.name}
        </span>
        <motion.span 
          className="text-xs font-mono bg-gray-700/50 px-2 py-1 rounded text-gray-300"
          initial={{ opacity: 0, x: 10 }}
          animate={{ 
            opacity: isVisible ? 1 : 0,
            x: isVisible ? 0 : 10,
            transition: { delay: 0.3 + (index * 0.05) }
          }}
        >
          {skill.level}%
        </motion.span>
      </div>
      
      <div className="relative h-2.5 bg-gray-700/50 rounded-full overflow-hidden">
        <motion.div 
          className={`h-full rounded-full relative`}
          initial={{ width: 0 }}
          animate={{ 
            width: isVisible ? `${skill.level}%` : '0%',
            transition: { 
              duration: 1,
              delay: 0.2 + (index * 0.05),
              ease: [0.25, 0.1, 0.25, 1]
            }
          }}
        >
          <div 
            className={`absolute inset-0 rounded-full bg-gradient-to-r ${skill.color}`}
          />
          
          {/* Animated glow effect */}
          <motion.div 
            className="absolute top-0 bottom-0 right-0 w-8 bg-gradient-to-r from-transparent to-white/30"
            initial={{ opacity: 0 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              left: ['-100%', '100%'],
              transition: {
                repeat: isHovered ? Infinity : 0,
                repeatType: 'loop',
                duration: 1.5,
                ease: 'easeInOut'
              }
            }}
          />
        </motion.div>
      </div>
      
      {/* Skill level indicator dot */}
      <motion.div 
        className="absolute -right-1 -top-1 w-2.5 h-2.5 rounded-full bg-white shadow-lg"
        style={{
          background: `linear-gradient(135deg, ${gradientColors[0]}, ${gradientColors[1]})`,
          boxShadow: `0 0 10px ${gradientColors[0].replace(')', '/0.8)')}`
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0,
          transition: { 
            delay: 0.5 + (index * 0.05),
            type: 'spring',
            stiffness: 500,
            damping: 30
          }
        }}
      />
    </div>
  );
};

export default SkillBar;