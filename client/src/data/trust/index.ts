// Types définis localement pour éviter les problèmes de cache Vite
interface LocalizedText {
  fr: string; en: string; es: string; zh: string; de: string; ar: string; pt: string; ru: string;
}

interface StatItem {
  id: string;
  value: string;
  label: LocalizedText;
  description: LocalizedText;
}

interface MethodologyStep {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  iconName: 'Search' | 'PenTool' | 'Code' | 'Rocket';
}

interface SecurityStandard {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  category: 'Infrastructure' | 'Code' | 'Process';
  iconName: 'Shield' | 'Lock' | 'Server' | 'Eye';
}

export interface PricingTier {
  id: string;
  name: LocalizedText;
  price: LocalizedText;
  description: LocalizedText;
  features: LocalizedText[];
  recommended?: boolean;
  cta: LocalizedText;
}

interface InternationalLocation {
  id: string;
  country: string;
  city: string;
  projectCount: number;
  coordinates: { x: number; y: number };
}

export const stats: StatItem[] = [
  { 
    id: '1', 
    value: '100%', 
    label: { fr: 'Code Sur Mesure', en: 'Custom Code', es: 'Código Personalizado', zh: '定制代码', de: 'Maßgeschneiderter Code', ar: 'كود مخصص', pt: 'Código Personalizado', ru: 'Индивидуальный код' },
    description: { fr: 'Aucun template. Chaque projet est unique.', en: 'No template. Each project is unique.', es: 'Sin plantillas. Cada proyecto es único.', zh: '无模板。每个项目都是独一无二的。', de: 'Keine Vorlagen. Jedes Projekt ist einzigartig.', ar: 'بدون قوالب. كل مشروع فريد.', pt: 'Sem templates. Cada projeto é único.', ru: 'Никаких шаблонов. Каждый проект уникален.' }
  },
  { 
    id: '2', 
    value: '0', 
    label: { fr: 'Intermédiaire', en: 'Middlemen', es: 'Intermediarios', zh: '中间人', de: 'Zwischenhändler', ar: 'وسطاء', pt: 'Intermediários', ru: 'Посредников' },
    description: { fr: 'Un contact direct avec le développeur.', en: 'Direct contact with the developer.', es: 'Contacto directo con el desarrollador.', zh: '与开发者直接联系。', de: 'Direkter Kontakt zum Entwickler.', ar: 'اتصال مباشر مع المطور.', pt: 'Contato direto com o desenvolvedor.', ru: 'Прямой контакт с разработчиком.' }
  },
  { 
    id: '3', 
    value: '∞', 
    label: { fr: 'Passion', en: 'Passion', es: 'Pasión', zh: '热情', de: 'Leidenschaft', ar: 'شغف', pt: 'Paixão', ru: 'Страсть' },
    description: { fr: 'Des technologies maîtrisées avec enthousiasme.', en: 'Technologies mastered with enthusiasm.', es: 'Tecnologías dominadas con entusiasmo.', zh: '以热情掌握的技术。', de: 'Technologien mit Begeisterung gemeistert.', ar: 'تقنيات متقنة بحماس.', pt: 'Tecnologias dominadas com entusiasmo.', ru: 'Технологии, освоенные с энтузиазмом.' }
  },
  { 
    id: '4', 
    value: '24h', 
    label: { fr: 'Réponse Max', en: 'Max Response', es: 'Respuesta Máx', zh: '最大响应时间', de: 'Max. Antwort', ar: 'أقصى استجابة', pt: 'Resposta Máx', ru: 'Макс. ответ' },
    description: { fr: 'Communication réactive garantie.', en: 'Guaranteed reactive communication.', es: 'Comunicación reactiva garantizada.', zh: '保证快速响应的沟通。', de: 'Garantierte reaktive Kommunikation.', ar: 'اتصال تفاعلي مضمون.', pt: 'Comunicação reativa garantida.', ru: 'Гарантированная оперативная связь.' }
  },
];

