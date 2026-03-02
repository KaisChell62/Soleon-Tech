import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { blogPosts } from '../../data/content';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export default function Blog() {
  const { t } = useTranslation();

  return (
    <div className="bg-neutral-950 min-h-screen text-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{t('blog.title')}</h1>
            <p className="text-xl text-neutral-400">{t('blog.subtitle')}</p>
        </div>

        {/* Featured Post (First one) */}
        {blogPosts.length > 0 && (
            <div className="mb-20">
                <div className="relative rounded-3xl overflow-hidden aspect-[21/9] group cursor-pointer">
                    <img 
                        src={blogPosts[0].imageUrl} 
                        alt={blogPosts[0].title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-8 md:p-12 max-w-4xl">
                        <span className="inline-block px-3 py-1 bg-indigo-600 rounded-full text-xs font-bold mb-4">
                            {blogPosts[0].category}
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 hover:text-indigo-300 transition-colors">
                            {blogPosts[0].title}
                        </h2>
                        <p className="text-lg text-neutral-300 mb-6 line-clamp-2">
                            {blogPosts[0].excerpt}
                        </p>
                        <div className="flex items-center gap-6 text-sm text-neutral-400">
                             <span className="flex items-center gap-2"><Calendar size={14} /> {blogPosts[0].date}</span>
                             <span className="flex items-center gap-2"><Clock size={14} /> {blogPosts[0].readTime} {t('blog.read')}</span>
                        </div>
                    </div>
                </div>
            </div>
        )}

        {/* Recent Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
                <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group cursor-pointer flex flex-col h-full bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:border-indigo-500/30 transition-colors"
                >
                    <div className="aspect-video overflow-hidden">
                         <img 
                            src={post.imageUrl} 
                            alt={post.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                         />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">{post.category}</span>
                            <span className="text-xs text-neutral-500">{post.readTime}</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-300 transition-colors">
                            {post.title}
                        </h3>
                        <p className="text-neutral-400 text-sm line-clamp-3 mb-6 flex-1">
                            {post.excerpt}
                        </p>
                        <div className="flex items-center text-sm font-bold text-white group-hover:translate-x-2 transition-transform">
                            {t('blog.readArticle')} <ArrowRight size={16} className="ml-2" />
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>

      </div>
    </div>
  );
}
