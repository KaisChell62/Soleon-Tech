import { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { Search, PenTool, Code, Rocket, Sparkles, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

/* ─── Animation presets ──────────────────────────────────────────────────── */
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.7, ease: EASE } }),
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardPop: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: EASE } },
};

const ICONS = [Search, PenTool, Code, Rocket];

/* ─── Stat Card ──────────────────────────────────────────────────────────── */
function StatCard({ stat, index }: { stat: { value: string; label: string; desc: string }; index: number }) {
  return (
    <motion.div
      variants={cardPop}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className="bg-neutral-900/60 backdrop-blur-sm border border-neutral-800 p-8 rounded-2xl text-center hover:border-indigo-500/40 transition-colors duration-500 relative overflow-hidden group cursor-default"
    >
      <div className="absolute -top-8 -right-8 w-32 h-32 bg-indigo-500/8 rounded-full blur-[60px] group-hover:scale-150 transition-transform duration-700" />
      <div className="relative z-10">
        <motion.div
          className="text-5xl font-black text-indigo-400 mb-3"
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 + index * 0.1, type: 'spring', stiffness: 200 }}
        >
          {stat.value}
        </motion.div>
        <div className="font-bold text-white text-lg mb-2">{stat.label}</div>
        <p className="text-sm text-neutral-500 leading-relaxed">{stat.desc}</p>
      </div>
    </motion.div>
  );
}

/* ─── Interactive Timeline Step ──────────────────────────────────────────── */
function TimelineStep({ step, index, isActive, onClick }: {
  step: { title: string; desc: string };
  index: number;
  isActive: boolean;
  onClick: () => void;
}) {
  const Icon = ICONS[index];

  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.15 * index, duration: 0.6, ease: EASE }}
      className={`w-full flex items-start gap-4 md:gap-6 text-left group cursor-pointer transition-all duration-500 p-4 md:p-5 rounded-2xl ${isActive ? 'bg-neutral-900/80 border border-indigo-500/30' : 'bg-transparent border border-transparent hover:bg-neutral-900/40'}`}
    >
      {/* Timeline dot + line */}
      <div className="flex flex-col items-center shrink-0">
        <motion.div
          animate={isActive ? { scale: [1, 1.15, 1] } : {}}
          transition={{ duration: 2, repeat: Infinity }}
          className={`w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center transition-all duration-500 ${isActive ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30' : 'bg-neutral-800 text-neutral-500 group-hover:bg-neutral-700 group-hover:text-neutral-300'}`}
        >
          <Icon size={22} strokeWidth={1.5} />
        </motion.div>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0 pt-1">
        <div className="flex items-center gap-3 mb-1.5">
          <span className={`text-[10px] font-mono uppercase tracking-widest transition-colors duration-300 ${isActive ? 'text-indigo-400' : 'text-neutral-600'}`}>
            0{index + 1}
          </span>
          <h3 className={`text-lg font-bold transition-colors duration-300 truncate ${isActive ? 'text-white' : 'text-neutral-400 group-hover:text-neutral-200'}`}>
            {step.title}
          </h3>
        </div>

        <AnimatePresence mode="wait">
          {isActive && (
            <motion.p
              key="desc"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="text-sm text-neutral-400 leading-relaxed pr-4"
            >
              {step.desc}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Active indicator */}
      <div className={`shrink-0 w-1.5 h-1.5 rounded-full mt-5 transition-all duration-500 ${isActive ? 'bg-indigo-400 shadow-[0_0_8px_rgba(99,102,241,0.6)]' : 'bg-neutral-700'}`} />
    </motion.button>
  );
}

