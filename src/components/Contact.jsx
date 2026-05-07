import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Globe, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    data.formName = 'Contact Form';

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
    <footer id="contact" className="pt-20 pb-10 bg-slate-900/50 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-4xl font-bold mb-8">Let's Advance <br /><span className="text-primary-500">Global Health</span> Together</h2>
            <p className="text-slate-400 text-lg mb-12 max-w-md">
              Whether you are looking for collaboration, biomarker validation, or expert consultation, our team is ready to assist.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center shrink-0">
                  <MapPin className="text-primary-400" size={20} />
                </div>
                <div>
                  <p className="text-slate-200 font-semibold">Headquarters</p>
                  <p className="text-slate-400 text-sm">34 Chippingwood Manor, Aurora, ON. L4G7S4</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center shrink-0">
                  <Phone className="text-primary-400" size={20} />
                </div>
                <div>
                  <p className="text-slate-200 font-semibold">Direct Contact</p>
                  <p className="text-slate-400 text-sm">+1 647.868.7269</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center shrink-0">
                  <Mail className="text-primary-400" size={20} />
                </div>
                <div>
                  <p className="text-slate-200 font-semibold">Email Inquiry</p>
                  <a href="mailto:Abbas@clinicabiomarkers.com" className="text-slate-400 text-sm hover:text-primary-400 transition-colors block">Abbas@clinicabiomarkers.com</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-10 relative overflow-hidden">
            <h4 className="text-2xl font-bold mb-6">Send a Message</h4>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" name="name" required placeholder="Your Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary-500 transition-all" />
                <input type="email" name="email" required placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary-500 transition-all" />
              </div>
              <input type="text" name="subject" required placeholder="Subject" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary-500 transition-all" />
              <textarea name="message" required placeholder="Message" rows="4" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary-500 transition-all"></textarea>
              <button disabled={status === 'submitting'} type="submit" className="w-full bg-primary-600 hover:bg-primary-500 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50">
                {status === 'submitting' ? 'Sending...' : status === 'success' ? 'Message Sent!' : status === 'error' ? 'Error Sending' : 'Send Message'} 
                {status === 'idle' && <ArrowRight size={18} />}
              </button>
            </form>
          </div>
        </div>
        

      </div>
    </footer>
  );
};

export default Contact;
