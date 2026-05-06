import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Lightbulb, GraduationCap } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#050a14] pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4 mb-20"
        >
          <h2 className="text-sm font-bold tracking-widest text-primary-500 uppercase">Our Foundation</h2>
          <h1 className="text-5xl md:text-7xl font-bold">The Science of Discovery</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed pt-4">
            Founded by Dr. Farhad Rezaee, BCB is built on twenty years of pioneering research in molecular screening and clinical biomarkers.
          </p>
        </motion.div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold">A Legacy in Motion</h3>
            <p className="text-slate-300 leading-relaxed text-lg">
              BIO-CLINICA BIOMARKERS (BCB) represents the transition from academic theory to clinical reality. Our founder, <strong>Dr. Farhad Rezaee</strong>, recognized that the true power of medicine lies in early detection.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Through decades of research in proteomics and biochemistry, we have developed a methodology that views human blood as a dynamic archive of health. Every protein and gene expression tells a story of the body's current state.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-2"
          >
            <div className="aspect-video rounded-lg overflow-hidden relative">
              <img src="/images/dr-rezaee.png" alt="Dr. Farhad Rezaee in Laboratory" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050a14] via-transparent to-transparent flex items-end p-8">
                <p className="text-sm italic text-slate-300 font-medium">"Bridging the 20-year gap between discovery and patient care."</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Our Values Section */}
        <div className="mb-32">
          <h3 className="text-3xl font-bold text-center mb-16">Our Core Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Scientific Rigor", icon: <Target />, desc: "We adhere to the highest standards of clinical validation and statistical significance." },
              { title: "Innovation", icon: <Lightbulb />, desc: "Constant evolution of our molecular screening platforms to stay at the cutting edge." },
              { title: "Collaboration", icon: <Users />, desc: "Working alongside global research institutions to accelerate diagnostic breakthroughs." }
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center mx-auto mb-6 text-primary-500">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold mb-4">{value.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Research Philosophy Section */}
        <div className="glass-card p-12 mb-32 relative overflow-hidden">
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">Research Philosophy</h3>
              <p className="text-slate-300 leading-relaxed">
                We believe that the future of medicine is "Multi-Omic." By integrating genomics (the blueprint) with proteomics (the functional state), we create a multidimensional map of disease.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4 items-center">
                  <div className="w-2 h-2 rounded-full bg-primary-500" />
                  <span className="text-sm text-slate-400 font-medium">Non-invasive blood-based screening</span>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="w-2 h-2 rounded-full bg-primary-500" />
                  <span className="text-sm text-slate-400 font-medium">Early-stage detection protocols</span>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="w-2 h-2 rounded-full bg-primary-500" />
                  <span className="text-sm text-slate-400 font-medium">Personalized therapeutic tracking</span>
                </div>
              </div>
            </div>
            <div className="p-8 border border-white/5 rounded-2xl bg-white/5">
              <p className="text-slate-400 italic text-lg leading-relaxed">
                "Our approach is simple: Identify the clinical biomarker, validate its significance, and integrate it into clinical practice to save lives."
              </p>
              <p className="text-primary-500 font-bold mt-6">— Dr. Farhad Rezaee</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
