import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ShoppingBag, X, Clock, Award, ShieldCheck, Star } from 'lucide-react';

const txt: Record<string, Record<string, string>> = {
  fr: { collection:'COLLECTION', maison:'MAISON', contact:'CONTACT', subtitle:'Chefs-d\'œuvre Suisses', headline:'Élégance Intemporelle', cta:'Découvrir la Collection', theCollection:'La Collection', all:'Tout', classic:'Classique', sport:'Sport', complication:'Complication', limited:'Édition Limitée', quickView:'Aperçu', heritage:'L\'Art Horloger Depuis 1904', heritageText:'Chaque garde-temps Aura est un hommage à la quête de perfection. Née des mains de maîtres artisans dans la Vallée de Joux.', precision:'Précision', lifetime:'À Vie', excellence:'Excellence', authentic:'Authentique', desc:'Un chef-d\'œuvre horloger, doté d\'un mouvement mécanique à remontage automatique entièrement développé et fabriqué par Aura.', inquire:'Demande', toast:'Demande envoyée. Nous vous contacterons bientôt.' },
  en: { collection:'COLLECTION', maison:'MAISON', contact:'CONTACT', subtitle:'Swiss Masterpieces', headline:'Timeless Elegance', cta:'Discover The Collection', theCollection:'The Collection', all:'All', classic:'Classic', sport:'Sport', complication:'Complication', limited:'Limited', quickView:'Quick View', heritage:'Crafting Eternity Since 1904', heritageText:'Every Aura timepiece is a testament to the pursuit of perfection. Born from the hands of master artisans in the Vallée de Joux.', precision:'Precision', lifetime:'Lifetime', excellence:'Excellence', authentic:'Authentic', desc:'A masterpiece of horology, featuring a self-winding mechanical movement entirely developed and manufactured by Aura.', inquire:'Inquire', toast:'Request Sent. We will contact you shortly.' },
  es: { collection:'COLECCIÓN', maison:'CASA', contact:'CONTACTO', subtitle:'Obras Maestras Suizas', headline:'Elegancia Atemporal', cta:'Descubrir la Colección', theCollection:'La Colección', all:'Todo', classic:'Clásico', sport:'Deporte', complication:'Complicación', limited:'Limitada', quickView:'Vista Rápida', heritage:'Creando Eternidad Desde 1904', heritageText:'Cada reloj Aura es un testimonio de la búsqueda de la perfección. Nacido de las manos de maestros artesanos.', precision:'Precisión', lifetime:'De por vida', excellence:'Excelencia', authentic:'Auténtico', desc:'Una obra maestra de relojería con movimiento mecánico automático desarrollado y fabricado por Aura.', inquire:'Consultar', toast:'Solicitud enviada. Le contactaremos pronto.' },
  de: { collection:'KOLLEKTION', maison:'HAUS', contact:'KONTAKT', subtitle:'Schweizer Meisterwerke', headline:'Zeitlose Eleganz', cta:'Kollektion entdecken', theCollection:'Die Kollektion', all:'Alle', classic:'Klassisch', sport:'Sport', complication:'Komplikation', limited:'Limitiert', quickView:'Schnellansicht', heritage:'Ewigkeit erschaffen seit 1904', heritageText:'Jede Aura-Uhr ist ein Zeugnis des Strebens nach Perfektion. Aus den Händen von Meisterhandwerkern.', precision:'Präzision', lifetime:'Lebenslang', excellence:'Exzellenz', authentic:'Authentisch', desc:'Ein Meisterwerk der Uhrmacherei mit einem vollständig von Aura entwickelten Automatikwerk.', inquire:'Anfrage', toast:'Anfrage gesendet. Wir werden Sie bald kontaktieren.' },
  zh: { collection:'系列', maison:'品牌', contact:'联系', subtitle:'瑞士杰作', headline:'永恒优雅', cta:'探索系列', theCollection:'系列', all:'全部', classic:'经典', sport:'运动', complication:'复杂功能', limited:'限量版', quickView:'快速查看', heritage:'自1904年匠心传承', heritageText:'每一枚Aura腕表都是对完美追求的见证。诞生于汝拉山谷大师工匠之手。', precision:'精准', lifetime:'终身', excellence:'卓越', authentic:'正品', desc:'一件钟表杰作，搭载Aura完全自主研发制造的自动上链机械机芯。', inquire:'咨询', toast:'请求已发送。我们将尽快联系您。' },
  ar: { collection:'المجموعة', maison:'الدار', contact:'اتصل', subtitle:'روائع سويسرية', headline:'أناقة خالدة', cta:'اكتشف المجموعة', theCollection:'المجموعة', all:'الكل', classic:'كلاسيكي', sport:'رياضي', complication:'تعقيد', limited:'محدود', quickView:'معاينة', heritage:'صناعة الأبدية منذ 1904', heritageText:'كل ساعة أورا هي شهادة على السعي نحو الكمال. من أيدي حرفيين في وادي جو.', precision:'دقة', lifetime:'مدى الحياة', excellence:'تميز', authentic:'أصلي', desc:'تحفة في صناعة الساعات مع حركة ميكانيكية أوتوماتيكية مطورة بالكامل من أورا.', inquire:'استفسار', toast:'تم إرسال الطلب. سنتواصل معك قريبًا.' },
  pt: { collection:'COLEÇÃO', maison:'CASA', contact:'CONTATO', subtitle:'Obras-Primas Suíças', headline:'Elegância Atemporal', cta:'Descobrir a Coleção', theCollection:'A Coleção', all:'Tudo', classic:'Clássico', sport:'Esporte', complication:'Complicação', limited:'Limitado', quickView:'Visualização', heritage:'Criando Eternidade Desde 1904', heritageText:'Cada relógio Aura é um testemunho da busca pela perfeição. Das mãos de mestres artesãos.', precision:'Precisão', lifetime:'Vitalício', excellence:'Excelência', authentic:'Autêntico', desc:'Uma obra-prima da relojoaria com movimento mecânico automático desenvolvido e fabricado pela Aura.', inquire:'Consultar', toast:'Solicitação enviada. Entraremos em contato em breve.' },
  ru: { collection:'КОЛЛЕКЦИЯ', maison:'ДОМ', contact:'КОНТАКТ', subtitle:'Швейцарские шедевры', headline:'Вечная элегантность', cta:'Откройте коллекцию', theCollection:'Коллекция', all:'Все', classic:'Классика', sport:'Спорт', complication:'Усложнение', limited:'Лимитированные', quickView:'Быстрый просмотр', heritage:'Создаём вечность с 1904', heritageText:'Каждые часы Aura — свидетельство стремления к совершенству. Из рук мастеров долины Жу.', precision:'Точность', lifetime:'Пожизненно', excellence:'Мастерство', authentic:'Подлинный', desc:'Шедевр часового искусства с механизмом автоподзавода, полностью разработанным Aura.', inquire:'Запрос', toast:'Запрос отправлен. Мы свяжемся с вами.' },
};

