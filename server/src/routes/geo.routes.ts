import { Router, Request, Response } from 'express';
import { geoLimiter } from '../middlewares';

const router = Router();

// Apply geo-specific rate limiting
router.use(geoLimiter);

// Supported languages
const SUPPORTED_LANGUAGES = ['fr', 'en', 'es', 'zh', 'de', 'ar', 'pt', 'ru'];

// Country to language mapping
const COUNTRY_TO_LANG: Record<string, string> = {
  // French-speaking
  FR: 'fr', BE: 'fr', CH: 'fr', CA: 'fr', LU: 'fr', MC: 'fr',
  SN: 'fr', CI: 'fr', ML: 'fr', BF: 'fr', NE: 'fr', TG: 'fr',
  BJ: 'fr', GA: 'fr', CG: 'fr', CD: 'fr', CM: 'fr', MG: 'fr',
  
  // Spanish-speaking
  ES: 'es', MX: 'es', AR: 'es', CO: 'es', CL: 'es', PE: 'es',
  VE: 'es', EC: 'es', GT: 'es', CU: 'es', BO: 'es', DO: 'es',
  HN: 'es', PY: 'es', SV: 'es', NI: 'es', CR: 'es', PA: 'es',
  UY: 'es', PR: 'es',
  
  // German-speaking
  DE: 'de', AT: 'de', LI: 'de',
  
  // Portuguese-speaking
  PT: 'pt', BR: 'pt', AO: 'pt', MZ: 'pt', GW: 'pt', CV: 'pt',
  
  // Russian-speaking
  RU: 'ru', BY: 'ru', KZ: 'ru', KG: 'ru', UA: 'ru',
  
  // Arabic-speaking
  SA: 'ar', AE: 'ar', EG: 'ar', MA: 'ar', DZ: 'ar', TN: 'ar',
  LY: 'ar', SD: 'ar', IQ: 'ar', SY: 'ar', YE: 'ar', JO: 'ar',
  LB: 'ar', KW: 'ar', OM: 'ar', QA: 'ar', BH: 'ar',
  
  // Chinese-speaking
  CN: 'zh', TW: 'zh', HK: 'zh', MO: 'zh',
  
  // English-speaking (default fallback)
  US: 'en', GB: 'en', AU: 'en', NZ: 'en', IE: 'en', ZA: 'en',
  NG: 'en', KE: 'en', GH: 'en', IN: 'en', PK: 'en', PH: 'en',
  SG: 'en', MY: 'en',
};

/**
 * Get client IP from request headers
 * Handles proxies and load balancers
 */
function getClientIP(req: Request): string {
  const forwarded = req.headers['x-forwarded-for'];
  if (forwarded) {
    const ips = Array.isArray(forwarded) ? forwarded[0] : forwarded.split(',')[0];
    return ips.trim();
  }
  
  const realIP = req.headers['x-real-ip'];
  if (realIP) {
    return Array.isArray(realIP) ? realIP[0] : realIP;
  }
  
  return req.socket.remoteAddress || req.ip || '';
}

/**
 * Check if IP is private/local
 */
function isPrivateIP(ip: string): boolean {
  const privateRanges = [
    /^127\./,
    /^10\./,
    /^172\.(1[6-9]|2[0-9]|3[0-1])\./,
    /^192\.168\./,
    /^::1$/,
    /^fc00:/,
    /^fe80:/,
    /^localhost$/,
  ];
  
  return privateRanges.some(range => range.test(ip));
}

/**
 * GET /api/geo/detect
 * Detect language based on client IP geolocation
 */
router.get('/detect', async (req: Request, res: Response) => {
  try {
    const clientIP = getClientIP(req);
    
    // For local/private IPs, don't claim geo detection worked
    // Return source: 'private' so the client tries ipapi.co directly
    if (!clientIP || isPrivateIP(clientIP)) {
      return res.json({
        success: false,
        data: {
          language: 'en',
          source: 'private-ip',
          ip: 'private',
        },
      });
    }

    // Use external IP geolocation service with timeout
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3000); // 3s timeout
      
      const geoResponse = await fetch(`https://ipapi.co/${clientIP}/json/`, {
        signal: controller.signal
      });
      clearTimeout(timeoutId);
      
      if (geoResponse.ok) {
        const geoData = await geoResponse.json();
        const countryCode = geoData.country_code?.toUpperCase();
        
        // Map country to language
        let detectedLang = 'en';
        if (countryCode && COUNTRY_TO_LANG[countryCode]) {
          detectedLang = COUNTRY_TO_LANG[countryCode];
        }

        return res.json({
          success: true,
          data: {
            language: detectedLang,
            country: countryCode || 'unknown',
            source: 'geolocation',
            ip: clientIP.substring(0, 3) + '***',
          },
        });
      }
    } catch (e) {
      console.warn('External geo service failed, falling back:', e);
    }
    
    // Fallback if service failed
    throw new Error('Geolocation service unavailable or failed');

  } catch (error) {
    console.error('Geo detection error:', error);
    
    // Return success: false so the client tries ipapi.co directly from browser
    return res.json({
      success: false,
      data: {
        language: 'en',
        source: 'error-fallback',
      },
    });
  }
});

/**
 * GET /api/geo/languages
 * Return list of supported languages
 */
router.get('/languages', (_req: Request, res: Response) => {
  res.json({
    success: true,
    data: {
      supported: SUPPORTED_LANGUAGES,
      default: 'en',
    },
  });
});

export default router;
