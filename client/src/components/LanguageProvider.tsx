import { useEffect, useState, useCallback, useRef, useMemo } from 'react';
import type { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import {
  LanguageDetectionContext,
  SUPPORTED_LANGUAGES,
  COUNTRY_TO_LANG,
  MANUAL_LANG_KEY,
} from '../hooks/useLanguageDetection';
import type { LanguageDetectionValue, SupportedLanguage } from '../hooks/useLanguageDetection';

// ─── Helpers ────────────────────────────────────────────────────────────────

function isSupportedLanguage(lang: string): lang is SupportedLanguage {
  return SUPPORTED_LANGUAGES.includes(lang.split('-')[0].toLowerCase() as SupportedLanguage);
}

function normalizeLanguage(lang: string): SupportedLanguage {
  const code = lang.split('-')[0].toLowerCase();
  return isSupportedLanguage(code) ? (code as SupportedLanguage) : 'en';
}

function getManualLanguage(): SupportedLanguage | null {
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
    const res = await fetch(`https://ipwho.is/?_t=${Date.now()}`, {
      signal,
      cache: 'no-store',
      headers: { 'Cache-Control': 'no-cache, no-store', Pragma: 'no-cache' },
    });
    if (!res.ok) return null;
    const data = await res.json();
    if (!data.success) return null;
    const country = (data.country_code || '').toUpperCase();
    if (!country) return null;
    return { lang: COUNTRY_TO_LANG[country] || 'en', country };
  } catch {
    return null;
  }
}

async function detectLanguageByIP(): Promise<GeoResult | null> {
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
const POLL_INTERVAL = 10_000; // 10 seconds

// ─── Provider (singleton — all detection logic lives here) ──────────────────

interface Props { children: ReactNode }

export default function LanguageProvider({ children }: Props) {
  const { i18n } = useTranslation();
  const [isManuallySet, setIsManuallySet] = useState(() => getManualLanguage() !== null);
  const [isReady, setIsReady] = useState(false);
  const lastCountry = useRef('');
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    return () => { mounted.current = false; };
  }, []);

  // ── Core IP detection ─────────────────────────────────────────────────────
  const detectFromIP = useCallback(async () => {
    if (getManualLanguage()) return;

    const result = await detectLanguageByIP();
    if (!mounted.current) return;

    if (!result) {
      const bl = normalizeLanguage(navigator.language || 'en');
      if (i18n.language !== bl) {
        console.log('[Geo] API fail → browser fallback:', bl);
        await i18n.changeLanguage(bl);
      }
      return;
    }

    const countryChanged = result.country !== lastCountry.current;
    const langMismatch = i18n.language !== result.lang;

    if (countryChanged || langMismatch) {
      console.log(
        `[Geo] ${countryChanged ? 'COUNTRY CHANGED' : 'Lang mismatch'}:`,
        lastCountry.current || '(init)', '→', result.country,
        '| lang:', i18n.language, '→', result.lang,
      );
      lastCountry.current = result.country;
      await i18n.changeLanguage(result.lang);
    } else {
      console.log('[Geo] Poll — same country:', result.country, '(', result.lang, ')');
    }
  }, [i18n]);

  // ── Initial detection on mount ────────────────────────────────────────────
  useEffect(() => {
    (async () => {
      const manual = getManualLanguage();
      if (manual) {
        if (i18n.language !== manual) await i18n.changeLanguage(manual);
      } else {
        await detectFromIP();
      }
      if (mounted.current) setIsReady(true);
    })();
  }, [detectFromIP, i18n]);

  // ── Polling every 10s (only in Auto mode) ─────────────────────────────────
  useEffect(() => {
    if (isManuallySet) {
      console.log('[Geo] Manual mode — polling OFF');
      return;
    }
    console.log('[Geo] Auto mode — polling every', POLL_INTERVAL / 1000, 's');
    const id = setInterval(detectFromIP, POLL_INTERVAL);
    return () => { clearInterval(id); console.log('[Geo] Polling cleared'); };
  }, [isManuallySet, detectFromIP]);

  // ── Re-detect on tab focus ────────────────────────────────────────────────
  useEffect(() => {
    const onVis = () => {
      if (document.visibilityState === 'visible' && !getManualLanguage()) {
        console.log('[Geo] Tab visible → re-check');
        detectFromIP();
      }
    };
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, [detectFromIP]);

  // ── Manual change (user picks from dropdown) ─────────────────────────────
  const changeLanguage = useCallback((lang: string) => {
    const n = normalizeLanguage(lang);
    setManualLanguage(n);
    setIsManuallySet(true);
    i18n.changeLanguage(n);
    console.log('[Geo] Manual →', n);
  }, [i18n]);

  // ── Reset to Auto ─────────────────────────────────────────────────────────
  const resetToAutoDetect = useCallback(() => {
    clearAllLangStorage();
    lastCountry.current = '';
    setIsManuallySet(false); // triggers polling useEffect
    console.log('[Geo] → Auto mode');
  }, []);

  // ── Context value (memoized) ──────────────────────────────────────────────
  const value: LanguageDetectionValue = useMemo(() => ({
    currentLanguage: i18n.language,
    detectedCountry: lastCountry.current,
    changeLanguage,
    resetToAutoDetect,
    forceRefreshGeo: resetToAutoDetect,
    supportedLanguages: SUPPORTED_LANGUAGES,
    isManuallySet,
  }), [i18n.language, changeLanguage, resetToAutoDetect, isManuallySet]);

  if (!isReady) return null;

  return (
    <LanguageDetectionContext.Provider value={value}>
      {children}
    </LanguageDetectionContext.Provider>
  );
}
