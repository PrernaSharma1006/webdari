import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowRight, 
  ArrowUpRight, 
  Sparkles, 
  Play, 
  Video, 
  Zap, 
  ShieldCheck,
  Check,
  Clock,
  Flame,
  Camera,
  Layers,
  Sparkle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import BookingModal from '../components/BookingModal';

const ugcPlans = [
  {
    id: "starter-ugc",
    number: "01",
    tag: "Quick Kickstart",
    name: "Creator Kickstart Pack",
    timeline: "5–7 Days Turnaround",
    popular: false,
    description: "Ideal for testing short-form creator video ads and injecting social proof into your social media feed.",
    features: [
      "4 Custom 9:16 Short-Form UGC Videos",
      "Viral Hook Scriptwriting & Storyboards",
      "Dynamic Word-by-Word Animated Captions",
      "Full Organic & Paid Commercial Usage Rights",
      "1 Round of Free Revisions per Video"
    ],
    btnText: "Select Kickstart Pack"
  },
  {
    id: "growth-ugc",
    number: "02",
    tag: "Most Popular",
    name: "Viral Ad Arsenal",
    timeline: "10–14 Days Turnaround",
    popular: true,
    description: "The complete creative engine for high-ROAS Meta, Instagram Reels, and YouTube Shorts ad campaigns.",
    features: [
      "7–8 High-Converting Short-Form UGC Assets",
      "Problem-Agitate-Solve & Unboxing Formats",
      "Platform-Specific Optimization (Reels, TikTok, Shorts)",
      "2 Rounds of Revisions + Raw Footage Delivery"
    ],
    btnText: "Select Viral Arsenal"
  },
  {
    id: "enterprise-ugc",
    number: "03",
    tag: "Scale Retainer",
    name: "Omnichannel Dominance",
    timeline: "Ongoing Monthly Creative Sprints",
    popular: false,
    description: "For aggressive direct-to-consumer brands that demand a continuous stream of fresh, scroll-stopping ad creatives.",
    features: [
      "15–20 Monthly Fresh High-Converting Creator Videos",
      "Dedicated Creative Strategist & Scriptwriters",
      "Weekly Creative Performance Analysis & Iteration",
      "Dedicated Creative Director & Priority Turnaround"
    ],
    btnText: "Select Omnichannel Scale"
  }
];

