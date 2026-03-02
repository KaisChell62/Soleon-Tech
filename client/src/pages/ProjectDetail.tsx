import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { projects } from '../data/projects';
// Added new icons
import { ArrowLeft, ExternalLink, Calendar, Code, Target, CheckCircle2, Layers, Smartphone, Monitor, Palette, Map, MousePointer2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import BrandLogo from '../components/BrandLogo';
import InteractiveMockup from '../components/portfolio/InteractiveMockup';
import WireframeSchematic, { type WireframeType } from '../components/demos/WireframeSchematic';

export default function ProjectDetail() {
  const { t, i18n } = useTranslation();
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

    const [selected, setSelected] = useState(0);

  if (!project) return <div className="text-white pt-32 text-center h-screen bg-neutral-950">{t('portfolio.project.notFound')}</div>;

  const currentLang = i18n.language.split('-')[0];
  const getLocalized = (obj: any) => {
      if (typeof obj === 'string') return obj;
      if (!obj) return '';
      // Support nested keys or direct language keys
      const val = obj[currentLang] || obj['en'] || obj['fr'];
      if (typeof val === 'string') return val;
      return '';
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-white pb-20">
        
        {/* --- HERO SECTION --- */}
        <div className="relative h-[70vh] w-full overflow-hidden">
             <div className="absolute inset-0 bg-neutral-900">
                 {/* Fallback pattern if image fails */}
                 <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                 
                 {project.heroImage && (
                    <img 
                      src={project.heroImage} 
                      className="w-full h-full object-cover opacity-30 blur-sm scale-105" 
                      alt=""
                    />
                 )}
                 <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-neutral-900/50" />
             </div>
             
             <div className="absolute bottom-0 left-0 w-full px-4 sm:px-6 lg:px-8 pb-16">
                 <div className="max-w-7xl mx-auto">
                    <Link to="/portfolio" className="inline-flex items-center gap-2 text-indigo-300 mb-6 hover:text-white transition-colors text-sm font-semibold uppercase tracking-wider backdrop-blur-md px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10">
                        <ArrowLeft size={16} /> {t('portfolio.project.back')}
                    </Link>
                    
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-white/5 rounded-2xl backdrop-blur-md border border-white/10">
                             <BrandLogo projectId={project.id} className="w-12 h-12 text-indigo-400" />
                        </div>
                        <span className="text-xl font-medium text-neutral-300 opacity-60">
                           / {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                        </span>
                    </div>

                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-7xl font-bold mb-6 tracking-tight max-w-4xl"
                    >
                        {getLocalized(project.title)}
                    </motion.h1>
                    <div className="flex flex-wrap gap-4 items-center text-neutral-300">
                        <span className="flex items-center gap-2 bg-neutral-800/80 px-4 py-2 rounded-lg backdrop-blur border border-white/5">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            {project.client}
                        </span>
                        <span className="flex items-center gap-2 bg-neutral-800/80 px-4 py-2 rounded-lg backdrop-blur border border-white/5">
                             <Calendar size={16} className="text-indigo-400" /> {project.year}
                        </span>
                        {project.tags.map((tag: string) => (
                            <span key={tag} className="px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium">
                                {tag}
                            </span>
                        ))}
                    </div>
                 </div>
             </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
             
             {/* --- OVERVIEW --- */}
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 bg-neutral-900/50 backdrop-blur-xl border border-neutral-800 rounded-3xl p-8 lg:p-12 mb-20 shadow-2xl">
                 <div className="lg:col-span-2 space-y-8">
                     {/* B. Problem & Goal (Enhanced) */}
                     {project.problem && (
                        <div>
                             <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-rose-400">
                                 <Target /> {t('portfolio.project.problem') || "Problem & Goal"}
                             </h2>
                             <div className="space-y-4">
                               <p className="text-lg text-neutral-300 leading-relaxed font-light">
                                   <strong className="text-white block mb-2">{t('portfolio.project.challenge')} :</strong>
                                   {getLocalized(project.problem)}
                               </p>
                               {project.goal && (
                                   <p className="text-lg text-neutral-300 leading-relaxed font-light">
                                       <strong className="text-white block mb-2">{t('portfolio.project.goal')} :</strong>
                                       {getLocalized(project.goal)}
                                   </p>
                               )}
                             </div>
                        </div>
                     )}
                     
                     {/* Fallback to old challenge if new fields missing */}
                     {!project.problem && (
                         <div>
                             <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-indigo-400">
                                 <Target /> {t('portfolio.project.challenge')}
                             </h2>
                             <p className="text-lg text-neutral-300 leading-relaxed font-light">{getLocalized(project.challenge)}</p>
                         </div>
                     )}

                     <div>
                         <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-emerald-400">
                             <Code /> {t('portfolio.project.solution')}
                         </h2>
                         <p className="text-lg text-neutral-300 leading-relaxed font-light">{getLocalized(project.solution)}</p>
                     </div>
                 </div>
                 <div className="lg:border-l border-neutral-800 lg:pl-12 flex flex-col justify-between">
                     <div>
                         <h3 className="text-sm uppercase tracking-wider text-neutral-500 mb-2">{t('portfolio.project.results')}</h3>
                         <div className="text-3xl font-bold text-white mb-2 leading-tight">
                             {getLocalized(project.result)}
                         </div>
                     </div>
                     
                     {/* Tools Stack */}
                     {project.tools && (
                         <div className="mt-8">
                             <h3 className="text-sm uppercase tracking-wider text-neutral-500 mb-3">{t('portfolio.project.techTools')}</h3>
                             <div className="flex flex-wrap gap-2">
                                 {project.tools.map((tool: string) => (
                                     <span key={tool} className="px-3 py-1 bg-neutral-800 rounded-md text-sm text-neutral-300 border border-neutral-700">
                                         {tool}
                                     </span>
                                 ))}
                             </div>
                         </div>
                     )}

                     {project.demoUrl && (
                        project.demoUrl.startsWith('/') ? (
                            <Link 
                                to={project.demoUrl}
                                className="mt-8 w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-center font-bold flex items-center justify-center gap-2 transition-transform hover:scale-105"
                            >
                                {t('portfolio.project.liveDemo')} <ExternalLink size={18} />
                            </Link>
                        ) : (
                            <a 
                                href={project.demoUrl}
                                target="_blank"
                                rel="noreferrer" 
                                className="mt-8 w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-center font-bold flex items-center justify-center gap-2 transition-transform hover:scale-105"
                            >
                                {t('portfolio.project.liveDemo')} <ExternalLink size={18} />
                            </a>
                        )
                     )}
                 </div>
             </div>

            {/* --- C. USER JOURNEY (New Section) --- */}
            {project.userJourney && (
                <div className="mb-24">
                    <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
                        <Map className="text-indigo-400" />
                        {getLocalized(project.userJourney.title)}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {project.userJourney.steps.map((step: any, idx: number) => (
                            <div key={idx} className="bg-neutral-900/40 border border-white/5 p-8 rounded-2xl relative overflow-hidden group hover:bg-neutral-900/60 transition-colors">
                                <div className="absolute top-0 right-0 p-4 opacity-10 font-bold text-6xl text-white group-hover:opacity-20 transition-opacity">
                                    {idx + 1}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 relative z-10">{getLocalized(step.title)}</h3>
                                <p className="text-neutral-400 relative z-10">{getLocalized(step.description)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* --- D. WIREFRAMES (New Section) --- */}
            {project.wireframes && (
                <div className="mb-24 bg-neutral-100 rounded-3xl p-6 md:p-10 text-black">
                     <div className="mb-6">
                         <h2 className="text-3xl font-bold mb-3 flex items-center gap-3">
                             <Layers className="text-neutral-800" /> 
                             {t('portfolio.project.wireframes')}
                         </h2>
                         <p className="text-md text-neutral-600 max-w-2xl">{getLocalized(project.wireframes.description)}</p>
                     </div>
                     <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                         <div className="col-span-2">
                             <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                 {project.id === 'eco-market-app' ? (
                                    ['dashboard', 'marketplace', 'analytics', 'logistics'].map((type, i) => (
                                        <button key={i} onClick={() => setSelected(i)} className="rounded-lg overflow-hidden border border-neutral-200 shadow-sm bg-neutral-50 aspect-video relative group">
                                            <div className="absolute inset-0 w-[285%] h-[285%] scale-[0.35] origin-top-left pointer-events-none">
                                               <WireframeSchematic type={type as WireframeType} />
                                            </div>
                                            <div className={`absolute inset-0 border-2 transition-colors ${selected === i ? 'border-emerald-500' : 'border-transparent group-hover:border-emerald-200'}`} />
                                        </button>
                                    ))
                                 ) : (
                                    project.wireframes.images.map((img: string, i: number) => (
                                        <button key={i} onClick={() => setSelected(i)} className="rounded-lg overflow-hidden border border-neutral-200 shadow-sm bg-white">
                                            <img src={img} className="w-full h-40 object-cover" alt={`wireframe-${i}`} />
                                        </button>
                                    ))
                                 )}
                             </div>
                         </div>
                         <div className="col-span-1 flex items-start">
                             <div className="w-full">
                                 {project.id === 'eco-market-app' ? (
                                     <div className="w-full h-[420px] rounded-xl border border-neutral-200 shadow-lg bg-white overflow-hidden">
                                        <WireframeSchematic type={['dashboard', 'marketplace', 'analytics', 'logistics'][selected] as WireframeType} />
                                     </div>
                                 ) : (
                                     <img src={project.wireframes.images[selected]} className="w-full h-[420px] object-contain rounded-xl border border-neutral-200 shadow-lg bg-white" alt="Selected wireframe" />
                                 )}
                                 <p className="mt-3 text-sm text-neutral-600">
                                    {project.id === 'eco-market-app' 
                                        ? "Schémas fonctionnels interactifs de l'architecture B2B (Dashboard, Marketplace, Analytics, Logistics)." 
                                        : "Cliquez sur une miniature pour l'agrandir. Les maquettes ci‑dessus représentent l'architecture produit, la page détail, le panier et le checkout."}
                                 </p>
                             </div>
                         </div>
                     </div>
                </div>
            )}

            {/* --- E. FINAL MOCKUPS (Combined with Interactive Preview) --- */}
            {project.mockups && (
                <div className="mb-24">
                    <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
                        <Palette className="text-purple-400" />
                        {t('portfolio.project.highFidelity')}
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Desktop View */}
                        <div className="col-span-1 lg:col-span-2 bg-neutral-900 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                             <div className="bg-neutral-800 px-4 py-2 flex items-center gap-2 border-b border-white/5">
                                 <div className="flex gap-1.5">
                                     <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                     <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                     <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                 </div>
                                 <div className="ml-4 flex items-center gap-2 text-xs text-neutral-500 bg-neutral-950 px-3 py-1 rounded-md w-full max-w-[200px]"><Monitor size={10} className="text-neutral-600 shrink-0" /><span className="truncate font-medium">{project.title}</span></div>
                             </div>
                             {project.demoUrl ? (
                                 <div className="aspect-[16/10] relative group">
                                     <iframe src={project.demoUrl} title={project.title + ' Desktop Preview'} className="w-full h-full border-0" allow="fullscreen" />
                                     <a href={project.demoUrl} target="_blank" rel="noreferrer" className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm cursor-pointer">
                                         <span className="bg-white text-black px-6 py-3 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform flex items-center gap-2">
                                             <MousePointer2 size={16} /> {t('portfolio.project.liveDemo')}
                                         </span>
                                     </a>
                                 </div>
                             ) : (
                                 <img src={project.mockups.desktop || project.heroImage} className="w-full h-auto" alt="Desktop Mockup" />
                             )}
                        </div>
                        
                        {/* Mobile View - Responsive on PC */}
                        <div className="col-span-1 flex items-center justify-center bg-neutral-900 rounded-2xl border border-white/10 p-4 sm:p-6 lg:p-8">
                             <div className="relative border-gray-800 bg-gray-800 border-[10px] sm:border-[14px] rounded-[2rem] sm:rounded-[2.5rem] h-[400px] w-[200px] sm:h-[500px] sm:w-[250px] lg:h-[600px] lg:w-[300px] shadow-xl group">
                                <div className="w-[80px] sm:w-[120px] lg:w-[148px] h-[14px] sm:h-[18px] bg-gray-800 top-0 rounded-b-[0.75rem] sm:rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                                <div className="h-[32px] sm:h-[46px] w-[3px] bg-gray-800 absolute -start-[13px] sm:-start-[17px] top-[100px] sm:top-[124px] rounded-s-lg"></div>
                                <div className="h-[32px] sm:h-[46px] w-[3px] bg-gray-800 absolute -start-[13px] sm:-start-[17px] top-[140px] sm:top-[178px] rounded-s-lg"></div>
                                <div className="h-[48px] sm:h-[64px] w-[3px] bg-gray-800 absolute -end-[13px] sm:-end-[17px] top-[110px] sm:top-[142px] rounded-e-lg"></div>
                                <div className="rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden w-[180px] h-[376px] sm:w-[222px] sm:h-[472px] lg:w-[272px] lg:h-[572px] bg-gray-800">
                                    <div className="relative w-full h-full">
                                        {project.demoUrl ? (
                                            <>
                                                <iframe src={project.demoUrl} title={project.title + ' Mobile Preview'} className="w-full h-full border-0 pointer-events-none" allow="fullscreen" style={{ transform: 'scale(0.5)', transformOrigin: 'top left', width: '200%', height: '200%' }} />
                                                <a href={project.demoUrl} target="_blank" rel="noreferrer" className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm cursor-pointer">
                                                    <span className="bg-white text-black px-4 py-2 sm:px-6 sm:py-3 rounded-full font-bold text-sm sm:text-base transform translate-y-4 group-hover:translate-y-0 transition-transform flex items-center gap-2">
                                                        <MousePointer2 size={14} /> {t('portfolio.project.liveDemo')}
                                                    </span>
                                                </a>
                                            </>
                                        ) : (
                                            <img src={project.mockups.mobile || project.thumbnail} className="w-full h-full object-cover" alt="Mobile Mockup" />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {project.mockups.description && (
                        <p className="mt-8 text-center text-neutral-400 italic max-w-2xl mx-auto">
                            {getLocalized(project.mockups.description)}
                        </p>
                    )}
                </div>
            )}

            {/* --- IMMERSIVE PREVIEW (Original Feature - Kept as Legacy/Bonus) --- */}
            {!project.mockups && (
                <div className="mb-24">
                     <InteractiveMockup 
                        type={project.category === 'mobile' ? 'mobile' : project.category === 'design' ? 'design' : 'web'}
                        desktopImage={project?.images?.[0] || project.heroImage}
                        mobileImage={project.category === 'mobile' ? (project?.images?.[1] || project.thumbnail) : undefined}
                        demoUrl={project.demoUrl}
                    />
                </div>
            )}

            {/* --- BEFORE / APRÈS supprimé volontairement --- */}

            {/* --- TIMELINE (Interactive & Stylish) --- */}
            {project.timeline && project.timeline.length > 0 && (
            <div className="mb-32 mt-24">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl lg:text-5xl font-bold mb-20 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400"
                >
                    {t('portfolio.project.creationProcess')}
                </motion.h2>

                <div className="relative max-w-6xl mx-auto px-4">
                    {/* Animated Vertical Line */}
                    <motion.div 
                        initial={{ height: 0 }}
                        whileInView={{ height: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: 'easeInOut' }}
                        className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-indigo-500 via-purple-500 to-neutral-900 md:-ml-[1px] shadow-[0_0_10px_rgba(99,102,241,0.5)]" 
                    />
                    
                    <div className="space-y-16 md:space-y-24">
                        {project.timeline.map((step: any, index: number) => (
                            <div key={index} className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                
                                {/* Content Card */}
                                <motion.div 
                                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50, scale: 0.9 }}
                                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                    viewport={{ margin: "-100px" }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="flex-1 ml-16 md:ml-0 group w-full"
                                >
                                     <div className={`relative bg-neutral-900/80 backdrop-blur-xl border border-white/10 p-6 rounded-2xl transition-all duration-500 hover:border-indigo-500/50 hover:shadow-[0_0_30px_rgba(79,70,229,0.15)] hover:-translate-y-2 ${index % 2 === 0 ? 'md:text-left md:ml-12' : 'md:text-right md:mr-12'}`}>
                                        
                                        {/* Glowing edge effect on hover */}
                                        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 pointer-events-none" />

                                        <div className={`inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-bold tracking-widest uppercase ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                                            <Calendar size={12} />
                                            {getLocalized(step.duration)}
                                        </div>
                                        
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">{getLocalized(step.phase)}</h3>
                                        <p className="text-neutral-400 leading-relaxed font-light text-sm">{getLocalized(step.description)}</p>
                                     </div>
                                </motion.div>

                                {/* Center Dot */}
                                <motion.div 
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ margin: "-50px" }}
                                    transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                                    className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 w-5 h-5 z-10"
                                >
                                    <div className="w-5 h-5 rounded-full bg-neutral-950 border-4 border-indigo-500 shadow-[0_0_15px_rgba(99,102,241,1)] relative z-10"></div>
                                    <div className="absolute inset-0 bg-indigo-500 rounded-full animate-ping opacity-75"></div>
                                </motion.div>
                                
                                {/* Spacer for flex alignment */}
                                <div className="flex-1 hidden md:block" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            )}

            {/* --- CTA --- */}
            <div className="bg-gradient-to-r from-indigo-900/20 to-purple-900/20 rounded-3xl p-12 text-center border border-white/5">
                <h2 className="text-4xl font-bold mb-6">{t('portfolio.project.cta.title')}</h2>
                <p className="text-xl text-neutral-300 mb-8">{t('portfolio.project.cta.subtitle')}</p>
                <div className="flex flex-wrap justify-center gap-4">
                    <Link to="/contact" className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-neutral-200 transition">
                        {t('portfolio.project.cta.startProject')}
                    </Link>
                    <Link to="/portfolio" className="px-8 py-4 bg-transparent border border-white text-white font-bold rounded-full hover:bg-white/10 transition">
                        {t('portfolio.project.cta.seeMore')}
                    </Link>
                </div>
            </div>

        </div>
    </div>
  );
}
