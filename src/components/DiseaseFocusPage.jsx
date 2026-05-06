import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Activity, Zap, Target, Syringe, Brain, Baby, Timer, Microscope, Globe2, ShieldPlus } from 'lucide-react';

const focuses = [
  {
    title: "Cardiovascular Disease",
    icon: <Heart className="text-red-400" />,
    description: "Mapping the proteomic signatures of myocardial stress and heart failure for early prevention."
  },
  {
    title: "Diabetes & Metabolic Disorders",
    icon: <Activity className="text-blue-400" />,
    description: "Identifying blood biomarkers that predict insulin resistance and metabolic decline."
  },
  {
    title: "Oncology Diagnostics",
    icon: <Zap className="text-yellow-400" />,
    description: "Liquid biopsy screening for early tumor detection and monitoring therapeutic efficacy."
  },
  {
    title: "Obesity & Nutrition",
    icon: <Target className="text-green-400" />,
    description: "Understanding the molecular triggers of inflammation in obesity-related pathologies."
  },
  {
    title: "Rare & Orphan Diseases",
    icon: <Syringe className="text-purple-400" />,
    description: "Tailored proteomics for conditions that lack standardized diagnostic clinical pathways."
  },
  {
    title: "Neurological Disorders",
    icon: <Brain className="text-cyan-400" />,
    description: "Detecting neural-specific protein markers for Alzheimer's and Parkinson's disease."
  },
  {
    title: "Infectious Diseases",
    icon: <Baby className="text-indigo-400" />,
    description: "Rapid molecular screening for host-pathogen interactions and immune response mapping."
  },
  {
    title: "Aging & Longevity",
    icon: <Timer className="text-slate-400" />,
    description: "Analyzing the molecular hallmarks of aging to support proactive geriatric care."
  }
];

const DiseaseFocusPage = () => {
  return (
    <div className="min-h-screen bg-[#050a14] pt-32 pb-20 px-6">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center mb-24 space-y-4">
          <h2 className="text-sm font-bold tracking-widest text-primary-500 uppercase">Clinical Impact</h2>
          <h1 className="text-5xl md:text-7xl font-bold text-gradient">Pathology Focus</h1>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed pt-4">
            Our technology identifies clinical biomarkers across a diverse spectrum of human pathologies, enabling precise diagnosis for global health challenges.
          </p>
        </div>

        {/* Focus Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-40">
          {focuses.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass-card p-10 space-y-6 hover:border-primary-500/40 transition-all cursor-default"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Methodology Section */}
        <div className="grid md:grid-cols-2 gap-20 items-center mb-40 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold">Research Methodology</h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              We apply a systematic multi-omic approach to each pathology. By isolating specific biomarkers, we create a diagnostic roadmap that is both reliable and non-invasive.
            </p>
            <div className="space-y-6">
              {[
                { title: "Targeted Screening", icon: <Microscope />, desc: "High-sensitivity mapping of protein expressions specific to the disease state." },
                { title: "Global Health Standards", icon: <Globe2 />, desc: "Alignment with international clinical diagnostic and validation frameworks." },
                { title: "Precision Reliability", icon: <ShieldPlus />, desc: "Ensuring near-perfect accuracy through cross-platform molecular verification." }
              ].map((m, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="p-3 rounded-xl bg-primary-500/10 text-primary-500">
                    {m.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">{m.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-primary-900/10 border border-white/5 flex items-center justify-center p-12">
               <div className="absolute inset-0 bg-primary-500/5 blur-[100px]" />
               <Globe2 size={200} className="text-primary-500/20" />
            </div>
          </div>
        </div>

        {/* Summary CTA */}
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold mb-6">Advancing the Future of Pathology</h3>
          <p className="text-slate-400 mb-10 leading-relaxed">
            Our mission is to translate complex molecular data into actionable clinical insights. If you are researching a specific pathology, let's collaborate on biomarker discovery.
          </p>
          <button className="bg-primary-600 hover:bg-primary-500 text-white font-bold px-12 py-4 rounded-xl transition-all shadow-xl shadow-primary-500/20">
            Collaborate on Research
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiseaseFocusPage;
