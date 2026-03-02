import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Layers, Users, Target, Lightbulb, ArrowRight, CheckCircle, 
  Smartphone, Monitor, Palette, MousePointer, ChevronRight,
  Zap, TrendingUp, Clock, Star, Play, Eye, LayoutDashboard,
  Lock, Globe, Server, Maximize
} from 'lucide-react';
import WireframeSchematic, { type WireframeType } from '../../components/demos/WireframeSchematic';

const translations: Record<string, Record<string, string>> = {
  fr: {
    brand: 'EcoMarket Flow',
    subtitle: 'Plateforme Industrielle B2B',
    heroTitle: 'Optimisation de Flux de Déchets & Économie Circulaire',
    heroDesc: 'La première plateforme unifiée certifiée ISO-14001 pour la valorisation des plastiques et métaux industriels. Conformité RGPD & Traçabilité Blockchain.',
    overview: 'Fiche Technique',
    client: 'Consortium Industriel Européen',
    duration: 'Déploiement Continu',
    role: 'Lead Architect & UX',
    tools: 'React, Node.js, TensorFlow, Hyperledger',
    problem: 'La Rupture de la Chaîne de Valeur',
    problemDesc: 'La traçabilité des déchets industriels dangereux est fragmentée, exposant les producteurs à des risques légaux majeurs et des pertes financières.',
    research: 'Audit Technique',
    researchDesc: 'Analyse des flux de données de 50 sites industriels SEVESO.',
    interviews: 'Parties Prenantes',
    interviewsDesc: 'Ateliers avec DSI, Responsables QSE et Opérateurs Logistiques.',
    analytics: 'Modélisation des Flux',
    analyticsDesc: 'Algorithmes prédictifs de production de déchets par typologie.',
    competitive: 'État de l\'Art',
    competitiveDesc: 'Absence de solutions intégrant conformité réglementaire et marketplace en temps réel.',
    insights: 'Impératifs Stratégiques',
    insight1: 'La conformité légale automatisée réduit les coûts de gestion de 70%.',
    insight2: 'La traçabilité temps réel est un pré-requis pour les auditeurs.',
    insight3: 'L\'interface doit être utilisable sur tablette durcie en zone ATEX.',
    userFlows: 'Architecture Système',
    userFlowsDesc: 'Workflow de validation multi-niveaux avec signature électronique.',
    wireframes: 'Interface Opérateur',
    wireframesDesc: 'Conception haute fidélité pour le pilotage centralisé.',
    lofi: 'Maquettes Fonctionnelles',
    lofiDesc: 'Validation des processus métiers critiques.',
    hifi: 'Design Industriel Avancé',
    hifiDesc: 'Interface sombre à haut contraste pour salles de contrôle.',
    designSystem: 'Atomic Design System',
    designSystemDesc: 'Bibliothèque de composants React pour applications critiques.',
    colors: 'Nuancier Technique',
    typography: 'Typographie de Données',
    components: 'Composants Métiers',
    finalDesign: 'Plateforme de Production',
    finalDesignDesc: 'Le centre de commandement pour l\'économie circulaire.',
    results: 'Performance Opérationnelle',
    resultsDesc: 'Métriques clés après 12 mois de production.',
    conversion: 'Tonnes/an Valorisées',
    retention: 'Sites Connectés',
    rating: 'Taux de Conformité',
    satisfaction: 'Économies Générées',
    viewPrototype: 'Accéder à la Plateforme',
    nextProject: 'Projet Suivant'
  },
  en: {
    brand: 'EcoMarket Flow',
    subtitle: 'Industrial B2B Platform',
    heroTitle: 'Waste Flow Optimization & Circular Economy',
    heroDesc: 'The first unified ISO-14001 certified platform for industrial plastic and metal recovery. GDPR Compliance & Blockchain Traceability.',
    overview: 'Technical Data',
    client: 'European Industrial Consortium',
    duration: 'Continuous Deployment',
    role: 'Lead Architect & UX',
    tools: 'React, Node.js, TensorFlow, Hyperledger',
    problem: 'Value Chain Disruption',
    problemDesc: 'Traceability of hazardous industrial waste is fragmented, exposing producers to major legal risks and financial losses.',
    research: 'Technical Audit',
    researchDesc: 'Data flow analysis of 50 SEVESO industrial sites.',
    interviews: 'Stakeholders',
    interviewsDesc: 'Workshops with CTOs, QSE Managers, and Logistics Operators.',
    analytics: 'Flow Modeling',
    analyticsDesc: 'Predictive algorithms for waste production by typology.',
    competitive: 'State of the Art',
    competitiveDesc: 'Lack of solutions integrating regulatory compliance and real-time marketplace.',
    insights: 'Strategic Imperatives',
    insight1: 'Automated legal compliance reduces management costs by 70%.',
    insight2: 'Real-time traceability is a prerequisite for auditors.',
    insight3: 'Interface must be usable on rugged tablets in ATEX zones.',
    userFlows: 'System Architecture',
    userFlowsDesc: 'Multi-level validation workflow with electronic signature.',
    wireframes: 'Operator Interface',
    wireframesDesc: 'High-fidelity design for centralized control.',
    lofi: 'Functional Mockups',
    lofiDesc: 'Validation of critical business processes.',
    hifi: 'Advanced Industrial Design',
    hifiDesc: 'High-contrast dark interface for control rooms.',
    designSystem: 'Atomic Design System',
    designSystemDesc: 'React component library for critical applications.',
    colors: 'Technical Palette',
    typography: 'Data Typography',
    components: 'Business Components',
    finalDesign: 'Production Platform',
    finalDesignDesc: 'The command center for the circular economy.',
    results: 'Operational Performance',
    resultsDesc: 'Key metrics after 12 months of production.',
    conversion: 'Tons/yr Valorized',
    retention: 'Connected Sites',
    rating: 'Compliance Rate',
    satisfaction: 'Savings Generated',
    viewPrototype: 'Access Platform',
    nextProject: 'Next Project'
  },
  es: {
    brand: 'EcoMarket Flow',
    subtitle: 'Plataforma Industrial B2B',
    heroTitle: 'Optimización de Flujos de Residuos',
    heroDesc: 'Plataforma certificada ISO-14001 para recuperación de materiales. Cumplimiento legal y trazabilidad Blockchain.',
    overview: 'Ficha Técnica',
    client: 'Consorcio Industrial',
    duration: 'Despliegue Continuo',
    role: 'Arquitecto Líder',
    tools: 'React, Node.js, TensorFlow',
    problem: 'Riesgo Crítico',
    problemDesc: 'La falta de trazabilidad en residuos peligrosos genera riesgos legales masivos.',
    research: 'Auditoría',
    researchDesc: 'Análisis de 50 plantas industriales.',
    interviews: 'Stakeholders',
    interviewsDesc: 'Jefes de Planta y QSE.',
    analytics: 'Modelado',
    analyticsDesc: 'Algoritmos predictivos.',
    competitive: 'Mercado',
    competitiveDesc: 'Sin soluciones integradas.',
    insights: 'Imperativos',
    insight1: 'Automatización reduce costes un 70%.',
    insight2: 'Trazabilidad total requerida.',
    insight3: 'Uso en zonas ATEX.',
    userFlows: 'Arquitectura',
    userFlowsDesc: 'Validación multinivel.',
    wireframes: 'Interfaz Operador',
    wireframesDesc: 'Alta fidelidad para control.',
    lofi: 'Funcional',
    lofiDesc: 'Procesos críticos.',
    hifi: 'Diseño Avanzado',
    hifiDesc: 'Alto contraste.',
    designSystem: 'Atomic Design',
    designSystemDesc: 'Componentes React críticos.',
    colors: 'Paleta Técnica',
    typography: 'Tipografía',
    components: 'Compon. Negocio',
    finalDesign: 'Producción',
    finalDesignDesc: 'Centro de comando.',
    results: 'Rendimiento',
    resultsDesc: 'Métricas clave 12 meses.',
    conversion: 'Ventas',
    retention: 'Sitios',
    rating: 'Cumplimiento',
    satisfaction: 'Ahorro',
    viewPrototype: 'Acceder',
    nextProject: 'Siguiente'
  },
  de: {
    brand: 'EcoMarket Flow',
    subtitle: 'Industrielle B2B-Plattform',
    heroTitle: 'Plattform für Kreislaufwirtschaft und Ressourcenmanagement',
    heroDesc: 'Verbindung von Industrieabfallerzeugern mit Recyclern, um den Kreislauf zu schließen.',
    overview: 'Projektübersicht',
    client: 'Kunde',
    duration: 'Dauer',
    role: 'Rolle',
    tools: 'Tools',
    problem: 'Die Herausforderung',
    problemDesc: 'Industriegebiete haben keine Transparenz über die für den Austausch verfügbaren Abfallströme.',
    research: 'Ökosystemanalyse',
    researchDesc: 'Kartierung von Materialflüssen und Stakeholder-Interviews',
    interviews: 'Stakeholder',
    interviewsDesc: '35 Fabrikleiter',
    analytics: 'Datenanalyse',
    analyticsDesc: 'Quantifizierung der Abfallströme',
    competitive: 'Marktlücke',
    competitiveDesc: 'Keine einheitliche Austauschplattform',
    insights: 'Wichtige Erkenntnisse',
    insight1: '90% der Abfälle landen wegen fehlender Verbindungen auf Deponien',
    insight2: 'Logistik ist die größte Eintrittsbarriere',
    insight3: 'Vertrauen in die Materialqualität ist entscheidend',
    userFlows: 'Nutzerflüsse',
    userFlowsDesc: 'Optimierung des Listungs- und Angebotsprozesses',
    wireframes: 'Wireframes & Prototyping',
    wireframesDesc: 'Dashboard für komplexe Datenvisualisierung',
    lofi: 'Low-Fidelity',
    lofiDesc: 'Validierung des Konzepts',
    hifi: 'High-Fidelity',
    hifiDesc: 'Interaktives Systemdesign',
    designSystem: 'Design System',
    designSystemDesc: 'Enterprise-Komponenten für Datenklarheit',
    colors: 'Farbpalette',
    typography: 'Typografie',
    components: 'UI-Komponenten',
    finalDesign: 'Finales Design',
    finalDesignDesc: 'Effiziente Ressourcenhandelsplattform',
    results: 'Ergebnisse',
    resultsDesc: 'Auswirkung auf Ressourceneffizienz und Umsatz',
    conversion: 'Verwertete Abfälle',
    retention: 'Aktive Unternehmen',
    rating: 'Vermeidbares CO2',
    satisfaction: 'Kunden-ROI',
    viewPrototype: 'Demo ansehen',
    nextProject: 'Nächstes Projekt'
  },
  zh: {
    brand: 'EcoMarket Flow',
    subtitle: '工业 B2B SaaS',
    heroTitle: '循环经济资源管理平台',
    heroDesc: '连接工业废物产生者与回收商，形成闭环。',
    overview: '项目概览',
    client: '客户',
    duration: '时长',
    role: '角色',
    tools: '工具',
    problem: '挑战',
    problemDesc: '工业园区缺乏可交换废物资源的可见性。',
    research: '生态系统分析',
    researchDesc: '绘制物质流向图及利益相关者访谈',
    interviews: '利益相关者',
    interviewsDesc: '35位工厂经理',
    analytics: '数据分析',
    analyticsDesc: '废物流量化',
    competitive: '市场空白',
    competitiveDesc: '缺乏统一的交换平台',
    insights: '关键洞察',
    insight1: '由于缺乏连接，90%的废物被填埋',
    insight2: '物流是主要的准入门槛',
    insight3: '对材料质量的信任至关重要',
    userFlows: '用户流程',
    userFlowsDesc: '简化发布和竞标流程',
    wireframes: '线框图与原型',
    wireframesDesc: '用于复杂数据可视化的仪表板',
    lofi: '低保真',
    lofiDesc: '概念验证',
    hifi: '高保真',
    hifiDesc: '交互系统设计',
    designSystem: '设计系统',
    designSystemDesc: '用于数据清晰度的企业级组件',
    colors: '调色板',
    typography: '字体',
    components: 'UI组件',
    finalDesign: '最终设计',
    finalDesignDesc: '高效的资源交易平台',
    results: '成果',
    resultsDesc: '量化资源效率和收入影响',
    conversion: '废弃物价值化',
    retention: '活跃企业',
    rating: '避免的二氧化碳',
    satisfaction: '客户投资回报率',
    viewPrototype: '查看演示',
    nextProject: '下一个项目'
  },
  ar: {
    brand: 'EcoMarket Flow',
    subtitle: 'منصة B2B الصناعية',
    heroTitle: 'منصة إدارة موارد الاقتصاد الدائري',
    heroDesc: 'ربط مولدي النفايات الصناعية بشركات إعادة التدوير لإغلاق الحلقة.',
    overview: 'نظرة عامة على المشروع',
    client: 'العميل',
    duration: 'المدة',
    role: 'الدور',
    tools: 'الأدوات',
    problem: 'التحدي',
    problemDesc: 'تفتقر المناطق الصناعية إلى رؤية لتدفقات النفايات المتاحة للتبادل.',
    research: 'تحليل النظام البيئي',
    researchDesc: 'رسم خرائط لتدفقات المواد ومقابلات أصحاب المصلحة',
    interviews: 'أصحاب المصلحة',
    interviewsDesc: '35 مدير مصنع',
    analytics: 'تحليل البيانات',
    analyticsDesc: 'القياس الكمي لتدفقات النفايات',
    competitive: 'فجوة السوق',
    competitiveDesc: 'لا توجد منصة تبادل موحدة',
    insights: 'الرؤى الرئيسية',
    insight1: '90٪ من النفايات تُطمر بسبب نقص الربط',
    insight2: 'اللوجستيات هي العائق الرئيسي للدخول',
    insight3: 'الثقة في جودة المواد أمر بالغ الأهمية',
    userFlows: 'تدفقات المستخدم',
    userFlowsDesc: 'تبسيط عملية العرض والمزايدة',
    wireframes: 'الإطارات والنمذجة',
    wireframesDesc: 'لوحة معلومات لتصور البيانات المعقدة',
    lofi: 'منخفض الدقة',
    lofiDesc: 'التحقق من المفهوم',
    hifi: 'عالي الدقة',
    hifiDesc: 'تصميم النظام التفاعلي',
    designSystem: 'نظام التصميم',
    designSystemDesc: 'مكونات على مستوى المؤسسات لوضوح البيانات',
    colors: 'لوحة الألوان',
    typography: 'الخطوط',
    components: 'مكونات واجهة المستخدم',
    finalDesign: 'التصميم النهائي',
    finalDesignDesc: 'منصة فعالة لتداول الموارد',
    results: 'النتائج',
    resultsDesc: 'تأثير كفاءة الموارد والإيرادات',
    conversion: 'النفايات المثمنة',
    retention: 'الشركات النشطة',
    rating: 'تجنب ثاني أكسيد الكربون',
    satisfaction: 'عائد الاستثمار للعميل',
    viewPrototype: 'عرض العرض التوضيحي',
    nextProject: 'المشروع التالي'
  },
  pt: {
    brand: 'EcoMarket Flow',
    subtitle: 'SaaS B2B Industrial',
    heroTitle: 'Plataforma de Gestão de Recursos de Economia Circular',
    heroDesc: 'Conectando geradores de resíduos industriais com recicladores para fechar o ciclo.',
    overview: 'Visão Geral do Projeto',
    client: 'Cliente',
    duration: 'Duração',
    role: 'Papel',
    tools: 'Ferramentas',
    problem: 'O Desafio',
    problemDesc: 'Zonas industriais carecem de visibilidade sobre fluxos de resíduos disponíveis para troca.',
    research: 'Análise do Ecossistema',
    researchDesc: 'Mapeamento de fluxos de materiais e entrevistas com stakeholders',
    interviews: 'Stakeholders',
    interviewsDesc: '35 Gerentes de Fábrica',
    analytics: 'Análise de Dados',
    analyticsDesc: 'Quantificação de fluxos de resíduos',
    competitive: 'Lacuna de Mercado',
    competitiveDesc: 'Sem plataforma de troca unificada',
    insights: 'Insights Chave',
    insight1: '90% dos resíduos vão para aterros devido à falta de conexão',
    insight2: 'Logística é a principal barreira de entrada',
    insight3: 'Confiança na qualidade do material é crítica',
    userFlows: 'Fluxos de Usuário',
    userFlowsDesc: 'Agilizando o processo de listagem e licitação',
    wireframes: 'Wireframes e Prototipagem',
    wireframesDesc: 'Dashboard para visualização de dados complexos',
    lofi: 'Baixa Fidelidade',
    lofiDesc: 'Validação de conceito',
    hifi: 'Alta Fidelidade',
    hifiDesc: 'Design de sistema interativo',
    designSystem: 'Design System',
    designSystemDesc: 'Componentes de classe empresarial para clareza de dados',
    colors: 'Paleta de Cores',
    typography: 'Tipografia',
    components: 'Componentes UI',
    finalDesign: 'Design Final',
    finalDesignDesc: 'Plataforma de negociação de recursos eficiente',
    results: 'Resultados',
    resultsDesc: 'Impacto na eficiência de recursos e receita',
    conversion: 'Resíduos Valorizados',
    retention: 'Empresas Ativas',
    rating: 'CO2 Evitado',
    satisfaction: 'ROI do Cliente',
    viewPrototype: 'Ver Demo',
    nextProject: 'Próximo Projeto'
  },
  ru: {
    brand: 'EcoMarket Flow',
    subtitle: 'Промышленный B2B SaaS',
    heroTitle: 'Платформа управления ресурсами замкнутого цикла',
    heroDesc: 'Соединение производителей промышленных отходов с переработчиками для замыкания цикла.',
    overview: 'Обзор проекта',
    client: 'Клиент',
    duration: 'Срок',
    role: 'Роль',
    tools: 'Инструменты',
    problem: 'Задача',
    problemDesc: 'Индустриальным зонам не хватает прозрачности доступных для обмена потоков отходов.',
    research: 'Анализ экосистемы',
    researchDesc: 'Картирование потоков материалов и интервью со стейкхолдерами',
    interviews: 'Стейкхолдеры',
    interviewsDesc: '35 директоров заводов',
    analytics: 'Анализ данных',
    analyticsDesc: 'Квантификация потоков отходов',
    competitive: 'Рыночный пробел',
    competitiveDesc: 'Отсутствие единой платформы обмена',
    insights: 'Ключевые инсайты',
    insight1: '90% отходов отправляются на свалку из-за отсутствия связей',
    insight2: 'Логистика является главным барьером для входа',
    insight3: 'Доверие к качеству материала критично',
    userFlows: 'Пользовательские потоки',
    userFlowsDesc: 'Оптимизация процесса размещения и торгов',
    wireframes: 'Вайрфреймы и прототипирование',
    wireframesDesc: 'Дашборд для визуализации сложных данных',
    lofi: 'Низкая детализация',
    lofiDesc: 'Валидация концепции',
    hifi: 'Высокая детализация',
    hifiDesc: 'Дизайн интерактивной системы',
    designSystem: 'Дизайн-система',
    designSystemDesc: 'Корпоративные компоненты для ясности данных',
    colors: 'Цветовая палитра',
    typography: 'Типографика',
    components: 'UI компоненты',
    finalDesign: 'Финальный дизайн',
    finalDesignDesc: 'Эффективная платформа торговли ресурсами',
    results: 'Результаты',
    resultsDesc: 'Влияние на эффективность ресурсов и выручку',
    conversion: 'Валоризированные отходы',
    retention: 'Активные компании',
    rating: 'Избежанный CO2',
    satisfaction: 'ROI клиента',
    viewPrototype: 'Смотреть демо',
    nextProject: 'Следующий проект'
  }
};

