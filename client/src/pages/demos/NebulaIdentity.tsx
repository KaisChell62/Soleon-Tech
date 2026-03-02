import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, ArrowRight, Eye, Layers, Palette, Type, Grid3X3, Zap } from 'lucide-react';

const txt: Record<string, Record<string, string>> = {
  fr: {
    brand: 'Nebula AI', tagline: 'Identité de Marque', back: 'Retour', caseStudy: 'Étude de cas',
    overview: 'Vue d\'ensemble', overviewDesc: 'Création d\'une identité visuelle complète pour une startup d\'intelligence artificielle éthique.',
    client: 'Client', duration: 'Durée', role: 'Rôle', deliverables: 'Livrables',
    weeks: '6 semaines', brandDesigner: 'Brand Designer', brandBook: 'Brand Book complet',
    phase: 'Phase', strategy: 'Stratégie de marque', strategyDesc: 'Définition du positionnement et des valeurs fondamentales',
    problem: 'Le Problème', problemDesc: 'Les startups IA utilisent toutes les mêmes codes visuels : bleu froid, circuits imprimés, robots. Nebula voulait se démarquer avec une approche humaine.',
    solution: 'Notre Solution', solutionDesc: 'Créer une identité "Bio-Digital" : organique, fluide et humaine, qui inspire confiance plutôt que crainte.',
    moodboard: 'Moodboard', moodboardDesc: 'Exploration des directions artistiques',
    logoProcess: 'Évolution du Logo', logoProcessDesc: 'Du croquis au logo final',
    sketch: 'Croquis', refinement: 'Raffinement', final: 'Final',
    colorSystem: 'Système de Couleurs', colorSystemDesc: 'Une palette qui évoque la technologie vivante',
    primary: 'Principale', secondary: 'Secondaire', accent: 'Accent', neutral: 'Neutre',
    typography: 'Typographie', typographyDesc: 'Hiérarchie typographique claire et moderne',
    display: 'Display', heading: 'Titres', body: 'Corps', caption: 'Légendes',
    brandElements: 'Éléments de Marque', brandElementsDesc: 'Motifs et éléments graphiques distinctifs',
    applications: 'Applications', applicationsDesc: 'Déclinaison sur tous les supports',
    stationery: 'Papeterie', digital: 'Digital', environmental: 'Environnemental',
    results: 'Résultats', resultsDesc: 'Impact mesurable de la nouvelle identité',
    partnersGained: 'Partenaires acquis', pressFeature: 'Article DesignWeek', brandConsistency: 'Score de cohérence',
    next: 'Projet suivant', viewFullBook: 'Voir le Brand Book'
  },
  en: {
    brand: 'Nebula AI', tagline: 'Brand Identity', back: 'Back', caseStudy: 'Case Study',
    overview: 'Overview', overviewDesc: 'Creation of a complete visual identity for an ethical artificial intelligence startup.',
    client: 'Client', duration: 'Duration', role: 'Role', deliverables: 'Deliverables',
    weeks: '6 weeks', brandDesigner: 'Brand Designer', brandBook: 'Complete Brand Book',
    phase: 'Phase', strategy: 'Brand Strategy', strategyDesc: 'Definition of positioning and core values',
    problem: 'The Problem', problemDesc: 'AI startups all use the same visual codes: cold blue, circuit boards, robots. Nebula wanted to stand out with a human approach.',
    solution: 'Our Solution', solutionDesc: 'Create a "Bio-Digital" identity: organic, fluid and human, inspiring trust rather than fear.',
    moodboard: 'Moodboard', moodboardDesc: 'Exploring artistic directions',
    logoProcess: 'Logo Evolution', logoProcessDesc: 'From sketch to final logo',
    sketch: 'Sketch', refinement: 'Refinement', final: 'Final',
    colorSystem: 'Color System', colorSystemDesc: 'A palette evoking living technology',
    primary: 'Primary', secondary: 'Secondary', accent: 'Accent', neutral: 'Neutral',
    typography: 'Typography', typographyDesc: 'Clear and modern typographic hierarchy',
    display: 'Display', heading: 'Headings', body: 'Body', caption: 'Captions',
    brandElements: 'Brand Elements', brandElementsDesc: 'Distinctive patterns and graphic elements',
    applications: 'Applications', applicationsDesc: 'Deployment across all media',
    stationery: 'Stationery', digital: 'Digital', environmental: 'Environmental',
    results: 'Results', resultsDesc: 'Measurable impact of the new identity',
    partnersGained: 'Partners gained', pressFeature: 'DesignWeek feature', brandConsistency: 'Consistency score',
    next: 'Next project', viewFullBook: 'View Brand Book'
  },
  es: { brand: 'Nebula AI', tagline: 'Identidad de Marca', back: 'Volver', caseStudy: 'Caso de Estudio', overview: 'Visión general', overviewDesc: 'Creación de identidad visual completa para una startup de IA ética.', client: 'Cliente', duration: 'Duración', role: 'Rol', deliverables: 'Entregables', weeks: '6 semanas', brandDesigner: 'Diseñador de Marca', brandBook: 'Brand Book completo', phase: 'Fase', strategy: 'Estrategia de marca', strategyDesc: 'Definición del posicionamiento', problem: 'El Problema', problemDesc: 'Las startups de IA usan los mismos códigos visuales.', solution: 'Nuestra Solución', solutionDesc: 'Crear una identidad "Bio-Digital".', moodboard: 'Moodboard', moodboardDesc: 'Exploración de direcciones artísticas', logoProcess: 'Evolución del Logo', logoProcessDesc: 'Del boceto al logo final', sketch: 'Boceto', refinement: 'Refinamiento', final: 'Final', colorSystem: 'Sistema de Colores', colorSystemDesc: 'Una paleta que evoca tecnología viva', primary: 'Primario', secondary: 'Secundario', accent: 'Acento', neutral: 'Neutro', typography: 'Tipografía', typographyDesc: 'Jerarquía tipográfica clara', display: 'Display', heading: 'Títulos', body: 'Cuerpo', caption: 'Leyendas', brandElements: 'Elementos de Marca', brandElementsDesc: 'Patrones y elementos gráficos', applications: 'Aplicaciones', applicationsDesc: 'Despliegue en todos los medios', stationery: 'Papelería', digital: 'Digital', environmental: 'Ambiental', results: 'Resultados', resultsDesc: 'Impacto medible', partnersGained: 'Socios ganados', pressFeature: 'Artículo DesignWeek', brandConsistency: 'Puntuación de coherencia', next: 'Siguiente proyecto', viewFullBook: 'Ver Brand Book' },
  de: { brand: 'Nebula AI', tagline: 'Markenidentität', back: 'Zurück', caseStudy: 'Fallstudie', overview: 'Überblick', overviewDesc: 'Erstellung einer visuellen Identität für ein KI-Startup.', client: 'Kunde', duration: 'Dauer', role: 'Rolle', deliverables: 'Lieferungen', weeks: '6 Wochen', brandDesigner: 'Markendesigner', brandBook: 'Vollständiges Brand Book', phase: 'Phase', strategy: 'Markenstrategie', strategyDesc: 'Definition der Positionierung', problem: 'Das Problem', problemDesc: 'KI-Startups nutzen die gleichen visuellen Codes.', solution: 'Unsere Lösung', solutionDesc: 'Eine "Bio-Digital" Identität schaffen.', moodboard: 'Moodboard', moodboardDesc: 'Erkundung künstlerischer Richtungen', logoProcess: 'Logo-Evolution', logoProcessDesc: 'Von der Skizze zum finalen Logo', sketch: 'Skizze', refinement: 'Verfeinerung', final: 'Final', colorSystem: 'Farbsystem', colorSystemDesc: 'Eine Palette lebendiger Technologie', primary: 'Primär', secondary: 'Sekundär', accent: 'Akzent', neutral: 'Neutral', typography: 'Typografie', typographyDesc: 'Klare typografische Hierarchie', display: 'Display', heading: 'Überschriften', body: 'Fließtext', caption: 'Beschriftungen', brandElements: 'Markenelemente', brandElementsDesc: 'Muster und grafische Elemente', applications: 'Anwendungen', applicationsDesc: 'Einsatz auf allen Medien', stationery: 'Briefpapier', digital: 'Digital', environmental: 'Umgebung', results: 'Ergebnisse', resultsDesc: 'Messbarer Einfluss', partnersGained: 'Gewonnene Partner', pressFeature: 'DesignWeek Artikel', brandConsistency: 'Konsistenzwert', next: 'Nächstes Projekt', viewFullBook: 'Brand Book ansehen' },
  zh: { brand: 'Nebula AI', tagline: '品牌识别', back: '返回', caseStudy: '案例研究', overview: '概述', overviewDesc: '为道德AI初创公司创建完整的视觉识别。', client: '客户', duration: '时长', role: '角色', deliverables: '交付物', weeks: '6周', brandDesigner: '品牌设计师', brandBook: '完整品牌手册', phase: '阶段', strategy: '品牌战略', strategyDesc: '定义定位和核心价值', problem: '问题', problemDesc: 'AI初创公司都使用相同的视觉代码。', solution: '我们的解决方案', solutionDesc: '创建"生物数字"身份。', moodboard: '情绪板', moodboardDesc: '探索艺术方向', logoProcess: 'Logo演变', logoProcessDesc: '从草图到最终Logo', sketch: '草图', refinement: '细化', final: '最终', colorSystem: '颜色系统', colorSystemDesc: '唤起活技术的调色板', primary: '主要', secondary: '次要', accent: '强调', neutral: '中性', typography: '字体', typographyDesc: '清晰的字体层次', display: '展示', heading: '标题', body: '正文', caption: '说明', brandElements: '品牌元素', brandElementsDesc: '独特的图案和图形元素', applications: '应用', applicationsDesc: '在所有媒体上部署', stationery: '文具', digital: '数字', environmental: '环境', results: '结果', resultsDesc: '可衡量的影响', partnersGained: '获得的合作伙伴', pressFeature: 'DesignWeek专题', brandConsistency: '一致性分数', next: '下一个项目', viewFullBook: '查看品牌手册' },
  ar: { brand: 'Nebula AI', tagline: 'هوية العلامة التجارية', back: 'رجوع', caseStudy: 'دراسة حالة', overview: 'نظرة عامة', overviewDesc: 'إنشاء هوية بصرية كاملة لشركة ذكاء اصطناعي.', client: 'العميل', duration: 'المدة', role: 'الدور', deliverables: 'التسليمات', weeks: '6 أسابيع', brandDesigner: 'مصمم العلامة التجارية', brandBook: 'كتاب العلامة التجارية', phase: 'مرحلة', strategy: 'استراتيجية العلامة', strategyDesc: 'تحديد الموقع والقيم', problem: 'المشكلة', problemDesc: 'تستخدم الشركات الناشئة نفس الرموز البصرية.', solution: 'حلنا', solutionDesc: 'إنشاء هوية "حيوية رقمية".', moodboard: 'لوحة المزاج', moodboardDesc: 'استكشاف الاتجاهات الفنية', logoProcess: 'تطور الشعار', logoProcessDesc: 'من الرسم إلى الشعار النهائي', sketch: 'رسم', refinement: 'تحسين', final: 'نهائي', colorSystem: 'نظام الألوان', colorSystemDesc: 'لوحة تستحضر التكنولوجيا الحية', primary: 'أساسي', secondary: 'ثانوي', accent: 'تمييز', neutral: 'محايد', typography: 'الطباعة', typographyDesc: 'تسلسل هرمي واضح', display: 'عرض', heading: 'عناوين', body: 'نص', caption: 'تعليقات', brandElements: 'عناصر العلامة', brandElementsDesc: 'أنماط وعناصر رسومية', applications: 'التطبيقات', applicationsDesc: 'النشر على جميع الوسائط', stationery: 'قرطاسية', digital: 'رقمي', environmental: 'بيئي', results: 'النتائج', resultsDesc: 'تأثير قابل للقياس', partnersGained: 'الشركاء المكتسبون', pressFeature: 'مقال DesignWeek', brandConsistency: 'درجة الاتساق', next: 'المشروع التالي', viewFullBook: 'عرض كتاب العلامة' },
  pt: { brand: 'Nebula AI', tagline: 'Identidade de Marca', back: 'Voltar', caseStudy: 'Estudo de Caso', overview: 'Visão geral', overviewDesc: 'Criação de identidade visual completa para uma startup de IA ética.', client: 'Cliente', duration: 'Duração', role: 'Função', deliverables: 'Entregas', weeks: '6 semanas', brandDesigner: 'Designer de Marca', brandBook: 'Brand Book completo', phase: 'Fase', strategy: 'Estratégia de marca', strategyDesc: 'Definição do posicionamento', problem: 'O Problema', problemDesc: 'Startups de IA usam os mesmos códigos visuais.', solution: 'Nossa Solução', solutionDesc: 'Criar uma identidade "Bio-Digital".', moodboard: 'Moodboard', moodboardDesc: 'Exploração de direções artísticas', logoProcess: 'Evolução do Logo', logoProcessDesc: 'Do esboço ao logo final', sketch: 'Esboço', refinement: 'Refinamento', final: 'Final', colorSystem: 'Sistema de Cores', colorSystemDesc: 'Uma paleta que evoca tecnologia viva', primary: 'Primária', secondary: 'Secundária', accent: 'Destaque', neutral: 'Neutro', typography: 'Tipografia', typographyDesc: 'Hierarquia tipográfica clara', display: 'Display', heading: 'Títulos', body: 'Corpo', caption: 'Legendas', brandElements: 'Elementos de Marca', brandElementsDesc: 'Padrões e elementos gráficos', applications: 'Aplicações', applicationsDesc: 'Implantação em todas as mídias', stationery: 'Papelaria', digital: 'Digital', environmental: 'Ambiental', results: 'Resultados', resultsDesc: 'Impacto mensurável', partnersGained: 'Parceiros conquistados', pressFeature: 'Artigo DesignWeek', brandConsistency: 'Pontuação de consistência', next: 'Próximo projeto', viewFullBook: 'Ver Brand Book' },
  ru: { brand: 'Nebula AI', tagline: 'Айдентика бренда', back: 'Назад', caseStudy: 'Кейс', overview: 'Обзор', overviewDesc: 'Создание визуальной идентичности для ИИ-стартапа.', client: 'Клиент', duration: 'Срок', role: 'Роль', deliverables: 'Результаты', weeks: '6 недель', brandDesigner: 'Бренд-дизайнер', brandBook: 'Полный брендбук', phase: 'Фаза', strategy: 'Стратегия бренда', strategyDesc: 'Определение позиционирования', problem: 'Проблема', problemDesc: 'ИИ-стартапы используют одинаковые визуальные коды.', solution: 'Наше решение', solutionDesc: 'Создать "Био-цифровую" идентичность.', moodboard: 'Мудборд', moodboardDesc: 'Исследование художественных направлений', logoProcess: 'Эволюция логотипа', logoProcessDesc: 'От эскиза к финальному логотипу', sketch: 'Эскиз', refinement: 'Доработка', final: 'Финал', colorSystem: 'Цветовая система', colorSystemDesc: 'Палитра живой технологии', primary: 'Основной', secondary: 'Вторичный', accent: 'Акцент', neutral: 'Нейтральный', typography: 'Типографика', typographyDesc: 'Четкая иерархия шрифтов', display: 'Дисплей', heading: 'Заголовки', body: 'Основной', caption: 'Подписи', brandElements: 'Элементы бренда', brandElementsDesc: 'Паттерны и графические элементы', applications: 'Применения', applicationsDesc: 'Развертывание на всех носителях', stationery: 'Канцелярия', digital: 'Цифровой', environmental: 'Среда', results: 'Результаты', resultsDesc: 'Измеримый эффект', partnersGained: 'Привлечённые партнёры', pressFeature: 'Статья DesignWeek', brandConsistency: 'Оценка согласованности', next: 'Следующий проект', viewFullBook: 'Смотреть брендбук' }
};

