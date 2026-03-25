import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { SUPPORTED_LANGUAGES, type SupportedLanguage } from '../routes/config';

interface LanguageLayoutProps {
  forcedLanguage?: string;
}

export default function LanguageLayout({ forcedLanguage }: LanguageLayoutProps) {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const hasChecked = useRef(false);

  useEffect(() => {
    const segments = location.pathname.split('/').filter(Boolean);
    const urlLang = segments[0] as SupportedLanguage; // e.g. "en", "fr"

    // If we have a forced prop (inside the loop in App.tsx), use it.
    // If not (standalone route), parse URL.
    const targetLang = forcedLanguage || (SUPPORTED_LANGUAGES.includes(urlLang) ? urlLang : undefined);

    if (targetLang) {
      if (i18n.language !== targetLang) {
        i18n.changeLanguage(targetLang);
      }
    } else if (!hasChecked.current) {
       // Root URL access without lang? Redirect to default 'en'
       // But App.tsx handles root '/' redirect.
       // This block handles other cases but let's be safe:
       navigate('/en', { replace: true });
    }
    hasChecked.current = true;
  }, [forcedLanguage, i18n, location.pathname, navigate]);

  return <Outlet />;
}
