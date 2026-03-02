import type { LocalizedText } from '../../types';

const t = (fr: string, en: string, es: string, zh: string, de: string, ar: string, pt: string, ru: string): LocalizedText => ({ fr, en, es, zh, de, ar, pt, ru });

export const zenithBank = {
  id: 'zenith-bank',
  title: 'Zenith Bank',
  client: 'Zenith Financial Group',
  category: 'mobile',
  year: '2025',
  shortDescription: t("Application de banque mobile ultra-sécurisée.", "Ultra-secure mobile banking application.", "Aplicación de banca móvil ultra segura.", "超安全的手机银行应用。", "Ultra-sichere Mobile-Banking-App.", "تطبيق مصرفي عبر الجوال فائق الأمان.", "Aplicativo de banco móvel ultra seguro.", "Ультра-безопасное банковское приложение."),
  fullDescription: t("Une plateforme néo-bancaire révolutionnaire offrant une gestion de patrimoine pilotée par l'IA, des transactions instantanées et une sécurité de niveau militaire. Nous avons conçu une expérience utilisateur qui transforme la complexité financière en une interface intuitive et apaisante.", "A revolutionary neo-banking platform offering AI-driven wealth management, instant transactions, and military-grade security. We designed a user experience that transforms financial complexity into an intuitive and calming interface.", "Una plataforma neobancaria revolucionaria que ofrece gestión de patrimonio impulsada por IA, transacciones instantáneas y seguridad de nivel militar. Diseñamos una experiencia de usuario que transforma la complejidad financiera en una interfaz intuitiva y tranquila.", "一个革命性的数字银行平台，提供人工智能驱动的财富管理、即时交易和军用级安全。我们设计了一种用户体验，将复杂的金融业务转化为直观且平和的界面。", "Eine revolutionäre Neobanking-Plattform mit KI-gesteuerter Vermögensverwaltung, Soforttransaktionen und Sicherheit auf Militärniveau. Wir haben eine User Experience entwickelt, die finanzielle Komplexität in ein intuitives und beruhigendes Interface verwandelt.", "منصة مصرفية رقمية ثورية تقدم إدارة ثروات مدعومة بالذكاء الاصطناعي، ومعاملات فورية، وأماناً بمستوى عسكري. صممنا تجربة مستخدم تحول التعقيد المالي إلى واجهة سهلة وبسيطة.", "Uma plataforma neobancária revolucionária que oferece gestão de patrimônio orientada por IA, transações instantâneas e segurança de nível militar. Projetamos uma experiência de usuário que transforma a complexidade financeira em uma interface intuitiva e tranquila.", "Революционная необанковская платформа, предлагающая управление капиталом на базе ИИ, мгновенные транзакции и безопасность военного уровня. Мы разработали интерфейс, который превращает финансовую сложность в интуитивно понятный и спокойный опыт."),
  heroImage: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=1920',
  thumbnail: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=800',
  images: [
    'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80'
  ],
  mockups: {
    desktop: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=1200',
    mobile: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=600',
    description: t('Dashboard bancaire haute fidélité avec visualisation des données en temps réel.', 'High-fidelity banking dashboard with real-time data visualization.', 'Dashboard bancario de alta fidelidad con visualización de datos en tiempo real.', '高保真银行仪表板，具有实时数据可视化。', 'High-Fidelity-Banking-Dashboard mit Echtzeit-Datenvisualisierung.', 'لوحة تحكم مصرفية عالية الدقة مع تصور البيانات في الوقت الفعلي.', 'Dashboard bancário de alta fidelidade com visualização de dados em tempo real.', 'Высококачественная банковская панель с визуализацией данных в реальном времени.')
  },
  tags: ['Swift', 'Kotlin', 'Biometrics', 'Fintech'],
  challenge: t("Sécuriser les transactions tout en offrant une expérience utilisateur fluide.", "Securing transactions while providing a fluid user experience.", "Asegurar las transacciones ofreciendo una experiencia fluida.", "在提供流畅用户体验的同时确保交易安全。", "Transaktionen sichern und gleichzeitig flüssige UX bieten.", "تأمين المعاملات مع توفير تجربة مستخدم سلسة.", "Garantir transações seguras e oferecer UX fluida.", "Обеспечение безопасности транзакций при плавном UX."),
  solution: t("Architecture biométrique multiniveau et interface minimaliste.", "Multilevel biometric architecture and minimalist interface.", "Arquitectura biométrica multinivel e interfaz minimalista.", "多层生物识别架构和极简界面。", "Mehrstufige biometrische Architektur und minimalistisches Interface.", "هندسة بيومترية متعددة المستويات وواجهة مبسطة.", "Arquitetura biométrica multinível e interface minimalista.", "Многоуровневая биометрическая архитектура и минималистичный интерфейс."),
  result: t("500k+ téléchargements le premier mois.", "500k+ downloads in the first month.", "Más de 500k descargas el premier mes.", "首月下载量突破50万。", "Über 500k Downloads im ersten Monat.", "أكثر من 500 ألف تحميل في الشهر الأول.", "Mais de 500k downloads no primeiro mês.", "500к+ скачиваний за первый месяц."),
  demoUrl: '/demos/zenith-bank',
  timeline: [
    { 
      phase: t('Stratégie', 'Strategy', 'Estrategia', '战略', 'Strategie', 'الاستراتيجية', 'Estratégia', 'Стратегия'), 
      duration: t('2 semaines', '2 weeks', '2 semanas', '2周', '2 Wochen', 'أسبوعان', '2 semanas', '2 недели'), 
      description: t('Analyse des flux bancaires et définition de la roadmap sécurité.', 'Analysis of banking flows and security roadmap definition.', 'Análisis de flujos bancarios y definición de la hoja de ruta de seguridad.', '分析银行流程并定义安全路线图。', 'Analyse der Bankabläufe und Definition der Sicherheits-Roadmap.', 'تحليل التدفقات المصرفية وتحديد خارطة طريق الأمان.', 'Análise de fluxos bancários e definição do roadmap de segurança.', 'Анализ банковских потоков и определение дорожной карты безопасности.') 
    },
    { 
      phase: t('UI & UX Design', 'UI & UX Design', 'Diseño UI & UX', 'UI & UX 设计', 'UI & UX Design', 'تصميم الواجهة وتجربة المستخدم', 'Design UI & UX', 'UI & UX Дизайн'), 
      duration: t('3 semaines', '3 weeks', '3 semanas', '3周', '3 Wochen', '3 أسابيع', '3 semanas', '3 недели'), 
      description: t('Création d\'une interface épurée et de parcours utilisateurs sans friction.', 'Creation of a clean interface and frictionless user journeys.', 'Creación de una interfaz limpia y procesos de usuario sin fricciones.', '创建简洁的界面和无障碍的用户旅程。', 'Erstellung eines klaren Interface und reibungsloser User Journeys.', 'إنشاء واجهة نظيفة ورحلات مستخدم سلسة.', 'Criação de uma interface limpa e jornadas de usuário sem fricção.', 'Создание чистого интерфейса и бесшовного пути пользователя.') 
    },
    { 
      phase: t('Développement', 'Development', 'Desarrollo', '开发', 'Entwicklung', 'التطوير', 'Desenvolvimento', 'Разработка'), 
      duration: t('6 semaines', '6 weeks', '6 semanas', '6周', '6 Wochen', '6 أسابيع', '6 semanas', '6 недель'), 
      description: t('Implémentation de l\'architecture biométrique et intégration bancaire.', 'Implementation of biometric architecture and banking integration.', 'Implementación de arquitectura biométrica e integración bancaria.', '实现生物识别架构和银行系统集成。', 'Implementierung der biometrischen Architektur und Bankintegration.', 'تنفيذ الهندسة البيومترية والتكامل المصرفي.', 'Implementação da arquitetura biométrica e integração bancária.', 'Внедрение биометрической архитектуры и банковская интеграция.') 
    },
    { 
      phase: t('Tests & Sécurité', 'Tests & Security', 'Pruebas y Seguridad', '测试与安全', 'Tests & Sicherheit', 'الاختبارات والأمان', 'Testes e Segurança', 'Тестирование и безопасность'), 
      duration: t('2 semaines', '2 weeks', '2 semanas', '2周', '2 Wochen', 'أسبوعان', '2 semanas', '2 недели'), 
      description: t('Audits de pénétration et optimisation des performances.', 'Penetration audits and performance optimization.', 'Auditorías de penetración y optimización de rendimiento.', '渗透审计和性能优化。', 'Penetration-Audits und Performance-Optimierung.', 'تدقيق الاختراق وتحسين الأداء.', 'Auditoria de penetração e otimização de desempenho.', 'Аудит безопасности и оптимизация производительности.') 
    }
  ]
};

