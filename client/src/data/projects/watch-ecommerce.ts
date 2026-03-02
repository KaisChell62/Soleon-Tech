import type { LocalizedText } from '../../types';

const t = (fr: string, en: string, es: string, zh: string, de: string, ar: string, pt: string, ru: string): LocalizedText => ({ fr, en, es, zh, de, ar, pt, ru });

export const auraWatches = {
  id: 'aura-watches',
  title: 'Aura Watches',
  client: 'Aura Geneve',
  category: 'web',
  year: '2025',
  shortDescription: t("E-commerce de haute horlogerie.", "High-end watch e-commerce.", "Comercio electrónico de alta relojería.", "高端腕表电子商务。", "High-End-Uhren-E-Commerce.", "تجارة إلكترونية للساعات الفاخرة.", "E-commerce de alta relojoaria.", "Электронная торговля элитными часами."),
  fullDescription: t(
    "Une expérience d'achat immersive pour une marque d'horlogerie suisse de luxe. Nous avons créé un univers digital sombre et élégant qui sublime chaque garde-temps grâce à des interactions fluides et une mise en page typographique soignée. L'objectif était de répliquer le sentiment d'exclusivité d'une boutique physique à travers le web.", 
    "An immersive shopping experience for a luxury Swiss watch brand. We created a dark and elegant digital universe that enhances every timepiece through fluid interactions and meticulous typographic layout. The goal was to replicate the feeling of exclusivity of a physical boutique through the web.", 
    "Una experiencia de compra inmersiva para una marca de relojería suiza de lujo. Creamos un universo digital oscuro y elegante que sublima cada reloj gracias a interacciones fluidas y un diseño tipográfico cuidado. El objetivo era replicar la sensación de exclusividad de una boutique física a través de la web.", 
    "为瑞士豪华手表品牌打造的身临其境的购物体验。我们创造了一个黑暗而优雅的数字世界，通过流畅的互动和精心设计的排版布局提升每款时计的魅力。目标是通过网络复制实体精品的尊贵感。", 
    "Ein immersives Einkaufserlebnis für eine Schweizer Luxusuhrenmarke. Wir haben ein dunkles und elegantes digitales Universum geschaffen, das jeden Zeitmesser durch flüssige Interaktionen und ein sorgfältiges typografisches Layout hervorhebt. Ziel war es, das Gefühl der Exklusivität einer physischen Boutique im Web nachzubilden.", 
    "تجربة تسوق غامرة لعلامة تجارية سويسرية للساعات الفاخرة. أنشأنا عالمًا رقميًا داكنًا وأنيقًا يبرز كل ساعة من خلال تفاعلات سلسة وتخطيط طباعي دقيق. كان الهدف هو تكرار شعور الحصرية لبوتيك فعلي عبر الويب.", 
    "Uma experiência de compra imersiva para uma marca de relógios suíça de luxo. Criamos um universo digital escuro e elegante que sublima cada relógio graças a interações fluidas e um layout tipográfico meticuloso. O objetivo era replicar a sensação de exclusividade de uma boutique física através da web.", 
    "Захватывающий опыт покупок для швейцарского бренда элитных часов. Мы создали темную и элегантную цифровую вселенную, которая подчеркивает каждые часы благодаря плавным взаимодействиям и тщательному типографскому макету. Целью было воспроизвести ощущение эксклюзивности физического бутика через интернет."
  ),
  heroImage: 'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&q=80',
  thumbnail: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80',
  images: [
    'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1509941943102-10c232535736?auto=format&fit=crop&q=80'
  ],
  tags: ['React', 'Framer Motion', 'Tailwind', 'Luxury'],
  challenge: t(
    "Le défi majeur consistait à transposer l'aura d'exclusivité et la précision artisanale d'une maison horlogère suisse centenaire dans un environnement digital. Il fallait concilier la richesse visuelle des images haute définition et des animations fluides avec les impératifs de performance web, tout en garantissant une expérience sans compromis sur mobile.", 
    "The major challenge was to transpose the aura of exclusivity and artisanal precision of a century-old Swiss watchmaking house into a digital environment. We had to reconcile the visual richness of high-definition images and fluid animations with web performance imperatives, while ensuring an uncompromising experience on mobile.", 
    "El mayor desafío fue transponer el aura de exclusividad y la precisión artesanal de una casa relojera suiza centenaria a un entorno digital. Tuvimos que conciliar la riqueza visual de las imágenes de alta definición y las animaciones fluidas con los imperativos de rendimiento web, garantizando al mismo tiempo una experiencia sin concesiones en el móvil.", 
    "主要的挑战是将一家有着百年历史的瑞士制表公司独有的尊贵光环和精湛工艺移植到数字环境中。我们必须协调高清图像和流畅动画的视觉丰富性与网络性能的必要性，同时确保移动端的体验毫不妥协。", 
    "Die größte Herausforderung bestand darin, die Aura der Exklusivität und die handwerkliche Präzision eines jahrhundertealten Schweizer Uhrenhauses in eine digitale Umgebung zu übertragen. Wir mussten den visuellen Reichtum hochauflösender Bilder und flüssiger Animationen mit den Anforderungen an die Web-Performance in Einklang bringen und gleichzeitig ein kompromissloses Erlebnis auf Mobilgeräten gewährleisten.", 
    "كان التحدي الرئيسي هو نقل هالة الحصرية والدقة الحرفية لدار صناعة ساعات سويسرية عمرها قرن من الزمان إلى بيئة رقمية. كان علينا التوفيق بين الثراء البصري للصور عالية الدقة والرسوم المتحركة السلسة ومستلزمات أداء الويب، مع ضمان تجربة لا هوادة فيها على الهاتف المحمول.", 
    "O maior desafio foi transpor a aura de exclusividade e a precisão artesanal de uma casa de relojoaria suíça centenária para um ambiente digital. Tivemos que conciliar a riqueza visual de imagens de alta definição e animações fluidas com os imperativos de desempenho da web, garantindo uma experiência sem compromissos no celular.", 
    "Главной задачей было перенести ауру эксклюзивности и ремесленную точность векового швейцарского часового дома в цифровую среду. Нам пришлось совместить визуальное богатство изображений высокой четкости и плавной анимации с требованиями к веб-производительности, гарантируя при этом бескомпромиссный опыт на мобильных устройствах."
  ),
  solution: t(
    "Nous avons conçu une interface 'Cinématique' où le scroll devient narration. L'utilisation de typographies Serif élégantes sur un fond sombre crée une profondeur immersive. Techniquement, React et Framer Motion orchestrent des micro-interactions précises qui réagissent à chaque geste, mimant la mécanique d'un mouvement horloger.", 
    "We designed a 'Cinematic' interface where scrolling becomes narration. The use of elegant Serif typography against a dark background creates immersive depth. Technically, React and Framer Motion orchestrate precise micro-interactions that react to every gesture, mimicking the mechanics of a watch movement.", 
    "Diseñamos una interfaz 'Cinemática' donde el desplazamiento se convierte en narración. El uso de una tipografía Serif elegante sobre un fondo oscuro crea una profundidad inmersiva. Técnicamente, React y Framer Motion orquestan microinteracciones precisas que reaccionan a cada gesto, imitando la mecánica de un movimiento de reloj.", 
    "我们设计了一个'电影化'的界面，滚动变成叙述。在深色背景上使用优雅的衬线字体创造了身临其境的深度。在技术上，React和Framer Motion编排了精确的微交互，对每一个手势做出反应，模仿手表机芯的机械结构。", 
    "Wir haben eine 'kinematische' Oberfläche entworfen, bei der das Scrollen zur Erzählung wird. Die Verwendung eleganter Serif-Typografie vor einem dunklen Hintergrund schafft eine immersive Tiefe. Technisch gesehen orchestrieren React und Framer Motion präzise Mikrointeraktionen, die auf jede Geste reagieren und die Mechanik eines Uhrwerks nachahmen.", 
    "لقد قمنا بتصميم واجهة 'سينمائية' حيث يصبح التمرير سردًا. استخدام خطوط Serif الأنيقة على خلفية داكنة يخلق عمقًا غامرًا. تقنيًا، ينظم React و Framer Motion تفاعلات دقيقة تستجيب لكل إيماءة، محاكية ميكانيكا حركة الساعة.", 
    "Projetamos uma interface 'Cinemática' onde a rolagem se torna narração. O uso de tipografia Serif elegante em um fundo escuro cria uma profundidade imersiva. Tecnicamente, React e Framer Motion orquestram microinterações precisas que reagem a cada gesto, imitando a mecânica de um movimento de relógio.", 
    "Мы разработали 'Кинематографичный' интерфейс, где прокрутка становится повествованием. Использование элегантной типографики с засечками на темном фоне создает эффект погружения. Технически React и Framer Motion организуют точные микровзаимодействия, реагирующие на каждый жест, имитируя механику часового механизма."
  ),
  mockups: {
    desktop: 'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&q=80',
    mobile: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80',
    description: t(
        "Continuité visuelle absolue entre le Desktop et le Mobile. Le responsive design ne se contente pas d'adapter la taille, il réinvente la navigation pour le tactile.",
        "Absolute visual continuity between Desktop and Mobile. Responsive design doesn't just adapt size, it reinvents navigation for touch.",
        "Continuidad visual absoluta entre Escritorio y Móvil. El diseño responsivo no solo adapta el tamaño, reinventa la navegación para lo táctil.",
        "桌面和移动设备之间的绝对视觉连续性。响应式设计不仅仅是调整大小，它还为触摸重新发明了导航。",
        "Absolute visuelle Kontinuität zwischen Desktop und Mobile. Responsive Design passt nicht nur die Größe an, sondern erfindet die Navigation für Touch neu.",
        "استمرارية بصرية مطلقة بين سطح المكتب والهاتف المحمول. التصميم المتجاوب لا يكتفي بتكييف الحجم، بل يعيد اختراع التنقل باللمس.",
        "Continuidade visual absoluta entre Desktop e Mobile. O design responsivo não apenas adapta o tamanho, ele reinventa a navegação para o toque.",
        "Абсолютная визуальная непрерывность между настольным компьютером и мобильным устройством. Адаптивный дизайн не просто меняет размер, он заново изобретает навигацию для сенсорного управления."
    )
  },
  result: t("Prix moyen du panier en hausse de 40%.", "Average basket price up 40%.", "Precio medio de la cesta sube un 40%.", "平均客单价上涨40%。", "Durchschnittlicher Warenkorbwert um 40% gestiegen.", "ارتفاع متوسط سعر السلة بنسبة 40%.", "Preço médio da cesta aumentou 40%.", "Средний чек вырос на 40%."),
  demoUrl: '/demos/aura-watches',
  timeline: [
    { 
      phase: t('Immersion', 'Immersion', 'Inmersión', '沉浸', 'Immersion', 'انغماس', 'Imersão', 'Погружение'), 
      duration: t('Semaine 1', 'Week 1', 'Semana 1', '第1周', 'Woche 1', 'الأسبوع 1', 'Semana 1', 'Неделя 1'), 
      description: t(
        'Analyse de l\'héritage de la marque et définition de la direction artistique "Dark Luxury".', 
        'Analysis of brand heritage and definition of the "Dark Luxury" art direction.', 
        'Análisis del patrimonio de la marca y definición de la dirección artística "Dark Luxury".', 
        '分析品牌传承并定义"黑暗奢华"艺术方向。', 
        'Analyse des Markenerbes und Definition der Kunstrichtung "Dark Luxury".', 
        'تحليل تراث العلامة التجارية وتحديد الاتجاه الفني "الفخامة الداكنة".', 
        'Análise do patrimônio da marca e definição da direção artística "Dark Luxury".', 
        'Анализ наследия бренда и определение художественного направления "Dark Luxury".'
      ) 
    },
    { 
      phase: t('Design UX/UI', 'UX/UI Design', 'Diseño UX/UI', 'UX/UI设计', 'UX/UI-Design', 'تصميم UX/UI', 'Design UX/UI', 'UX/UI дизайн'), 
      duration: t('Semaine 2-3', 'Week 2-3', 'Semana 2-3', '第2-3周', 'Woche 2-3', 'الأسبوع 2-3', 'Semana 2-3', 'Неделя 2-3'), 
      description: t(
        'Création des maquettes haute fidélité avec un focus sur la typographie et l\'espace négatif.', 
        'Creation of high-fidelity mockups with a focus on typography and negative space.', 
        'Creación de maquetas de alta fidelidad con un enfoque en la tipografía y el espacio negativo.', 
        '创建专注于排版和负空间的高保真模型。', 
        'Erstellung von High-Fidelity-Mockups mit Fokus auf Typografie und negativem Raum.', 
        'إنشاء نماذج عالية الدقة مع التركيز على الطباعة والمساحة السلبية.', 
        'Criação de mockups de alta fidelidade com foco em tipografia e espaço negativo.', 
        'Создание высококачественных макетов с акцентом на типографику и негативное пространство.'
      ) 
    },
    { 
      phase: t('Motion Design', 'Motion Design', 'Motion Design', '动态设计', 'Motion Design', 'تصميم الحركة', 'Motion Design', 'Моушн-дизайн'), 
      duration: t('Semaine 4-5', 'Week 4-5', 'Semana 4-5', '第4-5周', 'Woche 4-5', 'الأسبوع 4-5', 'Semana 4-5', 'Неделя 4-5'), 
      description: t(
        'Développement des micro-interactions et des transitions fluides pour une expérience "cinématique".', 
        'Development of micro-interactions and fluid transitions for a "cinematic" experience.', 
        'Desarrollo de microinteracciones y transiciones fluidas para una experiencia "cinemática".', 
        '开发微交互和流畅过渡，打造"电影般"体验。', 
        'Entwicklung von Mikrointeraktionen und flüssigen Übergängen für ein "kinematisches" Erlebnis.', 
        'تطوير التفاعلات الدقيقة والانتقالات السلسة لتجربة "سينمائية".', 
        'Desenvolvimento de microinterações e transições fluidas para uma experiência "cinemática".', 
        'Разработка микровзаимодействий и плавных переходов для "кинематографического" опыта.'
      ) 
    },
    { 
      phase: t('Intégration', 'Integration', 'Integración', '集成', 'Integration', 'تكامل', 'Integração', 'Интеграция'), 
      duration: t('Semaine 6-8', 'Week 6-8', 'Semana 6-8', '第6-8周', 'Woche 6-8', 'الأسبوع 6-8', 'Semana 6-8', 'Неделя 6-8'), 
      description: t(
        'Assemblage frontend sous React, optimisation des assets 3D et tests de performance.', 
        'Frontend assembly under React, optimization of 3D assets, and performance testing.', 
        'Ensamblaje frontend bajo React, optimización de activos 3D y pruebas de rendimiento.', 
        'React下的前端组装，3D资产优化和性能测试。', 
        'Frontend-Montage unter React, Optimierung von 3D-Assets und Leistungstests.', 
        'تجميع الواجهة الأمامية تحت React، تحسين الأصول ثلاثية الأبعاد واختبار الأداء.', 
        'Montagem frontend sob React, otimização de ativos 3D e testes de desempenho.', 
        'Сборка фронтенда под React, оптимизация 3D-ассетов и тестирование производительности.'
      ) 
    },
    { 
      phase: t('Polissage', 'Polish', 'Pulido', '润色', 'Polieren', 'تلميع', 'Polimento', 'Полировка'), 
      duration: t('Semaine 9', 'Week 9', 'Semana 9', '第9周', 'Woche 9', 'الأسبوع 9', 'Semana 9', 'Неделя 9'), 
      description: t(
        'Ajustements finaux, QA mobile et déploiement mondial.', 
        'Final adjustments, mobile QA, and global deployment.', 
        'Ajustes finales, control de calidad móvil y despliegue global.', 
        '最终调整，移动QA和全球部署。', 
        'Letzte Anpassungen, mobile QA und weltweite Bereitstellung.', 
        'التعديلات النهائية، ضمان الجودة للجوال والنشر العالمي.', 
        'Ajustes finais, QA móvel e implantação global.', 
        'Финальные корректировки, мобильный QA и глобальное развертывание.'
      ) 
    }
  ]
};
