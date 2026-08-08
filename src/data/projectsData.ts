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
    title: 'EasyHisab',
    description: 'Offline-first GST-compliant billing and accounting software for small retailers. Enables billing, inventory, accounting, and GST-ready operations even without internet connectivity.',
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&fit=crop',
    link: '#',
    role: 'Senior Frontend Developer',
    impact: [
      'Built offline-first architecture for uninterrupted billing',
      'Implemented GST-compliant invoice generation',
      'Developed inventory & accounting modules',
      'Optimized for low-end devices used by small retailers'
    ],
    featured: true
  },
  {
    title: 'ClinicGo',
    description: 'A clinic management system with appointment scheduling, patient records, doctor management, and billing — built for modern healthcare providers.',
    tech: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&h=500&fit=crop',
    link: '#',
    role: 'Frontend Developer',
    impact: [
      'Built appointment scheduling with calendar UI',
      'Developed patient records management system',
      'Integrated billing and invoice generation',
      'Responsive design for mobile & desktop'
    ],
    featured: true
  },
  {
    title: 'HRMS Dashboard',
    description: 'Human Resource Management System with employee management, attendance tracking, leave management, payroll processing, and performance reviews.',
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'REST APIs'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    link: '#',
    role: 'Senior Frontend Developer',
    impact: [
      'Built complete employee lifecycle management',
      'Developed attendance & leave tracking modules',
      'Integrated payroll processing with tax calculations',
      'Created performance review dashboards'
    ],
    featured: true
  },
  {
    title: 'CRM Platform',
    description: 'Customer Relationship Management platform with lead tracking, pipeline management, contact management, and sales analytics dashboard.',
    tech: ['React', 'TypeScript', 'Mantine UI', 'REST APIs'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
    link: '#',
    role: 'Frontend Developer',
    impact: [
      'Built lead pipeline with drag-and-drop kanban board',
      'Developed contact management with activity timeline',
      'Created sales analytics with charts and reports',
      'Implemented role-based access control'
    ]
  },
  {
    title: 'Electric Dada',
    description: 'E-commerce platform for electrical products with product catalog, cart management, order tracking, and admin panel for inventory management.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop',
    link: '#',
    role: 'Frontend Developer',
    impact: [
      'Built product catalog with advanced filtering',
      'Developed cart and checkout flow',
      'Created admin panel for inventory management',
      'Optimized for SEO and performance'
    ]
  },
  {
    title: 'Booking System',
    description: 'Online booking and reservation system with real-time availability, multi-service support, payment integration, and automated confirmation emails.',
    tech: ['React', 'TypeScript', 'Node.js', 'Supabase'],
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop',
    link: '#',
    role: 'Full Stack Developer',
    impact: [
      'Built real-time availability calendar',
      'Integrated payment gateway for bookings',
      'Developed automated email confirmation system',
      'Created admin dashboard for booking management'
    ]
  }
];
