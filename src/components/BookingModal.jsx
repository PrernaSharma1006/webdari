import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  MapPin, 
  Tag, 
  MessageSquare, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  AlertCircle,
  X
} from 'lucide-react';

const SERVICE_TOPICS = [
  "Website Creation",
  "UGC Content",
  "Social Media Handling",
  "All 3 Services (Complete Digital Growth Bridge)"
];

const TIME_SLOTS = [
  "10:00 AM - 11:00 AM",
  "11:00 AM - 12:00 PM",
  "12:00 PM - 01:00 PM",
  "01:00 PM - 02:00 PM",
  "02:00 PM - 03:00 PM",
  "03:00 PM - 04:00 PM",
  "04:00 PM - 05:00 PM",
  "05:00 PM - 06:00 PM",
  "06:00 PM - 07:00 PM",
  "07:00 PM - 08:00 PM",
  "08:00 PM - 09:00 PM",
  "09:00 PM - 10:00 PM"
];

export default function BookingModal({ isOpen, onClose, defaultTopic = "Website Creation" }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    topic: defaultTopic,
    address: '',
    preferredDate: '',
    preferredTime: '11:00 AM - 12:00 PM',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setFormData((prev) => ({ 
        ...prev, 
        topic: defaultTopic 
      }));
      // Prevent body scrolling when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, defaultTopic]);

  // Field validation rules
  const validateField = (name, value) => {
    let error = '';
    switch (name) {
      case 'fullName':
        if (!value.trim()) {
          error = 'Full name is required';
        } else if (/\d/.test(value)) {
          error = 'Numbers are not allowed in name';
        } else if (!/^[a-zA-Z\s'.]+$/.test(value)) {
          error = 'Only alphabets and spaces are allowed';
        } else if (value.trim().length < 2) {
          error = 'Name must be at least 2 characters';
        }
        break;

      case 'phone':
        if (!value) {
          error = 'Phone number is required';
        } else if (/[a-zA-Z]/.test(value)) {
          error = 'Letters are not allowed in phone number';
        } else if (value.length !== 10) {
          error = `Phone number must be exactly 10 digits (entered: ${value.length})`;
        } else if (!/^[6-9]\d{9}$/.test(value)) {
          error = 'Please enter a valid 10-digit mobile number starting with 6, 7, 8, or 9';
        }
        break;

      case 'email':
        if (!value.trim()) {
          error = 'Email ID is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = 'Please enter a valid email address (e.g. name@domain.com)';
        }
        break;

      case 'address':
        if (!value.trim()) {
          error = 'Address or city is required';
        } else if (value.trim().length < 3) {
          error = 'Please enter at least 3 characters for address/city';
        }
        break;

      case 'preferredDate':
        if (!value) {
          error = 'Please select your preferred meeting date';
        }
        break;

      default:
        break;
    }
    return error;
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let sanitizedValue = value;

    if (name === 'fullName') {
      sanitizedValue = value.replace(/[^a-zA-Z\s'.]/g, '');
    } else if (name === 'phone') {
      sanitizedValue = value.replace(/\D/g, '').slice(0, 10);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: sanitizedValue
    }));

    if (touched[name]) {
      const error = validateField(name, sanitizedValue);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const validateAll = () => {
    const newErrors = {};
    const fieldsToValidate = ['fullName', 'phone', 'email', 'address', 'preferredDate'];

    fieldsToValidate.forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
      }
    });

    setErrors(newErrors);
    setTouched({
      fullName: true,
      phone: true,
      email: true,
      address: true,
      preferredDate: true
    });

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = validateAll();
    if (!isValid) return;

    setIsSubmitting(true);

    const payload = {
      _subject: `🚀 New WebDari Strategy Booking: ${formData.fullName} (${formData.topic})`,
      _template: "table",
      fullName: formData.fullName,
      phone: `+91 ${formData.phone}`,
      email: formData.email,
      serviceNeeded: formData.topic,
      addressCity: formData.address,
      preferredDate: formData.preferredDate,
      preferredTime: formData.preferredTime,
      notes: formData.message || "None",
      _captcha: "false"
    };

    try {
      await fetch("https://formsubmit.co/ajax/webdarimail@gmail.com", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(payload)
      });
    } catch (err) {
      console.log("Submission logged:", err);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const todayString = new Date().toISOString().split('T')[0];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 overflow-y-auto">
        
        {/* Dark Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.35 }}
          className="relative w-full max-w-3xl bg-[#FCFAF6] border border-[#E5DFD3] rounded-[32px] p-6 sm:p-10 shadow-2xl z-10 my-auto max-h-[90vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#F0EDE6] hover:bg-slate-200 text-[#0F172A] flex items-center justify-center transition-colors cursor-pointer z-20"
            title="Close Form"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Section Header */}
          <div className="text-center space-y-2 mb-8 pr-6 pl-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F0FE] border border-[#1B64F2]/25 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#1B64F2]" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#1B64F2]">
                100% Free Strategy Session
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0F172A]">
              Book Your Free Strategy Meeting
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] max-w-md mx-auto">
              Fill out your requirements below and our team will get in touch with your custom roadmap.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="modal-form"
                onSubmit={handleSubmit}
                noValidate
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-5"
              >
                {/* Row 1: Full Name & Phone Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0F172A] flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-[#1B64F2]" />
                        <span>Full Name *</span>
                      </span>
                      <span className="text-[10px] text-slate-400 font-normal lowercase">(letters only)</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="e.g. Rahul Sharma"
                      value={formData.fullName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-3 rounded-2xl bg-white border text-sm text-[#0F172A] placeholder-[#94A3B8] focus:outline-none transition-all shadow-2xs ${
                        touched.fullName && errors.fullName
                          ? 'border-red-500 ring-2 ring-red-500/20'
                          : 'border-[#E5DFD3] focus:border-[#1B64F2] focus:ring-2 focus:ring-[#1B64F2]/20'
                      }`}
                    />
                    {touched.fullName && errors.fullName && (
                      <p className="flex items-center gap-1 text-xs text-red-500 font-medium pt-0.5">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0F172A] flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-[#1B64F2]" />
                        <span>Phone Number *</span>
                      </span>
                      <span className="text-[10px] text-slate-400 font-normal lowercase">(10 digits)</span>
                    </label>
                    <div className="relative flex items-center">
                      <span className="absolute left-4 text-xs font-bold text-slate-500 select-none pointer-events-none">
                        +91
                      </span>
                      <input
                        type="tel"
                        name="phone"
                        maxLength={10}
                        placeholder="9876543210"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full pl-12 pr-4 py-3 rounded-2xl bg-white border text-sm text-[#0F172A] placeholder-[#94A3B8] focus:outline-none transition-all shadow-2xs font-mono ${
                          touched.phone && errors.phone
                            ? 'border-red-500 ring-2 ring-red-500/20'
                            : 'border-[#E5DFD3] focus:border-[#1B64F2] focus:ring-2 focus:ring-[#1B64F2]/20'
                        }`}
                      />
                    </div>
                    {touched.phone && errors.phone && (
                      <p className="flex items-center gap-1 text-xs text-red-500 font-medium pt-0.5">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 2: Email ID & Address */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email ID */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0F172A] flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-[#1B64F2]" />
                      <span>Email ID *</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="e.g. rahul@business.com"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-3 rounded-2xl bg-white border text-sm text-[#0F172A] placeholder-[#94A3B8] focus:outline-none transition-all shadow-2xs ${
                        touched.email && errors.email
                          ? 'border-red-500 ring-2 ring-red-500/20'
                          : 'border-[#E5DFD3] focus:border-[#1B64F2] focus:ring-2 focus:ring-[#1B64F2]/20'
                      }`}
                    />
                    {touched.email && errors.email && (
                      <p className="flex items-center gap-1 text-xs text-red-500 font-medium pt-0.5">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Address */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0F172A] flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#1B64F2]" />
                      <span>Address / City *</span>
                    </label>
                    <input
                      type="text"
                      name="address"
                      placeholder="e.g. Mumbai, Maharashtra"
                      value={formData.address}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-3 rounded-2xl bg-white border text-sm text-[#0F172A] placeholder-[#94A3B8] focus:outline-none transition-all shadow-2xs ${
                        touched.address && errors.address
                          ? 'border-red-500 ring-2 ring-red-500/20'
                          : 'border-[#E5DFD3] focus:border-[#1B64F2] focus:ring-2 focus:ring-[#1B64F2]/20'
                      }`}
                    />
                    {touched.address && errors.address && (
                      <p className="flex items-center gap-1 text-xs text-red-500 font-medium pt-0.5">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.address}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 3: Meeting Topic & Preferred Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0F172A] flex items-center gap-1.5">
                      <Tag className="w-3.5 h-3.5 text-[#1B64F2]" />
                      <span>Topic / Service Needed *</span>
                    </label>
                    <div className="relative">
                      <select
                        name="topic"
                        value={formData.topic}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-2xl bg-white border border-[#E5DFD3] text-sm text-[#0F172A] focus:outline-none focus:border-[#1B64F2] focus:ring-2 focus:ring-[#1B64F2]/20 transition-all shadow-2xs appearance-none cursor-pointer"
                      >
                        {SERVICE_TOPICS.map((topic, i) => (
                          <option key={i} value={topic}>{topic}</option>
                        ))}
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                        ▾
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0F172A] flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#1B64F2]" />
                      <span>Preferred Day / Date *</span>
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      min={todayString}
                      value={formData.preferredDate}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-3 rounded-2xl bg-white border text-sm text-[#0F172A] focus:outline-none transition-all shadow-2xs cursor-pointer ${
                        touched.preferredDate && errors.preferredDate
                          ? 'border-red-500 ring-2 ring-red-500/20'
                          : 'border-[#E5DFD3] focus:border-[#1B64F2] focus:ring-2 focus:ring-[#1B64F2]/20'
                      }`}
                    />
                    {touched.preferredDate && errors.preferredDate && (
                      <p className="flex items-center gap-1 text-xs text-red-500 font-medium pt-0.5">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.preferredDate}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 4: Preferred Time Slot & Message */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0F172A] flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#1B64F2]" />
                      <span>Preferred Time Slot *</span>
                    </label>
                    <div className="relative">
                      <select
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-2xl bg-white border border-[#E5DFD3] text-sm text-[#0F172A] focus:outline-none focus:border-[#1B64F2] focus:ring-2 focus:ring-[#1B64F2]/20 transition-all shadow-2xs appearance-none cursor-pointer"
                      >
                        {TIME_SLOTS.map((slot, i) => (
                          <option key={i} value={slot}>{slot}</option>
                        ))}
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                        ▾
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0F172A] flex items-center gap-1.5">
                      <MessageSquare className="w-3.5 h-3.5 text-[#1B64F2]" />
                      <span>Additional Notes (Optional)</span>
                    </label>
                    <input
                      type="text"
                      name="message"
                      placeholder="Brief details about your goals..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-[#E5DFD3] text-sm text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#1B64F2] focus:ring-2 focus:ring-[#1B64F2]/20 transition-all shadow-2xs"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-8 rounded-full bg-[#1B64F2] hover:bg-[#1557D4] text-white font-bold text-sm sm:text-base tracking-wide shadow-lg shadow-[#1B64F2]/25 hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2.5 group cursor-pointer disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <span>Scheduling Your Session...</span>
                    ) : (
                      <>
                        <span>Confirm & Schedule Free Meeting</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
              </motion.form>
            ) : (
              /* Success Confirmation Card */
              <motion.div
                key="modal-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6 sm:py-8 space-y-5"
              >
                <div className="w-16 h-16 rounded-full bg-[#E8F0FE] text-[#1B64F2] flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-9 h-9" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-[#0F172A]">
                    Meeting Request Confirmed, {formData.fullName}!
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5F6B7A] max-w-md mx-auto">
                    We have received your details for <strong className="text-[#1B64F2]">{formData.topic}</strong> on <strong className="text-[#0F172A]">{formData.preferredDate}</strong> at <strong className="text-[#0F172A]">{formData.preferredTime}</strong>.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#E8F0FE]/60 border border-[#1B64F2]/20 max-w-md mx-auto text-xs text-[#334155] space-y-1">
                  <p>✨ Confirmation logged & sent to <strong>{formData.email}</strong>.</p>
                  <p>📞 We will connect at <strong>+91 {formData.phone}</strong>.</p>
                </div>

                <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={onClose}
                    className="px-6 py-3 rounded-full bg-white border border-[#E5DFD3] text-xs font-bold text-[#0F172A] hover:bg-[#F5F2EB] transition-colors cursor-pointer"
                  >
                    Close Window
                  </button>

                  <a
                    href={`https://wa.me/918377866258?text=Hi%20WebDari%2C%20I%20just%20scheduled%20a%20free%20meeting%20for%20${encodeURIComponent(formData.topic)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2 cursor-pointer"
                  >
                    <span>Open WhatsApp Chat</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </AnimatePresence>
  );
}
