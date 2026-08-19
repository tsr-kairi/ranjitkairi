import React from 'react';
import { motion } from 'framer-motion';
import { Code, Trophy, Zap, Briefcase, Code2, Cpu, LayoutDashboard, Sparkles, Bot, Quote } from 'lucide-react';
import AnimatedText from './AnimatedText';
import SectionHeading from './SectionHeading';
import SectionAmbience from './SectionAmbience';
import CountUp from './CountUp';

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
  hidden: { opacity: 0, y: 40, rotateX: 15, transformPerspective: 1200 },
  show: { 
    opacity: 1, 
    y: 0, 
    rotateX: 0,
    transformPerspective: 1200,
    transition: { 
      duration: 0.5,
      ease: "easeOut"
    } 
  },
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
    { icon: Code, value: 4.8, suffix: 'B+', decimals: 1, label: 'Lines of Code Written' },
    { icon: Trophy, value: 30, suffix: '+', decimals: 0, label: 'Projects Completed' },
    { icon: Zap, value: 6, suffix: '+', decimals: 0, label: 'Years Experience' },
    { icon: Briefcase, value: 20, suffix: '+', decimals: 0, label: 'Technologies Used' }
  ];

  const techStack = [
    { icon: Code2, name: 'React.js / Next.js' },
    { icon: Cpu, name: 'TypeScript / JavaScript' },
    { icon: LayoutDashboard, name: 'Tailwind / SCSS / Bootstrap' },
    { icon: Sparkles, name: 'WordPress / Elementor' },
    { icon: Bot, name: 'AI Tools (GPT-4, Copilot, Cursor)' }
  ];

  return (
    <section id="about" className="relative z-10 py-24 px-6 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
      <SectionAmbience variant="purple" />
      <div className="relative max-w-7xl mx-auto">
        <SectionHeading
          badge="PROFESSIONAL OVERVIEW"
          title={<>Crafting Digital <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Experiences</span></>}
        />
        
        <motion.div 
          className="grid lg:grid-cols-3 gap-12 items-start"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
        >
          <div className="lg:col-span-2 space-y-8">
            <div className="relative p-6 md:p-8 rounded-2xl bg-gray-800/40 backdrop-blur-sm border border-white/5 overflow-hidden group/statement">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-pink-500" />
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-purple-500/10 blur-3xl opacity-0 group-hover/statement:opacity-100 transition-opacity duration-500" />
              <Quote className="w-9 h-9 text-purple-400/50 mb-5" />
              <div className="space-y-6">
                <AnimatedText
                  text="I'm a Senior Frontend Developer with 6+ years of experience building scalable, responsive, and high-performance web applications. I specialize in React.js, Next.js, TypeScript, WordPress, and AI-assisted development."
                  className="text-xl text-gray-300 leading-relaxed"
                  highlightWords={['Senior', 'Frontend', 'Developer']}
                  highlightClassName="text-white font-semibold"
                />
                
                <AnimatedText
                  text="Currently working as Senior Frontend Developer at NexG (Gurugram), I focus on architecting scalable applications, building reusable component libraries, and leveraging AI tools like GitHub Copilot, GPT-4, and Cursor to ship faster with cleaner code."
                  className="text-xl text-gray-300 leading-relaxed"
                  highlightWords={['NexG']}
                  highlightClassName="text-white font-medium"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6 pt-4">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="group/stat relative overflow-hidden bg-gray-800/40 backdrop-blur-sm p-6 rounded-xl border border-white/5 hover:border-purple-500/40"
                  variants={item}
                  whileHover={cardHover}
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/70 to-transparent" />
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/20 group-hover/stat:scale-110 transition-transform duration-300">
                      <stat.icon className="w-5 h-5 text-purple-400" />
                    </div>
                    <span className="text-xs font-mono text-gray-500">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <p className="text-3xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                    <CountUp end={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
                  </p>
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
                  initial={{ opacity: 0, y: 40, rotateX: 12, transformPerspective: 1200 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0,
                    rotateX: 0,
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
                  initial={{ opacity: 0, y: 40, rotateX: 12, transformPerspective: 1200 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0,
                    rotateX: 0,
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