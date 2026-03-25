import { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Send, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { packCategories } from '../../data/interactive';
import QuoteModal from '../../components/QuoteModal';
import type { QuoteItem } from '../../api/contact';

const EUR_TO_USD = 1.08;

export default function PacksConfigurator() {
  const { t, i18n } = useTranslation('common');
  const [selections, setSelections] = useState<Record<string, string | string[]>>({});
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  const isFr = i18n.language === 'fr';
  const symbol = isFr ? '€' : '$';

  const convert = useCallback((eur: number) => isFr ? eur : Math.round(eur * EUR_TO_USD), [isFr]);

  const toggleSelection = (categoryId: string, optionId: string, type: 'single' | 'multiple') => {
    setSelections(prev => {
      if (type === 'single') return { ...prev, [categoryId]: optionId };
      const currentArray = (Array.isArray(prev[categoryId]) ? prev[categoryId] : []) as string[];
      if (currentArray.includes(optionId)) {
        return { ...prev, [categoryId]: currentArray.filter(id => id !== optionId) };
      }
      return { ...prev, [categoryId]: [...currentArray, optionId] };
    });
  };

  const { oneTime, monthly } = useMemo(() => {
    let oneTime = 0;
    let monthly = 0;
    packCategories.forEach(cat => {
      const sel = selections[cat.id];
      if (!sel) return;
      const isMonthly = cat.id === 'maintenance';
      if (Array.isArray(sel)) {
        sel.forEach(optId => {
          const opt = cat.options.find(o => o.id === optId);
          if (opt) isMonthly ? (monthly += opt.price) : (oneTime += opt.price);
        });
      } else {
        const opt = cat.options.find(o => o.id === sel);
        if (opt) isMonthly ? (monthly += opt.price) : (oneTime += opt.price);
      }
    });
    return { oneTime, monthly };
  }, [selections]);

  const formatPrice = (price: number, categoryId: string, optionId: string) => {
    if (price === 0) return categoryId === 'maintenance' ? `0 ${symbol}` : t('configurator.included');
    
    // CUSTOM FIX: Remove specific 500 value if present
    const converted = convert(price);
    if (converted === 500) return ''; 

    const formatted = converted.toLocaleString();
    if (categoryId === 'type') {
      return optionId === 'saas' ? `${t('configurator.from')} ${formatted} ${symbol}` : `${formatted} ${symbol}`;
    }
    if (categoryId === 'maintenance') return `${formatted} ${symbol}/${t('configurator.month')}`;
    return `+${formatted} ${symbol}`;
  };

  // Build quote items — send raw i18n keys (not translated text).
  // The backend translates them server-side using the quote language.
  const buildQuoteItems = (): QuoteItem[] => {
    const items: QuoteItem[] = [];
    packCategories.forEach(cat => {
      const sel = selections[cat.id];
      if (!sel) return;
      if (Array.isArray(sel)) {
        sel.forEach(optId => {
          const opt = cat.options.find(o => o.id === optId);
          if (opt) items.push({ category: cat.title, option: opt.label, price: convert(opt.price) });
        });
      } else {
        const opt = cat.options.find(o => o.id === sel);
        if (opt) items.push({ category: cat.title, option: opt.label, price: convert(opt.price) });
      }
    });
    return items;
  };

  return (
    <div className="bg-neutral-950 min-h-screen text-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-6 text-sm font-medium"
          >
            <Sparkles size={14} />
            {t('configurator.badge')}
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >{t('configurator.title')}</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
            className="text-xl text-neutral-400"
          >{t('configurator.subtitle')}</motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Configurator Options */}
          <div className="flex-1 space-y-12">
            {packCategories.map((category, catIdx) => (
              <motion.div key={category.id}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: catIdx * 0.1 }}
              >
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-indigo-500/10 flex items-center justify-center text-sm text-indigo-400 border border-indigo-500/30">
                    {catIdx + 1}
                  </span>
                  {t(category.title)}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.options.map((option) => {
                    const isSelected = category.type === 'single'
                      ? selections[category.id] === option.id
                      : (selections[category.id] as string[])?.includes(option.id);
                    return (
                      <motion.div key={option.id}
                        whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}
                        onClick={() => toggleSelection(category.id, option.id, category.type)}
                        className={`cursor-pointer p-6 rounded-xl border transition-all duration-200 ${
                          isSelected
                            ? 'bg-indigo-500/10 border-indigo-500/50 shadow-lg shadow-indigo-500/5'
                            : 'bg-neutral-900/50 border-neutral-800 hover:border-neutral-600'
                        }`}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <span className="font-bold text-lg">{t(option.label)}</span>
                          {isSelected && (
                            <div className="bg-indigo-500 rounded-full p-1">
                              <Check size={12} className="text-white" />
                            </div>
                          )}
                        </div>
                        <div className="text-indigo-400 font-mono text-sm mb-2">
                          {formatPrice(option.price, category.id, option.id)}
                        </div>
                        {option.description && (
                          <p className="text-neutral-500 text-sm leading-relaxed">{t(option.description)}</p>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sticky Summary Sidebar */}
          <div className="lg:w-[400px]">
            <div className="sticky top-24 bg-neutral-900/80 border border-neutral-800 rounded-2xl p-8 shadow-2xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6">{t('configurator.summary')}</h3>
              <div className="space-y-4 mb-8 min-h-[100px]">
                {Object.keys(selections).length === 0 ? (
                  <p className="text-neutral-500 text-sm italic">{t('configurator.empty')}</p>
                ) : (
                  packCategories.map(cat => {
                    const sel = selections[cat.id];
                    if (!sel || (Array.isArray(sel) && sel.length === 0)) return null;
                    return (
                      <div key={cat.id} className="border-b border-neutral-800 pb-4 last:border-0 last:pb-0">
                        <p className="text-xs text-neutral-500 uppercase tracking-wider mb-2">{t(cat.title)}</p>
                        {Array.isArray(sel) ? (
                          sel.map(optId => {
                            const opt = cat.options.find(o => o.id === optId);
                            return opt ? (
                              <div key={optId} className="flex justify-between text-sm mb-1">
                                <span>{t(opt.label)}</span>
                                <span className="text-neutral-400">+{convert(opt.price)}{symbol}</span>
                              </div>
                            ) : null;
                          })
                        ) : (
                          (() => {
                            const opt = cat.options.find(o => o.id === sel);
                            return opt ? (
                              <div className="flex justify-between text-sm">
                                <span>{t(opt.label)}</span>
                                <span className="text-neutral-400">{formatPrice(opt.price, cat.id, opt.id)}</span>
                              </div>
                            ) : null;
                          })()
                        )}
                      </div>
                    );
                  })
                )}
              </div>

              {/* One-time cost */}
              <div className="bg-neutral-950 rounded-xl p-6 mb-4 border border-neutral-800">
                <p className="text-neutral-400 text-sm mb-1">{t('configurator.total')}</p>
                <div className="flex items-baseline gap-2">
                  <AnimatePresence mode="wait">
                    {convert(oneTime) !== 500 && (
                      <motion.span key={oneTime}
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                        className="text-4xl font-bold text-white"
                      >
                        {convert(oneTime).toLocaleString()}
                      </motion.span>
                    )}
                  </AnimatePresence>
                  <span className="text-xl text-neutral-500">{symbol}</span>
                </div>
              </div>

              {/* Monthly cost (only if maintenance selected) */}
              {monthly > 0 && (
                <div className="bg-indigo-500/5 rounded-xl p-4 mb-6 border border-indigo-500/10">
                  <p className="text-neutral-400 text-xs mb-1">{t('configurator.monthly')}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-indigo-400">{convert(monthly)}</span>
                    <span className="text-sm text-neutral-500">{symbol}/{t('configurator.month')}</span>
                  </div>
                </div>
              )}

              <motion.button whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}
                onClick={() => setQuoteModalOpen(true)}
                className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-indigo-600/20"
              >
                <Send size={18} />
                {t('configurator.submit')}
              </motion.button>
              <p className="text-center text-xs text-neutral-500 mt-4">{t('configurator.disclaimer')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quote modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        items={buildQuoteItems()}
        oneTimeTotal={oneTime}
        monthlyTotal={monthly}
        currency={symbol}
      />
    </div>
  );
}
