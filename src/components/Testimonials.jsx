import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary-500 uppercase mb-4">Perspective</h2>
          <h3 className="text-4xl font-bold">Research Philosophy</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 relative"
          >
            <Quote className="absolute top-6 right-6 text-primary-500/20" size={48} />
            <p className="text-slate-300 text-lg leading-relaxed italic mb-8 relative z-10">
              "The integration of genomics and proteomics is not just a scientific choice; it is a clinical necessity. We are decoding the language of disease one protein at a time."
            </p>
            <div>
              <p className="text-white font-bold">Dr. Farhad Rezaee</p>
              <p className="text-slate-500 text-sm">Founder & Chief Scientist, BCB</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 relative border-primary-500/30 bg-primary-500/5"
          >
            <Quote className="absolute top-6 right-6 text-primary-500/20" size={48} />
            <p className="text-slate-300 text-lg leading-relaxed italic mb-8 relative z-10">
              "BCB bridges the critical gap between academic discovery and patient care. Our biomarkers are designed to be actionable in the clinical setting."
            </p>
            <div>
              <p className="text-white font-bold">Strategic Vision</p>
              <p className="text-slate-500 text-sm">Bridging the Gap to Clinical Reality</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
