import { motion, useScroll, useTransform, type Variants } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Globe, Cpu, Rocket, Smartphone, TrendingUp, Zap, Shield, BarChart3 } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

/* ─── Animation presets ──────────────────────────────────────────────────── */
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const cardReveal: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: EASE } },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

/* ─── Animated counter hook ──────────────────────────────────────────────── */
function useCounter(end: number, duration = 2000, trigger = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setValue(end); clearInterval(timer); }
      else setValue(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration, trigger]);
  return value;
}

/* ─── Floating Particles ─────────────────────────────────────────────────── */
function FloatingParticles() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-indigo-500/40"
          style={{ left: `${15 + i * 15}%`, top: `${20 + (i % 3) * 25}%` }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.4 }}
        />
      ))}
    </div>
  );
}

/* ─── Bar Chart Card Content ─────────────────────────────────────────────── */
function AnimatedChart() {
  const bars = [
    { h: 30, label: 'Q1' }, { h: 50, label: 'Q2' }, { h: 40, label: 'Q3' },
    { h: 70, label: 'Q4' }, { h: 55, label: 'Q5' }, { h: 90, label: 'Q6' }, { h: 80, label: 'Q7' },
  ];
  return (
    <div className="mt-6 rounded-xl bg-neutral-800/50 border border-neutral-700 p-4 relative overflow-hidden h-44">
      <div className="absolute top-3 left-4 flex items-center gap-2 text-xs text-neutral-500">
        <BarChart3 size={12} className="text-indigo-400" />
        <span>Growth Analytics</span>
        <motion.span
          className="ml-auto text-emerald-400 flex items-center gap-0.5 text-[10px] font-semibold"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ delay: 1.5 }}
        >
          <TrendingUp size={10} /> +127%
        </motion.span>
      </div>
      {/* Grid lines */}
      <div className="absolute inset-x-4 bottom-8 top-10 flex flex-col justify-between">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="border-b border-neutral-700/40 w-full" />
        ))}
      </div>
      <div className="absolute bottom-2 left-0 right-0 h-[75%] flex items-end justify-around px-4">
        {bars.map((bar, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <motion.div
              initial={{ height: '0%' }}
              whileInView={{ height: `${bar.h}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.08, ease: EASE }}
              className="w-6 md:w-8 bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-t-md opacity-80 hover:opacity-100 transition-opacity relative group/bar cursor-pointer"
            >
              <motion.span
                className="absolute -top-6 left-1/2 -translate-x-1/2 text-[9px] text-indigo-300 font-semibold opacity-0 group-hover/bar:opacity-100 transition-opacity"
              >
                {bar.h}%
              </motion.span>
            </motion.div>
            <span className="text-[9px] text-neutral-600 mt-0.5">{bar.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Globe Card Visual ──────────────────────────────────────────────────── */
function AnimatedGlobe() {
  return (
    <div className="h-28 w-28 rounded-full border-2 border-neutral-700 bg-neutral-950 flex items-center justify-center overflow-hidden relative group-hover:border-purple-500/60 transition-colors duration-500">
      <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/2000px-World_map_blank_without_borders.svg.png')] bg-cover opacity-20 animate-spin-slow" />
      {/* Pinging dots */}
      {[
        { top: '30%', left: '25%', color: 'bg-purple-400' },
        { top: '45%', left: '60%', color: 'bg-indigo-400' },
        { top: '55%', left: '40%', color: 'bg-pink-400' },
      ].map((dot, i) => (
        <motion.div
          key={i}
          className={`absolute w-1.5 h-1.5 ${dot.color} rounded-full z-10`}
          style={{ top: dot.top, left: dot.left }}
          animate={{ scale: [1, 1.8, 1], opacity: [0.8, 0.3, 0.8] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.6 }}
        />
      ))}
      <div className="w-2 h-2 bg-purple-500 rounded-full z-10 shadow-[0_0_10px_rgba(168,85,247,0.6)]" />
    </div>
  );
}

/* ─── Tech Stack Badges ──────────────────────────────────────────────────── */
function TechBadges() {
  const techs = ['React 19', 'Node.js', 'TypeScript', 'Tailwind'];
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {techs.map((tech, i) => (
        <motion.span
          key={tech}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 + i * 0.1, type: 'spring', stiffness: 300 }}
          className="text-[10px] px-2.5 py-1 rounded-full bg-pink-500/10 text-pink-400 border border-pink-500/20 font-medium"
        >
          {tech}
        </motion.span>
      ))}
    </div>
  );
}

/* ─── Main Component ─────────────────────────────────────────────────────── */
export default function Features() {
  const { t } = useTranslation('common');
  const targetRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ['start end', 'end start'] });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

  const projects = useCounter(150, 2200, inView);
  const uptime = useCounter(99, 1800, inView);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.3 });
    if (targetRef.current) observer.observe(targetRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={targetRef} className="py-32 px-4 relative z-10 bg-neutral-950">
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[120px]" />
      </div>
      <FloatingParticles />

      <motion.div style={{ opacity, scale }} className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-4 border border-indigo-500/30 px-4 py-1.5 rounded-full bg-indigo-500/5"
          >
            <Zap size={12} className="inline mr-1.5 -mt-0.5" />
            {t('home.features.title')}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-400"
          >
            {t('home.features.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
            className="text-neutral-400 text-xl max-w-2xl mx-auto"
          >
            {t('home.features.subtitle')}
          </motion.p>
        </div>

        {/* Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[650px]"
        >
          {/* ── Strategy Card (large left) ──────────────────── */}
          <motion.div
            variants={cardReveal}
            className="col-span-1 md:col-span-2 md:row-span-2 rounded-3xl bg-neutral-900 border border-neutral-800 p-8 flex flex-col justify-between group hover:border-indigo-500/50 transition duration-500 overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] -z-0 group-hover:bg-indigo-500/20 transition-colors duration-700" />
            <div className="relative z-10">
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4 cursor-pointer"
              >
                <Rocket size={24} />
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-2">{t('home.features.strategy.title')}</h3>
              <p className="text-neutral-400">{t('home.features.strategy.desc')}</p>
              {/* Mini stats */}
              <div className="flex gap-6 mt-5">
                <div>
                  <span className="text-2xl font-bold text-indigo-400">{projects}+</span>
                  <p className="text-[10px] text-neutral-500 uppercase tracking-wider mt-0.5">Projects</p>
                </div>
                <div>
                  <span className="text-2xl font-bold text-emerald-400">{uptime}%</span>
                  <p className="text-[10px] text-neutral-500 uppercase tracking-wider mt-0.5">Uptime</p>
                </div>
              </div>
            </div>
            <AnimatedChart />
          </motion.div>

          {/* ── Global Card (wide right) ────────────────────── */}
          <motion.div
            variants={cardReveal}
            className="col-span-1 md:col-span-2 rounded-3xl bg-neutral-900 border border-neutral-800 p-8 flex items-center justify-between group hover:border-purple-500/50 transition duration-500 overflow-hidden relative"
          >
            <div className="absolute top-0 left-0 w-48 h-48 bg-purple-500/5 rounded-full blur-[80px] -z-0" />
            <div className="max-w-[55%] relative z-10">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <motion.span whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                  <Globe className="text-purple-400" size={20} />
                </motion.span>
                {t('home.features.global.title')}
              </h3>
              <p className="text-sm text-neutral-400 mb-4">{t('home.features.global.desc')}</p>
              <div className="flex items-center gap-3">
                {['🇫🇷', '🇺🇸', '🇩🇪', '🇯🇵', '🇧🇷'].map((flag, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className="text-lg cursor-default hover:scale-125 transition-transform"
                  >
                    {flag}
                  </motion.span>
                ))}
                <span className="text-xs text-neutral-500">+8</span>
              </div>
            </div>
            <AnimatedGlobe />
          </motion.div>

          {/* ── Tech Card ───────────────────────────────────── */}
          <motion.div
            variants={cardReveal}
            className="col-span-1 rounded-3xl bg-neutral-900 border border-neutral-800 p-6 group hover:border-pink-500/50 transition duration-500 overflow-hidden relative"
          >
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-pink-500/5 rounded-full blur-[60px]" />
            <motion.div whileHover={{ rotate: -10 }} className="cursor-pointer">
              <Cpu className="text-pink-400 mb-4" size={28} />
            </motion.div>
            <h3 className="text-lg font-bold text-white mb-1">{t('home.features.tech.title')}</h3>
            <p className="text-xs text-neutral-500">{t('home.features.tech.desc')}</p>
            <TechBadges />
          </motion.div>

          {/* ── Mobile Card ─────────────────────────────────── */}
          <motion.div
            variants={cardReveal}
            className="col-span-1 rounded-3xl bg-neutral-900 border border-neutral-800 p-6 group hover:border-orange-500/50 transition duration-500 overflow-hidden relative"
          >
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-500/5 rounded-full blur-[60px]" />
            <motion.div whileHover={{ y: -4 }} className="cursor-pointer">
              <Smartphone className="text-orange-400 mb-4" size={28} />
            </motion.div>
            <h3 className="text-lg font-bold text-white mb-1">{t('home.features.mobile.title')}</h3>
            <p className="text-xs text-neutral-500 mb-4">{t('home.features.mobile.desc')}</p>
            {/* Mini device mockup */}
            <div className="flex items-end gap-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="w-8 h-14 rounded-md border border-orange-500/30 bg-orange-500/5 flex items-center justify-center"
              >
                <Shield size={10} className="text-orange-400" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 }}
                className="w-12 h-20 rounded-lg border border-orange-500/30 bg-orange-500/5 flex items-center justify-center"
              >
                <Smartphone size={14} className="text-orange-400" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
                className="w-16 h-10 rounded-md border border-orange-500/30 bg-orange-500/5 flex items-center justify-center"
              >
                <span className="text-[8px] text-orange-400 font-mono">Desktop</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
