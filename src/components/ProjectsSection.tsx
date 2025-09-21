import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, X } from "lucide-react";

// Define the Project interface
interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  images: string[];
  technologies: string[];
  demo: string;
  github?: string;
  year: string;
  category: string;
  isFirebase?: boolean;
}

// Sample projects data with images array
const projects: Project[] = [
  {
    id: 1,
    title: "Image-uploaded",
    description:
      "The Cloudinary Asset Storage Web App allows users to securely upload, manage, and store digital assets in the cloud.",
    longDescription:
      "It supports images, videos, and files with real-time preview and drag-and-drop uploads.Built on Cloudinary's API, it provides automatic media optimization and fast CDN delivery. Users can easily perform transformations like resizing, cropping, and format conversion via URL. The app ensures scalable, efficient, and user-friendly media management for developers and businesses.",
    images: [
      "https://res.cloudinary.com/dry3pzan6/image/upload/v1755685092/xghkgcma2dwufvrodujo.png",
      "https://res.cloudinary.com/dry3pzan6/image/upload/v1756544984/e8fcx1y0x6bucwchp5fu.png",
      "https://res.cloudinary.com/dry3pzan6/image/upload/v1756545535/agu7iopkrkpixtiz03nb.png"
    ],
    technologies: ["Html", "Tailwind CSS", "TypeScript", "API-GET"],
    demo: "https://imageuploadergp.vercel.app/",
    github: "https://github.com/Arun-gp/image",
    year: "2024",
    category: "Web App",
   
  },
  {
    id: 2,
    title: "TaskMaster",
    description:
      "TaskMaster is a simple yet powerful task management app designed to help you stay organized and productive.",
    longDescription:
      "It allows you to create, edit, and track tasks with ease. With features like priority setting, deadlines, and progress tracking, TaskMaster ensures you never miss an important task. Its clean and intuitive interface makes it perfect for students, professionals, and anyone looking to boost productivity.",
    images: [
      "https://res.cloudinary.com/dry3pzan6/image/upload/v1756195876/epjmpbemuuthmtjzi9fz.png",
      "https://res.cloudinary.com/dry3pzan6/image/upload/v1756195876/bllfg74996nxp0vux5xb.png",
      "https://res.cloudinary.com/dry3pzan6/image/upload/v1756545870/lvi5mkrlpiu7h6dkvjxn.png"
    ],
    technologies: ["HTML", "Tailwind CSS", "TypeScript", "Firebase"],
    demo: "https://taskmastergp.vercel.app/",
    github: "https://github.com/example/gym-management",
    year: "2024",
    category: "Web App",
    isFirebase: true,
  },
  {
     id: 3,
    title: "Nextriad Solutions",
    description:
      "I co-founded Nextriad Solutions in 2024 along with my friend, with a vision to provide innovative, scalable, and client-focused digital solutions. As a Developer and Co-Founder,",
    longDescription:
      " I have been actively involved in designing and delivering projects across e-commerce and business domains.Through this journey, I gained experience not only in software development but also in client communication, project delivery, and startup growth.These projects focused on building responsive e-commerce websites that enhanced online sales, improved customer engagement, and streamlined digital transactions.",
    images: [
      "https://res.cloudinary.com/dry3pzan6/image/upload/v1758444551/flhatmshr3hjhxqootmo.png",
      "https://res.cloudinary.com/dry3pzan6/image/upload/v1758444549/v80inaqffz0tfcf9m8cv.png",
      "https://res.cloudinary.com/dry3pzan6/image/upload/v1758444546/sbgzxe9da6rgeylk2hyp.png",
      "https://res.cloudinary.com/dry3pzan6/image/upload/v1758444558/ivzlnamjdjnzdndioemq.png",
      "https://res.cloudinary.com/dry3pzan6/image/upload/v1758444552/adf0gnefzq6fudlyiobb.png"
    ],
    technologies: ["HTML", "Javascript", "TailWindCSS", "ReactJs"],
    demo: "https://www.nextriadsolutions.com/",
    year: "2024",
    category: "Web App",
  },
  {
    id: 4,
    title: "Vinayaka Crackers",
    description:
      "A modern e-commerce solution with advanced features including real-time inventory management, secure payment processing, and comprehensive analytics dashboard.",
    longDescription:
      "Full-stack e-commerce platform designed for scalability and performance. Features include product catalog management, order processing, payment integration, and customer relationship management.",
    images: [
      "https://res.cloudinary.com/dry3pzan6/image/upload/v1758454646/t0tykdpnvwzwmgyqabwa.png",
      "https://res.cloudinary.com/dry3pzan6/image/upload/v1758454644/p2inrjuor8pxmvntcmvy.png",
      "https://res.cloudinary.com/dry3pzan6/image/upload/v1758454642/lposowtcs8y40d3alb8v.png"
    ],
    technologies: ["React", "CSS3", "Firebase","Responsive Design"],
    demo: "https://www.srivinayakacrackers.com",
    year: "2025",
    category: "Web App",
    isFirebase:true
  },
  {
    id: 5,
    title: "Task Management System",
    description:
      "Collaborative task management platform with real-time updates, team collaboration features, and advanced project tracking capabilities.",
    longDescription:
      "Enterprise-level task management system designed for teams of all sizes. Includes project planning, resource allocation, time tracking, and comprehensive reporting features.",
    images: [
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=200&fit=crop",
      "https://images.unsplash.com/photo-1516321318423-5310b20a24f5?w=400&h=200&fit=crop",
      "https://images.unsplash.com/photo-1593642532400-2682810df593?w=400&h=200&fit=crop"
    ],
    technologies: ["Vue.js", "MongoDB", "Express", "Socket.io"],
    demo: "https://taskmaster.com",
    github: "https://github.com/example/task-management",
    year: "2023",
    category: "Web App",
  },
  {
    id: 6,
    title: "Weather Analytics Dashboard",
    description:
      "Real-time weather data visualization platform with predictive analytics, historical data analysis, and customizable reporting features.",
    longDescription:
      "Advanced weather analytics platform providing comprehensive meteorological insights. Features include real-time data streaming, machine learning predictions, and interactive data visualizations.",
    images: [
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=200&fit=crop",
      "https://images.unsplash.com/photo-1516321318423-5310b20a24f5?w=400&h=200&fit=crop",
      "https://images.unsplash.com/photo-1593642532400-2682810df593?w=400&h=200&fit=crop"
    ],
    technologies: ["React", "D3.js", "Python", "FastAPI"],
    demo: "https://weather-analytics.com",
    github: "https://github.com/example/weather-dashboard",
    year: "2023",
    category: "Web App",
  },
  {
    id: 7,
    title: "Social Media Dashboard",
    description:
      "Comprehensive social media management platform with analytics, scheduling, and engagement tracking features.",
    longDescription:
      "Advanced social media management tool that helps businesses manage multiple social accounts, schedule posts, track engagement metrics, and analyze performance across platforms.",
    images: [
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=200&fit=crop",
      "https://images.unsplash.com/photo-1516321318423-5310b20a24f5?w=400&h=200&fit=crop",
      "https://images.unsplash.com/photo-1593642532400-2682810df593?w=400&h=200&fit=crop"
    ],
    technologies: ["React", "Node.js", "MongoDB", "Chart.js"],
    demo: "https://socialdash.com",
    github: "https://github.com/example/social-dashboard",
    year: "2023",
    category: "Web App",
  },
  {
    id: 8,
    title: "Real Estate Platform",
    description:
      "Modern real estate platform with property listings, virtual tours, and advanced search functionality.",
    longDescription:
      "Full-featured real estate platform offering property search, virtual tours, mortgage calculators, and agent management. Built for scalability and user experience.",
    images: [
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=200&fit=crop",
      "https://images.unsplash.com/photo-1516321318423-5310b20a24f5?w=400&h=200&fit=crop",
      "https://images.unsplash.com/photo-1593642532400-2682810df593?w=400&h=200&fit=crop"
    ],
    technologies: ["Next.js", "PostgreSQL", "AWS", "Stripe"],
    demo: "https://realestate.com",
    github: "https://github.com/example/real-estate",
    year: "2023",
    category: "Web App",
  },
  {
    id: 9,
    title: "Learning Management System",
    description:
      "Comprehensive LMS with course creation, student tracking, and interactive learning features.",
    longDescription:
      "Enterprise-grade learning management system with course authoring tools, progress tracking, assessments, and collaborative learning features.",
    images: [
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=200&fit=crop",
      "https://images.unsplash.com/photo-1516321318423-5310b20a24f5?w=400&h=200&fit=crop",
      "https://images.unsplash.com/photo-1593642532400-2682810df593?w=400&h=200&fit=crop"
    ],
    technologies: ["React", "Firebase", "WebRTC", "Chart.js"],
    demo: "https://learningms.com",
    github: "https://github.com/example/lms",
    year: "2022",
    category: "Web App",
    isFirebase: true,
  },
  {
    id: 10,
    title: "Fitness Tracking App",
    description:
      "Mobile-first fitness tracking application with workout plans, nutrition tracking, and progress analytics.",
    longDescription:
      "Comprehensive fitness application featuring workout planning, nutrition tracking, progress visualization, and social features for fitness enthusiasts.",
    images: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=200&fit=crop",
      "https://images.unsplash.com/photo-1516321318423-5310b20a24f5?w=400&h=200&fit=crop",
      "https://images.unsplash.com/photo-1593642532400-2682810df593?w=400&h=200&fit=crop"
    ],
    technologies: ["React Native", "Firebase", "HealthKit", "Charts"],
    demo: "https://fitnesstrack.com",
    github: "https://github.com/example/fitness-app",
    year: "2022",
    category: "Mobile App",
    isFirebase: true,
  },
  {
    id: 11,
    title: "Inventory Management System",
    description:
      "Advanced inventory management solution with real-time tracking, automated ordering, and comprehensive reporting.",
    longDescription:
      "Enterprise inventory management system with barcode scanning, automated reordering, supplier management, and detailed analytics dashboard.",
    images: [
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=200&fit=crop",
      "https://images.unsplash.com/photo-1516321318423-5310b20a24f5?w=400&h=200&fit=crop",
      "https://images.unsplash.com/photo-1593642532400-2682810df593?w=400&h=200&fit=crop"
    ],
    technologies: ["Vue.js", "Laravel", "MySQL", "Redis"],
    demo: "https://inventory.com",
    github: "https://github.com/example/inventory",
    year: "2022",
    category: "Web App",
  },
  {
    id: 12,
    title: "Project Management Tool",
    description:
      "Collaborative project management platform with Kanban boards, time tracking, and team collaboration features.",
    longDescription:
      "Full-featured project management tool with drag-and-drop task management, time tracking, file sharing, and real-time collaboration capabilities.",
    images: [
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&fit=crop",
      "https://images.unsplash.com/photo-1516321318423-5310b20a24f5?w=400&h=200&fit=crop",
      "https://images.unsplash.com/photo-1593642532400-2682810df593?w=400&h=200&fit=crop"
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Socket.io"],
    demo: "https://projecttool.com",
    github: "https://github.com/example/project-tool",
    year: "2022",
    category: "Web App",
  },
];

