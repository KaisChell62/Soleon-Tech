/**
 * Email Service — Nodemailer + Gmail SMTP
 * Sends emails to admin (FR) and user (their language) for contact + quote.
 */

import nodemailer from 'nodemailer';
import { translatePackKeyEmail } from '../utils/packs-labels';

// ─── Transporter ─────────────────────────────────────────────────────────────

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

// ─── Language translations for user emails ────────────────────────────────────

const TRANSLATIONS: Record<string, {
  contactSubject: string;
  contactGreeting: (name: string) => string;
  contactBody: string;
  contactClosing: string;
  quoteSubject: string;
  quoteGreeting: (name?: string) => string;
  quoteBody: string;
  quoteTotal: string;
  quoteMonthly: string;
  quoteCTA: string;
  quoteDir: 'ltr' | 'rtl';
  team: string;
}> = {
  fr: {
    contactSubject: 'Merci pour votre message – Soleon Tech',
    contactGreeting: (name: string) => `Bonjour ${name},`,
    contactBody: 'Nous avons bien reçu votre message. Notre équipe vous répondra dans les prochaines 24 heures.',
    contactClosing: 'À très bientôt,',
    quoteSubject: 'Votre devis personnalisé – Soleon Tech',
    quoteGreeting: (name?: string) => name ? `Bonjour ${name},` : 'Bonjour,',
    quoteBody: 'Merci pour votre intérêt ! Voici le récapitulatif de votre devis personnalisé. Notre équipe vous contactera pour en discuter.',
    quoteTotal: 'Estimation totale (une fois)',
    quoteMonthly: 'Coût mensuel (maintenance)',
    quoteCTA: 'Contactez-nous pour finaliser votre projet',
    quoteDir: 'ltr',
    team: "L'équipe Soleon Tech",
  },
  en: {
    contactSubject: 'Thank you for your message – Soleon Tech',
    contactGreeting: (name: string) => `Hello ${name},`,
    contactBody: 'We have received your message. Our team will get back to you within 24 hours.',
    contactClosing: 'See you soon,',
    quoteSubject: 'Your Custom Quote – Soleon Tech',
    quoteGreeting: (name?: string) => name ? `Hello ${name},` : 'Hello,',
    quoteBody: 'Thank you for your interest! Here is a summary of your personalized quote. Our team will reach out to discuss it.',
    quoteTotal: 'Total estimate (one-time)',
    quoteMonthly: 'Monthly cost (maintenance)',
    quoteCTA: 'Contact us to finalize your project',
    quoteDir: 'ltr',
    team: 'The Soleon Tech Team',
  },
  de: {
    contactSubject: 'Danke für Ihre Nachricht – Soleon Tech',
    contactGreeting: (name: string) => `Hallo ${name},`,
    contactBody: 'Wir haben Ihre Nachricht erhalten. Unser Team wird sich innerhalb von 24 Stunden bei Ihnen melden.',
    contactClosing: 'Bis bald,',
    quoteSubject: 'Ihr persönliches Angebot – Soleon Tech',
    quoteGreeting: (name?: string) => name ? `Hallo ${name},` : 'Hallo,',
    quoteBody: 'Vielen Dank für Ihr Interesse! Hier ist eine Zusammenfassung Ihres personalisierten Angebots. Unser Team wird sich in Kürze mit Ihnen in Verbindung setzen.',
    quoteTotal: 'Gesamtschätzung (einmalig)',
    quoteMonthly: 'Monatliche Kosten (Wartung)',
    quoteCTA: 'Kontaktieren Sie uns, um Ihr Projekt abzuschließen',
    quoteDir: 'ltr',
    team: 'Das Soleon Tech Team',
  },
  es: {
    contactSubject: 'Gracias por su mensaje – Soleon Tech',
    contactGreeting: (name: string) => `Hola ${name},`,
    contactBody: 'Hemos recibido su mensaje. Nuestro equipo le responderá en las próximas 24 horas.',
    contactClosing: 'Hasta pronto,',
    quoteSubject: 'Su presupuesto personalizado – Soleon Tech',
    quoteGreeting: (name?: string) => name ? `Hola ${name},` : 'Hola,',
    quoteBody: '¡Gracias por su interés! Aquí tiene un resumen de su presupuesto personalizado. Nuestro equipo se pondrá en contacto con usted para discutirlo.',
    quoteTotal: 'Estimación total (una vez)',
    quoteMonthly: 'Coste mensual (mantenimiento)',
    quoteCTA: 'Contáctenos para finalizar su proyecto',
    quoteDir: 'ltr',
    team: 'El equipo de Soleon Tech',
  },
  ar: {
    contactSubject: 'شكراً على رسالتك – Soleon Tech',
    contactGreeting: (name: string) => `مرحباً ${name}،`,
    contactBody: 'لقد استلمنا رسالتك. سيتواصل معك فريقنا خلال 24 ساعة.',
    contactClosing: 'إلى اللقاء،',
    quoteSubject: 'عرض الأسعار الخاص بك – Soleon Tech',
    quoteGreeting: (name?: string) => name ? `مرحباً ${name}،` : 'مرحباً،',
    quoteBody: 'شكراً لاهتمامك! إليك ملخص عرض الأسعار المخصص لك. سيتواصل معك فريقنا قريباً لمناقشته.',
    quoteTotal: 'التقدير الإجمالي (لمرة واحدة)',
    quoteMonthly: 'التكلفة الشهرية (الصيانة)',
    quoteCTA: 'تواصل معنا لإتمام مشروعك',
    quoteDir: 'rtl',
    team: 'فريق Soleon Tech',
  },
  pt: {
    contactSubject: 'Obrigado pela sua mensagem – Soleon Tech',
    contactGreeting: (name: string) => `Olá ${name},`,
    contactBody: 'Recebemos a sua mensagem. A nossa equipa responderá em 24 horas.',
    contactClosing: 'Até breve,',
    quoteSubject: 'O seu orçamento personalizado – Soleon Tech',
    quoteGreeting: (name?: string) => name ? `Olá ${name},` : 'Olá,',
    quoteBody: 'Obrigado pelo seu interesse! Aqui está um resumo do seu orçamento personalizado. A nossa equipa entrará em contacto para discutir.',
    quoteTotal: 'Estimativa total (único)',
    quoteMonthly: 'Custo mensal (manutenção)',
    quoteCTA: 'Contacte-nos para finalizar o seu projeto',
    quoteDir: 'ltr',
    team: 'A equipa Soleon Tech',
  },
  ru: {
    contactSubject: 'Спасибо за ваше сообщение – Soleon Tech',
    contactGreeting: (name: string) => `Здравствуйте, ${name},`,
    contactBody: 'Мы получили ваше сообщение. Наша команда свяжется с вами в течение 24 часов.',
    contactClosing: 'До скорой встречи,',
    quoteSubject: 'Ваше персональное предложение – Soleon Tech',
    quoteGreeting: (name?: string) => name ? `Здравствуйте, ${name},` : 'Здравствуйте,',
    quoteBody: 'Спасибо за интерес! Вот сводка вашего персонального предложения. Наша команда свяжется с вами для обсуждения.',
    quoteTotal: 'Общая оценка (единовременно)',
    quoteMonthly: 'Ежемесячные расходы (обслуживание)',
    quoteCTA: 'Свяжитесь с нами для завершения проекта',
    quoteDir: 'ltr',
    team: 'Команда Soleon Tech',
  },
  zh: {
    contactSubject: '感谢您的留言 – Soleon Tech',
    contactGreeting: (name: string) => `您好 ${name}，`,
    contactBody: '我们已收到您的留言。我们的团队将在24小时内与您联系。',
    contactClosing: '期待再次联系，',
    quoteSubject: '您的个性化报价 – Soleon Tech',
    quoteGreeting: (name?: string) => name ? `您好 ${name}，` : '您好，',
    quoteBody: '感谢您的关注！以下是您的个性化报价摘要。我们的团队将很快与您联系讨论详情。',
    quoteTotal: '总估价（一次性）',
    quoteMonthly: '月费（维护）',
    quoteCTA: '联系我们完成您的项目',
    quoteDir: 'ltr',
    team: 'Soleon Tech 团队',
  },
};

