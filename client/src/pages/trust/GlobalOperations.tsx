import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import GlobalTrustIndex from '../../components/global/GlobalTrustIndex';
import CulturalAdaptation from '../../components/global/CulturalAdaptation';
import TimezoneAdvantage from '../../components/global/TimezoneAdvantage';

export default function GlobalOperations() {
  const { t } = useTranslation();

  return (
    <div className="bg-neutral-950 text-white pt-24 min-h-screen">
      
      {/* Hero Header */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/0 via-neutral-950/80 to-neutral-950" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              {t('global.title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">{t('global.highlight')}</span>
            </h1>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
              {t('global.subtitle')}
            </p>
          </motion.div>
        </div>
      </div>

      <CulturalAdaptation />
      <TimezoneAdvantage />
        <CulturalAdaptation />
        <TimezoneAdvantage />


      {/* Footer CTA */}
      <div className="py-24 bg-indigo-950 text-center">
         <div className="max-w-3xl mx-auto px-4">
           <h2 className="text-3xl font-bold mb-6">{t('global.cta.title')}</h2>
           <p className="text-indigo-200 mb-8">{t('global.cta.description')}</p>
           <a 
             href="/contact" 
             className="inline-block bg-white text-indigo-900 px-8 py-3 rounded-full font-bold hover:bg-neutral-100 transition shadow-xl"
           >
             {t('global.cta.button')}
           </a>
         </div>
      </div>
    </div>
  );
}
