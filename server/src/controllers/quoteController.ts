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
    // Quote was valid and processed — email delivery failed but we don't expose this as an error to the user
    res.status(200).json({ success: true, data: { message: 'Quote sent successfully' } });
    return;
  }

  res.status(200).json({ success: true, data: { message: 'Quote sent successfully' } });
});
