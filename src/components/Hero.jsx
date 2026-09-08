import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Sparkles 
} from 'lucide-react';

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="relative min-h-[100dvh] min-h-[100svh] flex flex-col justify-center items-center pt-16 pb-4 sm:pt-24 sm:pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#F5F2EB]"
    >
      {/* Soft Ambient Background Radiance */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#1B64F2]/8 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-subtle" />
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#E8F0FE]/60 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center items-center">
        
        {/* Clean, Pristine Hero Content Container */}
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center w-full">
          
          {/* 1. Hook Line Question Badge */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4.5 sm:py-2 rounded-full bg-[#E8F0FE] border border-[#1B64F2]/25 shadow-xs hover:border-[#1B64F2]/45 transition-colors cursor-default mb-10 sm:mb-12 md:mb-14"
          >
            <div className="w-4.5 h-4.5 sm:w-5 sm:h-5 rounded-full bg-[#1B64F2] flex items-center justify-center text-white shadow-2xs">
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </div>
            <span className="text-[11px] sm:text-sm font-bold text-[#1B64F2] tracking-tight">
              Have a business but no strong online presence?
            </span>
          </motion.div>

          {/* 2. Main Tagline Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-[1.75rem] min-[380px]:text-[1.95rem] min-[420px]:text-[2.15rem] sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[4.75rem] font-bold tracking-tight text-[#0F172A] leading-[1.18] px-1"
          >
            <span className="block whitespace-nowrap">
              Every growing business
            </span>
            <span className="inline-flex items-center justify-center flex-wrap whitespace-nowrap mt-1 sm:mt-2">
              <span>needs a</span>{' '}
              <span className="relative inline-flex items-center ml-2.5 sm:ml-3 align-middle">
                <img
                  src="/webdari-logo.png"
                  alt="WebDari."
                  className="h-[1.12em] w-auto object-contain inline-block -translate-y-[0.04em] drop-shadow-xs"
                />

                {/* 4-Point Sparkle Star */}
                <span className="inline-flex items-end align-bottom ml-1 sm:ml-1.5 translate-y-[0.18em] sm:translate-y-[0.22em]">
                  <motion.span
                    animate={{ 
                      scale: [0, 0, 0, 1.4, 1, 1, 0, 0],
                      opacity: [0, 0, 0, 1, 1, 1, 0, 0],
                      rotate: [0, 0, 0, 25, 0, 0, -45, 0]
                    }}
                    transition={{
                      duration: 6.5,
                      repeat: Infinity,
                      times: [0, 0.462, 0.472, 0.477, 0.50, 0.938, 0.985, 1],
                      ease: "easeOut"
                    }}
                    className="inline-flex items-center justify-center text-[#1B64F2] cursor-pointer hover:scale-125 transition-transform"
                    title="WebDari Star"
                  >
                    <svg 
                      className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 lg:w-6 lg:h-6 fill-current drop-shadow-xs" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0L14.8 9.2L24 12L14.8 14.8L12 24L9.2 14.8L0 12L9.2 9.2L12 0Z" />
                    </svg>
                  </motion.span>
                </span>

                {/* Tapered Arched Bridge Underline */}
                <svg 
                  className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-3.5 sm:h-4.5 text-[#1B64F2] pointer-events-none overflow-visible" 
                  viewBox="0 0 100 16" 
                  preserveAspectRatio="none"
                >
                  <defs>
                    <clipPath id="taperSweepClip">
                      <motion.rect 
                        x="0" 
                        y="0" 
                        height="16" 
                        animate={{ 
                          width: [0, 105, 105, 105, 0, 0]
                        }}
                        transition={{
                          duration: 6.5,
                          repeat: Infinity,
                          times: [0, 0.462, 0.938, 0.985, 0.995, 1],
                          ease: [0.22, 1, 0.36, 1]
                        }}
                      />
                    </clipPath>
                  </defs>

                  <g clipPath="url(#taperSweepClip)">
                    <motion.path 
                      d="M 0,8.2 Q 50,14.2 100,5.2 C 101.2,5.2 101.2,10.2 100,10.2 Q 50,17.4 0,9.4 Z" 
                      fill="currentColor" 
                      animate={{ 
                        opacity: [0, 1, 1, 1, 0, 0]
                      }}
                      transition={{
                        duration: 6.5,
                        repeat: Infinity,
                        times: [0, 0.04, 0.938, 0.985, 0.995, 1],
                        ease: "easeInOut"
                      }}
                    />
                  </g>
                </svg>
              </span>
            </span>
          </motion.h1>

          {/* Highlighted Aesthetic Subtitle Pill with Glowing Effect */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="mt-5 sm:mt-6 inline-flex items-center gap-2.5 px-4.5 sm:px-6 py-2 sm:py-2.5 rounded-full bg-white/90 backdrop-blur-md border border-[#1B64F2]/30 shadow-md shadow-[#1B64F2]/10 hover:border-[#1B64F2]/50 hover:shadow-lg hover:shadow-[#1B64F2]/15 transition-all cursor-default group"
          >
            <span className="relative flex h-2 sm:h-2.5 w-2 sm:w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1B64F2] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 sm:h-2.5 w-2 sm:w-2.5 bg-[#1B64F2]" />
            </span>
            <span className="text-xs min-[400px]:text-sm sm:text-base font-medium text-[#1E293B] tracking-tight">
              Your bridge to a{' '}
              <span className="text-[#1B64F2] font-bold">
                stronger online presence
              </span>
            </span>
          </motion.div>

          {/* 3. Action Buttons Group - Luxury Aesthetic Elevation */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22 }}
            className="w-full sm:w-auto flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-10 sm:pt-12 md:pt-14 px-2"
          >
            <a
              href="#book-meeting"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 sm:px-9 py-3.5 sm:py-4 rounded-full bg-[#1B64F2] hover:bg-[#1557D4] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-[0_10px_25px_-5px_rgba(27,100,242,0.38)] hover:shadow-[0_14px_30px_-5px_rgba(27,100,242,0.48)] hover:-translate-y-0.5 transition-all group"
            >
              <span>Let's build your presence</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white/80 hover:bg-white text-[#0F172A] border border-[#E5DFD3] hover:border-[#1B64F2]/40 font-bold text-xs sm:text-sm tracking-wide shadow-xs hover:shadow-md transition-all"
            >
              <span>Explore Services</span>
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
