import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Globe, ArrowRight } from 'lucide-react';

const Contact = () => {
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
                  <p className="text-slate-400 text-sm">Abbas@clinicabiomarkers.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-10 relative overflow-hidden">
            <h4 className="text-2xl font-bold mb-6">Send a Message</h4>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" placeholder="Your Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary-500 transition-all" />
                <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary-500 transition-all" />
              </div>
              <input type="text" placeholder="Subject" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary-500 transition-all" />
              <textarea placeholder="Message" rows="4" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary-500 transition-all"></textarea>
              <button className="w-full bg-primary-600 hover:bg-primary-500 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2">
                Send Message <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
        

      </div>
    </footer>
  );
};

export default Contact;
