// React import not required with automatic JSX runtime

type LogoProps = {
  className?: string;
  projectId: string;
};

const EcoMarketLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 40 40" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35C28.2843 35 35 28.2843 35 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M20 5C24 5 28 8 28 14C28 22 20 25 20 35" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M20 18C16 18 14 14 14 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

const VelocityLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 40 40" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M8 8L16 32L24 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 8L28 26L32 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ZenithLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 40 40" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="5" width="30" height="30" rx="4" stroke="currentColor" strokeWidth="2.5"/>
    <path d="M12 12H28L12 28H28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const NebulaLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 40 40" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="2.5" strokeDasharray="4 4"/>
    <circle cx="20" cy="20" r="6" fill="currentColor"/>
  </svg>
);

const AuraLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 40 40" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4L4 36H10L14 28H26L30 36H36L20 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M20 12L16 22H24L20 12Z" fill="currentColor"/>
  </svg>
);

const SkylineLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 40 40" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M8 32V18L18 10L28 18V32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18 32V24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M32 32H8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

const VitalityLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 40 40" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M4 20H10L15 8L25 32L30 20H36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const NexusLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 40 40" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="4" fill="currentColor"/>
    <circle cx="30" cy="10" r="4" fill="currentColor"/>
    <circle cx="10" cy="30" r="4" fill="currentColor"/>
    <circle cx="24" cy="24" r="4" fill="currentColor"/>
    <line x1="10" y1="10" x2="30" y2="10" stroke="currentColor" strokeWidth="2"/>
    <line x1="10" y1="10" x2="10" y2="30" stroke="currentColor" strokeWidth="2"/>
    <line x1="10" y1="30" x2="24" y2="24" stroke="currentColor" strokeWidth="2"/>
    <line x1="30" y1="10" x2="24" y2="24" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const FormaLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 40 40" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="8" width="10" height="10" stroke="currentColor" strokeWidth="2.5"/>
    <circle cx="26" cy="13" r="6" stroke="currentColor" strokeWidth="2.5"/>
    <path d="M8 26L18 36H28L18 26H8Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
  </svg>
);


const QuantumLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 40 40" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="10" stroke="currentColor" strokeWidth="1" />
    <ellipse cx="20" cy="20" rx="16" ry="6" stroke="currentColor" strokeWidth="1.5" transform="rotate(45 20 20)" />
    <ellipse cx="20" cy="20" rx="16" ry="6" stroke="currentColor" strokeWidth="1.5" transform="rotate(-45 20 20)" />
  </svg>
);

const CyberGuardLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 40 40" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4L6 10V20C6 28 12 34 20 36C28 34 34 28 34 20V10L20 4Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
    <path d="M14 18L18 22L26 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const HyperStreamLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 40 40" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M14 10L30 20L14 30V10Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
  </svg>
);

const UrbanPulseLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 40 40" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="20" width="6" height="14" fill="currentColor"/>
    <rect x="17" y="12" width="6" height="22" fill="currentColor"/>
    <rect x="26" y="8" width="6" height="26" fill="currentColor"/>
    <line x1="4" y1="34" x2="36" y2="34" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const DefaultLogo = ({ className }: { className?: string }) => (
   <svg viewBox="0 0 40 40" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="2"/>
   </svg>
)

export default function BrandLogo({ projectId, className = "w-10 h-10" }: LogoProps) {
  // Normalize ID just in case
  const id = projectId.toLowerCase();

  // Partial matching or exact matching
  if (id.includes('quantum')) return <QuantumLogo className={className} />;
  if (id.includes('cyber')) return <CyberGuardLogo className={className} />;
  if (id.includes('hyper')) return <HyperStreamLogo className={className} />;
  if (id.includes('urban')) return <UrbanPulseLogo className={className} />;
  
  if (id.includes('eco-market')) return <EcoMarketLogo className={className} />;
  if (id.includes('velocity')) return <VelocityLogo className={className} />;
  if (id.includes('zenith')) return <ZenithLogo className={className} />;
  if (id.includes('nebula')) return <NebulaLogo className={className} />;
  if (id.includes('aura')) return <AuraLogo className={className} />;
  if (id.includes('skyline')) return <SkylineLogo className={className} />;
  if (id.includes('vitality')) return <VitalityLogo className={className} />;
  if (id.includes('nexus')) return <NexusLogo className={className} />;

}
