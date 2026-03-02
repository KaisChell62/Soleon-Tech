import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle, Clock, CreditCard, Wrench, Code, Search, Palette, Shield, Rocket, type LucideIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useState, useMemo } from 'react';

type Category = 'all' | 'process' | 'pricing' | 'tech' | 'support';

interface FaqItem {
  id: string;
  key: string;
  category: Category;
  icon: LucideIcon;
}

const FAQS: FaqItem[] = [
  { id: 'timeline', key: 'faq.timeline', category: 'process', icon: Clock },
  { id: 'process', key: 'faq.process', category: 'process', icon: Rocket },
  { id: 'cost', key: 'faq.cost', category: 'pricing', icon: CreditCard },
  { id: 'payment', key: 'faq.payment', category: 'pricing', icon: CreditCard },
  { id: 'tech', key: 'faq.tech', category: 'tech', icon: Code },
  { id: 'seo', key: 'faq.seo', category: 'tech', icon: Search },
  { id: 'design', key: 'faq.design', category: 'tech', icon: Palette },
  { id: 'support', key: 'faq.support', category: 'support', icon: Wrench },
  { id: 'security', key: 'faq.security', category: 'support', icon: Shield },
  { id: 'revision', key: 'faq.revision', category: 'process', icon: Wrench },
];

const CATEGORIES: { key: Category; icon: LucideIcon }[] = [
  { key: 'all', icon: Search },
  { key: 'process', icon: Rocket },
  { key: 'pricing', icon: CreditCard },
  { key: 'tech', icon: Code },
  { key: 'support', icon: Wrench },
];

function AccordionItem({ faq, isOpen, onToggle, index }: {
  faq: FaqItem; isOpen: boolean; onToggle: () => void; index: number;
}) {
  const { t } = useTranslation();
  const Icon = faq.icon;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className={`rounded-2xl border overflow-hidden transition-colors duration-300 ${
        isOpen
          ? 'bg-neutral-900/80 border-indigo-500/30 shadow-lg shadow-indigo-500/5'
          : 'bg-neutral-900/40 border-neutral-800/50 hover:border-neutral-700/50'
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 md:p-6 text-left group"
      >
        <div className="flex items-center gap-4 min-w-0">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
            isOpen
              ? 'bg-indigo-500/20 text-indigo-400 shadow-lg shadow-indigo-500/10'
              : 'bg-neutral-800/50 text-neutral-500 group-hover:text-indigo-400'
          }`}>
            <Icon size={18} />
          </div>
          <span className={`font-semibold text-base md:text-lg transition-colors ${
            isOpen ? 'text-white' : 'text-neutral-300 group-hover:text-white'
          }`}>
            {t(`${faq.key}.question`)}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="shrink-0 ml-4"
        >
          <ChevronDown size={20} className={`transition-colors ${isOpen ? 'text-indigo-400' : 'text-neutral-600'}`} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 md:px-6 pb-6 pt-0">
              <div className="ml-14 text-neutral-400 leading-relaxed border-t border-neutral-800/50 pt-4">
                {t(`${faq.key}.answer`)}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const { t } = useTranslation();
  const [openId, setOpenId] = useState<string | null>('timeline');
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const filtered = useMemo(
    () => activeCategory === 'all' ? FAQS : FAQS.filter(f => f.category === activeCategory),
    [activeCategory]
  );

  return (
    <div className="bg-neutral-950 min-h-screen text-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-6 text-sm font-medium"
          >
            <MessageCircle size={14} />
            {t('faq.badge')}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            {t('faq.title')}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              {t('faq.highlight')}
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-neutral-400 max-w-2xl mx-auto"
          >
            {t('faq.subtitle')}
          </motion.p>
        </div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {CATEGORIES.map(cat => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => { setActiveCategory(cat.key); setOpenId(null); }}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 shadow-lg shadow-indigo-500/10'
                    : 'bg-neutral-900/50 text-neutral-500 border border-neutral-800/50 hover:text-neutral-300 hover:border-neutral-700'
                }`}
              >
                <Icon size={14} />
                {t(`faq.categories.${cat.key}`)}
              </button>
            );
          })}
        </motion.div>

        {/* Counter */}
        <motion.div layout className="text-sm text-neutral-600 mb-6 text-center">
          {filtered.length} {t('faq.results')}
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-3 mb-20">
          <AnimatePresence mode="popLayout">
            {filtered.map((faq, i) => (
              <AccordionItem
                key={faq.id}
                faq={faq}
                isOpen={openId === faq.id}
                onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
                index={i}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl p-8 md:p-12 text-center border border-indigo-500/20 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/40 to-purple-950/40" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl" />

          <div className="relative z-10">
            <div className="w-16 h-16 bg-neutral-900 rounded-2xl flex items-center justify-center mx-auto mb-6 text-indigo-400 shadow-xl shadow-indigo-900/20 border border-neutral-800">
              <MessageCircle size={28} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{t('faq.cta.title')}</h2>
            <p className="text-neutral-400 mb-8 max-w-md mx-auto">{t('faq.cta.subtitle')}</p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-all shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/30 hover:scale-105"
            >
              {t('faq.cta.button')}
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