const processSteps = [
  { icon: Users, phase: 'discover', color: 'from-purple-500 to-purple-600' },
  { icon: Target, phase: 'define', color: 'from-blue-500 to-blue-600' },
  { icon: Lightbulb, phase: 'ideate', color: 'from-amber-500 to-amber-600' },
  { icon: Layers, phase: 'prototype', color: 'from-green-500 to-green-600' },
  { icon: MousePointer, phase: 'test', color: 'from-rose-500 to-rose-600' },
];

export default function EcoMarket() {
  const { i18n } = useTranslation();
  const lang = i18n.language.split('-')[0] || 'en';
  const t = translations[lang] || translations.en;

  const [activeSection, setActiveSection] = useState<string>('research');
  const [selectedScreen, setSelectedScreen] = useState(0);
  const [showPrototype, setShowPrototype] = useState(false);

  const screens: { name: string; type: WireframeType }[] = [
    { name: 'Dashboard', type: 'dashboard' },
    { name: 'Marketplace', type: 'marketplace' },
    { name: 'Analytics', type: 'analytics' },
    { name: 'Logistics', type: 'logistics' },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-500 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-300 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
              <Palette size={16} />
              {t.subtitle}
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              {t.heroTitle}
            </h1>
            <p className="text-xl text-emerald-100 mb-10 leading-relaxed">
              {t.heroDesc}
            </p>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
              <div>
                <span className="text-emerald-200 text-sm">{t.client}</span>
                <p className="font-semibold">EcoFresh Ltd.</p>
              </div>
              <div>
                <span className="text-emerald-200 text-sm">{t.duration}</span>
                <p className="font-semibold">8 weeks</p>
              </div>
              <div>
                <span className="text-emerald-200 text-sm">{t.role}</span>
                <p className="font-semibold">Lead UX/UI</p>
              </div>
              <div>
                <span className="text-emerald-200 text-sm">{t.tools}</span>
                <p className="font-semibold">Figma, React</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg`}>
                  <step.icon size={22} />
                </div>
                <span className="font-semibold text-neutral-700 capitalize">{step.phase}</span>
                {i < processSteps.length - 1 && (
                  <ChevronRight className="text-neutral-300 hidden lg:block" size={20} />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-red-400 font-medium text-sm uppercase tracking-wider">{t.problem}</span>
              <h2 className="text-3xl lg:text-4xl font-bold mt-3 mb-6">{t.problemDesc}</h2>
              <div className="space-y-4">
                {[
                  { value: '90%', label: t.insight1 ? t.insight1.split(' ')[0] + ' Waste Landfilled' : 'Waste Landfilled' },
                  { value: '35d', label: 'Avg Transaction Time' },
                  { value: '0', label: 'Visibility on Stocks' },
                ].map((stat, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                    <span className="text-3xl font-bold text-red-400">{stat.value}</span>
                    <span className="text-neutral-400">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-neutral-800 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80" 
                  alt="Old app analysis"
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <TrendingUp className="text-red-400" size={32} />
                    </div>
                    <p className="text-red-400 font-semibold">Current State Analysis</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Phase */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-medium text-sm uppercase tracking-wider">{t.research}</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-3 text-neutral-800">{t.researchDesc}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Users, title: t.interviews, desc: t.interviewsDesc, count: '24' },
              { icon: TrendingUp, title: t.analytics, desc: t.analyticsDesc, count: '50K+' },
              { icon: Eye, title: t.competitive, desc: t.competitiveDesc, count: '8' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="text-emerald-600" size={28} />
                </div>
                <div className="text-4xl font-bold text-emerald-600 mb-2">{item.count}</div>
                <h3 className="text-xl font-bold text-neutral-800 mb-2">{item.title}</h3>
                <p className="text-neutral-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-neutral-800 mb-8 flex items-center gap-3">
              <Lightbulb className="text-amber-500" />
              {t.insights}
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[t.insight1, t.insight2, t.insight3].map((insight, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    {i + 1}
                  </div>
                  <p className="text-neutral-700 font-medium">{insight}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Wireframes Section */}
      <section className="py-20 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-medium text-sm uppercase tracking-wider">{t.wireframes}</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-3 text-neutral-800">{t.wireframesDesc}</h2>
          </div>

          <div className="flex justify-center gap-4 mb-12">
            {['research', 'wireframes', 'design'].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeSection === section
                    ? 'bg-emerald-600 text-white shadow-lg'
                    : 'bg-white text-neutral-600 hover:bg-neutral-50'
                }`}
              >
                {section === 'research' ? t.lofi : section === 'wireframes' ? t.hifi : t.finalDesign}
              </button>
            ))}
          </div>

          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-3 w-full grid grid-cols-1 gap-3 md:gap-4">
              {screens.map((screen, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedScreen(i)}
                  className={`w-full flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl transition-all text-left border ${
                    selectedScreen === i
                      ? 'bg-emerald-600 text-white shadow-lg border-emerald-600 md:scale-105'
                      : 'bg-white text-neutral-600 hover:bg-neutral-50 border-neutral-100'
                  }`}
                >
                  <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center shrink-0 ${
                    selectedScreen === i ? 'bg-white/20' : 'bg-emerald-50'
                  }`}>
                    {selectedScreen === i ? (
                      <CheckCircle size={18} className="md:w-5 md:h-5" />
                    ) : (
                      <LayoutDashboard size={18} className="text-emerald-600 md:w-5 md:h-5" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="font-bold block truncate text-sm md:text-base">{screen.name}</span>
                    <p className={`text-[10px] md:text-xs ${selectedScreen === i ? 'text-emerald-100' : 'text-neutral-400'}`}>
                      Interactive View
                    </p>
                  </div>
                  <ChevronRight size={16} className={`${selectedScreen === i ? 'text-white' : 'text-neutral-300'}`} />
                </button>
              ))}
            </div>

            <motion.div
              key={selectedScreen}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-9 w-full relative"
            >
              {/* Browser Mockup Frame */}
              <div className="bg-white rounded-xl shadow-2xl border border-neutral-200 overflow-hidden ring-1 ring-black/5">
                {/* Browser Header */}
                <div className="bg-neutral-100 px-3 py-2 md:px-4 md:py-3 flex items-center gap-2 md:gap-4 border-b border-neutral-200">
                    <div className="flex gap-1.5 md:gap-2">
                        <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-400/80 border border-red-500/20" />
                        <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-amber-400/80 border border-amber-500/20" />
                        <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-emerald-400/80 border border-emerald-500/20" />
                    </div>
                    <div className="flex-1 text-center min-w-0">
                        <div className="bg-white px-2 md:px-3 py-1 rounded-md border border-neutral-200 text-[10px] md:text-xs text-neutral-400 font-medium inline-flex items-center gap-1.5 md:gap-2 mx-auto w-full max-w-[200px] md:max-w-[400px] truncate justify-center">
                            <span className="text-emerald-600 shrink-0"><Lock size={10} /></span>
                            <span className="truncate">app.ecomarket-flow.com/{screens[selectedScreen].type}</span>
                        </div>
                    </div>
                </div>

                {/* Viewport content */}
                <div className="relative w-full h-[500px] md:h-auto md:aspect-[16/10] bg-neutral-50 overflow-hidden">
                  <WireframeSchematic type={screens[selectedScreen].type as any} />
                </div>
              </div>
              
              <div className="mt-4 flex flex-col md:flex-row justify-between items-start md:items-center px-1 gap-2 md:gap-0">
                 <div className="flex gap-2 text-xs md:text-sm text-neutral-500">
                    <span className="flex items-center gap-1.5"><Globe size={14} className="text-emerald-600"/> Live Environment</span>
                    <span className="w-px h-4 bg-neutral-300 mx-2" />
                    <span className="flex items-center gap-1.5"><Server size={14} className="text-slate-500"/> v2.4.0-stable</span>
                 </div>
                 <button className="text-emerald-600 text-xs md:text-sm font-bold flex items-center gap-1 hover:underline">
                    Expand Fullscreen <Maximize size={14} />
                 </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Design System */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-medium text-sm uppercase tracking-wider">{t.designSystem}</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-3 text-neutral-800">{t.designSystemDesc}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 rounded-2xl p-8">
              <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                <Palette size={20} className="text-emerald-600" />
                {t.colors}
              </h3>
              <div className="space-y-3">
                {[
                  { name: 'Primary', color: '#10B981', hex: '#10B981' },
                  { name: 'Secondary', color: '#14B8A6', hex: '#14B8A6' },
                  { name: 'Accent', color: '#F59E0B', hex: '#F59E0B' },
                  { name: 'Dark', color: '#1F2937', hex: '#1F2937' },
                ].map((c, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl shadow-sm" style={{ backgroundColor: c.color }} />
                    <div>
                      <p className="font-medium text-neutral-800">{c.name}</p>
                      <p className="text-sm text-neutral-500">{c.hex}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-neutral-50 rounded-2xl p-8">
              <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                <Monitor size={20} className="text-emerald-600" />
                {t.typography}
              </h3>
              <div className="space-y-4">
                <div>
                  <span className="text-sm text-neutral-500">Heading</span>
                  <p className="text-3xl font-bold text-neutral-800">Inter Bold</p>
                </div>
                <div>
                  <span className="text-sm text-neutral-500">Body</span>
                  <p className="text-lg text-neutral-700">Inter Regular</p>
                </div>
                <div>
                  <span className="text-sm text-neutral-500">Caption</span>
                  <p className="text-sm text-neutral-500">Inter Medium</p>
                </div>
              </div>
            </div>

            <div className="bg-neutral-50 rounded-2xl p-8">
              <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                <Layers size={20} className="text-emerald-600" />
                {t.components}
              </h3>
              <div className="space-y-3">
                <button className="w-full py-3 bg-emerald-600 text-white rounded-xl font-medium">
                  Primary Button
                </button>
                <button className="w-full py-3 bg-white border-2 border-emerald-600 text-emerald-600 rounded-xl font-medium">
                  Secondary Button
                </button>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">Tag</span>
                  <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">Badge</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-emerald-200 font-medium text-sm uppercase tracking-wider">{t.results}</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-3">{t.resultsDesc}</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Zap, value: '+140%', label: t.conversion },
              { icon: Users, value: '+85%', label: t.retention },
              { icon: Star, value: '4.8★', label: t.rating },
              { icon: CheckCircle, value: '92%', label: t.satisfaction },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl"
              >
                <stat.icon className="mx-auto mb-4 text-emerald-200" size={32} />
                <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.value}</div>
                <p className="text-emerald-100">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button
              onClick={() => setShowPrototype(true)}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-emerald-600 font-bold rounded-full hover:bg-emerald-50 transition-all hover:scale-105 shadow-xl"
            >
              <Play size={20} />
              {t.viewPrototype}
            </button>
          </div>
        </div>
      </section>

      {/* Prototype Modal */}
      <AnimatePresence>
        {showPrototype && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6"
            onClick={() => setShowPrototype(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl overflow-hidden max-w-4xl w-full max-h-[90vh]"
              onClick={e => e.stopPropagation()}
            >
              <div className="p-6 border-b border-neutral-200 flex items-center justify-between">
                <h3 className="text-xl font-bold">Prototype Figma - EcoMarket Flow</h3>
                <button onClick={() => setShowPrototype(false)} className="p-2 hover:bg-neutral-100 rounded-full">✕</button>
              </div>
              <div className="aspect-video bg-neutral-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Play className="text-emerald-600" size={40} />
                  </div>
                  <p className="text-neutral-600">Prototype interactif</p>
                  <p className="text-sm text-neutral-400 mt-2">Figma embed would appear here</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <section className="py-12 bg-white border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
          <a href="/portfolio" className="text-neutral-500 hover:text-neutral-700 transition">
            ← Retour au portfolio
          </a>
          <a href="/demos/zenith-bank" className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium transition">
            {t.nextProject}
            <ArrowRight size={20} />
          </a>
        </div>
      </section>
    </div>
  );
}
