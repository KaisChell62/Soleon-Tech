import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import LoadingSpinner from './components/LoadingSpinner';
import ScrollToTop from './components/ScrollToTop';
import PageMeta from './components/PageMeta';

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

function App() {
  return (
    <Router>
      <PageMeta />
      <ScrollToTop />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="portfolio/:id" element={<ProjectDetail />} />
            <Route path="contact" element={<Contact />} />
            
            {/* Trust Pages */}
            <Route path="why-us" element={<WhyUs />} />
            <Route path="security" element={<Security />} />
            <Route path="international" element={<International />} />
            <Route path="expertise" element={<GlobalOperations />} />
            <Route path="faq" element={<FAQ />} />

            {/* Interactive Pages */}
            <Route path="live-board" element={<LiveBoard />} />
            <Route path="packs" element={<PacksConfigurator />} />
            
            {/* Content Pages */}
            <Route path="about" element={<About />} />
            <Route path="blog" element={<Blog />} />
            <Route path="careers" element={<Careers />} />
            <Route path="privacy" element={<PrivacyPolicy />} />
            <Route path="terms" element={<TermsAndConditions />} />
          </Route>
          
          {/* Standalone Demos (No generic layout) */}
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
    </Router>
  );
}

export default App;
