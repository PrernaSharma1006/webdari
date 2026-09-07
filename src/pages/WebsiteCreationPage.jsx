import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowRight, 
  ArrowUpRight, 
  Sparkles, 
  Play, 
  Laptop, 
  Zap, 
  ShieldCheck,
  Check,
  Clock,
  Flame,
  Layers,
  Crown
} from 'lucide-react';
import { Link } from 'react-router-dom';
import BookingModal from '../components/BookingModal';

const websitePlans = [
  {
    id: "starter",
    number: "01",
    tag: "Quick Launch",
    name: "Starter Landing Page",
    timeline: "6–7 Days Turnaround",
    popular: false,
    description: "Perfect for solo entrepreneurs, local service businesses, and creators needing a fast, high-converting digital presence.",
    features: [
      "High-Converting Single Page Landing Page",
      "100% Mobile & Tablet Responsive Design",
      "Instant WhatsApp & Call Click-to-Chat",
      "Lightning Fast Cloud Hosting & Free SSL",
      "Basic Google Search Indexing & Meta Setup",
      "1 Month Free Technical Support"
    ],
    btnText: "Select Starter Plan"
  },
  {
    id: "growth",
    number: "02",
    tag: "Most Popular",
    name: "Business Growth Bridge",
    timeline: "10–12 Days Turnaround",
    popular: true,
    description: "The complete conversion powerhouse for scaling clinics, agencies, consultants, and brands ready to dominate online.",
    features: [
      "Bespoke Multi-Page Architecture (Up to 5 Pages)",
      "Automated Free Strategy Booking Calendar",
      "Advanced Google SEO & Speed Optimization",
      "Custom Domain, Business Email & CRM Hookup",
      "Instant WhatsApp Lead Notification Engine",
      "1 Month Priority Maintenance & Content Edits"
    ],
    btnText: "Select Growth Plan"
  },
  {
    id: "enterprise",
    number: "03",
    tag: "Custom Scale",
    name: "Enterprise Custom Ecosystem",
    timeline: "2–3 Weeks Turnaround",
    popular: false,
    description: "Tailor-made for D2C brands, dynamic directories, and businesses requiring custom database flows and web applications.",
    features: [
      "Full Custom Web Architecture & Web App",
      "Dynamic CMS (Easily edit text, media & blogs)",
      "Secure Payment Gateway & Service Catalog",
      "Sub-Second Cloud Deployment & Global CDN",
      "Conversion Tracking, Heatmaps & Analytics",
      "Dedicated Account Manager & 2 Months VIP Support"
    ],
    btnText: "Select Enterprise Plan"
  }
];

