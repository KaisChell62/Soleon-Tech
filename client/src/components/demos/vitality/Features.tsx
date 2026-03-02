import { Shield, Zap, Activity } from 'lucide-react';

const icons = {
  feat_1: Shield,
  feat_2: Zap,
  feat_3: Activity,
};

const colors = {
  feat_1: 'text-lime-400 bg-lime-500/10',
  feat_2: 'text-orange-400 bg-orange-500/10',
  feat_3: 'text-blue-400 bg-blue-500/10',
};

export default function Features({ t }: { t: any }) {
  const featuresList = ['feat_1', 'feat_2', 'feat_3'];

  return (
    <section id='features' className='py-24 bg-neutral-900 border-t border-white/5 scroll-mt-16'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='text-center mb-16'>
           <h2 className='text-3xl md:text-4xl font-black mb-4'>{t.nav_features}</h2>
           <p className='text-neutral-400 max-w-2xl mx-auto'>{t.hero_subtitle}</p>
        </div>
        <div className='grid md:grid-cols-3 gap-8'>
          {featuresList.map((key) => {
            const Icon = icons[key as keyof typeof icons] || Activity;
            const style = colors[key as keyof typeof colors] || '';
            
            return (
              <div key={key} className='bg-black/40 border border-white/5 p-8 rounded-3xl hover:bg-white/5 hover:translate-y-[-5px] transition-all duration-300 group relative overflow-hidden cursor-default'>
                <div className={'w-12 h-12 rounded-xl flex items-center justify-center mb-6 ' + style + ' group-hover:scale-110 transition-transform'}>
                  <Icon size={24} />
                </div>
                <h3 className='text-lg font-bold mb-3 text-white'>{t[key + '_title']}</h3>
                <p className='text-sm text-neutral-400 leading-relaxed'>{t[key + '_desc']}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
