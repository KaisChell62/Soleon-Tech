import type { LocalizedText, Project } from '../../types';

const t = (fr: string, en: string, es: string, zh: string, de: string, ar: string, pt: string, ru: string): LocalizedText => ({ fr, en, es, zh, de, ar, pt, ru });

export const cyberGuard = {
  id: 'cyber-guard-system',
  title: 'CyberGuard',
  client: 'Global Security Corp',
  category: 'web',
  year: '2025',
  shortDescription: t(
    "Dashboard SOC pour la surveillance des cybermenaces.",
    "SOC Dashboard for cyber threat monitoring.",
    "Panel SOC para monitoreo de ciberamenazas.",
    "网络威胁监控的SOC仪表板。",
    "SOC-Dashboard zur Überwachung von Cyberbedrohungen.",
    "لوحة تحكم SOC لمراقبة التهديدات السيبرانية.",
    "Painel SOC para monitoramento de ameaças cibernéticas.",
    "SOC Dashboard для мониторинга киберугроз."
  ),
  fullDescription: t(
    "Un tableau de bord centralisé pour les équipes de sécurité, agrégeant des millions de logs en temps réel pour détecter les anomalies avec l'aide de l'IA.",
    "A centralized dashboard for security teams, aggregating millions of logs in real-time to detect anomalies with AI assistance.",
    "Un panel centralizado para equipos de seguridad, agregando millones de registros en tiempo real para detectar anomalías con ayuda de IA.",
    "安全团队的集中式仪表板，实时聚合数百万日志，借助AI检测异常。",
    "Ein zentrales Dashboard für Sicherheitsteams, das Millionen von Protokollen in Echtzeit aggregiert, um Anomalien mit KI-Hilfe zu erkennen.",
    "لوحة تحكم مركزية لفرق الأمان، تجمع ملايين السجلات في الوقت الفعلي لاكتشاف الحالات الشاذة بمساعدة الذكاء الاصطناعي.",
    "Um painel centralizado para equipes de segurança, agregando milhões de logs em tempo real para detectar anomalias com auxílio de IA.",
    "Централизованная панель для команд безопасности, агрегирующая миллионы логов в реальном времени для обнаружения аномалий с помощью ИИ."
  ),
  heroImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80',
  thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
  images: ['https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80'],
  tags: ['Vue.js', 'D3.js', 'ElasticSearch', 'Socket.io'],
  demoUrl: '/demos/cyberguard',
  challenge: t("Gestion de gros volumes de données en temps réel.", "Handling large volumes of real-time data.", "Manejo de grandes volúmenes de datos en tiempo real.", "处理大量实时数据。", "Umgang mit großen Mengen an Echtzeitdaten.", "التعامل مع كميات كبيرة من البيانات في الوقت الفعلي.", "Manuseio de grandes volumes de dados em tempo real.", "Обработка больших объемов данных в реальном времени."),
  solution: t("Architecture WebSocket optimisée et visualisation D3.js.", "Optimized WebSocket architecture and D3.js visualization.", "Arquitectura WebSocket optimizada y visualización D3.js.", "优化的WebSocket架构和D3.js可视化。", "Optimierte WebSocket-Architektur und D3.js-Visualisierung.", "هندسة WebSocket محسنة وتصور D3.js.", "Arquitetura WebSocket otimizada e visualização D3.js.", "Оптимизированная архитектура WebSocket и визуализация D3.js."),
  result: t("Temps de réponse aux incidents réduit de 70%.", "Incident response time reduced by 70%.", "Tiempo de respuesta a incidentes reducido en un 70%.", "事件响应时间减少70%。", "Reaktionszeit bei Vorfällen um 70% reduziert.", "تقليل وقت الاستجابة للحوادث بنسبة 70%.", "Tempo de resposta a incidentes reduzido em 70%.", "Время реагирования на инциденты сокращено на 70%."),
  problem: t(
    "L'équipe SOC traitait les alertes manuellement via des outils fragmentés. Le volume croissant de logs rendait impossible la détection rapide des menaces réelles parmi les faux positifs.",
    "The SOC team handled alerts manually through fragmented tools. The growing volume of logs made it impossible to quickly detect real threats among false positives.",
    "El equipo SOC manejaba alertas manualmente a través de herramientas fragmentadas.",
    "SOC团队通过碎片化的工具手动处理警报。日益增长的日志量使得在误报中快速检测真实威胁变得不可能。",
    "Das SOC-Team bearbeitete Warnungen manuell über fragmentierte Tools.",
    "كان فريق SOC يتعامل مع التنبيهات يدويًا عبر أدوات مجزأة.",
    "A equipe SOC lidava com alertas manualmente por meio de ferramentas fragmentadas.",
    "Команда SOC обрабатывала оповещения вручную через разрозненные инструменты."
  ),
  goal: t(
    "Centraliser la surveillance des cybermenaces dans un dashboard unique avec détection IA en temps réel et temps de réponse inférieur à 30 secondes.",
    "Centralize cyber threat monitoring in a single dashboard with real-time AI detection and response time under 30 seconds.",
    "Centralizar el monitoreo de ciberamenazas en un solo panel con detección IA en tiempo real.",
    "将网络威胁监控集中在一个具有实时AI检测和30秒以内响应时间的仪表板中。",
    "Zentralisierung der Cyberbedrohungsüberwachung in einem einzigen Dashboard mit KI-Echtzeiterkennung.",
    "تمركز مراقبة التهديدات السيبرانية في لوحة تحكم واحدة مع كشف بالذكاء الاصطناعي في الوقت الفعلي.",
    "Centralizar o monitoramento de ameaças cibernéticas em um único dashboard com detecção IA em tempo real.",
    "Централизовать мониторинг киберугроз в едином дашборде с ИИ-детекцией в реальном времени."
  ),
  userJourney: {
    title: t("Flux de Détection", "Detection Workflow", "Flujo de Detección", "检测工作流程", "Erkennungsworkflow", "سير عمل الكشف", "Fluxo de Detecção", "Рабочий процесс обнаружения"),
    steps: [
      {
        title: t("Collecte", "Collection", "Recopilación", "收集", "Sammlung", "جمع", "Coleta", "Сбор"),
        description: t("Agrégation automatique de millions de logs provenant de toute l'infrastructure.", "Automatic aggregation of millions of logs from the entire infrastructure.", "Agregación automática de millones de registros.", "自动聚合来自整个基础设施的数百万日志。", "Automatische Aggregation von Millionen von Protokollen.", "تجميع تلقائي لملايين السجلات.", "Agregação automática de milhões de logs.", "Автоматическая агрегация миллионов логов."),
        icon: 'Database'
      },
      {
        title: t("Analyse IA", "AI Analysis", "Análisis IA", "AI分析", "KI-Analyse", "تحليل الذكاء الاصطناعي", "Análise IA", "ИИ-анализ"),
        description: t("L'IA identifie les anomalies et classe les menaces par niveau de criticité.", "AI identifies anomalies and classifies threats by criticality level.", "La IA identifica anomalías y clasifica amenazas.", "AI识别异常并按严重性级别对威胁进行分类。", "KI erkennt Anomalien und klassifiziert Bedrohungen.", "الذكاء الاصطناعي يحدد الحالات الشاذة ويصنف التهديدات.", "A IA identifica anomalias e classifica ameaças.", "ИИ выявляет аномалии и классифицирует угрозы."),
        icon: 'Brain'
      },
      {
        title: t("Réponse", "Response", "Respuesta", "响应", "Antwort", "استجابة", "Resposta", "Ответ"),
        description: t("Actions automatisées et alertes instantanées pour l'équipe de sécurité.", "Automated actions and instant alerts for the security team.", "Acciones automatizadas y alertas instantáneas.", "自动化操作和对安全团队的即时警报。", "Automatisierte Aktionen und sofortige Warnungen.", "إجراءات آلية وتنبيهات فورية لفريق الأمان.", "Ações automatizadas e alertas instantâneos.", "Автоматизированные действия и мгновенные оповещения."),
        icon: 'Shield'
      }
    ]
  },
  mockups: {
    // desktop: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200',
    // mobile: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=600',
    description: t("Dashboard SOC avec visualisation des menaces en temps réel, carte mondiale des attaques et timeline d'incidents.", "SOC Dashboard with real-time threat visualization, global attack map, and incident timeline.", "Panel SOC con visualización de amenazas en tiempo real.", "具有实时威胁可视化、全球攻击地图和事件时间线的SOC仪表板。", "SOC-Dashboard mit Echtzeit-Bedrohungsvisualisierung.", "لوحة تحكم SOC مع تصور التهديدات في الوقت الفعلي.", "Dashboard SOC com visualização de ameaças em tempo real.", "SOC-дашборд с визуализацией угроз в реальном времени.")
  },
  timeline: [
    {
      phase: t('Architecture Data', 'Data Architecture', 'Arquitectura de Datos', '数据架构', 'Datenarchitektur', 'هندسة البيانات', 'Arquitetura de Dados', 'Архитектура данных'),
      duration: t('2 semaines', '2 weeks', '2 semanas', '2周', '2 Wochen', '2 أسابيع', '2 semanas', '2 недели'),
      description: t("Conception du pipeline d'ingestion de logs avec ElasticSearch et Kafka pour traiter 10M+ événements/jour.", "Designing the log ingestion pipeline with ElasticSearch and Kafka to process 10M+ events/day.", "Diseño del pipeline de ingesta de logs.", "使用ElasticSearch和Kafka设计日志摄取管道。", "Entwurf der Log-Ingestion-Pipeline mit ElasticSearch und Kafka.", "تصميم خط أنابيب استيعاب السجلات.", "Design do pipeline de ingestão de logs.", "Проектирование конвейера приёма логов.")
    },
    {
      phase: t('Modèle IA', 'AI Model', 'Modelo IA', 'AI模型', 'KI-Modell', 'نموذج الذكاء الاصطناعي', 'Modelo IA', 'Модель ИИ'),
      duration: t('3 semaines', '3 weeks', '3 semanas', '3周', '3 Wochen', '3 أسابيع', '3 semanas', '3 недели'),
      description: t("Entraînement du modèle de détection d'anomalies sur des données historiques d'incidents réels.", "Training the anomaly detection model on historical real incident data.", "Entrenamiento del modelo de detección de anomalías.", "在历史真实事件数据上训练异常检测模型。", "Training des Anomalie-Erkennungsmodells.", "تدريب نموذج كشف الشذوذ.", "Treinamento do modelo de detecção de anomalias.", "Обучение модели обнаружения аномалий.")
    },
    {
      phase: t('Interface & Déploiement', 'Interface & Deployment', 'Interfaz y Despliegue', '界面与部署', 'Interface & Bereitstellung', 'الواجهة والنشر', 'Interface e Implantação', 'Интерфейс и развертывание'),
      duration: t('3 semaines', '3 weeks', '3 semanas', '3周', '3 Wochen', '3 أسابيع', '3 semanas', '3 недели'),
      description: t("Dashboard Vue.js avec visualisations D3.js temps réel, WebSocket pour les alertes push et déploiement sécurisé.", "Vue.js dashboard with real-time D3.js visualizations, WebSocket for push alerts, and secure deployment.", "Dashboard Vue.js con visualizaciones D3.js en tiempo real.", "使用D3.js实时可视化的Vue.js仪表板。", "Vue.js-Dashboard mit D3.js-Echtzeit-Visualisierungen.", "لوحة تحكم Vue.js مع تصورات D3.js في الوقت الفعلي.", "Dashboard Vue.js com visualizações D3.js em tempo real.", "Vue.js-дашборд с визуализациями D3.js в реальном времени.")
    }
  ],
  tools: ['Vue.js', 'D3.js', 'ElasticSearch', 'Kafka', 'Socket.io', 'Python']
} as Project;

