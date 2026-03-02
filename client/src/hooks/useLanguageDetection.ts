import { createContext, useContext } from 'react';

// ─── Supported languages ────────────────────────────────────────────────────
export const SUPPORTED_LANGUAGES = ['fr', 'en', 'es', 'zh', 'de', 'ar', 'pt', 'ru'] as const;
export type SupportedLanguage = typeof SUPPORTED_LANGUAGES[number];

// ─── localStorage key ──────────────────────────────────────────────────────
export const MANUAL_LANG_KEY = 'Soleon Tech_manual_lang';

// ─── Country → Language mapping ─────────────────────────────────────────────
export const COUNTRY_TO_LANG: Record<string, SupportedLanguage> = {
  // French-speaking
  FR: 'fr', BE: 'fr', CH: 'fr', CA: 'fr', LU: 'fr', MC: 'fr',
  SN: 'fr', CI: 'fr', ML: 'fr', BF: 'fr', NE: 'fr', TG: 'fr',
  BJ: 'fr', GA: 'fr', CG: 'fr', CD: 'fr', CM: 'fr', MG: 'fr',
  // Spanish-speaking
  ES: 'es', MX: 'es', AR: 'es', CO: 'es', CL: 'es', PE: 'es', VE: 'es',
  EC: 'es', GT: 'es', CU: 'es', BO: 'es', DO: 'es', HN: 'es',
  PY: 'es', SV: 'es', NI: 'es', CR: 'es', PA: 'es', UY: 'es', PR: 'es',
  // German-speaking
  DE: 'de', AT: 'de', LI: 'de',
  // Portuguese-speaking
  PT: 'pt', BR: 'pt', AO: 'pt', MZ: 'pt',
  // Russian-speaking
  RU: 'ru', BY: 'ru', KZ: 'ru', KG: 'ru', UA: 'ru',
  // Arabic-speaking
  SA: 'ar', AE: 'ar', EG: 'ar', MA: 'ar', DZ: 'ar', TN: 'ar',
  LY: 'ar', SD: 'ar', IQ: 'ar', SY: 'ar', YE: 'ar', JO: 'ar',
  LB: 'ar', KW: 'ar', OM: 'ar', QA: 'ar', BH: 'ar',
  // Chinese-speaking
  CN: 'zh', TW: 'zh', HK: 'zh', MO: 'zh',
  // English-speaking (+ countries without a dedicated translation)
  US: 'en', GB: 'en', AU: 'en', NZ: 'en', IE: 'en', ZA: 'en',
  NG: 'en', KE: 'en', GH: 'en', IN: 'en', PK: 'en', PH: 'en',
  SG: 'en', MY: 'en', JP: 'en', KR: 'en', TH: 'en', VN: 'en',
  ID: 'en', IL: 'en', TR: 'en', SE: 'en', NO: 'en', DK: 'en',
  FI: 'en', NL: 'en', PL: 'en', CZ: 'en', RO: 'en', HU: 'en',
  GR: 'en', HR: 'en', SK: 'en', BG: 'en', RS: 'en',
};

// ─── Context types ──────────────────────────────────────────────────────────
export interface LanguageDetectionValue {
  currentLanguage: string;
  detectedCountry: string;
  changeLanguage: (lang: string) => void;
  resetToAutoDetect: () => void;
  forceRefreshGeo: () => void;
  supportedLanguages: typeof SUPPORTED_LANGUAGES;
  isManuallySet: boolean;
}

export const LanguageDetectionContext = createContext<LanguageDetectionValue | null>(null);

// ─── Consumer hook (lightweight — all logic lives in the Provider) ──────────
export function useLanguageDetection(): LanguageDetectionValue {
  const ctx = useContext(LanguageDetectionContext);
  if (!ctx) {
    throw new Error('useLanguageDetection must be used within <LanguageProvider>');
  }
  return ctx;
}

export default useLanguageDetection;
