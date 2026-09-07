import React from 'react';
import { motion } from 'framer-motion';

export default function RotatingGlobeDot({ className = "w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" }) {
  return (
    <span className={`inline-flex items-center justify-center align-middle ${className}`} title="www">
      <motion.span
        animate={{ rotate: [0, 0, 360, 360] }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          times: [0, 0.45, 0.85, 1],
          ease: "easeInOut"
        }}
        className="inline-flex items-center justify-center w-full h-full text-[#1B64F2] cursor-pointer hover:scale-115 transition-transform"
      >
        {/* Iconic WWW Web Symbol (Circle stays 100% round throughout 360° spin) */}
        <svg 
          className="w-full h-full" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="9.5" />
          <path d="M12 2.5a14.5 14.5 0 0 0 0 19M12 2.5a14.5 14.5 0 0 1 0 19" />
          <path d="M2.5 12h19" />
        </svg>
      </motion.span>
    </span>
  );
}
