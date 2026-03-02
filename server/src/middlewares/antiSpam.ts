import { Request, Response, NextFunction } from 'express';

/**
 * Minimum time (ms) a human takes to fill a form
 * Bots typically submit instantly
 */
const MIN_FORM_TIME_MS = 3000; // 3 seconds

/**
 * Honeypot anti-spam middleware
 * 
 * Checks:
 * 1. Honeypot field must be empty (bots fill all fields)
 * 2. Form submission time check (bots are too fast)
 * 3. Validates timestamp is present and recent
 */
export function honeypotCheck(req: Request, res: Response, next: NextFunction): void {
  const { website, _hp, timestamp } = req.body;
  
  // Check honeypot fields - if filled, it's a bot
  if (website || _hp) {
    console.warn(`[ANTI-SPAM] Honeypot triggered from IP: ${req.ip}`);
    // Return success to not alert the bot
    res.status(200).json({
      success: true,
      data: { message: 'Message sent successfully' }
    });
    return;
  }
  
  // Check submission time
  if (timestamp) {
    const submissionTime = Date.now() - timestamp;
    
    // Too fast = bot
    if (submissionTime < MIN_FORM_TIME_MS) {
      console.warn(`[ANTI-SPAM] Too fast submission (${submissionTime}ms) from IP: ${req.ip}`);
      res.status(200).json({
        success: true,
        data: { message: 'Message sent successfully' }
      });
      return;
    }
    
    // Too old = suspicious (more than 30 minutes)
    if (submissionTime > 30 * 60 * 1000) {
      console.warn(`[ANTI-SPAM] Stale timestamp from IP: ${req.ip}`);
      res.status(400).json({
        success: false,
        error: { message: 'Form expired, please refresh the page', code: 'FORM_EXPIRED' }
      });
      return;
    }
  }
  
  // Clean honeypot fields from body before passing to controller
  delete req.body.website;
  delete req.body._hp;
  delete req.body.timestamp;
  
  next();
}

/**
 * Common spam patterns to block
 */
const SPAM_PATTERNS = [
  /\[url=/i,
  /\[link=/i,
  /<a\s+href/i,
  /viagra|cialis|casino|poker|lottery|prize|winner/i,
  /click here|buy now|limited time|act now/i,
  /http(s)?:\/\/[^\s]{50,}/i, // Very long URLs
  /(.)\1{10,}/i, // Repeated characters
];

/**
 * Content spam filter
 * Blocks messages with common spam patterns
 */
export function spamFilter(req: Request, res: Response, next: NextFunction): void {
  const { message, subject, name } = req.body;
  const content = `${name || ''} ${subject || ''} ${message || ''}`;
  
  const isSpam = SPAM_PATTERNS.some(pattern => pattern.test(content));
  
  if (isSpam) {
    console.warn(`[ANTI-SPAM] Spam content detected from IP: ${req.ip}`);
    // Return success to not alert spammer
    res.status(200).json({
      success: true,
      data: { message: 'Message sent successfully' }
    });
    return;
  }
  
  next();
}

/**
 * Combined anti-spam middleware
 */
export function antiSpam(req: Request, res: Response, next: NextFunction): void {
  // First check honeypot
  honeypotCheck(req, res, () => {
    // Then check spam content
    spamFilter(req, res, next);
  });
}
