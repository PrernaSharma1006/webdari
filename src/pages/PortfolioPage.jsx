import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Sparkles } from 'lucide-react';
import SpecularButton from '../components/SpecularButton';
import Masonry from '../components/Masonry';

const PORTFOLIO_PROJECTS = [
  {
    id: 'gehri_media',
    title: 'Gehri Media',
    subtitle: 'Media Production & Creative Studio',
    bannerImg: '/portfolio_banner_images/Screenshot (122).png',
    folder: '/portfolio_gehri_media',
    images: [
      { id: 'gm-1', img: '/portfolio_gehri_media/Screenshot (121).png', height: 750 },
      { id: 'gm-2', img: '/portfolio_gehri_media/Screenshot (122).png', height: 600 },
      { id: 'gm-3', img: '/portfolio_gehri_media/Screenshot (123).png', height: 700 },
      { id: 'gm-4', img: '/portfolio_gehri_media/Screenshot (124).png', height: 650 },
      { id: 'gm-5', img: '/portfolio_gehri_media/Screenshot (125).png', height: 720 },
      { id: 'gm-6', img: '/portfolio_gehri_media/Screenshot (127).png', height: 680 },
      { id: 'gm-7', img: '/portfolio_gehri_media/Screenshot (128).png', height: 740 },
      { id: 'gm-8', img: '/portfolio_gehri_media/Screenshot (129).png', height: 620 },
      { id: 'gm-9', img: '/portfolio_gehri_media/Screenshot (130).png', height: 690 },
      { id: 'gm-10', img: '/portfolio_gehri_media/Screenshot (131).png', height: 710 },
      { id: 'gm-11', img: '/portfolio_gehri_media/Screenshot (132).png', height: 660 },
      { id: 'gm-12', img: '/portfolio_gehri_media/Screenshot (133).png', height: 730 },
      { id: 'gm-13', img: '/portfolio_gehri_media/Screenshot (134).png', height: 670 },
      { id: 'gm-14', img: '/portfolio_gehri_media/Screenshot (135).png', height: 700 },
      { id: 'gm-15', img: '/portfolio_gehri_media/Screenshot (136).png', height: 650 },
      { id: 'gm-16', img: '/portfolio_gehri_media/Screenshot (137).png', height: 740 },
      { id: 'gm-17', img: '/portfolio_gehri_media/Screenshot (138).png', height: 680 },
      { id: 'gm-18', img: '/portfolio_gehri_media/Screenshot (139).png', height: 710 },
      { id: 'gm-19', img: '/portfolio_gehri_media/Screenshot (140).png', height: 660 },
      { id: 'gm-20', img: '/portfolio_gehri_media/Screenshot (141).png', height: 720 },
      { id: 'gm-21', img: '/portfolio_gehri_media/Screenshot (142).png', height: 690 },
      { id: 'gm-22', img: '/portfolio_gehri_media/Screenshot (143).png', height: 730 },
      { id: 'gm-23', img: '/portfolio_gehri_media/Screenshot (144).png', height: 670 }
    ]
  },
  {
    id: 'muscle_ignitor',
    title: 'Muscle Ignitor',
    subtitle: 'Fitness & Health Supplement Brand',
    bannerImg: '/portfolio_banner_images/Screenshot (101).png',
    folder: '/portfolio_muscle_ignitor',
    images: [
      { id: 'mi-1', img: '/portfolio_muscle_ignitor/Screenshot (101).png', height: 650 },
      { id: 'mi-2', img: '/portfolio_muscle_ignitor/Screenshot (102).png', height: 720 },
      { id: 'mi-3', img: '/portfolio_muscle_ignitor/Screenshot (103).png', height: 680 },
      { id: 'mi-4', img: '/portfolio_muscle_ignitor/Screenshot (104).png', height: 740 },
      { id: 'mi-5', img: '/portfolio_muscle_ignitor/Screenshot (105).png', height: 660 },
      { id: 'mi-6', img: '/portfolio_muscle_ignitor/Screenshot (106).png', height: 700 },
      { id: 'mi-7', img: '/portfolio_muscle_ignitor/Screenshot (107).png', height: 730 },
      { id: 'mi-8', img: '/portfolio_muscle_ignitor/Screenshot (108).png', height: 670 },
      { id: 'mi-9', img: '/portfolio_muscle_ignitor/Screenshot (109).png', height: 710 },
      { id: 'mi-10', img: '/portfolio_muscle_ignitor/Screenshot (110).png', height: 690 },
      { id: 'mi-11', img: '/portfolio_muscle_ignitor/Screenshot (111).png', height: 720 }
    ]
  },
  {
    id: 'portiqqo',
    title: 'Portiqqo',
    subtitle: 'Digital Web Application & Platform',
    bannerImg: '/portfolio_banner_images/Screenshot 2026-09-12 225306.png',
    folder: '/portfolio_portiqqo',
    images: [
      { id: 'pq-1', img: '/portfolio_portiqqo/Screenshot 2026-09-12 225306.png', height: 680 },
      { id: 'pq-2', img: '/portfolio_portiqqo/Screenshot 2026-09-12 225342.png', height: 740 },
      { id: 'pq-3', img: '/portfolio_portiqqo/Screenshot 2026-09-12 225433.png', height: 650 },
      { id: 'pq-4', img: '/portfolio_portiqqo/Screenshot 2026-09-12 225449.png', height: 710 },
      { id: 'pq-5', img: '/portfolio_portiqqo/Screenshot 2026-09-12 225511.png', height: 670 },
      { id: 'pq-6', img: '/portfolio_portiqqo/Screenshot 2026-09-12 225543.png', height: 730 },
      { id: 'pq-7', img: '/portfolio_portiqqo/Screenshot 2026-09-12 225628.png', height: 690 }
    ]
  },
  {
    id: 'webdari_agency',
    title: 'WebDari Agency',
    subtitle: 'Agency Infrastructure & Platform',
    bannerImg: '/portfolio_banner_images/Screenshot (112).png',
    folder: '/portfolio_websetu',
    images: [
      { id: 'wd-1', img: '/portfolio_websetu/Screenshot (112).png', height: 660 },
      { id: 'wd-2', img: '/portfolio_websetu/Screenshot (113).png', height: 720 },
      { id: 'wd-3', img: '/portfolio_websetu/Screenshot (114).png', height: 680 },
      { id: 'wd-4', img: '/portfolio_websetu/Screenshot (115).png', height: 740 },
      { id: 'wd-5', img: '/portfolio_websetu/Screenshot (116).png', height: 670 },
      { id: 'wd-6', img: '/portfolio_websetu/Screenshot (117).png', height: 710 },
      { id: 'wd-7', img: '/portfolio_websetu/Screenshot (118).png', height: 690 },
      { id: 'wd-8', img: '/portfolio_websetu/Screenshot (119).png', height: 730 },
      { id: 'wd-9', img: '/portfolio_websetu/Screenshot (120).png', height: 650 }
    ]
  }
];

