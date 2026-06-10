import { Routes, Route } from 'react-router-dom';
import { Header } from './sections/Header';
import { HeroSection } from './sections/HeroSection';
import { ProblemSection } from './sections/ProblemSection';
import { SolutionSection } from './sections/SolutionSection';
import { CapabilitySection } from './sections/CapabilitySection';
import { FeatureSection } from './sections/FeatureSection';
import { StoryShareSection } from './sections/StoryShareSection';
import { HowItWorksSection } from './sections/HowItWorksSection';
import { FAQSection } from './sections/FAQSection';
import { CTASection } from './sections/CTASection';
import { WaitlistSection } from './sections/WaitlistSection';
import { Footer } from './sections/Footer';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { SupportPage } from './pages/SupportPage';

function LandingPage() {
  return (
    <div className="min-h-screen bg-[#08080c] text-white relative overflow-x-hidden">
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />
          <ProblemSection />
          <SolutionSection />
          <CapabilitySection />
          <FeatureSection />
          <StoryShareSection />
          <HowItWorksSection />
          <FAQSection />
          <CTASection />
          <WaitlistSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/terms" element={<TermsPage />} />
      <Route path="/support" element={<SupportPage />} />
    </Routes>
  );
}

export default App;
