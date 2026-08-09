import civilstap from '../assets/project/civilstap.png';
import kcvelvet from '../assets/project/kcvelvetlaserstudio.png';
import nexg from '../assets/project/nexg.png';
import erestro from '../assets/project/erestro.png';
import synergytechs from '../assets/project/synergytechs.png';
import immunitynetworks from '../assets/project/immunitynetworks.png';
import thevedavibe from '../assets/project/thevedavibe.png';
import cedarridgedental from '../assets/project/cedarridgedental.png';
import fonezone from '../assets/project/fonezone.png';
import thesikh100 from '../assets/project/thesikh100.png';
import tomplumber from '../assets/project/1tomplumber.png';
import gyanam from '../assets/project/gyanam.png';
import synergite from '../assets/project/synergite.png';
import clinicgo from '../assets/project/clinicgo.png';
import standarddigitals from '../assets/project/standarddigitals.png';

export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
  github?: string;
  role: string;
  impact: string[];
  featured?: boolean;
}

export const projectsData: Project[] = [
  {
    title: 'ClinicGo',
    description: 'A modern clinic management SaaS platform with appointment scheduling, patient records, doctor management, billing, and analytics — built for healthcare providers.',
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'REST APIs'],
    image: clinicgo,
    link: 'https://www.clinicgo.io/',
    role: 'Frontend Developer',
    impact: [
      'Built appointment scheduling with interactive calendar UI',
      'Developed patient records and doctor management modules',
      'Integrated billing and invoice generation',
      'Responsive design optimized for mobile & desktop'
    ],
    featured: true
  },
  {
    title: 'Standard Digitals',
    description: 'A full-service digital marketing agency website showcasing SEO, social media, branding, and web development services with a modern, conversion-focused design.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    image: standarddigitals,
    link: 'https://standarddigitals.com/',
    role: 'Frontend Developer',
    impact: [
      'Built high-performance marketing website with Next.js',
      'Implemented SEO best practices for organic growth',
      'Created animated sections with smooth transitions',
      'Optimized Core Web Vitals for better search ranking'
    ],
    featured: true
  },
  {
    title: 'NexG Technologies',
    description: 'Corporate website for NexG Technologies — a software company offering SaaS products, custom development, and enterprise solutions. Clean, professional design with service showcases.',
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    image: nexg,
    link: 'https://nexg.tech/',
    role: 'Senior Frontend Developer',
    impact: [
      'Developed the company\'s main corporate website',
      'Built product showcase and service pages',
      'Implemented smooth animations and transitions',
      'Optimized for performance and SEO'
    ],
    featured: true
  },
  {
    title: 'Gyanam',
    description: 'An AI-powered learning platform that personalizes education through intelligent content recommendations, interactive quizzes, and progress tracking for students.',
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'AI/ML'],
    image: gyanam,
    link: 'https://gyanam-mu.vercel.app/',
    role: 'Frontend Developer',
    impact: [
      'Built AI-driven personalized learning dashboard',
      'Developed interactive quiz and assessment modules',
      'Implemented progress tracking and analytics',
      'Created responsive UI for seamless learning experience'
    ],
    featured: true
  },
  {
    title: 'CivilStap',
    description: 'An online education platform for civil services exam preparation, offering structured courses, mock tests, current affairs, and study materials for UPSC aspirants.',
    tech: ['WordPress', 'Elementor', 'PHP', 'MySQL'],
    image: civilstap,
    link: 'https://civilstap.com/',
    role: 'WordPress Developer',
    impact: [
      'Built full-featured e-learning platform on WordPress',
      'Integrated LMS for course and quiz management',
      'Developed custom Elementor templates',
      'Optimized site speed and mobile responsiveness'
    ]
  },
  {
    title: 'KC Velvet Laser Studio',
    description: 'A premium beauty and laser studio website with service listings, online booking, gallery, and client testimonials — designed to attract and convert new clients.',
    tech: ['WordPress', 'Elementor', 'PHP', 'CSS'],
    image: kcvelvet,
    link: 'https://kcvelvetlaserstudio.com/',
    role: 'WordPress Developer',
    impact: [
      'Designed elegant, conversion-focused landing pages',
      'Integrated online booking system',
      'Built service and gallery pages with custom layouts',
      'Optimized for local SEO and mobile users'
    ]
  },
  {
    title: 'Erestro',
    description: 'A restaurant management and online ordering platform with menu management, table reservations, order tracking, and a POS-ready admin panel for restaurant owners.',
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'REST APIs'],
    image: erestro,
    link: 'https://erestro.in/',
    role: 'Frontend Developer',
    impact: [
      'Built online ordering system with real-time updates',
      'Developed menu management and table reservation modules',
      'Created admin panel for order and inventory management',
      'Implemented responsive design for dine-in and takeaway flows'
    ]
  },
  {
    title: 'Synergy Techs',
    description: 'Corporate website for Synergy Technologies — a digital solutions company offering web development, mobile apps, and IT consulting services.',
    tech: ['WordPress', 'Elementor', 'PHP', 'JavaScript'],
    image: synergytechs,
    link: 'https://synergytechs.net/',
    role: 'Frontend Developer',
    impact: [
      'Developed professional corporate website',
      'Built service showcase and portfolio sections',
      'Implemented contact forms and lead capture',
      'Optimized for performance and SEO'
    ]
  },
  {
    title: 'Immunity Networks',
    description: 'IT infrastructure and networking solutions company website showcasing managed services, cybersecurity, cloud solutions, and enterprise networking products.',
    tech: ['WordPress', 'Elementor', 'PHP', 'CSS'],
    image: immunitynetworks,
    link: 'http://immunitynetworks.com/',
    role: 'WordPress Developer',
    impact: [
      'Built professional IT services website',
      'Developed service and product showcase pages',
      'Integrated inquiry and support forms',
      'Optimized for B2B lead generation'
    ]
  },
  {
    title: 'The Veda Vibe',
    description: 'A wellness and Ayurveda lifestyle brand website offering herbal products, wellness blogs, and holistic health solutions rooted in ancient Indian traditions.',
    tech: ['WordPress', 'WooCommerce', 'Elementor', 'PHP'],
    image: thevedavibe,
    link: 'https://thevedavibe.com/',
    role: 'WordPress Developer',
    impact: [
      'Built e-commerce store with WooCommerce',
      'Developed product catalog with filtering and search',
      'Created wellness blog with custom post types',
      'Optimized for mobile shopping experience'
    ]
  },
  {
    title: 'Cedar Ridge Dental',
    description: 'A professional dental clinic website for a Canadian practice, featuring service listings, patient information, appointment booking, and a clean, trustworthy design.',
    tech: ['WordPress', 'Elementor', 'PHP', 'CSS'],
    image: cedarridgedental,
    link: 'https://cedarridgedental.ca/',
    role: 'WordPress Developer',
    impact: [
      'Designed patient-friendly dental clinic website',
      'Integrated online appointment booking system',
      'Built service pages with detailed treatment info',
      'Optimized for local SEO in Canadian market'
    ]
  },
  {
    title: 'FoneZone',
    description: 'An online mobile phone and accessories retail store with product catalog, comparison tools, deals section, and a streamlined checkout experience.',
    tech: ['WordPress', 'WooCommerce', 'Elementor', 'PHP'],
    image: fonezone,
    link: 'https://fonezone.com/',
    role: 'WordPress Developer',
    impact: [
      'Built full e-commerce store with WooCommerce',
      'Developed product catalog with advanced filtering',
      'Implemented deals and offers section',
      'Optimized checkout flow for higher conversions'
    ]
  },
  {
    title: 'The Sikh 100',
    description: 'A community platform celebrating 100 influential Sikh personalities, featuring detailed profiles, historical content, multimedia galleries, and cultural storytelling.',
    tech: ['WordPress', 'Elementor', 'PHP', 'JavaScript'],
    image: thesikh100,
    link: 'https://thesikh100.com/',
    role: 'WordPress Developer',
    impact: [
      'Built custom profile and biography pages',
      'Developed multimedia gallery with filtering',
      'Created engaging storytelling layouts',
      'Optimized for content-heavy pages'
    ]
  },
  {
    title: '1 Tom Plumber',
    description: 'A plumbing services website for a North American company offering emergency plumbing, drain cleaning, water heater installation, and home plumbing solutions.',
    tech: ['WordPress', 'Elementor', 'PHP', 'CSS'],
    image: tomplumber,
    link: 'https://www.1tomplumber.com/',
    role: 'WordPress Developer',
    impact: [
      'Built service-focused website with clear CTAs',
      'Integrated emergency contact and booking forms',
      'Developed service area and location pages',
      'Optimized for local SEO and Google Maps'
    ]
  },
  {
    title: 'Synergite',
    description: 'A B2B SaaS platform for business process automation and team collaboration, offering workflow management, task tracking, and productivity analytics.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'REST APIs'],
    image: synergite,
    link: 'https://www.synergite.com/',
    role: 'Frontend Developer',
    impact: [
      'Built workflow automation and task management UI',
      'Developed team collaboration and dashboard features',
      'Implemented productivity analytics and reporting',
      'Created responsive design for cross-device usage'
    ]
  }
];