export const auraWatches = {
  id: 'aura-watches',
  title: 'Aura Watches',
  client: 'Aura Horology',
  category: 'web',
  year: '2024',
  shortDescription: t("E-commerce de luxe pour horlogerie fine.", "Luxury e-commerce for fine watchmaking.", "E-commerce de lujo para alta relojería.", "高级钟表的奢华电子商务网站。", "Luxus-E-Commerce für feine Uhrmacherkunst.", "تجارة إلكترونية فاخرة للساعات الراقية.", "E-commerce de luxo para alta relojoaria.", "Люксовый e-commerce для высокого часового искусства."),
  fullDescription: t("Une boutique en ligne immersive redéfinissant les standards du e-commerce de luxe. Grâce à un moteur de rendu 3D propriétaire, les clients peuvent explorer chaque détail des garde-temps Aura avec une précision microscopique, créant un lien émotionnel fort avant l'achat.", "An immersive online boutique redefining luxury e-commerce standards. Thanks to a proprietary 3D rendering engine, customers can explore every detail of Aura timepieces with microscopic precision, creating a strong emotional connection before purchase.", "Una boutique online inmersiva que redefine los estándares del e-commerce de lujo. Gracias a un motor de renderizado 3D propio, los clientes pueden explorar cada detalle de los relojes Aura con precisión microscópica, creando un fuerte vínculo emocional antes de la compra.", "一个重新定义奢侈品电子商务标准的沉浸式在线商店。凭借专有的3D渲染引擎，客户可以以微观精度探索Aura时计的每一个细节，在购买前建立强烈的情感联系。", "Eine immersive Online-Boutique, die die Standards des Luxus-E-Commerce neu definiert. Dank einer proprietären 3D-Rendering-Engine können Kunden jedes Detail der Aura-Zeitmesser mit mikroskopischer Präzision erkunden und so vor dem Kauf eine starke emotionale Bindung aufbauen.", "متجر إلكتروني غامر يعيد تعريف معايير التجارة الإلكترونية الفاخرة. بفضل محرك عرض ثلاثي الأبعاد خاص، يمكن للعملاء استكشاف كل تفاصيل ساعات Aura بدقة مجهرية، مما يخلق رابطًا عاطفيًا قويًا قبل الشراء.", "Uma boutique online imersiva que redefine os padrões do e-commerce de luxo. Graças a um motor de renderização 3D proprietário, os clientes podem explorar cada detalhe dos relógios Aura com precisão microscópica, criando uma forte conexão emocional antes da compra.", "Иммерсивный онлайн-бутик, переосмысливающий стандарты люксового e-commerce. Благодаря собственно разработке 3D-движка, клиенты могут изучить каждую деталь часов Aura с микроскопической точностью, создавая глубокую эмоциональную связь еще до покупки."),
  heroImage: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80',
  thumbnail: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80',
  images: [
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80'
  ],
  tags: ['Next.js', 'Vercel', 'Shopify Plus', 'WebGL'],
  challenge: t("Transmettre l'artisanat du luxe sur un écran numérique.", "Conveying luxury craftsmanship on a digital screen.", "Transmitir la artesanía de lujo en pantalla digital.", "在屏幕上传达奢华工艺感。", "Luxushandwerk auf einem digitalen Bildschirm vermitteln.", "نقل حرفية الفخامة عبر شاشة رقمية.", "Transmitir a artesania de luxo em tela digital.", "Передача роскоши мастерства через экран."),
  solution: t("Photographie haute définition et animations fluides.", "High-definition photography and smooth animations.", "Fotografía HD y animaciones fluidas.", "高清摄影和流畅动画。", "HD-Fotografie und flüssige Animationen.", "تصوير عالي الدقة ورسوم متحركة سلسة.", "Fotografia HD e animações fluidas.", "HD-фотографии и плавная анимация."),
  result: t("Augmentation de 60% du panier moyen.", "60% increase in average cart value.", "Aumento del 60% del carrito promedio.", "平均客单价提升60%。", "60% Steigerung des durchschnittlichen Warenkorbwerts.", "زيادة 60% في متوسط قيمة السلة.", "Aumento de 60% no valor médio do carrinho.", "Увеличение среднего чека на 60%."),
  demoUrl: '/demos/aura-luxury',
  timeline: [
    { 
      phase: t('Concept & Design', 'Concept & Design', 'Concepto y Diseño', '概念与设计', 'Konzept & Design', 'المفهوم والتصميم', 'Conceito e Design', 'Концепция и дизайн'), 
      duration: t('3 semaines', '3 weeks', '3 semanas', '3周', '3 Wochen', '3 أسابيع', '3 semanas', '3 недели'), 
      description: t('Définition d\'une identité visuelle prestige et minimaliste.', 'Definition of a prestige and minimalist visual identity.', 'Definición de una identidad visual de prestigio y minimalista.', '定义尊贵且极简的视觉身份。', 'Definition einer prestigeträchtigen und minimalistischen visuellen Identität.', 'تحديد هوية بصرية مرموقة ومبسطة.', 'Definição de uma identidade visual de prestígio e minimalista.', 'Определение престижного и минималистичного визуального стиля.') 
    },
    { 
      phase: t('Expérience 3D', '3D Experience', 'Experiencia 3D', '3D体验', '3D-Erlebnis', 'تجربة ثلاثية الأبعاد', 'Experiência 3D', '3D опыт'), 
      duration: t('5 semaines', '5 weeks', '5 semanas', '5周', '5 Wochen', '5 أسابيع', '5 semanas', '5 недель'), 
      description: t('Modélisation et optimisation des assets 3D pour le web.', 'Modeling and optimization of 3D assets for the web.', 'Modelado y optimización de activos 3D para la web.', 'Web端3D资源的建模与优化。', 'Modellierung und Optimierung von 3D-Assets für das Web.', 'نمذجة وتحسين الأصول ثلاثية الأبعاد للويب.', 'Modelagem e otimização de ativos 3D para a web.', 'Моделирование и оптимизация 3D-активов для веба.') 
    },
    { 
      phase: t('E-commerce Engine', 'E-commerce Engine', 'Motor E-commerce', '电商引擎', 'E-Commerce Engine', 'محرك التجارة الإلكترونية', 'Motor de E-commerce', 'E-commerce движок'), 
      duration: t('4 semaines', '4 weeks', '4 semanas', '4周', '4 Wochen', '4 أسابيع', '4 semanas', '4 недели'), 
      description: t('Intégration Shopify Plus et flux logistiques.', 'Shopify Plus integration and logistics flows.', 'Integración de Shopify Plus y flujos logísticos.', 'Shopify Plus集成和物流流程。', 'Shopify Plus Integration und Logistikabläufe.', 'تكامل Shopify Plus وتدفقات الخدمات اللوجستية.', 'Integração Shopify Plus e fluxos logísticos.', 'Интеграция Shopify Plus и логистических процессов.') 
    }
  ]
};
