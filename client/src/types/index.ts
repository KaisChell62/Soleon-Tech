export type ProjectCategory = 'web' | 'mobile' | 'design' | 'marketing';

// Type for localized text - all 8 supported languages
export interface LocalizedText {
  fr: string;
  en: string;
  es?: string;
  zh?: string;
  de?: string;
  ar?: string;
  pt?: string;
  ru?: string;
  [key: string]: string | undefined;
}

export interface Project {
  id: string;
  title: string;
  client: string;
  category: ProjectCategory;
  shortDescription: LocalizedText;
  fullDescription: LocalizedText;
  heroImage: string;
  thumbnail: string;
  tags: string[]; // Technologies used (React, Node, etc.)
  year: string;
  
  // Case Study Details
  challenge: LocalizedText;
  solution: LocalizedText;
  result: LocalizedText;
  
  // Interactive Elements
  beforeImage?: string; // For comparison slider
  afterImage?: string;
  demoUrl?: string; // For live preview iframe
  mobileDemoUrl?: string; // Specific mobile view URL if needed
  
  images: string[]; // Gallery
  
  timeline: {
    phase: LocalizedText;
    duration: LocalizedText;
    description: LocalizedText;
  }[];

  // --- NEW UX/UI FIELDS (Phase 2 Upgrade) ---
  
  // A. Problem & Goal (More detailed than challenge)
  problem?: LocalizedText;
  goal?: LocalizedText;

  // C. User Journey
  userJourney?: {
    title: LocalizedText;
    steps: {
      title: LocalizedText;
      description: LocalizedText;
      icon?: string; // lucide icon name
    }[];
  };

  // D. Wireframes (Low Fidelity)
  wireframes?: {
    description: LocalizedText;
    images: string[]; // URLs
  };

  // E. Final Designs (High Fidelity)
  mockups?: {
    desktop?: string;
    mobile?: string;
    tablet?: string;
    description?: LocalizedText;
  };

  // G. Use Cases
  useCases?: {
    title: LocalizedText;
    scenario: LocalizedText;
    image?: string;
  }[];
  
  // I. Tools
  tools?: string[]; // Figma, Adobe XD, etc.
}
