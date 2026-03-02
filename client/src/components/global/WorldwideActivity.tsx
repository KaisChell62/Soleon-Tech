import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { MapPin } from 'lucide-react';

const LOCATIONS = [
  { city: 'Paris', country: 'FR', x: 48, y: 35, status: 'active' },
  { city: 'New York', country: 'US', x: 25, y: 40, status: 'meeting' },
  { city: 'Tokyo', country: 'JP', x: 85, y: 42, status: 'coding' },
  { city: 'London', country: 'UK', x: 46, y: 32, status: 'active' },
  { city: 'Dubai', country: 'UAE', x: 60, y: 48, status: 'review' },
  { city: 'Singapore', country: 'SG', x: 78, y: 55, status: 'deploy' },
];

export default function WorldwideActivity() {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-neutral-900 border-y border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">{t('global.activity.title')}</h2>
          <p className="text-neutral-400">{t('global.activity.subtitle')}</p>
        </div>

        <div className="relative aspect-[16/9] md:aspect-[2/1] bg-neutral-950 rounded-3xl border border-neutral-800 overflow-hidden">
          {/* Stylized World Map Background */}
          <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-cover bg-center bg-no-repeat grayscale" />
          
          {LOCATIONS.map((loc, index) => (
            <motion.div
              key={loc.city}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              className="absolute group"
              style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
            >
              <div className="relative">
                <div className="w-3 h-3 bg-indigo-500 rounded-full animate-ping absolute inset-0" />
                <div className="w-3 h-3 bg-indigo-500 rounded-full relative z-10 border-2 border-neutral-900" />
                
                {/* Tooltip */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-neutral-800/90 backdrop-blur px-3 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-neutral-700">
                  <div className="font-bold flex items-center gap-1">
                    <MapPin size={10} className="text-indigo-400" />
                    {loc.city}, {loc.country}
                  </div>
                  <div className="text-neutral-400 capitalize flex items-center gap-1 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    {loc.status}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
