import { useEffect, useState, useCallback, useMemo } from 'react';
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
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);
  try {
    const r1 = await detectViaCountryIs(controller.signal);
    if (r1) { console.log('[Geo] api.country.is →', r1.country, '→', r1.lang); return r1; }
    const r2 = await detectViaIpWhoIs(controller.signal);
    if (r2) { console.log('[Geo] ipwho.is →', r2.country, '→', r2.lang); return r2; }
    console.warn('[Geo] Both APIs failed');
    return null;
  } finally {
    clearTimeout(timeout);
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

    const resetToAutoDetect = useCallback(() => {
      clearAllLangStorage();
      setIsManuallySet(false);
    }, []);

    const forceRefreshGeo = useCallback(async () => {
      const result = await detectLanguageByIP().catch(() => null);
      if (!result) return;

      setDetectedCountry(result.country);
      try {
        localStorage.setItem('soleontech_geo_country', result.country);
      } catch {
        // noop
      }

      if (!getManualLanguage()) {
        i18n.changeLanguage(result.lang);
      }
    }, [i18n]);

    useEffect(() => {
      if (detectedCountry) return;
      void forceRefreshGeo();
    }, [detectedCountry, forceRefreshGeo]);

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
