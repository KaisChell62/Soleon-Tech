import type { LocalizedText } from '../../types';

const t = (fr: string, en: string, es: string, zh: string, de: string, ar: string, pt: string, ru: string): LocalizedText => ({ fr, en, es, zh, de, ar, pt, ru });

export const nebulaIdentity = {
  id: 'nebula-brand',
  title: 'Nebula AI Identity',
  client: 'Nebula Tech',
  category: 'design',
  year: '2024',
  demoUrl: '/demos/nebula-identity',
  shortDescription: t(
    "Identité visuelle complète pour une startup IA.",
    "Complete visual identity for an AI startup.",
    "Identidad visual completa para una startup de IA.",
    "AI初创公司的完整视觉识别系统。",
    "Komplette visuelle Identität für ein KI-Startup.",
    "هوية بصرية كاملة لشركة ناشئة في مجال الذكاء الاصطناعي.",
    "Identidade visual completa para uma startup de IA.",
    "Полная визуальная идентичность для ИИ-стартапа."
  ),
  fullDescription: t(
    "Création d'un univers graphique futuriste mais humain pour une plateforme d'intelligence artificielle éthique.",
    "Creation of a futuristic yet human graphic universe for an ethical artificial intelligence platform.",
    "Creación de un universo gráfico futurista pero humano para una plataforma de inteligencia artificial ética.",
    "为道德人工智能平台创建一个未来主义但人性化的图形世界。",
    "Erstellung eines futuristischen aber menschlichen grafischen Universums für eine ethische KI-Plattform.",
    "إنشاء عالم رسومي مستقبلي لكن إنساني لمنصة ذكاء اصطناعي أخلاقية.",
    "Criação de um universo gráfico futurista mas humano para uma plataforma de inteligência artificial ética.",
    "Создание футуристичной, но человечной графической вселенной для этичной ИИ-платформы."
  ),
  heroImage: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&q=80',
  thumbnail: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800',
  tags: ['Illustrator', 'Motion Design', 'Branding', 'Figma'],
  challenge: t(
    "Se démarquer dans un océan de startups IA utilisant toutes les mêmes codes bleus et robotiques.",
    "Stand out in a sea of AI startups all using the same blue and robotic codes.",
    "Destacarse en un océano de startups de IA que usan los mismos códigos azules y robóticos.",
    "在众多使用相同蓝色和机器人风格的AI初创公司中脱颖而出。",
    "Sich in einem Meer von KI-Startups abheben, die alle die gleichen blauen und roboterhaften Codes verwenden.",
    "التميز في بحر من الشركات الناشئة في الذكاء الاصطناعي التي تستخدم نفس الرموز الزرقاء والروبوتية.",
    "Destacar-se em um mar de startups de IA usando os mesmos códigos azuis e robóticos.",
    "Выделиться среди множества ИИ-стартапов, использующих одинаковые синие и роботизированные стили."
  ),
  solution: t(
    "Un système visuel organique, basé sur des dégradés iridescents et une typographie propriétaire qui évoque la fluidité de la pensée.",
    "An organic visual system, based on iridescent gradients and a proprietary typography that evokes the fluidity of thought.",
    "Un sistema visual orgánico, basado en degradados iridiscentes y una tipografía propietaria que evoca la fluidez del pensamiento.",
    "一个有机的视觉系统，基于虹彩渐变和专有字体，唤起思维的流动性。",
    "Ein organisches visuelles System, basierend auf irisierenden Verläufen und einer proprietären Typografie, die die Fluidität des Denkens evoziert.",
    "نظام بصري عضوي، يعتمد على تدرجات قزحية وطباعة خاصة تستحضر سيولة الفكر.",
    "Um sistema visual orgânico, baseado em gradientes iridescentes e uma tipografia propietária que evoca a fluidez do pensamento.",
    "Органическая визуальная система на основе переливающихся градиентов и фирменной типографики, передающей текучесть мысли."
  ),
  result: t(
    "Marque adoptée par 50+ partenaires majeurs, mentionnée dans DesignWeek.",
    "Brand adopted by 50+ major partners, featured in DesignWeek.",
    "Marca adoptada por más de 50 socios importantes, mencionada en DesignWeek.",
    "品牌被50多个主要合作伙伴采用，被DesignWeek报道。",
    "Marke von über 50 großen Partnern übernommen, in DesignWeek erwähnt.",
    "تم تبني العلامة التجارية من قبل أكثر من 50 شريكًا رئيسيًا، ذُكرت في DesignWeek.",
    "Marca adotada por mais de 50 parceiros principais, destaque na DesignWeek.",
    "Бренд принят 50+ крупными партнёрами, упоминается в DesignWeek."
  ),
  images: [
    'https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&q=80&w=1200'
  ],
  timeline: [
    { 
      phase: t('Stratégie', 'Strategy', 'Estrategia', '战略', 'Strategie', 'الاستراتيجية', 'Estratégia', 'Стратегия'),
      duration: t('1 semaine', '1 week', '1 semana', '1周', '1 Woche', 'أسبوع واحد', '1 semana', '1 неделя'),
      description: t('Positionnement de marque et analyse concurrentielle.', 'Brand positioning and competitive analysis.', 'Posicionamiento de marca.', '品牌定位。', 'Markenpositionierung.', 'تحديد موقع العلامة التجارية.', 'Posicionamento de marca.', 'Позиционирование бренда.')
    },
    { 
      phase: t('Recherche & Moodboard', 'Research & Moodboard', 'Investigación & Moodboard', '研究与情绪板', 'Recherche & Moodboard', 'البحث ولوحة المزاج', 'Pesquisa & Moodboard', 'Исследование и мудборд'),
      duration: t('1 semaine', '1 week', '1 semana', '1周', '1 Woche', 'أسبوع واحد', '1 semana', '1 неделя'),
      description: t('Exploration des directions artistiques "Bio-Digital".', 'Exploring "Bio-Digital" art directions.', 'Exploración de direcciones artísticas.', '探索艺术方向。', 'Erkundung der künstlerischen Richtungen.', 'استكشاف الاتجاهات الفنية.', 'Exploração de direções artísticas.', 'Исследование художественных направлений.')
    },
    { 
      phase: t('Création Logo', 'Logo Creation', 'Creación de Logo', 'Logo创作', 'Logo-Erstellung', 'إنشاء الشعار', 'Criação do Logo', 'Создание логотипа'),
      duration: t('2 semaines', '2 weeks', '2 semanas', '2周', '2 Wochen', 'أسبوعان', '2 semanas', '2 недели'),
      description: t('Croquis, raffinement et validation du logo final.', 'Sketches, refinement and final logo validation.', 'Bocetos y refinamiento del logo.', '草图、细化和最终标志验证。', 'Skizzen, Verfeinerung und finale Logo-Validierung.', 'رسومات وتحسين والتحقق النهائي من الشعار.', 'Esboços, refinamento e validação do logo.', 'Эскизы, доработка и утверждение логотипа.')
    },
    { 
      phase: t('Système Visuel', 'Visual System', 'Sistema Visual', '视觉系统', 'Visuelles System', 'النظام البصري', 'Sistema Visual', 'Визуальная система'),
      duration: t('1 semaine', '1 week', '1 semana', '1周', '1 Woche', 'أسبوع واحد', '1 semana', '1 неделя'),
      description: t('Palette de couleurs, typographie et éléments graphiques.', 'Color palette, typography and graphic elements.', 'Paleta de colores y tipografía.', '调色板、字体和图形元素。', 'Farbpalette, Typografie und grafische Elemente.', 'لوحة الألوان والطباعة والعناصر الرسومية.', 'Paleta de cores, tipografia e elementos gráficos.', 'Цветовая палитра, типографика и графические элементы.')
    },
    { 
      phase: t('Applications', 'Applications', 'Aplicaciones', '应用', 'Anwendungen', 'التطبيقات', 'Aplicações', 'Применения'),
      duration: t('1 semaine', '1 week', '1 semana', '1周', '1 Woche', 'أسبوع واحد', '1 semana', '1 неделя'),
      description: t('Déclinaison sur papeterie, digital et réseaux sociaux.', 'Application on stationery, digital and social media.', 'Aplicación en papelería y digital.', '在文具、数字和社交媒体上应用。', 'Anwendung auf Briefpapier, Digital und Social Media.', 'تطبيق على القرطاسية والرقمية ووسائل التواصل.', 'Aplicação em papelaria, digital e redes sociais.', 'Применение на канцелярии, в цифровом и социальных сетях.')
    }
  ],
  problem: t(
    "L'IA est souvent perçue comme froide, complexe et intimidante. La plupart des concurrents utilisent des visuels de circuits imprimés bleus clichsé.",
    "AI is often perceived as cold, complex, and intimidating. Most competitors use clichéd blue circuit board visuals.",
    "La IA a menudo se percibe como fría, compleja e intimidante.",
    "人工智能通常被认为是冷漠、复杂和令人生畏的。",
    "KI wird oft als kalt, komplex und einschüchternd wahrgenommen.",
    "غالبًا ما يُنظر إلى الذكاء الاصطناعي على أنه بارد ومعقد ومخيف.",
    "A IA é frequentemente percebida como fria, complexa e intimidante.",
    "ИИ часто воспринимается как холодный, сложный и пугающий."
  ),
  goal: t(
    "Créer une identité 'Bio-Digital' qui humanise la technologie tout en gardant une aura de mystère et de puissance.",
    "Create a 'Bio-Digital' identity that humanizes technology while maintaining an aura of mystery and power.",
    "Crear una identidad 'Bio-Digital'.",
    "创造一种'生物数字'身份，使技术人性化。",
    "Eine 'Bio-Digital'-Identität schaffen.",
    "إنشاء هوية 'حيوية رقمية' تضفي طابعًا إنسانيًا على التكنولوجيا.",
    "Criar uma identidade 'Bio-Digital'.",
    "Создать 'Био-цифровую' идентичность."
  ),
  userJourney: {
    title: t("Parcours de Marque", "Brand Journey", "Viaje de Marca", "品牌旅程", "Markenreise", "رحلة العلامة التجارية", "Jornada da Marca", "Путь бренда"),
    steps: [
      {
        title: t("Attraction", "Attraction", "Atracción", "吸引", "Anziehung", "جذب", "Atração", "Привлечение"),
        description: t("L'utilisateur est intrigué par les visuels organiques et fluides.", "The user is intrigued by the organic and fluid visuals.", "El usuario está intrigado.", "用户被有机和流畅的视觉效果所吸引。", "Der Benutzer ist von den organischen Visuals fasziniert.", "المستخدم مفتون بالمرئيات العضوية.", "O usuário fica intrigado com os visuais orgânicos.", "Пользователь заинтригован органичными визуальными эффектами."),
        icon: 'Eye'
      },
      {
        title: t("Compréhension", "Understanding", "Comprensión", "理解", "Verständnis", "فهم", "Compreensão", "Понимание"),
        description: t("La typographie claire et humaine rend le message technique accessible.", "Clean and human typography makes the technical message accessible.", "La tipografía clara hace accesible el mensaje.", "清晰的人性化排版使技术信息易于获取。", "Klare und menschliche Typografie macht die technische Botschaft zugänglich.", "الطباعة الواضحة تجعل الرسالة التقنية سهلة الوصول.", "A tipografia clara torna a mensagem técnica acessível.", "Чистая типографика делает техническое сообщение доступным."),
        icon: 'Brain'
      },
      {
        title: t("Adhésion", "Adhesion", "Adhesión", "坚持", "Zustimmung", "انضمام", "Adesão", "Присоединение"),
        description: t("L'identité inspire confiance et modernité, incitant au partenariat.", "The identity inspires trust and modernity, encouraging partnership.", "La identidad inspira confianza.", "这种身份激发了信任和现代感。", "Die Identität inspiriert Vertrauen.", "الهوية تلهم الثقة والحداثة.", "A identidade inspira confiança.", "Идентичность внушает доверие."),
        icon: 'Heart'
      }
    ]
  },
  wireframes: {
    description: t("Recherches graphiques et directions artistiques. Exploration de la dualité Organique / Numérique.", "Graphic research and art direction. Exploring the Organic / Digital duality.", "Investigación gráfica.", "视觉研究。", "Grafische Forschung.", "البحث الجرافيكي.", "Pesquisa gráfica.", "Графические исследования."),
    images: [
      '/mockups/nebula-logo-sketches.svg',
      '/mockups/nebula-colors.svg',
      '/mockups/nebula-typography.svg?v=3',
      '/mockups/nebula-stationery.svg'
    ]
  },
  mockups: {
    desktop: '/mockups/nebula-ui-mockup.svg',
    mobile: '/mockups/nebula-social-media.svg',
    description: t("Application de l'identité sur les supports clés : Brand Book et Interface Mobile.", "Identity application on key assets: Brand Book and Mobile Interface.", "Aplicación de identidad.", "身份应用。", "Identitätsanwendung.", "تطبيق الهوية.", "Aplicação da identidade.", "Применение стиля.")
  },
  tools: ['Illustrator', 'After Effects', 'Figma', 'Blender']
};

