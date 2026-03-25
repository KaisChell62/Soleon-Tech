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