export default function UgcContentPage() {
  const videoRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const startPlaying = () => {
    if (videoRef.current) {
      setHasStarted(true);
      videoRef.current.play().catch((err) => console.log("Play error:", err));
    }
  };

  const handleOpenPlanModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F5F2EB] text-[#0F172A] pt-20 md:pt-24 pb-20 overflow-hidden relative">
      {/* Soft Ambient Radiance */}
      <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-[800px] right-1/4 w-[500px] h-[500px] bg-[#1B64F2]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* TOP HERO SECTION: Left Showcase Video + Right Explanation */}
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

        {/* 2-Column Balanced Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: UGC Creator Video Player Showcase (Span 5) */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-5 flex justify-center lg:justify-start"
          >
            <div className="w-full max-w-[285px] sm:max-w-[310px] md:max-w-[325px] bg-[#FCFAF6] border border-[#E5DFD3] rounded-[28px] p-3 sm:p-3.5 shadow-xl shadow-slate-900/5 relative">
              
              {/* Video Container */}
              <div className="relative w-full aspect-[9/16] max-h-[460px] sm:max-h-[485px] rounded-[22px] bg-slate-950 overflow-hidden shadow-inner flex items-center justify-center border border-slate-800">
                
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover rounded-[22px]"
                  controls={hasStarted}
                  playsInline
                  preload="metadata"
                  src="/videos/ugc-creation-guide.mp4"
                >
                  Your browser does not support the video tag.
                </video>

                {/* 1st-Time Play Overlay */}
                {!hasStarted && (
                  <div 
                    onClick={startPlaying}
                    className="absolute inset-0 bg-black/40 hover:bg-black/25 flex flex-col items-center justify-center gap-3 cursor-pointer transition-colors z-20"
                  >
                    <div className="w-14 h-14 rounded-full bg-[#1B64F2] text-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 fill-current ml-0.5" />
                    </div>
                    <span className="text-[11px] font-bold text-white bg-black/75 px-3.5 py-1 rounded-full backdrop-blur-md border border-white/20 shadow-md inline-block">
                      Play UGC Reel Demo
                    </span>
                  </div>
                )}
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-2.5 px-1.5 flex items-center justify-between text-xs text-[#64748B] font-medium">
                <span className="text-slate-500 text-[10px]">Short-Form UGC Asset</span>
                <span className="text-[11px] font-bold text-[#1B64F2] flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#1B64F2]" />
                  <span>High Retention</span>
                </span>
              </div>

            </div>
          </motion.div>

          {/* RIGHT COLUMN: Minimal Explanation of What We Do (Span 7) */}
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
                  Service 02 • UGC Content
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0F172A] leading-tight">
                UGC Content
              </h1>

              <p className="text-xs sm:text-sm text-[#5F6B7A] leading-relaxed max-w-lg">
                Creator-style videos and short-form content that help your business get noticed and connect with your audience.
              </p>
            </div>

            {/* 4 Core Features / What's Included */}
            <div className="space-y-2.5 pt-1">
              <div className="p-3 sm:p-3.5 rounded-2xl bg-[#FCFAF6] border border-[#E5DFD3] flex items-start gap-3.5 hover:border-[#1B64F2]/40 transition-colors shadow-2xs">
                <div className="w-7 h-7 rounded-lg bg-[#E8F0FE] text-[#1B64F2] flex items-center justify-center shrink-0 shadow-2xs mt-0.5">
                  <Zap className="w-3.5 h-3.5" />
                </div>
                <div className="space-y-0.5">
                  <h3 className="text-xs sm:text-sm font-bold text-[#0F172A]">
                    Hook-based video scripts
                  </h3>
                  <p className="text-[11px] sm:text-xs text-[#64748B] leading-relaxed">
                    High-retention 3-second opening hooks designed to stop the scroll and keep viewers watching.
                  </p>
                </div>
              </div>

              <div className="p-3 sm:p-3.5 rounded-2xl bg-[#FCFAF6] border border-[#E5DFD3] flex items-start gap-3.5 hover:border-[#1B64F2]/40 transition-colors shadow-2xs">
                <div className="w-7 h-7 rounded-lg bg-[#E8F0FE] text-[#1B64F2] flex items-center justify-center shrink-0 shadow-2xs mt-0.5">
                  <Camera className="w-3.5 h-3.5" />
                </div>
                <div className="space-y-0.5">
                  <h3 className="text-xs sm:text-sm font-bold text-[#0F172A]">
                    UGC-style creator videos
                  </h3>
                  <p className="text-[11px] sm:text-xs text-[#64748B] leading-relaxed">
                    Authentic, relatable creator-led videos and product reviews that build immediate consumer trust.
                  </p>
                </div>
              </div>

              <div className="p-3 sm:p-3.5 rounded-2xl bg-[#FCFAF6] border border-[#E5DFD3] flex items-start gap-3.5 hover:border-[#1B64F2]/40 transition-colors shadow-2xs">
                <div className="w-7 h-7 rounded-lg bg-[#E8F0FE] text-[#1B64F2] flex items-center justify-center shrink-0 shadow-2xs mt-0.5">
                  <Video className="w-3.5 h-3.5" />
                </div>
                <div className="space-y-0.5">
                  <h3 className="text-xs sm:text-sm font-bold text-[#0F172A]">
                    Short-form Reels & videos
                  </h3>
                  <p className="text-[11px] sm:text-xs text-[#64748B] leading-relaxed">
                    9:16 vertical video assets ready for Instagram Reels, YouTube Shorts, and high-performing ads.
                  </p>
                </div>
              </div>

              <div className="p-3 sm:p-3.5 rounded-2xl bg-[#FCFAF6] border border-[#E5DFD3] flex items-start gap-3.5 hover:border-[#1B64F2]/40 transition-colors shadow-2xs">
                <div className="w-7 h-7 rounded-lg bg-[#E8F0FE] text-[#1B64F2] flex items-center justify-center shrink-0 shadow-2xs mt-0.5">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <div className="space-y-0.5">
                  <h3 className="text-xs sm:text-sm font-bold text-[#0F172A]">
                    Content optimized for social media
                  </h3>
                  <p className="text-[11px] sm:text-xs text-[#64748B] leading-relaxed">
                    Dynamic pacing, color grading, and on-screen captions crafted to maximize engagement and shares.
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
                href="https://wa.me/918377866258?text=Hi%20WebDari%2C%20I%20am%20interested%20in%20your%20UGC%20Content%20service."
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 border-t border-[#E8E2D5]" id="ugc-pricing-plans">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 sm:space-y-3.5 mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8F0FE] border border-[#1B64F2]/25 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#1B64F2]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#1B64F2]">
              Tailored Creator Packages
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0F172A]">
            Choose the Perfect <span className="text-[#1B64F2]">UGC Content Package</span>
          </h2>

          <p className="text-xs sm:text-sm text-[#64748B] max-w-xl mx-auto leading-relaxed">
            High-converting creator videos tailored to your product or service. Zero hassle with casting, scripting, or editing.
          </p>
        </div>

        {/* 3 Rectangular Cards Grid (No Price Quoting) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {ugcPlans.map((plan, index) => {
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
                      Included In This Package:
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
        defaultTopic="UGC Content"
      />
    </div>
  );
}
