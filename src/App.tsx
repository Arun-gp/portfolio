import { useEffect, useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, ExternalLink, Code2, Smartphone, Database, Palette, Download } from 'lucide-react';
import pdf from "./assets/Pdf/ARUN-PANDI-G-P-FlowCV-Resume.pdf"
import ContactForm from './components/Contact';
type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
};
type Service = {
  icon: JSX.Element;
  title: string;
  description: string;
};
type Skill = {
  name: string;
  icon: JSX.Element;
  color: string;
};

function App() {
  const { scrollYProgress } = useScroll();
  const typedRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    if (!typedRef.current) return;

    const strings = ['Full Stack Developer', 'UI/UX Designer', 'Problem Solver'];
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
      // Clean up timeouts if component unmounts
      clearTimeout(type as unknown as number);
    };
  }, []);

  const downloadCV = async () => {
    // Path to your PDF file in the assets folder
    const pdfUrl = pdf;
    const fileName = 'ArunPandiResume.pdf'; // Name you want the downloaded file to have
    
    // Create an anchor element
    const anchor = document.createElement('a');
    anchor.href = pdfUrl;
    anchor.download = fileName;
    
    // Append to the body, trigger click, then remove
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);

  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills: Skill[] = [
    { name: "React", icon: <Code2 className="w-8 h-8" />, color: "text-cyan-400" },
    { name: "Node.js", icon: <Database className="w-8 h-8" />, color: "text-green-500" },
    { name: "TypeScript", icon: <Code2 className="w-8 h-8" />, color: "text-blue-500" },
    { name: "Python", icon: <Code2 className="w-8 h-8" />, color: "text-yellow-500" },
    { name: "AWS", icon: <Database className="w-8 h-8" />, color: "text-orange-500" },
    { name: "Docker", icon: <Database className="w-8 h-8" />, color: "text-blue-400" },
    { name: "GraphQL", icon: <Database className="w-8 h-8" />, color: "text-pink-500" },
    { name: "PostgreSQL", icon: <Database className="w-8 h-8" />, color: "text-blue-600" }
  ];

  const projects: Project[] = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management",
      image: "https://res.cloudinary.com/dry3pzan6/image/upload/v1741195252/login_page_sgmmpo.jpg",
      technologies: ["React", "Node.js", "FireBase"],
      github: "https://github.com/Arunsoftware2003/samplewebsite",
      demo: "https://samplewebsite-sooty.vercel.app/"
    },
    {
      title: "AI Task Manager",
      description: "Smart task management app with AI-powered prioritization",
      image: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=800&auto=format&fit=crop&q=60",
      technologies: ["Python", "TensorFlow", "React"],
      github: "#",
      demo: "#"
    }
  ];

  const services: Service[] = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Web Development",
      description: "Creating responsive and performant web applications"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile solutions"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "API Development",
      description: "RESTful and GraphQL API architectures"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Intuitive and beautiful user interfaces"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/90 backdrop-blur-sm border-b border-slate-700">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold text-cyan-400"
            >
              AP
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['about', 'projects', 'services', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-slate-300 hover:text-cyan-400 capitalize transition-colors"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-cyan-400 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Hero Section */}
      <header className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
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
              className="text-6xl md:text-7xl font-bold mb-4 text-slate-100"
            >
              Arun Pandi
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16 }}
              className="text-4xl md:text-5xl font-bold mb-6 text-slate-400"
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

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-8 text-center text-slate-100">About Me</h2>
            <div className="max-w-3xl mx-auto text-slate-300">
              <p className="text-lg mb-12">
                I’m a passionate and motivated Full-Stack Developer with a strong foundation in web development and software engineering. As an MCA student, I’ve built several academic and personal projects that reflect my skills in HTML, CSS, JavaScript, React, Node.js, and MongoDB. I enjoy turning complex problems into clean, user-friendly solutions and am always eager to learn the latest technologies. I'm now looking for opportunities to grow in a dynamic team and contribute to real-world projects.


              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, rotateX: 90 }}
                    whileInView={{ opacity: 1, rotateX: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, rotateY: 10 }}
                    className="bg-slate-700/50 rounded-lg p-6 text-center border border-cyan-400/20 hover:border-cyan-400/40 transition-colors"
                  >
                    <div className={`mb-3 ${skill.color} flex justify-center`}>
                      {skill.icon}
                    </div>
                    <span className="text-slate-100">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-slate-100">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02, rotateY: 5 }}
                className="bg-slate-700/50 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-cyan-400/20 transition-all border border-cyan-400/20"
              >
                <div className="relative overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover transform hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent" />
                </div>
                <div className="p-6 relative">
                  <h3 className="text-2xl font-semibold mb-2 text-slate-100">{project.title}</h3>
                  <p className="text-slate-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="bg-cyan-400/10 text-cyan-400 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href={project.github} className="text-slate-100 hover:text-cyan-400 transform hover:scale-110 transition-transform">
                      <Github className="w-6 h-6" />
                    </a>
                    <a href={project.demo} className="text-slate-100 hover:text-cyan-400 transform hover:scale-110 transition-transform">
                      <ExternalLink className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-slate-100">Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20, rotateX: 45 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotateY: 10 }}
                className="bg-slate-700/50 p-6 rounded-xl text-center hover:shadow-xl hover:shadow-cyan-400/20 transition-all border border-cyan-400/20"
              >
                <motion.div
                  whileHover={{ rotateY: 180 }}
                  transition={{ duration: 0.6 }}
                  className="mb-4 text-cyan-400"
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 text-slate-100">{service.title}</h3>
                <p className="text-slate-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            
            <ContactForm/>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex justify-center gap-6 mb-12 mt-10"
            >
              {[
                { icon: <Github className="w-6 h-6" />, href: "https://github.com/Arun-gp" },
                { icon: <Linkedin className="w-6 h-6" />, href: "#" },
                { icon: <Twitter className="w-6 h-6" />, href: "#" },
                { icon: <Mail className="w-6 h-6" />, href: "mailto:arunpandimca@gmail.com" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-slate-400 text-xl"
            >
              © {new Date().getFullYear()} Arun Pandi GP. All rights reserved.
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;