export const methodology: MethodologyStep[] = [
  { 
    id: 'audit', 
    title: { fr: '1. Audit & Stratégie', en: '1. Audit & Strategy', es: '1. Auditoría y Estrategia', zh: '1. 审计与战略', de: '1. Audit & Strategie', ar: '1. التدقيق والاستراتيجية', pt: '1. Auditoria e Estratégia', ru: '1. Аудит и стратегия' },
    description: { fr: "Nous analysons votre existant et définissons des KPIs clairs avant d'écrire la moindre ligne de code.", en: "We analyze your current state and define clear KPIs before writing a single line of code.", es: "Analizamos su situación actual y definimos KPIs claros antes de escribir una sola línea de código.", zh: "我们在编写任何代码之前分析您的现状并定义明确的KPI。", de: "Wir analysieren Ihren aktuellen Stand und definieren klare KPIs, bevor wir eine Zeile Code schreiben.", ar: "نحلل وضعك الحالي ونحدد مؤشرات أداء واضحة قبل كتابة أي سطر برمجي.", pt: "Analisamos sua situação atual e definimos KPIs claros antes de escrever uma linha de código.", ru: "Мы анализируем текущее состояние и определяем четкие KPI перед написанием кода." },
    iconName: 'Search' 
  },
  { 
    id: 'design', 
    title: { fr: '2. UX/UI Design', en: '2. UX/UI Design', es: '2. Diseño UX/UI', zh: '2. UX/UI 设计', de: '2. UX/UI Design', ar: '2. تصميم UX/UI', pt: '2. Design UX/UI', ru: '2. UX/UI дизайн' },
    description: { fr: "Conception d'interfaces centrées sur l'utilisateur et la conversion, validées par des prototypes.", en: "User-centered and conversion-focused interface design, validated through prototypes.", es: "Diseño de interfaces centradas en el usuario y la conversión, validadas mediante prototipos.", zh: "以用户为中心、注重转化的界面设计，通过原型验证。", de: "Benutzer- und conversionzentriertes Interface-Design, validiert durch Prototypen.", ar: "تصميم واجهات تركز على المستخدم والتحويل، معتمدة من خلال النماذج الأولية.", pt: "Design de interfaces centrado no usuário e conversão, validado por protótipos.", ru: "Дизайн интерфейса, ориентированный на пользователя и конверсию, подтвержденный прототипами." },
    iconName: 'PenTool' 
  },
  { 
    id: 'dev', 
    title: { fr: '3. Développement Agile', en: '3. Agile Development', es: '3. Desarrollo Ágil', zh: '3. 敏捷开发', de: '3. Agile Entwicklung', ar: '3. التطوير الرشيق', pt: '3. Desenvolvimento Ágil', ru: '3. Agile разработка' },
    description: { fr: "Sprints de 2 semaines avec démos régulières. Architecture robuste et tests automatisés.", en: "2-week sprints with regular demos. Robust architecture and automated testing.", es: "Sprints de 2 semanas con demos regulares. Arquitectura robusta y pruebas automatizadas.", zh: "两周冲刺，定期演示。稳健的架构和自动化测试。", de: "2-Wochen-Sprints mit regelmäßigen Demos. Robuste Architektur und automatisierte Tests.", ar: "سباقات أسبوعين مع عروض منتظمة. بنية قوية واختبارات آلية.", pt: "Sprints de 2 semanas com demos regulares. Arquitetura robusta e testes automatizados.", ru: "Двухнедельные спринты с регулярными демо. Надежная архитектура и автоматизированное тестирование." },
    iconName: 'Code' 
  },
  { 
    id: 'scale', 
    title: { fr: '4. Growth & Scale', en: '4. Growth & Scale', es: '4. Crecimiento y Escalado', zh: '4. 增长与扩展', de: '4. Wachstum & Skalierung', ar: '4. النمو والتوسع', pt: '4. Crescimento e Escala', ru: '4. Рост и масштабирование' },
    description: { fr: "Lancement, monitoring, et optimisation continue des performances et de la conversion.", en: "Launch, monitoring, and continuous optimization of performance and conversion.", es: "Lanzamiento, monitoreo y optimización continua del rendimiento y la conversión.", zh: "启动、监控以及持续优化性能和转化。", de: "Launch, Monitoring und kontinuierliche Optimierung von Performance und Conversion.", ar: "الإطلاق والمراقبة والتحسين المستمر للأداء والتحويل.", pt: "Lançamento, monitoramento e otimização contínua de performance e conversão.", ru: "Запуск, мониторинг и непрерывная оптимизация производительности и конверсии." },
    iconName: 'Rocket' 
  },
];

