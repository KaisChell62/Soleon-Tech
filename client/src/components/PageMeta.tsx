import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const routeTitles: Record<string, string> = {
  '/': 'nav.home',
  '/services': 'nav.services',
  '/portfolio': 'nav.portfolio',
  '/contact': 'nav.contact',
  '/about': 'nav.about', // Assuming these keys exist or will be added
  '/blog': 'nav.blog',
  '/careers': 'nav.careers',
  '/terms': 'nav.terms',
  '/faq': 'nav.faq',
  '/why-us': 'Why Us', // Fallback if keys don't exist yet
  '/security': 'Security',
  '/international': 'International',
  '/live-board': 'Live Board',
  '/packs': 'Packs'
};

const getTitleFromPath = (path: string, t: (key: string) => string): string => {
  // Exact match
  if (routeTitles[path]) {
    return t(routeTitles[path]).includes('nav.') ? routeTitles[path] : t(routeTitles[path]);
  }

  // Handle Demos
  if (path.startsWith('/demos/')) {
    const demoName = path.split('/')[2];
    return demoName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') + ' Demo';
  }

  // Handle Portfolio Detail
  if (path.startsWith('/portfolio/')) {
    return 'Project Detail';
  }

  return 'Soleon Tech';
};

export default function PageMeta() {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    const title = getTitleFromPath(pathname, t);
    document.title = `${title} | Soleon Tech`;
  }, [pathname, t]);

  return null;
}
