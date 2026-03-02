/**
 * LANGUAGE_INFO — Maps site language codes to display info + flag.
 * Used by Contact form and QuoteModal language selector.
 */
export const LANGUAGE_INFO: Record<string, { name: string; flag: string; nativeName: string }> = {
  fr: { name: 'Français',    flag: 'fr', nativeName: 'Français' },
  en: { name: 'English',     flag: 'gb', nativeName: 'English' },
  de: { name: 'Deutsch',     flag: 'de', nativeName: 'Deutsch' },
  es: { name: 'Español',     flag: 'es', nativeName: 'Español' },
  ar: { name: 'العربية',     flag: 'sa', nativeName: 'العربية' },
  pt: { name: 'Português',   flag: 'br', nativeName: 'Português' },
  ru: { name: 'Русский',     flag: 'ru', nativeName: 'Русский' },
  zh: { name: '中文',         flag: 'cn', nativeName: '中文' },
};

export const SORTED_LANGUAGES = Object.entries(LANGUAGE_INFO);

export type LanguageCode = keyof typeof LANGUAGE_INFO;
