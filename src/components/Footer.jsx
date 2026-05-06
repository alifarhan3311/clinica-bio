import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Globe, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#020617] border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="text-2xl font-bold tracking-tighter">
              <span className="text-primary-500">BIO-CLINICA</span>
              <span className="text-white ml-2 text-lg">BIOMARKERS</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Leading the future of clinical diagnostics through high-throughput proteomics and genomics validation. Founded on 20 years of academic excellence.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary-500/20 hover:text-primary-400 transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary-500/20 hover:text-primary-400 transition-all">
                <Globe size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Navigation</h4>
            <ul className="space-y-4">
              {['About', 'Services', 'Disease Focus', 'Contact', 'Inquiry'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Inquiry' ? '/inquiry' : `/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-slate-500 hover:text-primary-400 text-sm transition-colors flex items-center gap-1"
                  >
                    {item} <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Expertise</h4>
            <ul className="space-y-4">
              {[
                { name: 'Proteomics', path: '/services/proteomics-excellence' },
                { name: 'Genomics', path: '/services/genomic-integration' },
                { name: 'Validation', path: '/services/biomarker-validation' },
                { name: 'Monitoring', path: '/services/therapeutic-monitoring' }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path}
                    className="text-slate-500 hover:text-primary-400 text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-primary-500 shrink-0 mt-1" />
                <p className="text-slate-500 text-sm leading-relaxed">
                  34 Chippingwood Manor, Aurora, ON. L4G7S4
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-primary-500 shrink-0" />
                <p className="text-slate-500 text-sm">+1 647.868.7269</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-primary-500 shrink-0" />
                <p className="text-slate-500 text-sm">Abbas@clinicabiomarkers.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-600 text-xs text-center">
            © {currentYear} BIO-CLINICA BIOMARKERS (BCB). All Rights Reserved. 
            <span className="block md:inline md:ml-4 text-slate-700">Operations Manager: Abbas</span>
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-slate-600 hover:text-white text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-600 hover:text-white text-xs transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