export const securityStandards: SecurityStandard[] = [
  {
    id: 'ssl',
    title: { fr: 'Chiffrement de bout en bout', en: 'End-to-end encryption', es: 'Cifrado de extremo a extremo', zh: '端到端加密', de: 'Ende-zu-Ende-Verschlüsselung', ar: 'تشفير من طرف إلى طرف', pt: 'Criptografia de ponta a ponta', ru: 'Сквозное шифрование' },
    description: { fr: 'Tous les échanges de données sont sécurisés via TLS 1.3. Vos bases de données sont chiffrées au repos (AES-256).', en: 'All data exchanges are secured via TLS 1.3. Your databases are encrypted at rest (AES-256).', es: 'Todos los intercambios de datos están protegidos mediante TLS 1.3. Sus bases de datos están cifradas en reposo (AES-256).', zh: '所有数据交换都通过TLS 1.3加密保护。您的数据库在静态时加密（AES-256）。', de: 'Alle Datenaustausche sind über TLS 1.3 gesichert. Ihre Datenbanken sind im Ruhezustand verschlüsselt (AES-256).', ar: 'جميع تبادلات البيانات مؤمنة عبر TLS 1.3. قواعد بياناتك مشفرة في حالة السكون (AES-256).', pt: 'Todas as trocas de dados são protegidas via TLS 1.3. Seus bancos de dados são criptografados em repouso (AES-256).', ru: 'Все обмены данными защищены через TLS 1.3. Ваши базы данных зашифрованы в состоянии покоя (AES-256).' },
    category: 'Infrastructure',
    iconName: 'Lock'
  },
  {
    id: 'ddos',
    title: { fr: 'Protection Anti-DDoS', en: 'Anti-DDoS Protection', es: 'Protección Anti-DDoS', zh: '抗DDoS保护', de: 'Anti-DDoS-Schutz', ar: 'حماية ضد DDoS', pt: 'Proteção Anti-DDoS', ru: 'Защита от DDoS' },
    description: { fr: "Infrastructure résiliente capable d'absorber les attaques volumétriques grâce à notre CDN global.", en: 'Resilient infrastructure capable of absorbing volumetric attacks thanks to our global CDN.', es: 'Infraestructura resiliente capaz de absorber ataques volumétricos gracias a nuestro CDN global.', zh: '借助我们的全球CDN，弹性基础设施能够吸收容量攻击。', de: 'Resiliente Infrastruktur, die volumetrische Angriffe dank unseres globalen CDN absorbieren kann.', ar: 'بنية تحتية مرنة قادرة على امتصاص الهجمات الحجمية بفضل CDN العالمي.', pt: 'Infraestrutura resiliente capaz de absorver ataques volumétricos graças ao nosso CDN global.', ru: 'Устойчивая инфраструктура, способная поглощать объемные атаки благодаря нашему глобальному CDN.' },
    category: 'Infrastructure',
    iconName: 'Shield'
  },
  {
    id: 'code',
    title: { fr: 'Audit de Code Automatisé', en: 'Automated Code Audit', es: 'Auditoría de Código Automatizada', zh: '自动化代码审计', de: 'Automatisierte Code-Prüfung', ar: 'تدقيق الكود الآلي', pt: 'Auditoria de Código Automatizada', ru: 'Автоматизированный аудит кода' },
    description: { fr: 'Chaque commit passe par une pipeline CI/CD incluant SAST (Static Application Security Testing).', en: 'Every commit goes through a CI/CD pipeline including SAST (Static Application Security Testing).', es: 'Cada commit pasa por un pipeline CI/CD que incluye SAST (Pruebas de Seguridad de Aplicación Estática).', zh: '每次提交都通过包含SAST（静态应用安全测试）的CI/CD流水线。', de: 'Jeder Commit durchläuft eine CI/CD-Pipeline inkl. SAST (Static Application Security Testing).', ar: 'كل commit يمر عبر خط أنابيب CI/CD يتضمن SAST (اختبار أمان التطبيق الثابت).', pt: 'Cada commit passa por um pipeline CI/CD incluindo SAST (Teste de Segurança de Aplicação Estática).', ru: 'Каждый коммит проходит через CI/CD пайплайн, включающий SAST (статический анализ безопасности).' },
    category: 'Code',
    iconName: 'Eye'
  },
  {
    id: 'gdpr',
    title: { fr: 'Conformité RGPD', en: 'GDPR Compliance', es: 'Cumplimiento RGPD', zh: 'GDPR合规', de: 'DSGVO-Konformität', ar: 'الامتثال للائحة GDPR', pt: 'Conformidade LGPD', ru: 'Соответствие GDPR' },
    description: { fr: 'Architecture Privacy-by-design. Données hébergées exclusivement en Europe sur demande.', en: 'Privacy-by-design architecture. Data hosted exclusively in Europe on request.', es: 'Arquitectura Privacy-by-design. Datos alojados exclusivamente en Europa bajo petición.', zh: '隐私设计架构。可根据要求将数据专门托管在欧洲。', de: 'Privacy-by-design-Architektur. Daten auf Wunsch ausschließlich in Europa gehostet.', ar: 'هندسة الخصوصية حسب التصميم. البيانات مستضافة حصريًا في أوروبا عند الطلب.', pt: 'Arquitetura Privacy-by-design. Dados hospedados exclusivamente na Europa sob solicitação.', ru: 'Архитектура Privacy-by-design. Данные размещены исключительно в Европе по запросу.' },
    category: 'Process',
    iconName: 'Server'
  }
];

