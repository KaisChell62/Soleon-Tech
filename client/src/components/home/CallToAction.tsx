import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function CallToAction() {
  const { t } = useTranslation('common');

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-neutral-950 to-indigo-950/20 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[140px]"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 25, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-purple-600/10 rounded-full blur-[120px]"
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-indigo-400/30"
            style={{ left: `${20 + i * 15}%`, top: `${30 + (i % 3) * 20}%` }}
            animate={{ y: [0, -25, 0], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 3 + i * 0.7, repeat: Infinity, delay: i * 0.5 }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 200 }}
          className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-8 border border-indigo-500/30 px-4 py-1.5 rounded-full bg-indigo-500/5"
        >
          <Sparkles size={12} /> Ready?
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="text-4xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-neutral-400"
        >
          {t('home.cta_final.title')}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 bg-white text-black rounded-full font-bold text-lg shadow-xl shadow-white/10 hover:shadow-white/20 transition-shadow"
            >
              {t('home.cta_final.button')}
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </motion.div>

        {/* Trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-xs text-neutral-600"
        >
          ✦ 100% custom code &nbsp;·&nbsp; 24h response &nbsp;·&nbsp; No templates
        </motion.p>
      </div>
    </section>
  );
}
