import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { 
  Trophy, 
  Users, 
  Code, 
  Calendar,
  Building,
  Star,
  TrendingUp
} from 'lucide-react';

const experienceData = [
  {
    id: 1,
    role: 'Senior Frontend Developer',
    company: 'NexG',
    duration: '2020 - Present',
    location: 'Gurugram, Haryana, India',
    type: 'Full-time',
    achievements: [
      'Developed scalable React & Next.js applications for SaaS products',
      'Built reusable UI component libraries used across multiple projects',
      'Integrated REST APIs and implemented authentication systems',
      'Developed HRMS, CRM, Payroll, and Billing software dashboards',
      'Improved application performance through code splitting & lazy loading',
      'Leveraged AI tools (Copilot, GPT-4, Cursor) to accelerate development',
      'Built WordPress sites with Elementor for clients'
    ],
    skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'WordPress', 'REST APIs'],
    icon: <Code className="w-5 h-5" />,
    color: 'from-blue-500 to-cyan-400',
    bgColor: 'from-blue-500/10 to-cyan-400/10',
    borderColor: 'border-blue-500/30',
  },
  {
    id: 2,
    role: 'Frontend Developer',
    company: 'synergytechs.net',
    duration: 'May 2020 - Jun 2021 · 1 yr 2 mos',
    location: 'Gurugram, Haryana, India · Remote',
    type: 'Part-time',
    achievements: [
      'Developed dynamic, responsive, and user-friendly interfaces using React.js, Next.js, and TypeScript',
      'Designed and implemented scalable frontend architectures following best practices',
      'Ensured seamless cross-browser and cross-device performance through thorough debugging and optimization',
      'Collaborated with product, design, and backend teams to consistently meet deadlines',
      'Improved project delivery by following Agile methodologies and maintaining clean, modular code'
    ],
    skills: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'CSS', 'Agile'],
    icon: <Code className="w-5 h-5" />,
    color: 'from-emerald-500 to-teal-400',
    bgColor: 'from-emerald-500/10 to-teal-400/10',
    borderColor: 'border-emerald-500/30',
  },
];

const stats = [
  { value: '6+', label: 'Years Experience', icon: Calendar, color: 'text-blue-400' },
  { value: '30+', label: 'Projects Delivered', icon: Trophy, color: 'text-purple-400' },
  { value: '20+', label: 'Technologies', icon: Users, color: 'text-pink-400' },
  { value: '10+', label: 'Happy Clients', icon: Star, color: 'text-yellow-400' },
];

const ModernExperienceSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Uncomment when needed
  // const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  // const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 1, 0.2]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeCard, setActiveCard] = useState(0);
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const scaleProgress = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
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

  return (
    <section 
      ref={containerRef}
      id="experience"
      className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-gray-900 to-black overflow-hidden"
    >
      {/* Animated Background Elements */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 opacity-30"
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
      </motion.div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.05\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'1\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
      }} />

      <motion.div 
        className="relative max-w-7xl mx-auto"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Header Section */}
        <motion.div 
          variants={fadeInUp}
          className="text-center mb-20"
        >
          <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <motion.span className="inline-block px-4 py-1 text-sm font-medium text-purple-400 bg-purple-900/30 rounded-full mb-4"
            variants={fadeInUp}
          >
            Professional Journey
          </motion.span>
          
          <motion.h2 className="text-5xl md:text-7xl font-bold mb-6"
            variants={fadeInUp}
          >
            <motion.span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-purple-300"
              variants={fadeInUp}
            >
              Experience
            </motion.span>
            <br />
            <motion.span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
              variants={fadeInUp}
            >
              That Delivers
            </motion.span>
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
          
          <motion.p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mt-8"
            variants={fadeInUp}
          >
            Transforming ideas into impactful solutions through strategic development 
            and innovative problem-solving
          </motion.p>
          </motion.div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div 
          style={{ scale: scaleProgress }}
          className="relative mb-24"
          variants={containerVariants}
        >
          <div className="grid gap-8 lg:gap-12">
            {experienceData.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                custom={index}
                onHoverStart={() => setActiveCard(index)}
                className="relative"
              >
                <div className="relative flex flex-col lg:flex-row gap-8 lg:gap-12">
                  {/* Timeline Connector - Left Side */}
                  <div className="hidden lg:flex flex-col items-center w-24 flex-shrink-0">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${exp.color} flex items-center justify-center shadow-lg z-10`}
                    >
                      <div className="text-white">
                        {exp.icon}
                      </div>
                    </motion.div>
                    {index < experienceData.length - 0 && (
                      <div className="w-1 h-24 mt-4 bg-gradient-to-b from-gray-600/50 to-transparent" />
                    )}
                  </div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ y: -3 }}
                    className="relative group w-full"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${exp.bgColor} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    <div className="relative p-8 bg-gray-900/60 backdrop-blur-xl rounded-3xl border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300">
                      {/* Company Badge */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                        <div className="flex items-center gap-4">
                          <div className={`p-2.5 rounded-xl bg-gradient-to-br ${exp.color} shadow-md`}>
                            <Building className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                            <p className={`text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r ${exp.color}`}>
                              {exp.company}
                            </p>
                          </div>
                        </div>
                        <div className="sm:text-right">
                          <p className="text-sm font-medium text-gray-300">{exp.duration}</p>
                          <p className="text-xs text-gray-400">{exp.location}</p>
                          <span className="inline-block mt-1 px-2 py-0.5 text-xs rounded-full bg-gray-800/50 text-gray-300">
                            {exp.type}
                          </span>
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-green-400" />
                          Key Impact & Achievements
                        </h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {exp.achievements.map((achievement, i) => (
                            <motion.div
                              key={i}
                              variants={itemVariants}
                              custom={i}
                              transition={{ 
                                type: 'spring',
                                stiffness: 100
                              }}
                              className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/40 hover:bg-gray-800/60 transition-all duration-300 border border-gray-800/50 hover:border-gray-700/50"
                            >
                              <div className={`w-2 h-2 mt-1.5 rounded-full bg-gradient-to-r ${exp.color} flex-shrink-0`} />
                              <p className="text-gray-200 text-sm leading-relaxed">{achievement}</p>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Skills Tags */}
                      <div className="mt-6 pt-5 border-t border-gray-800/50">
                        <h4 className="text-sm font-medium text-gray-400 mb-3 flex items-center gap-2">
                          <span>Technologies Used</span>
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, i) => (
                            <motion.span
                              key={i}
                              variants={itemVariants}
                              custom={i}
                              transition={{ 
                                type: 'spring',
                                stiffness: 100
                              }}
                              className={`px-3 py-1.5 text-xs font-medium rounded-full bg-gray-800/60 border ${exp.borderColor} hover:bg-gray-800/80 transition-all duration-300`}
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={fadeInUp}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative p-6 bg-gray-900/60 backdrop-blur-xl rounded-2xl border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300 text-center">
                <div className="mb-4">
                  <stat.icon className={`w-8 h-8 mx-auto ${stat.color}`} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={fadeInUp}
          transition={{ delay: 0.4 }}
          className="text-center mt-20"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <span>Let's Discuss Your Next Project</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.div>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ModernExperienceSection;