import type { LocalizedText } from '../../types';

const t = (fr: string, en: string, es: string, zh: string, de: string, ar: string, pt: string, ru: string): LocalizedText => ({ fr, en, es, zh, de, ar, pt, ru });

export const skylineRealEstate = {
  id: 'skyline-realestate',
  title: 'Skyline Properties',
  client: 'Skyline Group',
  category: 'web',
  year: '2024',
  shortDescription: t("Portail immobilier haut de gamme.", "High-end real estate portal.", "Portal inmobiliario de alta gama.", "高端房地产门户网站。", "High-End Immobilienportal.", "بوابة عقارية فاخرة.", "Portal imobiliário de alto padrão.", "Портал недвижимости премиум-класса."),
  fullDescription: t("Une plateforme immobilière de nouvelle génération qui redéfinit la recherche de propriétés de luxe. En intégrant des visites virtuelles à 360° en haute résolution et un moteur de recherche géographique intelligent, nous offrons aux acheteurs une immersion totale sans quitter leur domicile.", "A next-generation real estate platform redefining luxury property search. By integrating high-resolution 360° virtual tours and a smart geographic search engine, we offer buyers total immersion without leaving their homes.", "Una plataforma inmobiliaria de nueva generación que redefine la búsqueda de propiedades de lujo. Al integrar visitas virtuales de 360° en alta resolución y un motor de búsqueda geográfico inteligente, ofrecemos a los compradores una inmersión total sin salir de sus hogares.", "重新定义豪华房产搜索的新一代房地产平台。通过集成高分辨率360°虚拟导览和智能地理搜索引擎，我们为买家提供无需出门的沉浸式看房体验。", "Eine Immobilienplattform der nächsten Generation, die die Suche nach Luxusimmobilien neu definiert. Durch die Integration hochauflösender 360-Grad-Rundgänge und einer intelligenten geografischen Suchmaschine bieten wir Käufern ein totales Eintauchen, ohne ihr Zuhause zu verlassen.", "منصة عقارية من الجيل الجديد تعيد تعريف البحث عن العقارات الفاخرة. من خلال دمج جولات افتراضية 360 درجة عالية الدقة ومحرك بحث جغرافي ذكي، نقدم للمشترين تجربة غامرة بالكامل دون مغادرة منازلهم.", "Uma plataforma imobiliária de próxima geração que redefine a busca por imóveis de luxo. Ao integrar tours virtuais 360° em alta resolução e um mecanismo de busca geográfica inteligente, oferecemos ao compradores imersão total sem sair de casa.", "Платформа недвижимости нового поколения, переосмысливающая поиск элитного жилья. Интегрируя виртуальные 360° туры в высоком разрешении и умный географический поиск, мы предлагаем покупателям полное погружение, не выходя из дома."),
  heroImage: 'https://images.unsplash.com/photo-1600596542815-2a4fe04dc297?auto=format&fit=crop&q=80&w=1200',
  thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
  images: [
    'https://images.unsplash.com/photo-1600596542815-2a4fe04dc297?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&q=80'
  ],
  tags: ['React', 'Google Maps', 'Strapi', '360 View'],
  challenge: t(
    "Le marché immobilier de luxe souffre d'une fragmentation : des milliers de biens dispersés sur des interfaces vieillissantes, où la recherche géographique est lente et les visuels souvent décevants. Le défi était de créer une expérience fluide, capable de gérer des milliers de marqueurs sur une carte interactive sans compromettre la performance, tout en offrant une immersion visuelle digne des propriétés présentées.", 
    "The luxury real estate market suffers from fragmentation: thousands of properties scattered across aging interfaces, where geographic search is slow and visuals often disappointing. The challenge was to create a fluid experience, capable of managing thousands of markers on an interactive map without compromising performance, while offering visual immersion worthy of the properties presented.", 
    "El mercado inmobiliario de lujo sufre de fragmentación: miles de propiedades dispersas en interfaces envejecidas, donde la búsqueda geográfica es lenta y los visuales a menudo decepcionantes. El desafío era crear una experiencia fluida, capaz de gestionar miles de marcadores en un mapa interactivo sin comprometer el rendimiento, ofreciendo al mismo tiempo una inmersión visual digna de las propiedades presentadas.", 
    "豪华房地产市场遭受碎片化困扰：成千上万的房产分散在老化的界面上，地理搜索缓慢，视觉效果往往令人失望。挑战在于创造一种流畅的体验，能够在交互式地图上管理数千个标记而不影响性能，同时提供与其展示的房产相称的视觉沉浸感。", 
    "Der Luxusimmobilienmarkt leidet unter Fragmentierung: Tausende von Immobilien verstreut auf veralteten Schnittstellen, wo die geografische Suche langsam und die Visuals oft enttäuschend sind. Die Herausforderung bestand darin, ein flüssiges Erlebnis zu schaffen, das Tausende von Markern auf einer interaktiven Karte verwalten kann, ohne die Leistung zu beeinträchtigen, und gleichzeitig eine visuelle Immersion bietet, die den präsentierten Immobilien würdig ist.", 
    "يعاني سوق العقارات الفاخرة من التجزئة: آلاف العقارات مبعثرة عبر واجهات متهالكة، حيث يكون البحث الجغرافي بطيئًا والمرئيات غالبًا ما تكون مخيبة للآمال. كان التحدي هو إنشاء تجربة سلسة قابلة لإدارة آلاف العلامات على خريطة تفاعلية دون المساومة على الأداء، مع تقديم انغماس بصري يليق بالعقارات المعروضة.", 
    "O mercado imobiliário de luxo sofre com a fragmentação: milhares de propriedades espalhadas por interfaces envelhecidas, onde a busca geográfica é lenta e os visuais muitas vezes decepcionantes. O desafio era criar uma experiência fluida, capaz de gerenciar milhares de marcadores em um mapa interativo sem comprometer o desempenho, oferecendo imersão visual digna das propriedades apresentadas.", 
    "Рынок элитной недвижимости страдает от фрагментации: тысячи объектов разбросаны по устаревшим интерфейсам, где географический поиск медленный, а визуальные эффекты часто разочаровывают. Задача состояла в том, чтобы создать плавный опыт, способный управлять тысячами маркеров на интерактивной карте без ущерба для производительности, предлагая визуальное погружение, достойное представленных объектов."
  ),
  solution: t(
    "Nous avons développé un moteur de clustering géographique propriétaire couplé à l'API Google Maps pour un rendu instantané. L'interface 'Split-View' permet de naviguer simultanément entre la carte et la liste. Les visites virtuelles sont chargées via un streaming adaptatif pour garantir une haute résolution sans latence, même sur mobile.", 
    "We developed a proprietary geographic clustering engine coupled with the Google Maps API for instant rendering. The 'Split-View' interface allows simultaneous navigation between the map and the list. Virtual tours are loaded via adaptive streaming to ensure high resolution without latency, even on mobile.", 
    "Desarrollamos un motor de agrupamiento geográfico propietario junto con la API de Google Maps para una renderización instantánea. La interfaz 'Split-View' permite navegar simultáneamente entre el mapa y la lista. Las visitas virtuales se cargan mediante transmisión adaptativa para garantizar alta resolución sin latencia, incluso en el móvil.", 
    "我们开发了一个专有的地理聚类引擎，结合Google Maps API实现即时渲染。'分屏视图'界面允许在地图和列表之间同时导航。虚拟导览通过自适应流加载，以确保即使在移动设备上也能无延迟地获得高分辨率。", 
    "Wir haben eine proprietäre geografische Clustering-Engine entwickelt, die mit der Google Maps API für sofortiges Rendering gekoppelt ist. Die 'Split-View'-Oberfläche ermöglicht die gleichzeitige Navigation zwischen Karte und Liste. Virtuelle Touren werden über adaptives Streaming geladen, um auch auf Mobilgeräten eine hohe Auflösung ohne Latenz zu gewährleisten.", 
    "قمنا بتطوير محرك تجميع جغرافي خاص مقترنًا بـ Google Maps API للعرض الفوري. تتيح واجهة 'Split-View' التنقل المتزامن بين الخريطة والقائمة. يتم تحميل الجولات الافتراضية عبر تدفق تكيفي لضمان دقة عالية دون تأخير، حتى على الجوال.", 
    "Desenvolvemos um motor de clustering geográfico proprietário acoplado à API do Google Maps para renderização instantânea. A interface 'Split-View' permite navegar simultaneamente entre o mapa e a lista. As visitas virtuais são carregadas via streaming adaptativo para garantir alta resolução sem latência, mesmo no celular.", 
    "Мы разработали собственный движок географической кластеризации в сочетании с Google Maps API для мгновенного рендеринга. Интерфейс 'Split-View' позволяет одновременно перемещаться между картой и списком. Виртуальные туры загружаются через адаптивный стриминг для обеспечения высокого разрешения без задержек, даже на мобильных устройствах."
  ),
  mockups: {
    desktop: 'https://images.unsplash.com/photo-1600596542815-2a4fe04dc297?auto=format&fit=crop&q=80&w=1200',
    mobile: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=600',
    description: t(
        "Une interface cartographique immersive sur desktop qui se transforme en liste intuitive sur mobile. La recherche reste fluide quel que soit l'écran.",
        "An immersive map interface on desktop that transforms into an intuitive list on mobile. Search remains fluid regardless of the screen.",
        "Una interfaz de mapa inmersiva en escritorio que se transforma en una lista intuitiva en el móvil. La búsqueda sigue siendo fluida sin importar la pantalla.",
        "桌面上的沉浸式地图界面在移动设备上转变为直观的列表。无论屏幕大小如何，搜索都保持流畅。",
        "Eine immersive Kartenoberfläche auf dem Desktop, die sich auf dem Mobiltelefon in eine intuitive Liste verwandelt. Die Suche bleibt auf jedem Bildschirm flüssig.",
        "واجهة خارطة غامرة على سطح المكتب تتحول إلى قائمة بديهية على الجوال. يبقى البحث سلسًا بغض النظر عن الشاشة.",
        "Uma interface de mapa imersiva no desktop que se transforma em uma lista intuitiva no celular. A busca permanece fluida independente da tela.",
        "Иммерсивный картографический интерфейс на десктопе, который превращается в интуитивно понятный список на мобильном устройстве. Поиск остается плавным независимо от экрана."
    )
  },
  result: t("+80% de leads qualifiés pour les agents.", "+80% qualified leads for agents.", "+80% de leads calificados para agentes.", "经纪人获得的优质潜在客户增加80%。", "+80% qualifizierte Leads für Makler.", "+80% عملاء محتملون مؤهلون للوكلاء.", "+80% de leads qualificados para corretores.", "+80% качественных лидов для агентов."),
  demoUrl: '/demos/skyline-realestate',
  timeline: [
    { 
      phase: t('Audit & Stratégie', 'Audit & Strategy', 'Auditoría y Estrategia', '审计与策略', 'Audit & Strategie', 'التدقيق والاستراتيجية', 'Auditoria e Estratégia', 'Аудит и стратегия'), 
      duration: t('Semaine 1', 'Week 1', 'Semana 1', '第1周', 'Woche 1', 'الأسبوع 1', 'Semana 1', 'Неделя 1'), 
      description: t(
        'Analyse des points de friction dans la recherche immobilière traditionnelle et définition des KPIs.', 
        'Analysis of friction points in traditional real estate search and KPI definition.', 
        'Análisis de puntos de fricción en la búsqueda inmobiliaria tradicional y definición de KPIs.', 
        '分析传统房地产搜索中的摩擦点并定义KPI。', 
        'Analyse der Reibungspunkte bei der herkömmlichen Immobiliensuche und Definition der KPIs.', 
        'تحليل نقاط الاحتكاك في البحث العقاري التقليدي وتحديد مؤشرات الأداء الرئيسية.', 
        'Análise dos pontos de atrito na busca imobiliária tradicional e definição de KPIs.', 
        'Анализ точек трения в традиционном поиске недвижимости и определение KPI.'
      ) 
    },
    { 
      phase: t('Cartographie UX', 'UX Mapping', 'Cartografía UX', 'UX映射', 'UX-Mapping', 'خرائط تجربة المستخدم', 'Mapeamento UX', 'UX Картирование'), 
      duration: t('Semaine 2-3', 'Week 2-3', 'Semana 2-3', '第2-3周', 'Woche 2-3', 'الأسبوع 2-3', 'Semana 2-3', 'Неделя 2-3'), 
      description: t(
        'Conception du système "Split-View" Carte/Liste et prototypage des filtres avancés.', 
        'Design of the "Split-View" Map/List system and prototyping of advanced filters.', 
        'Diseño del sistema "Split-View" Mapa/Lista y prototipado de filtros avanzados.', 
        '设计"分屏视图"地图/列表系统和高级过滤器原型。', 
        'Design des "Split-View" Karte/Liste-Systems und Prototyping erweiterter Filter.', 
        'تصميم نظام "Split-View" الخريطة/القائمة ونمذجة الفلاتر المتقدمة.', 
        'Design do sistema "Split-View" Mapa/Lista e prototipagem de filtros avançados.', 
        'Проектирование системы "Split-View" Карта/Список и прототипирование расширенных фильтров.'
      ) 
    },
    { 
      phase: t('Architecture Data', 'Data Architecture', 'Arquitectura de Datos', '数据架构', 'Datenarchitektur', 'هندسة البيانات', 'Arquitetura de Dados', 'Архитектура данных'), 
      duration: t('Semaine 4', 'Week 4', 'Semana 4', '第4周', 'Woche 4', 'الأسبوع 4', 'Semana 4', 'Неделя 4'), 
      description: t(
        'Modélisation de la base de données Strapi pour gérer millions de propriétés et médias.', 
        'Modeling the Strapi database to manage millions of properties and media.', 
        'Modelado de la base de datos Strapi para gestionar millones de propiedades y medios.', 
        'Strapi数据库建模，用于管理数百万房产和媒体。', 
        'Modellierung der Strapi-Datenbank zur Verwaltung von Millionen von Immobilien und Medien.', 
        'نمذجة قاعدة بيانات Strapi لإدارة ملايين العقارات والوسائط.', 
        'Modelagem do banco de dados Strapi para gerenciar milhões de propriedades e mídia.', 
        'Моделирование базы данных Strapi для управления миллионами объектов и медиа.'
      ) 
    },
    { 
      phase: t('Dev Maps & List', 'Dev Maps & List', 'Dev Maps & List', '开发地图和列表', 'Entwicklung Karten & Liste', 'تطوير الخرائط والقوائم', 'Dev Mapas e Lista', 'Разработка карт и списков'), 
      duration: t('Semaine 5-7', 'Week 5-7', 'Semana 5-7', '第5-7周', 'Woche 5-7', 'الأسبوع 5-7', 'Semana 5-7', 'Неделя 5-7'), 
      description: t(
        'Intégration complexe de Google Maps API avec clustering côté serveur et synchronisation React.', 
        'Complex integration of Google Maps API with server-side clustering and React synchronization.', 
        'Integración compleja de Google Maps API con clustering del lado del servidor y sincronización React.', 
        'Google Maps API的复杂集成，具有服务器端聚类和React同步。', 
        'Komplexe Integration der Google Maps API mit serverseitigem Clustering und React-Synchronisation.', 
        'تكامل معقد لـ Google Maps API مع التجميع من جانب الخادم ومزامنة React.', 
        'Integração complexa da API do Google Maps com clustering no servidor e sincronização React.', 
        'Сложная интеграция Google Maps API с кластеризацией на стороне сервера и синхронизацией React.'
      ) 
    },
    { 
      phase: t('Optimisation 360°', '360° Optimization', 'Optimización 360°', '360°优化', '360°-Optimierung', 'تحسين 360 درجة', 'Otimização 360°', 'Оптимизация 360°'), 
      duration: t('Semaine 8', 'Week 8', 'Semana 8', '第8周', 'Woche 8', 'الأسبوع 8', 'Semana 8', 'Неделя 8'), 
      description: t(
        'Implémentation du viewer de visite virtuelle avec chargement progressif des textures.', 
        'Implementation of the virtual tour viewer with progressive texture loading.', 
        'Implementación del visor de visita virtual con carga progresiva de texturas.', 
        '实施虚拟导览查看器，具有渐进式纹理加载。', 
        'Implementierung des virtuellen Tour-Viewers mit progressivem Laden von Texturen.', 
        'تنفيذ عارض الجولات الافتراضية مع التحميل التدريجي للأنسجة.', 
        'Implementação do visualizador de visita virtual com carregamento progressivo de texturas.', 
        'Реализация просмотрщика виртуальных туров с прогрессивной загрузкой текстур.'
      ) 
    }
  ]
};

