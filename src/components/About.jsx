import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-sm font-bold tracking-widest text-primary-500 uppercase">Legacy of Excellence</h2>
            <h3 className="text-4xl md:text-5xl font-bold leading-tight">Bridging Academic Innovation & Clinical Reality</h3>
            <p className="text-slate-400 text-lg leading-relaxed">
              Founded by <strong>Dr. Farhad Rezaee</strong>, BIO-CLINICA BIOMARKERS represents the culmination of two decades of ground-breaking research in Molecular Clinical Screening. 
            </p>
            <p className="text-slate-400 text-lg leading-relaxed">
              Our mission is clear: to bridge the critical gap between academic discovery and patient care. By leveraging high-throughput proteomics and genomics, we identify "Clinical Biomarkers" that enable early detection and personalized treatment strategies.
            </p>
            <div className="pt-4 grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-3xl font-bold text-white">20+</h4>
                <p className="text-slate-500 text-sm">Years Research</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-white">Global</h4>
                <p className="text-slate-500 text-sm">Network</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="glass-card p-2">
              <div className="aspect-[4/5] rounded-lg overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000" 
                  alt="Standard Medical Laboratory" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050a14] via-[#050a14]/20 to-transparent flex items-end p-8">
                  <p className="text-sm italic text-slate-200 font-medium leading-relaxed">"Identifying the blueprint of disease through blood-based molecular screening."</p>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-500/20 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
