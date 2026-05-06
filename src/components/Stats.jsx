import React from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
  const stats = [
    { label: "Years Research", value: "20+" },
    { label: "Diseases Studied", value: "15+" },
    { label: "Valid Biomarkers", value: "100+" },
    { label: "Global Partners", value: "50+" }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary-600/5" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-primary-500 font-bold text-sm uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
