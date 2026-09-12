import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SpecularButton from '../components/SpecularButton';

const PORTFOLIO_PROJECTS = [
  {
    id: 'gehri_media',
    title: 'Gehri Media',
    bannerImg: '/portfolio_banner_images/Screenshot (122).png',
  },
  {
    id: 'muscle_ignitor',
    title: 'Muscle Ignitor',
    bannerImg: '/portfolio_banner_images/Screenshot (101).png',
  },
  {
    id: 'portiqqo',
    title: 'Portiqqo',
    bannerImg: '/portfolio_banner_images/Screenshot 2026-09-12 225306.png',
  },
  {
    id: 'webdari_agency',
    title: 'WebDari Agency',
    bannerImg: '/portfolio_banner_images/Screenshot (112).png',
  }
];

export default function PortfolioPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

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

  const activeProject = PORTFOLIO_PROJECTS[currentSlide];

  return (
    <div className="pt-24 pb-20 bg-[#F5F2EB] text-[#0F172A] min-h-screen">
      
      {/* 1. Header Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#0F172A] uppercase select-none"
        >
          OUR <span className="text-[#1B64F2]">WORK</span>
        </motion.h1>
        <div className="w-16 h-1 bg-[#1B64F2] rounded-full mx-auto mt-3 shadow-xs" />
      </section>

      {/* 2. Pure Image Carousel Animation Section */}
      <section 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6"
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
          {PORTFOLIO_PROJECTS.map((project, idx) => {
            const isActive = idx === currentSlide;
            return (
              <SpecularButton
                key={project.id}
                size="md"
                radius={20}
                tint={isActive ? '#1B64F2' : '#0F172A'}
                tintOpacity={isActive ? 0.95 : 0.9}
                blur={12}
                textColor={isActive ? '#FFFFFF' : '#E2E8F0'}
                lineColor={isActive ? '#FFFFFF' : '#3B82F6'}
                baseColor={isActive ? '#1D4ED8' : '#1E293B'}
                intensity={isActive ? 1.4 : 0.85}
                shineSize={isActive ? 14 : 10}
                shineFade={35}
                thickness={1.5}
                speed={0.4}
                followMouse={true}
                proximity={280}
                autoAnimate={isActive}
                onClick={() => setCurrentSlide(idx)}
                className={`w-full max-w-[280px] transition-all duration-300 ${
                  isActive ? 'scale-105 shadow-xl ring-2 ring-[#1B64F2]/50' : 'hover:scale-[1.02]'
                }`}
              >
                <span className="flex items-center gap-2 font-bold tracking-wide">
                  <span className={`w-2 h-2 rounded-full transition-colors ${isActive ? 'bg-white animate-pulse' : 'bg-slate-500'}`} />
                  {project.title}
                </span>
              </SpecularButton>
            );
          })}
        </div>
      </section>

    </div>
  );
}
