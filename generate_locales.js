const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, 'client/src/i18n/locales');

if (!fs.existsSync(localesDir)){
    fs.mkdirSync(localesDir, { recursive: true });
}

// RESTRICTED LIST: 8 Major Languages
const languages = ['fr', 'en', 'es', 'zh', 'de', 'ar', 'pt', 'ru'];

// Helper for default structure
const t = (langData) => ({
    common: { 
        welcome: langData.welcome || "Welcome", 
        description: langData.desc_meta || "Premium Digital Partner",
        language: "Language" 
    },
    nav: { 
        home: langData.nav_home || "Home", 
        services: langData.nav_services || "Services", 
        contact: langData.nav_contact || "Contact", 
        start: langData.nav_start || "Start" 
    },
    home: { 
        badge: langData.badge || "New Digital Agency",
        cta_project: langData.cta_project || "Start Project", 
        cta_contact: langData.cta_contact || "Contact Us",
        hero: { 
            title: langData.hero_title || "Digital,", 
            subtitle: langData.hero_subtitle || "Reinvented.", 
            description: langData.hero_desc || "We build immersive digital experiences that propel your brand into the future.", 
            cta_primary: langData.cta_primary || "Discover Services", 
            cta_secondary: langData.cta_secondary || "Start a Project" 
        },
        features: {
            title: langData.feat_title || "Why Choose Us?",
            subtitle: langData.feat_subtitle || "Holistic approach combining design, performance, and strategy.",
            strategy: { 
                title: langData.feat_strat_title || "Strategy", 
                desc: langData.feat_strat_desc || "We provide in-depth market analysis and data-driven strategies to ensure sustainable growth for your business." 
            },
            global: { 
                title: langData.feat_glob_title || "Global Reach", 
                desc: langData.feat_glob_desc || "A truly international perspective with solutions adapted to global markets and local cultures." 
            },
            tech: { 
                title: langData.feat_tech_title || "Modern Stack", 
                desc: langData.feat_tech_desc || "Cutting-edge technologies including React 19, Node.js, and Next.js for maximum performance." 
            },
            mobile: { 
                title: langData.feat_mob_title || "Mobile First", 
                desc: langData.feat_mob_desc || "Seamless and responsive experiences across all devices, from mobile phones to large desktop screens." 
            }
        },
        process: {
            title: langData.proc_title || "Our Process",
            steps: {
                discovery: { title: langData.proc_1_title || "1. Discovery", desc: langData.proc_1_desc || "Audit & Needs." },
                design: { title: langData.proc_2_title || "2. Design", desc: langData.proc_2_desc || "UI/UX & Prototyping." },
                dev: { title: langData.proc_3_title || "3. Development", desc: langData.proc_3_desc || "Clean Code." },
                launch: { title: langData.proc_4_title || "4. Launch", desc: langData.proc_4_desc || "Deployment & QA." }
            }
        },
        cta_final: { title: langData.cta_final_title || "Ready?", button: langData.cta_final_btn || "Get Quote" }
    },
    services: {
        title: langData.serv_title || "Our Expertise", 
        subtitle: langData.serv_subtitle || "Interactive solutions.",
        web: { title: langData.serv_web_title || "Websites", desc: langData.serv_web_desc || "High performance." },
        mobile: { 
            title: langData.serv_mob_title || "Mobile Apps", desc: langData.serv_mob_desc || "iOS & Android.",
            features: { native: langData.serv_mob_native || "Native", cross: langData.serv_mob_cross || "Cross-platform", uiux: "UI/UX" }
        },
        logo: { 
            title: langData.serv_logo_title || "Branding", desc: langData.serv_logo_desc || "Logos & Identity.",
            features: { vector: "Vector", guidelines: langData.serv_logo_guide || "Guidelines", revisions: "Revisions" }
        },
        preview: {
            phone: {
                welcome_back: langData.phone_welcome || "Welcome back!",
                uptime: langData.phone_uptime || "Server Uptime",
                new_users: langData.phone_users || "New Users",
                revenue: langData.phone_revenue || "Total Revenue",
                growth: langData.phone_growth || "+12% this week",
                role_1: langData.phone_role1 || "Designer",
                role_2: langData.phone_role2 || "Developer"
            },
            web: {
                nav_new: langData.web_new || "New",
                nav_men: langData.web_men || "Men",
                nav_women: langData.web_women || "Women",
                hero_tag: langData.web_tag || "NEW COLLECTION",
                hero_title_1: langData.web_h1 || "RUN THE",
                hero_title_2: langData.web_h2 || "STREETS.",
                btn_shop: langData.web_shop || "SHOP NOW"
            },
            logo: {
                config: langData.logo_config || "Configurator",
                live: langData.logo_live || "Live Preview",
                shape: langData.logo_shape || "Shape",
                color: langData.logo_color || "Color",
                modern: langData.logo_modern || "Modern",
                classic: langData.logo_classic || "Classic",
                tech: langData.logo_tech || "Tech"
            }
        }
    },
    contact: {
        title: langData.cont_title || "Let's talk.", 
        subtitle: langData.cont_subtitle || "Response in 24h.",
        info: { hq: "Paris", availability: "Worldwide", email_label: "Email", quote: "Work with love.", quote_role: "Inspiration" },
        form: { 
            name: langData.form_name || "Name", 
            email: "Email", subject: "Subject", 
            message: langData.form_msg || "Message", 
            send: langData.form_send || "Send", 
            success: langData.form_sent || "Sent!", 
            error: "Error" 
        }
    }
});

