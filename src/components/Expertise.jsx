import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Microscope, Database, Activity, Target, ArrowRight } from 'lucide-react';

const Expertise = () => {
  const services = [
    {
      id: "proteomics-excellence",
      title: "Proteomics Excellence",
      description: "Advanced mapping of the human proteome to discover functional biomarkers for systemic health.",
      icon: <Microscope className="text-primary-400" />
    },
    {
      id: "genomic-integration",
      title: "Genomic Integration",
      description: "Combining genetic predispositions with active protein expressions for a multi-omic view of disease.",
      icon: <Database className="text-primary-400" />
    },
    {
      id: "biomarker-validation",
      title: "Biomarker Validation",
      description: "Rigorous clinical validation processes to ensure biomarkers meet diagnostic standards.",
      icon: <Target className="text-primary-400" />
    },
    {
      id: "therapeutic-monitoring",
      title: "Therapeutic Monitoring",
      description: "Real-time tracking of treatment efficacy through non-invasive blood molecular screening.",
      icon: <Activity className="text-primary-400" />
    }
  ];

  return (
    <section id="services" className="section-padding bg-slate-900/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest text-primary-500 uppercase mb-4"
          >
            Our Expertise
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Comprehensive Molecular Screening
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card p-8 hover:bg-white/5 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center mb-6 group-hover:bg-primary-500/20 transition-all">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold mb-4">{service.title}</h4>
              <p className="text-slate-400 leading-relaxed text-sm mb-6">
                {service.description}
              </p>
              <Link
                to={`/services/${service.id}`}
                className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-400 text-sm font-bold transition-all"
              >
                Learn More <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
