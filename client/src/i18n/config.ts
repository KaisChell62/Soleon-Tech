import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import only the 8 supported languages
import fr from './locales/fr.json';
import en from './locales/en.json';
import es from './locales/es.json';
import zh from './locales/zh.json';
import de from './locales/de.json';
import ar from './locales/ar.json';
import pt from './locales/pt.json';
import ru from './locales/ru.json';

export const defaultNS = 'common';

export const resources = {
  fr: { common: fr },
  en: { common: en },
  es: { common: es },
  zh: { common: zh },
  de: { common: de },
  ar: { common: ar },
  pt: { common: pt },
  ru: { common: ru },
} as const;

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    defaultNS,
    resources,
    interpolation: {
      escapeValue: false,
    },
    // No detection plugin - our useLanguageDetection hook handles everything
  });

export default i18n;
