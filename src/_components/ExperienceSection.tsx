import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Trophy,
  Users,
  Code,
  Calendar,
  Building,
  Star,
  TrendingUp,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Briefcase,
} from 'lucide-react';
import SectionHeading from './SectionHeading';
import CountUp from './CountUp';
import Magnet from './Magnet';

const experienceData = [
  {
    id: 1,
    role: 'Senior Frontend Developer',
    company: 'NexG',
    years: '2020 — PRESENT',
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
      'Built WordPress sites with Elementor for clients',
    ],
    skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'WordPress', 'REST APIs'],
    color: 'from-blue-500 to-cyan-400',
    bgColor: 'from-blue-500/10 to-cyan-400/10',
    borderColor: 'border-blue-500/30',
    accent: 'text-blue-400',
    glow: 'rgba(59, 130, 246, 0.35)',
  },
  {
    id: 2,
    role: 'Frontend Developer',
    company: 'synergytechs.net',
    years: '2020 — 2021',
    duration: 'May 2020 - Jun 2021 · 1 yr 2 mos',
    location: 'Gurugram, Haryana, India · Remote',
    type: 'Part-time',
    achievements: [
      'Developed dynamic, responsive, and user-friendly interfaces using React.js, Next.js, and TypeScript',
      'Designed and implemented scalable frontend architectures following best practices',
      'Ensured seamless cross-browser and cross-device performance through thorough debugging and optimization',
      'Collaborated with product, design, and backend teams to consistently meet deadlines',
      'Improved project delivery by following Agile methodologies and maintaining clean, modular code',
    ],
    skills: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'CSS', 'Agile'],
    color: 'from-emerald-500 to-teal-400',
    bgColor: 'from-emerald-500/10 to-teal-400/10',
    borderColor: 'border-emerald-500/30',
    accent: 'text-emerald-400',
    glow: 'rgba(16, 185, 129, 0.35)',
  },
];

const stats = [
  { value: 6, suffix: '+', label: 'Years Experience', icon: Calendar, color: 'text-blue-400' },
  { value: 30, suffix: '+', label: 'Projects Delivered', icon: Trophy, color: 'text-purple-400' },
  { value: 20, suffix: '+', label: 'Technologies', icon: Users, color: 'text-pink-400' },
  { value: 10, suffix: '+', label: 'Happy Clients', icon: Star, color: 'text-yellow-400' },
];

interface ExperienceCardProps {
  exp: typeof experienceData[0];
  index: number;
  isLast: boolean;
}

/**
 * Single experience card with scroll-driven 3D entrance, ghost year,
 * cursor spotlight and glowing hover state.
 */
