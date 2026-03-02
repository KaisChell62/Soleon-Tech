import { z, ZodError, ZodIssue } from 'zod';
import { Request, Response, NextFunction } from 'express';

const SUPPORTED_LANGUAGES = ['fr', 'en', 'de', 'es', 'ar', 'pt', 'ru', 'zh'] as const;

/**
 * Contact form validation schema
 * Uses 'language' instead of 'country' — maps to site language codes
 */
export const contactSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters'),

  email: z.string()
    .email('Invalid email format')
    .max(254, 'Email too long'),

  language: z.enum(SUPPORTED_LANGUAGES, { error: 'Unsupported language code' }),

  subject: z.string()
    .min(3, 'Subject must be at least 3 characters')
    .max(200, 'Subject must be less than 200 characters'),

  message: z.string()
    .min(10, 'Message must be at least 10 characters')
    .max(5000, 'Message must be less than 5000 characters'),

  // Anti-spam
  website: z.string().max(0, 'Invalid submission').optional(),
  timestamp: z.number().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;

/**
 * Generic validation middleware factory
 * Creates a middleware that validates request body against a Zod schema
 */
export function validate<T extends z.ZodSchema>(schema: T) {
  return (req: Request, res: Response, next: NextFunction): void => {
    try {
      const result = schema.safeParse(req.body);
      
      if (!result.success) {
        const zodError = result.error as ZodError;
        const errors = zodError.issues.map((issue: ZodIssue) => ({
          field: issue.path.join('.'),
          message: issue.message
        }));
        
        res.status(400).json({
          success: false,
          error: { 
            message: 'Validation failed', 
            code: 'VALIDATION_ERROR',
            details: errors 
          }
        });
        return;
      }
      
      // Replace body with validated & typed data
      req.body = result.data;
      next();
    } catch (error) {
      console.error('[VALIDATION] Unexpected error:', error);
      res.status(400).json({
        success: false,
        error: { message: 'Invalid request data', code: 'VALIDATION_ERROR' }
      });
    }
  };
}

/**
 * Contact form validator middleware
 */
export const validateContact = validate(contactSchema);

/**
 * Quote validation schema
 */
export const quoteSchema = z.object({
  email: z.string().email('Invalid email').max(254),
  language: z.enum(['fr', 'en', 'de', 'es', 'ar', 'pt', 'ru', 'zh'] as const),
  currency: z.string().max(3).optional(),
  items: z.array(z.object({
    category: z.string().max(100),
    option: z.string().max(200),
    price: z.number().min(0),
  })).max(50),
  oneTimeTotal: z.number().min(0),
  monthlyTotal: z.number().min(0),
});

export const validateQuote = validate(quoteSchema);

/**
 * Geo detection validation schema
 */
export const geoSchema = z.object({}).strict();

export const validateGeo = validate(geoSchema);
