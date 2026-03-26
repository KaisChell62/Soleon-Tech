import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import BrandLogo from './BrandLogo';
import { getProjectRoute } from '../routes/config';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { i18n } = useTranslation();
  const [imgSrc, setImgSrc] = useState<string>(project.thumbnail || project.mockups?.desktop || project.heroImage || '/mockups/eco-market-hero.svg');
  
  // Helper to get localized string safely
  const getLocalized = (obj: any) => {
    if (typeof obj === 'string') return obj;
    if (!obj) return '';
    const lang = i18n.language.split('-')[0]; // 'fr', 'en', etc.
    return obj[lang] || obj['fr'] || obj['en'] || '';
  };

  const title = project.title;
  const description = getLocalized(project.shortDescription);
  const client = project.client;

  // Verify thumbnail exists (network check) and fallback if missing
  useEffect(() => {
    let active = true;
    const candidate = project.thumbnail || project.mockups?.desktop || project.heroImage || '/mockups/fallback.svg';
    const fallback = project.mockups?.desktop || project.heroImage || '/mockups/fallback.svg';

    async function verify() {
      try {
        const res = await fetch(candidate, { method: 'HEAD' });
        if (!active) return;
        if (res.ok) setImgSrc(candidate);
        else setImgSrc(fallback);
      } catch (err) {
        if (!active) return;
        setImgSrc(fallback);
      }
    }
    verify();
    return () => { active = false; };
  }, [project.thumbnail, project.mockups, project.heroImage]);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group relative flex flex-col h-full bg-neutral-900/50 border border-white/5 rounded-3xl overflow-hidden hover:border-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500"
    >
      {/* Top Section: Logo & Image Background */}
      <div className="relative h-64 overflow-hidden">
         {/* Background Image with Overlay */}
         <div className="absolute inset-0 z-0">
             <img
               src={imgSrc}
               alt={title}
               loading="lazy"
               onError={(e) => {
                 const fallback = project.mockups?.desktop || project.heroImage || '/mockups/fallback.svg';
                 if (imgSrc !== fallback) setImgSrc(fallback);
                 (e.currentTarget as HTMLImageElement).style.opacity = '0.6';
               }}
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[30%] group-hover:grayscale-0"
             />
             {/* Gradient Overlay to ensure text readability & consistent look */}
             <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/60 via-transparent to-neutral-950" />
             <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-transparent transition-colors duration-500" />
         </div>
         
         {/* Floating Badge / Logo */}
         <div className="absolute top-4 left-4 z-10">
             <div className="flex items-center gap-3 bg-neutral-950/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-lg">
                 <BrandLogo projectId={project.id} className="w-5 h-5 text-indigo-400" />
                 <span className="text-xs font-semibold tracking-wide text-white uppercase">{client}</span>
             </div>
         </div>
         
         {/* Category Badge */}
         <div className="absolute top-4 right-4 z-10">
            <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white bg-indigo-600/90 backdrop-blur-sm rounded-full shadow-lg">
                {project.category}
            </span>
         </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-grow p-6 md:p-8 relative z-10 -mt-12 bg-gradient-to-b from-neutral-950/90 to-neutral-950 rounded-t-3xl border-t border-white/5 backdrop-blur-sm">
        
        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
            {title}
        </h3>

        {/* Description */}
        <p className="text-neutral-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
            {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.slice(0, 3).map((tag, i) => (
                <span key={i} className="px-2 py-1 text-[11px] font-medium text-neutral-300 bg-neutral-800/50 rounded-md border border-white/5">
                    {tag}
                </span>
            ))}
            {project.tags.length > 3 && (
                <span className="px-2 py-1 text-[11px] font-medium text-neutral-500">
                    +{project.tags.length - 3}
                </span>
            )}
        </div>

        {/* Action */}
        <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
             <span className="text-xs font-mono text-neutral-500">
                 {project.year || '2025'}
             </span>
             <Link 
                to={getProjectRoute(i18n.language.split('-')[0], project.id)}
                className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:text-indigo-400 transition-colors"
             >
                View Case Study
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
             </Link>
        </div>
      </div>
    </motion.div>
  );
}
