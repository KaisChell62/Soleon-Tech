import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Sun, MapPin, Clock } from 'lucide-react';

const OFFICES = [
  { id: 'paris', city: 'Paris', labelKey: 'global.timezone.label.paris', offset: 'UTC+1', time: '09:00 - 18:00', x: '48%', active: true },
  { id: 'new_york', city: 'New York', labelKey: 'global.timezone.label.new_york', offset: 'UTC-5', time: '14:00 - 23:00', x: '25%', active: false },
  { id: 'tokyo', city: 'Tokyo', labelKey: 'global.timezone.label.tokyo', offset: 'UTC+9', time: '01:00 - 10:00', x: '85%', active: false },
];

export default function TimezoneAdvantage() {
  const { t } = useTranslation();
  const ref = useRef(null);

  return (
    <section ref={ref} className="py-16 md:py-24 bg-neutral-900 border-t border-neutral-800 relative overflow-hidden">
      {/* Background World Map (Abstract) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/Vs_world3_check.svg')] bg-cover bg-center mix-blend-overlay" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('global.timezone.title')}</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg leading-relaxed">
            {t('global.timezone.subtitle')}
          </p>
        </div>

        {/* 24h Timeline Visualizer */}
        <div className="relative h-auto md:h-80 bg-neutral-950/80 md:bg-neutral-950/50 rounded-3xl border border-neutral-800 backdrop-blur-xl overflow-hidden shadow-2xl">
           
           {/* Desktop Only Animation */}
           <div className="hidden md:block absolute inset-0">
             {/* Sun Animation - Moving across */}
             <motion.div 
               animate={{ left: ['0%', '100%'] }}
               transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
               className="absolute top-0 bottom-0 w-32 bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent z-0 pointer-events-none"
             >
               <div className="absolute top-8 left-1/2 -translate-x-1/2">
                  <Sun className="text-yellow-400" size={32} />
               </div>
             </motion.div>

             {/* Timeline Base */}
             <div className="absolute top-1/2 left-0 w-full h-px bg-neutral-800" />
             
             {/* Hour Markers */}
             <div className="absolute bottom-0 w-full flex justify-between px-8 py-4 text-xs font-mono text-neutral-600 border-t border-neutral-800/50">
               <span>00:00</span>
               <span>06:00</span>
               <span>12:00</span>
               <span>18:00</span>
               <span>24:00</span>
             </div>
           </div>

           {/* Mobile: Vertical Stack with Staggered Animation */}
           <div className=" md:absolute md:inset-0 p-6 md:p-0 flex flex-col md:block gap-8 md:gap-0">
             {OFFICES.map((office, i) => (
               <div 
                 key={office.id}
                 className="relative md:absolute md:top-1/2 w-full md:w-auto transform md:-translate-y-1/2 transition-all duration-300"
                 style={{ left: typeof window !== 'undefined' && window.innerWidth >= 768 ? office.x : 'auto' }}
               >
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2, duration: 0.5 }}
                    className="flex flex-row md:flex-col items-center gap-4 md:gap-0 md:absolute md:-translate-x-1/2 w-full md:w-auto"
                  >
                      {/* Pin Head - Pulsing on Mobile */}
                      <div className="relative">
                        <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-indigo-500 border-2 md:border-4 border-neutral-900 shadow-[0_0_20px_rgba(99,102,241,0.5)] z-20 shrink-0 relative" />
                        <div className="md:hidden absolute inset-0 bg-indigo-500 rounded-full animate-ping opacity-75" />
                      </div>
                      
                      {/* Vertical Connector Line for Mobile */}
                      {i !== OFFICES.length - 1 && (
                        <div className="md:hidden absolute left-[5.5px] top-6 bottom-[-20px] w-0.5 bg-neutral-800" />
                      )}
                      
                      {/* Desktop Active Line */}
                      <div className="hidden md:block h-12 w-px bg-gradient-to-b from-indigo-500 to-transparent absolute top-4 group-hover:h-16 transition-all" />

                      {/* Card */}
                      <div className="flex-1 md:flex-none bg-neutral-900 border border-neutral-700 p-4 rounded-xl md:w-48 text-left md:text-center shadow-xl md:mt-2">
                         <div className="flex items-center justify-start md:justify-center gap-2 mb-2 text-indigo-400 font-bold uppercase text-xs tracking-wider">
                            <MapPin size={12} /> {t(`global.timezone.${office.id}`)}
                         </div>
                         <div className="text-white font-bold mb-1 text-sm md:text-base">{t(office.labelKey)}</div>
                         <div className="text-neutral-500 text-xs font-mono bg-neutral-950 rounded py-1 flex items-center justify-start md:justify-center gap-2 px-2">
                            <Clock size={10} /> {office.time}
                         </div>
                      </div>
                  </motion.div>
               </div>
             ))}
           </div>
        </div>

        {/* Why this model footer */}
        <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
           {[
             { titleKey: 'global.timezone.uptime.title', descKey: 'global.timezone.uptime.desc' },
             { titleKey: 'global.timezone.delivery.title', descKey: 'global.timezone.delivery.desc' },
             { titleKey: 'global.timezone.compliance.title', descKey: 'global.timezone.compliance.desc' }
           ].map((item, i) => (
             <div key={i} className="flex items-center gap-4 bg-neutral-900/30 p-4 rounded-lg border border-neutral-800/50">
                <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 font-bold shrink-0">{i+1}</div>
                <div>
                  <div className="font-bold text-white text-sm md:text-base">{t(item.titleKey)}</div>
                  <div className="text-xs md:text-sm text-neutral-400">{t(item.descKey)}</div>
                </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