const WATCHES = [
  { id:1, name:"L'Éclipse Noire", price:45000, cat:'limited', img:'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80&w=800', tag:'Absolute Darkness' },
  { id:2, name:'Aura Gold Reserve', price:64000, cat:'classic', img:'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&q=80&w=800', tag:'Royal Heritage' },
  { id:3, name:'Celestial Voyager', price:82500, cat:'complication', img:'https://images.unsplash.com/photo-1622434641406-a158123450f9?auto=format&fit=crop&q=80&w=800', tag:'Beyond Time' },
  { id:4, name:'Chronos Perpetual', price:115000, cat:'complication', img:'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=800', tag:'Eternal Precision' },
  { id:5, name:'Oceanic Abyss', price:38000, cat:'sport', img:'https://images.unsplash.com/photo-1539874754764-5a96559165b0?auto=format&fit=crop&q=80&w=800', tag:'Deep Master' },
  { id:6, name:'Stellar Dust', price:55000, cat:'limited', img:'https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&q=80&w=800', tag:'Cosmic Fragment' },
];

export default function AuraWatches() {
  const { i18n } = useTranslation();
  const t = txt[i18n.language.split('-')[0]] || txt.en;
  const [sel, setSel] = useState<typeof WATCHES[0]|null>(null);
  const [filter, setFilter] = useState('all');
  const [toast, setToast] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const catMap: Record<string,string> = { all:t.all, classic:t.classic, sport:t.sport, complication:t.complication, limited:t.limited };
  const cats = Object.keys(catMap);
  const list = filter === 'all' ? WATCHES : WATCHES.filter(w => w.cat === filter);
  const inquire = () => { setToast(true); setTimeout(() => setToast(false), 3000); setSel(null); };
  const scroll = () => ref.current?.scrollIntoView({ behavior:'smooth' });

  return (
    <div className="min-h-screen bg-[#050505] text-white font-serif selection:bg-[#D4A017] selection:text-black">
      <nav className="fixed w-full z-50 px-8 py-6 mix-blend-difference flex justify-between items-center backdrop-blur-[2px]">
        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} className="text-2xl font-bold tracking-widest text-[#D4A017]">AURA</motion.div>
        <div className="hidden md:flex gap-8 text-sm tracking-widest opacity-80">
          <span className="cursor-pointer hover:text-[#D4A017] transition-colors" onClick={scroll}>{t.collection}</span>
          <span className="cursor-pointer hover:text-[#D4A017] transition-colors">{t.maison}</span>
          <span className="cursor-pointer hover:text-[#D4A017] transition-colors">{t.contact}</span>
        </div>
      </nav>

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800/20 via-black to-black" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity:0, y:50 }} animate={{ opacity:1, y:0 }} transition={{ duration:1 }}>
            <h2 className="text-[#D4A017] text-sm uppercase tracking-[0.3em] mb-4">{t.subtitle}</h2>
            <h1 className="text-6xl md:text-8xl lg:text-9xl mb-8 tracking-tighter">{t.headline}</h1>
            <button onClick={scroll} className="group relative px-8 py-4 bg-transparent border border-[#D4A017]/30 hover:border-[#D4A017] transition-colors duration-500">
              <span className="text-sm uppercase tracking-widest group-hover:text-[#D4A017] transition-colors">{t.cta}</span>
            </button>
          </motion.div>
        </div>
        <div className="absolute bottom-10 left-10 text-xs text-neutral-500 tracking-widest hidden md:block">EST. 1904</div>
      </section>

      <section ref={ref} className="py-24 px-6 relative">
        <div className="container mx-auto">
          <motion.div initial={{ opacity:0 }} whileInView={{ opacity:1 }} className="text-center mb-16">
            <h3 className="text-3xl italic text-[#D4A017] mb-2">{t.theCollection}</h3>
            <div className="h-px w-20 bg-[#D4A017] mx-auto opacity-50 mb-10" />
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              {cats.map(c => <button key={c} onClick={() => setFilter(c)} className={`text-sm tracking-widest uppercase transition-all duration-300 ${filter === c ? 'text-[#D4A017] border-b border-[#D4A017]' : 'text-neutral-500 hover:text-white'}`}>{catMap[c]}</button>)}
            </div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            <AnimatePresence mode="popLayout">
              {list.map(w => (
                <motion.div layout key={w.id} initial={{ opacity:0, scale:.9 }} animate={{ opacity:1, scale:1 }} exit={{ opacity:0, scale:.9 }} className="group cursor-pointer" onClick={() => setSel(w)}>
                  <div className="relative aspect-[3/4] overflow-hidden bg-neutral-900 mb-6">
                    <motion.img whileHover={{ scale:1.05 }} transition={{ duration:.7 }} src={w.img} alt={w.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-0 border border-white/5 group-hover:border-[#D4A017]/30 transition-colors duration-500" />
                    <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur px-3 py-1 text-[#D4A017] text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">{t.quickView}</div>
                  </div>
                  <div className="text-center">
                    <h4 className="text-lg tracking-wide mb-2 group-hover:text-[#D4A017] transition-colors">{w.name}</h4>
                    <p className="text-xs text-neutral-500 uppercase tracking-widest mb-3">{w.tag}</p>
                    <p className="text-[#D4A017] font-medium">${w.price.toLocaleString()}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="py-32 bg-neutral-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div initial={{ opacity:0, x:-50 }} whileInView={{ opacity:1, x:0 }} transition={{ duration:.8 }}>
              <h3 className="text-4xl md:text-5xl mb-8 leading-tight">{t.heritage}</h3>
              <p className="text-neutral-400 leading-loose mb-8 font-sans font-light">{t.heritageText}</p>
              <div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
                <div className="text-center"><Clock className="w-6 h-6 text-[#D4A017] mx-auto mb-4" /><span className="text-xs uppercase tracking-widest block">{t.precision}</span></div>
                <div className="text-center border-l border-white/10"><ShieldCheck className="w-6 h-6 text-[#D4A017] mx-auto mb-4" /><span className="text-xs uppercase tracking-widest block">{t.lifetime}</span></div>
                <div className="text-center border-l border-white/10"><Award className="w-6 h-6 text-[#D4A017] mx-auto mb-4" /><span className="text-xs uppercase tracking-widest block">{t.excellence}</span></div>
              </div>
            </motion.div>
            <div className="relative aspect-square">
              <div className="absolute inset-0 bg-[#D4A017]/5 -rotate-6" />
              <img src="https://images.unsplash.com/photo-1596561226079-f52285ed389a?auto=format&fit=crop&q=80&w=1000" alt="Craftsmanship" className="w-full h-full object-cover relative z-10 grayscale hover:grayscale-0 transition-all duration-1000" />
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {sel && (
          <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }} className="fixed inset-0 z-[60] flex items-center justify-center px-4">
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={() => setSel(null)} />
            <motion.div initial={{ scale:.9, opacity:0 }} animate={{ scale:1, opacity:1 }} exit={{ scale:.9, opacity:0 }} className="relative w-full max-w-5xl bg-neutral-900 overflow-hidden shadow-2xl border border-[#D4A017]/20">
              <button onClick={() => setSel(null)} className="absolute top-6 right-6 z-10 text-white hover:text-[#D4A017] transition-colors"><X size={24} /></button>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative aspect-square md:aspect-auto h-full bg-neutral-800"><img src={sel.img} alt={sel.name} className="w-full h-full object-cover" /></div>
                <div className="p-10 md:p-14 flex flex-col justify-center">
                  <div className="mb-8">
                    <span className="text-[#D4A017] text-xs uppercase tracking-[0.2em]">{t.authentic} • {catMap[sel.cat]}</span>
                    <h3 className="text-4xl md:text-5xl mt-2 mb-2">{sel.name}</h3>
                    <p className="text-xl text-neutral-400 font-light italic">{sel.tag}</p>
                  </div>
                  <p className="text-neutral-300 leading-relaxed font-sans font-light mb-8">{t.desc}</p>
                  <div className="flex items-center justify-between border-t border-white/10 pt-8 mt-auto">
                    <span className="text-3xl text-[#D4A017] font-light">${sel.price.toLocaleString()}</span>
                    <button onClick={inquire} className="flex items-center gap-3 bg-white text-black px-8 py-4 hover:bg-[#D4A017] transition-colors duration-300"><ShoppingBag size={18} /><span className="uppercase text-sm tracking-widest font-bold">{t.inquire}</span></button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {toast && (
          <motion.div initial={{ opacity:0, y:50, x:'-50%' }} animate={{ opacity:1, y:0, x:'-50%' }} exit={{ opacity:0, y:20, x:'-50%' }} className="fixed bottom-10 left-1/2 bg-[#D4A017] text-black px-6 py-3 font-medium shadow-lg z-[70] flex items-center gap-2">
            <ShieldCheck size={18} />{t.toast}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
