import React from 'react';

export default function WebDariLogo({ className = "", imgClassName = "h-8 sm:h-9 md:h-10", isDarkBg = false }) {
  if (isDarkBg) {
    return (
      <div className={`inline-flex items-center select-none cursor-pointer group ${className}`}>
        <div className="bg-[#F5F2EB] px-3.5 py-1.5 rounded-2xl shadow-sm border border-slate-700/40 inline-flex items-center justify-center">
          <img
            src="/webdari-logo.png"
            alt="WebDari Logo"
            className={`w-auto object-contain transition-transform duration-300 group-hover:scale-105 ${imgClassName}`}
          />
        </div>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center select-none cursor-pointer group ${className}`}>
      <img
        src="/webdari-logo.png"
        alt="WebDari Logo"
        className={`w-auto object-contain transition-transform duration-300 group-hover:scale-105 ${imgClassName}`}
      />
    </div>
  );
}
