import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { routePaths, SUPPORTED_LANGUAGES } from '../routes/config';

const SITE_URL = 'https://soleon.tech'; // Replace with actual domain
const DEFAULT_IMAGE = 'https://soleon.tech/og-image.jpg'; // Replace

const getMetaInfo = (path: string, t: (key: string) => string) => {
  // Check for specific routes
  if (path === '/' || path.match(/^\/[a-z]{2}$/)) {
    return {
      title: t('meta.home.title') || 'Soleon Tech | Digital Excellence',
      description: t('meta.home.desc') || 'Agence digitale spécialisée dans le développement web, mobile et la stratégie internationale.',
      keywords: 'agence web, développement, seo, international, react, nodejs'
    };
  }
  
  if (path.includes('/services')) {
    return {
      title: t('meta.services.title') || 'Nos Services | Soleon Tech',
      description: t('meta.services.desc') || 'Développement sur mesure, Applications Mobiles, E-commerce et Stratégie Digitale.',
      keywords: 'services web, mobile app, e-commerce, saas'
    };
  }

  if (path.includes('/portfolio')) {
    return {
      title: t('meta.portfolio.title') || 'Nos Réalisations | Soleon Tech',
      description: t('meta.portfolio.desc') || 'Découvrez nos projets clients et notre expertise technique.',
      keywords: 'portfolio, projets, études de cas'
    };
  }

  if (path.includes('/contact')) {
    return {
      title: t('meta.contact.title') || 'Contactez-nous | Soleon Tech',
      description: t('meta.contact.desc') || 'Discutons de votre projet. Devis gratuit et réponse sous 24h.',
      keywords: 'contact, devis, agence digitale paris'
    };
  }

  return {
    title: 'Soleon Tech | Digital Excellence',
    description: 'Agence digitale globale. Nous transformons vos idées en produits numériques d\'exception.',
    keywords: 'digital agency, web development, innovation'
  };
};

export default function PageMeta() {
  const { pathname } = useLocation();
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || 'fr';
  
  const { title, description, keywords } = getMetaInfo(pathname, t);
  const currentUrl = `${SITE_URL}${pathname}`;

  // Organization Schema
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Soleon Tech",
    "url": SITE_URL,
    "logo": `${SITE_URL}/logo.png`,
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
          href={`${SITE_URL}/${lang}${pathname.substring(3)}`} // Rough logic, ideally map correctly
        />
      ))}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={DEFAULT_IMAGE} />
      <meta property="og:site_name" content="Soleon Tech" />
      <meta property="og:locale" content={currentLang} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={DEFAULT_IMAGE} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}
