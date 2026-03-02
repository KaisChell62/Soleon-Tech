import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { jobPositions } from '../../data/content';
import { MapPin, Briefcase } from 'lucide-react';

export default function Careers() {
  const { t } = useTranslation();

  return (
    <div className="bg-neutral-950 min-h-screen text-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
             <h1 className="text-4xl md:text-6xl font-bold mb-6">
                 {t('careers.title')}<span className="text-indigo-500">{t('careers.highlight')}</span>.
             </h1>
             <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
                 {t('careers.subtitle')}
             </p>
        </div>

        <div className="grid gap-6 max-w-4xl mx-auto">
            {jobPositions.map((job, index) => (
                <motion.div
                    key={job.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-8 bg-neutral-900 border border-neutral-800 rounded-2xl hover:border-indigo-500 transition-colors group relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-indigo-500 font-bold text-sm">{t('careers.apply')} &rarr;</span>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                        <h2 className="text-2xl font-bold">{job.title}</h2>
                        <div className="flex gap-3">
                             <span className="px-3 py-1 rounded-full bg-neutral-800 text-xs font-medium flex items-center gap-2">
                                <Briefcase size={12} /> {job.type}
                             </span>
                             <span className="px-3 py-1 rounded-full bg-neutral-800 text-xs font-medium flex items-center gap-2">
                                <MapPin size={12} /> {job.location}
                             </span>
                        </div>
                    </div>
                    
                    <p className="text-neutral-400 mb-6 max-w-2xl">{job.description}</p>
                    
                    <div className="flex gap-2">
                        <span className="text-xs font-mono text-indigo-400 border border-indigo-500/30 px-2 py-1 rounded bg-indigo-500/10">
                            {job.department}
                        </span>
                    </div>

                </motion.div>
            ))}
        </div>

        <div className="mt-20 text-center">
             <p className="text-neutral-500">
                 {t('careers.spontaneous')} <a href="mailto:jobs@Soleon Tech.agency" className="text-white underline hover:text-indigo-400">{t('careers.spontaneousLink')}</a>
             </p>
        </div>

      </div>
    </div>
  );
}