export default function PortfolioPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [activeModalImageIndex, setActiveModalImageIndex] = useState(null);

  // Auto-slide carousel effect (3 seconds)
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % PORTFOLIO_PROJECTS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % PORTFOLIO_PROJECTS.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + PORTFOLIO_PROJECTS.length) % PORTFOLIO_PROJECTS.length);
  };

  const handleSelectProject = (idx) => {
    setCurrentSlide(idx);
    setSelectedProjectIndex(idx);
  };

  const activeProject = PORTFOLIO_PROJECTS[currentSlide];
  const galleryProject = selectedProjectIndex !== null ? PORTFOLIO_PROJECTS[selectedProjectIndex] : null;

  const handleMasonryItemClick = (item) => {
    if (!galleryProject) return;
    const itemIndex = galleryProject.images.findIndex((img) => img.id === item.id);
    if (itemIndex !== -1) {
      setActiveModalImageIndex(itemIndex);
    }
  };

  return (
    <div className="pt-24 pb-24 bg-[#F5F2EB] text-[#0F172A] min-h-screen">
      
      {/* 1. Header Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#0F172A] uppercase select-none"
        >
          OUR <span className="text-[#1B64F2]">WORK</span>
        </motion.h1>
      </section>

      {/* 2. Hero Image Carousel Animation Section */}
      <section 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <div className="relative bg-[#0F172A] rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
          
          {/* Main Full-Width Image Frame */}
          <div className="relative w-full h-[380px] sm:h-[500px] lg:h-[580px] overflow-hidden bg-slate-950 flex items-center justify-center group">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeProject.id}
                src={activeProject.bannerImg}
                alt={activeProject.title}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </AnimatePresence>

            {/* Floating Navigation Arrows on Hover */}
            <button
              onClick={handlePrevSlide}
              className="absolute left-4 z-10 p-3 rounded-full bg-black/50 hover:bg-[#1B64F2] text-white opacity-0 group-hover:opacity-100 transition-all cursor-pointer backdrop-blur-md shadow-lg"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNextSlide}
              className="absolute right-4 z-10 p-3 rounded-full bg-black/50 hover:bg-[#1B64F2] text-white opacity-0 group-hover:opacity-100 transition-all cursor-pointer backdrop-blur-md shadow-lg"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

        </div>
      </section>

      {/* 3. Interactive Project Specular Buttons */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
          {PORTFOLIO_PROJECTS.map((project, idx) => {
            const isSelected = idx === selectedProjectIndex;
            return (
              <SpecularButton
                key={project.id}
                size="md"
                radius={9999}
                tint="#FFFFFF"
                tintOpacity={1}
                blur={0}
                textColor={isSelected ? '#0F172A' : '#475569'}
                lineColor="#1B64F2"
                baseColor="#CBD5E1"
                intensity={0.9}
                shineSize={12}
                shineFade={30}
                thickness={1.5}
                speed={0.3}
                followMouse={true}
                proximity={250}
                autoAnimate={false}
                onClick={() => handleSelectProject(idx)}
                className={`w-full max-w-[280px] border transition-all duration-300 ${
                  isSelected 
                    ? 'border-[#1B64F2] bg-white shadow-md ring-2 ring-[#1B64F2]/20 font-bold scale-[1.02]' 
                    : 'border-[#E2DCD0] bg-white/90 hover:bg-white hover:border-[#1B64F2]/50 shadow-xs'
                }`}
              >
                <span className="flex items-center gap-2 font-bold tracking-wide">
                  <span className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    isSelected ? 'bg-[#1B64F2]' : 'bg-slate-300'
                  }`} />
                  <span>{project.title}</span>
                </span>
              </SpecularButton>
            );
          })}
        </div>
      </section>

      {/* 4. Masonry Grid Section - Only appears when a project button is clicked */}
      <AnimatePresence mode="wait">
        {galleryProject && (
          <motion.section 
            key={galleryProject.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="flex items-center justify-between mb-8 pb-3 border-b border-[#E2DCD0]">
              <div>
                <h2 className="text-2xl font-bold text-[#0F172A] flex items-center gap-2">
                  <span>{galleryProject.title} Screenshot Gallery</span>
                </h2>
                <p className="text-xs text-[#64748B] mt-1">
                  Click any image to inspect in full resolution ({galleryProject.images.length} views)
                </p>
              </div>
              <span className="text-xs font-extrabold text-[#1B64F2] bg-white border border-[#1B64F2]/30 px-3.5 py-1.5 rounded-full shadow-xs">
                {galleryProject.subtitle}
              </span>
            </div>

            {/* Animated React Bits Masonry component */}
            <div className="min-h-[500px]">
              <Masonry
                items={galleryProject.images}
                ease="power3.out"
                duration={0.7}
                stagger={0.06}
                animateFrom="bottom"
                scaleOnHover={true}
                hoverScale={0.96}
                blurToFocus={true}
                colorShiftOnHover={true}
                onItemClick={handleMasonryItemClick}
              />
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* 5. Fullscreen Lightbox Modal for screenshot inspection */}
      <AnimatePresence>
        {activeModalImageIndex !== null && galleryProject && (
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
                  <span>{galleryProject.title}</span>
                  <span className="text-xs font-normal text-slate-400">
                    ({activeModalImageIndex + 1} of {galleryProject.images.length})
                  </span>
                </h3>
                <p className="text-xs text-slate-400">{galleryProject.subtitle}</p>
              </div>

              <button
                onClick={() => setActiveModalImageIndex(null)}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Main Image View */}
            <div className="flex-1 my-4 flex items-center justify-center relative overflow-hidden">
              <button
                onClick={() => setActiveModalImageIndex((prev) => (prev - 1 + galleryProject.images.length) % galleryProject.images.length)}
                className="absolute left-2 sm:left-4 z-20 p-3 rounded-full bg-black/60 hover:bg-[#1B64F2] text-white transition-colors cursor-pointer backdrop-blur-md"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="max-w-5xl max-h-[75vh] overflow-y-auto rounded-2xl border border-slate-700 shadow-2xl bg-slate-950">
                <img
                  src={galleryProject.images[activeModalImageIndex].img}
                  alt={`${galleryProject.title} screenshot ${activeModalImageIndex + 1}`}
                  className="w-full h-auto object-contain"
                />
              </div>

              <button
                onClick={() => setActiveModalImageIndex((prev) => (prev + 1) % galleryProject.images.length)}
                className="absolute right-2 sm:right-4 z-20 p-3 rounded-full bg-black/60 hover:bg-[#1B64F2] text-white transition-colors cursor-pointer backdrop-blur-md"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Bottom Thumbnail Scrollbar */}
            <div className="bg-slate-950 p-3 rounded-2xl border border-slate-800 flex items-center gap-2 overflow-x-auto">
              {galleryProject.images.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setActiveModalImageIndex(idx)}
                  className={`w-16 h-12 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                    idx === activeModalImageIndex 
                      ? 'border-[#1B64F2] scale-105 shadow-md' 
                      : 'border-slate-800 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={item.img}
                    alt="thumbnail"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