const ExperienceCard = ({ exp, index, isLast }: ExperienceCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.35], [22, 0]);
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [index % 2 === 0 ? -10 : 10, 0, index % 2 === 0 ? 10 : -10]);
  const scale = useTransform(scrollYProgress, [0, 0.35], [0.9, 1]);
  const cardOpacity = useTransform(scrollYProgress, [0, 0.3], [0.3, 1]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--spot-x', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--spot-y', `${e.clientY - rect.top}px`);
  };

  return (
    <motion.div
      ref={ref}
      style={{
        rotateX,
        rotateY,
        scale,
        opacity: cardOpacity,
        transformPerspective: 1200,
      }}
      className="relative"
    >
      <div className="relative flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Timeline Connector - Left Side */}
        <div className="hidden lg:flex flex-col items-center w-24 flex-shrink-0">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${exp.color} flex items-center justify-center shadow-lg shadow-black/40 z-10 relative`}
          >
            <span className="text-white text-2xl font-extrabold">
              {exp.company.charAt(0).toUpperCase()}
            </span>
            {/* Pulsing halo */}
            <span className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${exp.color} animate-ping opacity-20`} />
          </motion.div>
          {!isLast && <div className="w-1 h-full min-h-[3rem] flex-1 mt-4 bg-gradient-to-b from-gray-600/40 to-gray-700/20" />}
        </div>

        {/* Content Card */}
        <motion.div
          onMouseMove={handleMouseMove}
          whileHover={{ y: -4 }}
          className="relative group w-full"
        >
          {/* Ghost year number */}
          <div className="pointer-events-none absolute -top-10 right-0 select-none z-0">
            <span className="text-7xl xl:text-8xl font-extrabold tracking-tighter text-white/[0.05] group-hover:text-white/[0.09] transition-colors duration-500">
              {exp.years}
            </span>
          </div>

          {/* Hover glow */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${exp.bgColor} rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
          />

          <div className="relative p-8 bg-gray-900/70 backdrop-blur-xl rounded-3xl border border-white/10 group-hover:border-white/20 transition-all duration-500 overflow-hidden">
            {/* Cursor spotlight */}
            <div
              className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: `radial-gradient(420px circle at var(--spot-x, 50%) var(--spot-y, 50%), ${exp.glow}, transparent 65%)`,
              }}
            />
            {/* Top accent */}
            <div className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent`} />

            <div className="relative z-10">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-br ${exp.color} shadow-md shadow-black/40`}>
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
                  <p className="text-xs text-gray-500">{exp.location}</p>
                  <span className="inline-block mt-1 px-2 py-0.5 text-xs rounded-full bg-white/5 border border-white/10 text-gray-300">
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
                <ul className="grid md:grid-cols-2 gap-3">
                  {exp.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ delay: i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] transition-colors duration-300 border border-white/5 hover:border-white/10 group/li"
                    >
                      <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${exp.accent}`} />
                      <p className="text-gray-200 text-sm leading-relaxed">{achievement}</p>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Skills Tags */}
              <div className="mt-6 pt-5 border-t border-white/5">
                <h4 className="text-sm font-medium text-gray-400 mb-3 flex items-center gap-2">
                  <Code className="w-3.5 h-3.5" />
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}
                      className={`px-3 py-1.5 text-xs font-medium rounded-full bg-white/[0.05] border ${exp.borderColor} hover:bg-white/10 transition-all duration-300 cursor-default`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const ModernExperienceSection = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 0.75', 'end 0.4'],
  });

  return (
    <section
      ref={timelineRef}
      id="experience"
      className="relative py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-gray-900 to-black overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/15 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500/15 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.06\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'1\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <SectionHeading
          badge="Professional Journey"
          title={
            <>
              Experience<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">That Delivers</span>
            </>
          }
          subtitle="Transforming ideas into impactful solutions through strategic development and innovative problem-solving"
          titleClassName="text-5xl md:text-7xl"
        />

        {/* Timeline */}
        <div className="relative">
          {/* Global scroll-progress timeline line (desktop) */}
          <div className="pointer-events-none absolute left-12 top-4 bottom-4 w-px hidden lg:block" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-800" />
            <motion.div
              style={{ scaleY: scrollYProgress }}
              className="absolute inset-0 origin-top bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 shadow-[0_0_12px_rgba(168,85,247,0.8)]"
            />
          </div>

          <div className="space-y-16 lg:space-y-8">
            {experienceData.map((exp, index) => (
              <ExperienceCard key={exp.id} exp={exp} index={index} isLast={index === experienceData.length - 1} />
            ))}

            {/* Open position card — 3rd timeline node */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                <div className="hidden lg:flex flex-col items-center w-24 flex-shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/30 z-10 relative"
                  >
                    <Sparkles className="w-7 h-7 text-white" />
                    <span className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 animate-ping opacity-20" />
                  </motion.div>
                  <div className="w-1 flex-1 mt-4 bg-gradient-to-b from-purple-500/40 to-transparent" />
                </div>

                <div className="relative group w-full">
                  <div className="relative p-8 rounded-3xl border-2 border-dashed border-purple-500/30 bg-purple-500/[0.03] backdrop-blur-sm hover:border-purple-500/50 transition-colors duration-500 overflow-hidden">
                    <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: 'radial-gradient(400px circle at 50% 50%, rgba(168,85,247,0.12), transparent 65%)' }}
                    />
                    <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30">
                          <Briefcase className="w-6 h-6 text-purple-300" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">Your Company Could Be Next</h3>
                          <p className="text-gray-400 mt-1">
                            Open to Senior Frontend Developer opportunities — remote or Gurugram.
                          </p>
                        </div>
                      </div>
                      <Magnet strength={5} className="self-start md:self-auto">
                        <motion.a
                          href="#contact"
                          whileHover={{ scale: 1.04 }}
                          whileTap={{ scale: 0.96 }}
                          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
                        >
                          Let's Talk
                          <ArrowRight className="w-4 h-4" />
                        </motion.a>
                      </Magnet>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.92 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
              }}
              whileHover={{ scale: 1.04, y: -4 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 to-purple-500/15 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative p-6 bg-gray-900/60 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 text-center overflow-hidden">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                <div className="mb-4">
                  <stat.icon className={`w-8 h-8 mx-auto ${stat.color}`} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-1">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </h3>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-20"
        >
          <Magnet strength={5}>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300"
            >
              <span>Let's Discuss Your Next Project</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.div>
            </motion.a>
          </Magnet>
        </motion.div>
      </div>
    </section>
  );
};

export default ModernExperienceSection;
