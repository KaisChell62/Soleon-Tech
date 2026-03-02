import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import InteractivePhone from '../components/services/InteractivePhone';
import WebsitePreview from '../components/services/WebsitePreview';
import LogoGenerator from '../components/services/LogoGenerator';
import { ArrowDown } from 'lucide-react';

export default function Services() {
  const { t } = useTranslation('common');

  return (
    <div className="bg-neutral-950">
      
      {/* Header Section */}
      <section className="min-h-[50vh] flex flex-col items-center justify-center text-center px-4">
        <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-br from-white to-neutral-500"
        >
          {t('services.title')}
        </motion.h1>
        <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-neutral-400 max-w-2xl"
        >
          {t('services.subtitle')}
        </motion.p>
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-12 animate-bounce text-neutral-600"
        >
            <ArrowDown size={24} />
        </motion.div>
      </section>

      {/* Service 1: Mobile Apps */}
      <section className="min-h-screen flex items-center py-20 px-4 md:px-0 bg-neutral-900/30 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            <div className="order-2 md:order-1 flex justify-center">
                <InteractivePhone />
            </div>

            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="order-1 md:order-2 text-center md:text-left p-6"
            >
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">{t('services.mobile.title')}</h2>
                <p className="text-lg text-neutral-400 leading-relaxed max-w-lg mb-8">
                    {t('services.mobile.desc')}
                </p>
                <ul className="space-y-4 text-neutral-300 text-left w-fit mx-auto md:mx-0">
                    <li className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-indigo-500" /> {t('services.mobile.features.native')}
                    </li>
                    <li className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-indigo-500" /> {t('services.mobile.features.cross')}
                    </li>
                    <li className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-indigo-500" /> {t('services.mobile.features.uiux')}
                    </li>
                </ul>
            </motion.div>
        
        </div>
      </section>

      {/* Service 2: Websites */}
      <section className="min-h-screen flex items-center py-20 px-4 md:px-0 bg-neutral-950 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center md:text-left p-6"
            >
                 <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">{t('services.web.title')}</h2>
                 <p className="text-lg text-neutral-400 leading-relaxed max-w-lg mb-8">
                    {t('services.web.desc')}
                </p>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                    {['React', 'Next.js', 'Typescript', 'Tailwind', 'Three.js'].map(tag => (
                        <span key={tag} className="px-3 py-1 rounded-full border border-neutral-800 text-sm text-neutral-400 bg-neutral-900">
                            {tag}
                        </span>
                    ))}
                </div>
            </motion.div>

            <div className="flex justify-center">
                <WebsitePreview />
            </div>
        
        </div>
      </section>

      {/* Service 3: Branding / Identity */}
      <section className="min-h-screen flex items-center py-20 px-4 md:px-0 bg-neutral-900/30 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            <div className="order-2 md:order-1 flex justify-center">
                <LogoGenerator />
            </div>

            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="order-1 md:order-2 text-center md:text-left p-6"
            >
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">{t('services.logo.title')}</h2>
                <p className="text-lg text-neutral-400 leading-relaxed max-w-lg mb-8">
                    {t('services.logo.desc')}
                </p>
                 <ul className="space-y-4 text-neutral-300 text-left w-fit mx-auto md:mx-0">
                    <li className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-pink-500" /> {t('services.logo.features.vector')}
                    </li>
                    <li className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-pink-500" /> {t('services.logo.features.guidelines')}
                    </li>
                    <li className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-pink-500" /> {t('services.logo.features.revisions')}
                    </li>
                </ul>
            </motion.div>
        
        </div>
      </section>

    </div>
  );
}