export const hyperStream = {
  id: 'hyper-stream-media',
  title: 'HyperStream',
  client: 'StreamLine Media',
  category: 'mobile',
  year: '2024',
  shortDescription: t(
    "App de streaming vidéo nouvelle génération.",
    "Next-gen video streaming app.",
    "App de streaming de video de próxima generación.",
    "下一代视频流媒体应用。",
    "Video-Streaming-App der nächsten Generation.",
    "تطبيق بث فيديو من الجيل التالي.",
    "App de streaming de vídeo de próxima geração.",
    "Приложение потокового видео нового поколения."
  ),
  fullDescription: t(
    "Une expérience de streaming ultra-rapide avec une latence quasi nulle et des fonctionnalités sociales intégrées, permettant le 'Watch Party' sur mobile.",
    "An ultra-fast streaming experience with near-zero latency and integrated social features, enabling 'Watch Party' on mobile.",
    "Una experiencia de streaming ultrarrápida con latencia casi nula y funciones sociales integradas, permitiendo 'Watch Party' en móvil.",
    "超快流媒体体验，几乎零延迟，并集成了社交功能，支持移动端'观看派对'。",
    "Ein ultraschnelles Streaming-Erlebnis mit nahezu null Latenz und integrierten sozialen Funktionen, die 'Watch Party' auf dem Handy ermöglichen.",
    "تجربة بث فائقة السرعة مع زمن انتقال شبه معدوم وميزات اجتماعية متكاملة، مما يتيح 'حفلة المشاهدة' على الهاتف المحمول.",
    "Uma experiência de streaming ultra-rápida com latência quase zero e recursos sociais integrados, permitindo 'Watch Party' no celular.",
    "Сверхбыстрый стриминг с почти нулевой задержкой и встроенными социальными функциями."
  ),
  heroImage: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80',
  thumbnail: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=800',
  images: ['https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80'],
  tags: ['Flutter', 'Go', 'WebRTC', 'AWS IVS'],
  demoUrl: '/demos/hyperstream',
  challenge: t("Synchronisation vidéo parfaite entre utilisateurs.", "Perfect video synchronization between users.", "Sincronización de video perfecta entre usuarios.", "用户之间完美的视频同步。", "Perfekte Videosynchronisation zwischen Benutzern.", "تزامن فيديو مثالي بين المستخدمين.", "Sincronização de vídeo perfeita entre usuários.", "Идеальная синхронизация видео между пользователями."),
  solution: t("Protocole WebRTC customisé pour faible latence.", "Custom WebRTC protocol for low latency.", "Protocolo WebRTC personalizado para baja latencia.", "用于低延迟的自定义WebRTC协议。", "Benutzerdefiniertes WebRTC-Protokoll für geringe Latenz.", "بروتوكول WebRTC مخصص لزمن انتقال منخفض.", "Protocolo WebRTC personalizado para baixa latência.", "Кастомный протокол WebRTC для низкой задержки."),
  result: t("Retention utilisateur x3.", "User retention x3.", "Retención de usuarios x3.", "用户留存率翻3倍。", "Benutzerbindung x3.", "احتباس المستخدم x3.", "Retenção de usuários x3.", "Удержание пользователей x3."),
  problem: t(
    "Les plateformes de streaming existantes offraient une expérience isolée. Les utilisateurs quittaient l'app pour communiquer sur leurs contenus préférés, réduisant l'engagement.",
    "Existing streaming platforms offered an isolated experience. Users left the app to discuss their favorite content, reducing engagement.",
    "Las plataformas de streaming existentes ofrecían una experiencia aislada.",
    "现有的流媒体平台提供孤立的体验。用户离开应用程序讨论他们最喜欢的内容，减少了参与度。",
    "Bestehende Streaming-Plattformen boten ein isoliertes Erlebnis.",
    "قدمت منصات البث الحالية تجربة معزولة.",
    "As plataformas de streaming existentes ofereciam uma experiência isolada.",
    "Существующие стриминговые платформы предлагали изолированный опыт."
  ),
  goal: t(
    "Créer une expérience de streaming sociale avec Watch Party synchronisée, latence quasi-nulle et un engagement communautaire natif.",
    "Create a social streaming experience with synchronized Watch Party, near-zero latency, and native community engagement.",
    "Crear una experiencia de streaming social con Watch Party sincronizada.",
    "创建具有同步观看派对、近零延迟和原生社区参与的社交流媒体体验。",
    "Ein soziales Streaming-Erlebnis mit synchronisierter Watch Party schaffen.",
    "إنشاء تجربة بث اجتماعية مع حفلة مشاهدة متزامنة.",
    "Criar uma experiência de streaming social com Watch Party sincronizada.",
    "Создать социальный стриминг с синхронизированной Watch Party."
  ),
  userJourney: {
    title: t("Expérience Watch Party", "Watch Party Experience", "Experiencia Watch Party", "观看派对体验", "Watch Party Erlebnis", "تجربة حفلة المشاهدة", "Experiência Watch Party", "Опыт Watch Party"),
    steps: [
      {
        title: t("Création de la Room", "Room Creation", "Creación de la Sala", "创建房间", "Raum erstellen", "إنشاء الغرفة", "Criação da Sala", "Создание комнаты"),
        description: t("L'hôte crée une session et partage un lien unique à ses amis.", "The host creates a session and shares a unique link with friends.", "El anfitrión crea una sesión y comparte un enlace único.", "主持人创建会话并与朋友分享唯一链接。", "Der Gastgeber erstellt eine Sitzung und teilt einen einzigartigen Link.", "يقوم المضيف بإنشاء جلسة ومشاركة رابط فريد.", "O anfitrião cria uma sessão e compartilha um link único.", "Хозяин создает сессию и делится уникальной ссылкой."),
        icon: 'Users'
      },
      {
        title: t("Streaming Synchronisé", "Synchronized Streaming", "Streaming Sincronizado", "同步流媒体", "Synchrones Streaming", "بث متزامن", "Streaming Sincronizado", "Синхронный стриминг"),
        description: t("Vidéo, audio et réactions synchronisées en temps réel entre tous les participants.", "Video, audio, and reactions synchronized in real-time across all participants.", "Video, audio y reacciones sincronizadas en tiempo real.", "视频、音频和反应在所有参与者之间实时同步。", "Video, Audio und Reaktionen in Echtzeit synchronisiert.", "فيديو وصوت وردود فعل متزامنة في الوقت الفعلي.", "Vídeo, áudio e reações sincronizados em tempo real.", "Видео, аудио и реакции синхронизированы в реальном времени."),
        icon: 'Play'
      },
      {
        title: t("Chat & Réactions", "Chat & Reactions", "Chat y Reacciones", "聊天与反应", "Chat & Reaktionen", "الدردشة وردود الفعل", "Chat e Reações", "Чат и реакции"),
        description: t("Réactions emoji en direct superposées sur la vidéo avec chat vocal intégré.", "Live emoji reactions overlaid on video with integrated voice chat.", "Reacciones emoji en directo superpuestas sobre el video.", "实时表情反应叠加在视频上，集成语音聊天。", "Live-Emoji-Reaktionen über dem Video mit integriertem Sprachchat.", "ردود فعل الرموز التعبيرية المباشرة فوق الفيديو مع الدردشة الصوتية.", "Reações de emoji ao vivo sobrepostas no vídeo com chat de voz integrado.", "Эмодзи-реакции поверх видео со встроенным голосовым чатом."),
        icon: 'MessageCircle'
      }
    ]
  },
  mockups: {
    desktop: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=1200',
    mobile: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=600',
    description: t("Interface mobile Watch Party avec contrôles vidéo, chat en direct et réactions communautaires.", "Mobile Watch Party interface with video controls, live chat, and community reactions.", "Interfaz móvil Watch Party con controles de video.", "带有视频控件、直播聊天和社区反应的移动观看派对界面。", "Mobile Watch Party-Oberfläche mit Videosteuerung.", "واجهة حفلة المشاهدة على الهاتف المحمول مع عناصر التحكم.", "Interface móvel Watch Party com controles de vídeo.", "Мобильный интерфейс Watch Party с управлением видео.")
  },
  timeline: [
    {
      phase: t('Protocole WebRTC', 'WebRTC Protocol', 'Protocolo WebRTC', 'WebRTC协议', 'WebRTC-Protokoll', 'بروتوكول WebRTC', 'Protocolo WebRTC', 'Протокол WebRTC'),
      duration: t('3 semaines', '3 weeks', '3 semanas', '3周', '3 Wochen', '3 أسابيع', '3 semanas', '3 недели'),
      description: t("Développement d'un protocole de synchronisation vidéo personnalisé basé sur WebRTC avec compensation de latence adaptative.", "Development of a custom video synchronization protocol based on WebRTC with adaptive latency compensation.", "Desarrollo de un protocolo de sincronización de video personalizado.", "开发基于WebRTC的自定义视频同步协议。", "Entwicklung eines benutzerdefinierten Videosynchronisationsprotokolls.", "تطوير بروتوكول مزامنة فيديو مخصص.", "Desenvolvimento de um protocolo de sincronização de vídeo personalizado.", "Разработка кастомного протокола синхронизации видео.")
    },
    {
      phase: t('Interface Mobile', 'Mobile Interface', 'Interfaz Móvil', '移动界面', 'Mobile Oberfläche', 'واجهة الهاتف المحمول', 'Interface Móvel', 'Мобильный интерфейс'),
      duration: t('4 semaines', '4 weeks', '4 semanas', '4周', '4 Wochen', '4 أسابيع', '4 semanas', '4 недели'),
      description: t("Développement Flutter de l'interface avec animations fluides 60fps, gestion des gestes et mode picture-in-picture.", "Flutter interface development with smooth 60fps animations, gesture management, and picture-in-picture mode.", "Desarrollo de la interfaz Flutter con animaciones fluidas.", "使用流畅的60fps动画进行Flutter界面开发。", "Flutter-Interface-Entwicklung mit flüssigen 60fps-Animationen.", "تطوير واجهة Flutter مع رسوم متحركة سلسة.", "Desenvolvimento da interface Flutter com animações fluidas.", "Разработка интерфейса на Flutter с плавной анимацией 60fps.")
    },
    {
      phase: t('Backend & Scaling', 'Backend & Scaling', 'Backend y Escalado', '后端与扩展', 'Backend & Skalierung', 'الخلفية والتوسع', 'Backend e Escalabilidade', 'Бэкенд и масштабирование'),
      duration: t('3 semaines', '3 weeks', '3 semanas', '3周', '3 Wochen', '3 أسابيع', '3 semanas', '3 недели'),
      description: t("Infrastructure Go pour supporter 100k connexions simultanées avec AWS IVS et auto-scaling.", "Go infrastructure to support 100k simultaneous connections with AWS IVS and auto-scaling.", "Infraestructura Go para soportar 100k conexiones simultáneas.", "Go基础设施支持10万同时连接。", "Go-Infrastruktur für 100k gleichzeitige Verbindungen.", "بنية Go التحتية لدعم 100 ألف اتصال متزامن.", "Infraestrutura Go para suportar 100k conexões simultâneas.", "Инфраструктура на Go для поддержки 100k одновременных соединений.")
    }
  ],
  tools: ['Flutter', 'Go', 'WebRTC', 'AWS IVS', 'Redis']
} as Project;

