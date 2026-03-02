import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function GlobalTrustIndex() {
  const { t } = useTranslation();

  const stats = [
    { key: 'clients', value: '12+', color: 'text-indigo-400' },
    { key: 'countries', value: '10', color: 'text-purple-400' },
    { key: 'projects', value: '25+', color: 'text-blue-400' },
    { key: 'satisfaction', value: '98%', color: 'text-green-400' },
  ];

  return (
    <section className="py-20 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-16">{t('global.trust.title')}</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.key}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, type: "spring" }}
              className="p-6 rounded-2xl bg-neutral-800/50 border border-neutral-700/50 hover:bg-neutral-800 transition-colors"
            >
              <div className={`text-4xl md:text-5xl font-black mb-2 ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-sm md:text-base font-medium text-neutral-400 uppercase tracking-wider">
                {t(`global.trust.${stat.key}`)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