const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set());
  const [modalImageIndex, setModalImageIndex] = useState<number>(0);
  const [isModalCarouselAutoPlaying, setIsModalCarouselAutoPlaying] = useState<boolean>(true);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Add this function to handle image errors
  const handleImageError = (projectId: number) => {
    setFailedImages((prev: Set<number>) => new Set(prev).add(projectId));
  };

  // Responsive items per view
  const getItemsPerView = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 768) {
        return 1; // Mobile
      } else if (window.innerWidth < 1024) {
        return 2; // Tablet
      }
    }
    return 3; // Desktop
  };

  const [itemsPerView, setItemsPerView] = useState(getItemsPerView());

  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(getItemsPerView());
      setCurrentIndex(0); // Reset to first slide when screen size changes
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, projects.length - itemsPerView);

  // Auto-slide functionality for main carousel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= maxIndex) {
          return 0; // Reset to first slide
        }
        return prev + 1;
      });
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, maxIndex]);

  // Auto-slide functionality for modal carousel
  useEffect(() => {
    if (!isModalCarouselAutoPlaying || !selectedProject) return;

    const interval = setInterval(() => {
      setModalImageIndex((prev) => {
        if (prev >= selectedProject.images.length - 1) {
          return 0; // Reset to first image
        }
        return prev + 1;
      });
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [isModalCarouselAutoPlaying, selectedProject]);

  // Pause auto-slide when user interacts
  const handleUserInteraction = () => {
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume after 10 seconds of no interaction
  };

  // Modal carousel controls
  const nextModalImage = (): void => {
    setIsModalCarouselAutoPlaying(false);
    setTimeout(() => setIsModalCarouselAutoPlaying(true), 8000);
    setModalImageIndex((prev) => (prev + 1) % (selectedProject?.images.length || 1));
  };

  const prevModalImage = (): void => {
    setIsModalCarouselAutoPlaying(false);
    setTimeout(() => setIsModalCarouselAutoPlaying(true), 8000);
    setModalImageIndex((prev) => (prev - 1 + (selectedProject?.images.length || 1)) % (selectedProject?.images.length || 1));
  };

  const goToModalImage = (index: number): void => {
    setIsModalCarouselAutoPlaying(false);
    setTimeout(() => setIsModalCarouselAutoPlaying(true), 8000);
    setModalImageIndex(index);
  };

  const nextSlide = (): void => {
    handleUserInteraction();
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = (): void => {
    handleUserInteraction();
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const goToSlide = (index: number): void => {
    handleUserInteraction();
    setCurrentIndex(Math.min(index, maxIndex));
  };

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setModalImageIndex(0); // Reset to first image when opening modal
    setIsModalCarouselAutoPlaying(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsModalCarouselAutoPlaying(false);
  };

  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-16 px-4"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full px-6 py-3">
              <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
              <span className="text-slate-300 font-medium">Featured Work</span>
            </div>
          </div>
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Explore my collection of web applications and projects
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative mb-8"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out gap-6"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
              ref={carouselRef}
            >
              {projects.map((project: Project) => (
                <div
                  key={project.id}
                  className={`${
                    itemsPerView === 1
                      ? "w-full"
                      : itemsPerView === 2
                      ? "w-1/2"
                      : "w-1/3"
                  } flex-shrink-0`}
                >
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 group">
                    {/* Project Image */}
                    <div className="relative h-48 bg-gradient-to-br from-slate-700 to-slate-800 overflow-hidden">
                      {!failedImages.has(project.id) ? (
                        <img
                          src={project.images[0]}
                          alt={project.title}
                          className="w-full h-full object-cover"
                          onError={() => handleImageError(project.id)}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="text-slate-400 text-center">
                            <div className="w-12 h-12 mx-auto mb-2 bg-slate-600 rounded-full flex items-center justify-center">
                              <X className="w-6 h-6" />
                            </div>
                            <p className="text-xs">Image not available</p>
                          </div>
                        </div>
                      )}

                      <div className="absolute top-3 left-3">
                        <span className="bg-cyan-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                          {project.category}
                        </span>
                      </div>
                      {project.isFirebase && (
                        <div className="absolute bottom-3 left-3">
                          <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                            Firebase
                          </span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-slate-300 text-sm mb-6 leading-relaxed line-clamp-3">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies
                            .slice(0, 3)
                            .map((tech: string, i: number) => (
                              <span
                                key={i}
                                className="text-xs px-2 py-1 bg-slate-700/50 text-slate-300 rounded-md border border-slate-600/30"
                              >
                                {tech}
                              </span>
                            ))}
                          {project.technologies.length > 3 && (
                            <span className="text-xs px-2 py-1 text-slate-400">
                              +{project.technologies.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Actions */}
                      <button
                        onClick={() => openModal(project)}
                        className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-3 px-4 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center gap-2"
                      >
                        View Details
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation and Dots Container */}
        <div className="flex justify-center items-center gap-4 mb-8">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="w-10 h-10 bg-slate-800/80 border border-slate-600 rounded-full flex items-center justify-center text-white hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-1.5">
            {Array.from({ length: maxIndex + 1 }, (_, i: number) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? "bg-cyan-400"
                    : "bg-slate-600 hover:bg-slate-500"
                }`}
              />
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            disabled={currentIndex === maxIndex}
            className="w-10 h-10 bg-slate-800/80 border border-slate-600 rounded-full flex items-center justify-center text-white hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Project Counter */}
        <div className="text-center">
          <p className="text-slate-400">
            Showing {Math.min(currentIndex + itemsPerView, projects.length)} of{" "}
            {projects.length} projects
          </p>
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-3">
                      {selectedProject.title}
                    </h3>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-cyan-500 text-white text-sm px-3 py-1 rounded-full">
                        {selectedProject.category}
                      </span>
                      {selectedProject.isFirebase && (
                        <span className="bg-orange-500 text-white text-sm px-3 py-1 rounded-full flex items-center gap-2">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                          Firebase
                        </span>
                      )}
                      <span className="text-slate-400">
                        {selectedProject.year}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={closeModal}
                    className="w-10 h-10 bg-slate-700 hover:bg-slate-600 rounded-full flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Modal Image Carousel */}
                <div 
                  className="relative h-64 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl mb-6 overflow-hidden group"
                  onMouseEnter={() => setIsModalCarouselAutoPlaying(false)}
                  onMouseLeave={() => setIsModalCarouselAutoPlaying(true)}
                >
                  <div className="relative w-full h-full">
                    <img
                      src={selectedProject.images[modalImageIndex]}
                      alt={`${selectedProject.title} - Image ${modalImageIndex + 1}`}
                      className="w-full h-full object-cover transition-opacity duration-500"
                      onError={() => {}}
                    />
                    
                    {/* Overlay with project info */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h4 className="font-semibold text-lg">{selectedProject.title}</h4>
                      <p className="text-sm text-slate-300">{selectedProject.category}</p>
                    </div>

                    {/* Navigation buttons */}
                    <button
                      onClick={prevModalImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 opacity-0 group-hover:opacity-100"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextModalImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 opacity-0 group-hover:opacity-100"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>

                    {/* Image counter */}
                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                      {modalImageIndex + 1} / {selectedProject.images.length}
                    </div>
                  </div>

                  {/* Dots indicator for modal carousel */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {selectedProject.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToModalImage(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === modalImageIndex
                            ? "bg-cyan-400"
                            : "bg-white/40 hover:bg-white/60"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <p className="text-slate-300 mb-8 leading-relaxed text-lg">
                  {selectedProject.longDescription}
                </p>

                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-white mb-4">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map(
                      (tech: string, i: number) => (
                        <span
                          key={i}
                          className="bg-slate-700/50 border border-slate-600/30 text-slate-300 px-4 py-2 rounded-lg text-sm"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                </div>

                <div className="flex gap-4">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      className="flex items-center gap-3 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-xl transition-all duration-300 hover:shadow-lg"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      View Code
                    </a>
                  )}
                  {selectedProject.demo && (
                    <a
                      href={selectedProject.demo}
                      className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Visit Live Site
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;