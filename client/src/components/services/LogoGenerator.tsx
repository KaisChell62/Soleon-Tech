import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Hexagon, Circle, Triangle, Square, Type, Palette, Layout } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function LogoGenerator() {
  const { t } = useTranslation('common');
  const [activeShape, setActiveShape] = useState(0);
  const [activeColor, setActiveColor] = useState(0);
  const [activeFont, setActiveFont] = useState(0);

  const shapes = [
    { id: 'hex', icon: Hexagon, label: t('services.preview.logo.shape') },
    { id: 'circle', icon: Circle, label: 'Circ' },
    { id: 'tri', icon: Triangle, label: 'Tri' },
    { id: 'sq', icon: Square, label: 'Box' },
  ];

  // Colors...
  const colors = [
    { id: 'indigo', value: 'bg-indigo-500', text: 'text-indigo-500' },
    { id: 'emerald', value: 'bg-emerald-500', text: 'text-emerald-500' },
    { id: 'rose', value: 'bg-rose-500', text: 'text-rose-500' },
    { id: 'amber', value: 'bg-amber-500', text: 'text-amber-500' },
  ];

  const fonts = [
    { id: 'sans', value: 'font-sans', label: t('services.preview.logo.modern') },
    { id: 'serif', value: 'font-serif', label: t('services.preview.logo.classic') },
    { id: 'mono', value: 'font-mono', label: t('services.preview.logo.tech') },
  ];

  const ShapeIcon = shapes[activeShape].icon;

  return (
    <div className="w-full max-w-md mx-auto bg-neutral-900 rounded-2xl border border-neutral-800 overflow-hidden shadow-2xl">
      {/* Visual Preview Area */}
      <div className="h-64 flex items-center justify-center bg-neutral-950/50 relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

        <motion.div 
            layout
            className="flex flex-col items-center gap-4 z-10"
        >
            <AnimatePresence mode="wait">
                <motion.div
                    key={`${activeShape}-${activeColor}`}
                    initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    exit={{ scale: 0.8, opacity: 0, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className={`${colors[activeColor].text}`}
                >
                    <ShapeIcon size={80} strokeWidth={1.5} />
                </motion.div>
            </AnimatePresence>

            <motion.div
                key={activeFont}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className={`text-3xl font-bold tracking-tight text-white ${fonts[activeFont].value}`}
            >
                Brand<span className={colors[activeColor].text}>Labs</span>
            </motion.div>
        </motion.div>
      </div>

      {/* Controls */}
      <div className="p-6 space-y-6 bg-neutral-900">
        
        {/* Helper Text */}
        <div className="flex items-center justify-between text-xs font-medium text-neutral-500 uppercase tracking-wider mb-2">
            <span>{t('services.preview.logo.config')}</span>
            <span className="flex items-center gap-1"><Layout size={12} /> {t('services.preview.logo.live')}</span>
        </div>

        {/* Shape Selector */}
        <div className="space-y-3">
             <div className="text-xs text-neutral-400 flex items-center gap-2">
                <Layout size={14} /> {t('services.preview.logo.shape')}
            </div>
            <div className="flex gap-2">
                {shapes.map((shape, idx) => (
                    <button
                        key={shape.id}
                        onClick={() => setActiveShape(idx)}
                        className={`flex-1 py-2 rounded-lg flex justify-center items-center transition
                            ${activeShape === idx ? 'bg-neutral-700 text-white shadow-lg' : 'bg-neutral-800 text-neutral-500 hover:bg-neutral-750'}`}
                    >
                        <shape.icon size={18} />
                    </button>
                ))}
            </div>
        </div>

        {/* Color Selector */}
        <div className="space-y-3">
             <div className="text-xs text-neutral-400 flex items-center gap-2">
                <Palette size={14} /> {t('services.preview.logo.color')}
            </div>
            <div className="flex gap-3">
                {colors.map((color, idx) => (
                    <button
                        key={color.id}
                        onClick={() => setActiveColor(idx)}
                        className={`w-8 h-8 rounded-full transition-all duration-300 ring-2 ring-offset-2 ring-offset-neutral-900 ${color.value}
                            ${activeColor === idx ? 'ring-white scale-110' : 'ring-transparent opacity-60 hover:opacity-100'}`}
                    />
                ))}
            </div>
        </div>

        {/* Font Selector */}
        <div className="space-y-3">
             <div className="text-xs text-neutral-400 flex items-center gap-2">
                <Type size={14} /> {t('services.preview.logo.typography')}
            </div>
            <div className="flex gap-2">
                {fonts.map((font, idx) => (
                    <button
                        key={font.id}
                        onClick={() => setActiveFont(idx)}
                        className={`flex-1 py-2 rounded-lg text-xs font-medium transition border
                             ${activeFont === idx ? 'bg-neutral-800 border-neutral-600 text-white' : 'bg-transparent border-neutral-800 text-neutral-500 hover:border-neutral-700'}`}
                    >
                        {font.label}
                    </button>
                ))}
            </div>
        </div>

      </div>
    </div>
  );
}
