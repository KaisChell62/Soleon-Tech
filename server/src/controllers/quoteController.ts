/**
 * Quote Controller
 * POST /api/contact/quote — handles configurator quote submissions
 */

import { Request, Response, NextFunction } from 'express';
import { asyncHandler } from '../middlewares';
import { sendAdminQuoteEmail, sendUserQuoteEmail, QuoteEmailData } from '../services/email.service';
import { generateQuotePDF } from '../services/pdf.service';

export const sendQuote = asyncHandler(async (req: Request, res: Response, _next: NextFunction) => {
  console.log('[QUOTE] Received quote request:', req.body.email);
  const { email, language, firstName, lastName, items, oneTimeTotal, monthlyTotal, currency } = req.body;

  const userLang = language || 'en';
  const baseData = {
    email,
    firstName: firstName || '',
    lastName: lastName || '',
    items,
    oneTimeTotal,
    monthlyTotal,
    currency: currency || '€',
    date: new Date(),
  };

  // Generate two PDFs: French for admin, client language for user
  const [pdfBufferFr, pdfBufferUser] = await Promise.all([
    generateQuotePDF({ ...baseData, language: 'fr' }),
    generateQuotePDF({ ...baseData, language: userLang }),
  ]);

  const quoteData: QuoteEmailData = {
    email,
    language: userLang,
    firstName: firstName || '',
    lastName: lastName || '',
    items,
    oneTimeTotal,
    monthlyTotal,
    currency: currency || '€',
  };

  // Send emails: admin gets FR email + FR PDF, user gets their language
  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    console.warn('[EMAIL] Skipping email sending: Missing credentials');
    res.status(200).json({ 
      success: true, 
      data: { message: 'Quote generated successfully (Email skipped in dev mode)' } 
    });
    return;
  }

  try {
    const emailPromise = Promise.all([
      sendAdminQuoteEmail(quoteData, pdfBufferFr),
      sendUserQuoteEmail(quoteData, pdfBufferUser),
    ]);
    
    // Timeout after 10 seconds
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Email service timeout')), 10000)
    );

    await Promise.race([emailPromise, timeoutPromise]);
    console.log(`[EMAIL] Quote sent ✓ admin (FR PDF) + ${email} (${userLang.toUpperCase()} PDF)`);
  } catch (error) {
    console.error('[EMAIL] Failed to send quote email:', error);
    // Continue execution to return success to user (PDF generated but email failed)
    // Or return warning? Usually better to say success if not critical validation error.
    // Ideally we should alert user.
    // For now, return 500 only if critical? No.
    // Let's return 200 with warning? Or 500?
    // User reported "Empty Response". If timeout hits, it throws.
    // We catch it here.
    // We should respond!
    res.status(500).json({ 
      success: false, 
      error: { message: 'Failed to send quote email', code: 'EMAIL_ERROR' } 
    });
    return;
  }

  res.status(200).json({ success: true, data: { message: 'Quote sent successfully' } });
});
