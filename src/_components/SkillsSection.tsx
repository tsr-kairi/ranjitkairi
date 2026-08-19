import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Cpu, Palette, Sparkles, LayoutGrid, Users, Lightbulb, GitBranch, Smartphone, Server, Globe } from 'lucide-react';
import SkillBar from './SkillBar';
import SectionHeading from './SectionHeading';
import SectionAmbience from './SectionAmbience';

type SkillCategory = 'frontend' | 'backend' | 'cms' | 'ai' | 'tools';

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('frontend');
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [sectionRef]);

  const technicalSkills = {
    frontend: [
      { name: 'React.js', level: 95, color: 'from-blue-400 to-cyan-400' },
      { name: 'Next.js', level: 92, color: 'from-gray-200 to-gray-400' },
      { name: 'TypeScript', level: 90, color: 'from-blue-600 to-blue-400' },
      { name: 'JavaScript (ES6+)', level: 94, color: 'from-yellow-400 to-orange-400' },
      { name: 'Tailwind CSS', level: 93, color: 'from-cyan-400 to-blue-500' },
    ],
    backend: [
      { name: 'Node.js', level: 75, color: 'from-green-500 to-emerald-400' },
      { name: 'Express.js', level: 72, color: 'from-gray-300 to-gray-500' },
      { name: 'MongoDB', level: 70, color: 'from-green-600 to-green-400' },
      { name: 'Supabase', level: 68, color: 'from-emerald-400 to-teal-500' },
      { name: 'REST API Integration', level: 90, color: 'from-indigo-400 to-purple-500' },
    ],
    cms: [
      { name: 'WordPress', level: 88, color: 'from-blue-500 to-blue-700' },
      { name: 'Elementor', level: 85, color: 'from-pink-400 to-rose-500' },
      { name: 'SCSS / CSS3', level: 90, color: 'from-pink-500 to-purple-500' },
      { name: 'Bootstrap', level: 85, color: 'from-purple-500 to-indigo-500' },
      { name: 'HTML5', level: 96, color: 'from-orange-400 to-red-500' },
    ],
    ai: [
      { name: 'ChatGPT / GPT-4', level: 92, color: 'from-green-400 to-emerald-500' },
      { name: 'Claude (Anthropic)', level: 88, color: 'from-orange-400 to-amber-500' },
      { name: 'GitHub Copilot', level: 90, color: 'from-purple-400 to-violet-500' },
      { name: 'Cursor AI', level: 88, color: 'from-blue-400 to-cyan-500' },
      { name: 'Prompt Engineering', level: 85, color: 'from-pink-400 to-rose-500' },
      { name: 'AI-Assisted Development', level: 90, color: 'from-indigo-400 to-purple-500' },
      { name: 'v0 by Vercel', level: 82, color: 'from-gray-300 to-gray-500' },
      { name: 'Lovable / Bolt.new', level: 80, color: 'from-yellow-400 to-orange-400' },
    ],
    tools: [
      { name: 'Git / GitHub', level: 90, color: 'from-orange-500 to-red-500' },
      { name: 'Vercel / Netlify', level: 85, color: 'from-blue-400 to-cyan-500' },
      { name: 'React Query', level: 85, color: 'from-red-400 to-pink-500' },
      { name: 'Context API', level: 88, color: 'from-purple-400 to-pink-500' },
      { name: 'Mantine / MUI / Shadcn', level: 87, color: 'from-green-500 to-emerald-500' },
    ]
  };

  const softSkills = [
    { name: 'Team Leadership', icon: Users, color: 'text-purple-400' },
    { name: 'Problem Solving', icon: Lightbulb, color: 'text-yellow-400' },
    { name: 'UI/UX Design', icon: Palette, color: 'text-pink-400' },
    { name: 'Agile Development', icon: GitBranch, color: 'text-blue-400' },
    { name: 'Mentoring', icon: Sparkles, color: 'text-cyan-400' },
    { name: 'Project Planning', icon: LayoutGrid, color: 'text-green-400' },
  ];

  const categories: { id: SkillCategory; icon: React.ElementType; label: string }[] = [
    { id: 'frontend', icon: Smartphone, label: 'Frontend' },
    { id: 'backend', icon: Server, label: 'Backend' },
    { id: 'cms', icon: Globe, label: 'CMS & Styling' },
    { id: 'ai', icon: Cpu, label: 'AI Tools' },
    { id: 'tools', icon: Code, label: 'Tools' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0, rotateX: 12, transformPerspective: 1200 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transformPerspective: 1200,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <motion.section 
      ref={sectionRef}
      id="skills" 
      className="relative z-10 py-24 px-6 bg-gradient-to-b from-gray-900 to-gray-800"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <SectionAmbience variant="cyan" />
      <div className="relative max-w-7xl mx-auto">
        <SectionHeading
          badge="TECHNICAL MASTERY"
          title={<>My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Expertise</span></>}
          subtitle="A blend of technical prowess and creative problem-solving to deliver exceptional digital experiences"
        />
        
        <motion.div 
          className="grid lg:grid-cols-3 gap-12 items-start"
          variants={itemVariants}
        >
          <div className="lg:col-span-2 group relative overflow-hidden bg-gray-800/40 backdrop-blur-xl rounded-2xl p-8 border border-white/5 hover:border-purple-500/30 transition-colors duration-300">
            <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-purple-500/25 via-transparent to-pink-500/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map(({ id, icon: Icon, label }, index) => (
                <motion.div
                  key={id}
                  variants={itemVariants}
                  custom={index}
                >
                  <button
                    onClick={() => setActiveCategory(id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-2 transition-all duration-300 ${
                      activeCategory === id
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/20'
                        : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{label}</span>
                  </button>
                </motion.div>
              ))}
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeCategory}
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {technicalSkills[activeCategory].map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="group relative overflow-hidden bg-gray-800/40 backdrop-blur-xl rounded-2xl p-8 border border-white/5 hover:border-purple-500/30 transition-colors duration-300 h-full">
            <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-cyan-500/20 via-transparent to-purple-500/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent" />
            <div className="flex items-center space-x-3 mb-8">
              <Users className="w-6 h-6 text-purple-400" />
              <h3 className="text-2xl font-bold text-white">Soft Skills</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map(({ name, icon: Icon, color }, index) => (
                <motion.div 
                  key={name}
                  className="group relative p-4 bg-gray-700/30 rounded-xl border border-gray-600/30 hover:border-purple-500/50 transition-all duration-300 hover:scale-[1.02] overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className={`w-12 h-12 rounded-full bg-gray-700/50 flex items-center justify-center mb-3 group-hover:bg-gradient-to-br from-purple-500/20 to-pink-500/20 transition-all duration-300 ${color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-gray-200 font-medium text-sm">{name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="mt-8 pt-6 border-t border-gray-700/50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">Languages</h4>
              <div className="flex flex-wrap gap-3">
                {['English (Native)', 'Hindi (Fluent)', 'Bengali (Fluent)'].map((lang, index) => (
                  <motion.span 
                    key={lang} 
                    className="px-3 py-1.5 text-sm bg-gray-700/50 text-gray-200 rounded-full border border-gray-600/50"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + (index * 0.1) }}
                  >
                    {lang}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SkillsSection;