// COMPREHENSIVE DICTIONARIES FOR THE 8 LANGUAGES
const dictionaries = {
  fr: {
      welcome: "Bienvenue", nav_home: "Accueil", nav_services: "Services", nav_contact: "Contact", nav_start: "Démarrer",
      hero_title: "Le Digital,", hero_subtitle: "Réinventé.", hero_desc: "Nous créons des expériences digitales immersives qui propulsent votre marque.",
      badge: "Agence Digitale", cta_primary: "Nos Services", cta_secondary: "Lancer un Projet",
      
      feat_title: "Pourquoi nous ?", feat_subtitle: "Une approche holistique : design, performance et stratégie.",
      feat_strat_title: "Stratégie", feat_strat_desc: "Analyse de marché approfondie pour une croissance durable.",
      feat_glob_title: "International", feat_glob_desc: "Solutions adaptées aux marchés mondiaux et cultures locales.",
      feat_tech_title: "Technologie", feat_tech_desc: "Stack moderne : React 19, Node.js pour une performance maximale.",
      feat_mob_title: "Mobile First", feat_mob_desc: "Expérience fluide sur tous les appareils, du mobile au desktop.",
      
      proc_title: "Notre Processus", 
      proc_1_title: "1. Découverte", proc_1_desc: "Audit et besoins.",
      proc_2_title: "2. Design", proc_2_desc: "UI/UX et Prototypes.",
      proc_3_title: "3. Dév", proc_3_desc: "Code de qualité.",
      proc_4_title: "4. Lancement", proc_4_desc: "Mise en ligne.",
      
      serv_title: "Nos Services", serv_subtitle: "Solutions sur mesure.",
      serv_web_title: "Sites Web", serv_web_desc: "Haute performance.",
      serv_mob_title: "Apps Mobiles", serv_mob_desc: "iOS & Android.",
      serv_logo_title: "Branding", serv_logo_desc: "Identité Visuelle.",
      
      cont_title: "Parlons-en", cont_subtitle: "Réponse sous 24h.",
      form_send: "Envoyer", form_name: "Nom", form_msg: "Message", form_sent: "Envoyé !",
      
      phone_welcome: "Bon retour !", phone_uptime: "Disponibilité", phone_users: "Nouveaux", phone_revenue: "Revenus", phone_growth: "+12% cette sem.",
      web_new: "Nouveautés", web_men: "Hommes", web_women: "Femmes", web_tag: "NOUVELLE COLLECTION", web_h1: "DOMINEZ LA", web_h2: "RUE.", web_shop: "ACHETER",
      logo_config: "Configurateur", logo_live: "Aperçu", logo_shape: "Forme", logo_color: "Couleur"
  },
  en: { 
      // English is the fallback, but explicit keys ensure consistency
      feat_strat_desc: "We provide in-depth market analysis and data-driven strategies to ensure sustainable growth for your business.",
      feat_glob_desc: "A truly international perspective with solutions adapted to global markets and local cultures.",
      feat_tech_desc: "Cutting-edge technologies including React 19, Node.js, and Next.js for maximum performance.",
      feat_mob_desc: "Seamless and responsive experiences across all devices, from mobile phones to large desktop screens."
  },
  es: {
      welcome: "Bienvenido", nav_home: "Inicio", nav_services: "Servicios", nav_contact: "Contacto", nav_start: "Empezar",
      hero_title: "Digital,", hero_subtitle: "Reinventado.", hero_desc: "Experiencias digitales inmersivas.",
      badge: "Nueva Agencia", cta_primary: "Descubrir", cta_secondary: "Iniciar Proyecto",

      feat_title: "¿Por qué nosotros?", feat_subtitle: "Enfoque integral de diseño y estrategia.",
      feat_strat_title: "Estrategia", feat_strat_desc: "Análisis de mercado profundo y estrategias basadas en datos.",
      feat_glob_title: "Global", feat_glob_desc: "Alcance internacional con soluciones adaptadas a cada cultura.",
      feat_tech_title: "Tecnología", feat_tech_desc: "Stack moderno con React 19 y Node.js para máximo rendimiento.",
      feat_mob_title: "Móvil Primero", feat_mob_desc: "Experiencias fluidas y responsivas en todos los dispositivos.",
      
      proc_title: "Proceso", 
      proc_1_title: "1. Descubrimiento", proc_1_desc: "Análisis.",
      proc_2_title: "2. Diseño", proc_2_desc: "UI/UX.", 
      proc_3_title: "3. Desarrollo", proc_3_desc: "Código.",
      proc_4_title: "4. Lanzamiento", proc_4_desc: "Despliegue.",
      
      serv_title: "Servicios", serv_subtitle: "Soluciones interactivas.",
      serv_web_title: "Web", serv_web_desc: "Alto rendimiento.", 
      serv_mob_title: "Móvil", serv_mob_desc: "iOS & Android.",
      serv_logo_title: "Branding", serv_logo_desc: "Logotipos.",
      
      cont_title: "Contactar", cont_subtitle: "Respuesta en 24h.",
      form_send: "Enviar", form_name: "Nombre", form_msg: "Mensaje", form_sent: "¡Enviado!",
      
      phone_welcome: "¡Bienvenido!", phone_uptime: "Actividad", phone_users: "Usuarios", phone_revenue: "Ingresos",
      web_new: "Nuevo", web_men: "Hombres", web_women: "Mujeres", web_tag: "NUEVA COLECCIÓN", web_shop: "COMPRAR",
      logo_config: "Configurador", logo_live: "Vista Previa", logo_shape: "Forma", logo_color: "Color"
  },
  de: {
      welcome: "Willkommen", nav_home: "Startseite", nav_services: "Leistungen", nav_contact: "Kontakt", nav_start: "Start",
      hero_title: "Digital,", hero_subtitle: "Neu erfunden.", hero_desc: "Wir bauen immersive digitale Erlebnisse.",
      badge: "Digitalagentur", cta_primary: "Entdecken", cta_secondary: "Projekt Starten",

      feat_title: "Warum wir?", feat_subtitle: "Ganzheitlicher Ansatz für Design und Strategie.",
      feat_strat_title: "Strategie", feat_strat_desc: "Tiefgehende Marktanalyse und datengestützte Strategien.",
      feat_glob_title: "Global", feat_glob_desc: "Internationale Perspektive, angepasst an lokale Märkte.",
      feat_tech_title: "Technologie", feat_tech_desc: "Modernster Stack mit React 19 und Node.js für Leistung.",
      feat_mob_title: "Mobile First", feat_mob_desc: "Nahtlose Erlebnisse auf allen Geräten, vom Handy bis zum Desktop.",
      
      proc_title: "Prozess", 
      proc_1_title: "1. Analyse", proc_1_desc: "Bedarf.",
      proc_2_title: "2. Design", proc_2_desc: "Entwürfe.",
      proc_3_title: "3. Entwicklung", proc_3_desc: "Code.",
      proc_4_title: "4. Launch", proc_4_desc: "Start.",

      serv_title: "Leistungen", serv_subtitle: "Interaktive Lösungen.",
      serv_web_title: "Websites", serv_web_desc: "Hohe Leistung.", 
      serv_mob_title: "Apps", serv_mob_desc: "iOS & Android.",
      serv_logo_title: "Branding", serv_logo_desc: "Identität.",

      cont_title: "Kontakt", cont_subtitle: "Antwort in 24h.", 
      form_send: "Senden", form_name: "Name", form_msg: "Nachricht", form_sent: "Gesendet!",
      
      phone_welcome: "Willkommen!", phone_uptime: "Laufzeit", phone_users: "Benutzer", phone_revenue: "Einnahmen",
      web_new: "Neu", web_men: "Herren", web_women: "Damen", web_tag: "NEUE KOLLEKTION", web_shop: "KAUFEN",
      logo_config: "Konfigurator", logo_live: "Vorschau", logo_shape: "Form", logo_color: "Farbe"
  },
  pt: {
      welcome: "Bem-vindo", nav_home: "Início", nav_services: "Serviços", nav_contact: "Contato", nav_start: "Começar",
      hero_title: "Digital,", hero_subtitle: "Reinventado.", hero_desc: "Construímos experiências digitais imersivas.",
      badge: "Agência Digital", cta_primary: "Serviços", cta_secondary: "Projeto",

      feat_title: "Por que nós?", feat_subtitle: "Abordagem holística de design e estratégia.",
      feat_strat_title: "Estratégia", feat_strat_desc: "Análise de mercado aprofundada para crescimento sustentável.",
      feat_glob_title: "Global", feat_glob_desc: "Perspectiva internacional com soluções adaptadas.",
      feat_tech_title: "Tecnologia", feat_tech_desc: "Stack moderno incluindo React 19 e Node.js.",
      feat_mob_title: "Mobile First", feat_mob_desc: "Experiências fluidas em todos os dispositivos.",
      
      proc_title: "Processo", 
      proc_1_title: "1. Descoberta", proc_1_desc: "Análise.",
      proc_2_title: "2. Design", proc_2_desc: "UI/UX.",
      proc_3_title: "3. Desenv.", proc_3_desc: "Código.",
      proc_4_title: "4. Lançamento", proc_4_desc: "Deploy.",

      serv_title: "Serviços", serv_subtitle: "Soluções digitais.",
      serv_web_title: "Web", serv_web_desc: "Performance.",
      serv_mob_title: "Mobile", serv_mob_desc: "iOS & Android.",
      serv_logo_title: "Branding", serv_logo_desc: "Logotipos.",

      cont_title: "Contato", cont_subtitle: "Resposta em 24h.", 
      form_send: "Enviar", form_name: "Nome", form_msg: "Mensagem", form_sent: "Enviado!",
      
      phone_welcome: "Bem-vindo!", phone_uptime: "Uptime", phone_users: "Usuários", phone_revenue: "Receita",
      web_new: "Novo", web_men: "Homens", web_women: "Mulheres", web_tag: "NOVA COLEÇÃO", web_shop: "COMPRAR",
      logo_config: "Configurador", logo_live: "Visualizar", logo_shape: "Forma", logo_color: "Cor"
  },
  zh: {
      welcome: "欢迎", nav_home: "首页", nav_services: "服务", nav_contact: "联系", nav_start: "开始",
      hero_title: "数字体验，", hero_subtitle: "重新定义。", hero_desc: "我们打造身临其境的数字体验，推动您的品牌走向未来。",
      badge: "新锐数字代理", cta_primary: "探索服务", cta_secondary: "启动项目",

      feat_title: "为什么选择我们？", feat_subtitle: "设计、性能与战略的完美结合。",
      feat_strat_title: "战略规划", feat_strat_desc: "提供深入的市场分析和数据驱动的策略，确保业务持续增长。",
      feat_glob_title: "全球视野", feat_glob_desc: "真正国际化的视角，提供适应全球市场和本土文化的解决方案。",
      feat_tech_title: "前沿技术", feat_tech_desc: "采用 React 19, Node.js 等顶尖技术栈，实现极致性能。",
      feat_mob_title: "移动优先", feat_mob_desc: "从手机到桌面大屏，提供无缝且响应迅速的流畅体验。",
      
      proc_title: "我们的流程", 
      proc_1_title: "1. 探索", proc_1_desc: "需求分析。",
      proc_2_title: "2. 设计", proc_2_desc: "UI/UX 原型。",
      proc_3_title: "3. 开发", proc_3_desc: "高质量代码。",
      proc_4_title: "4. 发布", proc_4_desc: "部署上线。",

      serv_title: "专业服务", serv_subtitle: "交互式解决方案。",
      serv_web_title: "网站开发", serv_web_desc: "高性能体验。",
      serv_mob_title: "移动应用", serv_mob_desc: "iOS 和 Android。",
      serv_logo_title: "品牌设计", serv_logo_desc: "Logo 与 VI。",

      cont_title: "联系我们", cont_subtitle: "24小时内回复。", 
      form_send: "发送", form_name: "姓名", form_msg: "留言", form_sent: "已发送！",
      
      phone_welcome: "欢迎回来！", phone_uptime: "运行时间", phone_users: "新用户", phone_revenue: "总收入",
      web_new: "新品", web_men: "男士", web_women: "女士", web_tag: "新系列", web_shop: "立即购买",
      logo_config: "配置器", logo_live: "预览", logo_shape: "形状", logo_color: "颜色"
  },
  ru: {
      welcome: "Добро пожаловать", nav_home: "Главная", nav_services: "Услуги", nav_contact: "Контакты", nav_start: "Начать",
      hero_title: "Цифра,", hero_subtitle: "Переосмыслена.", hero_desc: "Мы создаем захватывающий цифровой опыт для будущего вашего бренда.",
      badge: "Digital Агентство", cta_primary: "Услуги", cta_secondary: "Начать проект",

      feat_title: "Почему мы?", feat_subtitle: "Комплексный подход: дизайн, эффективность и стратегия.",
      feat_strat_title: "Стратегия", feat_strat_desc: "Глубокий анализ рынка и стратегии на основе данных для роста.",
      feat_glob_title: "Весь Мир", feat_glob_desc: "Международный опыт с решениями, адаптированными под локальные рынки.",
      feat_tech_title: "Технологии", feat_tech_desc: "Современный стек: React 19, Node.js для максимальной скорости.",
      feat_mob_title: "Мобайл", feat_mob_desc: "Безупречная работа на всех устройствах, от телефона до десктопа.",
      
      proc_title: "Процесс", 
      proc_1_title: "1. Анализ", proc_1_desc: "Аудит.",
      proc_2_title: "2. Дизайн", proc_2_desc: "UI/UX.",
      proc_3_title: "3. Код", proc_3_desc: "Разработка.",
      proc_4_title: "4. Запуск", proc_4_desc: "Деплой.",

      serv_title: "Услуги", serv_subtitle: "Интерактивные решения.",
      serv_web_title: "Сайты", serv_web_desc: "Быстрые и мощные.",
      serv_mob_title: "Приложения", serv_mob_desc: "iOS и Android.",
      serv_logo_title: "Брендинг", serv_logo_desc: "Логотипы.",

      cont_title: "Свяжитесь", cont_subtitle: "Ответ за 24ч.", 
      form_send: "Отправить", form_name: "Имя", form_msg: "Сообщение", form_sent: "Отправлено!",
      
      phone_welcome: "Привет!", phone_uptime: "Аптайм", phone_users: "Юзеры", phone_revenue: "Доход",
      web_new: "Новое", web_men: "Мужское", web_women: "Женское", web_tag: "НОВАЯ КОЛЛЕКЦИЯ", web_shop: "КУПИТЬ",
      logo_config: "Конфиг", logo_live: "Превью", logo_shape: "Форма", logo_color: "Цвет"
  },
  ar: {
      welcome: "مرحباً", nav_home: "الرئيسية", nav_services: "الخدمات", nav_contact: "اتصل بنا", nav_start: "ابدأ",
      hero_title: "رقمي،", hero_subtitle: "أعيد اختراعه.", hero_desc: "نقوم ببناء تجارب رقمية غامرة تدفع علامتك التجارية نحو المستقبل.",
      badge: "وكالة رقمية", cta_primary: "اكتشف الخدمات", cta_secondary: "ابدأ مشروعاً",

      feat_title: "لماذا تختارنا؟", feat_subtitle: "نهج شامل يجمع بين التصميم والأداء والاستراتيجية.",
      feat_strat_title: "إستراتيجية", feat_strat_desc: "نقدم تحليلاً متعمقاً للسوق واستراتيجيات مبنية على البيانات.",
      feat_glob_title: "وصول عالمي", feat_glob_desc: "منظور دولي حقيقي مع حلول تتكيف مع الأسواق والثقافات المحلية.",
      feat_tech_title: "تقنيات حديثة", feat_tech_desc: "أحدث التقنيات بما في ذلك React 19 و Node.js لأقصى أداء.",
      feat_mob_title: "الجوال أولاً", feat_mob_desc: "تجارب سلسة وسريعة الاستجابة عبر جميع الأجهزة والشاشات.",
      
      proc_title: "عمليتنا", 
      proc_1_title: "1. اكتشاف", proc_1_desc: "تحليل الاحتياجات.",
      proc_2_title: "2. تصميم", proc_2_desc: "واجهة المستخدم.",
      proc_3_title: "3. تطوير", proc_3_desc: "كتابة الكود.",
      proc_4_title: "4. إطلاق", proc_4_desc: "النشر.",

      serv_title: "خدماتنا", serv_subtitle: "حلول تفاعلية.",
      serv_web_title: "مواقع ويب", serv_web_desc: "أداء عالي.",
      serv_mob_title: "تطبيقات جوال", serv_mob_desc: "iOS و Android.",
      serv_logo_title: "هوية تجارية", serv_logo_desc: "شعارات.",

      cont_title: "تحدث معنا", cont_subtitle: "الرد خلال 24 ساعة.", 
      form_send: "إرسال", form_name: "الاسم", form_msg: "الرسالة", form_sent: "تم الإرسال!",
      
      phone_welcome: "مرحباً!", phone_uptime: "وقت التشغيل", phone_users: "مستخدمين", phone_revenue: "الإيرادات",
      web_new: "جديد", web_men: "رجال", web_women: "نساء", web_tag: "مجموعة جديدة", web_shop: "تسوق الآن",
      logo_config: "تكوين", logo_live: "معاينة", logo_shape: "شكل", logo_color: "لون"
  }
};

languages.forEach(lang => {
    let langSpecificData = dictionaries[lang] || {};
    const content = t(langSpecificData);
    fs.writeFileSync(path.join(localesDir, `${lang}.json`), JSON.stringify(content, null, 2));
    console.log(`Generated ${lang}.json`);
});
