import React from 'react';
import { motion } from 'framer-motion';
import { 
  Laptop, 
  Video, 
  TrendingUp, 
  ArrowUpRight, 
  ArrowRight, 
  Sparkles, 
  Check 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const servicesData = [
  {
    number: "01",
    tag: "Core Engine",
    title: "Website Creation",
    icon: Laptop,
    pagePath: "/services/website-creation",
    accentGlow: "from-blue-500/10 to-indigo-500/5",
    description: "Custom websites designed to make your business look professional, build trust, and turn visitors into customers.",
    features: [
      "Custom UI/UX design",
      "Mobile & tablet responsive",
      "SEO-ready structure",
      "Lead capture & booking integration"
    ],
    highlight: "Average 3.8x Conversion Boost",
    btnText: "Explore Website Creation"
  },
  {
    number: "02",
    tag: "Viral Impact",
    title: "UGC Content",
    icon: Video,
    pagePath: "/services/ugc-content",
    accentGlow: "from-blue-600/10 to-cyan-500/5",
    description: "Creator-style videos and short-form content that help your business get noticed and connect with your audience.",
    features: [
      "Hook-based video scripts",
      "UGC-style creator videos",
      "Short-form Reels & videos",
      "Content optimized for social media"
    ],
    highlight: "High Organic Engagement",
    btnText: "Explore UGC Content"
  },
  {
    number: "03",
    tag: "Brand Growth",
    title: "Social Media Handling",
    icon: TrendingUp,
    pagePath: "/services/social-media-handling",
    accentGlow: "from-indigo-600/10 to-blue-500/5",
    description: "We manage your social media presence, from content planning and posting to audience engagement.",
    features: [
      "Monthly content planning",
      "Content creation & posting",
      "Community & DM management",
      "Growth & performance tracking"
    ],
    highlight: "Consistent Daily Authority",
    btnText: "Explore Social Media"
  }
];

export default function Services() {
  return (
    <section className="relative pt-6 pb-12 sm:py-16 md:py-24 bg-[#F5F2EB] border-t border-[#E8E2D5] overflow-hidden" id="services">
      {/* Soft Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#1B64F2]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 sm:space-y-4 mb-8 sm:mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8F0FE] border border-[#1B64F2]/25 shadow-2xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#1B64F2]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#1B64F2]">
              Services We Provide
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0F172A] leading-tight"
          >
            Three Digital Bridges Built to <br className="hidden sm:inline" />
            <span className="text-[#1B64F2]">Scale Your Business</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base text-[#64748B] max-w-2xl mx-auto leading-relaxed"
          >
            From your website to your content and social media, we help your business build a stronger presence online.
          </motion.p>
        </div>

        {/* 3 Uniform Rectangular Partitions with Rounded Edges */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto items-stretch">
          {servicesData.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group relative flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-[#FCFAF6] border border-[#E5DFD3] hover:border-[#1B64F2]/40 shadow-sm hover:shadow-xl hover:shadow-[#1B64F2]/5 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
              >
                {/* Top Ambient Card Glow on Hover */}
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${service.accentGlow} rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                {/* Card Top: Number, Tag, and Icon */}
                <div className="relative space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs font-extrabold tracking-widest text-[#1B64F2] bg-[#E8F0FE] px-2.5 py-1 rounded-full border border-[#1B64F2]/20">
                        {service.number}
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
                        {service.tag}
                      </span>
                    </div>

                    <div className="w-12 h-12 rounded-2xl bg-[#F0EDE6] group-hover:bg-[#1B64F2] text-[#1B64F2] group-hover:text-white flex items-center justify-center transition-colors duration-300 shadow-2xs">
                      <IconComponent className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2.5">
                    <h3 className="text-2xl font-bold text-[#0F172A] group-hover:text-[#1B64F2] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5F6B7A] leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Deliverables / Feature Checklist */}
                  <div className="pt-3 space-y-2.5 border-t border-[#EFECE4]">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">
                      What's Included:
                    </span>
                    <ul className="space-y-2">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#334155] font-medium">
                          <div className="w-4 h-4 rounded-full bg-[#E8F0FE] text-[#1B64F2] flex items-center justify-center shrink-0">
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Bottom: Page Redirect Action Button */}
                <div className="relative pt-6 mt-6 border-t border-[#EFECE4]">
                  <Link
                    to={service.pagePath}
                    className="w-full py-3 px-5 rounded-2xl bg-white hover:bg-[#1B64F2] text-[#0F172A] hover:text-white border border-[#E5DFD3] hover:border-[#1B64F2] text-xs font-bold shadow-2xs hover:shadow-md transition-all duration-200 flex items-center justify-between group/btn cursor-pointer"
                  >
                    <span>{service.btnText}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Call-to-Action Button Below 3 Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 sm:mt-16 text-center flex flex-col items-center justify-center space-y-3"
        >
          <a
            href="#book-meeting"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4.5 rounded-full bg-[#1B64F2] hover:bg-[#1557D4] text-white font-bold text-sm sm:text-base tracking-wide shadow-lg shadow-[#1B64F2]/25 hover:shadow-xl hover:shadow-[#1B64F2]/35 hover:-translate-y-0.5 transition-all group cursor-pointer"
          >
            <span>Book Your First Meeting For Free</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