export default function WebsiteCreationPage() {
  const videoRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [hasWatched, setHasWatched] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const startPlaying = () => {
    if (videoRef.current) {
      setHasStarted(true);
      videoRef.current.play().catch((err) => console.log("Play error:", err));
    }
  };

  const handleVideoEnded = () => {
    setHasWatched(true);
  };

  const handleOpenPlanModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F5F2EB] text-[#0F172A] pt-20 md:pt-24 pb-20 overflow-hidden relative">
      {/* Soft Ambient Radiance */}
      <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-[#1B64F2]/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-[800px] right-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* TOP HERO SECTION: Left Video + Right Explanation */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full mb-10 sm:mb-16 md:mb-24">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-4 sm:mb-5">
          <Link
            to="/#services"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#E8E2D5]/70 hover:bg-[#E8E2D5] text-[#0F172A] text-xs font-bold transition-all group shadow-2xs"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
            <span>Back to All Services</span>
          </Link>
        </div>

        {/* 2-Column Balanced Layout: Left = Clean Video, Right = Explanation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: Clean Normal Video Player (Span 5) */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-5 flex justify-center lg:justify-start"
          >
            <div className="w-full max-w-[285px] sm:max-w-[310px] md:max-w-[325px] bg-[#FCFAF6] border border-[#E5DFD3] rounded-[28px] p-3 sm:p-3.5 shadow-xl shadow-slate-900/5 relative">
              
              {/* Clean Video Container */}
              <div className="relative w-full aspect-[9/16] max-h-[460px] sm:max-h-[485px] rounded-[22px] bg-black overflow-hidden shadow-inner flex items-center justify-center border border-slate-800">
                
                {/* Native Clean Video Element with standard controls */}
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover rounded-[22px]"
                  controls={hasStarted && !hasWatched}
                  playsInline
                  preload="metadata"
                  onEnded={handleVideoEnded}
                  src="/videos/website-creation-guide.mp4"
                >
                  Your browser does not support the video tag.
                </video>

                {/* 1st-Time Play Overlay */}
                {!hasStarted && !hasWatched && (
                  <div 
                    onClick={startPlaying}
                    className="absolute inset-0 bg-black/40 hover:bg-black/25 flex flex-col items-center justify-center gap-3 cursor-pointer transition-colors z-20"
                  >
                    <div className="w-14 h-14 rounded-full bg-[#1B64F2] text-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 fill-current ml-0.5" />
                    </div>
                    <span className="text-[11px] font-bold text-white bg-black/75 px-3.5 py-1 rounded-full backdrop-blur-md border border-white/20 shadow-md inline-block">
                      Watch Video Guide
                    </span>
                  </div>
                )}

                {/* After-Watch Completed Screen */}
                {hasWatched && (
                  <div className="absolute inset-0 bg-[#0B0F17]/95 backdrop-blur-md flex flex-col items-center justify-center p-5 text-center text-white space-y-4 animate-fade-in z-30">
                    
                    {/* Instagram App Icon Badge */}
                    <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] p-[2.5px] shadow-xl flex items-center justify-center">
                      <div className="w-full h-full rounded-[11px] bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center">
                        <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                        </svg>
                      </div>
                    </div>

                    {/* Headline & Explanation */}
                    <div className="space-y-1.5">
                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                        Want to watch again?
                      </h3>
                      <p className="text-[11px] sm:text-xs text-slate-300 max-w-[220px] mx-auto leading-relaxed">
                        Follow <strong className="text-white">@webdari.official</strong> on Instagram to watch again & unlock more insights!
                      </p>
                    </div>

                    {/* Action Button */}
                    <div className="pt-1 w-full max-w-[230px]">
                      <a
                        href="https://www.instagram.com/webdari.official?igsi=MXdkMTJjdDM4ZnZ6Mw=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 px-4 rounded-full bg-gradient-to-r from-[#E1306C] via-[#D62976] to-[#FA7E1E] hover:opacity-95 text-white text-[11px] font-extrabold uppercase tracking-wider shadow-md shadow-pink-500/25 inline-flex items-center justify-center gap-1.5 transition-all cursor-pointer hover:scale-[1.02]"
                      >
                        <span>WATCH ON INSTAGRAM</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Card Footer link */}
              <div className="pt-2.5 px-1.5 flex items-center justify-between text-xs text-[#64748B] font-medium">
                <span className="text-slate-500 text-[10px]">Official WebDari Reel</span>
                <a
                  href="https://www.instagram.com/webdari.official?igsi=MXdkMTJjdDM4ZnZ6Mw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-bold text-[#1B64F2] hover:underline flex items-center gap-1"
                >
                  <span>@webdari.official</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>

            </div>
          </motion.div>

          {/* RIGHT COLUMN: Compact & Minimal Explanation of What We Do (Span 7) */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-7 space-y-4 sm:space-y-5"
          >
            {/* Tag & Headline */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F0FE] border border-[#1B64F2]/25 shadow-2xs">
                <Sparkles className="w-3 h-3 text-[#1B64F2]" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#1B64F2]">
                  Service 01 • Website Creation
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0F172A] leading-tight">
                Website Creation
              </h1>

              <p className="text-xs sm:text-sm text-[#5F6B7A] leading-relaxed max-w-lg">
                Custom websites designed to make your business look professional, build trust, and turn visitors into customers.
              </p>
            </div>

            {/* 4 Core Features / What's Included */}
            <div className="space-y-2.5 pt-1">
              <div className="p-3 sm:p-3.5 rounded-2xl bg-[#FCFAF6] border border-[#E5DFD3] flex items-start gap-3.5 hover:border-[#1B64F2]/40 transition-colors shadow-2xs">
                <div className="w-7 h-7 rounded-lg bg-[#E8F0FE] text-[#1B64F2] flex items-center justify-center shrink-0 shadow-2xs mt-0.5">
                  <Laptop className="w-3.5 h-3.5" />
                </div>
                <div className="space-y-0.5">
                  <h3 className="text-xs sm:text-sm font-bold text-[#0F172A]">
                    Custom UI/UX design
                  </h3>
                  <p className="text-[11px] sm:text-xs text-[#64748B] leading-relaxed">
                    Tailor-made, modern interfaces designed to position your business as a trusted industry leader.
                  </p>
                </div>
              </div>

              <div className="p-3 sm:p-3.5 rounded-2xl bg-[#FCFAF6] border border-[#E5DFD3] flex items-start gap-3.5 hover:border-[#1B64F2]/40 transition-colors shadow-2xs">
                <div className="w-7 h-7 rounded-lg bg-[#E8F0FE] text-[#1B64F2] flex items-center justify-center shrink-0 shadow-2xs mt-0.5">
                  <Zap className="w-3.5 h-3.5" />
                </div>
                <div className="space-y-0.5">
                  <h3 className="text-xs sm:text-sm font-bold text-[#0F172A]">
                    Mobile & tablet responsive
                  </h3>
                  <p className="text-[11px] sm:text-xs text-[#64748B] leading-relaxed">
                    100% fluid performance, fast load speeds, and seamless navigation on all screen sizes.
                  </p>
                </div>
              </div>

              <div className="p-3 sm:p-3.5 rounded-2xl bg-[#FCFAF6] border border-[#E5DFD3] flex items-start gap-3.5 hover:border-[#1B64F2]/40 transition-colors shadow-2xs">
                <div className="w-7 h-7 rounded-lg bg-[#E8F0FE] text-[#1B64F2] flex items-center justify-center shrink-0 shadow-2xs mt-0.5">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <div className="space-y-0.5">
                  <h3 className="text-xs sm:text-sm font-bold text-[#0F172A]">
                    SEO-ready structure
                  </h3>
                  <p className="text-[11px] sm:text-xs text-[#64748B] leading-relaxed">
                    Google search-optimized technical hierarchy and metadata to maximize organic discoverability.
                  </p>
                </div>
              </div>

              <div className="p-3 sm:p-3.5 rounded-2xl bg-[#FCFAF6] border border-[#E5DFD3] flex items-start gap-3.5 hover:border-[#1B64F2]/40 transition-colors shadow-2xs">
                <div className="w-7 h-7 rounded-lg bg-[#E8F0FE] text-[#1B64F2] flex items-center justify-center shrink-0 shadow-2xs mt-0.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <div className="space-y-0.5">
                  <h3 className="text-xs sm:text-sm font-bold text-[#0F172A]">
                    Lead capture & booking integration
                  </h3>
                  <p className="text-[11px] sm:text-xs text-[#64748B] leading-relaxed">
                    Integrated contact funnels, smart scheduling, and WhatsApp dispatch to turn visitors into booked leads.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <button
                type="button"
                onClick={handleOpenPlanModal}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#1B64F2] hover:bg-[#1557D4] text-white font-bold text-xs sm:text-sm tracking-wide shadow-md shadow-[#1B64F2]/25 hover:shadow-lg hover:-translate-y-0.5 transition-all text-center inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book Free Strategy Meeting</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href="https://wa.me/918377866258?text=Hi%20WebDari%2C%20I%20am%20interested%20in%20your%20Website%20Creation%20service."
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-5 py-3.5 rounded-full bg-white hover:bg-[#F5F2EB] text-[#0F172A] border border-[#E5DFD3] font-bold text-xs tracking-wide shadow-2xs hover:shadow-md transition-all text-center inline-flex items-center justify-center gap-1.5"
              >
                <span>Chat on WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </motion.div>

        </div>

      </div>

      {/* 3 RECTANGULAR PLAN CARDS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 border-t border-[#E8E2D5]" id="pricing-plans">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 sm:space-y-3.5 mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8F0FE] border border-[#1B64F2]/25 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#1B64F2]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#1B64F2]">
              Tailored Service Packages
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0F172A]">
            Choose the Perfect <span className="text-[#1B64F2]">Website Creation Plan</span>
          </h2>

          <p className="text-xs sm:text-sm text-[#64748B] max-w-xl mx-auto leading-relaxed">
            Pick the package that aligns with your current growth goals, or book a consultation for a custom roadmap.
          </p>
        </div>

        {/* 3 Rectangular Cards Grid (No Price Quoting) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {websitePlans.map((plan, index) => {
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.12 }}
                className={`relative flex flex-col justify-between p-7 sm:p-9 rounded-3xl transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-[#FCFAF6] border-2 border-[#1B64F2] shadow-xl shadow-[#1B64F2]/10 -translate-y-1' 
                    : 'bg-[#FCFAF6] border border-[#E5DFD3] hover:border-[#1B64F2]/50 shadow-sm hover:shadow-lg'
                }`}
              >
                {/* Popular Badge Ribbon */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#1B64F2] text-white text-[11px] font-extrabold uppercase tracking-wider shadow-md inline-flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 text-yellow-300 fill-current" />
                    <span>Most Popular Choice</span>
                  </div>
                )}

                {/* Card Top: Number, Tag, and Title */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black text-[#1B64F2] bg-[#E8F0FE] px-2.5 py-1 rounded-full border border-[#1B64F2]/20">
                        {plan.number}
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
                        {plan.tag}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-500 bg-[#F0EDE6] px-2.5 py-1 rounded-full">
                      <Clock className="w-3 h-3 text-[#1B64F2]" />
                      <span>{plan.timeline}</span>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A]">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-[#5F6B7A] leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  {/* Deliverables List */}
                  <div className="pt-3 border-t border-[#EFECE4] space-y-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">
                      Included Features & Value:
                    </span>
                    <ul className="space-y-2.5">
                      {plan.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#334155] font-medium leading-snug">
                          <div className="w-4.5 h-4.5 rounded-full bg-[#E8F0FE] text-[#1B64F2] flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Bottom CTA Button */}
                <div className="pt-8 mt-6 border-t border-[#EFECE4]">
                  <button
                    type="button"
                    onClick={handleOpenPlanModal}
                    className={`w-full py-3.5 px-5 rounded-2xl font-bold text-xs sm:text-sm tracking-wide transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                      plan.popular
                        ? 'bg-[#1B64F2] hover:bg-[#1557D4] text-white shadow-lg shadow-[#1B64F2]/25 hover:shadow-xl hover:-translate-y-0.5'
                        : 'bg-white hover:bg-[#1B64F2] text-[#0F172A] hover:text-white border border-[#E5DFD3] hover:border-[#1B64F2] shadow-2xs hover:shadow-md'
                    }`}
                  >
                    <span>{plan.btnText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </motion.div>
            );
          })}
        </div>

      </section>

      {/* Booking Form Popup Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultTopic="Website Creation"
      />
    </div>
  );
}
