/**
 * Quote Controller
 * POST /api/contact/quote — handles configurator quote submissions
 */

import { Request, Response, NextFunction } from 'express';
import { asyncHandler } from '../middlewares';
import { sendAdminQuoteEmail, sendUserQuoteEmail, QuoteEmailData } from '../services/email.service';
import { generateQuotePDF } from '../services/pdf.service';

export const sendQuote = asyncHandler(async (req: Request, res: Response, _next: NextFunction) => {
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
  await Promise.all([
    sendAdminQuoteEmail(quoteData, pdfBufferFr),
    sendUserQuoteEmail(quoteData, pdfBufferUser),
  ]);
  console.log(`[EMAIL] Quote sent ✓ admin (FR PDF) + ${email} (${userLang.toUpperCase()} PDF)`);

  res.status(200).json({ success: true, data: { message: 'Quote sent successfully' } });
});