// Fallback to 'en' if language not supported
function getLang(language: string) {
  return TRANSLATIONS[language] || TRANSLATIONS['en'];
}

// ─── HTML Helpers ─────────────────────────────────────────────────────────────

function baseTemplate(content: string, dir: 'ltr' | 'rtl' = 'ltr'): string {
  return `<!DOCTYPE html>
<html lang="en" dir="${dir}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Soleon Tech</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #0a0a0a; color: #ffffff; }
    .wrapper { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
    .card { background: #111111; border: 1px solid #222222; border-radius: 16px; overflow: hidden; }
    .header { background: linear-gradient(135deg, #3730a3 0%, #5b21b6 100%); padding: 40px 40px 32px; text-align: center; }
    .logo { font-size: 24px; font-weight: 800; color: #ffffff; letter-spacing: -0.5px; }
    .logo span { color: #a5b4fc; }
    .header-title { font-size: 20px; font-weight: 600; color: rgba(255,255,255,0.9); margin-top: 12px; }
    .body { padding: 40px; background: #111111 !important; }
    .greeting { font-size: 18px; font-weight: 600; color: #ffffff !important; margin-bottom: 16px; }
    .text { font-size: 15px; color: #9ca3af; line-height: 1.7; margin-bottom: 24px; }
    .field-card { background: #1a1a1a; border: 1px solid #2a2a2a; border-radius: 12px; padding: 16px 20px; margin-bottom: 12px; }
    .field-label { font-size: 11px; font-weight: 600; color: #6366f1; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px; }
    .field-value { font-size: 15px; color: #ffffff; line-height: 1.5; word-break: break-word; }
    .highlight-box { background: linear-gradient(135deg, #1e1b4b 0%, #1a0d3b 100%); border: 1px solid #3730a3; border-radius: 12px; padding: 24px; margin: 24px 0; text-align: center; }
    .price-large { font-size: 36px; font-weight: 800; color: #a5b4fc; }
    .price-label { font-size: 13px; color: #6366f1; margin-bottom: 8px; }
    .table { width: 100%; border-collapse: collapse; margin: 16px 0; }
    .table th { background: #1a1a1a; color: #6366f1; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; padding: 10px 14px; text-align: left; border-bottom: 1px solid #2a2a2a; }
    .table td { padding: 12px 14px; border-bottom: 1px solid #1a1a1a; color: #d1d5db; font-size: 14px; }
    .table tr:last-child td { border-bottom: none; }
    .cta-btn { display: inline-block; background: linear-gradient(135deg, #4f46e5, #7c3aed); color: #ffffff !important; text-decoration: none; padding: 14px 32px; border-radius: 10px; font-weight: 600; font-size: 15px; margin-top: 8px; }
    .divider { height: 1px; background: #1f1f1f; margin: 24px 0; }
    .footer { padding: 24px 40px; border-top: 1px solid #1a1a1a; }
    .footer-text { font-size: 12px; color: #4b5563; text-align: center; line-height: 1.6; }
    .footer-brand { font-weight: 700; color: #6366f1; }
    .badge { display: inline-flex; align-items: center; gap: 6px; background: #1a1a1a; border: 1px solid #2a2a2a; border-radius: 20px; padding: 6px 14px; font-size: 12px; color: #9ca3af; margin-bottom: 24px; }
    .dot { width: 8px; height: 8px; background: #22c55e; border-radius: 50%; display: inline-block; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="card">
      ${content}
    </div>
    <p style="text-align:center; font-size:11px; color:#374151; margin-top:16px;">
      © ${new Date().getFullYear()} Soleon Tech · Tous droits réservés
    </p>
  </div>
</body>
</html>`;
}

