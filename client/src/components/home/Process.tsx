import { motion, type Variants } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Code, Palette, Rocket, MessageCircle, CheckCircle2 } from 'lucide-react';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const stepReveal: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: EASE } },
};

const STEPS_META = [
  { icon: MessageCircle, gradient: 'from-blue-600 to-indigo-600', ring: 'ring-blue-500/20', glow: 'bg-blue-500/10' },
  { icon: Palette, gradient: 'from-purple-600 to-pink-600', ring: 'ring-purple-500/20', glow: 'bg-purple-500/10' },
  { icon: Code, gradient: 'from-emerald-600 to-teal-600', ring: 'ring-emerald-500/20', glow: 'bg-emerald-500/10' },
  { icon: Rocket, gradient: 'from-amber-500 to-orange-600', ring: 'ring-amber-500/20', glow: 'bg-amber-500/10' },
];

export default function Process() {
  const { t } = useTranslation('common');

  const steps = [
    { key: 'discovery', ...STEPS_META[0] },
    { key: 'design', ...STEPS_META[1] },
    { key: 'dev', ...STEPS_META[2] },
    { key: 'launch', ...STEPS_META[3] },
  ];

  return (
    <section className="py-24 md:py-32 bg-neutral-950 px-4 relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-indigo-600/5 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-4 border border-indigo-500/30 px-4 py-1.5 rounded-full bg-indigo-500/5"
          >
            Workflow
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6, ease: EASE }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-400"
          >
            {t('home.process.title')}
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Animated connecting line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: EASE, delay: 0.3 }}
            className="absolute top-[52px] left-[10%] w-[80%] h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent -translate-y-1/2 hidden md:block origin-left"
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-8"
          >
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div key={step.key} variants={stepReveal} className="relative flex flex-col items-center text-center group">
                  {/* Step number badge */}
                  <motion.span
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + idx * 0.15, type: 'spring', stiffness: 300 }}
                    className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest mb-3"
                  >
                    0{idx + 1}
                  </motion.span>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 8, y: -4 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white mb-6 shadow-lg ring-4 ${step.ring} cursor-pointer relative`}
                  >
                    <Icon size={32} strokeWidth={1.5} />
                    {/* Pulse ring */}
                    <motion.div
                      className={`absolute inset-0 rounded-2xl ${step.gradient} bg-gradient-to-br opacity-0`}
                      animate={{ opacity: [0, 0.3, 0], scale: [1, 1.3, 1.3] }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: idx * 0.5 }}
                    />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-2">{t(`home.process.steps.${step.key}.title`)}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed max-w-[220px]">{t(`home.process.steps.${step.key}.desc`)}</p>

                  {/* Check */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + idx * 0.12 }}
                    className="mt-4 flex items-center gap-1 text-[11px] text-emerald-500/60"
                  >
                    <CheckCircle2 size={12} />
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
