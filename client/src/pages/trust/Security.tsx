import { motion } from 'framer-motion';
import { Shield, Lock, Server, Eye, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const iconMap: any = { Shield, Lock, Server, Eye };

export default function Security() {
  const { t } = useTranslation();

  const securityStandards = [
    { id: '1', iconName: 'Lock', ...t('security.standards.encryption', { returnObjects: true }) as object },
    { id: '2', iconName: 'Shield', ...t('security.standards.auth', { returnObjects: true }) as object },
    { id: '3', iconName: 'Eye', ...t('security.standards.monitoring', { returnObjects: true }) as object },
    { id: '4', iconName: 'Server', ...t('security.standards.backup', { returnObjects: true }) as object },
  ];

  const badges = t('security.badges', { returnObjects: true }) as string[];

  return (
    <div className="bg-neutral-950 min-h-screen text-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <div className="flex items-center gap-2 text-green-500 mb-4 font-mono text-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            {t('security.status')}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t('security.title')} <br/>
            {t('security.subtitle')} <span className="text-indigo-500">{t('security.highlight')}</span>.
          </h1>
          <p className="text-xl text-neutral-400">
            {t('security.description')}
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            {securityStandards.map((std: any, index) => {
                const Icon = iconMap[std.iconName];
                return (
                    <motion.div
                        key={std.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl hover:border-indigo-500/30 transition-colors group relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Icon size={120} />
                        </div>
                        
                        <div className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-6 text-indigo-400">
                            <Icon size={24} />
                        </div>
                        
                        <div className="inline-block px-3 py-1 bg-neutral-800 rounded-full text-xs font-mono text-neutral-400 mb-4">
                            {std.category}
                        </div>
                        
                        <h3 className="text-2xl font-bold mb-3">{std.title}</h3>
                        <p className="text-neutral-400 leading-relaxed font-light">{std.desc}</p>
                    </motion.div>
                );
            })}
        </div>

        {/* Compliance Badge Section */}
        <div className="border-t border-neutral-800 pt-20">
            <h2 className="text-2xl font-bold mb-10">{t('security.compliance')}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {badges.map((badge) => (
                    <div key={badge} className="flex items-center gap-3 p-4 bg-neutral-900 rounded-lg">
                        <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                            <Check size={12} strokeWidth={4} />
                        </div>
                        <span className="font-medium text-neutral-300">{badge}</span>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </div>
  );
}
