import type { LocalizedText } from '../../types';

const t = (fr: string, en: string, es: string, zh: string, de: string, ar: string, pt: string, ru: string): LocalizedText => ({ fr, en, es, zh, de, ar, pt, ru });

export const ecoMarket = {
  id: 'eco-market-app',
  title: 'EcoMarket Flow',
  client: 'Circular Industries Ltd.',
  category: 'web',
  year: '2025',
  shortDescription: t(
    "Marketplace B2B dédiée à l'économie circulaire industrielle.",
    "B2B Marketplace dedicated to industrial circular economy.",
    "Marketplace B2B dedicada a la economía circular industrial.",
    "致力于工业循环经济的B2B市场。",
    "B2B-Marktplatz für die industrielle Kreislaufwirtschaft.",
    "سوق B2B مخصص للاقتصاد الدائري الصناعي.",
    "Marketplace B2B dedicado à economia circular industrial.",
    "B2B маркетплейс для промышленной циклической экономики."
  ),
  fullDescription: t(
    "Une plateforme SaaS connectant les industries pour valoriser leurs déchets en ressources, optimisant les flux de matériaux recyclés grâce à l'IA.",
    "A SaaS platform connecting industries to turn waste into resources, optimizing recycled material flows using AI.",
    "Una plataforma SaaS que conecta industrias para valorizar residuos como recursos.",
    "一个SaaS平台，连接各个行业将废物转化为资源，利用AI优化回收材料流。",
    "Eine SaaS-Plattform, die Industrien verbindet, um Abfälle in Ressourcen umzuwandeln.",
    "منصة SaaS تربط الصناعات لتحويل النفايات إلى موارد، وتحسين تدفق المواد المعاد تدويرها باستخدام الذكاء الاصطناعي.",
    "Uma plataforma SaaS conectando indústrias para transformar resíduos em recursos.",
    "SaaS-платформа, соединяющая отрасли для превращения отходов в ресурсы, оптимизируя потоки вторсырья с помощью ИИ."
  ),
  heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1920&q=80',
  thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
  tags: ['React', 'Python', 'TensorFlow', 'Blockchain'],
  challenge: t(
    "Gaspillage massif de sous-produits industriels faute de canal de revente.",
    "Massive waste of industrial by-products due to lack of resale channels.",
    "Desperdicio masivo de subproductos industriales.",
    "由于缺乏转售渠道，大量工业副产品被浪费。",
    "Massive Verschwendung von industriellen Nebenprodukten.",
    "هدر هائل للمنتجات الثانوية الصناعية بسبب نقص قنوات إعادة البيع.",
    "Desperdício massivo de subprodutos industriais.",
    "Массовая трата промышленных побочных продуктов из-за отсутствия каналов перепродажи."
  ),

  // NOUVEAUX CHAMPS UX/UI EXPERT
  problem: t(
    "Les industries peinaient à trouver des acheteurs pour leurs matériaux recyclables, entraînant des coûts de stockage élevés et un impact carbone négatif.",
    "Industries struggled to find buyers for recyclable materials, leading to high storage costs and negative carbon impact.",
    "Las industrias luchaban por encontrar compradores para materiales reciclables.",
    "各行各业难以找到可回收材料的买家，导致高昂的存储成本和负面的碳影响。",
    "Industrien hatten Schwierigkeiten, Käufer für recycelbare Materialien zu finden.",
    "عانت الصناعات للعثور على مشترين للمواد القابلة لإعادة التدوير.",
    "As indústrias lutavam para encontrar compradores para materiais recicláveis.",
    "Промышленность с трудом находила покупателей для вторсырья, что вело к высоким затратам на хранение."
  ),
  goal: t(
    "Créer un écosystème fluide où chaque déchet devient une matière première potentielle, avec une traçabilité complète.",
    "Create a seamless ecosystem where every waste becomes a potential raw material, with full traceability.",
    "Crear un ecosistema fluido donde cada residuo es materia prima potencial.",
    "创建一个无缝生态系统，使每种废物都成为潜在的原材料，并具有完全的可追溯性。",
    "Schaffung eines nahtlosen Ökosystems, in dem jeder Abfall zum Rohstoff wird.",
    "إنشاء نظام بيئي سلس حيث تصبح كل نفاية مادة خام محتملة.",
    "Criar um ecossistema fluido onde cada resíduo se torna matéria-prima potencial.",
    "Создать бесшовную экосистему, где каждый отход становится потенциальным сырьем, с полной прослеживаемостью."
  ),
  tools: ['Figma', 'React', 'Node.js', 'Blockchain'],
  userJourney: {
    title: t("Cycle de Valorisation", "Valorization Cycle", "Ciclo de Valorización", "增值周期", "Verwertungszyklus", "دورة التقييم", "Ciclo de Valorização", "Цикл валоризации"),
    steps: [
      { 
        title: t("Qualification", "Qualification", "Calificación", "资格认证", "Qualifizierung", "تأهيل", "Qualificação", "Квалификация"),
        description: t("IA analyse la composition des matériaux et suggère des débouchés.", "AI analyzes material composition and suggests outlets.", "IA analiza composición y sugiere salidas.", "AI分析材料成分并建议销路。", "KI analysiert Materialzusammensetzung.", "الذكاء الاصطناعي يحلل تركيب المواد.", "IA analisa composição e sugere saídas.", "ИИ анализирует состав и предлагает сбыт.")
      },
      {
        title: t("Matching", "Matching", "Coincidencia", "匹配", "Matching", "مطابقة", "Correspondência", "Сопоставление"),
        description: t("Algorithme connectant offreurs et demandeurs en temps réel.", "Algorithm connecting suppliers and buyers in real-time.", "Algoritmo conectando oferta y demanda.", "实时连接供需双方的算法。", "Algorithmus verbindet Anbieter und Käufer.", "خوارزمية تربط الموردين والمشترين.", "Algoritmo conectando ofertantes e compradores.", "Алгоритм, соединяющий поставщиков и покупателей.")
      },
      {
        title: t("Transaction", "Transaction", "Transacción", "交易", "Transaktion", "معاملة", "Transação", "Сделка"),
        description: t("Contrats intelligents (Smart Contracts) sécurisant l'échange et la logistique.", "Smart Contracts securing exchange and logistics.", "Contratos inteligentes asegurando el intercambio.", "智能合约保障交易和物流。", "Smart Contracts sichern Austausch und Logistik.", "العقود الذكية تؤمن التبادل واللوجستيات.", "Contratos inteligentes protegendo a troca.", "Смарт-контракты, защищающие обмен и логистику.")
      }
    ]
  },
  wireframes: {
    description: t(
      "Conception centrée sur la complexité des données industrielles : simplification des dashboards de flux de matière.",
      "Design focused on industrial data complexity: simplifying material flow dashboards.",
      "Diseño centrado en la complejidad de datos industriales.",
      "专注于工业数据复杂性的设计：简化物料流仪表板。",
      "Design mit Fokus auf industrielle Datenkomplexität.",
      "تصميم يركز على تعقيد البيانات الصناعية.",
      "Design focado na complexidade de dados industriais.",
      "Дизайн, ориентированный на сложность промышленных данных: упрощение дашбордов потока материалов."
    ),
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80', // Dashboard analtyics
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80', // Data visualization
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80', // Graphs
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'  // Dashboard
    ]
  },
  mockups: {
    // desktop: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=80', // Commented out to potentially use interactive preview
    // mobile: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80', // Commented out
    description: t("Dashboard de pilotage des flux de déchets et marketplace B2B intégrée.", "Waste flow management dashboard and integrated B2B marketplace.", "Panel de control de flujo de residuos.", "废物通过管理仪表板和集成B2B市场。", "Abfallfluss-Management-Dashboard.", "لوحة تحكم إدارة تدفق النفايات وسوق B2B مدمج.", "Dashboard de gestão de fluxo de resíduos.", "Дашборд управления потоками отходов и интегрированный B2B маркетплейс.")
  },

  solution: t(
    "Développement d'une plateforme robuste capable de gérer des milliers de tonnes de transactions, incluant certification carbone et conformité réglementaire automatisée.",
    "Development of a robust platform capable of handling thousands of tons of transactions, including carbon certification and automated regulatory compliance.",
    "Desarrollo de una plataforma robusta para gestión de transacciones masivas.",
    "开发一个能够处理数千吨交易的强大平台，包括碳认证和自动化合规性。",
    "Entwicklung einer robusten Plattform für Tausende von Tonnen Transaktionen.",
    "تطوير منصة قوية قادرة على التعامل مع آلاف الأطنان من المعاملات.",
    "Desenvolvimento de uma plataforma robusta capaz de gerenciar milhares de toneladas.",
    "Разработка надежной платформы, способной обрабатывать тысячи тонн транзакций, включая углеродную сертификацию."
  ),
  result: t(
    "2.5M tonnes de CO2 évitées la première année, adoption par 150 grandes industries européennes.",
    "2.5M tons of CO2 avoided in the first year, adoption by 150 major European industries.",
    "2.5M toneladas de CO2 evitadas el primer año.",
    "第一年避免了250万吨二氧化碳排放，被150家欧洲大型工业采用。",
    "2,5 Mio. Tonnen CO2 im ersten Jahr vermieden.",
    "تجنب 2.5 مليون طن من ثاني أكسيد الكربون في السنة الأولى.",
    "2.5M toneladas de CO2 evitadas no primeiro ano.",
    "2.5 млн тонн CO2 предотвращено в первый год, принято 150 крупными европейскими производствами."
  ),
  demoUrl: '/demos/eco-market',
  beforeImage: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80', // Generic blueprint
  afterImage: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=80', // Modern abstract
  images: [
    'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80'
  ],
  timeline: [
    {
      phase: t('Étude de Faisabilité', 'Feasibility Study', 'Estudio de Viabilidad', '可行性研究', 'Machbarkeitsstudie', 'دراسة الجدوى', 'Estudo de Viabilidade', 'ТЭО'),
      duration: t('2 semaines', '2 weeks', '2 semanas', '2周', '2 Wochen', 'أسبوعان', '2 semanas', '2 недели'),
      description: t('Analyse des flux de déchets industriels et contraintes légales.', 'Analysis of industrial waste flows and legal constraints.', 'Análisis de flujos de residuos.', '分析工业废物流和法律限制。', 'Analyse der Abfallströme.', 'تحليل تدفقات النفايات الصناعية.', 'Análise de fluxos de resíduos.', 'Анализ потоков промышленных отходов.')
    },
    {
      phase: t('Architecture Système', 'System Architecture', 'Arquitectura del Sistema', '系统架构', 'Systemarchitektur', 'هندسة النظام', 'Arquitetura do Sistema', 'Системная архитектура'),
      duration: t('3 semaines', '3 weeks', '3 semanas', '3周', '3 Wochen', '3 أسابيع', '3 semanas', '3 недели'),
      description: t('Design de la base de données graphique pour le matching matériaux.', 'Graph database design for material matching.', 'Diseño de base de datos gráfica.', '用于材料匹配的图形数据库设计。', 'Graph-Datenbank-Design.', 'تصميم قاعدة بيانات الرسم البياني.', 'Design do banco de dados gráfico.', 'Проектирование графовой базы данных для сопоставления материалов.')
    },
    {
      phase: t('MVP & Bêta', 'MVP & Beta', 'MVP y Beta', 'MVP与测试版', 'MVP & Beta', 'MVP وبيتا', 'MVP & Beta', 'MVP и Бета'),
      duration: t('6 semaines', '6 weeks', '6 semanas', '6周', '6 Wochen', '6 أسابيع', '6 semanas', '6 недели'),
      description: t('Lancement pilote avec 10 partenaires industriels clés.', 'Pilot launch with 10 key industrial partners.', 'Lanzamiento piloto.', '与10个关键工业合作伙伴进行试点启动。', 'Pilotstart.', 'إطلاق تجريبي.', 'Lançamento piloto.', 'Пилотный запуск с 10 key industrial partners.')
    }
  ]
};
