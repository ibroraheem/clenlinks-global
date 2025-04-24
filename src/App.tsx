import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import TeamMembers from './components/TeamMembers';
import WhatsAppChat from './components/WhatsAppChat';
import Footer from './components/Footer';
import About from './components/About';
import ServicesPage from './components/ServicesPage';
import FAQ from './components/FAQ';
import Contact from './components/Contact'

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <main className="pt-16">
              <Hero />
              <Services />
              <Stats />
              <TeamMembers />
              <Testimonials />
            </main>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <WhatsAppChat />
        <Footer />
      </div>
    </Router>
  );
}

export default App;