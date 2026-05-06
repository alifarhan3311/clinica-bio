import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Globe, Linkedin, ArrowRight, Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "How can I collaborate with BCB?",
    answer: "We offer several collaboration models, including joint research projects, contract biomarker validation, and consulting for clinical trials. Please submit an inquiry form with your specific project details."
  },
  {
    question: "What pathologies are your main focus?",
    answer: "While we specialize in cardiovascular, metabolic, and oncological diseases, our multi-omic platform is adaptable to almost any human pathology. We frequently work on rare and orphan diseases as well."
  },
  {
    question: "Do you provide diagnostic testing for individuals?",
    answer: "Currently, BIO-CLINICA BIOMARKERS focuses on research and B2B clinical validation. We do not provide direct-to-consumer diagnostic testing at this time."
  },
  {
    question: "Where is BCB located?",
    answer: "Our headquarters and operations management are located in Aurora, Ontario, Canada. We work with research institutions and pharmaceutical partners globally."
  }
];

const FAQItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/5 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-primary-400 transition-all"
      >
        <span className="font-bold text-lg">{faq.question}</span>
        {isOpen ? <Minus className="text-primary-500" /> : <Plus className="text-primary-500" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="text-slate-400 pb-6 leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-[#050a14] pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-24 space-y-4">
          <h2 className="text-sm font-bold tracking-widest text-primary-500 uppercase">Contact & Support</h2>
          <h1 className="text-5xl md:text-7xl font-bold">Get In Touch</h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-40">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1 space-y-6"
          >
            <div className="glass-card p-10 space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-primary-500/10 flex items-center justify-center text-primary-500">
                <MapPin size={28} />
              </div>
              <h3 className="text-2xl font-bold">Office Address</h3>
              <p className="text-slate-400 leading-relaxed">
                34 Chippingwood Manor, <br />
                Aurora, ON. L4G7S4
              </p>
            </div>

            <div className="glass-card p-10 space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-primary-500/10 flex items-center justify-center text-primary-500">
                <Mail size={28} />
              </div>
              <h3 className="text-2xl font-bold">Direct Inquiry</h3>
              <p className="text-slate-400">Abbas@clinicabiomarkers.com</p>
              <p className="text-slate-400">+1 647.868.7269</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 glass-card p-10 md:p-12"
          >
            <h2 className="text-3xl font-bold mb-10">Send a Formal Request</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Full Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-primary-500 transition-all text-white" placeholder="John Doe" />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email Address</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-primary-500 transition-all text-white" placeholder="john@example.com" />
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Project Inquiry Type</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-primary-500 transition-all text-slate-300">
                  <option className="bg-slate-900">Academic Collaboration</option>
                  <option className="bg-slate-900">Pharma Service</option>
                  <option className="bg-slate-900">Clinical Validation</option>
                  <option className="bg-slate-900">General Information</option>
                </select>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Message</label>
                <textarea className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-primary-500 transition-all h-40 text-white" placeholder="Provide a brief summary of your inquiry..."></textarea>
              </div>

              <button className="w-full bg-primary-600 hover:bg-primary-500 text-white font-bold py-5 rounded-xl transition-all flex items-center justify-center gap-3 shadow-2xl shadow-primary-500/30">
                Send Message <ArrowRight size={20} />
              </button>
            </form>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mb-40">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 rounded-xl bg-primary-500/10 text-primary-500">
              <HelpCircle size={32} />
            </div>
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          </div>
          <div className="glass-card p-10">
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} />
            ))}
          </div>
        </div>

        {/* Global Partnerships Footer */}
        <div className="text-center space-y-8 border-t border-white/5 pt-20">
          <h3 className="text-2xl font-bold">Global Strategic Partnerships</h3>
          <p className="text-slate-500 max-w-xl mx-auto">
            BIO-CLINICA BIOMARKERS works with partners across North America, Europe, and Asia to advance the science of clinical diagnostics.
          </p>
          <div className="flex justify-center gap-8">
             <Globe size={40} className="text-slate-700 hover:text-primary-500 transition-colors" />
             <Linkedin size={40} className="text-slate-700 hover:text-primary-500 transition-colors" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