const sections = ['overview', 'strategy', 'moodboard', 'logo', 'colors', 'typography', 'elements', 'applications', 'results'];

export default function NebulaIdentity() {
  const { i18n } = useTranslation();
  const lang = i18n.language.split('-')[0] || 'en';
  const t = txt[lang] || txt.en;
  const [activeSection, setActiveSection] = useState(0);
  const [logoStage, setLogoStage] = useState(2);

  const nextSection = () => setActiveSection(s => Math.min(s + 1, sections.length - 1));
  const prevSection = () => setActiveSection(s => Math.max(s - 1, 0));

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white font-sans">
      {/* Header fixe */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/portfolio" className="flex items-center gap-2 text-white/60 hover:text-white transition">
            <ArrowLeft size={18} /> {t.back}
          </a>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-cyan-400" />
            <span className="font-semibold">{t.brand}</span>
          </div>
          <span className="text-white/40 text-sm">{t.caseStudy}</span>
        </div>
      </header>

      {/* Navigation des sections */}
      <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-2">
        {sections.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveSection(i)}
            className={`w-2 h-2 rounded-full transition-all ${activeSection === i ? 'bg-violet-500 scale-150' : 'bg-white/20 hover:bg-white/40'}`}
          />
        ))}
      </nav>

      {/* Contenu principal */}
      <main className="pt-16">
        <AnimatePresence mode="wait">
          {/* Section 0: Overview */}
          {activeSection === 0 && (
            <motion.section key="overview" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen flex items-center">
              <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-violet-400 text-sm font-medium uppercase tracking-widest">{t.tagline}</motion.span>
                  <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl lg:text-7xl font-bold mt-4 bg-gradient-to-r from-white via-violet-200 to-cyan-200 bg-clip-text text-transparent">{t.brand}</motion.h1>
                  <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-white/60 text-lg mt-6 leading-relaxed">{t.overviewDesc}</motion.p>
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="grid grid-cols-2 gap-6 mt-10">
                    <div className="border border-white/10 rounded-xl p-4"><span className="text-white/40 text-xs uppercase">{t.client}</span><p className="font-medium mt-1">Nebula Tech</p></div>
                    <div className="border border-white/10 rounded-xl p-4"><span className="text-white/40 text-xs uppercase">{t.duration}</span><p className="font-medium mt-1">{t.weeks}</p></div>
                    <div className="border border-white/10 rounded-xl p-4"><span className="text-white/40 text-xs uppercase">{t.role}</span><p className="font-medium mt-1">{t.brandDesigner}</p></div>
                    <div className="border border-white/10 rounded-xl p-4"><span className="text-white/40 text-xs uppercase">{t.deliverables}</span><p className="font-medium mt-1">{t.brandBook}</p></div>
                  </motion.div>
                </div>
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-600/30 to-cyan-500/30 rounded-3xl blur-3xl" />
                  <div className="relative bg-gradient-to-br from-[#12121a] to-[#0a0a0f] rounded-3xl border border-white/10 p-12 flex items-center justify-center aspect-square">
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: 'linear' }} className="w-48 h-48 relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400 rounded-full" />
                      <div className="absolute inset-3 bg-[#0a0a0f] rounded-full flex items-center justify-center">
                        <span className="text-6xl font-black bg-gradient-to-br from-violet-400 to-cyan-400 bg-clip-text text-transparent">N</span>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.section>
          )}

          {/* Section 1: Strategy */}
          {activeSection === 1 && (
            <motion.section key="strategy" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen flex items-center">
              <div className="max-w-7xl mx-auto px-6 py-24">
                <div className="flex items-center gap-3 mb-4"><Eye className="text-violet-400" size={20} /><span className="text-violet-400 text-sm font-medium uppercase tracking-widest">{t.phase} 1</span></div>
                <h2 className="text-4xl lg:text-5xl font-bold">{t.strategy}</h2>
                <p className="text-white/50 mt-3 max-w-xl">{t.strategyDesc}</p>
                <div className="grid lg:grid-cols-2 gap-8 mt-16">
                  <div className="bg-red-950/20 border border-red-500/20 rounded-2xl p-8">
                    <span className="text-red-400 text-sm font-medium uppercase tracking-wider">{t.problem}</span>
                    <p className="text-white/80 mt-4 leading-relaxed">{t.problemDesc}</p>
                    <div className="grid grid-cols-4 gap-3 mt-8">
                      {[1,2,3,4].map(i => (
                        <div key={i} className="aspect-square bg-blue-900/50 rounded-lg flex items-center justify-center border border-blue-500/30">
                          <div className="w-6 h-6 border-2 border-blue-400/50 rounded" />
                        </div>
                      ))}
                    </div>
                    <p className="text-white/30 text-xs mt-3 text-center">Logos IA typiques</p>
                  </div>
                  <div className="bg-violet-950/20 border border-violet-500/20 rounded-2xl p-8">
                    <span className="text-violet-400 text-sm font-medium uppercase tracking-wider">{t.solution}</span>
                    <p className="text-white/80 mt-4 leading-relaxed">{t.solutionDesc}</p>
                    <div className="flex gap-4 mt-8">
                      {['Organique', 'Fluide', 'Humain'].map((val, i) => (
                        <motion.div key={i} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: i * 0.1 }} className="flex-1 bg-gradient-to-br from-violet-500/20 to-cyan-500/20 rounded-xl p-4 text-center border border-violet-500/30">
                          <span className="text-sm font-medium">{val}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          )}

          {/* Section 2: Moodboard */}
          {activeSection === 2 && (
            <motion.section key="moodboard" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen flex items-center">
              <div className="max-w-7xl mx-auto px-6 py-24">
                <div className="flex items-center gap-3 mb-4"><Grid3X3 className="text-violet-400" size={20} /><span className="text-violet-400 text-sm font-medium uppercase tracking-widest">{t.phase} 2</span></div>
                <h2 className="text-4xl lg:text-5xl font-bold">{t.moodboard}</h2>
                <p className="text-white/50 mt-3">{t.moodboardDesc}</p>
                <div className="grid grid-cols-4 grid-rows-3 gap-4 mt-12 h-[600px]">
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="col-span-2 row-span-2 rounded-2xl overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?auto=format&fit=crop&w=800&q=80" alt="Purple gradient" className="w-full h-full object-cover" />
                  </motion.div>
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="rounded-2xl overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1557682250-33bd709cbe85?auto=format&fit=crop&w=400&q=80" alt="Violet gradient" className="w-full h-full object-cover" />
                  </motion.div>
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-500" />
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="rounded-2xl overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=400&q=80" alt="Colorful gradient" className="w-full h-full object-cover" />
                  </motion.div>
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="rounded-2xl bg-gradient-to-br from-fuchsia-600 to-violet-500" />
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="col-span-2 rounded-2xl overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&w=800&q=80" alt="Abstract fluid" className="w-full h-full object-cover" />
                  </motion.div>
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="col-span-2 rounded-2xl overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1557683316-973673bdar25?auto=format&fit=crop&w=800&q=80" alt="Gradient mesh" className="w-full h-full object-cover" />
                  </motion.div>
                </div>
              </div>
            </motion.section>
          )}

          {/* Section 3: Logo Process */}
          {activeSection === 3 && (
            <motion.section key="logo" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen flex items-center">
              <div className="max-w-7xl mx-auto px-6 py-24">
                <div className="flex items-center gap-3 mb-4"><Zap className="text-violet-400" size={20} /><span className="text-violet-400 text-sm font-medium uppercase tracking-widest">{t.phase} 3</span></div>
                <h2 className="text-4xl lg:text-5xl font-bold">{t.logoProcess}</h2>
                <p className="text-white/50 mt-3">{t.logoProcessDesc}</p>
                <div className="flex gap-4 mt-8">
                  {[t.sketch, t.refinement, t.final].map((label, i) => (
                    <button key={i} onClick={() => setLogoStage(i)} className={`px-6 py-2 rounded-full text-sm font-medium transition ${logoStage === i ? 'bg-violet-600 text-white' : 'bg-white/5 text-white/60 hover:bg-white/10'}`}>{label}</button>
                  ))}
                </div>
                <div className="mt-12 bg-[#12121a] rounded-3xl border border-white/10 p-16 flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    {logoStage === 0 && (
                      <motion.div key="sketch" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center">
                        <svg viewBox="0 0 200 200" className="w-64 h-64 mx-auto">
                          <circle cx="100" cy="100" r="80" fill="none" stroke="#444" strokeWidth="2" strokeDasharray="8 4" />
                          <circle cx="100" cy="100" r="60" fill="none" stroke="#555" strokeWidth="1" />
                          <text x="100" y="115" textAnchor="middle" fill="#666" fontSize="48" fontWeight="bold" fontFamily="sans-serif">N</text>
                          <path d="M 40 40 Q 100 20 160 40" fill="none" stroke="#444" strokeWidth="1" strokeDasharray="4 2" />
                          <circle cx="50" cy="50" r="3" fill="#555" /><circle cx="150" cy="50" r="3" fill="#555" />
                        </svg>
                        <p className="text-white/40 mt-6">Exploration des formes circulaires et de la typographie</p>
                      </motion.div>
                    )}
                    {logoStage === 1 && (
                      <motion.div key="refine" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center">
                        <div className="w-64 h-64 mx-auto relative">
                          <div className="absolute inset-0 border-4 border-violet-500/30 rounded-full" />
                          <div className="absolute inset-4 border-2 border-cyan-500/30 rounded-full" />
                          <div className="absolute inset-8 bg-gradient-to-br from-violet-500/50 to-cyan-500/50 rounded-full flex items-center justify-center">
                            <span className="text-5xl font-bold text-white/80">N</span>
                          </div>
                        </div>
                        <p className="text-white/40 mt-6">Ajout des dégradés et affinement des proportions</p>
                      </motion.div>
                    )}
                    {logoStage === 2 && (
                      <motion.div key="final" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center">
                        <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: 'linear' }} className="w-64 h-64 mx-auto relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400 rounded-full shadow-2xl shadow-violet-500/30" />
                          <div className="absolute inset-4 bg-[#0a0a0f] rounded-full flex items-center justify-center">
                            <span className="text-6xl font-black bg-gradient-to-br from-violet-400 to-cyan-400 bg-clip-text text-transparent">N</span>
                          </div>
                        </motion.div>
                        <p className="text-white/40 mt-6">Logo final avec effet de rotation subtile</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.section>
          )}

          {/* Section 4: Colors */}
          {activeSection === 4 && (
            <motion.section key="colors" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen flex items-center">
              <div className="max-w-7xl mx-auto px-6 py-24">
                <div className="flex items-center gap-3 mb-4"><Palette className="text-violet-400" size={20} /><span className="text-violet-400 text-sm font-medium uppercase tracking-widest">{t.phase} 4</span></div>
                <h2 className="text-4xl lg:text-5xl font-bold">{t.colorSystem}</h2>
                <p className="text-white/50 mt-3">{t.colorSystemDesc}</p>
                <div className="grid md:grid-cols-4 gap-6 mt-12">
                  {[
                    { name: 'Nebula Violet', hex: '#8B5CF6', role: t.primary },
                    { name: 'Cosmic Cyan', hex: '#06B6D4', role: t.secondary },
                    { name: 'Aurora Fuchsia', hex: '#D946EF', role: t.accent },
                    { name: 'Void', hex: '#0A0A0F', role: t.neutral }
                  ].map((color, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                      <div className="aspect-[4/5] rounded-2xl shadow-xl mb-4" style={{ backgroundColor: color.hex }} />
                      <p className="font-semibold">{color.name}</p>
                      <p className="text-white/40 text-sm">{color.hex}</p>
                      <p className="text-violet-400 text-xs mt-1">{color.role}</p>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-12 grid md:grid-cols-3 gap-4">
                  <div className="h-24 rounded-xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-400" />
                  <div className="h-24 rounded-xl bg-gradient-to-r from-violet-600 to-violet-900" />
                  <div className="h-24 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-700" />
                </div>
              </div>
            </motion.section>
          )}

          {/* Section 5: Typography */}
          {activeSection === 5 && (
            <motion.section key="typo" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen flex items-center">
              <div className="max-w-7xl mx-auto px-6 py-24">
                <div className="flex items-center gap-3 mb-4"><Type className="text-violet-400" size={20} /><span className="text-violet-400 text-sm font-medium uppercase tracking-widest">{t.phase} 5</span></div>
                <h2 className="text-4xl lg:text-5xl font-bold">{t.typography}</h2>
                <p className="text-white/50 mt-3">{t.typographyDesc}</p>
                <div className="grid lg:grid-cols-2 gap-8 mt-12">
                  <div className="bg-[#12121a] rounded-2xl border border-white/10 p-8">
                    <span className="text-violet-400 text-xs uppercase tracking-wider">{t.display}</span>
                    <p className="text-6xl font-black mt-4 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">Nebula Sans</p>
                    <p className="text-white/40 mt-4">Black / 900 • Display headlines</p>
                  </div>
                  <div className="bg-[#12121a] rounded-2xl border border-white/10 p-8">
                    <span className="text-violet-400 text-xs uppercase tracking-wider">{t.heading}</span>
                    <p className="text-3xl font-bold mt-4">Inter Bold</p>
                    <p className="text-white/40 mt-4">Bold / 700 • Section titles</p>
                  </div>
                  <div className="bg-[#12121a] rounded-2xl border border-white/10 p-8">
                    <span className="text-violet-400 text-xs uppercase tracking-wider">{t.body}</span>
                    <p className="text-lg mt-4 leading-relaxed">Inter Regular – The quick brown fox jumps over the lazy dog. 0123456789</p>
                    <p className="text-white/40 mt-4">Regular / 400 • Body copy</p>
                  </div>
                  <div className="bg-[#12121a] rounded-2xl border border-white/10 p-8">
                    <span className="text-violet-400 text-xs uppercase tracking-wider">{t.caption}</span>
                    <p className="text-sm font-medium mt-4 tracking-wide">INTER MEDIUM • ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                    <p className="text-white/40 mt-4">Medium / 500 • Labels & captions</p>
                  </div>
                </div>
              </div>
            </motion.section>
          )}

          {/* Section 6: Brand Elements */}
          {activeSection === 6 && (
            <motion.section key="elements" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen flex items-center">
              <div className="max-w-7xl mx-auto px-6 py-24">
                <div className="flex items-center gap-3 mb-4"><Layers className="text-violet-400" size={20} /><span className="text-violet-400 text-sm font-medium uppercase tracking-widest">{t.phase} 6</span></div>
                <h2 className="text-4xl lg:text-5xl font-bold">{t.brandElements}</h2>
                <p className="text-white/50 mt-3">{t.brandElementsDesc}</p>
                <div className="grid md:grid-cols-3 gap-6 mt-12">
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="aspect-square bg-[#12121a] rounded-2xl border border-white/10 p-8 flex items-center justify-center overflow-hidden">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      {[...Array(5)].map((_, i) => (<circle key={i} cx="50" cy="50" r={10 + i * 10} fill="none" stroke="url(#grad1)" strokeWidth="0.5" opacity={1 - i * 0.15} />))}
                      <defs><linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#8B5CF6" /><stop offset="100%" stopColor="#06B6D4" /></linearGradient></defs>
                    </svg>
                  </motion.div>
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="aspect-square bg-gradient-to-br from-violet-600/20 to-cyan-500/20 rounded-2xl border border-white/10 p-8 flex items-center justify-center">
                    <div className="grid grid-cols-3 gap-2 w-full">
                      {[...Array(9)].map((_, i) => (<div key={i} className="aspect-square rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 opacity-60" style={{ animationDelay: `${i * 0.1}s` }} />))}
                    </div>
                  </motion.div>
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="aspect-square bg-[#12121a] rounded-2xl border border-white/10 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-violet-600 via-fuchsia-500 to-cyan-400 opacity-80" style={{ backgroundSize: '400% 400%', animation: 'gradient 8s ease infinite' }} />
                  </motion.div>
                </div>
              </div>
            </motion.section>
          )}

          {/* Section 7: Applications */}
          {activeSection === 7 && (
            <motion.section key="apps" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen flex items-center">
              <div className="max-w-7xl mx-auto px-6 py-24">
                <span className="text-violet-400 text-sm font-medium uppercase tracking-widest">{t.phase} 7</span>
                <h2 className="text-4xl lg:text-5xl font-bold mt-2">{t.applications}</h2>
                <p className="text-white/50 mt-3">{t.applicationsDesc}</p>
                <div className="grid md:grid-cols-3 gap-6 mt-12">
                  {[
                    { label: t.stationery, img: 'https://images.unsplash.com/photo-1636955779321-819753cd1741?auto=format&fit=crop&w=600&q=80' },
                    { label: t.digital, img: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=600&q=80' },
                    { label: t.environmental, img: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=600&q=80' }
                  ].map((app, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="group relative aspect-[4/3] rounded-2xl overflow-hidden">
                      <img src={app.img} alt={app.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <span className="font-semibold text-lg">{app.label}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>
          )}

          {/* Section 8: Results */}
          {activeSection === 8 && (
            <motion.section key="results" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen flex items-center">
              <div className="max-w-7xl mx-auto px-6 py-24 text-center">
                <h2 className="text-4xl lg:text-5xl font-bold">{t.results}</h2>
                <p className="text-white/50 mt-3">{t.resultsDesc}</p>
                <div className="grid md:grid-cols-3 gap-8 mt-16">
                  {[
                    { value: '50+', label: t.partnersGained },
                    { value: 'DesignWeek', label: t.pressFeature },
                    { value: '100%', label: t.brandConsistency }
                  ].map((stat, i) => (
                    <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }} className="bg-gradient-to-br from-violet-500/10 to-cyan-500/10 rounded-3xl border border-white/10 p-10">
                      <p className="text-5xl font-black bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">{stat.value}</p>
                      <p className="text-white/50 mt-3">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
                <motion.a href="/portfolio" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="inline-flex items-center gap-3 mt-16 px-8 py-4 bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-semibold rounded-full hover:opacity-90 transition">
                  {t.viewFullBook} <ArrowRight size={18} />
                </motion.a>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>

      {/* Navigation bas */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#0a0a0f]/90 backdrop-blur-md border-t border-white/5 z-40">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <button onClick={prevSection} disabled={activeSection === 0} className="flex items-center gap-2 text-white/60 hover:text-white transition disabled:opacity-30 disabled:cursor-not-allowed">
            <ArrowLeft size={18} /> Prev
          </button>
          <div className="flex gap-2">
            {sections.map((_, i) => (
              <button key={i} onClick={() => setActiveSection(i)} className={`w-8 h-1 rounded-full transition ${activeSection === i ? 'bg-violet-500' : 'bg-white/20'}`} />
            ))}
          </div>
          <button onClick={nextSection} disabled={activeSection === sections.length - 1} className="flex items-center gap-2 text-white/60 hover:text-white transition disabled:opacity-30 disabled:cursor-not-allowed">
            Next <ArrowRight size={18} />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes gradient { 0%,100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
      `}</style>
    </div>
  );
}
