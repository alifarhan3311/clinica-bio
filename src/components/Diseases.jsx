import React from 'react';
import { motion } from 'framer-motion';

const Diseases = () => {
  const focuses = [
    "Cardiovascular Disease",
    "Diabetes & Metabolic Disorders",
    "Cancer Diagnostics",
    "Obesity & Nutritional Science",
    "Rare & Orphan Diseases",
    "Infectious Diseases",
    "Neurological Disorders",
    "Aging & Longevity"
  ];

  return (
    <section id="disease-focus" className="section-padding">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-widest text-primary-500 uppercase mb-4">Clinical Applications</h2>
            <h3 className="text-4xl md:text-5xl font-bold leading-tight">Focusing on High-Impact Pathologies</h3>
          </div>
          <p className="text-slate-400 max-w-sm mb-2">
            Our research methodology is universally applicable, allowing us to identify biomarkers for a wide range of human health challenges.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {focuses.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass-card p-6 flex items-center justify-center text-center hover:border-primary-500/50 transition-all cursor-default"
            >
              <span className="font-semibold text-slate-200">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Diseases;
