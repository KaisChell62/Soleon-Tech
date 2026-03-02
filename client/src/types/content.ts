export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  imageUrl: string;
  slug: string;
}

export interface JobPosition {
    id: string;
    title: string;
    department: 'Design' | 'Engineering' | 'Product' | 'Marketing';
    location: string;
    type: 'Full-time' | 'Contract';
    description: string;
}

export interface TeamMember {
    id: string;
    name: string;
    role: string;
    bio: string;
    imageUrl: string;
    socials: {
        linkedin?: string;
        twitter?: string;
        github?: string;
    };
}
