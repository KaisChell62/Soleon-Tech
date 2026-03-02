/**
 * PDF Service  pdfkit dark theme
 * Generates a multilingual quote PDF matching the site's dark indigo design.
 */

import PDFDocument from 'pdfkit';
import { QuoteItem } from './email.service';
import { translatePackKeyPDF } from '../utils/packs-labels';

export interface QuotePDFData {
  email: string;
  language?: string;
  firstName?: string;
  lastName?: string;
  items: QuoteItem[];
  oneTimeTotal: number;
  monthlyTotal: number;
  currency: string;
  date: Date;
}

// Labels for Latin-script languages (pdfkit Helvetica = Latin only)
// ar, ru, zh fallback to English since Helvetica can't render those scripts
const PDF_LABELS: Record<string, {
  title: string; recipient: string; reference: string;
  sectionTitle: string; colCategory: string; colOption: string; colPrice: string;
  totalLabel: string; included: string; maintenanceLabel: string; note: string; rights: string;
}> = {
  fr: {
    title: 'Devis Personnalise',
    recipient: 'Destinataire',
    reference: 'Reference',
    sectionTitle: 'DETAIL DE VOTRE SELECTION',
    colCategory: 'Categorie',
    colOption: 'Option choisie',
    colPrice: 'Prix',
    totalLabel: 'ESTIMATION TOTALE (PAIEMENT UNIQUE)',
    included: 'Inclus',
    maintenanceLabel: '/mois - Maintenance',
    note: 'Cette estimation est indicative et non contractuelle. Elle sera affinee lors de notre premier echange. Contactez-nous pour demarrer votre projet.',
    rights: 'Tous droits reserves',
  },
  en: {
    title: 'Custom Quote',
    recipient: 'Recipient',
    reference: 'Reference',
    sectionTitle: 'YOUR SELECTION DETAILS',
    colCategory: 'Category',
    colOption: 'Chosen Option',
    colPrice: 'Price',
    totalLabel: 'TOTAL ESTIMATE (ONE-TIME)',
    included: 'Included',
    maintenanceLabel: '/month - Maintenance',
    note: 'This estimate is indicative and non-binding. It will be refined during our first exchange. Contact us to start your project.',
    rights: 'All rights reserved',
  },
  de: {
    title: 'Individuelles Angebot',
    recipient: 'Empfaenger',
    reference: 'Referenz',
    sectionTitle: 'DETAILS IHRER AUSWAHL',
    colCategory: 'Kategorie',
    colOption: 'Gewahlte Option',
    colPrice: 'Preis',
    totalLabel: 'GESAMTSCHATZUNG (EINMALIG)',
    included: 'Inklusive',
    maintenanceLabel: '/Monat - Wartung',
    note: 'Dieser Kostenvoranschlag ist unverbindlich und wird bei unserem ersten Gesprach verfeinert. Kontaktieren Sie uns.',
    rights: 'Alle Rechte vorbehalten',
  },
  es: {
    title: 'Presupuesto Personalizado',
    recipient: 'Destinatario',
    reference: 'Referencia',
    sectionTitle: 'DETALLE DE SU SELECCION',
    colCategory: 'Categoria',
    colOption: 'Opcion elegida',
    colPrice: 'Precio',
    totalLabel: 'ESTIMACION TOTAL (PAGO UNICO)',
    included: 'Incluido',
    maintenanceLabel: '/mes - Mantenimiento',
    note: 'Esta estimacion es indicativa y no vinculante. Se refinara durante nuestro primer intercambio. Contactenos.',
    rights: 'Todos los derechos reservados',
  },
  pt: {
    title: 'Orcamento Personalizado',
    recipient: 'Destinatario',
    reference: 'Referencia',
    sectionTitle: 'DETALHES DA SUA SELECAO',
    colCategory: 'Categoria',
    colOption: 'Opcao escolhida',
    colPrice: 'Preco',
    totalLabel: 'ESTIMATIVA TOTAL (PAGAMENTO UNICO)',
    included: 'Incluido',
    maintenanceLabel: '/mes - Manutencao',
    note: 'Esta estimativa e indicativa e nao vinculativa. Sera refinada durante a nossa primeira troca. Contacte-nos.',
    rights: 'Todos os direitos reservados',
  },
};

