import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, type Variants } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ShoppingBag, Search, Menu, User, Home, MessageCircle, Star, Zap, CreditCard, Truck, Coffee, Smartphone, Ticket, ArrowRight } from 'lucide-react';

/* ─── Animation presets ──────────────────────────────────────────────────── */
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.7, ease: EASE } }),
};

const phoneRevealLeft: Variants = {
  hidden: { opacity: 0, x: -80, rotateY: 25, scale: 0.85 },
  visible: { opacity: 1, x: 0, rotateY: 8, scale: 1, transition: { duration: 1, ease: EASE } },
};

const phoneRevealRight: Variants = {
  hidden: { opacity: 0, x: 80, rotateY: -25, scale: 0.85 },
  visible: { opacity: 1, x: 0, rotateY: -8, scale: 1, transition: { duration: 1, ease: EASE } },
};

const tooltipReveal: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { delay: 0.6, duration: 0.6, ease: 'easeOut' } },
};

/* ─── Western Phone Mock ─────────────────────────────────────────────────── */
function WesternPhone() {
  return (
    <div className="absolute inset-0 flex flex-col text-black">
      {/* Status Bar */}
      <div className="h-10 md:h-12 flex justify-between items-center px-4 md:px-6 pt-2">
        <span className="font-semibold text-xs md:text-sm">9:41</span>
        <div className="w-4 h-4 bg-black rounded-full text-[10px] flex items-center justify-center text-white">5G</div>
      </div>
      {/* Header */}
      <div className="px-4 md:px-6 mb-4 md:mb-6 mt-2">
        <div className="flex justify-between items-center mb-4 md:mb-6">
          <Menu size={20} strokeWidth={1.5} />
          <ShoppingBag size={20} strokeWidth={1.5} />
        </div>
        <h1 className="text-3xl md:text-4xl font-serif font-light leading-tight mb-1">LUMIER<br />PARIS</h1>
        <p className="text-neutral-500 text-[10px] tracking-[0.2em] uppercase mt-2">Spring / Summer 2026</p>
      </div>
      {/* Product */}
      <div className="mx-4 md:mx-6 h-60 md:h-72 bg-neutral-100 rounded-sm overflow-hidden relative mb-6 md:mb-8 shadow-sm">
        <img src="https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105" alt="Sneaker" />
        <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 text-white mix-blend-difference">
          <span className="block font-serif text-xl md:text-2xl italic">Air Max 97</span>
          <span className="text-[10px] uppercase tracking-widest border-b border-white pb-1">Limited Ed.</span>
        </div>
      </div>
      {/* Item row */}
      <div className="px-4 md:px-6">
        <div className="flex justify-between items-center border-b border-neutral-100 pb-3 md:pb-4">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="w-10 h-14 bg-neutral-100 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=100" className="w-full h-full object-cover" alt="" />
            </div>
            <div>
              <p className="font-serif text-base md:text-lg">Sneakers</p>
              <p className="text-[10px] md:text-xs text-neutral-400">4 items</p>
            </div>
          </div>
          <ArrowRight size={16} />
        </div>
      </div>
    </div>
  );
}

