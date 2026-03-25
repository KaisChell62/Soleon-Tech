import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  type?: string;
  image?: string;
}

export default function SEO({ 
  title, 
  description, 
  canonical,
  type = 'website',
  image = '/og-image.jpg' 
}: SEOProps) {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const siteUrl = window.location.origin;
  
  // Default values if not provided
  const metaTitle = title || t('seo.defaultTitle', 'Soleon Tech | Premium Digital Agency');
  const metaDescription = description || t('seo.defaultDescription', 'Your partner for digital transformation.');
  const canonicalUrl = canonical || `${siteUrl}${location.pathname}`;
  
  // Hreflang logic
  const languages = ['fr', 'en', 'es', 'zh', 'de', 'ar', 'pt', 'ru'];
  
  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={`${siteUrl}${image}`} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />
      
      {/* Hreflang tags - Generated dynamically based on current path */}
      {languages.map((lang) => (
        <link 
          key={lang} 
          rel="alternate" 
          hrefLang={lang} 
          href={`${siteUrl}/${lang}${location.pathname.replace(/^\/[a-z]{2}/, '')}`} 
        />
      ))}
      <link 
          rel="alternate" 
          hrefLang="x-default" 
          href={`${siteUrl}/en${location.pathname.replace(/^\/[a-z]{2}/, '')}`} 
        />
        
      {/* Structured Data (Organization) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Soleon Tech",
          "url": siteUrl,
          "logo": `${siteUrl}/logo.png`,
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-555-555-5555",
            "contactType": "customer service"
          }
        })}
      </script>
    </Helmet>
  );
}