// ─── Admin email — Contact ────────────────────────────────────────────────────

export interface ContactEmailData {
  name: string;
  email: string;
  language: string;
  subject: string;
  message: string;
}

const LANGUAGE_NAMES: Record<string, string> = {
  fr: 'Français',
  en: 'English',
  de: 'Deutsch',
  es: 'Español',
  ar: 'Arabe',
  pt: 'Português',
  ru: 'Русский',
  zh: '中文',
};

function getLanguageName(code: string): string {
  return LANGUAGE_NAMES[code.toLowerCase()] || code.toUpperCase();
}

export async function sendAdminContactEmail(data: ContactEmailData): Promise<void> {
  const now = new Date().toLocaleString('fr-FR', { timeZone: 'Europe/Paris' });

  const html = baseTemplate(`
    <div class="header">
      <div class="logo">Soleon <span>Tech</span></div>
      <div class="header-title">Nouveau message de contact</div>
    </div>
    <div class="body">
      <div class="badge"><span class="dot"></span> Reçu le ${now} (Paris)</div>
      <div class="field-card">
        <div class="field-label">Nom</div>
        <div class="field-value">${escapeHtml(data.name)}</div>
      </div>
      <div class="field-card">
        <div class="field-label">Email</div>
        <div class="field-value"><a href="mailto:${escapeHtml(data.email)}" style="color:#6366f1;">${escapeHtml(data.email)}</a></div>
      </div>
      <div class="field-card">
        <div class="field-label">Langue choisie</div>
        <div class="field-value">${escapeHtml(getLanguageName(data.language))}</div>
      </div>
      <div class="field-card">
        <div class="field-label">Sujet</div>
        <div class="field-value">${escapeHtml(data.subject)}</div>
      </div>
      <div class="field-card">
        <div class="field-label">Message</div>
        <div class="field-value" style="white-space: pre-wrap;">${escapeHtml(data.message)}</div>
      </div>
      <div class="divider"></div>
      <div style="text-align:center;">
        <a href="mailto:${escapeHtml(data.email)}" class="cta-btn">↩ Répondre à ${escapeHtml(data.name)}</a>
      </div>
    </div>
    <div class="footer">
      <p class="footer-text">
        Cet email a été généré automatiquement par le formulaire de contact de<br/>
        <span class="footer-brand">soleontech.fr</span>
      </p>
    </div>
  `);

  await transporter.sendMail({
    from: `"Soleon Tech" <${process.env.GMAIL_USER}>`,
    to: process.env.ADMIN_EMAIL || process.env.GMAIL_USER,
    subject: `[Contact] ${data.subject} — ${data.name}`,
    html,
  });
}

