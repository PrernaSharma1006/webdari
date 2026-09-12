import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  Eye, 
  X, 
  ArrowRight, 
  Grid, 
  Layers, 
  Maximize2,
  CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';

const PORTFOLIO_PROJECTS = [
  {
    id: 'gehri_media',
    title: 'Gehri Media',
    subtitle: 'Media Production & Creative Studio',
    category: 'Branding & Web Design',
    bannerImg: '/portfolio_banner_images/Screenshot (122).png',
    description: 'A sleek, high-contrast digital showcase crafted for Gehri Media to highlight creative video production, portfolio reels, and brand services.',
    tag: 'Creative Studio',
    badge: '23 Screenshots',
    folder: '/portfolio_gehri_media',
    images: [
      'Screenshot (121).png',
      'Screenshot (122).png',
      'Screenshot (123).png',
      'Screenshot (124).png',
      'Screenshot (125).png',
      'Screenshot (127).png',
      'Screenshot (128).png',
      'Screenshot (129).png',
      'Screenshot (130).png',
      'Screenshot (131).png',
      'Screenshot (132).png',
      'Screenshot (133).png',
      'Screenshot (134).png',
      'Screenshot (135).png',
      'Screenshot (136).png',
      'Screenshot (137).png',
      'Screenshot (138).png',
      'Screenshot (139).png',
      'Screenshot (140).png',
      'Screenshot (141).png',
      'Screenshot (142).png',
      'Screenshot (143).png',
      'Screenshot (144).png'
    ],
    highlights: ['Dark-mode aesthetic', 'Fast media loading', 'Client portfolio grid', 'Direct lead capture']
  },
  {
    id: 'muscle_ignitor',
    title: 'Muscle Ignitor',
    subtitle: 'Fitness & Health Supplement Brand',
    category: 'E-Commerce Architecture',
    bannerImg: '/portfolio_banner_images/Screenshot (101).png',
    description: 'High-converting e-commerce web platform engineered for maximum speed, product showcase, and 1-click WhatsApp order processing.',
    tag: 'E-Commerce & Retail',
    badge: '11 Screenshots',
    folder: '/portfolio_muscle_ignitor',
    images: [
      'Screenshot (101).png',
      'Screenshot (102).png',
      'Screenshot (103).png',
      'Screenshot (104).png',
      'Screenshot (105).png',
      'Screenshot (106).png',
      'Screenshot (107).png',
      'Screenshot (108).png',
      'Screenshot (109).png',
      'Screenshot (110).png',
      'Screenshot (111).png'
    ],
    highlights: ['Sub-second load speed', 'Product catalog layout', 'UPI & Card Checkout', 'WhatsApp quick order']
  },
  {
    id: 'portiqqo',
    title: 'Portiqqo',
    subtitle: 'Digital Web Application & Platform',
    category: 'SaaS UI/UX Design',
    bannerImg: '/portfolio_banner_images/Screenshot 2026-09-12 225306.png',
    description: 'Modern dashboard and platform design for Portiqqo, focusing on intuitive user workflows, data visualizations, and clean components.',
    tag: 'SaaS & Digital App',
    badge: '7 Screenshots',
    folder: '/portfolio_portiqqo',
    images: [
      'Screenshot 2026-09-12 225306.png',
      'Screenshot 2026-09-12 225342.png',
      'Screenshot 2026-09-12 225433.png',
      'Screenshot 2026-09-12 225449.png',
      'Screenshot 2026-09-12 225511.png',
      'Screenshot 2026-09-12 225543.png',
      'Screenshot 2026-09-12 225628.png'
    ],
    highlights: ['Responsive web app UI', 'Intuitive dashboard', 'Custom icon sets', 'Scalable component system']
  },
  {
    id: 'webdari_agency',
    title: 'WebDari Agency Platform',
    subtitle: 'Agency Infrastructure & Marketing Engine',
    category: 'Custom Web Engineering',
    bannerImg: '/portfolio_banner_images/Screenshot (112).png',
    description: 'Our agency website framework featuring responsive design, automated AI chatbot, multi-page service routing, and booking engine.',
    tag: 'Agency Core',
    badge: '9 Screenshots',
    folder: '/portfolio_websetu',
    images: [
      'Screenshot (112).png',
      'Screenshot (113).png',
      'Screenshot (114).png',
      'Screenshot (115).png',
      'Screenshot (116).png',
      'Screenshot (117).png',
      'Screenshot (118).png',
      'Screenshot (119).png',
      'Screenshot (120).png'
    ],
    highlights: ['Interactive AI Chatbot', 'Booking calendar integration', 'High-performance React stack', '100% SEO-ready']
  }
];

