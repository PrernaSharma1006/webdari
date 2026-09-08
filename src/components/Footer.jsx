import React from 'react';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  MapPin, 
  ArrowUpRight, 
  ArrowUp, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  Heart,
  ChevronRight
} from 'lucide-react';
import WebDariLogo from './WebDariLogo';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0B0F17] text-white border-t border-slate-800/80 overflow-hidden" id="footer">
      {/* Soft Ambient Glows */}
      <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] bg-[#1B64F2]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 right-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 relative z-10">
        
        {/* Pre-Footer Callout Banner */}
        <div className="relative rounded-3xl bg-gradient-to-r from-[#1B64F2] via-[#1A56DB] to-[#1242BA] p-8 sm:p-12 text-white shadow-2xl shadow-[#1B64F2]/20 mb-20 overflow-hidden">
          {/* Subtle Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[size:24px_24px] pointer-events-none opacity-40" />

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="space-y-3 max-w-2xl">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
                You know the business. We know the digital world. Let's bridge the gap.
              </h3>
              <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed max-w-xl">
                From your website to your content and social media, we help your business build a stronger presence online.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0">
              <a
                href="#book-meeting"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white hover:bg-[#F5F2EB] text-[#1B64F2] font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all text-center"
              >
                <span>Let's build your presence</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me/918377866258?text=Hi%20WebDari%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all text-center"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Quick WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* 4 Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-slate-800">
          
          {/* Column 1: Brand & Bio (Col span 4) */}
          <div className="lg:col-span-4 space-y-6">
            <WebDariLogo imgClassName="h-9 sm:h-11" isDarkBg={true} />

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Every growing business needs a WebDari. Your bridge to a stronger online presence—from custom websites to creator content and complete social media handling.
            </p>

            {/* Direct Contact Pills */}
            <div className="space-y-2.5 pt-2">
              <a
                href="tel:+918377866258"
                className="flex items-center gap-3 text-xs text-slate-300 hover:text-white transition-colors group"
              >
                <div className="w-7 h-7 rounded-lg bg-slate-800 group-hover:bg-[#1B64F2] flex items-center justify-center text-slate-400 group-hover:text-white transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span className="font-mono font-medium">Call: +91 83778 66258</span>
              </a>

              <a
                href="https://wa.me/918377866258?text=Hi%20WebDari%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-xs text-slate-300 hover:text-emerald-400 transition-colors group"
              >
                <div className="w-7 h-7 rounded-lg bg-slate-800 group-hover:bg-[#25D366] flex items-center justify-center text-slate-400 group-hover:text-white transition-colors">
                  <MessageCircle className="w-3.5 h-3.5" />
                </div>
                <span className="font-mono font-medium">WhatsApp: +91 83778 66258</span>
              </a>

              <a
                href="https://wa.me/918851347754?text=Hi%20WebDari%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-xs text-slate-300 hover:text-emerald-400 transition-colors group"
              >
                <div className="w-7 h-7 rounded-lg bg-slate-800 group-hover:bg-[#25D366] flex items-center justify-center text-slate-400 group-hover:text-white transition-colors">
                  <MessageCircle className="w-3.5 h-3.5" />
                </div>
                <span className="font-mono font-medium">WhatsApp: +91 88513 47754</span>
              </a>

              <a
                href="mailto:websetu.mail@gmail.com"
                className="flex items-center gap-3 text-xs text-slate-300 hover:text-white transition-colors group"
              >
                <div className="w-7 h-7 rounded-lg bg-slate-800 group-hover:bg-[#1B64F2] flex items-center justify-center text-slate-400 group-hover:text-white transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span>websetu.mail@gmail.com</span>
              </a>

              <div className="flex items-center gap-3 text-xs text-slate-400">
                <div className="w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400">
                  <Clock className="w-3.5 h-3.5" />
                </div>
                <span>Mon – Sun: 10:00 AM – 10:00 PM IST (All 7 Days)</span>
              </div>
            </div>
          </div>

          {/* Column 2: Core Services (Col span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-200">
              Services We Provide
            </h4>
            <ul className="space-y-3 text-xs text-slate-400">
              <li>
                <a href="/services/website-creation" className="hover:text-[#1B64F2] transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-[#1B64F2] group-hover:translate-x-0.5 transition-all" />
                  <span>Website Creation</span>
                </a>
              </li>
              <li>
                <a href="/services/ugc-content" className="hover:text-[#1B64F2] transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-[#1B64F2] group-hover:translate-x-0.5 transition-all" />
                  <span>UGC Content</span>
                </a>
              </li>
              <li>
                <a href="/services/social-media-handling" className="hover:text-[#1B64F2] transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-[#1B64F2] group-hover:translate-x-0.5 transition-all" />
                  <span>Social Media Handling</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links & Navigation (Col span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-200">
              Quick Links
            </h4>
            <ul className="space-y-3 text-xs text-slate-400">
              <li>
                <a href="#" className="hover:text-[#1B64F2] transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-[#1B64F2] group-hover:translate-x-0.5 transition-all" />
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#1B64F2] transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-[#1B64F2] group-hover:translate-x-0.5 transition-all" />
                  <span>Our Services</span>
                </a>
              </li>
              <li>
                <a href="#book-meeting" className="hover:text-[#1B64F2] transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-[#1B64F2] group-hover:translate-x-0.5 transition-all" />
                  <span>Book Free Meeting</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/918377866258" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 group"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" />
                  <span>WhatsApp Direct</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/webdari.official?igsi=MXdkMTJjdDM4ZnZ6Mw==" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#1B64F2] transition-colors flex items-center gap-1.5 group"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-[#1B64F2] group-hover:translate-x-0.5 transition-all" />
                  <span>Instagram (@webdari.official)</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/in/webdari-connections-b88579432/?skipRedirect=true" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#1B64F2] transition-colors flex items-center gap-1.5 group"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-[#1B64F2] group-hover:translate-x-0.5 transition-all" />
                  <span>LinkedIn Page</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Trust & Guarantees (Col span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-200">
              WebDari Promise
            </h4>
            <div className="space-y-3">
              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-200">
                  <ShieldCheck className="w-4 h-4 text-[#1B64F2]" />
                  <span>100% Free Strategy Session</span>
                </div>
                <p className="text-[11px] text-slate-400 pl-6 leading-relaxed">
                  No sales pressure, no hidden fees. A genuine 30-minute growth roadmap session.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-200">
                  <Sparkles className="w-4 h-4 text-[#1B64F2]" />
                  <span>High-Converting Output</span>
                </div>
                <p className="text-[11px] text-slate-400 pl-6 leading-relaxed">
                  Custom engineered digital assets built to compound leads and maximize ROI.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span>&copy; {new Date().getFullYear()} WEBDARI Digital Agency. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="hidden sm:inline text-slate-600">•</span>
            <span className="text-slate-400">
              Made for India's Growing Businesses
            </span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors cursor-pointer"
              title="Back to Top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