// ─── User confirmation email — Contact ───────────────────────────────────────

export async function sendUserContactConfirmation(data: ContactEmailData): Promise<void> {
  const lang = getLang(data.language);
  const dir = lang.quoteDir;

  const html = baseTemplate(`
    <div class="header">
      <div class="logo">Soleon <span>Tech</span></div>
      <div class="header-title">${lang.contactSubject.split('–')[0].trim()}</div>
    </div>
    <div class="body">
      <p class="greeting">${lang.contactGreeting(data.name)}</p>
      <p class="text">${lang.contactBody}</p>
      <div class="field-card">
        <div class="field-label">Sujet / Subject</div>
        <div class="field-value">${escapeHtml(data.subject)}</div>
      </div>
      <div class="divider"></div>
      <div style="text-align:center;">
        <a href="mailto:${process.env.GMAIL_USER}" class="cta-btn">${process.env.GMAIL_USER}</a>
      </div>
      <p class="text" style="margin-top:24px; text-align:center;">
        ${lang.contactClosing}<br/>
        <strong style="color:#a5b4fc;">${lang.team}</strong>
      </p>
    </div>
    <div class="footer">
      <p class="footer-text">
        <span class="footer-brand">Soleon Tech</span> · soleontech.fr
      </p>
    </div>
  `, dir);

  await transporter.sendMail({
    from: `"Soleon Tech" <${process.env.GMAIL_USER}>`,
    to: data.email,
    subject: lang.contactSubject,
    html,
  });
}

// ─── Quote email types ────────────────────────────────────────────────────────

export interface QuoteItem {
  category: string;
  option: string;
  price: number;
}

export interface QuoteEmailData {
  email: string;
  language: string;
  firstName?: string;
  lastName?: string;
  items: QuoteItem[];
  oneTimeTotal: number;
  monthlyTotal: number;
  currency: string;
}

// ─── Admin email — Quote ──────────────────────────────────────────────────────

