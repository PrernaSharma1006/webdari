import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageSquare, 
  X, 
  Send, 
  Sparkles, 
  Phone, 
  Calendar, 
  CheckCircle2, 
  ArrowRight,
  RefreshCw,
  Clock,
  User,
  Mail,
  ChevronRight,
  MessageCircle,
  HelpCircle
} from 'lucide-react';

const PREMADE_FAQS = [
  {
    id: 'websites',
    question: '💻 How fast can you build my website?',
    answer: 'Our Starter Landing Pages go live in just 6–7 days! For bespoke multi-page business websites (up to 5 pages), turnaround is 10–12 days. Every website includes high-speed cloud hosting, Free SSL security, direct WhatsApp click-to-chat, and 1 full month of free technical support.',
    followUp: ['💰 What are your pricing packages?', '📞 Request a Free Callback / Strategy Call']
  },
  {
    id: 'ugc',
    question: '🎬 How do your UGC Creator Video Ads work?',
    answer: 'Our network of creators script, shoot, and edit high-retention vertical (9:16) video ads crafted specifically for Meta Ads, Instagram Reels, and YouTube Shorts. They include hook-based scripts, animated captions, and commercial rights—proven to generate up to 4.2x higher conversions than traditional static ads.',
    followUp: ['📱 What is included in Social Media Handling?', '📞 Request a Free Callback / Strategy Call']
  },
  {
    id: 'socials',
    question: '📱 What is included in Social Media Handling?',
    answer: 'We handle everything from start to finish: monthly content planning, custom post & carousel graphic design, viral trend-jacking Reels, industry caption copywriting, and active daily DM/Comment management (all 7 days, including Sundays) so your inbound leads never go cold.',
    followUp: ['💰 What are your pricing packages?', '📞 Request a Free Callback / Strategy Call']
  },
  {
    id: 'pricing',
    question: '💰 What are your pricing packages?',
    answer: 'We offer clear, transparent packages:\n• Website Creation: From ₹8,500 for high-converting 1-page sites.\n• UGC Video Packs: From ₹8,000 for 4 custom creator videos.\n• Social Media Handling: From ₹10,000/month for complete execution.\n• Combo Growth Bundles also available at discounted launch rates!',
    followUp: ['💻 How fast can you build my website?', '📞 Request a Free Callback / Strategy Call']
  },
  {
    id: 'custom_domain',
    question: '🌐 Will I own my domain and website?',
    answer: 'Yes, 100%! You have full ownership of your domain and website assets. We set up everything cleanly on high-speed cloud infrastructure with no hidden recurring lock-ins.',
    followUp: ['📞 Request a Free Callback / Strategy Call', '💬 Ask another question']
  }
];

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      sender: 'bot',
      text: "Hi there! 👋 Welcome to WebDari. How can we help your business build a stronger online presence today?",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [leadStage, setLeadStage] = useState('browsing'); // 'browsing' | 'ask_name' | 'ask_phone' | 'ask_notes' | 'submitting' | 'submitted'
  const [leadData, setLeadData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceInterest: 'General Inquiry',
    notes: ''
  });
  const [inputVal, setInputVal] = useState('');
  const [inputError, setInputError] = useState('');
  const chatBottomRef = useRef(null);

  useEffect(() => {
    if (chatBottomRef.current) {
      chatBottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping, leadStage]);

  const addBotMessage = (text, delay = 450) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    }, delay);
  };

  const addUserMessage = (text) => {
    setMessages((prev) => [
      ...prev,
      {
        id: `user-${Date.now()}`,
        sender: 'user',
        text,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  };

  const handleSelectFaq = (faq) => {
    setHasInteracted(true);
    addUserMessage(faq.question);
    addBotMessage(faq.answer, 400);
  };

  const handleStartLeadCapture = (service = 'General Inquiry') => {
    setHasInteracted(true);
    addUserMessage("📞 I would like to request a callback / free strategy session.");
    setLeadData((prev) => ({ ...prev, serviceInterest: service }));
    setLeadStage('ask_name');
    addBotMessage("Wonderful! We'd love to connect with you. What is your Name & Business Name?", 500);
  };

  const handleResetChat = () => {
    setLeadStage('browsing');
    setLeadData({ name: '', phone: '', email: '', serviceInterest: 'General Inquiry', notes: '' });
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        sender: 'bot',
        text: "Hi again! 👋 What would you like to know about WebDari?",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  };

  const handleCustomSubmit = async (e) => {
    e.preventDefault();
    const val = inputVal.trim();
    if (!val) return;

    setInputError('');

    if (leadStage === 'ask_name') {
      addUserMessage(val);
      setLeadData((prev) => ({ ...prev, name: val }));
      setInputVal('');
      setLeadStage('ask_phone');
      addBotMessage(`Nice to meet you, ${val}! What is your Mobile / WhatsApp Number (and Email) so our founders can reach out to you?`, 450);
    } else if (leadStage === 'ask_phone') {
      addUserMessage(val);
      setLeadData((prev) => ({ ...prev, phone: val }));
      setInputVal('');
      setLeadStage('ask_notes');
      addBotMessage("Got it! Lastly, what is your primary goal or question? (e.g. Need a custom dental website, viral UGC ads, social media management, etc.)", 450);
    } else if (leadStage === 'ask_notes') {
      addUserMessage(val);
      const updatedNotes = val;
      setLeadData((prev) => ({ ...prev, notes: updatedNotes }));
      setInputVal('');
      setLeadStage('submitting');
      
      // Compile entire chat history transcript
      const transcript = messages
        .map((m) => `[${m.sender.toUpperCase()} - ${m.time}]: ${m.text}`)
        .join('\n\n') + `\n\n[USER - Final Goal]: ${updatedNotes}`;

      const payload = {
        _subject: `💬 New WebDari Chatbot Lead: ${leadData.name || 'Visitor'} (${leadData.phone || val})`,
        _template: "table",
        customerName: leadData.name || 'Anonymous Visitor',
        phoneContact: leadData.phone || 'Provided in conversation',
        primaryGoal: updatedNotes,
        fullChatTranscript: transcript,
        leadSource: "WebDari AI Chatbot Widget",
        submittedAt: new Date().toLocaleString()
      };

      try {
        await fetch("https://formsubmit.co/ajax/webdari.mail@gmail.com", {
          method: "POST",
          headers: { 
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(payload)
        });
      } catch (err) {
        console.log("Chat transcript logged:", err);
      } finally {
        setLeadStage('submitted');
        addBotMessage("🎉 Thank you! Your request and entire conversation have been sent directly to our leadership team. We will call/WhatsApp you shortly!", 500);
      }
    } else {
      // General question typed while browsing
      addUserMessage(val);
      setInputVal('');
      addBotMessage("Thanks for your question! For detailed and customized business inquiries, please select an option below or request a direct callback so we can assist you personally.", 450);
    }
  };

  return (
    <>
      {/* Floating Chat Trigger Button */}
      <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-end gap-3 pointer-events-auto select-none">
        
        {/* Floating Callout Pill when closed */}
        {!isOpen && !hasInteracted && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.4 }}
            onClick={() => setIsOpen(true)}
            className="hidden md:flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#1E293B] text-white text-xs font-bold shadow-xl border border-slate-700/80 cursor-pointer hover:bg-slate-900 transition-all hover:scale-105"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Need help building your presence? Chat with us</span>
            <Sparkles className="w-3.5 h-3.5 text-[#1B64F2]" />
          </motion.div>
        )}

        {/* Circular Floating Toggle Button */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          onClick={() => setIsOpen(!isOpen)}
          className={`relative w-14 h-14 sm:w-15 sm:h-15 rounded-full shadow-2xl flex items-center justify-center transition-colors cursor-pointer ${
            isOpen 
              ? 'bg-[#1E293B] text-white border border-slate-700' 
              : 'bg-[#1B64F2] text-white shadow-blue-500/35 hover:bg-blue-600'
          }`}
          aria-label="Toggle WebDari Chat Assistant"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <>
              <MessageSquare className="w-6 h-6 fill-current" />
              <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white" />
            </>
          )}
        </motion.button>
      </div>

      {/* Floating Interactive Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 25, scale: 0.94 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-22 right-4 sm:right-6 w-[calc(100vw-2rem)] sm:w-[400px] h-[550px] max-h-[82vh] bg-[#FCFAF6] border border-[#E5DFD3] rounded-3xl shadow-2xl z-50 flex flex-col overflow-hidden font-sans"
          >
            {/* Chatbot Header */}
            <div className="bg-[#0F172A] text-white p-4 flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#1B64F2] to-blue-400 flex items-center justify-center text-white shadow-md">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-[#0F172A]" />
                </div>
                <div>
                  <h3 className="text-sm font-extrabold text-white flex items-center gap-1.5">
                    <span>WebDari Assistant</span>
                  </h3>
                  <p className="text-[11px] text-slate-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Always Active • Direct Support</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={handleResetChat}
                  title="Reset conversation"
                  className="p-1.5 rounded-xl hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-xl hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Chat Body / Messages Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs bg-[#F5F2EB]/50">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3.5 rounded-2xl leading-relaxed whitespace-pre-line shadow-xs ${
                      msg.sender === 'user'
                        ? 'bg-[#1B64F2] text-white rounded-tr-none font-medium'
                        : 'bg-[#FCFAF6] text-[#0F172A] border border-[#E5DFD3] rounded-tl-none font-normal'
                    }`}
                  >
                    {msg.text}
                  </div>
                  <span className="text-[9px] text-[#64748B] mt-1 px-1">{msg.time}</span>
                </motion.div>
              ))}

              {/* Bot Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center gap-1.5 bg-[#FCFAF6] border border-[#E5DFD3] p-3 rounded-2xl rounded-tl-none w-16"
                >
                  <span className="w-2 h-2 rounded-full bg-[#1B64F2] animate-bounce" />
                  <span className="w-2 h-2 rounded-full bg-[#1B64F2] animate-bounce [animation-delay:0.2s]" />
                  <span className="w-2 h-2 rounded-full bg-[#1B64F2] animate-bounce [animation-delay:0.4s]" />
                </motion.div>
              )}

              {/* Premade FAQ Interactive Buttons (Shown when in browsing mode) */}
              {leadStage === 'browsing' && !isTyping && (
                <div className="space-y-2 pt-2">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#64748B] px-1 flex items-center gap-1">
                    <HelpCircle className="w-3 h-3 text-[#1B64F2]" />
                    <span>Frequently Asked Questions:</span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    {PREMADE_FAQS.map((faq) => (
                      <button
                        key={faq.id}
                        onClick={() => handleSelectFaq(faq)}
                        className="text-left px-3.5 py-2.5 rounded-xl bg-[#FCFAF6] border border-[#E5DFD3] text-[#0F172A] text-xs font-semibold hover:border-[#1B64F2] hover:bg-[#E8F0FE] hover:text-[#1B64F2] transition-all flex items-center justify-between group shadow-2xs cursor-pointer"
                      >
                        <span>{faq.question}</span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#1B64F2] group-hover:translate-x-0.5 transition-all shrink-0" />
                      </button>
                    ))}

                    {/* Primary Callback CTA Button */}
                    <button
                      onClick={() => handleStartLeadCapture('Free Strategy Call')}
                      className="w-full text-center px-4 py-3 rounded-xl bg-gradient-to-r from-[#1B64F2] to-blue-600 text-white text-xs font-extrabold hover:opacity-95 shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 mt-1 cursor-pointer"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Request a Callback / Book Free Meeting</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {/* Completed Success Card */}
              {leadStage === 'submitted' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-3 shadow-sm"
                >
                  <div className="flex items-center gap-2 font-bold text-emerald-800 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Conversation Sent to WebDari Team!</span>
                  </div>
                  <p className="text-[11px] text-emerald-700 leading-relaxed">
                    Our founder and strategy lead have received your details and will get in touch shortly.
                  </p>
                  
                  {/* Direct WhatsApp Instant Action */}
                  <a
                    href={`https://wa.me/918377866258?text=Hi%20WebDari%2C%20I%20just%20used%20your%20chatbot%20and%20would%20like%20to%20connect%20regarding%20my%20business%20inquiry.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3.5 rounded-xl bg-[#25D366] text-white text-xs font-bold hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2 shadow-xs"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Chat on WhatsApp Directly</span>
                  </a>
                </motion.div>
              )}

              <div ref={chatBottomRef} />
            </div>

            {/* Input Bar */}
            {leadStage !== 'submitted' && (
              <form 
                onSubmit={handleCustomSubmit}
                className="p-3 bg-[#FCFAF6] border-t border-[#E5DFD3] flex items-center gap-2"
              >
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder={
                    leadStage === 'ask_name'
                      ? "Enter your name & business..."
                      : leadStage === 'ask_phone'
                      ? "Enter your phone / WhatsApp..."
                      : leadStage === 'ask_notes'
                      ? "Describe your requirement..."
                      : "Ask a question or type here..."
                  }
                  className="flex-1 bg-[#F5F2EB] border border-[#E5DFD3] rounded-xl px-3.5 py-2.5 text-xs text-[#0F172A] placeholder:text-slate-400 focus:outline-none focus:border-[#1B64F2] focus:bg-white transition-all font-medium"
                />
                <button
                  type="submit"
                  disabled={!inputVal.trim() || isTyping}
                  className="w-9 h-9 rounded-xl bg-[#1B64F2] disabled:opacity-40 text-white flex items-center justify-center transition-all hover:bg-blue-600 shrink-0 cursor-pointer"
                >
                  <Send className="w-4 h-4 ml-0.5" />
                </button>
              </form>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
