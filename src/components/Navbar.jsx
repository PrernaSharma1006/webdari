import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  Phone,
  Mail,
  Calendar,
  MessageCircle,
  ArrowUpRight, 
  Menu, 
  X,
  ChevronDown
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import WebDariLogo from './WebDariLogo';

const NAV_LINKS = [
  { id: 'home', label: 'HOME', href: '/' },
  { id: 'services', label: 'SERVICES', href: '/#services' },
  { id: 'portfolio', label: 'PORTFOLIO', href: '/#portfolio' },
  { id: 'book', label: 'BOOK FREE CALL', href: '/#book-meeting' },
];

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [followOpen, setFollowOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleHomeClick = (e) => {
    if (e) e.preventDefault();
    setActiveTab('home');
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-2.5 bg-[#F5F2EB]/30 backdrop-blur-lg border-b border-[#E5DFD3]/30 shadow-xs' 
        : 'py-3.5 bg-transparent'
    }`}>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Left: Official Brand Logo */}
          <a href="/" onClick={handleHomeClick} className="flex items-center z-10 cursor-pointer">
            <WebDariLogo imgClassName="h-10 sm:h-12 md:h-13 lg:h-14" />
          </a>

          {/* Center: Sleek Dark Floating Navigation Capsule (Pixel-Perfect Center Alignment) */}
          <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-1 bg-[#1E293B] text-slate-300 p-1.5 rounded-full shadow-lg shadow-slate-900/10 border border-slate-700/50 z-20">
            
            {/* Home Icon Pill */}
            <a
              href="/"
              onClick={handleHomeClick}
              className={`p-2 rounded-full transition-all duration-200 cursor-pointer ${
                activeTab === 'home'
                  ? 'bg-white text-[#0F172A] shadow-xs'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
              title="Home"
            >
              <Home className="w-3.5 h-3.5" />
            </a>

            {/* Nav Text Tabs */}
            {NAV_LINKS.slice(1).map((link) => {
              const isActive = activeTab === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setActiveTab(link.id)}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-200 ${
                    isActive
                      ? 'bg-white text-[#0F172A] shadow-xs'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right: Two Interactive Options (FOLLOW US & CONTACT US) */}
          <div className="hidden md:flex items-center gap-3 z-10">
            
            {/* Option 1: FOLLOW US */}
            <div 
              className="relative py-1"
              onMouseEnter={() => setFollowOpen(true)}
              onMouseLeave={() => setFollowOpen(false)}
            >
              <button
                type="button"
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#111827] text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-2xs cursor-pointer ${
                  followOpen ? 'bg-[#111827] text-white' : 'text-[#111827] hover:bg-[#111827] hover:text-white'
                }`}
              >
                <span>Follow Us</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${followOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Follow Dropdown Menu */}
              <AnimatePresence>
                {followOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full right-0 mt-1 w-44 bg-[#FCFAF6] border border-[#E5DFD3] rounded-2xl p-2 shadow-xl z-50 flex flex-col gap-1 text-xs font-bold text-[#111827]"
                  >
                    <a 
                      href="https://www.instagram.com/webdari.official?igsi=MXdkMTJjdDM4ZnZ6Mw==" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="px-3 py-2 rounded-xl hover:bg-[#E8F0FE] hover:text-[#1B64F2] transition-colors flex items-center justify-between"
                    >
                      <span>Instagram</span>
                      <ArrowUpRight className="w-3 h-3 text-[#64748B]" />
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/webdari-connections-b88579432/?skipRedirect=true" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="px-3 py-2 rounded-xl hover:bg-[#E8F0FE] hover:text-[#1B64F2] transition-colors flex items-center justify-between"
                    >
                      <span>LinkedIn</span>
                      <ArrowUpRight className="w-3 h-3 text-[#64748B]" />
                    </a>
                    <a 
                      href="https://x.com" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="px-3 py-2 rounded-xl hover:bg-[#E8F0FE] hover:text-[#1B64F2] transition-colors flex items-center justify-between"
                    >
                      <span>X (Twitter)</span>
                      <ArrowUpRight className="w-3 h-3 text-[#64748B]" />
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Option 2: CONTACT US */}
            <div 
              className="relative py-1"
              onMouseEnter={() => setContactOpen(true)}
              onMouseLeave={() => setContactOpen(false)}
            >
              <button
                type="button"
                className={`flex items-center gap-1.5 px-5 py-2 rounded-full border-2 border-[#1B64F2] text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-xs cursor-pointer ${
                  contactOpen ? 'bg-[#1B64F2] text-white' : 'text-[#1B64F2] hover:bg-[#1B64F2] hover:text-white'
                }`}
              >
                <span>Contact Us</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${contactOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Contact Dropdown Menu */}
              <AnimatePresence>
                {contactOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full right-0 mt-1 w-52 bg-[#FCFAF6] border border-[#E5DFD3] rounded-2xl p-2 shadow-xl z-50 flex flex-col gap-1 text-xs font-bold text-[#111827]"
                  >
                    {/* Book Free Meeting Option */}
                    <a 
                      href="#book-meeting" 
                      onClick={() => setContactOpen(false)}
                      className="px-3 py-2 rounded-xl bg-[#E8F0FE] text-[#1B64F2] hover:bg-[#1B64F2] hover:text-white transition-colors flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-6 h-6 rounded-lg bg-white group-hover:bg-white/20 flex items-center justify-center text-[#1B64F2] group-hover:text-white">
                          <Calendar className="w-3 h-3" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[11px] font-extrabold">Book Free Meeting</span>
                          <span className="text-[9px] opacity-80">100% Free Strategy Call</span>
                        </div>
                      </div>
                      <ArrowUpRight className="w-3 h-3 opacity-70 group-hover:opacity-100" />
                    </a>

                    {/* Call Us Option */}
                    <a 
                      href="tel:+918377866258" 
                      className="px-3 py-2 rounded-xl hover:bg-[#E8F0FE] hover:text-[#1B64F2] transition-colors flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-6 h-6 rounded-lg bg-[#E8F0FE] flex items-center justify-center text-[#1B64F2]">
                          <Phone className="w-3 h-3" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[11px] font-extrabold text-[#111827]">Direct Call</span>
                          <span className="text-[9px] text-[#64748B] font-mono">+91 83778 66258</span>
                        </div>
                      </div>
                      <ArrowUpRight className="w-3 h-3 text-[#64748B]" />
                    </a>

                    {/* WhatsApp Option 1 */}
                    <a 
                      href="https://wa.me/918377866258?text=Hi%20WebDari%2C%20I%20would%20like%20to%20inquire%20about%20your%20services." 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="px-3 py-2 rounded-xl hover:bg-[#E8F0FE] hover:text-[#1B64F2] transition-colors flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-6 h-6 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600">
                          <MessageCircle className="w-3 h-3" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[11px] font-extrabold text-[#111827]">WhatsApp 1</span>
                          <span className="text-[9px] text-emerald-600 font-medium">+91 83778 66258</span>
                        </div>
                      </div>
                      <ArrowUpRight className="w-3 h-3 text-[#64748B]" />
                    </a>

                    {/* WhatsApp Option 2 */}
                    <a 
                      href="https://wa.me/918851347754?text=Hi%20WebDari%2C%20I%20would%20like%20to%20inquire%20about%20your%20services." 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="px-3 py-2 rounded-xl hover:bg-[#E8F0FE] hover:text-[#1B64F2] transition-colors flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-6 h-6 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600">
                          <MessageCircle className="w-3 h-3" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[11px] font-extrabold text-[#111827]">WhatsApp 2</span>
                          <span className="text-[9px] text-emerald-600 font-medium">+91 88513 47754</span>
                        </div>
                      </div>
                      <ArrowUpRight className="w-3 h-3 text-[#64748B]" />
                    </a>

                    {/* Email Option */}
                    <a 
                      href="mailto:webdarimail@gmail.com" 
                      className="px-3 py-2 rounded-xl hover:bg-[#E8F0FE] hover:text-[#1B64F2] transition-colors flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-6 h-6 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                          <Mail className="w-3 h-3" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[11px] font-extrabold text-[#111827]">Email Us</span>
                          <span className="text-[9px] text-[#64748B]">webdarimail@gmail.com</span>
                        </div>
                      </div>
                      <ArrowUpRight className="w-3 h-3 text-[#64748B]" />
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-[#111827] bg-[#FCFAF6] border border-[#E5DFD3] hover:bg-black/5 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#F5F2EB]/90 backdrop-blur-lg border-b border-[#E5DFD3] px-5 pt-4 pb-6 shadow-xl"
          >
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    if (link.id === 'home') {
                      handleHomeClick(e);
                    } else {
                      setActiveTab(link.id);
                    }
                    setMobileMenuOpen(false);
                  }}
                  className="text-sm font-bold text-[#111827] hover:text-[#1B64F2] py-1"
                >
                  {link.label}
                </a>
              ))}
              
              <div className="pt-3 flex flex-col gap-2 border-t border-[#E5DFD3]">
                <div className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-1">
                  Connect with us
                </div>
                
                <a
                  href="tel:+918377866258"
                  className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#FCFAF6] border border-[#E5DFD3] text-xs font-bold text-[#111827]"
                >
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#1B64F2]" />
                    <span>Call: +91 83778 66258</span>
                  </div>
                  <ArrowUpRight className="w-3 h-3 text-[#64748B]" />
                </a>

                <a
                  href="https://wa.me/918377866258?text=Hi%20WebDari%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#FCFAF6] border border-[#E5DFD3] text-xs font-bold text-[#111827]"
                >
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>WhatsApp (83778 66258)</span>
                  </div>
                  <ArrowUpRight className="w-3 h-3 text-[#64748B]" />
                </a>

                <a
                  href="https://wa.me/918851347754?text=Hi%20WebDari%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#FCFAF6] border border-[#E5DFD3] text-xs font-bold text-[#111827]"
                >
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>WhatsApp (88513 47754)</span>
                  </div>
                  <ArrowUpRight className="w-3 h-3 text-[#64748B]" />
                </a>

                <a
                  href="mailto:webdarimail@gmail.com"
                  className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#FCFAF6] border border-[#E5DFD3] text-xs font-bold text-[#111827]"
                >
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-blue-600" />
                    <span>Email: webdarimail@gmail.com</span>
                  </div>
                  <ArrowUpRight className="w-3 h-3 text-[#64748B]" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
