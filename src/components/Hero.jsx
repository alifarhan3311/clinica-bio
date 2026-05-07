import React from 'react';
import { motion } from 'framer-motion';
import { Beaker, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-32">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-screen"
        style={{ backgroundImage: 'url(/images/hero-bg.png)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050a14]/50 via-[#050a14]/80 to-[#050a14]" />
      
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-primary-400 text-sm font-medium mb-8"
        >
          <Beaker size={16} />
          <span>Next Generation Diagnostic Solutions</span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8"
        >
          Revolutionizing <br />
          <span className="text-gradient">Clinical Diagnostics</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-12 leading-relaxed"
        >
          BIO-CLINICA BIOMARKERS (BCB) is defining the future of healthcare by identifying and validating precise clinical biomarkers in human blood for every disease.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="w-full sm:w-auto bg-primary-600 hover:bg-primary-500 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-xl shadow-primary-500/20">
            Explore Our Research
          </button>
          <a href="mailto:farhad@clinicalbiomarker.com" className="w-full sm:w-auto glass-card hover:bg-white/10 text-white px-8 py-4 rounded-xl font-bold transition-all text-center">
            Contact Dr. Rezaee
          </a>
        </motion.div>
      </div>
      
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