export const pricingTiers: PricingTier[] = [
  {
    id: 'starter',
    name: { fr: 'Essentiel', en: 'Essential', es: 'Esencial', zh: '基础版', de: 'Wesentlich', ar: 'أساسي', pt: 'Essencial', ru: 'Базовый' },
    price: { fr: 'À partir de 2.5k€', en: 'From €2.5k', es: 'Desde 2.5k€', zh: '起价 €2.5k', de: 'Ab 2.5k€', ar: 'ابتداءً من 2.5k€', pt: 'A partir de €2.5k', ru: 'От €2.5k' },
    description: { fr: 'Parfait pour lancer un MVP ou un site vitrine performant.', en: 'Perfect for launching an MVP or a high-performance showcase site.', es: 'Perfecto para lanzar un MVP o un sitio escaparate de alto rendimiento.', zh: '非常适合启动MVP或高性能展示网站。', de: 'Perfekt für den Start eines MVPs oder einer leistungsstarken Showcase-Website.', ar: 'مثالي لإطلاق MVP أو موقع عرض عالي الأداء.', pt: 'Perfeito para lançar um MVP ou site vitrine de alto desempenho.', ru: 'Идеально для запуска MVP или высокопроизводительного сайта-визитки.' },
    features: [
      { fr: 'Site Vitrine / Landing Page', en: 'Showcase Site / Landing Page', es: 'Sitio Escaparate / Landing Page', zh: '展示网站/落地页', de: 'Showcase-Website / Landing Page', ar: 'موقع عرض / صفحة هبوط', pt: 'Site Vitrine / Landing Page', ru: 'Сайт-визитка / Лендинг' },
      { fr: 'Design Responsive Premium', en: 'Premium Responsive Design', es: 'Diseño Responsive Premium', zh: '高级响应式设计', de: 'Premium Responsive Design', ar: 'تصميم متجاوب متميز', pt: 'Design Responsive Premium', ru: 'Премиум адаптивный дизайн' },
      { fr: 'Optimisation SEO de base', en: 'Basic SEO Optimization', es: 'Optimización SEO Básica', zh: '基础SEO优化', de: 'Basis-SEO-Optimierung', ar: 'تحسين SEO أساسي', pt: 'Otimização SEO Básica', ru: 'Базовая SEO оптимизация' },
      { fr: 'CMS Administrable', en: 'Manageable CMS', es: 'CMS Administrable', zh: '可管理的CMS', de: 'Verwaltbares CMS', ar: 'نظام إدارة محتوى قابل للإدارة', pt: 'CMS Administrável', ru: 'Управляемая CMS' },
      { fr: 'Support Email', en: 'Email Support', es: 'Soporte por Email', zh: '邮件支持', de: 'E-Mail-Support', ar: 'دعم البريد الإلكتروني', pt: 'Suporte por Email', ru: 'Поддержка по email' }
    ],
    cta: { fr: 'Commencer', en: 'Get Started', es: 'Comenzar', zh: '开始', de: 'Loslegen', ar: 'ابدأ الآن', pt: 'Começar', ru: 'Начать' }
  },
  {
    id: 'business',
    name: { fr: 'Business', en: 'Business', es: 'Business', zh: '商业版', de: 'Business', ar: 'الأعمال', pt: 'Business', ru: 'Бизнес' },
    price: { fr: 'À partir de 8k€', en: 'From €8k', es: 'Desde 8k€', zh: '起价 €8k', de: 'Ab 8k€', ar: 'ابتداءً من 8k€', pt: 'A partir de €8k', ru: 'От €8k' },
    description: { fr: 'Pour les entreprises qui veulent scaler et convertir.', en: 'For businesses that want to scale and convert.', es: 'Para empresas que quieren escalar y convertir.', zh: '适合想要扩展和转化的企业。', de: 'Für Unternehmen, die skalieren und konvertieren wollen.', ar: 'للشركات التي تريد التوسع والتحويل.', pt: 'Para empresas que querem escalar e converter.', ru: 'Для бизнеса, который хочет масштабироваться и конвертировать.' },
    features: [
      { fr: 'Application Web Complexe', en: 'Complex Web Application', es: 'Aplicación Web Compleja', zh: '复杂Web应用', de: 'Komplexe Webanwendung', ar: 'تطبيق ويب معقد', pt: 'Aplicação Web Complexa', ru: 'Сложное веб-приложение' },
      { fr: 'Design System sur mesure', en: 'Custom Design System', es: 'Design System Personalizado', zh: '定制设计系统', de: 'Maßgeschneidertes Design System', ar: 'نظام تصميم مخصص', pt: 'Design System Personalizado', ru: 'Индивидуальная дизайн-система' },
      { fr: 'SEO & Performance avancés', en: 'Advanced SEO & Performance', es: 'SEO y Rendimiento Avanzados', zh: '高级SEO和性能优化', de: 'Erweitertes SEO & Performance', ar: 'SEO وأداء متقدم', pt: 'SEO e Performance Avançados', ru: 'Продвинутая SEO и производительность' },
      { fr: 'Intégration CRM / API', en: 'CRM / API Integration', es: 'Integración CRM / API', zh: 'CRM/API集成', de: 'CRM / API-Integration', ar: 'تكامل CRM / API', pt: 'Integração CRM / API', ru: 'Интеграция CRM / API' },
      { fr: 'Analytics & Tracking', en: 'Analytics & Tracking', es: 'Analytics y Tracking', zh: '分析和跟踪', de: 'Analytics & Tracking', ar: 'تحليلات وتتبع', pt: 'Analytics e Tracking', ru: 'Аналитика и отслеживание' },
      { fr: 'Support Prioritaire', en: 'Priority Support', es: 'Soporte Prioritario', zh: '优先支持', de: 'Prioritätssupport', ar: 'دعم ذو أولوية', pt: 'Suporte Prioritário', ru: 'Приоритетная поддержка' }
    ],
    recommended: true,
    cta: { fr: 'Commencer', en: 'Get Started', es: 'Comenzar', zh: '开始', de: 'Loslegen', ar: 'ابدأ الآن', pt: 'Começar', ru: 'Начать' }
  },
  {
    id: 'custom',
    name: { fr: 'Entreprise', en: 'Enterprise', es: 'Empresa', zh: '企业版', de: 'Unternehmen', ar: 'المؤسسات', pt: 'Empresa', ru: 'Корпоративный' },
    price: { fr: 'Sur Devis', en: 'Custom Quote', es: 'Presupuesto', zh: '定制报价', de: 'Auf Anfrage', ar: 'عرض سعر مخصص', pt: 'Sob Consulta', ru: 'По запросу' },
    description: { fr: 'Solutions critiques et transformation digitale globale.', en: 'Critical solutions and global digital transformation.', es: 'Soluciones críticas y transformación digital global.', zh: '关键解决方案和全球数字化转型。', de: 'Kritische Lösungen und globale digitale Transformation.', ar: 'حلول حرجة وتحول رقمي شامل.', pt: 'Soluções críticas e transformação digital global.', ru: 'Критические решения и глобальная цифровая трансформация.' },
    features: [
      { fr: 'Architecture Micro-services', en: 'Microservices Architecture', es: 'Arquitectura de Microservicios', zh: '微服务架构', de: 'Microservices-Architektur', ar: 'هندسة الخدمات المصغرة', pt: 'Arquitetura de Microsserviços', ru: 'Микросервисная архитектура' },
      { fr: 'App Mobile Native (iOS/Android)', en: 'Native Mobile App (iOS/Android)', es: 'App Móvil Nativa (iOS/Android)', zh: '原生移动应用（iOS/Android）', de: 'Native Mobile App (iOS/Android)', ar: 'تطبيق جوال أصلي (iOS/Android)', pt: 'App Mobile Nativo (iOS/Android)', ru: 'Нативное мобильное приложение (iOS/Android)' },
      { fr: 'Sécurité Renforcée (Audits)', en: 'Enhanced Security (Audits)', es: 'Seguridad Reforzada (Auditorías)', zh: '增强安全性（审计）', de: 'Erweiterte Sicherheit (Audits)', ar: 'أمان معزز (تدقيقات)', pt: 'Segurança Reforçada (Auditorias)', ru: 'Усиленная безопасность (Аудиты)' },
      { fr: 'SLA Garanti 99.9%', en: 'Guaranteed SLA 99.9%', es: 'SLA Garantizado 99.9%', zh: 'SLA保证99.9%', de: 'Garantiertes SLA 99,9%', ar: 'SLA مضمون 99.9%', pt: 'SLA Garantido 99.9%', ru: 'Гарантированный SLA 99.9%' },
      { fr: 'Équipe Dédiée', en: 'Dedicated Team', es: 'Equipo Dedicado', zh: '专属团队', de: 'Dediziertes Team', ar: 'فريق مخصص', pt: 'Equipe Dedicada', ru: 'Выделенная команда' },
      { fr: 'Maintenance 24/7', en: '24/7 Maintenance', es: 'Mantenimiento 24/7', zh: '7x24小时维护', de: '24/7 Wartung', ar: 'صيانة على مدار الساعة', pt: 'Manutenção 24/7', ru: 'Поддержка 24/7' }
    ],
    cta: { fr: 'Commencer', en: 'Get Started', es: 'Comenzar', zh: '开始', de: 'Loslegen', ar: 'ابدأ الآن', pt: 'Começar', ru: 'Начать' }
  }
];

export const internationalData: InternationalLocation[] = [
  { id: 'fr', country: 'France', city: 'Paris (HQ)', projectCount: 24, coordinates: { x: 49, y: 32 } },
  { id: 'us', country: 'USA', city: 'New York', projectCount: 12, coordinates: { x: 25, y: 35 } },
  { id: 'uk', country: 'UK', city: 'London', projectCount: 8, coordinates: { x: 47, y: 30 } },
  { id: 'de', country: 'Germany', city: 'Berlin', projectCount: 6, coordinates: { x: 52, y: 31 } },
  { id: 'ae', country: 'UAE', city: 'Dubai', projectCount: 5, coordinates: { x: 62, y: 45 } },
];
