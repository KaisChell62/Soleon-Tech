import { Request, Response, NextFunction } from 'express';

/**
 * Custom error class with status code
 */
export class AppError extends Error {
  statusCode: number;
  code: string;
  isOperational: boolean;

  constructor(message: string, statusCode: number = 500, code: string = 'SERVER_ERROR') {
    super(message);
    this.statusCode = statusCode;
    this.code = code;
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

/**
 * Async handler wrapper to catch async errors
 */
export const asyncHandler = (fn: Function) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};

/**
 * Not found handler - 404
 */
export function notFoundHandler(req: Request, res: Response, _next: NextFunction): void {
  res.status(404).json({
    success: false,
    error: { 
      message: 'Resource not found', 
      code: 'NOT_FOUND' 
    }
  });
}

/**
 * Sanitize error for logging (remove sensitive data)
 */
function sanitizeErrorForLog(error: Error, req: Request): Record<string, unknown> {
  return {
    timestamp: new Date().toISOString(),
    message: error.message,
    code: (error as AppError).code || 'UNKNOWN',
    path: req.path,
    method: req.method,
    ip: req.ip,
    // Never log: passwords, tokens, full body, headers with auth
  };
}

/**
 * Global error handler middleware
 * - Never exposes stack traces to client
 * - Logs securely without sensitive data
 * - Returns generic messages in production
 */
export function errorHandler(
  error: Error | AppError, 
  req: Request, 
  res: Response, 
  _next: NextFunction
): void {
  // Log error securely (no sensitive data)
  console.error('[ERROR]', JSON.stringify(sanitizeErrorForLog(error, req)));

  // Determine status code
  const statusCode = (error as AppError).statusCode || 500;
  const errorCode = (error as AppError).code || 'SERVER_ERROR';

  // In production, never expose internal error details
  const isProduction = process.env.NODE_ENV === 'production';
  
  if (statusCode >= 500) {
    // Server errors - always generic message
    res.status(statusCode).json({
      success: false,
      error: { 
        message: 'An unexpected error occurred', 
        code: 'SERVER_ERROR' 
      }
    });
    return;
  }

  // Client errors (4xx) - can show message but no stack
  res.status(statusCode).json({
    success: false,
    error: { 
      message: isProduction ? 'Request failed' : error.message,
      code: errorCode
    }
  });
}

/**
 * MongoDB duplicate key error handler
 */
export function handleMongoError(error: Error): AppError {
  if ((error as any).code === 11000) {
    return new AppError('Duplicate entry', 409, 'DUPLICATE_ERROR');
  }
  if (error.name === 'ValidationError') {
    return new AppError('Invalid data', 400, 'VALIDATION_ERROR');
  }
  if (error.name === 'CastError') {
    return new AppError('Invalid ID format', 400, 'INVALID_ID');
  }
  return new AppError('Database error', 500, 'DB_ERROR');
}
