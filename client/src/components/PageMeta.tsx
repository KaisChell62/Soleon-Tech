import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getRoute, getRouteKeyFromPath, SUPPORTED_LANGUAGES } from '../routes/config';

type MetaInfo = {
  title: string;
  description: string;
  keywords: string;
};

function getMetaInfo(routeKey: string, t: (key: string, options?: Record<string, unknown>) => string): MetaInfo {
  const metaByRoute: Record<string, MetaInfo> = {
    home: {
      title: t('meta.home.title', { defaultValue: 'Soleon Tech | Digital Excellence' }),
      description: t('meta.home.desc', { defaultValue: 'Agence digitale spécialisée dans le développement web, mobile et la stratégie internationale.' }),
      keywords: 'agence web, développement, seo, international, react, nodejs',
    },
    services: {
      title: t('meta.services.title', { defaultValue: 'Services | Soleon Tech' }),
      description: t('meta.services.desc', { defaultValue: 'Développement sur mesure, applications mobiles, branding et stratégie digitale.' }),
      keywords: 'services web, mobile app, e-commerce, saas',
    },
    portfolio: {
      title: t('meta.portfolio.title', { defaultValue: 'Réalisations | Soleon Tech' }),
      description: t('meta.portfolio.desc', { defaultValue: 'Découvrez nos projets clients et notre expertise technique.' }),
      keywords: 'portfolio, projets, études de cas',
    },
    contact: {
      title: t('meta.contact.title', { defaultValue: 'Contact | Soleon Tech' }),
      description: t('meta.contact.desc', { defaultValue: 'Discutons de votre projet. Devis gratuit et réponse sous 24h.' }),
      keywords: 'contact, devis, agence digitale paris',
    },
  };

  return metaByRoute[routeKey] || metaByRoute.home;
};

export default function PageMeta() {
  const { pathname } = useLocation();
  const { t, i18n } = useTranslation();
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://soleon-tech.fr';
  const defaultImage = `${siteUrl}/og-image.jpg`;
  const currentLang = i18n.language || 'fr';
  const routeKey = getRouteKeyFromPath(pathname);
  const { title, description, keywords } = getMetaInfo(routeKey, t);
  const currentUrl = `${siteUrl}${pathname}`;

  // Organization Schema
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Soleon Tech",
    "url": siteUrl,
    "logo": `${siteUrl}/logo.png`,
    "sameAs": [
      "https://twitter.com/soleontech",
      "https://linkedin.com/company/soleontech"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+33-1-00-00-00-00",
      "contactType": "customer service",
      "availableLanguage": ["French", "English", "Spanish"]
    }
  };

  return (
    <Helmet>
      {/* Basic Meta */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Soleon Tech" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Canonical */}
      <link rel="canonical" href={currentUrl} />

      {/* Hreflang - Improve for multilingual SEO */}
      {SUPPORTED_LANGUAGES.map(lang => (
        <link 
          key={lang} 
          rel="alternate" 
          hrefLang={lang} 
          href={`${siteUrl}${getRoute(routeKey, lang)}`}
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href={`${siteUrl}${getRoute(routeKey, 'en')}`} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={defaultImage} />
      <meta property="og:site_name" content="Soleon Tech" />
      <meta property="og:locale" content={currentLang} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={defaultImage} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}
