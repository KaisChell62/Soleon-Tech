import type { LocalizedText } from '../../types';

const t = (fr: string, en: string, es: string, zh: string, de: string, ar: string, pt: string, ru: string): LocalizedText => ({ fr, en, es, zh, de, ar, pt, ru });

export const velocity = {
  id: 'velocity-motors-web',
  title: 'Velocity Motors',
  client: 'Velocity Luxury',
  category: 'web',
  year: '2024',
  shortDescription: t(
    "Showroom virtuel immersif pour concessionnaire de luxe.",
    "Immersive virtual showroom for a luxury dealership.",
    "Showroom virtual inmersivo para concesionario de lujo.",
    "豪华经销商的沉浸式虚拟展厅。",
    "Immersiver virtueller Showroom für einen Luxushändler.",
    "صالة عرض افتراضية غامرة لوكالة سيارات فاخرة.",
    "Showroom virtual imersivo para concessionária de luxo.",
    "Иммерсивный виртуальный шоурум для люксового дилера."
  ),
  fullDescription: t(
    "Un site web expérientiel utilisant la 3D pour permettre aux visiteurs de configurer et visualiser leur véhicule de luxe dans les moindres détails.",
    "An experiential website using 3D to allow visitors to configure and visualize their luxury vehicle in every detail.",
    "Un sitio web experiencial que utiliza 3D para permitir a los visitantes configurar y visualizar su vehículo de lujo en cada detalle.",
    "一个使用3D技术的体验式网站，让访客可以配置和可视化他们的豪华车辆的每个细节。",
    "Eine erlebnisorientierte Website mit 3D, die Besuchern ermöglicht, ihr Luxusfahrzeug in jedem Detail zu konfigurieren und zu visualisieren.",
    "موقع تجريبي يستخدم تقنية 3D للسماح للزوار بتكوين وتصور سيارتهم الفاخرة بكل تفاصيلها.",
    "Um site experiencial usando 3D para permitir aos visitantes configurar e visualizar seu veículo de luxo em cada detalhe.",
    "Экспериментальный сайт с использованием 3D для настройки и визуализации люксовых автомобилей во всех деталях."
  ),
  heroImage: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=1920',
  thumbnail: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=800',
  images: [
    'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80'
  ],
  mockups: {
    desktop: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=1200',
    mobile: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=600',
    description: t('Configurateur 3D immersif pour véhicules de luxe.', 'Immersive 3D configurator for luxury vehicles.', 'Configurador 3D inmersivo para vehículos de lujo.', '豪华车辆的沉浸式3D配置器。', 'Immersiver 3D-Konfigurator für Luxusfahrzeuge.', 'مُكوِّن ثلاثي الأبعاد غامر للسيارات الفاخرة.', 'Configurador 3D imersivo para veículos de luxo.', 'Иммерсивный 3D-конфигуратор для роскошных автомобилей.')
  },
  tags: ['React', 'Three.js', 'WebGL', 'Tailwind'],
  challenge: t(
    "Le client voulait dépasser le simple catalogue photo pour offrir une émotion proche de la visite en concession physique.",
    "The client wanted to go beyond a simple photo catalog to offer an emotion close to a physical dealership visit.",
    "El cliente quería ir más allá de un simple catálogo de fotos para ofrecer una emoción cercana a la visita a un concesionario físico.",
    "客户希望超越简单的照片目录，提供接近实体经销商访问的情感体验。",
    "Der Kunde wollte über einen einfachen Fotokatalog hinausgehen und ein Gefühl vermitteln, das einem physischen Autohaus-Besuch nahekommt.",
    "أراد العميل تجاوز كتالوج الصور البسيط لتقديم شعور قريب من زيارة وكالة فعلية.",
    "O cliente queria ir além de um simples catálogo de fotos para oferecer uma emoção próxima à visita a uma concessionária física.",
    "Клиент хотел выйти за рамки простого фотокаталога и создать эмоции, близкие к посещению физического автосалона."
  ),
  solution: t(
    "Intégration d'un configurateur 3D temps réel léger et photoréaliste, compatible mobile, avec prise de RDV intégrée.",
    "Integration of a lightweight and photorealistic real-time 3D configurator, mobile compatible, with integrated appointment booking.",
    "Integración de un configurador 3D en tiempo real, ligero y fotorrealista, compatible con móviles, con reserva de citas integrada.",
    "集成轻量级、逼真的实时3D配置器，支持移动设备，并集成预约功能。",
    "Integration eines leichten und fotorealistischen Echtzeit-3D-Konfigurators, mobilkompatibel, mit integrierter Terminbuchung.",
    "دمج مُكوِّن ثلاثي الأبعاد خفيف وواقعي في الوقت الفعلي، متوافق مع الهاتف المحمول، مع حجز مواعيد مدمج.",
    "Integração de um configurador 3D em tempo real leve e fotorrealista, compatível com celular, com agendamento integrado.",
    "Интеграция лёгкого фотореалистичного 3D-конфигуратора в реальном времени, совместимого с мобильными устройствами, со встроенной записью на приём."
  ),
  result: t(
    "Temps moyen passé sur le site multiplié par 4. +45% de demandes d'essai routier.",
    "Average time spent on site multiplied by 4. +45% test drive requests.",
    "Tiempo promedio en el sitio multiplicado por 4. +45% de solicitudes de prueba de manejo.",
    "网站平均停留时间增加4倍。试驾请求增加45%。",
    "Durchschnittliche Verweildauer auf der Website vervierfacht. +45% Probefahrt-Anfragen.",
    "متوسط الوقت على الموقع تضاعف 4 مرات. +45% طلبات تجربة القيادة.",
    "Tempo médio no site multiplicado por 4. +45% de solicitações de test drive.",
    "Среднее время на сайте увеличилось в 4 раза. +45% запросов на тест-драйв."
  ),
  demoUrl: '/demos/velocity',
  timeline: [
    {
      phase: t('Audit & Benchmark', 'Audit & Benchmark', 'Auditoría & Benchmark', '审计与基准', 'Audit & Benchmark', 'التدقيق والمقارنة', 'Auditoria & Benchmark', 'Аудит и бенчмаркинг'),
      duration: t('1 semaine', '1 week', '1 semana', '1周', '1 Woche', 'أسبوع', '1 semana', '1 неделя'),
      description: t('Analyse performances existantes, concurrents 3D, contraintes devices.', 'Analyze existing performance, 3D competitors and device constraints.', 'Análisis de rendimiento existente, competidores 3D y restricciones de dispositivo.', '分析现有性能、3D 竞争对手与设备限制。', 'Analyse der bestehenden Performance, 3D-Wettbewerber und Gerätebeschränkungen.', 'تحليل الأداء الحالي، المنافسين ثلاثي الأبعاد وقيود الأجهزة.', 'Análise de desempenho existente, concorrentes 3D e restrições de dispositivo.', 'Анализ текущей производительности, 3D-конкурентов и ограничений устройств.')
    },
    {
      phase: t('Concept & Storyboard', 'Concept & Storyboard', 'Concepto & Storyboard', '概念与分镜', 'Konzept & Storyboard', 'المفهوم والستوريبورد', 'Conceito & Storyboard', 'Концепт и сториборд'),
      duration: t('1 semaine', '1 week', '1 semana', '1周', '1 Woche', 'أسبوع', '1 semana', '1 неделя'),
      description: t('Sketches d\'interaction, parcours visiteur et scénarios de configuration.', 'Interaction sketches, visitor journeys and configuration scenarios.', 'Bocetos de interacción, viajes de usuario y escenarios de configuración.', '交互草图，用户旅程与配置场景。', 'Interaktionsskizzen, Besucherjourneys und Konfigurationsszenarien.', 'رسومات تفاعلية، مسارات الزوار وسيناريوهات التكوين.', 'Esboços de interação, jornadas do usuário e cenários de configuração.', 'Эскизы взаимодействия, пути пользователей и сценарии конфигурации.')
    },
    {
      phase: t('3D Prototype', '3D Prototype', 'Prototipo 3D', '3D 原型', '3D-Prototyp', 'نموذج ثلاثي الأبعاد', 'Protótipo 3D', '3D прототип'),
      duration: t('2 semaines', '2 weeks', '2 semanas', '2周', '2 Wochen', 'أسبوعان', '2 semanas', '2 недели'),
      description: t('Maquettes 3D légères, PBR textures, tests de rendu mobile-first.', 'Lightweight 3D mockups, PBR textures, mobile-first render tests.', 'Mockups 3D ligeros, texturas PBR, pruebas de render móvil.', '轻量级3D模型，PBR 材质，移动优先渲染测试。', 'Leichte 3D-Mockups, PBR-Texturen, Mobile-first Render-Tests.', 'نماذج ثلاثية الأبعاد خفيفة، خامات PBR، اختبارات عرض مبدئية للجوال.', 'Mockups 3D leves, texturas PBR, testes de render mobile-first.', 'Лёгкие 3D-макеты, PBR-текстуры, тесты рендера mobile-first.')
    },
    {
      phase: t('Configurateur Temps-Réel', 'Real-time Configurator', 'Configurador en Tiempo Real', '实时配置器', 'Echtzeit-Konfigurator', 'المكوّن في الوقت الحقيقي', 'Configurador em tempo real', 'Конфигуратор в реальном времени'),
      duration: t('3 semaines', '3 weeks', '3 semanas', '3周', '3 Wochen', '3 أسابيع', '3 semanas', '3 недели'),
      description: t('Développement Three.js, LOD, fallback 2D pour devices faibles, persist config.', 'Three.js development, LOD, 2D fallbacks for low-end devices, config persistence.', 'Desarrollo Three.js, niveles LOD, fallback 2D en dispositivos bajos, persistencia de configuración.', 'Three.js 开发，LOD，低端设备的 2D 回退，配置持久化。', 'Three.js-Entwicklung, LOD, 2D-Fallbacks für schwache Geräte, Konfig-Persistenz.', 'تطوير Three.js، LOD، استرجاع 2D للأجهزة الضعيفة، حفظ التهيئات.', 'Desenvolvimento Three.js, LOD, fallbacks 2D para dispositivos fracos, persistência de configuração.', 'Разработка на Three.js, LOD, 2D-fallbacks для слабых устройств, сохранение конфигураций.')
    },
    {
      phase: t('Performance & Mobile Optim', 'Performance & Mobile Optim', 'Performance & Optimización Móvil', '性能与移动优化', 'Performance & Mobile Optim', 'الأداء وتحسين المحمول', 'Performance & Otimização Mobile', 'Производительность и оптимизация мобильной версии'),
      duration: t('2 semaines', '2 weeks', '2 semanas', '2周', '2 Wochen', 'أسبوعان', '2 semanas', '2 недели'),
      description: t('Lazy-loading assets, webp fallbacks, SSR snapshots for first paint.', 'Lazy-loading assets, WebP fallbacks, SSR snapshots for first paint.', 'Lazy-loading de assets, fallback WebP, snapshots SSR para First Paint.', '资源延迟加载，WebP 回退，首屏 SSR 快照。', 'Lazy-loading Assets, WebP-Fallbacks, SSR-Snapshots für First Paint.', 'تحميل كسول للأصول، بدائل WebP، لقطات SSR للرسم الأول.', 'Lazy-loading de assets, fallbacks WebP, snapshots SSR para First Paint.', 'Отложенная загрузка ресурсов, WebP-fallbacks, SSR-снимки для первого отрисовки.')
    },
    {
      phase: t('Intégrations & API', 'Integrations & API', 'Integraciones & API', '集成与 API', 'Integrationen & API', 'التكاملات وواجهات البرمجة', 'Integrações & API', 'Интеграции и API'),
      duration: t('2 semaines', '2 weeks', '2 semanas', '2周', '2 Wochen', 'أسبوعان', '2 semanas', '2 недели'),
      description: t('Booking, stock real-time, analytics et outils marketing.', 'Booking, real-time stock, analytics and marketing tools.', 'Reserva, stock en tiempo real, analítica y herramientas de marketing.', '预定、实时库存、分析与营销工具。', 'Buchung, Echtzeit-Bestand, Analytics und Marketing-Tools.', 'الحجز، المخزون في الوقت الحقيقي، التحليلات وأدوات التسويق.', 'Agendamento, stock em tempo real, analytics e ferramentas de marketing.', 'Бронирование, реальный запас, аналитика и маркетинговые инструменты.')
    },
    {
      phase: t('QA, Accessibilité & Tests', 'QA, Accessibility & Testing', 'QA, Accesibilidad & Pruebas', 'QA，可访问性与测试', 'QA, Accessibility & Tests', 'ضمان الجودة، الوصول والاختبارات', 'QA, Acessibilidade & Testes', 'QA, доступность и тестирование'),
      duration: t('2 semaines', '2 weeks', '2 semanas', '2周', '2 Wochen', 'أسبوعان', '2 semanas', '2 недели'),
      description: t('Tests multi-device, A/B store flows, audit accessibilité WCAG.', 'Multi-device tests, A/B store flows, WCAG accessibility audit.', 'Pruebas multi-dispositivo, flujos A/B, auditoría de accesibilidad WCAG.', '多设备测试，A/B 流程，WCAG 可访问性审计。', 'Multi-Device-Tests, A/B-Flows, WCAG-Accessibility-Audit.', 'اختبارات متعددة الأجهزة، تدفقات A/B، تدقيق الوصول WCAG.', 'Testes multi-dispositivo, fluxos A/B, auditoria de acessibilidade WCAG.', 'Мульти-устройственные тесты, A/B-флоу, аудит доступности WCAG.')
    },
    {
      phase: t('Lancement & Monitoring', 'Launch & Monitoring', 'Lanzamiento & Monitorización', '上线与监控', 'Launch & Monitoring', 'الإطلاق والمراقبة', 'Lançamento & Monitoramento', 'Запуск и мониторинг'),
      duration: t('2 semaines', '2 weeks', '2 semanas', '2周', '2 Wochen', 'أسبوعان', '2 semanas', '2 недели'),
      description: t('Rollout progressif, dashboards performance et roadmap itérations.', 'Progressive rollout, performance dashboards and iteration roadmap.', 'Despliegue progresivo, dashboards de rendimiento y roadmap de iteraciones.', '渐进式发布、性能仪表盘与迭代路线图。', 'Progressive Rollout, Performance-Dashboards und Iterations-Roadmap.', 'نشر تدريجي، لوحات مراقبة الأداء وخارطة طريق للتكرارات.', 'Rollout progressivo, dashboards de performance e roadmap de iterações.', 'Поэтапный релиз, дашборды производительности и дорожная карта итераций.')
    }
  ]
};