export const urbanPulse = {
  id: 'urban-pulse-city',
  title: 'Urban Pulse',
  client: 'Smart City Initiative',
  category: 'design',
  year: '2024',
  shortDescription: t(
    "Design système pour l'infrastructure intelligente d'une métropole.",
    "Design system for smart city infrastructure.",
    "Sistema de diseño para infraestructura de ciudad inteligente.",
    "智慧城市基础设施的设计系统。",
    "Designsystem für intelligente Stadtinfrastruktur.",
    "نظام تصميم للبنية التحتية للمدينة الذكية.",
    "Sistema de design para infraestrutura de cidade inteligente.",
    "Дизайн-система для инфраструктуры умного города."
  ),
  fullDescription: t(
    "Création d'un langage visuel unifié pour tous les points de contact numériques de la ville, des bornes interactives aux applications citoyennes. Une approche centrée sur l'humain pour simplifier la vie urbaine.",
    "Creation of a unified visual language for all city digital touchpoints, from interactive kiosks to citizen apps. A human-centered approach to simplify urban life.",
    "Creación de un lenguaje visual unificado para todos los puntos de contacto digitales de la ciudad, desde quioscos interactivos hasta aplicaciones ciudadanas.",
    "为城市的所有数字接触点（从互动亭到市民应用）创建统一的视觉语言。",
    "Erstellung einer einheitlichen visuellen Sprache für alle digitalen Berührungspunkte der Stadt, von interaktiven Kiosken bis zu Bürger-Apps.",
    "إنشاء لغة بصرية موحدة لجميع نقاط الاتصال الرقمية بالمدينة، من الأكشاك التفاعلية إلى تطبيقات المواطنين.",
    "Criação de uma linguagem visual unificada para todos os pontos de contato digitais da cidade, de quiosques interativos a aplicativos cidadãos.",
    "Создание единого визуального языка для всех цифровых точек контакта города."
  ),
  heroImage: '/mockups/urban-pulse-hero.svg',
  thumbnail: '/mockups/urban-pulse-hero.svg',
  images: ['/mockups/urban-pulse-hero.svg'],
  tags: ['Figma', 'UI Kit', 'Accessibility', 'IoT'],
  challenge: t("Cohérence sur des centaines de supports différents.", "Consistency across hundreds of different mediums.", "Coherencia en cientos de soportes diferentes.", "在数百种不同媒介上保持一致性。", "Konsistenz über Hunderte von verschiedenen Medien.", "التسق عبر مئات الوسائط المختلفة.", "Consistência em centenas de meios diferentes.", "Согласованность на сотнях различных носителей."),
  solution: t("Design System atomique et flexible.", "Atomic and flexible Design System.", "Design System atómico y flexible.", "原子化且灵活的设计系统。", "Atomares und flexibles Designsystem.", "نظام تصميم ذري ومرن.", "Design System atômico e flexível.", "Атомарная и гибкая дизайн-система."),
  result: t("Adoption par 12 services municipaux.", "Adoption by 12 municipal departments.", "Adopción por 12 departamentos municipales.", "被12个市政部门采用。", "Einführung durch 12 städtische Abteilungen.", "الاعتماد من قبل 12 دائرة بلدية.", "Adoção por 12 departamentos municipais.", "Принятие 12 муниципальными департаментами."),
  timeline: [
    {
      phase: t('Audit & Recherche', 'Audit & Research', 'Auditoría e Investigación', '审计与研究', 'Audit & Forschung', 'التدقيق والبحث', 'Auditoria e Pesquisa', 'Аудит и исследование'),
      duration: t('3 semaines', '3 weeks', '3 semanas', '3周', '3 Wochen', '3 أسابيع', '3 semanas', '3 недели'),
      description: t("Inventaire des 15 identités existantes, tests utilisateurs sur 200 citoyens, analyse d'accessibilité WCAG sur chaque support numérique.", "Inventory of 15 existing identities, user tests with 200 citizens, WCAG accessibility audit on every digital touchpoint.", "Inventario de 15 identidades existentes, pruebas con 200 ciudadanos.", "盘点15个现有标识，对200位市民进行用户测试。", "Bestandsaufnahme der 15 bestehenden Identitäten, Nutzertests mit 200 Bürgern.", "جرد 15 هوية حالية واختبارات مع 200 مواطن.", "Inventário de 15 identidades existentes, testes com 200 cidadãos.", "Инвентаризация 15 существующих идентификаторов, тесты с 200 гражданами.")
    },
    {
      phase: t('Design System', 'Design System', 'Design System', '设计系统', 'Designsystem', 'نظام التصميم', 'Design System', 'Дизайн-система'),
      duration: t('4 semaines', '4 weeks', '4 semanas', '4周', '4 Wochen', '4 أسابيع', '4 semanas', '4 недели'),
      description: t("Création de la palette de couleurs, de la typographie, de la grille modulaire et de 120+ composants atomiques dans Figma.", "Creating the color palette, typography, modular grid and 120+ atomic components in Figma.", "Creación de paleta de colores, tipografía, cuadrícula y 120+ componentes atómicos en Figma.", "在Figma中创建调色板、排版、模块化网格和120+原子组件。", "Erstellung der Farbpalette, Typografie, modularem Raster und 120+ atomaren Komponenten in Figma.", "إنشاء لوحة الألوان والطباعة والشبكة و120+ مكونًا ذريًا في Figma.", "Criação da paleta, tipografia, grade modular e 120+ componentes atômicos no Figma.", "Создание палитры цветов, типографики, модульной сетки и 120+ атомарных компонентов в Figma.")
    },
    {
      phase: t('Prototypage & Tests', 'Prototyping & Testing', 'Prototipado y Pruebas', '原型与测试', 'Prototyping & Tests', 'النماذج والاختبارات', 'Prototipagem e Testes', 'Прототипирование и тесты'),
      duration: t('3 semaines', '3 weeks', '3 semanas', '3周', '3 Wochen', '3 أسابيع', '3 semanas', '3 недели'),
      description: t("Prototypes interactifs des bornes et de l'app citoyenne, tests d'accessibilité avec des utilisateurs en situation de handicap, itérations.", "Interactive prototypes of kiosks and citizen app, accessibility testing with disabled users, design iterations.", "Prototipos interactivos de quioscos y app ciudadana, pruebas de accesibilidad.", "交互式原型的终端和市民应用程序，无障碍测试。", "Interaktive Prototypen der Kioske und Bürger-App, Barrierefreiheitstests.", "نماذج تفاعلية للأكشاك وتطبيق المواطن واختبارات إمكانية الوصول.", "Protótipos interativos dos quiosques e app cidadã, testes de acessibilidade.", "Интерактивные прототипы киосков и приложения, тесты доступности.")
    },
    {
      phase: t('Déploiement & Documentation', 'Deployment & Documentation', 'Despliegue y Documentación', '部署与文档', 'Bereitstellung & Dokumentation', 'النشر والتوثيق', 'Implantação e Documentação', 'Развертывание и документация'),
      duration: t('2 semaines', '2 weeks', '2 semanas', '2周', '2 Wochen', '2 أسابيع', '2 semanas', '2 недели'),
      description: t("Publication du Design System en ligne, formation des 12 équipes municipales, guide de contribution et gouvernance.", "Publishing the Design System online, training 12 municipal teams, contribution guide and governance.", "Publicación del Design System, formación de 12 equipos municipales.", "在线发布设计系统，培训12个市政团队。", "Veröffentlichung des Designsystems, Schulung von 12 städtischen Teams.", "نشر نظام التصميم وتدريب 12 فريقًا بلديًا.", "Publicação do Design System, treinamento de 12 equipes municipais.", "Публикация дизайн-системы, обучение 12 муниципальных команд.")
    }
  ],
  beforeImage: '/mockups/urban-pulse-before.svg',
  afterImage: '/mockups/urban-pulse-after.svg',
  problem: t(
    "Les services municipaux utilisaient 15 identités visuelles différentes, créant de la confusion chez les citoyens. L'accessibilité était souvent négligée, excluant une partie de la population.",
    "Municipal services used 15 different visual identities, creating confusion for citizens. Accessibility was often neglected, excluding a portion of the population.",
    "Los servicios municipales utilizaban 15 identidades visuales diferentes, creando confusión entre los ciudadanos.",
    "市政服务使用了15种不同的视觉标识，给市民造成了混淆。",
    "Städtische Dienste nutzten 15 verschiedene visuelle Identitäten, was zu Verwirrung bei den Bürgern führte.",
    "استخدمت الخدمات البلدية 15 هوية بصرية مختلفة ، مما خلق ارتباكًا للمواطنين.",
    "Os serviços municipais usavam 15 identidades visuais diferentes, criando confusão para os cidadãos.",
    "Муниципальные службы использовали 15 различных визуальных идентификаторов, создавая путаницу для граждан."
  ),
  goal: t(
     "Unifier l'expérience citoyenne avec un langage visuel cohérent, moderne et 100% accessible (WCAG AAA) déployable sur tous les supports.",
     "Unify the citizen experience with a consistent, modern, and 100% accessible (WCAG AAA) visual language deployable across all mediums.",
     "Unificar la experiencia ciudadana con un lenguaje visual coherente, moderno y 100% accesible.",
     "通过一致、现代且100%可访问的视觉语言统一市民体验。",
     "Vereinheitlichung des Bürgererlebnisses mit einer konsistenten, modernen und 100% barrierefreien visuellen Sprache.",
     "توحيد تجربة المواطن بلغة بصرية متسقة وحديثة ويمكن الوصول إليها بنسبة 100٪.",
     "Unificar a experiência do cidadão com uma linguagem visual consistente, moderna e 100% acessível.",
     "Объединить гражданский опыт с помощью последовательного, современного и 100% доступного визуального языка."
  ),
  userJourney: {
    title: t("Parcours Citoyen Connecté", "Connected Citizen Journey", "Viaje del Ciudadano Conectado", "互联公民旅程", "Vernetzte Bürgerreise", "رحلة المواطن المتصل", "Jornada do Cidadão Conectado", "Путь подключенного гражданина"),
    steps: [
      {
        title: t("Découverte", "Discovery", "Descubrimiento", "发现", "Entdeckung", "اكتشاف", "Descoberta", "Открытие"),
        description: t("Le citoyen repère facilement les points de contact grâce au langage visuel unifié.", "Citizens easily spot touchpoints thanks to unified visual language.", "El ciudadano localiza fácilmente los puntos de contacto.", "市民可以通过统一的视觉语言轻松找到接触点。", "Bürger erkennen Kontaktpunkte dank einheitlicher visueller Sprache leicht.", "يكتشف المواطن نقاط الاتصال بسهولة.", "O cidadão identifica facilmente os pontos de contato.", "Граждане легко находят точки контакта."),
        icon: 'MapPin'
      },
      {
        title: t("Accessibilité", "Accessibility", "Accesibilidad", "可访问性", "Barrierefreiheit", "إمكانية الوصول", "Acessibilidade", "Доступность"),
        description: t("L'interface s'adapte automatiquement : mode contraste élevé, synthèse vocale.", "The interface automatically adapts: high contrast mode, text-to-speech.", "La interfaz se adapta automáticamente.", "界面自动适应。", "Die Schnittstelle passt sich automatisch an.", "الواجهة تتكيف تلقائيًا.", "A interface se adapta automaticamente.", "Интерфейс адаптируется автоматически."),
        icon: 'Accessibility'
      },
      {
        title: t("Service", "Service", "Servicio", "服务", "Dienst", "خدمة", "Serviço", "Сервис"),
        description: t("Accès rapide aux documents administratifs sans friction cognitive.", "Quick access to administrative documents without cognitive friction.", "Acceso rápido a documentos.", "快速访问文档。", "Schneller Zugriff auf Dokumente.", "وصول سريع إلى المستندات.", "Acesso rápido a documentos.", "Быстрый доступ к документам."),
        icon: 'FileCheck'
      }
    ]
  },
  wireframes: {
    description: t("Conception des grilles modulaires et de la signalétique numérique.", "Designing modular grids and digital signage.", "Diseño de cuadrículas modulares.", "设计模块化网格和数字标牌。", "Design modularer Raster.", "تصميم شبكات معيارية.", "Design de grades modulares.", "Проектирование модульных сеток."),
    images: [
      '/mockups/urban-pulse-wireframe-kiosk.svg',
      '/mockups/urban-pulse-wireframe-mobile.svg',
    ]
  },
  mockups: {
    desktop: '/mockups/urban-pulse-desktop.svg',
    mobile: '/mockups/urban-pulse-mobile.svg',
    description: t("Kit UI haute fidélité déployé sur les applications iOS et Android de la ville.", "High-fidelity UI Kit deployed on the city's iOS and Android apps.", "Kit UI de alta fidelidad.", "高保真UI套件。", "High-Fidelity UI Kit.", "مجموعة واجهة مستخدم عالية الدقة.", "Kit de UI de alta fidelidade.", "Высококачественный UI Kit.")
  },
  tools: ['Figma', 'Illustrator', 'React Native', 'Mapbox']
} as Project;






export const newProjects = [cyberGuard, hyperStream, urbanPulse];
