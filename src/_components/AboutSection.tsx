import React from 'react';
import { motion } from 'framer-motion';
import { Code, Trophy, Zap, Briefcase, Code2, Cpu, LayoutDashboard, Sparkles } from 'lucide-react';

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.5,
      ease: "easeOut"
    } 
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: 'easeOut' 
    }
  }
};

// Animation container for staggered children (unused but kept for reference)
// const staggerContainer = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1,
//       delayChildren: 0.2,
//     },
//   },
// };

const cardHover = {
  scale: 1.02,
  boxShadow: '0 10px 25px -5px rgba(168, 85, 247, 0.2), 0 10px 10px -5px rgba(168, 85, 247, 0.1)',
  transition: {
    type: 'spring',
    stiffness: 300,
    damping: 15
  }
};

const AboutSection = () => {
  const stats = [
    { icon: Code, value: '4.8B+', label: 'Lines of Code Written' },
    { icon: Trophy, value: '30+', label: 'Projects Completed' },
    { icon: Zap, value: '6+', label: 'Years Experience' },
    { icon: Briefcase, value: '20+', label: 'Technologies Used' }
  ];

  const techStack = [
    { icon: Code2, name: 'React.js / Next.js' },
    { icon: Cpu, name: 'TypeScript / JavaScript' },
    { icon: LayoutDashboard, name: 'Tailwind / SCSS / Bootstrap' },
    { icon: Sparkles, name: 'WordPress / Elementor' }
  ];

  return (
    <section id="about" className="relative z-10 py-24 px-6 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <motion.span 
            className="inline-block px-4 py-1 text-sm font-medium text-purple-400 bg-purple-900/30 rounded-full mb-4"
            variants={fadeInUp}
          >
            PROFESSIONAL OVERVIEW
          </motion.span>
          <motion.h2 
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            variants={fadeInUp}
          >
            Crafting Digital <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Experiences</span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"
            variants={{
              hidden: { scaleX: 0 },
              visible: { 
                scaleX: 1,
                transition: { 
                  delay: 0.3, 
                  duration: 0.8, 
                  type: 'spring' 
                } 
              }
            }}
          />
        </motion.div>
        
        <motion.div 
          className="grid lg:grid-cols-3 gap-12 items-start"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
        >
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
              <div className="relative">
                <motion.p 
                  className="text-xl text-gray-300 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      duration: 0.6,
                      ease: 'easeOut'
                    }
                  }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  I'm a <span className="text-white font-semibold">Senior Frontend Developer</span> with 6+ years of experience 
                  building scalable, responsive, and high-performance web applications. I specialize in 
                  React.js, Next.js, TypeScript, and WordPress development.
                </motion.p>
              </div>
              
              <div className="relative mt-6">
                <motion.p 
                  className="text-xl text-gray-300 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      duration: 0.6,
                      ease: 'easeOut',
                      delay: 0.2
                    }
                  }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  Currently working as Senior Frontend Developer at <span className="text-white font-medium">NexG</span> (Gurugram), I focus on 
                  architecting scalable applications, building reusable component libraries, and delivering 
                  pixel-perfect UIs with clean, maintainable code.
                </motion.p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6 pt-4">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-purple-500/30"
                  variants={item}
                  whileHover={cardHover}
                >
                  <stat.icon className="w-8 h-8 text-purple-400 mb-3" />
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                  <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div 
            className="relative group"
            variants={item}
          >
            <motion.div 
              className="relative z-10 p-1 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl overflow-hidden h-full"
              whileHover={{
                boxShadow: '0 20px 40px -10px rgba(168, 85, 247, 0.4)',
                transition: { duration: 0.5 }
              }}
            >
              <div className="bg-gray-900 p-8 rounded-xl h-full">
                <motion.h3 
                  className="text-2xl font-bold text-white mb-6 flex items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      duration: 0.6,
                      ease: 'easeOut',
                      delay: 0.3
                    }
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <span className="w-2 h-6 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full mr-3"></span>
                  Technical Expertise
                </motion.h3>
                
                <div className="space-y-5">
                  {techStack.map((tech, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-center p-3 bg-gray-800/50 rounded-lg group-hover:bg-gray-800/80"
                      variants={item}
                      whileHover={{ 
                        x: 5,
                        backgroundColor: 'rgba(31, 41, 55, 0.9)',
                        transition: { duration: 0.2 }
                      }}
                    >
                      <motion.div 
                        className="p-2 bg-gray-700 rounded-lg mr-4"
                        whileHover={{ rotate: 10, scale: 1.05 }}
                      >
                        <tech.icon className="w-5 h-5 text-purple-400" />
                      </motion.div>
                      <span className="text-gray-200 font-medium">{tech.name}</span>
                      <div className="ml-auto w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div 
                  className="mt-8 pt-6 border-t border-gray-800"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      duration: 0.6,
                      ease: 'easeOut',
                      delay: 0.6
                    }
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>Available for new opportunities</span>
                    <div className="flex items-center">
                      <span className="relative flex h-2 w-2 mr-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
                      </span>
                      <span className="text-green-400 font-medium">Open to Work</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500 group-hover:duration-200 -z-10"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;