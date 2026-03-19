import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import HeroSection from './components/HeroSection';
import TrustLine from './components/TrustLine';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import PricingSection from './components/PricingSection';
import ProcessSection from './components/ProcessSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import './App.css';

function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main className="main-content">
        <HeroSection />
        <TrustLine />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <WhyChooseUsSection />
        <PricingSection />
        <ProcessSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
