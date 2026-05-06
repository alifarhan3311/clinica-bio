import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import Diseases from './components/Diseases';
import Contact from './components/Contact';
import InquiryPage from './components/InquiryPage';
import ServiceDetail from './components/ServiceDetail';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import DiseaseFocusPage from './components/DiseaseFocusPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';

const HomePage = () => (
  <>
    <Hero />
    <Stats />
    <About />
    <Expertise />
    <Testimonials />
    <Diseases />
    <section className="section-padding relative overflow-hidden bg-primary-600/10">
      <div className="container mx-auto px-6 text-center space-y-8 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold">Ready to Advance Clinical Research?</h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          Connect with our clinical team to explore how our biomarker screening platform can accelerate your projects.
        </p>
        <Link 
          to="/inquiry"
          className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-500 text-white font-bold px-12 py-5 rounded-xl transition-all shadow-xl shadow-primary-500/20"
        >
          Submit Research Inquiry
        </Link>
      </div>
    </section>
    <Contact />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#050a14] selection:bg-primary-500/30 selection:text-primary-200">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/disease-focus" element={<DiseaseFocusPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/inquiry" element={<InquiryPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
