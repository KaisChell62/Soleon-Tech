import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { MapPin, Expand, ArrowRight, Bed, Bath, Square, Phone, X } from 'lucide-react';

const txt: Record<string, Record<string, string>> = {
  fr: { buy:'Acheter', rent:'Louer', sell:'Vendre', contact:'Contacter', heroTitle:'Architecture et Art de Vivre.', listingsCount:'450+', exclusiveProps:'Biens Exclusifs', citiesCount:'12', globalCities:'Villes Mondiales', featured:'Résidences en Vedette', curated:'Une sélection de propriétés d\'exception.', viewAll:'Voir tout', forSale:'À Vendre', virtualTour:'Visite Virtuelle', viewMap:'Carte', beds:'Chambres', baths:'SDB', sqft:'m²', schedule:'Prendre RDV' },
  en: { buy:'Buy', rent:'Rent', sell:'Sell', contact:'Contact Agent', heroTitle:'Architectural Living.', listingsCount:'450+', exclusiveProps:'Exclusive Properties', citiesCount:'12', globalCities:'Global Cities', featured:'Featured Residences', curated:'A curated selection of the finest architectural homes.', viewAll:'View All Listings', forSale:'For Sale', virtualTour:'Virtual Tour', viewMap:'View Map', beds:'Beds', baths:'Baths', sqft:'Sq Ft', schedule:'Schedule Viewing' },
  es: { buy:'Comprar', rent:'Alquilar', sell:'Vender', contact:'Contactar Agente', heroTitle:'Arquitectura y Estilo de Vida.', listingsCount:'450+', exclusiveProps:'Propiedades Exclusivas', citiesCount:'12', globalCities:'Ciudades Globales', featured:'Residencias Destacadas', curated:'Una selección curada de las mejores casas arquitectónicas.', viewAll:'Ver Todo', forSale:'En Venta', virtualTour:'Tour Virtual', viewMap:'Ver Mapa', beds:'Dormitorios', baths:'Baños', sqft:'m²', schedule:'Agendar Visita' },
  de: { buy:'Kaufen', rent:'Mieten', sell:'Verkaufen', contact:'Agent kontaktieren', heroTitle:'Architektonisches Wohnen.', listingsCount:'450+', exclusiveProps:'Exklusive Immobilien', citiesCount:'12', globalCities:'Weltstädte', featured:'Ausgewählte Residenzen', curated:'Eine kuratierte Auswahl der feinsten architektonischen Häuser.', viewAll:'Alle anzeigen', forSale:'Zu Verkaufen', virtualTour:'Virtuelle Tour', viewMap:'Karte', beds:'Schlafzimmer', baths:'Bäder', sqft:'m²', schedule:'Besichtigung planen' },
  zh: { buy:'购买', rent:'租赁', sell:'出售', contact:'联系经纪人', heroTitle:'建筑艺术生活。', listingsCount:'450+', exclusiveProps:'独家物业', citiesCount:'12', globalCities:'全球城市', featured:'精选住宅', curated:'精选的最佳建筑住宅。', viewAll:'查看全部', forSale:'出售中', virtualTour:'虚拟参观', viewMap:'查看地图', beds:'卧室', baths:'浴室', sqft:'平方米', schedule:'预约看房' },
  ar: { buy:'شراء', rent:'إيجار', sell:'بيع', contact:'اتصل بوكيل', heroTitle:'العمارة وفن الحياة.', listingsCount:'+450', exclusiveProps:'عقارات حصرية', citiesCount:'12', globalCities:'مدن عالمية', featured:'مساكن مميزة', curated:'مجموعة مختارة من أفضل المنازل المعمارية.', viewAll:'عرض الكل', forSale:'للبيع', virtualTour:'جولة افتراضية', viewMap:'عرض الخريطة', beds:'غرف نوم', baths:'حمامات', sqft:'م²', schedule:'حجز زيارة' },
  pt: { buy:'Comprar', rent:'Alugar', sell:'Vender', contact:'Contatar Agente', heroTitle:'Arquitetura e Estilo de Vida.', listingsCount:'450+', exclusiveProps:'Propriedades Exclusivas', citiesCount:'12', globalCities:'Cidades Globais', featured:'Residências em Destaque', curated:'Uma seleção curada das melhores casas arquitetônicas.', viewAll:'Ver Tudo', forSale:'À Venda', virtualTour:'Tour Virtual', viewMap:'Ver Mapa', beds:'Quartos', baths:'Banheiros', sqft:'m²', schedule:'Agendar Visita' },
  ru: { buy:'Купить', rent:'Аренда', sell:'Продать', contact:'Связаться', heroTitle:'Архитектура и Жизнь.', listingsCount:'450+', exclusiveProps:'Эксклюзивная недвижимость', citiesCount:'12', globalCities:'Мировые города', featured:'Избранные резиденции', curated:'Подборка лучших архитектурных домов.', viewAll:'Смотреть все', forSale:'Продаётся', virtualTour:'Виртуальный тур', viewMap:'Карта', beds:'Спальни', baths:'Ванные', sqft:'м²', schedule:'Записаться на показ' },
};

