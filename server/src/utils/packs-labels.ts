/**
 * Server-side packs translation labels.
 * The frontend sends raw i18n keys (e.g. "packs.type.saas").
 * This module translates them for the PDF and emails.
 *
 * Latin-script languages (fr, en, de, es, pt) render natively in pdfkit Helvetica.
 * Non-Latin scripts (ar, ru, zh) fall back to English in the PDF.
 */

type PackLabels = Record<string, string>;

const PACKS_LABELS: Record<string, PackLabels> = {
  fr: {
    'packs.type.title':         'Type de projet',
    'packs.type.landing':       'Landing Page',
    'packs.type.showcase':      'Site Vitrine (5 pages)',
    'packs.type.ecommerce':     'E-commerce',
    'packs.type.saas':          'Web App / SaaS',
    'packs.design.title':       'Niveau de design',
    'packs.design.standard':    'Standard (Template)',
    'packs.design.custom':      'Sur Mesure',
    'packs.features.title':     'Fonctionnalites & Add-ons',
    'packs.features.cms':       'CMS (Gestion de contenu)',
    'packs.features.seo':       'Pack SEO Avance',
    'packs.features.analytics': 'Analytics & Tracking',
    'packs.features.i18n':      'Multi-langues',
    'packs.features.auth':      'Espace Membre / Auth',
    'packs.features.payment':   'Integration Paiement (Stripe)',
    'packs.maintenance.title':  'Maintenance Mensuelle (Optionnel)',
    'packs.maintenance.none':   'Aucune',
    'packs.maintenance.pro':    'Support Technique & Mises a jour',
  },
  en: {
    'packs.type.title':         'Project Type',
    'packs.type.landing':       'Landing Page',
    'packs.type.showcase':      'Showcase Site (5 pages)',
    'packs.type.ecommerce':     'E-commerce',
    'packs.type.saas':          'Web App / SaaS',
    'packs.design.title':       'Design Level',
    'packs.design.standard':    'Standard (Template)',
    'packs.design.custom':      'Custom Design',
    'packs.features.title':     'Features & Add-ons',
    'packs.features.cms':       'CMS (Content Management)',
    'packs.features.seo':       'Advanced SEO Pack',
    'packs.features.analytics': 'Analytics & Tracking',
    'packs.features.i18n':      'Multi-language',
    'packs.features.auth':      'Member Area / Auth',
    'packs.features.payment':   'Payment Integration (Stripe)',
    'packs.maintenance.title':  'Monthly Maintenance (Optional)',
    'packs.maintenance.none':   'None',
    'packs.maintenance.pro':    'Technical Support & Updates',
  },
  de: {
    'packs.type.title':         'Projekttyp',
    'packs.type.landing':       'Landing Page',
    'packs.type.showcase':      'Webseite (5 Seiten)',
    'packs.type.ecommerce':     'E-Commerce',
    'packs.type.saas':          'Web App / SaaS',
    'packs.design.title':       'Design-Level',
    'packs.design.standard':    'Standard (Vorlage)',
    'packs.design.custom':      'Massgeschneidert',
    'packs.features.title':     'Funktionen und Add-ons',
    'packs.features.cms':       'CMS (Content-Management)',
    'packs.features.seo':       'Erweitertes SEO-Paket',
    'packs.features.analytics': 'Analytics und Tracking',
    'packs.features.i18n':      'Mehrsprachigkeit',
    'packs.features.auth':      'Mitgliederbereich / Auth',
    'packs.features.payment':   'Zahlungsintegration (Stripe)',
    'packs.maintenance.title':  'Monatliche Wartung (Optional)',
    'packs.maintenance.none':   'Keine',
    'packs.maintenance.pro':    'Technischer Support & Updates',
  },
  es: {
    'packs.type.title':         'Tipo de proyecto',
    'packs.type.landing':       'Landing Page',
    'packs.type.showcase':      'Sitio Web (5 paginas)',
    'packs.type.ecommerce':     'E-commerce',
    'packs.type.saas':          'Web App / SaaS',
    'packs.design.title':       'Nivel de diseno',
    'packs.design.standard':    'Estandar (Plantilla)',
    'packs.design.custom':      'Diseno a Medida',
    'packs.features.title':     'Funcionalidades y complementos',
    'packs.features.cms':       'CMS (Gestion de contenido)',
    'packs.features.seo':       'Pack SEO Avanzado',
    'packs.features.analytics': 'Analytics y Tracking',
    'packs.features.i18n':      'Multi-idioma',
    'packs.features.auth':      'Area de Miembros / Auth',
    'packs.features.payment':   'Integracion de Pago (Stripe)',
    'packs.maintenance.title':  'Mantenimiento Mensual (Opcional)',
    'packs.maintenance.none':   'Ninguno',
    'packs.maintenance.pro':    'Soporte Tecnico y Actualizaciones',
  },
  pt: {
    'packs.type.title':         'Tipo de projeto',
    'packs.type.landing':       'Landing Page',
    'packs.type.showcase':      'Site Institucional (5 paginas)',
    'packs.type.ecommerce':     'E-commerce',
    'packs.type.saas':          'Web App / SaaS',
    'packs.design.title':       'Nivel de design',
    'packs.design.standard':    'Padrao (Template)',
    'packs.design.custom':      'Sob Medida',
    'packs.features.title':     'Funcionalidades e Add-ons',
    'packs.features.cms':       'CMS (Gestao de conteudo)',
    'packs.features.seo':       'Pack SEO Avancado',
    'packs.features.analytics': 'Analytics e Tracking',
    'packs.features.i18n':      'Multi-idioma',
    'packs.features.auth':      'Area de Membros / Auth',
    'packs.features.payment':   'Integracao de Pagamento (Stripe)',
    'packs.maintenance.title':  'Manutencao Mensal (Opcional)',
    'packs.maintenance.none':   'Nenhuma',
    'packs.maintenance.pro':    'Suporte Tecnico & Atualizacoes',
  },
  // For emails (HTML supports these scripts):
  ar: {
    'packs.type.title':         'نوع المشروع',
    'packs.type.landing':       'صفحة هبوط',
    'packs.type.showcase':      'موقع تعريفي (5 صفحات)',
    'packs.type.ecommerce':     'تجارة إلكترونية',
    'packs.type.saas':          'تطبيق ويب / SaaS',
    'packs.design.title':       'مستوى التصميم',
    'packs.design.standard':    'قياسي (قالب)',
    'packs.design.custom':      'تصميم مخصص',
    'packs.features.title':     'الميزات والإضافات',
    'packs.features.cms':       'نظام إدارة المحتوى',
    'packs.features.seo':       'حزمة SEO متقدمة',
    'packs.features.analytics': 'التحليلات والتتبع',
    'packs.features.i18n':      'متعدد اللغات',
    'packs.features.auth':      'منطقة الأعضاء / المصادقة',
    'packs.features.payment':   'تكامل الدفع (Stripe)',
    'packs.maintenance.title':  'الصيانة الشهرية (اختياري)',
    'packs.maintenance.none':   'لا شيء',
    'packs.maintenance.pro':    'الدعم الفني والتحديثات',
  },
  ru: {
    'packs.type.title':         'Тип проекта',
    'packs.type.landing':       'Лендинг',
    'packs.type.showcase':      'Сайт-визитка (5 страниц)',
    'packs.type.ecommerce':     'Интернет-магазин',
    'packs.type.saas':          'Веб-приложение / SaaS',
    'packs.design.title':       'Уровень дизайна',
    'packs.design.standard':    'Стандарт (Шаблон)',
    'packs.design.custom':      'Индивидуальный дизайн',
    'packs.features.title':     'Функции и дополнения',
    'packs.features.cms':       'CMS (Управление контентом)',
    'packs.features.seo':       'Расширенный SEO-пакет',
    'packs.features.analytics': 'Аналитика и отслеживание',
    'packs.features.i18n':      'Мультиязычность',
    'packs.features.auth':      'Личный кабинет / Авторизация',
    'packs.features.payment':   'Интеграция оплаты (Stripe)',
    'packs.maintenance.title':  'Ежемесячное обслуживание (Опц.)',
    'packs.maintenance.none':   'Нет',
    'packs.maintenance.pro':    'Техническая поддержка и обновления',
  },
  zh: {
    'packs.type.title':         '项目类型',
    'packs.type.landing':       '着陆页',
    'packs.type.showcase':      '展示网站（5页）',
    'packs.type.ecommerce':     '电子商务',
    'packs.type.saas':          'Web App / SaaS',
    'packs.design.title':       '设计级别',
    'packs.design.standard':    '标准（模板）',
    'packs.design.custom':      '定制设计',
    'packs.features.title':     '功能与附加组件',
    'packs.features.cms':       'CMS（内容管理）',
    'packs.features.seo':       '高级SEO套餐',
    'packs.features.analytics': '分析与追踪',
    'packs.features.i18n':      '多语言',
    'packs.features.auth':      '会员区 / 认证',
    'packs.features.payment':   '支付集成（Stripe）',
    'packs.maintenance.title':  '每月维护（可选）',
    'packs.maintenance.none':   '无',
    'packs.maintenance.pro':    '技术支持和更新',
  },
};

/**
 * Languages where pdfkit Helvetica can't render native script.
 * These fall back to English in the PDF.
 */
const PDF_LATIN_ONLY_FALLBACK: Record<string, string> = {
  ar: 'en',
  ru: 'en',
  zh: 'en',
};

/**
 * Translate a packs i18n key for use in an EMAIL (supports all scripts).
 */
export function translatePackKeyEmail(key: string, language: string): string {
  const labels = PACKS_LABELS[language] || PACKS_LABELS['en'];
  return labels[key] ?? key;
}

/**
 * Translate a packs i18n key for use in a PDF (Latin-only fonts, ar/ru/zh → English).
 */
export function translatePackKeyPDF(key: string, language: string): string {
  const safeLang = PDF_LATIN_ONLY_FALLBACK[language] || language;
  const labels = PACKS_LABELS[safeLang] || PACKS_LABELS['en'];
  return labels[key] ?? key;
}