export async function sendAdminQuoteEmail(data: QuoteEmailData, pdfBuffer: Buffer): Promise<void> {
  const now = new Date().toLocaleString('fr-FR', { timeZone: 'Europe/Paris' });
  // Admin always receives in French — force 'fr' for item translations
  const rows = data.items.map(item => {
    const cat = escapeHtml(translatePackKeyEmail(item.category, 'fr'));
    const opt = escapeHtml(translatePackKeyEmail(item.option, 'fr'));
    return `
    <tr>
      <td>${cat}</td>
      <td>${opt}</td>
      <td style="text-align:right; color:#a5b4fc; font-weight:600;">${item.price > 0 ? `${item.price.toLocaleString()} ${data.currency}` : 'Inclus'}</td>
    </tr>
  `;
  }).join('');

  const html = baseTemplate(`
    <div class="header">
      <div class="logo">Soleon <span>Tech</span></div>
      <div class="header-title">Nouveau devis configuré</div>
    </div>
    <div class="body">
      <div class="badge"><span class="dot"></span> Reçu le ${now} (Paris)</div>
      ${(data.firstName || data.lastName) ? `<div class="field-card">
        <div class="field-label">Nom complet</div>
        <div class="field-value">${escapeHtml(([data.firstName, data.lastName].filter(Boolean).join(' ')))}</div>
      </div>` : ''}
      <div class="field-card">
        <div class="field-label">Email du prospect</div>
        <div class="field-value"><a href="mailto:${escapeHtml(data.email)}" style="color:#6366f1;">${escapeHtml(data.email)}</a></div>
      </div>
      <div class="field-card">
        <div class="field-label">Langue du prospect</div>
        <div class="field-value">${escapeHtml(getLanguageName(data.language))}</div>
      </div>
      <table class="table">
        <thead><tr><th>Catégorie</th><th>Option</th><th style="text-align:right;">Prix</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
      <div class="highlight-box">
        <div class="price-label">Estimation totale</div>
        <div class="price-large">${data.oneTimeTotal.toLocaleString()} ${data.currency}</div>
        ${data.monthlyTotal > 0 ? `<div style="font-size:14px; color:#9ca3af; margin-top:8px;">+ ${data.monthlyTotal} ${data.currency}/mois (maintenance)</div>` : ''}
      </div>
      <div style="text-align:center;">
        <a href="mailto:${escapeHtml(data.email)}" class="cta-btn">↩ Contacter ${data.firstName ? escapeHtml(data.firstName) : 'ce prospect'}</a>
      </div>
    </div>
    <div class="footer"><p class="footer-text"><span class="footer-brand">soleontech.fr</span> — Devis automatique</p></div>
  `);

  await transporter.sendMail({
    from: `"Soleon Tech" <${process.env.GMAIL_USER}>`,
    to: process.env.ADMIN_EMAIL || process.env.GMAIL_USER,
    subject: `[Devis] ${data.email} — ${data.oneTimeTotal.toLocaleString()} ${data.currency}`,
    html,
    attachments: [{ filename: 'devis-soleontech.pdf', content: pdfBuffer, contentType: 'application/pdf' }],
  });
}

// ─── User confirmation email — Quote ─────────────────────────────────────────

export async function sendUserQuoteEmail(data: QuoteEmailData, pdfBuffer: Buffer): Promise<void> {
  const lang = getLang(data.language);
  const dir = lang.quoteDir;

  const rows = data.items.map(item => {
    const cat = escapeHtml(translatePackKeyEmail(item.category, data.language));
    const opt = escapeHtml(translatePackKeyEmail(item.option, data.language));
    return `
    <tr>
      <td>${cat}</td>
      <td>${opt}</td>
      <td style="text-align:right; color:#a5b4fc; font-weight:600;">${item.price > 0 ? `${item.price.toLocaleString()} ${data.currency}` : '—'}</td>
    </tr>
  `;
  }).join('');

  const html = baseTemplate(`
    <div class="header">
      <div class="logo">Soleon <span>Tech</span></div>
      <div class="header-title">${lang.quoteSubject.split('–')[0].trim()}</div>
    </div>
    <div class="body">
      <p class="greeting">${lang.quoteGreeting(data.firstName)}</p>
      <p class="text">${lang.quoteBody}</p>
      <table class="table">
        <thead><tr><th></th><th></th><th></th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
      <div class="highlight-box">
        <div class="price-label">${lang.quoteTotal}</div>
        <div class="price-large">${data.oneTimeTotal.toLocaleString()} ${data.currency}</div>
        ${data.monthlyTotal > 0 ? `<div style="font-size:14px; color:#9ca3af; margin-top:8px;">+ ${data.monthlyTotal} ${data.currency} — ${lang.quoteMonthly}</div>` : ''}
      </div>
      <div style="text-align:center;">
        <a href="mailto:${process.env.GMAIL_USER}" class="cta-btn">${lang.quoteCTA}</a>
      </div>
      <p class="text" style="margin-top:24px; text-align:${dir === 'rtl' ? 'right' : 'center'};">
        ${lang.contactClosing}<br/>
        <strong style="color:#a5b4fc;">${lang.team}</strong>
      </p>
    </div>
    <div class="footer"><p class="footer-text"><span class="footer-brand">Soleon Tech</span> · soleontech.fr</p></div>
  `, dir);

  await transporter.sendMail({
    from: `"Soleon Tech" <${process.env.GMAIL_USER}>`,
    to: data.email,
    subject: lang.quoteSubject,
    html,
    attachments: [{ filename: 'quote-soleontech.pdf', content: pdfBuffer, contentType: 'application/pdf' }],
  });
}

// ─── XSS escape helper ────────────────────────────────────────────────────────

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
