import type { Project } from '../../types';

// lightweight local t helper (fallback) — reconstruct a LocalizedText object
function t(fr: string, en = '', es = '', zh = '', de = '', ar = '', pt = '', ru = '') {
    return { fr, en, es, zh, de, ar, pt, ru };
}

export const fluxOS: Project = {
    id: 'flux-os-icons',
    title: 'Flux OS',
    client: 'Open Source Community',
    category: 'design',
    year: '2023',
    shortDescription: t("Set d'icônes et interface pour un OS Linux open-source.", "Icon set and interface for an open-source Linux OS.", "Conjunto de iconos e interfaz para un sistema operativo Linux.", "开源Linux操作系统的图标集和界面。", "Icon-Set und Schnittstelle für ein Open-Source-Linux-Betriebssystem.", "مجموعة أيقونات وواجهة لنظام تشغيل Linux مفتوح المصدر.", "Conjunto de ícones e interface para um sistema operacional Linux.", "Набор иконок и интерфейс для ОС Linux с открытым исходным кодом."),
    fullDescription: t("Refonte complète de l'expérience utilisateur de bureau Linux avec un pack d'icônes vectorielles adaptatives.", "Complete redesign of the Linux desktop user experience with an adaptive vector icon pack.", "Rediseño completo de la experiencia de usuario.", "Linux桌面用户体验的完全重新设计。", "Komplette Neugestaltung der Linux-Desktop-Benutzererfahrung.", "إعادة تصميم كاملة لتجربة مستخدم سطح مكتب Linux.", "Redesenho completo da experiência do usuário de desktop Linux.", "Полный редизайн пользовательского опыта рабочего стола Linux."),
    heroImage: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80&w=800',
    images: ['https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80'],
    tags: ['Iconography', 'System Design', 'Linux'],
    challenge: t("Unifier des applications hétérogènes.", "Unify heterogeneous applications.", "Unificar aplicaciones heterogéneas.", "统一异构应用程序。", "Vereinheitlichung heterogener Anwendungen.", "توحيد التطبيقات غير المتجانسة.", "Unificar aplicativos heterogêneos.", "Объединить разнородные приложения."),
    solution: t("Une grille d'icônes stricte mais expressive.", "A strict but expressive icon grid.", "Una cuadrícula de iconos estricta.", "严格但富有表现力的图标网格。", "Ein strenges, aber ausdrucksstarkes Symbolraster.", "شبكة أيقونات صارمة ولكن معبرة.", "Uma grade de ícones estrita, mas expressiva.", "Строгая, но выразительная сетка иконок."),
    result: t("Téléchargé 500k fois sur GitHub.", "Downloaded 500k times on GitHub.", "Descargado 500k veces.", "在GitHub上下载了50万次。", "500k Mal auf GitHub heruntergeladen.", "تم تنزيله 500 ألف مرة.", "Baixado 500k vezes no GitHub.", "Скачано 500 тысяч раз на GitHub."),
    timeline: [],
    problem: t("Les icônes Linux manquent souvent de cohérence.", "Linux icons often lack consistency.", "Los iconos de Linux a menudo carecen de coherencia.", "Linux图标通常缺乏一致性。", "Linux-Icons mangel oft an Konsistenz.", "غالبًا ما تفتقر أيقونات Linux إلى الاتساق.", "Os ícones do Linux geralmente não têm consistência.", "Иконки Linux часто лишены согласованности."),
    goal: t("Créer un langage visuel universel.", "Create a universal visual language.", "Crear un lenguaje visual universal.", "创造通用的视觉语言。", "Eine universelle visuelle Sprache schaffen.", "إنشاء لغة بصرية عالمية.", "Criar uma linguagem visual universal.", "Создать универсальный визуальный язык."),
    userJourney: {
        title: t("Philosophie Open-Source", "Open-Source Philosophy", "Filosofía de Código Abierto", "开源哲学", "Open-Source-Philosophie", "فلسفة المصدر المفتوح", "Filosofia Open-Source", "Философия Open-Source"),
        steps: [
            {
                title: t("Clarté", "Clarity", "Claridad", "清晰度", "Klarheit", "وضوح", "Clareza", "Ясность"),
                description: t("Identification instantanée du type de fichier.", "Instant identification of file type.", "Identificación instantánea.", "即时识别。", "Sofortige Identifizierung.", "تحديد فوري.", "Identificação instantânea.", "Мгновенная идентификация."),
                icon: 'Eye'
            },
            {
                title: t("Modularité", "Modularity", "Modularidad", "模块化", "Modularität", "نمطية", "Modularidade", "Модульность"),
                description: t("Chaque icône peut être adaptée par la communauté.", "Each icon can be adapted by the community.", "Cada icono puede ser adaptado.", "每个图标都可以由社区改编。", "Jedes Symbol kann von der Community angepasst werden.", "يمكن تكييف كل أيقونة من قبل المجتمع.", "Cada ícone pode ser adaptado.", "Каждая иконка может быть адаптирована."),
                icon: 'GitBranch'
            }
        ]
    },
    wireframes: {
        description: t("Construction géométrique stricte sur une grille de 24px.", "Strict geometric construction on a 24px grid.", "Construcción geométrica estricta.", "24px网格上的严格几何结构。", "Strenge geometrische Konstruktion auf einem 24px-Raster.", "بناء هندسي صارم على شبكة 24 بكسل.", "Construção geométrica estrita.", "Строгое геометрическое построение."),
        images: [
            'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80&w=600'
        ]
    },
    mockups: {
        desktop: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200',
        mobile: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80&w=600',
        description: t("Un environnement de bureau sombre, apaisant et productif pour les développeurs.", "A dark, soothing, and productive desktop environment for developers.", "Un entorno de escritorio oscuro.", "一个黑暗、舒缓、高效的开发人员桌面环境。", "Eine dunkle, beruhigende Desktop-Umgebung.", "بيئة سطح مكتب مظلمة وهادئة ومنتجة.", "Um ambiente de desktop escuro.", "Темная, успокаивающая среда.")
    },
    tools: ['Figma', 'Inkscape']
} as Project;
