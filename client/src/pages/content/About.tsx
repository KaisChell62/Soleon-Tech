import { useTranslation } from 'react-i18next';
import { Target, Heart, Zap, Award } from 'lucide-react';

export default function About() {
  const { t } = useTranslation();

  const values = [
    { icon: Target, ...t('about.values.precision', { returnObjects: true }) as object },
    { icon: Zap, ...t('about.values.velocity', { returnObjects: true }) as object },
    { icon: Heart, ...t('about.values.passion', { returnObjects: true }) as object },
    { icon: Award, ...t('about.values.excellence', { returnObjects: true }) as object }
  ];

  return (
    <div className="bg-neutral-950 min-h-screen text-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Manifeste */}
        <div className="max-w-4xl mx-auto text-center mb-24">
            <h1 className="text-4xl md:text-7xl font-bold mb-8">
                {t('about.title')} <span className="text-indigo-500">{t('about.highlight')}</span> {t('about.title2')}
            </h1>
            <p className="text-xl md:text-2xl text-neutral-400 leading-relaxed">
                {t('about.subtitle')}
            </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
            {values.map((item: any, i) => (
                <div key={i} className="bg-neutral-900/50 border border-neutral-800 p-8 rounded-2xl">
                    <item.icon className="w-10 h-10 text-indigo-500 mb-4" />
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-neutral-400">{item.desc}</p>
                </div>
            ))}
        </div>

      </div>
    </div>
  );
}
