import { motion } from 'framer-motion';
import { Globe, Clock, Languages, MapPin, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { internationalData } from '../../data/trust';

export default function International() {
  const { t } = useTranslation();

  return (
    <div className="bg-neutral-950 min-h-screen text-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-6 text-sm"
          >
            <Globe size={14} />
            <span>{t('international.badge')}</span>
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t('international.title1')} <span className="text-blue-500">{t('international.highlight1')}</span>.<br/>
            {t('international.title2')} <span className="text-white">{t('international.highlight2')}</span>.
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            {t('international.subtitle')}
          </p>
        </div>

        {/* Global Reach Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            <div className="bg-neutral-900/50 p-8 rounded-2xl border border-neutral-800 flex flex-col items-center text-center">
                <Clock className="w-10 h-10 text-blue-500 mb-4" />
                <h3 className="text-2xl font-bold mb-2">{t('international.stats.support.title')}</h3>
                <p className="text-neutral-400">{t('international.stats.support.desc')}</p>
            </div>
            <div className="bg-neutral-900/50 p-8 rounded-2xl border border-neutral-800 flex flex-col items-center text-center">
                <Languages className="w-10 h-10 text-purple-500 mb-4" />
                <h3 className="text-2xl font-bold mb-2">{t('international.stats.multilingual.title')}</h3>
                <p className="text-neutral-400">{t('international.stats.multilingual.desc')}</p>
            </div>
            <div className="bg-neutral-900/50 p-8 rounded-2xl border border-neutral-800 flex flex-col items-center text-center">
                <Globe className="w-10 h-10 text-green-500 mb-4" />
                <h3 className="text-2xl font-bold mb-2">{t('international.stats.hubs.title')}</h3>
                <p className="text-neutral-400">{t('international.stats.hubs.desc')}</p>
            </div>
        </div>

        {/* Locations Grid */}
        <div className="mb-20">
            <h2 className="text-3xl font-bold mb-10 text-center">{t('international.locations')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {internationalData.map((loc: any, index: number) => (
                    <motion.div
                        key={loc.city}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:bg-neutral-800 transition-colors cursor-pointer"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 bg-neutral-800 rounded-lg group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-colors">
                                <MapPin size={24} />
                            </div>
                        </div>
                        <h3 className="text-xl font-bold mb-1">{loc.city}</h3>
                        <p className="text-neutral-400 text-sm mb-4">{loc.country}</p>
                        
                        <div className="flex items-center text-sm text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0">
                            <ArrowRight size={14} className="ml-1" />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>

        {/* Remote Culture */}
        <div className="bg-neutral-900 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
                <h2 className="text-3xl font-bold mb-4">{t('international.remote.title')}</h2>
                <p className="text-neutral-400 mb-6 leading-relaxed">
                    {t('international.remote.desc')}
                </p>
            </div>
            <div className="flex-1 w-full relative h-[300px] bg-neutral-800/50 rounded-xl overflow-hidden border border-neutral-700 flex items-center justify-center">
                 <div className="text-center">
                    <p className="text-6xl font-bold text-neutral-700 mb-2">100%</p>
                    <p className="text-neutral-500 uppercase tracking-widest text-sm">{t('international.remote.stat')}</p>
                 </div>
            </div>
        </div>

      </div>
    </div>
  );
}
