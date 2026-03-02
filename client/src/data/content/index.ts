import type { BlogPost, JobPosition, TeamMember } from '../../types/content';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: "L'avenir du Web est immersif : Pourquoi la 3D devient standard",
    excerpt: "Les expériences web statiques ne suffisent plus. Découvrez comment WebGL et Three.js transforment la conversion.",
    date: '12 Mars 2025',
    readTime: '5 min',
    category: 'Tech Trends',
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80',
    slug: 'future-immersive-web'
  },
  {
    id: '2',
    title: "Design System vs UI Kit : Ce dont votre startup a vraiment besoin",
    excerpt: "Ne perdez pas de temps à construire un système complexe si vous n'avez pas encore de product-market fit.",
    date: '28 Février 2025',
    readTime: '4 min',
    category: 'Design',
    imageUrl: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&q=80',
    slug: 'design-system-strategy'
  },
  {
    id: '3',
    title: "Green IT : Comment réduire l'empreinte carbone de vos applications",
    excerpt: "L'optimisation de code n'est pas qu'une question de performance, c'est aussi un enjeu écologique.",
    date: '15 Janvier 2025',
    readTime: '6 min',
    category: 'Engineering',
    imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80',
    slug: 'green-it-practices'
  }
];

export const teamMembers: TeamMember[] = [
    {
        id: 'alex',
        name: 'Alexandre Dubois',
        role: 'CEO & Lead Architect',
        bio: 'Ancien de Google et passionné par les systèmes distribués. "Code is Poetry".',
        imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
        socials: { linkedin: '#', twitter: '#' }
    },
    {
        id: 'sarah',
        name: 'Sarah Chen',
        role: 'Head of Design',
        bio: 'Minimaliste radicale. Elle croit que le meilleur design est invisible.',
        imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
        socials: { linkedin: '#', github: '#' }
    },
    {
        id: 'marcus',
        name: 'Marcus O\'Neil',
        role: 'CTO',
        bio: 'Rust evangelist. Il s\'assure que nos serveurs ne dorment jamais (mais lui si).',
        imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
        socials: { twitter: '#', github: '#' }
    }
];

export const jobPositions: JobPosition[] = [
    {
        id: 'frontend-senior',
        title: 'Senior Frontend Engineer (React/WebGL)',
        department: 'Engineering',
        location: 'Remote (Europe)',
        type: 'Full-time',
        description: 'Nous cherchons un expert capable de créer des expériences 60fps sans transpirer.'
    },
    {
        id: 'product-designer',
        title: 'Product Designer',
        department: 'Design',
        location: 'Paris / Remote',
        type: 'Full-time',
        description: 'Vous maitrisez Figma sur le bout des doigts et avez un oeil pour la typographie.'
    },
    {
        id: 'growth-lead',
        title: 'Growth Marketing Lead',
        department: 'Marketing',
        location: 'Remote',
        type: 'Contract',
        description: 'Aidez-nous à raconter notre histoire au monde entier.'
    }
];
