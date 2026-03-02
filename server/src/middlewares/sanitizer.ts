import { Request, Response, NextFunction } from 'express';
import mongoSanitize from 'express-mongo-sanitize';
import validator from 'validator';

/**
 * MongoDB query injection sanitizer
 * Removes $ and . from req.body, req.query, req.params
 */
export const mongoSanitizer = mongoSanitize({
  replaceWith: '_',
  onSanitize: ({ req, key }) => {
    console.warn(`[SECURITY] Sanitized key "${key}" in request from IP: ${req.ip}`);
  }
});

/**
 * XSS sanitization for string values
 * Escapes HTML entities to prevent script injection
 */
function sanitizeString(str: string): string {
  if (typeof str !== 'string') return str;
  return validator.escape(str.trim());
}

/**
 * Recursively sanitize an object
 */
function sanitizeObject(obj: Record<string, unknown>): Record<string, unknown> {
  const sanitized: Record<string, unknown> = {};
  
  for (const [key, value] of Object.entries(obj)) {
    // Skip null/undefined
    if (value === null || value === undefined) {
      sanitized[key] = value;
      continue;
    }
    
    // Sanitize strings
    if (typeof value === 'string') {
      sanitized[key] = sanitizeString(value);
      continue;
    }
    
    // Recursively sanitize nested objects
    if (typeof value === 'object' && !Array.isArray(value)) {
      sanitized[key] = sanitizeObject(value as Record<string, unknown>);
      continue;
    }
    
    // Sanitize arrays
    if (Array.isArray(value)) {
      sanitized[key] = value.map(item => {
        if (typeof item === 'string') return sanitizeString(item);
        if (typeof item === 'object' && item !== null) {
          return sanitizeObject(item as Record<string, unknown>);
        }
        return item;
      });
      continue;
    }
    
    // Keep other types as-is (numbers, booleans)
    sanitized[key] = value;
  }
  
  return sanitized;
}

/**
 * XSS Protection middleware
 * Sanitizes all string inputs to prevent XSS attacks
 */
export function xssSanitizer(req: Request, _res: Response, next: NextFunction): void {
  // Sanitize body (most important — user-submitted JSON data)
  try {
    if (req.body && typeof req.body === 'object') {
      req.body = sanitizeObject(req.body);
    }
  } catch (error) {
    console.error('[SECURITY] Body sanitization error:', error);
  }

  // Note: req.query is read-only in newer Express/router versions — skip direct assignment
  // Query params are short strings validated by Zod schemas and not a primary XSS vector here

  // Sanitize URL params
  try {
    if (req.params && typeof req.params === 'object') {
      req.params = sanitizeObject(req.params) as typeof req.params;
    }
  } catch (error) {
    console.error('[SECURITY] Params sanitization error:', error);
  }

  next();
}

/**
 * Block dangerous patterns in request
 * Detects potential injection attempts
 */
export function blockDangerousPatterns(req: Request, res: Response, next: NextFunction): void {
  const dangerousPatterns = [
    /\$where/i,
    /\$regex/i,
    /\$ne/i,
    /\$gt/i,
    /\$lt/i,
    /\$or/i,
    /\$and/i,
    /<script/i,
    /javascript:/i,
    /on\w+\s*=/i, // onclick=, onerror=, etc.
    /eval\s*\(/i,
    /document\./i,
    /window\./i,
  ];
  
  const checkValue = (value: unknown): boolean => {
    if (typeof value === 'string') {
      return dangerousPatterns.some(pattern => pattern.test(value));
    }
    if (typeof value === 'object' && value !== null) {
      return Object.values(value).some(checkValue);
    }
    return false;
  };
  
  const isDangerous = checkValue(req.body) || checkValue(req.query) || checkValue(req.params);
  
  if (isDangerous) {
    console.warn(`[SECURITY] Blocked dangerous request from IP: ${req.ip}`);
    res.status(400).json({
      success: false,
      error: { message: 'Invalid request', code: 'INVALID_INPUT' }
    });
    return;
  }
  
  next();
}
