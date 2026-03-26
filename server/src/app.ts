import express, { Express, Request, Response } from 'express';
import hpp from 'hpp';
import dotenv from 'dotenv';

// Load env vars FIRST
dotenv.config();

// Add detailed error handlers
process.on('uncaughtException', (err) => {
    console.error('[FATAL] Uncaught Exception:', err);
});
process.on('unhandledRejection', (reason, promise) => {
    console.error('[FATAL] Unhandled Rejection at:', promise, 'reason:', reason);
});
process.on('exit', (code) => {
    console.log(`[server] Process exiting with code: ${code}`);
});

import { connectDB } from './config/db';
import contactRoutes from './routes/contactRoutes';
import geoRoutes from './routes/geo.routes';
import {
  helmetConfig,
  corsConfig,
  additionalSecurityHeaders,
  standardLimiter,
  mongoSanitizer,
  xssSanitizer,
  blockDangerousPatterns,
  errorHandler,
  notFoundHandler,
} from './middlewares';

// Load env vars FIRST
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5000;

// Database Connection
// connectDB().catch(err => console.error('[database] Init error:', err));
if (process.env.MONGO_URI || process.env.NODE_ENV === 'production') {
    connectDB(); 
} else {
    console.log('[database] Skipping DB connection check in local dev without URI');
}

// ===================
// SECURITY MIDDLEWARES
// ===================

// Trust proxy (for rate limiting behind nginx/load balancer)
app.set('trust proxy', 1);

// Helmet - Security headers (CSP, HSTS, etc.)
app.use(helmetConfig);

// CORS - Restrictive origin policy
app.use(corsConfig);

// Additional security headers
app.use(additionalSecurityHeaders as express.RequestHandler);

// Rate limiting - Global
app.use(standardLimiter);

// Body parsers with size limits
app.use(express.json({ limit: '10kb' })); // Limit JSON body size
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// HPP - Prevent HTTP Parameter Pollution
// app.use(hpp());

// MongoDB injection sanitizer
// app.use(mongoSanitizer);

// XSS sanitizer
app.use(xssSanitizer);

// Block dangerous patterns
app.use(blockDangerousPatterns);

// ===================
// ROUTES
// ===================

app.use('/api/contact', contactRoutes);
app.use('/api/geo', geoRoutes);

app.get('/api/ip', async (req: Request, res: Response) => {
  const GEO_TIMEOUT = 5000;

  async function tryFetch(url: string): Promise<Record<string, unknown> | null> {
    const controller = new AbortController();
    const tid = setTimeout(() => controller.abort(), GEO_TIMEOUT);
    try {
      const r = await fetch(url, { signal: controller.signal, headers: { Accept: 'application/json' } });
      clearTimeout(tid);
      if (!r.ok) return null;
      return await r.json() as Record<string, unknown>;
    } catch {
      clearTimeout(tid);
      return null;
    }
  }

  try {
    // 1st: ipwho.is
    let data = await tryFetch('https://ipwho.is/');
    if (data && data['success']) {
      res.json({ success: true, data });
      return;
    }

    // 2nd: ipapi.co
    data = await tryFetch('https://ipapi.co/json/');
    if (data && !data['error']) {
      res.json({
        success: true,
        data: { success: true, country_code: data['country_code'], country: data['country_name'], ip: data['ip'] },
      });
      return;
    }

    // 3rd: freeipapi.com (forward client IP if available)
    const clientIp = ((req.headers['x-forwarded-for'] as string) || '').split(',')[0].trim() || req.ip || '';
    const ipSegment = clientIp && !clientIp.startsWith('::') ? `/${clientIp}` : '';
    data = await tryFetch(`https://freeipapi.com/api/json${ipSegment}`);
    if (data && data['countryCode']) {
      res.json({
        success: true,
        data: { success: true, country_code: data['countryCode'], country: data['countryName'], ip: data['ipAddress'] },
      });
      return;
    }

    // All APIs failed
    res.status(502).json({ success: false, error: { message: 'All geolocation services unavailable', code: 'GEO_ALL_FAILED' } });
  } catch (error) {
    console.error('[IP_PROXY] Geolocation error:', error);
    res.status(502).json({ success: false, error: { message: 'Unable to fetch geolocation data', code: 'GEO_PROXY_ERROR' } });
  }
});

// Health check (no sensitive info)
app.get('/', (_req: Request, res: Response) => {
  res.json({ status: 'ok', timestamp: Date.now() });
});

// ===================
// ERROR HANDLING
// ===================

// 404 handler
app.use(notFoundHandler);

// Global error handler
app.use(errorHandler);

// ===================
// START SERVER
// ===================

app.listen(port, () => {
  console.log(`[server]: Server running on port ${port} in ${process.env.NODE_ENV || 'development'} mode`);
});

// Force keep-alive (Hack for diagnosis)
setInterval(() => {}, 60000);
