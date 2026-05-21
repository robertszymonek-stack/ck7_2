import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import PowerSelection from "./components/PowerSelection";
import ProblemsSection from "./components/ProblemsSection";
import BuyerGuide from "./components/BuyerGuide";
import Certifications from "./components/Certifications";
import Packages from "./components/Packages";
import PricingExtras from "./components/PricingExtras";
import PricingPage from "./components/PricingPage";
import PowerGuide from "./components/PowerGuide";
import Warranty from "./components/Warranty";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import StickyCTA from "./components/StickyCTA";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 pb-16 lg:pb-0">
      <Nav />
      <main>
        <Hero />
        <Stats />
        <ProblemsSection />
        <PowerSelection />
        <BuyerGuide />
        <Packages />
        <PricingExtras />
        <PricingPage />
        <PowerGuide />
        <Process />
        <Warranty />
        <Certifications />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}
