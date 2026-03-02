import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import type { ProjectCategory } from '../types';

export default function Portfolio() {
  const { t, i18n } = useTranslation();
  
  const categories: { id: ProjectCategory | 'all'; label: string }[] = [
    { id: 'all', label: t('portfolio.categories.all') },
    { id: 'web', label: t('portfolio.categories.web') },
    { id: 'mobile', label: t('portfolio.categories.mobile') },
    { id: 'design', label: t('portfolio.categories.design') },
  ];

  const [filter, setFilter] = useState<ProjectCategory | 'all'>('all');

  const filteredProjects = projects.filter(p => filter === 'all' || p.category === filter);

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 relative overflow-hidden">
       {/* Ambient Background */}
       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
           <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-900/10 rounded-full blur-[120px]" />
           <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-900/10 rounded-full blur-[120px]" />
       </div>

       <div className="max-w-7xl mx-auto relative z-10">
           {/* Header */}
           <div className="text-center mb-20">
               <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="inline-block mb-4 px-4 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-300 text-sm font-medium"
               >
                 {t('portfolio.badge') || "Original Works & Case Studies"}
               </motion.div>
               <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
               >
                 {t('portfolio.title')}
               </motion.h1>
               <motion.p 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.2 }}
                 className="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed"
               >
                 {t('portfolio.subtitle')}
               </motion.p>
           </div>

           {/* Filters */}
           <div className="flex flex-wrap justify-center gap-2 mb-16">
               {categories.map((cat) => (
                   <button
                        key={cat.id}
                        onClick={() => setFilter(cat.id)}
                        className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all relative ${
                            filter === cat.id ? 'text-white' : 'text-neutral-400 hover:text-white hover:bg-white/5'
                        }`}
                   >
                       {filter === cat.id && (
                           <motion.div 
                                layoutId="activeFilter"
                                className="absolute inset-0 bg-indigo-600 rounded-full shadow-lg shadow-indigo-500/25"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                           />
                       )}
                       <span className="relative z-10">{cat.label}</span>
                   </button>
               ))}
           </div>

           {/* Grid */}
           <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
           >
               <AnimatePresence mode="popLayout">
                   {filteredProjects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                   ))}
               </AnimatePresence>
           </motion.div>
       </div>
    </div>
  );
}
