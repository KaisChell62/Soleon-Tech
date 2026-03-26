import { useEffect, useState, useCallback, useMemo, useRef } from 'react';
import type { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import {
  LanguageDetectionContext,
  SUPPORTED_LANGUAGES,
  COUNTRY_TO_LANG,
  MANUAL_LANG_KEY,
} from '../hooks/useLanguageDetection';
import type { LanguageDetectionValue, SupportedLanguage } from '../hooks/useLanguageDetection';
import { request } from '../api/client';

// ─── Helpers ────────────────────────────────────────────────────────────────

export function isSupportedLanguage(lang: string): lang is SupportedLanguage {
  return SUPPORTED_LANGUAGES.includes(lang.split('-')[0].toLowerCase() as SupportedLanguage);
}

export function normalizeLanguage(lang: string): SupportedLanguage {
  const code = lang.split('-')[0].toLowerCase();
  return isSupportedLanguage(code) ? (code as SupportedLanguage) : 'en';
}

export function getManualLanguage(): SupportedLanguage | null {
  try {
    const stored = localStorage.getItem(MANUAL_LANG_KEY);
    if (stored && isSupportedLanguage(stored)) return stored as SupportedLanguage;
  } catch { /* noop */ }
  return null;
}

function setManualLanguage(lang: SupportedLanguage): void {
  try { localStorage.setItem(MANUAL_LANG_KEY, lang); } catch { /* noop */ }
}

function clearAllLangStorage(): void {
  try {
    localStorage.removeItem(MANUAL_LANG_KEY);
    localStorage.removeItem('i18nextLng');
    localStorage.removeItem('soleontech_geo_lang');
    localStorage.removeItem('soleontech_geo_country');
    document.cookie = 'i18next=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  } catch { /* noop */ }
}

// ─── Geo IP detection (cache-busted, with fallback) ─────────────────────────

type GeoResult = { lang: SupportedLanguage; country: string };

function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    const id = setTimeout(() => reject(new Error('timeout')), ms);
    promise.then(
      (value) => {
        clearTimeout(id);
        resolve(value);
      },
      (err) => {
        clearTimeout(id);
        reject(err);
      },
    );
  });
}

/** Primary: api.country.is — ultra-lightweight, HTTPS, free, no key */
async function detectViaCountryIs(signal: AbortSignal): Promise<GeoResult | null> {
  try {
    const res = await fetch(`https://api.country.is/?_t=${Date.now()}`, {
      signal,
      cache: 'no-store',
      headers: { 'Cache-Control': 'no-cache, no-store', Pragma: 'no-cache' },
    });
    if (!res.ok) return null;
    const data = await res.json();
    const country = (data.country || '').toUpperCase();
    if (!country) return null;
    return { lang: COUNTRY_TO_LANG[country] || 'en', country };
  } catch {
    return null;
  }
}

/** Fallback: ipwho.is — HTTPS, free, no key, detailed */
async function detectViaIpWhoIs(signal: AbortSignal): Promise<GeoResult | null> {
  try {
    const payload = await request(`/ip?_t=${Date.now()}`, {
      signal,
      cache: 'no-store',
      headers: { 'Cache-Control': 'no-cache, no-store', Pragma: 'no-cache' },
    });
    if (!payload.success || !payload.data?.success) return null;
    const country = (payload.data.country_code || '').toUpperCase();
    if (!country) return null;
    return { lang: COUNTRY_TO_LANG[country] || 'en', country };
  } catch {
    return null;
  }
}

export async function detectLanguageByIP(): Promise<GeoResult | null> {
  const c1 = new AbortController();
  const c2 = new AbortController();

  try {
    const [r1, r2] = await Promise.allSettled([
      withTimeout(detectViaCountryIs(c1.signal), 2200),
      withTimeout(detectViaIpWhoIs(c2.signal), 3000),
    ]);

    const countryIs = r1.status === 'fulfilled' ? r1.value : null;
    if (countryIs) {
      console.log('[Geo] api.country.is →', countryIs.country, '→', countryIs.lang);
      return countryIs;
    }

    const ipWho = r2.status === 'fulfilled' ? r2.value : null;
    if (ipWho) {
      console.log('[Geo] ipwho.is →', ipWho.country, '→', ipWho.lang);
      return ipWho;
    }

    console.warn('[Geo] Both APIs failed');
    return null;
  } finally {
    c1.abort();
    c2.abort();
  }
}

  // ─── Polling interval ───────────────────────────────────────────────────────
  // Disabled to prevent conflict with URL-based routing
  // const POLL_INTERVAL = 10_000;

  // ─── Provider (singleton — all detection logic lives here) ──────────────────

  interface Props { children: ReactNode }

  export default function LanguageProvider({ children }: Props) {
    const { i18n } = useTranslation();
    const [isManuallySet, setIsManuallySet] = useState(() => getManualLanguage() !== null);
    const [detectedCountry, setDetectedCountry] = useState(() => {
      try {
        return localStorage.getItem('soleontech_geo_country') || '';
      } catch {
        return '';
      }
    });
    
    const changeLanguage = useCallback((lang: string) => {
      // This is now mostly used by the LanguageSelector to redirect URL
      // But if it's used directly:
      const n = normalizeLanguage(lang);
      setManualLanguage(n);
      setIsManuallySet(true);
      i18n.changeLanguage(n);
    }, [i18n]);

    const forceRefreshGeo = useCallback(async () => {
      const result = await detectLanguageByIP().catch(() => null);

      if (!result) {
        // Both geo APIs failed — fall back to browser language
        if (!getManualLanguage()) {
          const browserLang = normalizeLanguage(navigator.language);
          i18n.changeLanguage(browserLang);
        }
        return;
      }

      setDetectedCountry(result.country);
      try {
        localStorage.setItem('soleontech_geo_country', result.country);
      } catch {
        // noop — storage may be blocked by privacy settings
      }

      if (!getManualLanguage()) {
        i18n.changeLanguage(result.lang);
      }
    }, [i18n]);

    const resetToAutoDetect = useCallback(() => {
      clearAllLangStorage();
      setDetectedCountry('');
      setIsManuallySet(false);
      // Immediately re-detect so the user gets the right language without waiting.
      void forceRefreshGeo();
    }, [forceRefreshGeo]);

    const geoInitialized = useRef(false);
    useEffect(() => {
      if (geoInitialized.current) return;
      geoInitialized.current = true;
      void forceRefreshGeo();
    }, [forceRefreshGeo]);

    useEffect(() => {
      if (isManuallySet) return;

      const intervalId = setInterval(() => {
        void forceRefreshGeo();
      }, 15_000);

      const handleFocus = () => {
        void forceRefreshGeo();
      };

      window.addEventListener('focus', handleFocus);
      document.addEventListener('visibilitychange', handleFocus);

      return () => {
        clearInterval(intervalId);
        window.removeEventListener('focus', handleFocus);
        document.removeEventListener('visibilitychange', handleFocus);
      };
    }, [isManuallySet, forceRefreshGeo]);

    const value: LanguageDetectionValue = useMemo(() => ({
      currentLanguage: i18n.language,
      detectedCountry,
      changeLanguage,
      resetToAutoDetect,
      forceRefreshGeo,
      supportedLanguages: SUPPORTED_LANGUAGES,
      isManuallySet,
    }), [i18n.language, detectedCountry, changeLanguage, resetToAutoDetect, forceRefreshGeo, isManuallySet]);

    return (
      <LanguageDetectionContext.Provider value={value}>
        {children}
      </LanguageDetectionContext.Provider>
    );
  }
