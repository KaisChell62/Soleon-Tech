import { Rocket } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { getRoute } from '../routes/config';

export default function Footer() {
  const { t, i18n } = useTranslation();
  const currentYear = new Date().getFullYear();
  const lang = i18n.language;

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
              <li><Link to={getRoute('services', lang)} className="hover:text-indigo-400 transition">{t('footer.services.main')}</Link></li>
              <li><Link to={getRoute('packs', lang)} className="hover:text-indigo-400 transition">{t('footer.services.configurator')}</Link></li>
              <li><Link to={getRoute('security', lang)} className="hover:text-indigo-400 transition">{t('footer.services.security')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">{t('footer.agency.title')}</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li><Link to={getRoute('whyUs', lang)} className="hover:text-indigo-400 transition">{t('footer.agency.why_us')}</Link></li>
              <li><Link to={getRoute('contact', lang)} className="hover:text-indigo-400 transition">{t('footer.agency.contact')}</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-sm">{t('footer.copyright', { year: currentYear })}</p>
          <div className="flex gap-6 text-sm text-neutral-500">
             <Link to={getRoute('privacy', lang)} className="hover:text-white transition">{t('footer.legal.privacy')}</Link>
             <Link to={getRoute('terms', lang)} className="hover:text-white transition">{t('footer.legal.terms')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
