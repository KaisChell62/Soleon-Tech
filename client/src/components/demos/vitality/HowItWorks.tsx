import { Download, Scan, PlayCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HowItWorks({ t }: { t: any }) {
  const steps = [
    { icon: Download, key: 'how_step_1' },
    { icon: Scan, key: 'how_step_2' },
    { icon: PlayCircle, key: 'how_step_3' },
  ];

  return (
    <section id='how' className='py-24 bg-black relative overflow-hidden scroll-mt-16'>
      <div className='absolute inset-0 bg-neutral-900/50 skew-y-3 transform origin-bottom-left z-0 pointer-events-none' />
      <div className='max-w-7xl mx-auto px-6 relative z-10'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-5xl font-black mb-6 leading-tight'>
            {t.how_title}
          </h2>
          <p className='text-neutral-400 text-lg max-w-2xl mx-auto'>
            {t.how_desc}
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-12 relative'>
          {/* Connecting Line (Desktop) */}
          <div className='hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-lime-500/0 via-lime-500/30 to-lime-500/0' />

          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className='relative flex flex-col items-center text-center'
            >
              <div className='w-24 h-24 rounded-full bg-neutral-900 border-4 border-lime-500/20 flex items-center justify-center mb-8 relative z-10 shadow-2xl shadow-lime-500/5 group hover:border-lime-500/50 transition-colors duration-300'>
                <div className='absolute inset-0 bg-lime-500/5 rounded-full blur-xl group-hover:bg-lime-500/10 transition-colors' />
                <step.icon size={32} className='text-lime-400 group-hover:scale-110 transition-transform duration-300' />
                <div className='absolute -bottom-3 bg-neutral-800 text-white text-xs font-bold px-3 py-1 rounded-full border border-white/10'>
                  0{i + 1}
                </div>
              </div>
              <h3 className='text-xl font-bold mb-3'>{t[step.key]}</h3>
              <p className='text-neutral-500 leading-relaxed max-w-xs'>
                {t[step.key + '_desc']}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