export const vitalityFitness = {
  id: 'vitality-fitness',
  title: 'Vitality App',
  client: 'Vitality Global',
  category: 'web',
  year: '2025',
  shortDescription: t("Coach sportif personnel IA.", "AI Personal Fitness Coach.", "Entrenador personal de IA.", "AI私人健身教练。", "KI Personal Fitnesstrainer.", "مدرب رياضي شخصي ذكاء اصطناعي.", "Treinador pessoal de IA.", "Персональный ИИ-тренер."),
  fullDescription: t("Vitality App repousse les limites du coaching sportif personnel grâce à l'intelligence artificielle. En utilisant des algorithmes de vision par ordinateur sophistiqués, l'application analyse la posture de l'utilisateur en temps réel via la caméra du smartphone, fournissant des corrections instantanées pour maximiser l'efficacité et prévenir les blessures.", "Vitality App pushes the boundaries of personal sports coaching through artificial intelligence. By using sophisticated computer vision algorithms, the app analyzes user posture in real-time via the smartphone camera, providing instant corrections to maximize efficiency and prevent injuries.", "Vitality App supera los límites del entrenamiento deportivo personal gracias a la inteligencia artificial. Al utilizar algoritmos de visión artificial sofisticados, la aplicación analiza la postura del usuario en tiempo real a través de la cámara del smartphone, proporcionando correcciones instantáneas para maximizar la eficacia y prevenir lesiones.", "Vitality App通过人工智能推向了个人运动指导的极限。通过使用复杂的计算机视觉算法，该应用通过智能手机摄像头实时分析用户的姿势，提供即时纠正，以最大限度地提高效率并防止受伤。", "Die Vitality App sprengt die Grenzen des persönlichen Sportcoachings durch künstliche Intelligenz. Mithilfe ausgefeilter Computer-Vision-Algorithmen analysiert die App die Körperhaltung des Nutzers in Echtzeit über die Smartphone-Kamera und bietet sofortige Korrekturen, um die Effizienz zu maximieren und Verletzungen vorzubeugen.", "يتخطى تطبيق Vitality حدود التدريب الرياضي الشخصي بفضل الذكاء الاصطناعي. باستخدام خوارزميات الرؤية الحاسوبية المتطورة، يحلل التطبيق وضعية المستخدم في الوقت الفعلي عبر كاميرا الهاتف الذكي، ويقدم تصحيحات فورية لزيادة الكفاءة ومنع الإصابات.", "O Vitality App amplia os limites do treinamento esportivo pessoal graças à inteligência artificial. Usando algoritmos sofisticados de visão computacional, o aplicativo analisa a postura do usuário em tempo real via câmera do smartphone, fornecendo correções instantâneas para maximizar a eficácia e prevenir lesões.", "Vitality App раздвигает границы персонального спортивного коучинга благодаря искусственному интеллекту. Используя сложные алгоритмы компьютерного зрения, приложение анализирует позу пользователя в режиме реального времени через камеру смартфона, обеспечивая мгновенную коррекцию для максимизации эффективности и предотвращения травм."),
  heroImage: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80',
  thumbnail: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=80',
  images: [
    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=80'
  ],
  tags: ['TensorFlow', 'React Native', 'HealthKit'],
  challenge: t(
    "Le coaching personnel traditionnel est coûteux et difficilement accessible, tandis que les applications de fitness classiques manquent de feedback correctionnel. Les utilisateurs s'exposent à des blessures en reproduisant mal les mouvements seuls chez eux. Le défi était de développer une IA capable d'analyser la biomécanique humaine en temps réel sur un simple smartphone, sans capteurs additionnels ni latence perceptible.",
    "Traditional personal coaching is expensive and hard to access, while standard fitness apps lack correctional feedback. Users risk injury by performing movements incorrectly on their own. The challenge was to develop an AI capable of analyzing human biomechanics in real-time on a simple smartphone, without additional sensors or perceptible latency.",
    "El entrenamiento personal tradicional es costoso y difícil de acceder, mientras que las aplicaciones de fitness estándar carecen de retroalimentación correccional. Los usuarios corren el riesgo de lesionarse al realizar movimientos incorrectamente por su cuenta. El desafío fue desarrollar una IA capaz de analizar la biomecánica humana en tiempo real en un simple teléfono inteligente, sin sensores adicionales ni latencia perceptible.",
    "传统的私人教练费用昂贵且难以获得，而标准的健身应用缺乏纠正反馈。用户独自在家模仿动作时容易受伤。挑战在于开发一种人工智能，能够在一个简单的智能手机上实时分析人体生物力学，无需额外的传感器或明显的延迟。",
    "Das traditionelle Personal Training ist teuer und schwer zugänglich, während Standard-Fitness-Apps kein korrigierendes Feedback bieten. Nutzer riskieren Verletzungen, wenn sie Bewegungen alleine falsch ausführen. Die Herausforderung bestand darin, eine KI zu entwickeln, die die menschliche Biomechanik in Echtzeit auf einem einfachen Smartphone analysieren kann, ohne zusätzliche Sensoren oder wahrnehmbare Latenz.",
    "التدريب الشخصي التقليدي مكلف ويصعب الوصول إليه، بينما تفتقر تطبيقات اللياقة البدنية القياسية إلى التعليقات التصحيحية. يخاطر المستخدمون بالتعرض للإصابة عند تكرار الحركات بشكل خاطئ بمفردهم. كان التحدي هو تطوير ذكاء اصطناعي قادر على تحليل الميكانيكا الحيوية البشرية في الوقت الفعلي على هاتف ذكي بسيط، دون مستشعرات إضافية أو تأخير ملحوظ.",
    "O treinamento pessoal tradicional é caro e difícil de acessar, enquanto os aplicativos de fitness padrão carecem de feedback corretivo. Os usuários correm o risco de lesões ao realizar movimentos incorretamente por conta própria. O desafio foi desenvolver uma IA capaz de analisar a biomecânica humana em tempo real em um simples smartphone, sem sensores adicionais ou latência perceptível.",
    "Традиционный персональный коучинг дорог и труднодоступен, в то время как стандартным фитнес-приложениям не хватает корректирующей обратной связи. Пользователи рискуют получить травму, выполняя движения неправильно самостоятельно. Задача состояла в том, чтобы разработать ИИ, способный анализировать биомеханику человека в реальном времени на простом смартфоне, без дополнительных датчиков или заметной задержки."
  ),
  solution: t(
    "Vitality App utilise 'PoseNet Mobile', une version optimisée de nos algorithmes de vision par ordinateur. L'interface superpose un squelette 3D sur le flux vidéo et compare les angles articulaires avec une base de données de mouvements parfaits. En cas de déviation, l'IA intervient vocalement et visuellement pour corriger la posture instantanément.",
    "Vitality App uses 'PoseNet Mobile', an optimized version of our computer vision algorithms. The interface overlays a 3D skeleton on the video feed and compares joint angles with a database of perfect movements. In case of deviation, the AI intervenes vocally and visually to correct posture instantly.",
    "Vitality App utiliza 'PoseNet Mobile', una versión optimizada de nuestros algoritmos de visión por computadora. La interfaz superpone un esqueleto 3D en la transmisión de video y compara los ángulos articulares con una base de datos de movimientos perfectos. En caso de desviación, la IA interviene vocal y visualmente para corregir la postura al instante.",
    "Vitality App使用'PoseNet Mobile'，这是我们计算机视觉算法的优化版本。界面在视频流上叠加3D骨架，并将关节角度与完美动作数据库进行比较。如有偏差，AI会通过语音和视觉进行干预，立即纠正姿势。",
    "Die Vitality App verwendet 'PoseNet Mobile', eine optimierte Version unserer Computer-Vision-Algorithmen. Die Benutzeroberfläche überlagert einen 3D-Skelett auf dem Video-Feed und vergleicht Gelenkwinkel mit einer Datenbank perfekter Bewegungen. Bei Abweichungen greift die KI stimmlich und visuell ein, um die Haltung sofort zu korrigieren.",
    "يستخدم تطبيق Vitality 'PoseNet Mobile'، وهي نسخة محسنة من خوارزميات الرؤية الحاسوبية لدينا. تقوم الواجهة بتركيب هيكل عظمي ثلاثي الأبعاد على تغذية الفيديو وتقارن زوايا المفاصل مع قاعدة بيانات للحركات المثالية. في حال الانحراف، يتدخل الذكاء الاصطناعي صوتيًا وبصريًا لتصحيح الوضعية فورًا.",
    "O Vitality App usa 'PoseNet Mobile', uma versão otimizada de nossos algoritmos de visão computacional. A interface sobrepõe um esqueleto 3D no feed de vídeo e compara os ângulos das articulações com um banco de dados de movimentos perfeitos. Em caso de desvio, a IA intervém vocal e visualmente para corrigir a postura instantaneamente.",
    "Vitality App использует 'PoseNet Mobile', оптимизированную версию наших алгоритмов компьютерного зрения. Интерфейс накладывает 3D-скелет на видеопоток и сравнивает углы суставов с базой данных идеальных движений. В случае отклонения ИИ вмешивается голосом и визуально, чтобы мгновенно исправить позу."
  ),
  mockups: {
    desktop: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80',
    mobile: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=80',
    description: t(
        "L'application mobile offre une analyse biomécanique en temps réel, tandis que le tableau de bord web permet aux coachs de suivre les progrès de leurs athlètes.",
        "The mobile app offers real-time biomechanical analysis, while the web dashboard allows coaches to track their athletes' progress.",
        "La aplicación móvil ofrece análisis biomecánico en tiempo real, mientras que el panel web permite a los entrenadores seguir el progreso de sus atletas.",
        "移动应用提供实时生物力学分析，而网络仪表板允许教练跟踪运动员的进度。",
        "Die mobile App bietet biomechanische Echtzeitanalyse, während das Web-Dashboard Trainern ermöglicht, den Fortschritt ihrer Athleten zu verfolgen.",
        "يوفر تطبيق الهاتف المحمول تحليلاً للميكانيكا الحيوية في الوقت الفعلي، بينما تتيح لوحة تحكم الويب للمدربين متابعة تقدم الرياضيين.",
        "O aplicativo móvel oferece análise biomecânica em tempo real, enquanto o painel web permite que treinadores acompanhem o progresso de seus atletas.",
        "Мобильное приложение предлагает биомеханический анализ в реальном времени, а веб-панель позволяет тренерам отслеживать прогресс своих спортсменов."
    )
  },
  result: t("Réduction de 30% des blessures chez les utilisateurs.", "30% reduction in user injuries.", "Reducción del 30% en lesiones de usuarios.", "用户受伤率降低30%。", "30% Reduzierung von Nutzerverletzungen.", "تقليل الإصابات بنسبة 30% لدى المستخدمين.", "Redução de 30% nas lesões dos usuários.", "Снижение травматизма среди пользователей на 30%."),
  demoUrl: '/demos/vitality-fitness',
  timeline: [
    { 
      phase: t('Recherche IA', 'AI Research', 'Investigación IA', 'AI研究', 'KI-Forschung', 'أبحاث الذكاء الاصطناعي', 'Pesquisa em IA', 'ИИ Исследования'), 
      duration: t('Semaine 1-2', 'Week 1-2', 'Semana 1-2', '第1-2周', 'Woche 1-2', 'الأسبوع 1-2', 'Semana 1-2', 'Неделя 1-2'), 
      description: t(
        'Sélection et optimisation des modèles PoseNet sur TensorFlow Lite pour mobile.', 
        'Selection and optimization of PoseNet models on TensorFlow Lite for mobile.', 
        'Selección y optimización de modelos PoseNet en TensorFlow Lite para móvil.', 
        '在移动端TensorFlow Lite上选择和优化PoseNet模型。', 
        'Auswahl und Optimierung von PoseNet-Modellen auf TensorFlow Lite für Mobilgeräte.', 
        'اختيار وتحسين نماذج PoseNet على TensorFlow Lite للجوال.', 
        'Seleção e otimização de modelos PoseNet no TensorFlow Lite para celular.', 
        'Выбор и оптимизация моделей PoseNet на TensorFlow Lite для мобильных устройств.'
      ) 
    },
    { 
      phase: t('Prototypage App', 'App Prototyping', 'Prototipado App', 'App原型设计', 'App-Prototyping', 'نمذجة التطبيق', 'Prototipagem de App', 'Прототипирование приложения'), 
      duration: t('Semaine 3-4', 'Week 3-4', 'Semana 3-4', '第3-4周', 'Woche 3-4', 'الأسبوع 3-4', 'Semana 3-4', 'Неделя 3-4'), 
      description: t(
        'Design UI/UX axé sur la clarté visuelle pendant l\'effort physique.', 
        'UI/UX design focused on visual clarity during physical effort.', 
        'Diseño UI/UX centrado en la claridad visual durante el esfuerzo físico.', 
        'UI/UX设计专注于身体运动时的视觉清晰度。', 
        'UI/UX-Design mit Fokus auf visuelle Klarheit während der körperlichen Anstrengung.', 
        'تصميم واجهة وتجربة المستخدم يركز على الوضوح البصري أثناء الجهد البدني.', 
        'Design UI/UX focado na clareza visual durante o esforço físico.', 
        'UI/UX дизайн, ориентированный на визуальную четкость во время физических нагрузок.'
      ) 
    },
    { 
      phase: t('Entraînement', 'Model Training', 'Entrenamiento', '模型训练', 'Modelltraining', 'تدريب النموذج', 'Treinamento de Modelo', 'Обучение модели'), 
      duration: t('Semaine 5-6', 'Week 5-6', 'Semana 5-6', '第5-6周', 'Woche 5-6', 'الأسبوع 5-6', 'Semana 5-6', 'Неделя 5-6'), 
      description: t(
        'Machine Learning sur dataset vidéo propriétaire pour la détection fine des erreurs.', 
        'Machine Learning on proprietary video dataset for fine error detection.', 
        'Aprendizaje automático en conjunto de datos de video propietario para detección fina de errores.', 
        '在专有视频数据集上进行机器学习，用于精细错误检测。', 
        'Maschinelles Lernen auf proprietärem Videodatensatz zur feinen Fehlererkennung.', 
        'التعلم الآلي على مجموعة بيانات فيديو خاصة للكشف الدقيق عن الأخطاء.', 
        'Machine Learning em conjunto de dados de vídeo proprietário para detecção fina de erros.', 
        'Машинное обучение на собственном видео-наборе данных для тонкого обнаружения ошибок.'
      ) 
    },
    { 
      phase: t('Intégration', 'Integration', 'Integración', '集成', 'Integration', 'تكامل', 'Integração', 'Интеграция'), 
      duration: t('Semaine 7-8', 'Week 7-8', 'Semana 7-8', '第7-8周', 'Woche 7-8', 'الأسبوع 7-8', 'Semana 7-8', 'Неделя 7-8'), 
      description: t(
        'fusion du moteur IA temps réel avec l\'interface React Native.', 
        'Merging the real-time AI engine with the React Native interface.', 
        'Fusión del motor de IA en tiempo real con la interfaz React Native.', 
        '将实时AI引擎与React Native界页融合。', 
        'Verschmelzung der Echtzeit-KI-Engine mit der React Native-Schnittstelle.', 
        'دمج محرك الذكاء الاصطناعي في الوقت الفعلي مع واجهة React Native.', 
        'Fusão do motor de IA em tempo real com a interface React Native.', 
        'Слияние движка ИИ реального времени с интерфейсом React Native.'
      ) 
    },
    { 
      phase: t('Tests Terrain', 'Field Tests', 'Pruebas de Campo', '现场测试', 'Feldtests', 'اختبارات ميدانية', 'Testes de Campo', 'Полевые испытания'), 
      duration: t('Semaine 9', 'Week 9', 'Semana 9', '第9周', 'Woche 9', 'الأسبوع 9', 'Semana 9', 'Неделя 9'), 
      description: t(
        'Calibration finale avec des coachs sportifs certifiés.', 
        'Final calibration with certified sports coaches.', 
        'Calibración final con entrenadores deportivos certificados.', 
        '与认证体育教练进行的最终校准。', 
        'Finale Kalibrierung mit zertifizierten Sporttrainern.', 
        'المعايرة النهائية مع مدربين رياضيين معتمدين.', 
        'Calibração final com treinadores esportivos certificados.', 
        'Финальная калибровка с сертифицированными спортивными тренерами.'
      ) 
    }
  ]
};