const PROPS = [
  { id:1, title:'The Glass Penthouse', loc:'Downtown, NY', price:'$12,500,000', beds:4, baths:5, sqft:5200, img:'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=1600', desc:'Floating above the city, this glass-walled masterpiece offers 360-degree views and a wrap-around sky terrace.' },
  { id:2, title:'Azure Coast Villa', loc:'Malibu, CA', price:'$28,900,000', beds:6, baths:8, sqft:8500, img:'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1600', desc:'Direct beach access meets modern luxury. Features infinity pool and smart-glass technology.' },
  { id:3, title:'Minimalist Alpine Retreat', loc:'Aspen, CO', price:'$9,750,000', beds:5, baths:4, sqft:4100, img:'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1600', desc:'Sustainable luxury in the mountains. Solar passive design and ski-in/ski-out access.' },
];

export default function SkylineRealEstate() {
  const { i18n } = useTranslation();
  const t = txt[i18n.language.split('-')[0]] || txt.en;
  const [active, setActive] = useState<typeof PROPS[0]|null>(null);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <nav className="fixed top-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tighter"><div className="w-8 h-8 bg-black text-white flex items-center justify-center">S</div>SKYLINE</div>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <span className="cursor-pointer hover:text-blue-600">{t.buy}</span>
            <span className="cursor-pointer hover:text-blue-600">{t.rent}</span>
            <span className="cursor-pointer hover:text-blue-600">{t.sell}</span>
          </div>
          <button className="bg-black text-white px-6 py-2 text-sm font-medium hover:bg-gray-800 transition-colors">{t.contact}</button>
        </div>
      </nav>

      <header className="relative pt-20 h-[80vh] flex items-center overflow-hidden">
        <motion.div className="absolute inset-0 z-0" initial={{ scale:1.1 }} animate={{ scale:1 }} transition={{ duration:20, repeat:Infinity, repeatType:'reverse' }}>
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" alt="Hero" className="w-full h-full object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent z-10" />
        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full text-white">
          <motion.h1 initial={{ y:50, opacity:0 }} animate={{ y:0, opacity:1 }} className="text-6xl md:text-8xl font-bold max-w-3xl leading-tight mb-8">{t.heroTitle}</motion.h1>
          <motion.div initial={{ y:50, opacity:0 }} animate={{ y:0, opacity:1 }} transition={{ delay:.2 }} className="flex flex-col md:flex-row gap-4 max-w-lg">
            <div className="bg-white/10 backdrop-blur-md p-6 border-l-4 border-white"><p className="text-2xl font-light mb-1">{t.listingsCount}</p><p className="text-sm opacity-75 uppercase tracking-wide">{t.exclusiveProps}</p></div>
            <div className="bg-white/10 backdrop-blur-md p-6 border-l-4 border-white"><p className="text-2xl font-light mb-1">{t.citiesCount}</p><p className="text-sm opacity-75 uppercase tracking-wide">{t.globalCities}</p></div>
          </motion.div>
        </div>
      </header>

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div><h2 className="text-4xl font-bold mb-4">{t.featured}</h2><p className="text-gray-500 max-w-md">{t.curated}</p></div>
          <button className="hidden md:flex items-center gap-2 font-medium hover:gap-4 transition-all">{t.viewAll} <ArrowRight className="w-4 h-4" /></button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROPS.map(p => (
            <motion.div key={p.id} className="group cursor-pointer" onClick={() => setActive(p)}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm mb-4">
                <motion.img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 text-xs font-bold tracking-wider uppercase">{t.forSale}</div>
              </div>
              <h3 className="text-xl font-bold mb-1 group-hover:text-blue-600 transition-colors">{p.title}</h3>
              <p className="text-gray-500 mb-3 flex items-center gap-1 text-sm"><MapPin className="w-3 h-3" />{p.loc}</p>
              <div className="flex items-center gap-4 text-sm text-gray-800 font-medium py-3 border-t border-gray-100">
                <span className="flex items-center gap-1"><Bed className="w-4 h-4 text-gray-400" />{p.beds}</span>
                <span className="flex items-center gap-1"><Bath className="w-4 h-4 text-gray-400" />{p.baths}</span>
                <span className="flex items-center gap-1"><Square className="w-4 h-4 text-gray-400" />{p.sqft}</span>
              </div>
              <p className="text-2xl font-light mt-2">{p.price}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12 overflow-hidden">
            <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }} onClick={() => setActive(null)} className="absolute inset-0 bg-white/90 backdrop-blur-xl" />
            <motion.div initial={{ scale:.95, opacity:0 }} animate={{ scale:1, opacity:1 }} exit={{ scale:.95, opacity:0 }} className="relative w-full h-full max-w-6xl bg-white shadow-2xl overflow-y-auto md:overflow-hidden flex flex-col md:flex-row">
              <button onClick={() => setActive(null)} className="absolute top-6 right-6 z-20 bg-white/50 hover:bg-white p-2 rounded-full transition-colors"><X className="w-6 h-6" /></button>
              <div className="w-full md:w-2/3 h-[50vh] md:h-full relative">
                <img src={active.img} alt={active.title} className="w-full h-full object-cover" />
                <div className="absolute bottom-8 left-8 flex gap-4">
                  <button className="bg-white/90 backdrop-blur px-6 py-3 font-bold text-sm hover:bg-white flex items-center gap-2"><Expand className="w-4 h-4" />{t.virtualTour}</button>
                  <button className="bg-black/80 backdrop-blur text-white px-6 py-3 font-bold text-sm hover:bg-black flex items-center gap-2"><MapPin className="w-4 h-4" />{t.viewMap}</button>
                </div>
              </div>
              <div className="w-full md:w-1/3 p-8 md:p-12 flex flex-col h-full bg-white z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-2">{active.title}</h2>
                <p className="text-gray-500 flex items-center gap-2 mb-8"><MapPin className="w-4 h-4" />{active.loc}</p>
                <div className="flex justify-between items-center py-6 border-y border-gray-100 mb-8">
                  <div className="text-center"><span className="block font-bold text-xl">{active.beds}</span><span className="text-xs text-gray-400 uppercase tracking-wider">{t.beds}</span></div>
                  <div className="w-px h-8 bg-gray-100" />
                  <div className="text-center"><span className="block font-bold text-xl">{active.baths}</span><span className="text-xs text-gray-400 uppercase tracking-wider">{t.baths}</span></div>
                  <div className="w-px h-8 bg-gray-100" />
                  <div className="text-center"><span className="block font-bold text-xl">{active.sqft}</span><span className="text-xs text-gray-400 uppercase tracking-wider">{t.sqft}</span></div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-auto">{active.desc}</p>
                <div className="mt-8 pt-8 border-t border-gray-100">
                  <p className="text-3xl font-light mb-4">{active.price}</p>
                  <button className="w-full bg-black text-white py-4 font-bold flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors"><Phone className="w-4 h-4" />{t.schedule}</button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
