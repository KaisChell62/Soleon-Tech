import express, { Express, Request, Response } from 'express';
import hpp from 'hpp';
import dotenv from 'dotenv';
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
connectDB();

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
