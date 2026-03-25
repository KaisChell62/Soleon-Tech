import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguageDetection } from '../hooks/useLanguageDetection';
import { useNavigate, useLocation } from 'react-router-dom';

const languages = [
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'zh', label: '中文', flag: '🇨🇳' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'ar', label: 'العربية', flag: '🇸🇦' },
  { code: 'pt', label: 'Português', flag: '🇵🇹' },
  { code: 'ru', label: 'Русский', flag: '🇷🇺' },
];

const getFlagUrl = (code: string) => {
  const map: Record<string, string> = {
    en: 'gb',
    zh: 'cn',
    ar: 'sa',
  };
  return `https://flagcdn.com/24x18/${map[code] || code}.png`;
};

export default function LanguageSelector() {
  const { currentLanguage, changeLanguage, resetToAutoDetect, isManuallySet } = useLanguageDetection();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Handle RTL for Arabic
  useEffect(() => {
    const rtlLangs = ['ar'];
    const dir = rtlLangs.some(lang => currentLanguage.startsWith(lang)) ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);

  const currentLang = languages.find((l) => currentLanguage.startsWith(l.code)) || languages[0];

  const handleLanguageChange = (langCode: string) => {
    // 1. Change internal state
    changeLanguage(langCode);
    setIsOpen(false);
    
    // 2. Redirect to new URL
    // Replace "/oldLang/..." with "/newLang/..."
    const segments = location.pathname.split('/').filter(Boolean);
    if (segments.length > 0 && languages.some(l => l.code === segments[0])) {
        segments[0] = langCode;
        navigate(`/${segments.join('/')}`);
    } else {
        // Fallback if URL structure is weird
        navigate(`/${langCode}`);
    }
  };

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-full bg-neutral-800 hover:bg-neutral-700 transition border border-neutral-700 text-sm font-medium"
      >
        <img 
            src={getFlagUrl(currentLang.code)} 
            alt={currentLang.label} 
            className="w-5 h-auto rounded-sm object-cover"
        />
        <span className="uppercase">{currentLang.code}</span>
        <ChevronDown size={14} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute right-0 mt-2 w-48 bg-neutral-900 border border-neutral-800 rounded-xl shadow-xl overflow-hidden z-50 max-h-80 overflow-y-auto"
          >
            <div className="p-1 grid grid-cols-1 gap-0.5">
              {/* Auto-detect option */}
              <button
                onClick={() => { resetToAutoDetect(); setIsOpen(false); }}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition text-left w-full ${
                  !isManuallySet ? 'bg-green-600 text-white' : 'text-neutral-300 hover:bg-neutral-800'
                }`}
              >
                <Globe size={16} className="text-current" />
                <span>Auto</span>
                {!isManuallySet && <span className="ml-auto text-xs opacity-75">✓</span>}
              </button>
              
              <div className="border-t border-neutral-800 my-1" />
              
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition text-left w-full ${
                    currentLanguage.startsWith(lang.code) && isManuallySet ? 'bg-indigo-600 text-white' : 'text-neutral-300 hover:bg-neutral-800'
                  }`}
                >
                  <img 
                    src={getFlagUrl(lang.code)} 
                    alt={lang.label} 
                    className="w-5 h-auto rounded-sm object-cover"
                  />
                  <span>{lang.label}</span>
                  {currentLanguage.startsWith(lang.code) && isManuallySet && <span className="ml-auto text-xs opacity-75">✓</span>}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
