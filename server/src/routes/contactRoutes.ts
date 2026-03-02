import { Router } from 'express';
import { sendMessage } from '../controllers/contactController';
import { sendQuote } from '../controllers/quoteController';
import { validateContact, validateQuote } from '../validators/contactValidator';
import { strictLimiter, antiSpam } from '../middlewares';

const router = Router();

// POST /api/contact — Contact form
router.post('/',
  strictLimiter,
  antiSpam,
  validateContact,
  sendMessage
);

// POST /api/contact/quote — Configurator quote
router.post('/quote',
  strictLimiter,
  validateQuote,
  sendQuote
);

export default router;
