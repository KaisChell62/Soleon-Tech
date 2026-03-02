import { Request, Response, NextFunction } from 'express';
import Message from '../models/Message';
import { asyncHandler } from '../middlewares';
import {
  sendAdminContactEmail,
  sendUserContactConfirmation,
  ContactEmailData,
} from '../services/email.service';

/**
 * POST /api/contact
 * Saves the message then sends emails (admin FR + user in their language).
 */
export const sendMessage = asyncHandler(async (req: Request, res: Response, _next: NextFunction) => {
  const { name, email, language, subject, message } = req.body;

  // Save to DB (country field stores the language code)
  const newMessage = await Message.create({ name, email, country: language, subject, message });

  // Send emails — await so errors are visible in logs
  const emailData: ContactEmailData = { name, email, language: language || 'en', subject, message };
  try {
    await Promise.all([
      sendAdminContactEmail(emailData),
      sendUserContactConfirmation(emailData),
    ]);
    console.log(`[EMAIL] Contact emails sent ✓ admin + ${email}`);
  } catch (err) {
    console.error('[EMAIL] Contact emails failed:', err);
    // Don't fail the HTTP response — message is saved to DB
  }

  res.status(201).json({
    success: true,
    data: { id: newMessage._id, message: 'Message sent successfully' },
  });
});
