import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Download } from 'lucide-react';
// Import your resume PDF from the assets folder
import resumePDF from '../assets/Pdf/ArunPandiResume.pdf';

const HeroSection = () => {
  const typedRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    if (!typedRef.current) return;

    const strings = ['Full Stack Developer',  'QA-Automation Tester'];
    let stringIndex = 0;
    let characterIndex = 0;
    let isDeleting = false;
    
    const type = () => {
      const currentString = strings[stringIndex];
      
      if (!isDeleting) {
        typedRef.current!.textContent = currentString.substring(0, characterIndex + 1);
        characterIndex++;
        
        if (characterIndex === currentString.length) {
          isDeleting = true;
          setTimeout(type, 1500);
          return;
        }
      } else {
        typedRef.current!.textContent = currentString.substring(0, characterIndex - 1);
        characterIndex--;
        
        if (characterIndex === 0) {
          isDeleting = false;
          stringIndex = (stringIndex + 1) % strings.length;
        }
      }
      
      setTimeout(type, isDeleting ? 50 : 100);
    };
    
    type();

    return () => {
      clearTimeout(type as unknown as number);
    };
  }, []);

  const downloadCV = () => {
    // Create a temporary anchor element to trigger download
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'ArunPandiResume.pdf';
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-radial from-cyan-400/10 via-transparent to-transparent" />
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left z-10"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-cyan-400 mb-4"
          >
            Hi, my name is
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-slate-100"
          >
            Arun Pandi
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 text-slate-400"
          >
            I'm a <span ref={typedRef} className="text-cyan-400"></span>
          </motion.h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={downloadCV}
            className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-md text-lg font-semibold hover:bg-cyan-400/10 transition-colors flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
            Download CV
          </motion.button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/30 to-blue-600/30 rounded-full animate-pulse" />
            <img
              src="https://res.cloudinary.com/dry3pzan6/image/upload/v1753515796/arun-removebg-preview_fm01sh.png"
              alt="Profile"
              className="relative z-10 w-full h-full object-cover rounded-full border-4 border-cyan-400/20 shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full blur-xl -z-10" />
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default HeroSection;