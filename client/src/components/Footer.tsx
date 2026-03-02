import { Rocket } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 border-t border-neutral-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Rocket className="text-indigo-400" />
              <span className="text-xl font-bold text-white">Soleon Tech</span>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed">
              {t('footer.description')}
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">{t('footer.services.title')}</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li><a href="/services" className="hover:text-indigo-400 transition">{t('footer.services.main')}</a></li>
              <li><a href="/packs" className="hover:text-indigo-400 transition">{t('footer.services.configurator')}</a></li>
              <li><a href="/security" className="hover:text-indigo-400 transition">{t('footer.services.security')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">{t('footer.agency.title')}</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li><a href="/why-us" className="hover:text-indigo-400 transition">{t('footer.agency.why_us')}</a></li>
              <li><a href="/contact" className="hover:text-indigo-400 transition">{t('footer.agency.contact')}</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-sm">{t('footer.copyright', { year: currentYear })}</p>
          <div className="flex gap-6 text-sm text-neutral-500">
             <a href="/privacy" className="hover:text-white transition">{t('footer.legal.privacy')}</a>
             <a href="/terms" className="hover:text-white transition">{t('footer.legal.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
