import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Send, MapPin, FileText, ChevronRight } from 'lucide-react';
import Magnet from './Magnet';
import SectionHeading from './SectionHeading';
import SectionAmbience from './SectionAmbience';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface FormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

const formSchema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email address').required('Email is required'),
  company: yup.string(),
  message: yup.string().min(10, 'Message must be at least 10 characters').required('Message is required'),
}).required();

// ContactForm component that uses useFormContext
const ContactForm = ({ onSubmit, isSending }: { onSubmit: (data: FormData) => void, isSending: boolean }) => {
  const { register, formState: { errors } } = useFormContext<FormData>();
  
  return (
    <motion.form 
      key="form"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData) as unknown as FormData;
        onSubmit(data);
      }}
      className="space-y-5"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          type="text"
          {...register('name')}
          className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700/50 border ${
            errors.name ? 'border-red-300 dark:border-red-500/50' : 'border-gray-200 dark:border-gray-600/50'
          } rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all`}
          placeholder="John Doe"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
          Work Email <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          type="email"
          {...register('email')}
          className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700/50 border ${
            errors.email ? 'border-red-300 dark:border-red-500/50' : 'border-gray-200 dark:border-gray-600/50'
          } rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all`}
          placeholder="john@company.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>
      
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
          Company
        </label>
        <input
          id="company"
          type="text"
          {...register('company')}
          className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600/50 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
          placeholder="Company Name (Optional)"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
          How Can I Help? <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          rows={4}
          {...register('message')}
          className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700/50 border ${
            errors.message ? 'border-red-300 dark:border-red-500/50' : 'border-gray-200 dark:border-gray-600/50'
          } rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all`}
          placeholder="Tell me about your project and how I can assist..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>
      
      <motion.button
        type="submit"
        disabled={isSending}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`w-full flex items-center justify-center px-6 py-3.5 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium rounded-xl hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${
          isSending ? 'opacity-80 cursor-not-allowed' : ''
        }`}
      >
        {isSending ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </>
        ) : (
          <>
            <Send className="w-4 h-4 mr-2" />
            Send Message
          </>
        )}
      </motion.button>
      
      <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-4">
        I'll get back to you within 24 hours. Your information is secure and will never be shared.
      </p>
    </motion.form>
  );
};





const ContactSection = () => {
    const [isSending, setIsSending] = useState(false);
  const controls = useAnimation();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  // Form setup
  const methods = useForm<yup.InferType<typeof formSchema>>({
    resolver: yupResolver(formSchema) as any,
    defaultValues: {
      name: '',
      email: '',
      company: '',
      message: ''
    }
  });
  
  const { reset } = methods;

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  // Container animation
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // Item animation
  const item = {
    hidden: { y: 40, opacity: 0, rotateX: 12, transformPerspective: 1200 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transformPerspective: 1200,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
    hover: {
      y: -5,
      transition: { duration: 0.2 },
    }
  };

  const contactMethods = [
    {
      id: 'email',
      icon: Mail,
      title: 'Email',
      value: 'ranjitkairi.dev@gmail.com',
      link: 'mailto:ranjitkairi.dev@gmail.com',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-gradient-to-br from-purple-500/10 to-pink-500/10',
    },
    {
      id: 'phone',
      icon: Phone,
      title: 'Phone',
      value: '+91 9127301592',
      link: 'tel:+919127301592',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-gradient-to-br from-blue-500/10 to-cyan-500/10',
    },
    {
      id: 'location',
      icon: MapPin,
      title: 'Location',
      value: 'Gurugram, Haryana, India',
      link: 'https://maps.google.com/maps?q=Gurugram',
      color: 'from-rose-500 to-pink-500',
      bgColor: 'bg-gradient-to-br from-rose-500/10 to-pink-500/10',
    },
    {
      id: 'linkedin',
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'linkedin.com/in/ranjitkairi',
      link: 'https://linkedin.com/in/ranjitkairi/',
      color: 'from-blue-600 to-blue-400',
      bgColor: 'bg-gradient-to-br from-blue-600/10 to-blue-400/10',
    },
    {
      id: 'github',
      icon: Github,
      title: 'GitHub',
      value: 'github.com/ranjitkairi',
      link: 'https://github.com/tsr-kairi',
      color: 'from-gray-500 to-gray-400',
      bgColor: 'bg-gradient-to-br from-gray-500/10 to-gray-400/10',
    },
  ];

  const onSubmit = async (data: yup.InferType<typeof formSchema>) => {
    setIsSending(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      reset();
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative overflow-hidden py-24 px-4 sm:px-6 bg-gradient-to-br from-gray-900 via-purple-900/30 to-gray-900"
    >
      <SectionAmbience variant="purple" />
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-purple-500/10"
            style={{
              width: Math.random() * 300 + 100 + 'px',
              height: Math.random() * 300 + 100 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              filter: 'blur(60px)',
              transform: `translate(-50%, -50%) rotate(${Math.random() * 360}deg)`,
              opacity: 0.2 + Math.random() * 0.3,
              animation: `pulse ${15 + Math.random() * 20}s infinite alternate`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto">
        <SectionHeading
          badge="Get In Touch"
          title={<span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Let's Work Together</span>}
          subtitle={<>I'm currently open to new opportunities as a{' '}
            <span className="text-purple-300 font-medium">Sr. Frontend Developer</span>.
            Let's discuss how I can contribute to your team's success.</>}
        />

        {/* Availability banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-green-500/30 bg-green-500/10 backdrop-blur-sm text-sm font-medium text-green-300">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400"></span>
            </span>
            Currently available for freelance & full-time opportunities
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={controls}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Contact Methods */}
          <motion.div
            variants={container}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.id}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={item}
                custom={index}
                className={`group relative p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 overflow-hidden`}
              >
                <div className="relative z-10">
                  <div className="flex items-center mb-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${method.color} mr-3`}>
                      <method.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{method.title}</h3>
                  </div>
                  <p className="text-gray-300 text-sm font-medium">{method.value}</p>
                </div>
                <div
                  className={`absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40, rotateX: 12, transformPerspective: 1200 },
              visible: {
                opacity: 1,
                y: 0,
                rotateX: 0,
                transformPerspective: 1200,
                transition: {
                  delay: 0.4,
                  type: 'spring',
                  stiffness: 100,
                  damping: 15,
                },
              },
            }}
            initial="hidden"
            animate={controls}
            className="relative"
          >
            <div className="relative p-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>

                <FormProvider {...methods}>
                  <ContactForm onSubmit={onSubmit} isSending={isSending} />
                </FormProvider>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          variants={{
            hidden: { opacity: 0, y: 40, rotateX: 12, transformPerspective: 1200 },
            visible: { 
              opacity: 1, 
              y: 0,
              rotateX: 0,
              transformPerspective: 1200,
              transition: { 
                delay: 0.6,
                type: 'spring',
                stiffness: 100,
                damping: 15,
              } 
            }
          }}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mt-20"
        >
          <div className="relative max-w-3xl mx-auto p-px rounded-3xl bg-gradient-to-r from-purple-500/40 via-pink-500/30 to-purple-500/40 overflow-hidden">
          <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-[calc(1.5rem-1px)] px-6 py-12 text-center overflow-hidden">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[420px] h-[220px] bg-purple-600/20 blur-3xl rounded-full" />
          <h3 className="relative text-2xl md:text-3xl font-bold text-white mb-3">Ready to start a project?</h3>
          <p className="relative text-gray-400 mb-8 max-w-md mx-auto">Let's build something exceptional together — I'm one message away.</p>
          <div className="relative flex flex-wrap justify-center gap-4">
            <Magnet strength={4}>
              <a
                href="resume.pdf"
                download
                className="group relative px-8 py-3.5 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg transition-all duration-300 border border-gray-700 hover:border-purple-500/50 flex items-center"
              >
                <FileText className="w-4 h-4 mr-2" />
                Download Resume
                <span className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/20 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </Magnet>
            <Magnet strength={4}>
              <a
                href="#projects"
                className="group relative px-8 py-3.5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium rounded-lg transition-all duration-300 flex items-center"
              >
                View My Work
                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Magnet>
          </div>
          </div>
          </div>
        </motion.div>
      </div>
      
      <style type="text/css">
        {`
          @keyframes pulse {
            0% { transform: translate(-50%, -50%) scale(1) rotate(0deg); }
            100% { transform: translate(-50%, -50%) scale(1.1) rotate(5deg); }
          }
        `}
      </style>
    </section>
  );
};



export default ContactSection;