export default function PortfolioPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [activeModalImageIndex, setActiveModalImageIndex] = useState(0);

  // Auto-slide carousel effect
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % PORTFOLIO_PROJECTS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % PORTFOLIO_PROJECTS.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + PORTFOLIO_PROJECTS.length) % PORTFOLIO_PROJECTS.length);
  };

  const openGalleryModal = (project, imgIndex = 0) => {
    setActiveModalProject(project);
    setActiveModalImageIndex(imgIndex);
  };

  const activeProject = PORTFOLIO_PROJECTS[currentSlide];

  return (
    <div className="pt-24 pb-20 bg-[#F5F2EB] text-[#0F172A] min-h-screen">
      
      {/* 1. Header Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8F0FE] border border-[#1B64F2]/25 shadow-2xs mb-4"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#1B64F2]" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#1B64F2]">
            Selected Client Work & Case Studies
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0F172A] uppercase"
        >
          OUR <span className="text-[#1B64F2]">WORK</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-sm sm:text-base md:text-lg text-[#64748B] max-w-2xl mx-auto leading-relaxed"
        >
          Explore how WebDari bridges physical & digital businesses through custom web development, high-converting user interfaces, and brand identity design.
        </motion.p>
      </section>

      {/* 2. Engaging Carousel Animation Section */}
      <section 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <div className="relative bg-[#0F172A] text-white rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
          
          {/* Main Slide Wrapper */}
          <div className="relative min-h-[480px] sm:min-h-[520px] lg:min-h-[580px] flex flex-col lg:flex-row items-stretch">
            
            {/* Left: Project Details Info */}
            <div className="w-full lg:w-5/12 p-8 sm:p-10 lg:p-12 flex flex-col justify-between z-10 bg-gradient-to-b lg:bg-gradient-to-r from-[#0F172A] via-[#0F172A]/95 to-transparent">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject.id}
                  initial={{ opacity: 0, x: -25 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 25 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-[#1B64F2] text-white shadow-xs">
                      {activeProject.tag}
                    </span>
                    <span className="text-xs font-medium text-slate-400">
                      {activeProject.badge}
                    </span>
                  </div>

                  <div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                      {activeProject.title}
                    </h2>
                    <p className="text-sm font-semibold text-[#60A5FA] mt-1">
                      {activeProject.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {activeProject.description}
                  </p>

                  {/* Highlights Checklist */}
                  <div className="pt-2 space-y-2">
                    {activeProject.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-200 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Action Buttons */}
              <div className="pt-6 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => openGalleryModal(activeProject, 0)}
                  className="px-5 py-3 rounded-2xl bg-[#1B64F2] hover:bg-blue-600 text-white text-xs font-bold transition-all shadow-md flex items-center gap-2 cursor-pointer"
                >
                  <Eye className="w-4 h-4" />
                  <span>View All {activeProject.images.length} Screenshots</span>
                </button>

                <Link
                  to="/#book-meeting"
                  className="px-4 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Build Similar Site</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right: Banner Image Showcase */}
            <div className="w-full lg:w-7/12 relative min-h-[300px] lg:min-h-full overflow-hidden bg-slate-900 flex items-center justify-center p-4 lg:p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject.id}
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.04 }}
                  transition={{ duration: 0.45 }}
                  className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-slate-700/60 group cursor-pointer"
                  onClick={() => openGalleryModal(activeProject, 0)}
                >
                  <img
                    src={activeProject.bannerImg}
                    alt={activeProject.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <span className="text-white text-xs font-bold flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                      <Maximize2 className="w-3.5 h-3.5" /> Click to View Full Gallery
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Carousel Controls Bar */}
          <div className="bg-slate-950 p-4 px-6 flex items-center justify-between border-t border-slate-800">
            {/* Slide Indicators */}
            <div className="flex items-center gap-2">
              {PORTFOLIO_PROJECTS.map((proj, idx) => (
                <button
                  key={proj.id}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === currentSlide 
                      ? 'w-8 bg-[#1B64F2]' 
                      : 'w-2.5 bg-slate-700 hover:bg-slate-500'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Thumbnail Text Pills */}
            <div className="hidden md:flex items-center gap-2">
              {PORTFOLIO_PROJECTS.map((proj, idx) => (
                <button
                  key={proj.id}
                  onClick={() => setCurrentSlide(idx)}
                  className={`px-3 py-1 rounded-xl text-[11px] font-bold transition-all cursor-pointer ${
                    idx === currentSlide 
                      ? 'bg-[#1B64F2] text-white shadow-xs' 
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {proj.title}
                </button>
              ))}
            </div>

            {/* Prev / Next Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrevSlide}
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                title="Previous Project"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNextSlide}
                className="p-2.5 rounded-xl bg-[#1B64F2] hover:bg-blue-600 text-white transition-colors cursor-pointer"
                title="Next Project"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 3. All Projects Grid Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="flex items-center justify-between mb-8 border-b border-[#E5DFD3] pb-4">
          <div>
            <h3 className="text-2xl font-bold text-[#0F172A] flex items-center gap-2">
              <Grid className="w-5 h-5 text-[#1B64F2]" />
              <span>Project Showcase Catalog</span>
            </h3>
            <p className="text-xs text-[#64748B] mt-0.5">Click any project to inspect all screenshot pages in high resolution</p>
          </div>
          <span className="text-xs font-bold text-[#1B64F2] bg-[#E8F0FE] px-3 py-1 rounded-full border border-[#1B64F2]/20">
            {PORTFOLIO_PROJECTS.length} Featured Projects
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PORTFOLIO_PROJECTS.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -4 }}
              className="bg-[#FCFAF6] border border-[#E5DFD3] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="relative h-64 overflow-hidden bg-slate-900 cursor-pointer" onClick={() => openGalleryModal(project, 0)}>
                <img
                  src={project.bannerImg}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full border border-white/20 flex items-center gap-1.5">
                  <Layers className="w-3 h-3 text-[#60A5FA]" />
                  <span>{project.images.length} Screenshots</span>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#1B64F2] bg-[#E8F0FE] px-2.5 py-0.5 rounded-full">
                    {project.tag}
                  </span>
                  <span className="text-xs font-semibold text-[#64748B]">{project.subtitle}</span>
                </div>

                <h4 className="text-xl font-bold text-[#0F172A] group-hover:text-[#1B64F2] transition-colors">
                  {project.title}
                </h4>

                <p className="text-xs text-[#5F6B7A] leading-relaxed">
                  {project.description}
                </p>

                <div className="pt-2 flex items-center justify-between border-t border-[#EFECE4]">
                  <button
                    onClick={() => openGalleryModal(project, 0)}
                    className="text-xs font-bold text-[#1B64F2] hover:text-blue-700 flex items-center gap-1.5 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Explore All {project.images.length} Screenshots</span>
                  </button>

                  <Link
                    to="/#book-meeting"
                    className="text-xs font-bold text-slate-500 hover:text-slate-900 flex items-center gap-1"
                  >
                    <span>Request Demo</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Interactive Lightbox Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 select-none"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-white">
              <div>
                <h3 className="text-base sm:text-lg font-extrabold flex items-center gap-2">
                  <span>{activeModalProject.title}</span>
                  <span className="text-xs font-normal text-slate-400">
                    ({activeModalImageIndex + 1} of {activeModalProject.images.length})
                  </span>
                </h3>
                <p className="text-xs text-slate-400">{activeModalProject.subtitle}</p>
              </div>

              <button
                onClick={() => setActiveModalProject(null)}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Main Image Container */}
            <div className="flex-1 my-4 flex items-center justify-center relative overflow-hidden">
              {/* Prev Image Button */}
              <button
                onClick={() => setActiveModalImageIndex((prev) => (prev - 1 + activeModalProject.images.length) % activeModalProject.images.length)}
                className="absolute left-2 sm:left-4 z-20 p-3 rounded-full bg-black/60 hover:bg-[#1B64F2] text-white transition-colors cursor-pointer backdrop-blur-md"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="max-w-5xl max-h-[75vh] overflow-y-auto rounded-2xl border border-slate-700 shadow-2xl bg-slate-950">
                <img
                  src={`${activeModalProject.folder}/${activeModalProject.images[activeModalImageIndex]}`}
                  alt={`${activeModalProject.title} screenshot ${activeModalImageIndex + 1}`}
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Next Image Button */}
              <button
                onClick={() => setActiveModalImageIndex((prev) => (prev + 1) % activeModalProject.images.length)}
                className="absolute right-2 sm:right-4 z-20 p-3 rounded-full bg-black/60 hover:bg-[#1B64F2] text-white transition-colors cursor-pointer backdrop-blur-md"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Bottom Thumbnail Scrollbar */}
            <div className="bg-slate-950 p-3 rounded-2xl border border-slate-800 flex items-center gap-2 overflow-x-auto">
              {activeModalProject.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveModalImageIndex(idx)}
                  className={`w-16 h-12 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                    idx === activeModalImageIndex 
                      ? 'border-[#1B64F2] scale-105 shadow-md' 
                      : 'border-slate-800 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={`${activeModalProject.folder}/${img}`}
                    alt="thumbnail"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 5. Bottom CTA Banner */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-[#0F172A] text-white space-y-4 shadow-xl border border-slate-800">
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Ready to Build a High-Converting Digital Presence?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Let our founders review your business goals and craft a custom growth roadmap tailored specifically for your brand.
          </p>
          <div className="pt-2">
            <Link
              to="/#book-meeting"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#1B64F2] hover:bg-blue-600 text-white font-bold text-xs sm:text-sm transition-all shadow-lg hover:shadow-xl cursor-pointer"
            >
              <span>Book Your Free Strategy Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
