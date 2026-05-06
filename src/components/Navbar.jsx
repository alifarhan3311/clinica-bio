import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Disease Focus', path: '/disease-focus' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link 
          to="/"
          className="text-2xl font-bold tracking-tighter"
        >
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="text-primary-500">BIO-CLINICA</span>
            <span className="text-white ml-2">BIOMARKERS</span>
          </motion.div>
        </Link>
        
        <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-300">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={link.path}
                className={`transition-colors cursor-pointer ${location.pathname === link.path ? 'text-primary-400 font-bold' : 'hover:text-primary-400'}`}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <Link
            to="/inquiry"
            className="bg-primary-600 hover:bg-primary-500 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-primary-500/20"
          >
            Inquiry
          </Link>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
