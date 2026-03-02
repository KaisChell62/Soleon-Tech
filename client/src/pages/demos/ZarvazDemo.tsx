import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const txt: Record<string, Record<string, string>> = {
  fr: {
    collection:'COLLECTION', maison:'MAISON', contact:'CONTACT', subtitle:'Montres Précieuses', headline:'L’Excellence Zarvaz', cta:'Découvrir la Collection', theCollection:'La Collection', all:'Tout', classic:'Classique', sport:'Sport', complication:'Complication', limited:'Édition Limitée', quickView:'Aperçu', heritage:'Savoir-faire Suisse', heritageText:'Chaque Zarvaz est un bijou, conçu dans la tradition horlogère.', precision:'Précision', lifetime:'À Vie', excellence:'Excellence', authentic:'Authentique', desc:'Pièce précieuse, mouvement manufacture, matériaux rares.', inquire:'Demande', toast:'Demande envoyée. Nous vous contacterons bientôt.'
  },
  en: {
    collection:'COLLECTION', maison:'MAISON', contact:'CONTACT', subtitle:'Precious Watches', headline:'Zarvaz Excellence', cta:'Discover The Collection', theCollection:'The Collection', all:'All', classic:'Classic', sport:'Sport', complication:'Complication', limited:'Limited Edition', quickView:'Quick View', heritage:'Swiss Craftsmanship', heritageText:'Every Zarvaz is a jewel, crafted in horological tradition.', precision:'Precision', lifetime:'Lifetime', excellence:'Excellence', authentic:'Authentic', desc:'Precious piece, manufacture movement, rare materials.', inquire:'Inquire', toast:'Request Sent. We will contact you shortly.'
  }
};

const WATCHES = [
  { id:1, name:'Zarvaz Opus', price:72000, cat:'limited', img:'/mockups/zarvaz-collection1.svg', tag:'Opus Masterpiece' },
  { id:2, name:'Zarvaz Eternis', price:98000, cat:'classic', img:'/mockups/zarvaz-collection2.svg', tag:'Eternal Elegance' },
  { id:3, name:'Zarvaz Chronis', price:125000, cat:'complication', img:'/mockups/zarvaz-detail.svg', tag:'Chrono Perfection' }
];

export default function ZarvazDemo() {
  const { i18n } = useTranslation();
  const t = txt[i18n.language.split('-')[0]] || txt.en;
  const [sel, setSel] = useState<typeof WATCHES[0]|null>(null);
  const [filter, setFilter] = useState('all');
  const [toast, setToast] = useState(false);
  const catMap: Record<string,string> = { all:t.all, classic:t.classic, sport:t.sport, complication:t.complication, limited:t.limited };
  const cats = Object.keys(catMap);
  const list = filter === 'all' ? WATCHES : WATCHES.filter(w => w.cat === filter);
  const inquire = () => { setToast(true); setTimeout(() => setToast(false), 3000); setSel(null); };

  return (
    <div className="min-h-screen bg-[#18141c] text-white font-serif selection:bg-[#C6B18B] selection:text-black">
      <nav className="fixed w-full z-50 px-8 py-6 flex justify-between items-center backdrop-blur-[2px]">
        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} className="text-2xl font-bold tracking-widest text-[#C6B18B]">ZARVAZ</motion.div>
        <div className="hidden md:flex gap-8 text-sm tracking-widest opacity-80">
          <span className="cursor-pointer hover:text-[#C6B18B] transition-colors">{t.collection}</span>
          <span className="cursor-pointer hover:text-[#C6B18B] transition-colors">{t.maison}</span>
          <span className="cursor-pointer hover:text-[#C6B18B] transition-colors">{t.contact}</span>
        </div>
      </nav>

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#18141c] via-[#2c232f] to-[#1a1a25]" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity:0, y:50 }} animate={{ opacity:1, y:0 }} transition={{ duration:1 }}>
            <h2 className="text-[#C6B18B] text-sm uppercase tracking-[0.3em] mb-4">{t.subtitle}</h2>
            <h1 className="text-6xl md:text-8xl lg:text-9xl mb-8 tracking-tighter">{t.headline}</h1>
            <button className="group relative px-8 py-4 bg-transparent border border-[#C6B18B]/30 hover:border-[#C6B18B] transition-colors duration-500">
              <span className="text-sm uppercase tracking-widest group-hover:text-[#C6B18B] transition-colors">{t.cta}</span>
            </button>
          </motion.div>
        </div>
        <div className="absolute bottom-10 left-10 text-xs text-neutral-500 tracking-widest hidden md:block">GENEVE</div>
      </section>

      <section className="py-24 px-6 relative">
        <div className="container mx-auto">
          <motion.div initial={{ opacity:0 }} whileInView={{ opacity:1 }} className="text-center mb-16">
            <h3 className="text-3xl italic text-[#C6B18B] mb-2">{t.theCollection}</h3>
            <div className="h-px w-20 bg-[#C6B18B] mx-auto opacity-50 mb-10" />
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              {cats.map(c => <button key={c} onClick={() => setFilter(c)} className={`text-sm tracking-widest uppercase transition-all duration-300 ${filter === c ? 'text-[#C6B18B] border-b border-[#C6B18B]' : 'text-neutral-500 hover:text-white'}`}>{catMap[c]}</button>)}
            </div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            <AnimatePresence mode="popLayout">
              {list.map(w => (
                <motion.div layout key={w.id} initial={{ opacity:0, scale:.9 }} animate={{ opacity:1, scale:1 }} exit={{ opacity:0, scale:.9 }} className="group cursor-pointer" onClick={() => setSel(w)}>
                  <div className="relative aspect-[3/4] overflow-hidden bg-neutral-900 mb-6">
                    <motion.img whileHover={{ scale:1.05 }} transition={{ duration:.7 }} src={w.img} alt={w.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-0 border border-white/5 group-hover:border-[#C6B18B]/30 transition-colors duration-500" />
                    <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur px-3 py-1 text-[#C6B18B] text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">{t.quickView}</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="text-lg font-semibold mb-2">{w.name}</div>
                    <div className="text-xs text-[#C6B18B] mb-1">{w.tag}</div>
                    <div className="text-sm text-neutral-400 mb-2">{t.desc}</div>
                    <div className="text-xl font-bold text-[#C6B18B]">{w.price.toLocaleString()} CHF</div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {sel && (
          <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
            <div className="bg-neutral-900 rounded-xl p-8 max-w-md w-full relative">
              <button onClick={() => setSel(null)} className="absolute top-4 right-4 text-neutral-400 hover:text-[#C6B18B] text-xl">×</button>
              <img src={sel.img} alt={sel.name} className="w-full h-64 object-contain mb-6 rounded-lg border border-[#C6B18B]/20" />
              <div className="text-2xl font-bold mb-2">{sel.name}</div>
              <div className="text-xs text-[#C6B18B] mb-1">{sel.tag}</div>
              <div className="text-sm text-neutral-400 mb-2">{t.desc}</div>
              <div className="text-xl font-bold text-[#C6B18B] mb-4">{sel.price.toLocaleString()} CHF</div>
              <button onClick={inquire} className="w-full py-3 bg-[#C6B18B] text-black font-semibold rounded-lg mt-2">{t.inquire}</button>
            </div>
          </motion.div>
        )}
        {toast && (
          <motion.div initial={{ opacity:0, y:40 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:40 }} className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-[#C6B18B] text-black px-6 py-3 rounded-lg shadow-lg z-50 font-semibold">
            {t.toast}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
