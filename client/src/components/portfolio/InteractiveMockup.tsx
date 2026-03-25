import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, Monitor } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface InteractiveMockupProps {
  desktopImage?: string; // Or URL for iframe
  mobileImage?: string; // Or URL for iframe
  demoUrl?: string;
  type: 'web' | 'mobile' | 'design';
}

export default function InteractiveMockup({ desktopImage, mobileImage, demoUrl, type }: InteractiveMockupProps) {
  const { t } = useTranslation();
  const [device, setDevice] = useState<'desktop' | 'mobile'>(type === 'mobile' ? 'mobile' : 'desktop');

  if (type === 'design') return null; // Design projects might handle this differently (gallery)

  return (
    <div className="w-full bg-neutral-900 rounded-3xl p-8 border border-neutral-800 overflow-hidden relative">
       {/* Controls */}
       <div className="flex justify-center gap-4 mb-8">
           <button 
              onClick={() => setDevice('desktop')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  device === 'desktop' ? 'bg-indigo-600 text-white' : 'bg-neutral-800 text-neutral-400 hover:text-white'
              }`}
           >
               <Monitor size={16} /> Desktop
           </button>
           <button 
              onClick={() => setDevice('mobile')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  device === 'mobile' ? 'bg-indigo-600 text-white' : 'bg-neutral-800 text-neutral-400 hover:text-white'
              }`}
           >
               <Smartphone size={16} /> Mobile
           </button>
       </div>

       {/* Device Rendering */}
       <div className="flex justify-center items-start min-h-[700px] perspective-1000 py-10">
           <AnimatePresence mode="wait">
               {device === 'desktop' ? (
                   <motion.div
                        key="desktop"
                        initial={{ opacity: 0, rotateX: 10, y: 20 }}
                        animate={{ opacity: 1, rotateX: 0, y: 0 }}
                        exit={{ opacity: 0, rotateX: -10, y: 20 }}
                        transition={{ duration: 0.5 }}
                        className="w-full max-w-4xl bg-neutral-800 rounded-lg p-2 shadow-2xl border border-neutral-700"
                   >
                       {/* Browser Header */}
                       <div className="h-8 bg-neutral-700 rounded-t flex items-center gap-2 px-4 mb-0">
                           <div className="w-3 h-3 rounded-full bg-red-500" />
                           <div className="w-3 h-3 rounded-full bg-yellow-500" />
                           <div className="w-3 h-3 rounded-full bg-green-500" />
                           <div className="flex-1 bg-neutral-800 h-5 rounded ml-4 text-[10px] text-neutral-500 flex items-center px-2 font-mono">
                               {demoUrl || 'https://Soleon Tech.agency'}
                           </div>
                       </div>
                       {/* Screen content */}
                       <div className="aspect-[16/9] bg-neutral-900 overflow-hidden relative group">
                           {/* Priority: Live Demo > Image > Placeholder */}
                           {demoUrl ? (
                                <iframe 
                                    key={demoUrl}
                                    src={demoUrl} 
                                    title="Live Preview" 
                                    className="w-full h-full border-0"
                                    allow="fullscreen"
                                />
                           ) : desktopImage ? (
                               <img src={desktopImage} alt="Desktop Project Preview" className="w-full h-full object-cover object-top scroll-smooth" />
                           ) : (
                               <div className="w-full h-full flex items-center justify-center text-neutral-600">No Preview Available</div>
                           )}
                           
                           {demoUrl && !demoUrl.startsWith('/') && ( // Only show External Link button for external URLs
                               <a 
                                 href={demoUrl} 
                                 target="_blank" 
                                 rel="noreferrer"
                                 className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm"
                               >
                                    <span className="bg-white text-black px-6 py-3 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform">
                                        {t('portfolio.project.liveDemo')}
                                    </span>
                               </a>
                           )}
                       </div>
                   </motion.div>
               ) : (
                   <motion.div
                        key="mobile"
                        initial={{ opacity: 0, rotateY: 20 }}
                        animate={{ opacity: 1, rotateY: 0 }}
                        exit={{ opacity: 0, rotateY: -20 }}
                        transition={{ duration: 0.5 }}
                        className="w-[300px] bg-neutral-800 rounded-[3rem] p-3 shadow-2xl border-4 border-neutral-700"
                   >
                        {/* Notch */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-neutral-900 rounded-b-xl z-10" />
                        
                        {/* Screen */}
                        <div className="aspect-[9/19] bg-neutral-900 rounded-[2.5rem] overflow-hidden relative group">
                           {demoUrl ? (
                                <iframe 
                                    src={demoUrl} 
                                    title="Live Mobile Preview" 
                                    className="w-full h-full border-0"
                                />
                           ) : (mobileImage || desktopImage) ? (
                               <img src={mobileImage || desktopImage} alt="Mobile Project Preview" className="w-full h-full object-cover object-top" />
                           ) : (
                               <div className="w-full h-full flex items-center justify-center text-neutral-600">No Preview</div>
                           )}
                        </div>
                   </motion.div>
               )}
           </AnimatePresence>
       </div>
    </div>
  );
}
