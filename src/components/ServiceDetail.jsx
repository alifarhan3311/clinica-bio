import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { Microscope, Database, Target, Activity, ArrowLeft, CheckCircle2 } from 'lucide-react';

const serviceData = {
  "proteomics-excellence": {
    title: "Proteomics Excellence",
    icon: <Microscope className="text-primary-400" size={48} />,
    description: "Advanced mapping of the human proteome to discover functional biomarkers for systemic health.",
    content: "Our proteomics platform leverages high-resolution mass spectrometry and advanced liquid chromatography to identify and quantify thousands of proteins in human blood. Proteins are the functional units of the cell, and their expression patterns provide a real-time snapshot of physiological and pathological states. By mapping these patterns, we identify unique signatures associated with specific diseases, enabling earlier detection and more precise monitoring.",
    features: [
      "High-throughput protein quantification",
      "Identification of post-translational modifications",
      "Mapping of protein-protein interactions",
      "Discovery of novel blood-based biomarkers"
    ],
    applications: "Widely used in the early detection of cardiovascular diseases and metabolic disorders where protein signaling is often disrupted long before physical symptoms appear."
  },
  "genomic-integration": {
    title: "Genomic Integration",
    icon: <Database className="text-primary-400" size={48} />,
    description: "Combining genetic predispositions with active protein expressions for a multi-omic view of disease.",
    content: "Genomics provides the blueprint, while proteomics provides the current state of construction. Our Genomic Integration service bridges these two worlds. We analyze genetic variants (SNPs) alongside protein expression data to understand how an individual's genetic makeup influences their response to environmental factors and disease progression. This multi-omic approach is the cornerstone of personalized medicine.",
    features: [
      "Whole-genome and targeted sequencing",
      "Multi-omic data fusion analytics",
      "Genetic risk score development",
      "Epigenetic profiling"
    ],
    applications: "Crucial for oncology and rare genetic diseases where the interaction between genes and proteins determines the therapeutic path."
  },
  "biomarker-validation": {
    title: "Biomarker Validation",
    icon: <Target className="text-primary-400" size={48} />,
    description: "Rigorous clinical validation processes to ensure biomarkers meet diagnostic standards.",
    content: "A biomarker is only as good as its validation. At BCB, we follow strict clinical guidelines to ensure that every discovered biomarker is reliable, reproducible, and clinically significant. Our validation process involves large-scale cohort studies, sensitivity and specificity testing, and cross-platform verification to ensure readiness for clinical use.",
    features: [
      "Clinical cohort study design",
      "Statistical power analysis",
      "Cross-platform verification (ELISA, MS)",
      "Regulatory compliance preparation"
    ],
    applications: "Essential for pharmaceutical companies looking to integrate biomarkers into their drug development pipelines as companion diagnostics."
  },
  "therapeutic-monitoring": {
    title: "Therapeutic Monitoring",
    icon: <Activity className="text-primary-400" size={48} />,
    description: "Real-time tracking of treatment efficacy through non-invasive blood molecular screening.",
    content: "How do you know if a drug is working? Our therapeutic monitoring service uses real-time protein signatures to track a patient's response to treatment. By monitoring changes in specific clinical biomarkers, healthcare providers can adjust dosages, switch therapies earlier, and avoid unnecessary side effects, leading to better patient outcomes.",
    features: [
      "Dynamic biomarker tracking over time",
      "Toxicity monitoring and early warning",
      "Drug efficacy quantification",
      "Personalized dosage optimization"
    ],
    applications: "Used extensively in chronic disease management, such as diabetes and hypertension, where continuous monitoring is key to preventing complications."
  }
};

const ServiceDetail = () => {
  const { id } = useParams();
  const service = serviceData[id];

  if (!service) return <div className="min-h-screen flex items-center justify-center text-white">Service not found.</div>;

  return (
    <div className="min-h-screen bg-[#050a14] pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Link to="/" className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors">
            <ArrowLeft size={20} />
            <span>Back to Research Overview</span>
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 space-y-12"
          >
            <div className="space-y-6">
              <div className="w-20 h-20 rounded-2xl bg-primary-500/10 flex items-center justify-center mb-8">
                {service.icon}
              </div>
              <h1 className="text-5xl font-bold leading-tight">{service.title}</h1>
              <p className="text-xl text-primary-400 font-medium">{service.description}</p>
              <div className="h-1 w-24 bg-primary-600 rounded-full" />
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-slate-300 text-lg leading-relaxed">
                {service.content}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 pt-8">
              <div className="glass-card p-8 border-primary-500/20">
                <h3 className="text-xl font-bold mb-6 text-white">Core Capabilities</h3>
                <ul className="space-y-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <CheckCircle2 className="text-primary-500 shrink-0" size={18} />
                      <span className="text-slate-400 text-sm leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="glass-card p-8 border-primary-500/20">
                <h3 className="text-xl font-bold mb-6 text-white">Clinical Focus</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {service.applications}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass-card p-8 bg-primary-600/10 border-primary-500/30">
              <h3 className="text-2xl font-bold mb-4">Interested in this Research?</h3>
              <p className="text-slate-400 mb-8">
                Our team is ready to discuss how our {service.title.toLowerCase()} platform can benefit your clinical trials or research projects.
              </p>
              <Link
                to="/inquiry"
                className="w-full inline-flex items-center justify-center bg-primary-600 hover:bg-primary-500 text-white font-bold py-4 rounded-xl transition-all"
              >
                Inquire About Service
              </Link>
            </div>

            <div className="p-8 border border-slate-800 rounded-2xl">
              <h4 className="font-bold text-white mb-4">Related Services</h4>
              <div className="space-y-4">
                {Object.keys(serviceData).filter(key => key !== id).map(key => (
                  <Link
                    key={key}
                    to={`/services/${key}`}
                    className="block p-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all text-slate-400 hover:text-white"
                  >
                    {serviceData[key].title}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