/* ─── Asian Phone Mock ───────────────────────────────────────────────────── */
const GRID_ICONS = [
  { icon: Truck, color: 'bg-blue-500', label: 'Express' },
  { icon: Zap, color: 'bg-yellow-500', label: 'Deals' },
  { icon: Coffee, color: 'bg-orange-500', label: 'Food' },
  { icon: Ticket, color: 'bg-purple-500', label: 'Tickets' },
  { icon: CreditCard, color: 'bg-green-500', label: 'Pay' },
  { icon: Smartphone, color: 'bg-indigo-500', label: 'Mobile' },
  { icon: ShoppingBag, color: 'bg-red-500', label: 'Mall' },
  { icon: Star, color: 'bg-pink-500', label: 'Vip' },
  { icon: Home, color: 'bg-cyan-500', label: 'Hotel' },
  { icon: User, color: 'bg-gray-500', label: 'More' },
];
const PRODUCTS = [
  { price: '¥899', sold: '5k+', img: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=200', title: 'Nike Air Max 97 White' },
  { price: '¥89', sold: '10k+', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=200', title: 'Sony Headphones' },
  { price: '¥12', sold: '50k+', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=200', title: 'Smart Watch' },
  { price: '¥1999', sold: '999+', img: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&q=80&w=200', title: 'Polaroid' },
];

function AsianPhone() {
  return (
    <div className="absolute inset-0 flex flex-col">
      <div className="h-6 md:h-8 w-full bg-[#ff5000]" />
      {/* Header */}
      <div className="bg-gradient-to-b from-[#ff5000] to-[#ff8000] px-3 md:px-4 pb-3 md:pb-4 text-white rounded-b-xl md:rounded-b-2xl shadow-lg relative z-20">
        <div className="flex justify-between items-center mb-3 md:mb-4 gap-2 md:gap-3">
          <div className="flex-1 flex items-center gap-2 bg-white text-neutral-500 h-8 md:h-9 rounded-full px-3 shadow-inner">
            <Search size={14} className="text-[#ff5000]" />
            <span className="text-[10px] md:text-xs truncate">Nike Air Max 97</span>
            <div className="ml-auto bg-[#ff5000] text-white text-[9px] md:text-[10px] px-2 py-0.5 rounded-full">Search</div>
          </div>
          <MessageCircle size={20} />
        </div>
      </div>
      {/* Grid icons */}
      <div className="bg-white mx-2 md:mx-3 -mt-6 p-3 md:p-4 rounded-xl shadow-sm relative z-30 grid grid-cols-5 gap-y-2 md:gap-y-3 gap-x-1 md:gap-x-2">
        {GRID_ICONS.map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.8 + i * 0.04, type: 'spring', stiffness: 300 }} className="flex flex-col items-center gap-1">
            <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl flex items-center justify-center text-white shadow-sm ${item.color}`}>
              <item.icon size={14} fill="currentColor" fillOpacity={0.2} />
            </div>
            <span className="text-[8px] md:text-[9px] text-neutral-600 font-medium scale-90">{item.label}</span>
          </motion.div>
        ))}
      </div>
      {/* Products grid */}
      <div className="grid grid-cols-2 gap-2 p-2 md:p-3 pb-20 md:pb-24 overflow-y-auto">
        <div className="col-span-2 flex justify-between items-center px-1 mb-1">
          <span className="font-bold text-gray-800 text-xs md:text-sm">Recommended</span>
          <span className="text-[10px] md:text-xs text-gray-400">See All &gt;</span>
        </div>
        {PRODUCTS.map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
            className="bg-white p-1.5 md:p-2 rounded-lg shadow-sm border border-neutral-100 hover:shadow-md transition-shadow cursor-pointer group/product">
            <div className="bg-neutral-100 h-24 md:h-28 rounded-lg mb-2 relative overflow-hidden">
              <img src={item.img} className="w-full h-full object-cover group-hover/product:scale-110 transition-transform" alt="" />
              {i === 0 && <span className="absolute top-1 left-1 bg-red-600 text-white text-[8px] px-1.5 py-0.5 rounded animate-pulse">LIVE</span>}
            </div>
            <div className="text-[9px] md:text-[10px] text-gray-800 font-medium leading-tight mb-1 h-6 overflow-hidden">{item.title}</div>
            <div className="flex justify-between items-end mt-1">
              <span className="text-[#ff5000] font-bold text-xs"><span className="text-[8px]">¥</span>{item.price.replace('¥', '')}</span>
              <span className="text-[8px] md:text-[9px] text-neutral-400">{item.sold} sold</span>
            </div>
          </motion.div>
        ))}
      </div>
      {/* Bottom nav */}
      <div className="absolute bottom-0 w-full bg-white border-t border-neutral-200 py-2 md:py-3 px-4 md:px-6 flex justify-between items-center z-40 text-xs">
        <div className="flex flex-col items-center text-[#ff5000]"><Home size={18} fill="#ff5000" fillOpacity={0.1} /><span className="scale-75 font-bold">Home</span></div>
        <div className="flex flex-col items-center text-neutral-400"><MessageCircle size={18} /><span className="scale-75">Chat</span></div>
        <div className="flex flex-col items-center text-neutral-400"><ShoppingBag size={18} /><span className="scale-75">Cart</span></div>
        <div className="flex flex-col items-center text-neutral-400"><User size={18} /><span className="scale-75">Me</span></div>
      </div>
    </div>
  );
}

/* ─── Animated toggle button ─────────────────────────────────────────────── */
function DesignToggle({ active, onToggle }: { active: 'west' | 'east'; onToggle: () => void }) {
  const { t } = useTranslation();
  return (
    <motion.button
      onClick={onToggle}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className="md:hidden relative mx-auto flex items-center w-64 h-12 rounded-full bg-neutral-900 border border-neutral-700 overflow-hidden mb-10"
    >
      <motion.div
        className="absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full bg-gradient-to-r from-indigo-600 to-purple-600"
        animate={{ left: active === 'west' ? 4 : 'calc(50%)' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      />
      <span className={`relative z-10 flex-1 text-center text-sm font-medium transition-colors ${active === 'west' ? 'text-white' : 'text-neutral-500'}`}>
        {t('global.culture.western_label')}
      </span>
      <span className={`relative z-10 flex-1 text-center text-sm font-medium transition-colors ${active === 'east' ? 'text-white' : 'text-neutral-500'}`}>
        {t('global.culture.asian_label')}
      </span>
    </motion.button>
  );
}

/* ─── Main Component ─────────────────────────────────────────────────────── */
export default function CulturalAdaptation() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileView, setMobileView] = useState<'west' | 'east'>('west');

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const xLeft = useTransform(scrollYProgress, [0, 1], [-15, 15]);
  const xRight = useTransform(scrollYProgress, [0, 1], [15, -15]);

  return (
    <section ref={ref} className="py-16 md:py-24 bg-neutral-950 overflow-hidden relative">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px]" />
      </div>

      {/* Heading */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 md:mb-20 text-center relative z-10">
        <motion.span variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}
          className="inline-block text-xs md:text-sm font-semibold text-indigo-400 uppercase tracking-widest mb-4 border border-indigo-500/30 px-4 py-1.5 rounded-full bg-indigo-500/5">
          UX / UI
        </motion.span>
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
          className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-500">
          {t('global.culture.title')}
        </motion.h2>
        <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}
          className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          {t('global.culture.subtitle')}
        </motion.p>
      </div>

      {/* Mobile toggle */}
      <DesignToggle active={mobileView} onToggle={() => setMobileView(v => v === 'west' ? 'east' : 'west')} />

      {/* Phones */}
      <div className="relative min-h-[750px] md:min-h-0 md:h-[700px] flex flex-col md:flex-row justify-center items-center gap-12 md:gap-16 pb-12 md:pb-0">

        {/* ── Western Phone ─────────────────────────────────── */}
        <AnimatePresence mode="wait">
          {(!isMobile || mobileView === 'west') && (
            <motion.div key="west" className="relative flex flex-col items-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, x: -60 }}>
              <motion.div
                variants={phoneRevealLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}
                style={{ x: !isMobile ? xLeft : undefined }}
                className="w-[280px] md:w-[320px] aspect-[9/19] bg-white rounded-[2.5rem] md:rounded-[3rem] shadow-[0_20px_50px_-12px_rgba(255,255,255,0.1)] border-[6px] md:border-[8px] border-neutral-900 overflow-hidden relative cursor-pointer hover:shadow-[0_30px_60px_-15px_rgba(255,255,255,0.2)] transition-shadow duration-500"
              >
                <WesternPhone />
              </motion.div>
              {/* Label */}
              <motion.div variants={tooltipReveal} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="mt-8 md:mt-6 text-center max-w-[280px] md:max-w-[300px]">
                <h3 className="text-white font-bold mb-2 flex items-center justify-center gap-2 text-lg">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" /> {t('global.culture.western_label')}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed bg-neutral-900/50 p-4 rounded-xl border border-neutral-800 backdrop-blur-sm">
                  {t('global.culture.explanation.western')}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── VS Badge (desktop) ────────────────────────────── */}
        <motion.div initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
          className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 shadow-[0_0_40px_rgba(99,102,241,0.4)] text-white font-black text-lg z-20"
        >
          VS
        </motion.div>

        {/* ── Asian Phone ───────────────────────────────────── */}
        <AnimatePresence mode="wait">
          {(!isMobile || mobileView === 'east') && (
            <motion.div key="east" className="relative flex flex-col items-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, x: 60 }}>
              <motion.div
                variants={phoneRevealRight} initial="hidden" whileInView="visible" viewport={{ once: true }}
                style={{ x: !isMobile ? xRight : undefined }}
                className="w-[280px] md:w-[320px] aspect-[9/19] bg-[#f5f5f5] rounded-[2.5rem] md:rounded-[3rem] shadow-[0_20px_50px_-12px_rgba(255,80,0,0.2)] border-[6px] md:border-[8px] border-indigo-600 overflow-hidden relative cursor-pointer hover:shadow-[0_30px_60px_-15px_rgba(255,80,0,0.3)] transition-shadow duration-500"
              >
                <AsianPhone />
              </motion.div>
              {/* Label */}
              <motion.div variants={tooltipReveal} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="mt-8 md:mt-6 text-center max-w-[280px] md:max-w-[300px]">
                <h3 className="text-white font-bold mb-2 flex items-center justify-center gap-2 text-lg">
                  <span className="w-2 h-2 rounded-full bg-[#ff5000] animate-pulse" /> {t('global.culture.asian_label')}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed bg-neutral-900/50 p-4 rounded-xl border border-neutral-800 backdrop-blur-sm">
                  {t('global.culture.explanation.asian')}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
