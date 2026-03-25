import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Rocket } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import LanguageSelector from './LanguageSelector';
import { getRoute } from '../routes/config';

export default function Navbar() {
  const { t, i18n } = useTranslation('common');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const lang = i18n.language;
  
  const navLinks = [
    { name: t('nav.home'), path: getRoute('home', lang) },
    { name: t('nav.agency'), path: getRoute('whyUs', lang) },
    { name: t('nav.services'), path: getRoute('services', lang) },
    { name: t('nav.portfolio'), path: getRoute('portfolio', lang) },
    { name: t('nav.expertise'), path: getRoute('expertise', lang) },
    { name: t('nav.faq'), path: getRoute('faq', lang) },
    { name: t('nav.contact'), path: getRoute('contact', lang) },
  ];

  const homeLink = getRoute('home', lang);
  const contactLink = getRoute('contact', lang);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-neutral-900/80 backdrop-blur-md border-b border-neutral-800 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to={homeLink} className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 flex items-center gap-2">
          <Rocket className="text-indigo-400" />
          Soleon Tech
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-indigo-400 ${
                    isActive ? 'text-indigo-400' : 'text-neutral-300'
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          
          <li className="h-6 w-px bg-neutral-700 mx-2" aria-hidden="true" />
          
          <li><LanguageSelector /></li>
          
          <li>
            <Link
              to={contactLink}
              className="px-5 py-2 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium transition shadow-lg shadow-indigo-600/20"
            >
              {t('nav.contact')}
            </Link>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
            <LanguageSelector />
            <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-neutral-300 hover:text-white p-2"
            >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-neutral-900 border-b border-neutral-800 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4 flex flex-col items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-lg font-medium text-neutral-300 hover:text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
               <Link
                to={contactLink}
                className="px-8 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition shadow-lg w-full text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.start')}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
