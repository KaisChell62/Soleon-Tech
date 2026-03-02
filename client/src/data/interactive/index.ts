import type { KanbanColumn, PackCategory } from '../../types/interactive';

// --- Live Board Data (Kanban Simulation) ---

export const kanbanData: KanbanColumn[] = [
  {
    id: 'backlog',
    title: 'Backlog',
    tasks: [
      { id: 't1', title: 'Audit SEO concurrentiel', tag: 'Review' },
      { id: 't2', title: 'Configuration CI/CD', tag: 'Backend' },
    ],
  },
  {
    id: 'todo',
    title: 'To Do',
    tasks: [
      { id: 't3', title: 'Maquettes : Page Contact', tag: 'Design', assignedTo: { name: 'Sarah', avatar: 'S' } },
      { id: 't4', title: 'API : Auth Endpoints', tag: 'Backend' },
    ],
  },
  {
    id: 'in-progress',
    title: 'In Progress',
    tasks: [
      { id: 't5', title: 'Intégration Landing Page', tag: 'Frontend', assignedTo: { name: 'Marc', avatar: 'M' } },
      { id: 't6', title: 'Refonte Footer', tag: 'Design' },
    ],
  },
  {
    id: 'review',
    title: 'Review',
    tasks: [
      { id: 't7', title: 'Migration Database', tag: 'Backend', assignedTo: { name: 'Alex', avatar: 'A' } },
    ],
  },
  {
    id: 'done',
    title: 'Done',
    tasks: [
      { id: 't8', title: 'Setup Projet Initial', tag: 'Frontend' },
      { id: 't9', title: 'Workshop Client', tag: 'Review' },
    ],
  },
];

// --- Packs Configurator Data ---

export const packCategories: PackCategory[] = [
  {
    id: 'type',
    title: 'packs.type.title',
    type: 'single',
    options: [
      { id: 'landing', label: 'packs.type.landing', price: 590, description: 'packs.type.landing_desc' },
      { id: 'showcase', label: 'packs.type.showcase', price: 990, description: 'packs.type.showcase_desc' },
      { id: 'ecommerce', label: 'packs.type.ecommerce', price: 3500, description: 'packs.type.ecommerce_desc' },
      { id: 'saas', label: 'packs.type.saas', price: 4500, description: 'packs.type.saas_desc' },
    ],
  },
  {
    id: 'design',
    title: 'packs.design.title',
    type: 'single',
    options: [
      { id: 'standard', label: 'packs.design.standard', price: 0, description: 'packs.design.standard_desc' },
      { id: 'custom', label: 'packs.design.custom', price: 490, description: 'packs.design.custom_desc' },
    ],
  },
  {
    id: 'features',
    title: 'packs.features.title',
    type: 'multiple',
    options: [
      { id: 'cms', label: 'packs.features.cms', price: 290 },
      { id: 'seo', label: 'packs.features.seo', price: 390 },
      { id: 'analytics', label: 'packs.features.analytics', price: 190 },
      { id: 'i18n', label: 'packs.features.i18n', price: 390 },
      { id: 'auth', label: 'packs.features.auth', price: 790 },
      { id: 'payment', label: 'packs.features.payment', price: 490 },
    ],
  },
  {
    id: 'maintenance',
    title: 'packs.maintenance.title',
    type: 'single',
    options: [
      { id: 'none', label: 'packs.maintenance.none', price: 0 },
      { id: 'pro', label: 'packs.maintenance.pro', price: 149 },
    ],
  },
];
