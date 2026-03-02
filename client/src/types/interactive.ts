// Kanban Types
export interface TaskUser {
  name: string;
  avatar: string; // Initial or image URL
}

export interface KanbanTask {
  id: string;
  title: string;
  tag: 'Design' | 'Frontend' | 'Backend' | 'Review';
  assignedTo?: TaskUser;
}

export interface KanbanColumn {
  id: string;
  title: string;
  tasks: KanbanTask[];
}

// Configurator Types
export interface PackOption {
  id: string;
  label: string;
  price: number;
  description?: string;
}

export interface PackCategory {
  id: string;
  title: string;
  type: 'single' | 'multiple'; // 'single' selection or 'multiple' checkboxes
  options: PackOption[];
}

export interface ProjectEstimate {
  total: number;
  breakdown: {
      category: string;
      items: string[];
      cost: number;
  }[];
}
