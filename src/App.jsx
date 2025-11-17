// src/App.jsx
import React from 'react';

// Core site sections
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Packages from './components/Packages';
import Trekking from './components/Trekking';
import CorporateShowMore from './components/CorporateShowMore'; // ✅ Updated import
import ResortCatalog from './components/ResortCatalog';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';

// Utility components
import FloatingActions from './components/FloatingActions';
import Chatbot from './components/Chatbot';

// Floating WhatsApp popup (shows near footer)
import EnquiryPopup from './components/EnquiryPopup';

// SEO Component
import SEO from './components/SEO';

export default function App() {
  return (
    <div className="App">
      {/* SEO tags for the site */}
      <SEO
        title="Trippy Tales – Jim Corbett & Uttarakhand Travel Packages"
        description="Explore curated travel packages, trekking tours, resorts, and guided wildlife safaris in Jim Corbett & Uttarakhand with Trippy Tales."
        url="https://www.tripyytales.com"
        image="https://www.tripyytales.com/og-image.jpg"
      />

      {/* Navbar and hero */}
      <Navbar />
      <Hero />

      {/* Main sections */}
      <Destinations />
      <Packages />
      <Trekking />

      {/* ⬇⬇ NEW ENHANCED CORPORATE SHOW MORE SECTION ⬇⬇ */}
      <CorporateShowMore />

      <ResortCatalog />
      <Gallery />
      <About />
      <Contact />

      {/* Floating popup that appears when footer enters view */}
      <EnquiryPopup />

      {/* Footer (observed by the popup) */}
      <footer id="site-footer" className="border-t">
        <div className="container mx-auto px-4 py-6 text-sm text-gray-600">
          © {new Date().getFullYear()} tripyy tales. All rights reserved.
        </div>
      </footer>

      {/* Utility floating components */}
      <FloatingActions />
      <Chatbot />
    </div>
  );
}
