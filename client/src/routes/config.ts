// Language constants
export const SUPPORTED_LANGUAGES = ['en', 'fr', 'es', 'zh', 'de', 'ar', 'pt', 'ru'] as const;
export type SupportedLanguage = typeof SUPPORTED_LANGUAGES[number];

// Route definitions per language
// Key is logical page name, Value is object with path per language
export const routePaths: Record<string, Record<SupportedLanguage, string>> = {
  home: {
    en: '', fr: '', es: '', zh: '',
    de: '', ar: '', pt: '', ru: ''
  },
  services: {
    en: 'services', fr: 'services', es: 'servicios', zh: 'services',
    de: 'leistungen', ar: 'services', pt: 'servicos', ru: 'services'
  },
  portfolio: {
    en: 'portfolio', fr: 'realisations', es: 'portafolio', zh: 'portfolio',
    de: 'referenzen', ar: 'portfolio', pt: 'portfolio', ru: 'portfolio'
  },
  contact: {
    en: 'contact', fr: 'contact', es: 'contacto', zh: 'contact',
    de: 'kontakt', ar: 'contact', pt: 'contato', ru: 'contact'
  },
  about: {
    en: 'about', fr: 'agence', es: 'agencia', zh: 'about',
    de: 'agentur', ar: 'about', pt: 'sobre', ru: 'about'
  },
  whyUs: {
    en: 'why-us', fr: 'pourquoi-nous', es: 'por-que-nosotros', zh: 'why-us',
    de: 'warum-wir', ar: 'why-us', pt: 'porque-nos', ru: 'why-us'
  },
  security: {
    en: 'security', fr: 'securite', es: 'seguridad', zh: 'security',
    de: 'sicherheit', ar: 'security', pt: 'seguranca', ru: 'security'
  },
  international: {
    en: 'international', fr: 'international', es: 'internacional', zh: 'international',
    de: 'international', ar: 'international', pt: 'internacional', ru: 'international'
  },
  expertise: {
    en: 'expertise', fr: 'expertise', es: 'experiencia', zh: 'expertise',
    de: 'expertise', ar: 'expertise', pt: 'experiencia', ru: 'expertise'
  },
  faq: {
    en: 'faq', fr: 'faq', es: 'faq', zh: 'faq',
    de: 'faq', ar: 'faq', pt: 'faq', ru: 'faq'
  },
  liveBoard: {
    en: 'live-board', fr: 'live-board', es: 'tablero-en-vivo', zh: 'live-board',
    de: 'live-board', ar: 'live-board', pt: 'live-board', ru: 'live-board'
  },
  packs: {
    en: 'packs', fr: 'packs', es: 'paquetes', zh: 'packs',
    de: 'pakete', ar: 'packs', pt: 'pacotes', ru: 'packs'
  },
  blog: {
    en: 'blog', fr: 'blog', es: 'blog', zh: 'blog',
    de: 'blog', ar: 'blog', pt: 'blog', ru: 'blog'
  },
  careers: {
    en: 'careers', fr: 'carrieres', es: 'carreras', zh: 'careers',
    de: 'karriere', ar: 'careers', pt: 'carreiras', ru: 'careers'
  },
  privacy: {
    en: 'privacy', fr: 'confidentialite', es: 'privacidad', zh: 'privacy',
    de: 'datenschutz', ar: 'privacy', pt: 'privacidade', ru: 'privacy'
  },
  terms: {
    en: 'terms', fr: 'conditions', es: 'terminos', zh: 'terms',
    de: 'agb', ar: 'terms', pt: 'termos', ru: 'terms'
  }
};

export const getRoute = (key: string, lang: string): string => {
  const l = (SUPPORTED_LANGUAGES.includes(lang as any) ? lang : 'en') as SupportedLanguage;
  const path = routePaths[key]?.[l] || routePaths[key]?.['en'];
  if (path === undefined) return '/';
  if (key === 'home') return `/${l}`;
  return `/${l}${path.startsWith('/') ? path : '/' + path}`;
};

// Resolve a localized pathname back to its logical route key.
export function getRouteKeyFromPath(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  const lang = segments[0];
  const slug = segments[1] || '';

  if (!lang || !SUPPORTED_LANGUAGES.includes(lang as SupportedLanguage)) {
    return 'home';
  }

  for (const [key, paths] of Object.entries(routePaths)) {
    if (paths[lang as SupportedLanguage] === slug) {
      return key;
    }
  }

  return 'home';
}

