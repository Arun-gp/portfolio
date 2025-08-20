import { motion, useScroll } from 'framer-motion';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <Navbar />
      
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-cyan-400 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      <HeroSection />
      <AboutSection />
      
    

      <ProjectsSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;