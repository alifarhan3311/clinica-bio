import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Microscope, Database, Activity, Target, ArrowRight, CheckCircle2, FlaskConical, Binary, Search, ShieldCheck } from 'lucide-react';

const services = [
  {
    id: "proteomics-excellence",
    title: "Proteomics Excellence",
    description: "Deep mapping of the human proteome to unlock disease signatures.",
    icon: <Microscope className="text-primary-400" size={32} />,
    details: "Our proteomics suite utilizes high-resolution mass spectrometry to identify systemic protein expression patterns. We focus on the identification of proteins that indicate early-stage metabolic shifts, providing a window into disease progression before symptoms appear.",
    points: ["Dynamic range protein analysis", "Post-translational modification mapping", "Plasma proteomics specialized for blood screening"],
    image: "/images/lab.png"
  },
  {
    id: "genomic-integration",
    title: "Genomic Integration",
    description: "Bridging genetic blueprints with real-time protein expression.",
    icon: <Database className="text-primary-400" size={32} />,
    details: "By combining whole-genome sequencing with protein data, we provide a multi-omic perspective. This allows us to understand not just what your body is predisposed to, but what is actively happening at a molecular level.",
    points: ["Single-nucleotide polymorphism (SNP) analysis", "Genomic-proteomic data fusion", "Custom genomic panels for rare diseases"],
    image: "/images/genomics.png"
  },
  {
    id: "biomarker-validation",
    title: "Biomarker Validation",
    description: "The gold standard in clinical biomarker verification.",
    icon: <Target className="text-primary-400" size={32} />,
    details: "We ensure every biomarker meets the necessary clinical benchmarks for accuracy and reproducibility. Our validation protocols are designed for pharmaceutical integration and diagnostic development.",
    points: ["Clinical trial assay development", "Regulatory-grade validation studies", "Cross-cohort significance testing"],
    image: "/images/validation.png"
  },
  {
    id: "therapeutic-monitoring",
    title: "Therapeutic Monitoring",
    description: "Real-time tracking of treatment efficacy and patient response.",
    icon: <Activity className="text-primary-400" size={32} />,
    details: "Monitor how a patient responds to medication in real-time. Our therapeutic monitoring identifies non-responders early, allowing for immediate clinical adjustments and better patient outcomes.",
    points: ["Treatment response mapping", "Toxicity and side-effect screening", "Long-term therapeutic efficacy tracking"],
    image: "/images/monitoring.png"
  }
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-[#050a14] pt-32 pb-20 px-6">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center mb-24 space-y-4">
          <h2 className="text-sm font-bold tracking-widest text-primary-500 uppercase">Expertise & Innovation</h2>
          <h1 className="text-5xl md:text-7xl font-bold">Clinical Services</h1>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed pt-4">
            BCB provides world-class molecular screening services, leveraging twenty years of expertise in proteomics and genomics to redefine diagnostic accuracy.
          </p>
        </div>

        {/* Detailed Services Listing */}
        <div className="space-y-32 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-16 items-center`}
            >
              <div className="flex-1 space-y-8">
                <div className="w-16 h-16 rounded-2xl bg-primary-500/10 flex items-center justify-center text-primary-500">
                  {service.icon}
                </div>
                <h2 className="text-4xl font-bold">{service.title}</h2>
                <p className="text-slate-300 text-lg leading-relaxed">
                  {service.details}
                </p>
                <div className="space-y-4">
                  {service.points.map((point, i) => (
                    <div key={i} className="flex gap-3 items-center">
                      <CheckCircle2 className="text-primary-500" size={20} />
                      <span className="text-slate-400 font-medium">{point}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4">
                  <Link
                    to={`/services/${service.id}`}
                    className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-500 text-white font-bold px-8 py-3 rounded-xl transition-all"
                  >
                    View Technical Whitepaper <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
              <div className="flex-1 w-full">
                <div className="glass-card p-1 aspect-square md:aspect-video overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover rounded-lg" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Workflow Section */}
        <div className="mt-40 mb-32">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4">Our Methodology</h3>
            <p className="text-slate-400">A rigorous, four-step process for clinical discovery.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { title: "Discovery", icon: <Search />, desc: "Initial molecular screening and mapping of protein/gene signatures." },
              { title: "Identification", icon: <Binary />, desc: "Pinpointing specific biomarkers associated with target pathologies." },
              { title: "Validation", icon: <ShieldCheck />, desc: "Rigorous clinical testing across diverse patient cohorts." },
              { title: "Integration", icon: <Target />, desc: "Seamless deployment of diagnostic protocols into clinical workflows." }
            ].map((step, i) => (
              <div key={i} className="glass-card p-8 text-center space-y-6">
                <div className="w-14 h-14 rounded-full bg-primary-500/10 flex items-center justify-center mx-auto text-primary-500">
                  {step.icon}
                </div>
                <h4 className="text-xl font-bold">{step.title}</h4>
                <p className="text-slate-500 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="glass-card p-12 text-center bg-primary-600/5 border-primary-500/20 max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-6">Partner with the Leaders in Biomarker Research</h3>
          <p className="text-slate-400 mb-10">
            Whether you are a healthcare provider or a pharmaceutical developer, our platform provides the insights you need.
          </p>
          <Link
            to="/inquiry"
            className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-500 text-white font-bold px-12 py-4 rounded-xl transition-all"
          >
            Inquire Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
