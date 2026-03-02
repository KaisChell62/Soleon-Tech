import { Star, MessageCircle, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Reviews({ t }: { t: any }) {
  const reviews = [
    { key: 'review_1', stars: 5, avatar: 'https://images.unsplash.com/photo-1542385151-efd9000e85a5?auto=format&fit=crop&q=80&w=200' },
    { key: 'review_2', stars: 5, avatar: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=200' },
    { key: 'review_3', stars: 5, avatar: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&q=80&w=200' },
  ];

  return (
    <section id='reviews' className='py-24 bg-neutral-900 border-t border-white/5 scroll-mt-20'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='flex flex-col md:flex-row justify-between items-end mb-16 gap-8'>
          <div>
            <div className='inline-flex items-center gap-2 px-3 py-1 bg-lime-500/10 border border-lime-500/20 text-lime-400 text-[10px] font-bold uppercase tracking-wider rounded-full mb-6'>
               <MessageCircle size={10} /> Testimonials
            </div>
            <h2 className='text-3xl md:text-5xl font-black mb-4 leading-tight'>
               {t.review_title}
            </h2>
            <p className='text-neutral-400 text-lg max-w-lg'>
               {t.review_desc}
            </p>
          </div>
          <div className='flex items-center gap-4 bg-black/50 p-4 rounded-2xl border border-white/5 backdrop-blur-md'>
            <div className='text-4xl font-black text-white'>4.9</div>
            <div className='flex flex-col'>
              <div className='flex gap-1 text-yellow-400'>
                 {[1,2,3,4,5].map(i => <Star key={i} size={14} fill='currentColor' />)}
              </div>
              <span className='text-xs text-neutral-500 font-bold uppercase tracking-wider mt-1'>App Store Rating</span>
            </div>
          </div>
        </div>

        <div className='grid md:grid-cols-3 gap-8'>
           {reviews.map((rev, i) => (
             <motion.div 
               key={i}
               whileHover={{ y: -5 }}
               className='bg-black p-8 rounded-3xl border border-neutral-800 hover:border-lime-500/30 transition-all duration-300 relative group'
             >
                <Quote size={48} className='absolute top-6 right-6 text-neutral-800 group-hover:text-lime-500/10 transition-colors' />
                <div className='flex items-center gap-3 mb-6'>
                   <div className='w-12 h-12 rounded-full overflow-hidden border-2 border-neutral-800 group-hover:border-lime-500 transition-colors'>
                      <img src={rev.avatar} className='w-full h-full object-cover' alt="User" />
                   </div>
                   <div>
                      <h4 className='font-bold text-white'>{t[rev.key + '_name']}</h4>
                      <p className='text-xs text-lime-500 font-medium'>{t[rev.key + '_role']}</p>
                   </div>
                </div>
                <div className='flex gap-1 text-yellow-500 mb-4 text-xs'>
                   {[...Array(rev.stars)].map((_, j) => <Star key={j} size={12} fill='currentColor' />)}
                </div>
                <p className='text-neutral-400 leading-relaxed italic relative z-10'>
                   "{t[rev.key + '_text']}"
                </p>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
