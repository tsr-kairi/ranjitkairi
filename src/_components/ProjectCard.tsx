import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ArrowRight, Star, Eye } from 'lucide-react';
import { Project } from '../data/projectsData';

interface ProjectCardProps {
  project: Project;
  index: number;
  isLoaded: boolean;
}

const ProjectCard = ({ project, index, isLoaded }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // Extract primary and secondary colors from project tech
  const getTechGradient = (tech: string[]) => {
    const techColors: Record<string, string> = {
      'React': 'from-blue-500/20 to-cyan-500/20',
      'Next.js': 'from-gray-200/20 to-gray-400/20',
      'TypeScript': 'from-blue-600/20 to-blue-400/20',
      'Node.js': 'from-green-500/20 to-emerald-400/20',
      'MongoDB': 'from-green-600/20 to-green-400/20',
      'PostgreSQL': 'from-blue-400/20 to-blue-600/20',
      'AI/ML': 'from-purple-500/20 to-pink-500/20',
      'OpenAI API': 'from-purple-400/20 to-pink-400/20',
      'Tailwind CSS': 'from-cyan-400/20 to-blue-500/20',
      'Docker': 'from-blue-400/20 to-cyan-500/20',
      'AWS': 'from-yellow-400/20 to-orange-500/20',
      'CI/CD': 'from-green-500/20 to-emerald-500/20',
    };
    
    const primaryTech = tech[0] || 'React';
    const secondaryTech = tech[1] || 'TypeScript';
    
    return {
      primary: techColors[primaryTech] || 'from-purple-500/20 to-pink-500/20',
      secondary: techColors[secondaryTech] || 'from-blue-500/20 to-cyan-500/20',
    };
  };

  const { primary, secondary } = getTechGradient(project.tech);
  const gradient = `bg-gradient-to-br ${primary} ${secondary}`;

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    hover: {
      y: -5,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 15
      }
    },
    tap: {
      scale: 0.98
    }
  };

  return (
    <motion.article
      initial="hidden"
      animate={isLoaded ? "visible" : "hidden"}
      whileHover="hover"
      whileTap="tap"
      variants={cardVariants}
      className={`group relative h-full overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 transition-all duration-500 ${
        isHovered ? 'shadow-2xl shadow-purple-500/10' : 'shadow-lg'
      } ${project.featured ? 'ring-1 ring-purple-500/50' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 right-4 z-10">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center">
              <Star className="w-3 h-3 mr-1.5 fill-current" />
              Featured
            </div>
          </div>
        </div>
      )}

      {/* Project Image */}
      <div className="relative h-56 overflow-hidden">
        <motion.div 
          className={`absolute inset-0 ${gradient} opacity-50 z-0`}
          initial={{ opacity: 0.5 }}
          animate={{ opacity: isHovered ? 0.7 : 0.5 }}
          transition={{ duration: 0.4 }}
        ></motion.div>
        <motion.div 
          className="relative w-full h-full overflow-hidden"
          initial={false}
          animate={{
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1]
          }}
        >
          <motion.img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{
              opacity: isImageLoaded ? 1 : 0,
              scale: isImageLoaded ? 1 : 1.1
            }}
            transition={{
              opacity: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
              scale: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
            }}
            onLoad={() => setIsImageLoaded(true)}
          />
        </motion.div>
        
        {/* Image Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 ${
          isHovered || isExpanded ? 'opacity-100' : ''
        } transition-opacity duration-500 flex flex-col justify-end p-6`}>
          <motion.div 
            className="translate-y-4 group-hover:translate-y-0 transition-all duration-500 transform overflow-hidden"
            initial={false}
            animate={{
              y: isHovered || isExpanded ? 0 : 20,
              opacity: isHovered || isExpanded ? 1 : 0,
            }}
          >
            <h3 className="text-2xl font-bold text-white mb-2 line-clamp-2">{project.title}</h3>
            {project.role && (
              <p className="text-purple-300 text-sm font-medium mb-3">{project.role}</p>
            )}
          </motion.div>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.slice(0, 5).map((tech, i) => (
            <motion.span 
              key={i}
              className="px-3 py-1 bg-gray-700/50 text-gray-200 rounded-full text-xs font-medium border border-gray-600/50 hover:bg-gray-600/50 transition-colors"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: 'rgba(168, 85, 247, 0.2)',
                borderColor: 'rgba(168, 85, 247, 0.5)'
              }}
            >
              {tech}
            </motion.span>
          ))}
          {project.tech.length > 5 && (
            <span className="px-2 py-1 bg-gray-800/50 text-gray-400 rounded-full text-xs">
              +{project.tech.length - 5} more
            </span>
          )}
        </div>
        
        {/* Description */}
        <motion.div 
          className="overflow-hidden"
          initial={false}
          animate={{
            height: isExpanded ? 'auto' : '4.5rem',
          }}
          transition={{
            duration: 0.4,
            ease: [0.16, 1, 0.3, 1]
          }}
        >
          <p className="text-gray-300 mb-5 leading-relaxed">
          {project.description}
          </p>
        </motion.div>
        
        {/* Read More Button */}
        <motion.button 
          onClick={(e) => {
            e.stopPropagation();
            setIsExpanded(!isExpanded);
          }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="text-sm text-purple-400 hover:text-white mb-4 flex items-center transition-colors group/button"
        >
          {isExpanded ? 'Show less' : 'Read more'}
          <motion.span
            className="ml-1.5 inline-flex items-center justify-center"
            animate={{
              rotate: isExpanded ? 180 : 0,
              y: isHovered ? [0, 2, 0] : 0
            }}
            transition={{
              rotate: { duration: 0.3 },
              y: {
                duration: 1.5,
                repeat: isHovered ? Infinity : 0,
                repeatType: 'reverse'
              }
            }}
          >
            <motion.span
              animate={{
                y: isExpanded ? 1 : 0
              }}
              transition={{
                duration: 0.3
              }}
            >
              ▼
            </motion.span>
          </motion.span>
        </motion.button>

        {/* Impact Section (Collapsible) */}
        <AnimatePresence>
          {(isHovered || isExpanded) && project.impact && project.impact.length > 0 && (
            <motion.div 
              className="mb-5 overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ 
                height: 'auto',
                opacity: 1,
                transition: { duration: 0.3 }
              }}
              exit={{ 
                height: 0, 
                opacity: 0,
                transition: { duration: 0.2 }
              }}
            >
              <div className="border-l-2 border-purple-500/30 pl-4">
                <h4 className="text-sm font-semibold text-white mb-2 flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2"></span>
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  {project.impact.map((item, i) => (
                    <li key={i} className="flex items-start text-gray-300 text-sm leading-relaxed">
                      <span className="text-purple-400 mr-2 flex-shrink-0 mt-1.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
          <div className="flex space-x-2">
            <motion.a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium bg-gradient-to-r from-purple-600/20 to-pink-600/20 hover:from-purple-600/30 hover:to-pink-600/30 px-4 py-2 rounded-lg text-purple-300 hover:text-white transition-all group/button"
              onClick={(e) => e.stopPropagation()}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Eye className="w-4 h-4 mr-2" />
              Live Demo
              <ArrowRight className="ml-2 w-4 h-4 opacity-0 group-hover/button:opacity-100 group-hover/button:translate-x-1 transition-all" />
            </motion.a>
            
            {project.github && (
              <motion.a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 hover:text-white transition-colors"
                onClick={(e) => e.stopPropagation()}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="View on GitHub"
              >
                <Github className="w-5 h-5" />
              </motion.a>
            )}
          </div>
          
          <div className="text-xs text-gray-500 font-mono">
            {String(index + 1).padStart(2, '0')}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;