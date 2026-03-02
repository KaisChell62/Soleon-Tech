export interface StatItem {
  id: string;
  value: string;
  label: string;
  description: string;
}

export interface MethodologyStep {
  id: string;
  title: string;
  description: string;
  iconName: 'Search' | 'PenTool' | 'Code' | 'Rocket';
}

export interface SecurityStandard {
  id: string;
  title: string;
  description: string;
  category: 'Infrastructure' | 'Code' | 'Process';
  iconName: 'Shield' | 'Lock' | 'Server' | 'Eye';
}

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  cta: string;
}

