import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Send, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const InquiryPage = () => {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    data.formName = 'Inquiry Form';

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        setStatus('success');
        e.target.reset();
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-[#050a14] pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Link to="/" className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors">
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h1 className="text-4xl font-bold mb-6">Partner with <span className="text-primary-500">BCB</span></h1>
              <p className="text-slate-400 leading-relaxed">
                We are open to collaborations with healthcare providers, pharmaceutical companies, and research institutions worldwide.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <CheckCircle className="text-primary-500 shrink-0" size={20} />
                <p className="text-sm text-slate-300">Biomarker Validation Services</p>
              </div>
              <div className="flex gap-3 items-start">
                <CheckCircle className="text-primary-500 shrink-0" size={20} />
                <p className="text-sm text-slate-300">Clinical Trial Consultation</p>
              </div>
              <div className="flex gap-3 items-start">
                <CheckCircle className="text-primary-500 shrink-0" size={20} />
                <p className="text-sm text-slate-300">Proteomic Data Analysis</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3 glass-card p-8 md:p-10"
          >
            <h2 className="text-2xl font-bold mb-8">Formal Inquiry Form</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Full Name</label>
                  <input type="text" name="name" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary-500 transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Organization</label>
                  <input type="text" name="organization" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary-500 transition-all" placeholder="Medical Research Inst." />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400">Email Address</label>
                <input type="email" name="email" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary-500 transition-all" placeholder="john@example.com" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400">Inquiry Type</label>
                <select name="inquiryType" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary-500 transition-all text-slate-300">
                  <option className="bg-slate-900" value="Collaboration Request">Collaboration Request</option>
                  <option className="bg-slate-900" value="Service Inquiry">Service Inquiry</option>
                  <option className="bg-slate-900" value="Media/Press">Media/Press</option>
                  <option className="bg-slate-900" value="General Information">General Information</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400">Detailed Message</label>
                <textarea name="message" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary-500 transition-all h-32" placeholder="Tell us more about your requirements..."></textarea>
              </div>

              <button disabled={status === 'submitting'} type="submit" className="w-full bg-primary-600 hover:bg-primary-500 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary-500/20 disabled:opacity-50">
                {status === 'submitting' ? 'Submitting...' : status === 'success' ? 'Inquiry Sent!' : status === 'error' ? 'Error Sending' : 'Submit Inquiry'} 
                {status === 'idle' && <Send size={18} />}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default InquiryPage;
