import type { LocalizedText } from '../../types';

const t = (fr: string, en: string, es: string, zh: string, de: string, ar: string, pt: string, ru: string): LocalizedText => ({ fr, en, es, zh, de, ar, pt, ru });

/**
 * Zarvaz — E-commerce de haute horlogerie précieuse
 * Projet original, branding exclusif, process complet
 */
export const zarvaz = {
  id: 'zarvaz-watches',
  title: 'Zarvaz',
  client: 'Zarvaz Genève',
  category: 'web',
  year: '2026',
  shortDescription: t(
    "Montres précieuses, savoir-faire suisse.",
    "Precious watches, Swiss craftsmanship.",
    "Relojes preciosos, artesanía suiza.",
    "珍贵腕表，瑞士工艺。",
    "Kostbare Uhren, Schweizer Handwerk.",
    "ساعات ثمينة، حرفية سويسرية.",
    "Relógios preciosos, artesanato suíço.",
    "Драгоценные часы, швейцарское мастерство."
  ),
  fullDescription: t(
    "Zarvaz incarne l'excellence de la haute horlogerie suisse. Chaque pièce est conçue comme un bijou, alliant matériaux rares, design raffiné et innovation mécanique. L'expérience d'achat est immersive, personnalisée, et met en valeur la beauté de chaque garde-temps.",
    "Zarvaz embodies the excellence of Swiss fine watchmaking. Each piece is crafted as a jewel, combining rare materials, refined design, and mechanical innovation. The shopping experience is immersive, personalized, and highlights the beauty of every timepiece.",
    "Zarvaz encarna la excelencia de la alta relojería suiza. Cada pieza es una joya, con materiales raros, diseño refinado e innovación mecánica. La experiencia de compra es inmersiva y personalizada.",
    "Zarvaz 代表瑞士高级制表的卓越。每一款都是珍宝，融合稀有材质、精致设计与机械创新。购物体验沉浸式且个性化，彰显每款腕表之美。",
    "Zarvaz verkörpert die Exzellenz der Schweizer Haute Horlogerie. Jedes Stück ist ein Juwel, vereint seltene Materialien, raffiniertes Design und mechanische Innovation. Das Einkaufserlebnis ist immersiv und individuell.",
    "زارفاز يجسد التميز في صناعة الساعات السويسرية الفاخرة. كل قطعة مصممة كجوهرة، تجمع بين مواد نادرة وتصميم راقٍ وابتكار ميكانيكي. تجربة الشراء غامرة وشخصية وتبرز جمال كل ساعة.",
    "Zarvaz representa a excelência da alta relojoaria suíça. Cada peça é uma joia, combinando materiais raros, design refinado e inovação mecânica. A experiência de compra é imersiva e personalizada.",
    "Zarvaz воплощает совершенство швейцарского часового искусства. Каждые часы — драгоценность, редкие материалы, изысканный дизайн и механические инновации. Покупка — персонализированный, погруженный опыт."
  ),
  heroImage: '/mockups/zarvaz-hero.svg',
  thumbnail: '/mockups/zarvaz-thumb.svg',
  images: [
    '/mockups/zarvaz-hero.svg',
    '/mockups/zarvaz-collection1.svg',
    '/mockups/zarvaz-collection2.svg',
    '/mockups/zarvaz-detail.svg'
  ],
  tags: ['React', 'Tailwind', 'Framer Motion', 'Luxury', 'Swiss'],
  challenge: t(
    "Créer une expérience digitale aussi précieuse que les montres.",
    "Create a digital experience as precious as the watches.",
    "Crear una experiencia digital tan preciosa como los relojes.",
    "打造与腕表同样珍贵的数字体验。",
    "Eine digitale Erfahrung so kostbar wie die Uhren schaffen.",
    "ابتكار تجربة رقمية ثمينة مثل الساعات.",
    "Criar uma experiência digital tão preciosa quanto os relógios.",
    "Создать цифровой опыт, столь же драгоценный, как часы."
  ),
  solution: t(
    "Design sur-mesure, animations raffinées, navigation immersive, présentation des matériaux et des complications.",
    "Custom design, refined animations, immersive navigation, showcase of materials and complications.",
    "Diseño a medida, animaciones refinadas, navegación inmersiva, presentación de materiales y complicaciones.",
    "定制设计，精致动画，沉浸式导航，展示材质与复杂功能。",
    "Maßgeschneidertes Design, raffinierte Animationen, immersive Navigation, Präsentation von Materialien und Komplikationen.",
    "تصميم مخصص، رسوم متحركة راقية، تنقل غامر، عرض المواد والتعقيدات.",
    "Design personalizado, animações refinadas, navegação imersiva, apresentação de materiais e complicações.",
    "Индивидуальный дизайн, изысканные анимации, погруженная навигация, демонстрация материалов и усложнений."
  ),
  result: t(
    "+60% de conversion, panier moyen doublé, notoriété accrue.",
    "+60% conversion, doubled average basket, increased brand awareness.",
    "+60% conversión, cesta media duplicada, notoriedad aumentada.",
    "+60%转化率，客单价翻倍，品牌知名度提升。",
    "+60% Conversion, durchschnittlicher Warenkorb verdoppelt, gesteigerte Markenbekanntheit.",
    "+60% تحويل، متوسط السلة مضاعف، شهرة العلامة التجارية مرتفعة.",
    "+60% conversão, cesta média duplicada, notoriedade aumentada.",
    "+60% конверсия, средний чек удвоен, узнаваемость бренда выросла."
  ),
  demoUrl: '/demos/zarvaz',
  timeline: [
    {
      phase: t('Inspiration & Croquis', 'Inspiration & Sketches', 'Inspiración y Bocetos', '灵感与草图', 'Inspiration & Skizzen', 'الإلهام والرسومات', 'Inspiração & Esboços', 'Вдохновение и эскизы'),
      duration: t('2 semaines', '2 weeks', '2 semanas', '2周', '2 Wochen', 'أسبوعان', '2 semanas', '2 недели'),
      description: t(
        "Recherche de styles, matériaux précieux, croquis des modèles phares.",
        "Style research, precious materials, sketches of flagship models.",
        "Investigación de estilos, materiales preciosos, bocetos de modelos principales.",
        "风格研究，珍贵材质，主打款草图。",
        "Stilrecherche, kostbare Materialien, Skizzen der Hauptmodelle.",
        "بحث عن الأساليب، مواد ثمينة، رسومات النماذج الرئيسية.",
        "Pesquisa de estilos, materiais preciosos, esboços dos modelos principais.",
        "Исследование стилей, драгоценные материалы, эскизы ключевых моделей."
      )
    },
    {
      phase: t('Design Haute Fidélité', 'High-Fidelity Design', 'Diseño de Alta Fidelidad', '高保真设计', 'High-Fidelity-Design', 'تصميم عالي الدقة', 'Design de Alta Fidelidade', 'Дизайн высокой точности'),
      duration: t('3 semaines', '3 weeks', '3 semanas', '3周', '3 Wochen', '3 أسابيع', '3 semanas', '3 недели'),
      description: t(
        "Création des maquettes, typographie, palette, animations, interactions.",
        "Mockup creation, typography, palette, animations, interactions.",
        "Creación de maquetas, tipografía, paleta, animaciones, interacciones.",
        "创建高保真模型、排版、调色板、动画、交互。",
        "Erstellung von Mockups, Typografie, Farbpalette, Animationen, Interaktionen.",
        "إنشاء النماذج، الطباعة، لوحة الألوان، الرسوم المتحركة، التفاعلات.",
        "Criação de mockups, tipografia, paleta, animações, interações.",
        "Создание макетов, типографика, палитра, анимации, взаимодействия."
      )
    },
    {
      phase: t('Développement Responsive', 'Responsive Development', 'Desarrollo Responsive', '响应式开发', 'Responsive-Entwicklung', 'تطوير متجاوب', 'Desenvolvimento Responsivo', 'Адаптивная разработка'),
      duration: t('4 semaines', '4 weeks', '4 semanas', '4周', '4 Wochen', '4 أسابيع', '4 semanas', '4 недели'),
      description: t(
        "Intégration React + Tailwind, tests mobile, optimisation performance.",
        "React + Tailwind integration, mobile tests, performance optimization.",
        "Integración React + Tailwind, pruebas móviles, optimización de rendimiento.",
        "集成React+Tailwind，移动端测试，性能优化。",
        "React + Tailwind-Integration, Mobile-Tests, Performance-Optimierung.",
        "دمج React + Tailwind، اختبارات الجوال، تحسين الأداء.",
        "Integração React + Tailwind, testes mobile, otimização de performance.",
        "Интеграция React + Tailwind, мобильные тесты, оптимизация производительности."
      )
    },
    {
      phase: t('Lancement & Personnalisation', 'Launch & Personalization', 'Lanzamiento y Personalización', '上线与个性化', 'Launch & Personalisierung', 'الإطلاق والتخصيص', 'Lançamento & Personalização', 'Запуск и персонализация'),
      duration: t('2 semaines', '2 weeks', '2 semanas', '2周', '2 Wochen', 'أسبوعان', '2 semanas', '2 недели'),
      description: t(
        "Déploiement, personnalisation client, suivi post-lancement.",
        "Deployment, client personalization, post-launch follow-up.",
        "Despliegue, personalización cliente, seguimiento post-lanzamiento.",
        "部署，客户个性化，上线后跟进。",
        "Deployment, Kundenpersonalisierung, Nachverfolgung nach dem Launch.",
        "النشر، تخصيص العميل، متابعة ما بعد الإطلاق.",
        "Deploy, personalização do cliente, acompanhamento pós-lançamento.",
        "Развертывание, персонализация клиента, пост-запусковой контроль."
      )
    }
  ]
};
