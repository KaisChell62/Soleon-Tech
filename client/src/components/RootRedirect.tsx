import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getManualLanguage, detectLanguageByIP, normalizeLanguage } from './LanguageProvider';

export default function RootRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      // 1. Check manual preference first
      const manual = getManualLanguage();
      if (manual) {
        navigate(`/${manual}`, { replace: true });
        return;
      }

      // 2. Try detection (async)
      const result = await detectLanguageByIP().catch(() => null);
      if (result && result.lang) {
           navigate(`/${result.lang}`, { replace: true });
           return;
      }

      // 3. Fallback to browser lang
      const browserLang = normalizeLanguage(navigator.language);
      navigate(`/${browserLang}`, { replace: true });

    })();
  }, [navigate]);

  // Loading state while deciding
  return <div className="min-h-screen bg-neutral-950" />;
}