/* ─── Progress Ring ──────────────────────────────────────────────────────── */
function ProgressRing({ activeStep, total }: { activeStep: number; total: number }) {
  const progress = ((activeStep + 1) / total) * 100;
  const circumference = 2 * Math.PI * 54;

  return (
    <div className="relative w-36 h-36 md:w-44 md:h-44">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
        <circle cx="60" cy="60" r="54" fill="none" stroke="rgb(38,38,38)" strokeWidth="3" />
        <motion.circle
          cx="60" cy="60" r="54" fill="none" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round"
          strokeDasharray={circumference}
          animate={{ strokeDashoffset: circumference - (progress / 100) * circumference }}
          transition={{ duration: 0.8, ease: EASE }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#818cf8" />
            <stop offset="100%" stopColor="#a78bfa" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.span
          key={activeStep}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-3xl md:text-4xl font-black text-white"
        >
          0{activeStep + 1}
        </motion.span>
        <span className="text-[10px] text-neutral-500 uppercase tracking-widest mt-1">/0{total}</span>
      </div>
    </div>
  );
}

/* ─── Main Component ─────────────────────────────────────────────────────── */
export default function WhyUs() {
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState(0);

  const stats = [
    { id: '1', ...t('whyUs.stats.custom', { returnObjects: true }) as { value: string; label: string; desc: string } },
    { id: '2', ...t('whyUs.stats.direct', { returnObjects: true }) as { value: string; label: string; desc: string } },
    { id: '3', ...t('whyUs.stats.passion', { returnObjects: true }) as { value: string; label: string; desc: string } },
    { id: '4', ...t('whyUs.stats.response', { returnObjects: true }) as { value: string; label: string; desc: string } },
  ];

  const methodology = [
    { id: 'audit', ...t('whyUs.methodology.audit', { returnObjects: true }) as { title: string; desc: string } },
    { id: 'design', ...t('whyUs.methodology.design', { returnObjects: true }) as { title: string; desc: string } },
    { id: 'dev', ...t('whyUs.methodology.dev', { returnObjects: true }) as { title: string; desc: string } },
    { id: 'launch', ...t('whyUs.methodology.launch', { returnObjects: true }) as { title: string; desc: string } },
  ];

  return (
    <div className="bg-neutral-950 min-h-screen text-white pt-24 pb-20 overflow-hidden">
      {/* Ambient glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[160px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Hero ──────────────────────────────────────────── */}
        <div className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-6 border border-indigo-500/30 px-4 py-1.5 rounded-full bg-indigo-500/5"
          >
            <Sparkles size={12} /> {t('whyUs.commitments')}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
          >
            {t('whyUs.title')}{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
              {t('whyUs.brand')}
            </span>{' '}?
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
            className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed"
          >
            {t('whyUs.subtitle')}
          </motion.p>
        </div>

        {/* ── Stats ────────────────────────────────────────── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-32"
        >
          {stats.map((stat, i) => (
            <StatCard key={stat.id} stat={stat} index={i} />
          ))}
        </motion.div>

        {/* ── Interactive Approach ──────────────────────────── */}
        <div className="mb-32">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}
            className="text-3xl md:text-4xl font-bold text-center mb-16 tracking-tight"
          >
            {t('whyUs.approach')}
          </motion.h2>

          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 max-w-5xl mx-auto">
            {/* Left: Progress ring */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE }}
              className="shrink-0"
            >
              <ProgressRing activeStep={activeStep} total={methodology.length} />
            </motion.div>

            {/* Right: Interactive steps */}
            <div className="flex-1 w-full space-y-2">
              {methodology.map((step, i) => (
                <TimelineStep
                  key={step.id}
                  step={step}
                  index={i}
                  isActive={activeStep === i}
                  onClick={() => setActiveStep(i)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ── CTA ──────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative bg-gradient-to-br from-indigo-900/30 via-neutral-900/50 to-purple-900/30 border border-white/10 rounded-3xl p-12 md:p-16 text-center overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-1/4 w-64 h-64 bg-indigo-500/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-purple-500/10 rounded-full blur-[80px]" />
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('whyUs.cta.title')}</h2>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-3.5 rounded-full font-bold hover:bg-neutral-100 transition-colors shadow-xl shadow-white/5"
            >
              {t('whyUs.cta.button')} <ArrowRight size={16} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
