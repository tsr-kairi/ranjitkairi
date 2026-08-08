import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Filter } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { projectsData } from '../data/projectsData';

type ProjectCategory = 'all' | 'featured' | 'web' | 'mobile' | 'ai' | 'enterprise';

const ProjectsSection = ({ isLoaded }: { isLoaded: boolean }) => {
  const [selectedTech, setSelectedTech] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Extract all unique technologies for filtering
  const allTech = useMemo(() => {
    const techs = new Set<string>();
    projectsData.forEach(project => {
      project.tech.forEach(tech => techs.add(tech));
    });
    return Array.from(techs).sort();
  }, []);

  // Filter projects based on selected filters and search
  const filteredProjects = useMemo(() => {
    return projectsData.filter(project => {
      // Filter by category
      const matchesCategory = 
        activeCategory === 'all' || 
        (activeCategory === 'featured' && project.featured) ||
        (activeCategory === 'ai' && project.tech.some(tech => 
          ['AI/ML', 'OpenAI API', 'Machine Learning'].includes(tech)
        ));
      
      // Filter by selected technologies
      const matchesTech = selectedTech.length === 0 || 
        selectedTech.every(tech => project.tech.includes(tech));
      
      // Filter by search query
      const matchesSearch = 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tech.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
      
      return matchesCategory && matchesTech && matchesSearch;
    });
  }, [activeCategory, selectedTech, searchQuery]);

  const toggleTech = (tech: string) => {
    setSelectedTech(prev => 
      prev.includes(tech) 
        ? prev.filter(t => t !== tech)
        : [...prev, tech]
    );
  };

  const clearFilters = () => {
    setSelectedTech([]);
    setSearchQuery('');
    setActiveCategory('all');
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        when: "beforeChildren",
        staggerDirection: 1
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const categories: { id: ProjectCategory; label: string; count: number }[] = [
    { id: 'all', label: 'All Projects', count: projectsData.length },
    { id: 'featured', label: 'Featured', count: projectsData.filter(p => p.featured).length },
    { id: 'ai', label: 'AI/ML', count: projectsData.filter(p => 
      p.tech.some(tech => ['AI/ML', 'OpenAI API', 'Machine Learning'].includes(tech))
    ).length },
  ];

  return (
    <section id="projects" className="relative z-10 py-24 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.span 
            className="inline-block px-4 py-1 text-sm font-medium text-purple-400 bg-purple-900/30 rounded-full mb-4"
            variants={fadeInUp}
          >
            PORTFOLIO SHOWCASE
          </motion.span>
          <motion.h2 
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            variants={fadeInUp}
          >
            My{' '}
            <motion.span 
              className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
              variants={fadeInUp}
            >
              Projects
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
          <motion.p 
            className="text-xl text-gray-400 max-w-3xl mx-auto mt-8"
            variants={fadeInUp}
          >
            A curated collection of my professional work, showcasing innovative solutions and technical expertise
          </motion.p>
        </motion.div>

        {/* Search and Filter Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-500" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-12 pr-4 py-3 border border-gray-700 bg-gray-800/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Search projects by name, tech, or description..."
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
          
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <div className="hidden md:flex items-center space-x-1 bg-gray-800/50 backdrop-blur-sm p-1 rounded-xl border border-gray-700/50">
              {categories.map(({ id, label, count }) => (
                <motion.button
                  key={id}
                  onClick={() => setActiveCategory(id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className={`px-4 py-2 text-sm font-medium rounded-lg whitespace-nowrap transition-all ${
                    activeCategory === id
                      ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white shadow-md shadow-purple-500/10'
                      : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                  }`}
                >
                  {label}
                  <span className="ml-1.5 px-1.5 py-0.5 text-xs rounded-full bg-gray-700/50 text-gray-300">
                    {count}
                  </span>
                </motion.button>
              ))}
            </div>
            
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-lg border border-gray-700/50 bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white transition-colors"
            >
              <Filter className="w-4 h-4" />
              <span>Filter by Tech</span>
              {selectedTech.length > 0 && (
                <span className="ml-1.5 px-1.5 py-0.5 text-xs rounded-full bg-purple-500/20 text-purple-300">
                  {selectedTech.length}
                </span>
              )}
            </button>
            
            {(selectedTech.length > 0 || searchQuery || activeCategory !== 'all') && (
              <button
                onClick={clearFilters}
                className="text-sm text-gray-400 hover:text-purple-400 transition-colors flex items-center"
              >
                <X className="w-4 h-4 mr-1" />
                Clear filters
              </button>
            )}
          </div>
          
          {/* Mobile category selector */}
          <div className="mt-4 md:hidden">
            <select
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value as ProjectCategory)}
              className="w-full px-4 py-2 rounded-lg border border-gray-700/50 bg-gray-800/50 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              {categories.map(({ id, label, count }) => (
                <option key={id} value={id} className="bg-gray-800">
                  {label} ({count})
                </option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Technology Filter Panel */}
        <AnimatePresence>
          {isFilterOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginBottom: 0 }}
              animate={{ opacity: 1, height: 'auto', marginBottom: '1.5rem' }}
              exit={{ opacity: 0, height: 0, marginBottom: 0 }}
              className="overflow-hidden"
            >
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">Filter by Technology</h3>
                  <button
                    onClick={() => setIsFilterOpen(false)}
                    className="text-gray-400 hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {allTech.map((tech) => (
                    <button
                      key={tech}
                      onClick={() => toggleTech(tech)}
                      className={`px-3 py-1.5 text-sm rounded-full transition-all flex items-center ${
                        selectedTech.includes(tech)
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/20'
                          : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      {tech}
                      {selectedTech.includes(tech) && (
                        <X className="ml-1.5 w-3.5 h-3.5" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <motion.div 
            variants={container}
            initial="hidden"
            animate={isLoaded ? "show" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={`${project.title}-${index}`}
                  variants={item}
                  layout
                  initial="hidden"
                  animate="show"
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="relative"
                >
                  <ProjectCard 
                    project={project} 
                    index={index}
                    isLoaded={isLoaded}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-dashed border-gray-700/50"
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 flex items-center justify-center">
              <Search className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">No projects found</h3>
            <p className="text-gray-400 max-w-md mx-auto mb-6">
              We couldn't find any projects matching your criteria. Try adjusting your filters or search term.
            </p>
            <button
              onClick={clearFilters}
              className="inline-flex items-center px-5 py-2.5 rounded-lg text-sm font-medium bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-purple-300 hover:from-purple-600/30 hover:to-pink-600/30 hover:text-white transition-all group/button"
            >
              Clear all filters
              <X className="ml-2 w-4 h-4 group-hover/button:rotate-90 transition-transform" />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;