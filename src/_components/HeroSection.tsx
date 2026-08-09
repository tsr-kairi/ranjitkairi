import React from 'react';
import { Github, Linkedin, Mail, ArrowRight, Code, Cpu, Layout, Users, Code2, Sparkles } from 'lucide-react';
import Typewriter from 'typewriter-effect';

import myImg from '../assets/profile.png';

interface HeroSectionProps {
    isLoaded: boolean;
}

const HeroSection = ({ isLoaded }: HeroSectionProps) => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/tsr-kairi', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/ranjitkairi/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:ranjitkairi.dev@gmail.com', label: 'Email' }
  ];

  const stats = [
    { value: '6+', label: 'Years Experience' },
    { value: '30+', label: 'Projects Completed' },
    { value: '20+', label: 'Technologies' },
    { value: '10+', label: 'Happy Clients' }
  ];

  const expertise = [
    { icon: Code, title: 'React & Next.js', description: 'Scalable frontend apps' },
    { icon: Cpu, title: 'AI-Powered Dev', description: 'Copilot, GPT-4, Cursor' },
    { icon: Layout, title: 'UI Engineering', description: 'Pixel-perfect interfaces' },
    { icon: Users, title: 'WordPress', description: 'Elementor & custom themes' }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 md:pb-0 pb-24">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute -top-1/2 -left-1/4 w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-full h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className={`relative z-10 container mx-auto px-6 py-16 md:py-24 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-16 md:mt-0">
          {/* Left Column - Content */}
          <div className="text-center md:text-left">
            <div className="inline-block px-4 py-2 mb-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30">
              <span className="flex items-center text-sm font-medium text-purple-300">
                <Sparkles className="w-4 h-4 mr-2" />
                Available for new opportunities
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Ranjit Kairi
              </span>
              <br />
              <Typewriter
                options={{
                  strings: ['Senior Frontend Developer', 'React.js Expert', 'Next.js Developer', 'WordPress Developer', 'AI-Powered Developer'],

                  autoStart: true,
                  loop: true,
                  delay: 100,
                  deleteSpeed: 50,
                  cursor: '|',
                  wrapperClassName: 'text-2xl md:text-3xl lg:text-4xl font-normal text-gray-300 mt-4',
                  cursorClassName: 'text-purple-400'
                }}
              />
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              I craft exceptional digital experiences using modern technologies.
              With 6+ years at NexG, I specialize in building scalable React & Next.js
              applications, WordPress sites, and AI-assisted development workflows.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="mailto:ranjitkairi.dev@gmail.com"
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold text-lg overflow-hidden hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 flex items-center justify-center"
              >
                <span className="relative z-10 flex items-center">
                  Hire Me
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>

              <a
                href="resume.pdf"
                download
                className="px-8 py-4 border-2 border-purple-500/30 rounded-lg font-semibold text-lg hover:bg-purple-500/10 transition-colors duration-300 flex items-center justify-center gap-2 group"
              >
                <Code2 className="w-5 h-5 group-hover:animate-pulse" />
                Download Resume
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-gray-700/50 hover:border-purple-500/30 transition-colors">
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Profile & Skills */}
          <div className="relative">
            {/* Profile Image */}
            <div className="relative mx-auto lg:mx-0 w-72 h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl transform rotate-6 scale-95 opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-blue-500 rounded-2xl transform -rotate-6 scale-95 opacity-20"></div>
              <div className="relative w-full h-full bg-gray-900 rounded-2xl overflow-hidden border-2 border-purple-500/20">
                <img 
                  src={myImg} 
                  alt="Ranjit Kairi" 
                  className="w-full h-full object-cover object-top"
                />
                {/* Status indicator */}
                <div className="absolute bottom-4 right-4 flex items-center">
                  <span className="relative flex h-3 w-3 mr-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
                  </span>
                  <span className="text-xs font-medium text-white bg-gray-900/80 px-2 py-1 rounded-full">Open to Work</span>
                </div>
              </div>
            </div>

            {/* Expertise Cards */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {expertise.map((item, index) => (
                <div 
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-gray-700/50 hover:border-purple-500/30 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/10"
                >
                  <item.icon className="w-6 h-6 text-purple-400 mb-2" />
                  <h4 className="font-semibold text-white">{item.title}</h4>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>


        {/* Social Links */}
        <div className="flex justify-center lg:justify-start gap-6 mt-16">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-full border border-gray-700 hover:border-purple-500/50 hover:bg-gradient-to-r from-purple-500/10 to-pink-500/10 transition-all"
              aria-label={link.label}
            >
              <link.icon className="w-5 h-5 text-gray-400 group-hover:text-purple-300 transition-colors" />
            </a>
          ))}
        </div>
      </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-purple-500/50 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-purple-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;