// src/App.jsx
import React from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Packages from './components/Packages';
import Trekking from './components/Trekking';
import ResortCatalog from './components/ResortCatalog';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import FloatingActions from './components/FloatingActions';
import Chatbot from './components/Chatbot';

// New: end-of-page left sidebar
import EnquirySidebarOnEnd from './components/EnquirySidebarOnEnd';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Destinations />
      <Packages />
      <Trekking />
      <ResortCatalog />
      <Gallery />
      <About />
      <Contact />

      {/* Left-side static form, only when footer is in view */}
      <EnquirySidebarOnEnd />

      {/* Make sure your footer/root footer area has this id */}
      <footer id="site-footer" className="border-t">
        <div className="container mx-auto px-4 py-6 text-sm text-gray-600">
          © {new Date().getFullYear()} Trippy Tales. All rights reserved.
        </div>
      </footer>

      <FloatingActions />
      <Chatbot />
    </div>
  );
}
