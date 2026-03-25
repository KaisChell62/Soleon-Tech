import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import LoadingSpinner from './components/LoadingSpinner';
import ScrollToTop from './components/ScrollToTop';
import PageMeta from './components/PageMeta';
import LanguageLayout from './layouts/LanguageLayout';
import RootRedirect from './components/RootRedirect';
import { routePaths, SUPPORTED_LANGUAGES, type SupportedLanguage } from './routes/config';

// Lazy Loading Pages used for code splitting
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));

// Trust Pages (Phase 1)
const WhyUs = lazy(() => import('./pages/trust/WhyUs'));
const Security = lazy(() => import('./pages/trust/Security'));
const International = lazy(() => import('./pages/trust/International'));
const GlobalOperations = lazy(() => import('./pages/trust/GlobalOperations'));
const FAQ = lazy(() => import('./pages/trust/FAQ'));

// Interactive Pages (Phase 2)
const LiveBoard = lazy(() => import('./pages/interactive/LiveBoard'));
const PacksConfigurator = lazy(() => import('./pages/interactive/PacksConfigurator'));

// Content Pages (Phase 3)
const About = lazy(() => import('./pages/content/About'));
const Blog = lazy(() => import('./pages/content/Blog'));
const Careers = lazy(() => import('./pages/content/Careers'));
const PrivacyPolicy = lazy(() => import('./pages/content/PrivacyPolicy'));
const TermsAndConditions = lazy(() => import('./pages/content/TermsAndConditions'));

// Demos (Loaded lazily)
const EcoMarketDemo = lazy(() => import('./pages/demos/EcoMarket'));
const VelocityDemo = lazy(() => import('./pages/demos/Velocity'));
const ZenithBankDemo = lazy(() => import('./pages/demos/ZenithBank'));
const AuraWatchesDemo = lazy(() => import('./pages/demos/AuraWatches'));
const SkylineRealEstateDemo = lazy(() => import('./pages/demos/SkylineRealEstate'));
const VitalityFitnessDemo = lazy(() => import('./pages/demos/VitalityFitness'));
const CyberGuardDemo = lazy(() => import('./pages/demos/CyberGuard'));
const HyperStreamDemo = lazy(() => import('./pages/demos/HyperStream'));
const NebulaIdentityDemo = lazy(() => import('./pages/demos/NebulaIdentity'));

const components: Record<string, React.ComponentType<any>> = {
  home: Home,
  services: Services,
  portfolio: Portfolio,
  projectDetail: ProjectDetail,
  contact: Contact,
  whyUs: WhyUs,
  security: Security,
  international: International,
  expertise: GlobalOperations,
  faq: FAQ,
  liveBoard: LiveBoard,
  packs: PacksConfigurator,
  about: About,
  blog: Blog,
  careers: Careers,
  privacy: PrivacyPolicy,
  terms: TermsAndConditions
};

function App() {
  return (
    <>
      <PageMeta />
      <ScrollToTop />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          {/* Root redirect */}
          <Route path="/" element={<RootRedirect />} />

          {/* Language Loops */}
          {SUPPORTED_LANGUAGES.map(lang => (
             <Route key={lang} path={`/${lang}`} element={<LanguageLayout forcedLanguage={lang} />}>
               <Route element={<MainLayout />}>
                 {Object.entries(routePaths).map(([key, paths]) => {
                   const path = paths[lang];
                   // Skip undefined paths (but allow empty string for home/index)
                   if (path === undefined) return null;
                   
                   const Component = components[key];
                   if (!Component) return null;

                   const isIndex = path === '';

                   return (
                     <Route 
                       key={`${lang}-${key}`}
                       index={isIndex}
                       path={isIndex ? undefined : path}
                       element={<Component />} 
                     />
                   );
                 })}
                 {/* Explicitly adding non-mapped or index if simplified loop failed */}
                 {/* But wait, index route inside /:lang must use 'index' prop XOR path="/" */}
                 {/* The loop handles path='' which works as relative path matching parent. */}
               </Route>
             </Route>
          ))}

          {/* Standalone Demos (No generic layout, keep english or generic path?) */}
          {/* Ideally Demos should also be localized but for now keep them global or under /demos */}
          <Route path="/demos/eco-market" element={<EcoMarketDemo />} />
          <Route path="/demos/velocity" element={<VelocityDemo />} />
          <Route path="/demos/zenith-bank" element={<ZenithBankDemo />} />
          <Route path="/demos/aura-watches" element={<AuraWatchesDemo />} />
          <Route path="/demos/skyline-realestate" element={<SkylineRealEstateDemo />} />
          <Route path="/demos/vitality-fitness" element={<VitalityFitnessDemo />} />
          <Route path="/demos/cyberguard" element={<CyberGuardDemo />} />
          <Route path="/demos/hyperstream" element={<HyperStreamDemo />} />
          <Route path="/demos/nebula-identity" element={<NebulaIdentityDemo />} />
          
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
