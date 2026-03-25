import rateLimit from 'express-rate-limit';
import { Request, Response } from 'express';

/**
 * Standard rate limiter for general API endpoints
 * 100 requests per 15 minutes per IP
 */
export const standardLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // 100 requests per window
  message: {
    success: false,
    error: { message: 'Too many requests, please try again later', code: 'RATE_LIMIT' }
  },
  standardHeaders: true,
  legacyHeaders: false,
  // Use default keyGenerator (express-rate-limit handles trust proxy automatically)
  validate: { trustProxy: false, xForwardedForHeader: false },
});

/**
 * Strict rate limiter for sensitive endpoints (contact, auth)
 * 50 requests per 15 minutes per IP
 */
export const strictLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 50, // 50 requests per window
  message: {
    success: false,
    error: { message: 'Too many attempts, please try again in 15 minutes', code: 'RATE_LIMIT_STRICT' }
  },
  standardHeaders: true,
  legacyHeaders: false,
  validate: { trustProxy: false, xForwardedForHeader: false },
  handler: (_req: Request, res: Response) => {
    res.status(429).json({
      success: false,
      error: { message: 'Too many attempts, please try again later', code: 'RATE_LIMIT_STRICT' }
    });
  }
});

/**
 * Auth rate limiter - very strict for login/register attempts
 * 5 attempts per hour per IP
 */
export const authLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5, // 5 attempts per hour
  message: {
    success: false,
    error: { message: 'Too many login attempts, please try again in 1 hour', code: 'AUTH_RATE_LIMIT' }
  },
  standardHeaders: true,
  legacyHeaders: false,
  skipSuccessfulRequests: true, // Only count failed attempts
});

/**
 * Geo detection limiter - moderate
 * 30 requests per minute
 */
export const geoLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 30,
  message: {
    success: false,
    error: { message: 'Too many requests', code: 'RATE_LIMIT' }
  },
  standardHeaders: true,
  legacyHeaders: false,
});
