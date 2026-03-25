import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShoppingCart, Heart, Star, ChevronLeft, Plus } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function WebsitePreview() {
  const { t } = useTranslation('common');
  const [cartCount, setCartCount] = useState(0);
  const [activeTab, setActiveTab] = useState<'home' | 'shop' | 'product'>('home');
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  const products = [
    { id: 1, name: "Neon Runner X", price: 129, img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", color: "bg-red-500" },
    { id: 2, name: "Urban Drift", price: 89, img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", color: "bg-orange-500" },
    { id: 3, name: "Future Step", price: 159, img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", color: "bg-green-500" },
    { id: 4, name: "Sky Walker", price: 119, img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", color: "bg-blue-500" }
  ];

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto font-sans">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="rounded-xl overflow-hidden shadow-2xl bg-white border border-neutral-200 dark:bg-neutral-900 dark:border-neutral-800"
      >
        {/* Browser Header */}
        <div className="h-10 bg-neutral-100 dark:bg-neutral-800 flex items-center px-4 gap-4 border-b border-neutral-200 dark:border-neutral-700">
           <div className="flex gap-1.5">
               <div className="w-3 h-3 rounded-full bg-red-400" />
               <div className="w-3 h-3 rounded-full bg-yellow-400" />
               <div className="w-3 h-3 rounded-full bg-green-400" />
           </div>
           
           <div className="flex-1 bg-white dark:bg-neutral-900 h-7 rounded-md flex items-center px-3 text-xs text-neutral-500 shadow-sm justify-between">
                <div className="flex items-center">
                    <Search size={12} className="mr-2 opacity-50" />
                    <span>sneaker-world.store</span>
                </div>
                <div className="flex gap-2 opacity-50">
                    <Star size={10} />
                </div>
           </div>
        </div>

        {/* E-commerce Store Mockup */}
        <div className="h-[450px] overflow-hidden relative bg-neutral-50 text-black">
          {/* Nav */}
          <nav className="h-14 bg-white border-b border-neutral-200 px-4 flex justify-between items-center sticky top-0 z-20">
              <div className="font-bold tracking-tighter text-lg cursor-pointer flex items-center gap-1" onClick={() => setActiveTab('home')}>
                   <div className="w-4 h-4 bg-black rounded-tr-lg" />
                   SNEAKER.
              </div>
              <div className="flex items-center gap-4">
                  <div className="hidden sm:flex gap-4 text-xs font-semibold uppercase text-neutral-500">
                      <span className="text-black cursor-pointer hover:underline" onClick={() => setActiveTab('home')}>{t('services.preview.web.nav_new')}</span>
                      <span className="hover:text-black cursor-pointer transition" onClick={() => setActiveTab('shop')}>{t('services.preview.web.nav_men')}</span>
                      <span className="hover:text-black cursor-pointer transition">{t('services.preview.web.nav_women')}</span>
                  </div>
                  <div className="flex gap-3">
                      <Search size={18} className="cursor-pointer" />
                      <div className="relative cursor-pointer" onClick={() => setActiveTab('shop')}>
                        <ShoppingCart size={18} />
                        {cartCount > 0 && <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 text-white text-[8px] flex items-center justify-center rounded-full animate-bounce">{cartCount}</span>}
                      </div>
                  </div>
              </div>
          </nav>

          <AnimatePresence mode="popLayout">
            {activeTab === 'home' && (
              <motion.div 
                 key="home"
                 initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                 className="h-[calc(100%-3.5rem)] overflow-y-auto"
              >
                  {/* Hero Banner */}
                  <div className="relative h-64 bg-neutral-900 text-white p-8 flex flex-col justify-center overflow-hidden">
                      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-500 opacity-20" />
                      <div className="relative z-10 max-w-xs">
                          <span className="text-xs font-bold text-indigo-400 mb-2 block">{t('services.preview.web.hero_tag')}</span>
                          <h2 className="text-4xl font-bold mb-4 leading-none">{t('services.preview.web.hero_title_1')} <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">{t('services.preview.web.hero_title_2')}</span></h2>
                          <button onClick={() => setActiveTab('shop')} className="bg-white text-black px-6 py-2 rounded-full font-bold text-xs hover:scale-105 transition">
                              {t('services.preview.web.btn_shop')}
                          </button>
                      </div>
                      <motion.img 
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        src="https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                        className="absolute bottom-0 right-[-20%] w-[80%] object-cover mix-blend-screen"
                      />
                  </div>
                  
                  {/* Featured Categories */}
                  <div className="p-4 grid grid-cols-2 gap-2">
                       <div className="bg-neutral-200 h-32 rounded-lg relative overflow-hidden flex items-end p-4 cursor-pointer hover:opacity-90 transition group">
                           <span className="font-bold relative z-10">{t('services.preview.web.running')}</span>
                           <motion.div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition z-[1]" />
                           <img src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Running Shoes Preview" className="absolute inset-0 w-full h-full object-cover z-0" />
                       </div>
                       <div className="bg-neutral-200 h-32 rounded-lg relative overflow-hidden flex items-end p-4 cursor-pointer hover:opacity-90 transition group">
                           <span className="font-bold relative z-10">{t('services.preview.web.lifestyle')}</span>
                            <motion.div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition z-[1]" />
                            <img src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Lifestyle Sneakers Preview" className="absolute inset-0 w-full h-full object-cover z-0" />
                       </div>
                  </div>
              </motion.div>
            )}

            {activeTab === 'shop' && (
                <motion.div 
                    key="shop"
                    initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }}
                    className="h-[calc(100%-3.5rem)] overflow-y-auto p-4"
                >
                    <div className="grid grid-cols-2 gap-4">
                        {products.map((p) => (
                            <div key={p.id} className="group cursor-pointer" onClick={() => { setSelectedProduct(p.id); setActiveTab('product'); }}>
                                <div className="aspect-square bg-neutral-100 rounded-xl mb-2 overflow-hidden relative">
                                    <div className="absolute top-2 right-2 bg-white rounded-full p-1.5 shadow-sm opacity-0 group-hover:opacity-100 transition">
                                        <Heart size={14} className="text-neutral-400 hover:text-red-500" />
                                    </div>
                                    <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-500 mix-blend-multiply" />
                                </div>
                                <h3 className="font-bold text-sm">{p.name}</h3>
                                <div className="flex justify-between items-center mt-1">
                                    <span className="text-xs text-neutral-500">${p.price}</span>
                                    <button onClick={(e) => { e.stopPropagation(); addToCart(); }} className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center hover:bg-neutral-800 active:scale-95 transition">
                                        <Plus size={12} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            )}

            {activeTab === 'product' && selectedProduct && (
                 <motion.div 
                    key="product"
                    initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 20, opacity: 0 }}
                    className="h-[calc(100%-3.5rem)] overflow-y-auto bg-white absolute top-14 w-full z-10"
                 >
                     {(() => {
                        const product = products.find(p => p.id === selectedProduct) || products[0];
                        return (
                            <>
                                <div className="relative h-64 bg-neutral-100 p-4 flex items-center justify-center">
                                    <button onClick={() => setActiveTab('shop')} className="absolute top-4 left-4 p-2 bg-white rounded-full shadow-sm">
                                        <ChevronLeft size={20} />
                                    </button>
                                    <motion.img 
                                        initial={{ scale: 0.8 }} animate={{ scale: 1 }}
                                        src={product.img} 
                                        className="w-full h-full object-contain mix-blend-multiply drop-shadow-xl"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h2 className="text-2xl font-bold">{product.name}</h2>
                                            <div className="flex gap-1 text-yellow-400 mt-1">
                                                <Star size={12} fill="currentColor" />
                                                <Star size={12} fill="currentColor" />
                                                <Star size={12} fill="currentColor" />
                                                <Star size={12} fill="currentColor" />
                                                <Star size={12} fill="currentColor" />
                                                <span className="text-neutral-300 text-xs ml-1">(42)</span>
                                            </div>
                                        </div>
                                        <span className="text-xl font-bold">${product.price}</span>
                                    </div>
                                    
                                    <p className="text-sm text-neutral-500 mb-6 leading-relaxed">
                                        Engineered for speed, designed for the streets. The {product.name} features our latest cushioning technology and a breathable knit upper.
                                    </p>

                                    <div className="space-y-4">
                                        <div>
                                            <label className="text-xs font-bold uppercase text-neutral-400 mb-2 block">{t('services.preview.web.select_size')}</label>
                                            <div className="flex gap-2">
                                                {['US 7', 'US 8', 'US 9', 'US 10'].map(s => (
                                                    <button key={s} className="px-3 py-2 border border-neutral-200 rounded-lg text-xs font-bold hover:border-black active:bg-black active:text-white transition">
                                                        {s}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        <button 
                                            onClick={addToCart}
                                            className="w-full bg-black text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-neutral-800 active:scale-95 transition"
                                        >
                                            <ShoppingCart size={18} />
                                            {t('services.preview.web.add_to_cart')}
                                        </button>
                                    </div>
                                </div>
                            </>
                        );
                     })()}
                 </motion.div>
            )}

          </AnimatePresence>
        </div>
      </motion.div>
      <div className="absolute -bottom-6 w-full text-center text-neutral-400 text-xs">
          {t('services.preview.web.demo_text')}
      </div>
    </div>
  );
}
