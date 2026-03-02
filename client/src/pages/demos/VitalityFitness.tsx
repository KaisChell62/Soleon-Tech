import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Activity, Download, Menu, X } from 'lucide-react';

// Components
import PhoneAppMockup from '../../components/demos/vitality/PhoneAppMockup';
import Features from '../../components/demos/vitality/Features';
import HowItWorks from '../../components/demos/vitality/HowItWorks';
import Reviews from '../../components/demos/vitality/Reviews';

// Data
import { vitalityText } from '../../data/demos/vitality';

export default function VitalityFitness() {
  const { i18n } = useTranslation();
  // Safe access to translation object with fallback to 'en'
  const langKey = i18n.language ? i18n.language.split('-')[0] : 'en';
  const t = vitalityText[langKey] || vitalityText.en;
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className='min-h-screen bg-black text-white font-sans selection:bg-lime-500/30 overflow-x-hidden'>
      {/* Navbar */}
      <nav className='fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10'>
        <div className='max-w-7xl mx-auto px-6 h-16 flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <div className='w-8 h-8 rounded-lg bg-lime-500 flex items-center justify-center text-black'>
              <Activity size={18} strokeWidth={3} />
            </div>
            <span className='font-bold text-lg tracking-tight'>Vitality</span>
          </div>
          <div className='hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400'>
            <a href='#features' className='hover:text-white transition-colors'>{t.nav_features}</a>
            <a href='#how' className='hover:text-white transition-colors'>{t.nav_how}</a>
            <a href='#reviews' className='hover:text-white transition-colors'>{t.nav_reviews}</a>
          </div>
          <div className='hidden md:block'>
            <button className='bg-white text-black px-5 py-2 rounded-full text-xs font-bold hover:bg-neutral-200 transition-colors'>
              {t.hero_sub_cta}
            </button>
          </div>
          <button className='md:hidden text-white' onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className='md:hidden bg-neutral-900 border-b border-white/10 overflow-hidden'
            >
              <div className='flex flex-col p-6 gap-4 text-center'>
                <a href='#features' onClick={() => setMobileMenuOpen(false)}>{t.nav_features}</a>
                <a href='#how' onClick={() => setMobileMenuOpen(false)}>{t.nav_how}</a>
                <a href='#reviews' onClick={() => setMobileMenuOpen(false)}>{t.nav_reviews}</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className='pt-32 pb-20 px-6 max-w-7xl mx-auto'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          <div className='text-center lg:text-left order-2 lg:order-1'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-500/10 border border-lime-500/20 text-lime-400 text-[10px] font-bold uppercase tracking-wider mb-6'
            >
              <span className='w-1.5 h-1.5 rounded-full bg-lime-500 animate-pulse' />
              {t.hero_badge}
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className='text-4xl md:text-6xl font-black tracking-tight mb-6 leading-[1.1]'
            >
              {t.hero_title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className='text-lg text-neutral-400 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed'
            >
              {t.hero_subtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className='flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4'
            >
              <button className='flex items-center gap-2 bg-lime-500 text-black px-8 py-4 rounded-full font-bold hover:bg-lime-400 transition-all hover:scale-105 active:scale-95 w-full sm:w-auto justify-center'>
                <Download size={18} />
                {t.hero_cta}
              </button>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
            className='flex items-center justify-center order-1 lg:order-2 mb-10 lg:mb-0 relative'
          >
            <div className='absolute inset-0 bg-lime-500/20 blur-[80px] rounded-full opacity-60 pointer-events-none' />
            <div className='relative w-[300px] h-[600px] bg-neutral-900 rounded-[40px] p-2 border-[4px] border-neutral-800 shadow-2xl rotate-[-3deg] hover:rotate-0 transition-transform duration-500'>
              <div className='w-full h-full bg-black rounded-[32px] overflow-hidden border border-neutral-800 relative ring-1 ring-white/5'>
                <PhoneAppMockup t={t} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <Features t={t} />

      {/* How It Works Section */}
      <HowItWorks t={t} />

      {/* Reviews Section */}
      <Reviews t={t} />

      {/* Footer */}
      <footer className='py-8 bg-neutral-900 border-t border-white/5 text-center text-neutral-500 text-sm'>
        <div className='flex justify-center gap-6 mb-4 font-bold'>
          <a href='#' className='hover:text-lime-400 transition-colors'>{t.footer_legal}</a>
          <a href='#' className='hover:text-lime-400 transition-colors'>{t.footer_privacy}</a>
        </div>
        <p className='opacity-60'>{t.footer_copy}</p>
      </footer>
    </div>
  );
}