function getPDFLabels(language?: string) {
  const lang = language || 'en';
  return PDF_LABELS[lang] || PDF_LABELS['en'];
}

const DATE_LOCALES: Record<string, string> = {
  fr: 'fr-FR', en: 'en-GB', de: 'de-DE', es: 'es-ES',
  ar: 'ar-SA', pt: 'pt-PT', ru: 'ru-RU', zh: 'zh-CN',
};

export function generateQuotePDF(data: QuotePDFData): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument({ margin: 0, size: 'A4' });
      const chunks: Buffer[] = [];
      const L = getPDFLabels(data.language);
      const dateLocale = DATE_LOCALES[data.language || 'en'] || 'en-GB';

      doc.on('data', (chunk: Buffer) => chunks.push(chunk));
      doc.on('end', () => resolve(Buffer.concat(chunks)));
      doc.on('error', reject);

      const W = doc.page.width;
      const H = doc.page.height;

      const C = {
        bg:          '#0a0a14',
        surface:     '#111827',
        surface2:    '#1f2937',
        border:      '#2d2d50',
        indigo:      '#6366f1',
        indigoLight: '#a5b4fc',
        indigoDark:  '#3730a3',
        purple:      '#7c3aed',
        white:       '#ffffff',
        gray:        '#9ca3af',
        grayDark:    '#6b7280',
      };

      //  Full page dark background
      doc.rect(0, 0, W, H).fill(C.bg);

      //  Header gradient band
      doc.rect(0, 0, W, 110).fill(C.indigoDark);
      doc.rect(W * 0.6, 0, W * 0.4, 110).fill(C.purple);

      // Brand name
      doc.fillColor(C.white).fontSize(26).font('Helvetica-Bold').text('Soleon', 50, 32);
      const soleonWidth = doc.widthOfString('Soleon');
      doc.fillColor(C.indigoLight).fontSize(26).font('Helvetica-Bold').text(' Tech', 50 + soleonWidth, 32);
      doc.fillColor('rgba(255,255,255,0.7)').fontSize(10).font('Helvetica').text('Digital Excellence', 50, 64);

      // Right side title
      doc.fillColor(C.white).fontSize(16).font('Helvetica-Bold')
        .text(L.title, W - 220, 38, { align: 'right', width: 170 });
      doc.fillColor(C.indigoLight).fontSize(10).font('Helvetica')
        .text(data.date.toLocaleDateString(dateLocale), W - 220, 62, { align: 'right', width: 170 });

      // Indigo strip
      doc.rect(0, 110, W, 4).fill(C.indigo);

      // Info bar
      const infoY = 128;
      const hasName = !!(data.firstName || data.lastName);
      const fullName = [data.firstName, data.lastName].filter(Boolean).join(' ');
      const infoBarH = hasName ? 58 : 40;
      doc.rect(50, infoY, W - 100, infoBarH).fill(C.surface).stroke(C.border);
      doc.fillColor(C.gray).fontSize(9).font('Helvetica').text(L.recipient, 66, infoY + 8);
      if (hasName) {
        doc.fillColor(C.white).fontSize(11).font('Helvetica-Bold').text(fullName, 66, infoY + 20);
        doc.fillColor(C.gray).fontSize(9).font('Helvetica').text(data.email, 66, infoY + 38);
      } else {
        doc.fillColor(C.white).fontSize(11).font('Helvetica-Bold').text(data.email, 66, infoY + 20);
      }

      doc.fillColor(C.gray).fontSize(9).font('Helvetica')
        .text(L.reference, W - 220, infoY + 8, { align: 'right', width: 160 });
      const ref = `ST-${data.date.getFullYear()}${String(data.date.getMonth()+1).padStart(2,'0')}${String(data.date.getDate()).padStart(2,'0')}`;
      doc.fillColor(C.indigoLight).fontSize(11).font('Helvetica-Bold')
        .text(ref, W - 220, infoY + 20, { align: 'right', width: 160 });

      // Table section title
      let y = infoY + infoBarH + 24;
      doc.fillColor(C.indigo).fontSize(10).font('Helvetica-Bold').text(L.sectionTitle, 50, y);
      y += 18;

      // Table header
      doc.rect(50, y, W - 100, 28).fill(C.indigo);
      doc.fillColor(C.white).fontSize(9).font('Helvetica-Bold')
        .text(L.colCategory, 66, y + 10)
        .text(L.colOption, 210, y + 10)
        .text(L.colPrice, W - 160, y + 10, { width: 100, align: 'right' });
      y += 28;

      // Table rows
      data.items.forEach((item, i) => {
        const rowBg = i % 2 === 0 ? C.surface : C.surface2;
        doc.rect(50, y, W - 100, 28).fill(rowBg);
        doc.rect(50, y, 3, 28).fill(C.indigo);

        const catText = translatePackKeyPDF(item.category, data.language || 'en');
        const optText = translatePackKeyPDF(item.option, data.language || 'en');
        const priceText = item.price > 0
          ? `${item.price.toLocaleString()} ${data.currency}`
          : L.included;

        doc.fillColor(C.gray).fontSize(9).font('Helvetica')
          .text(truncate(catText, 22), 62, y + 10);
        doc.fillColor(C.white).fontSize(10).font('Helvetica')
          .text(truncate(optText, 30), 210, y + 10);
        doc.fillColor(C.indigoLight).fontSize(10).font('Helvetica-Bold')
          .text(priceText, W - 160, y + 10, { width: 100, align: 'right' });

        y += 28;
      });

      doc.moveTo(50, y).lineTo(W - 50, y).strokeColor(C.border).lineWidth(1).stroke();

      // Total box
      y += 24;
      const totalH = data.monthlyTotal > 0 ? 100 : 74;
      doc.rect(50, y, W - 100, totalH).fill(C.surface);
      doc.rect(50, y, 5, totalH).fill(C.indigo);
      doc.rect(50, y, W - 100, totalH).stroke(C.border);

      doc.fillColor(C.indigoLight).fontSize(10).font('Helvetica-Bold')
        .text(L.totalLabel, 72, y + 16);
      doc.fillColor(C.white).fontSize(30).font('Helvetica-Bold')
        .text(`${data.oneTimeTotal.toLocaleString()} ${data.currency}`, 72, y + 32);

      if (data.monthlyTotal > 0) {
        doc.fillColor(C.gray).fontSize(11).font('Helvetica')
          .text(`+ ${data.monthlyTotal} ${data.currency}${L.maintenanceLabel}`, 72, y + 74);
      }

      y += totalH + 28;

      // Note
      doc.rect(50, y, W - 100, 52).fill(C.surface2);
      doc.fillColor(C.gray).fontSize(9).font('Helvetica')
        .text(L.note, 66, y + 10, { width: W - 132, lineGap: 3 });

      // Footer
      const footerY = H - 48;
      doc.rect(0, footerY - 8, W, 56).fill(C.surface);
      doc.moveTo(50, footerY - 8).lineTo(W - 50, footerY - 8).strokeColor(C.indigo).lineWidth(2).stroke();

      doc.fillColor(C.white).fontSize(10).font('Helvetica-Bold').text('Soleon Tech', 50, footerY + 2);
      doc.fillColor(C.indigoLight).fontSize(10).font('Helvetica')
        .text('  Digital Excellence', 50 + doc.widthOfString('Soleon Tech'), footerY + 2);

      doc.fillColor(C.grayDark).fontSize(9).font('Helvetica')
        .text(` ${data.date.getFullYear()} Soleon Tech  ${L.rights}`, W - 260, footerY + 2, { align: 'right', width: 210 });
      doc.fillColor(C.grayDark).fontSize(8).font('Helvetica')
        .text('goallife.kaiscorp.fr', 50, footerY + 18);

      doc.end();
    } catch (err) {
      reject(err);
    }
  });
}

function truncate(str: string, max: number): string {
  return str.length > max ? str.slice(0, max - 1) + '\u2026' : str;
}