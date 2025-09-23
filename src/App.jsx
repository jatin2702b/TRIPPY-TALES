// src/App.jsx
import React from 'react';

// Core site sections
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Packages from './components/Packages';
import Trekking from './components/Trekking';
import ResortCatalog from './components/ResortCatalog';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';

// Utility components
import FloatingActions from './components/FloatingActions';
import Chatbot from './components/Chatbot';

export default function App() {
  return (
    <div className="App">
      {/* Navbar and hero */}
      <Navbar />
      <Hero />

      {/* Main sections */}
      <Destinations />
      <Packages />
      <Trekking />
      <ResortCatalog />
      <Gallery />
      <About />
      <Contact />

      {/* Footer */}
      <footer id="site-footer" className="border-t">
        <div className="container mx-auto px-4 py-6 text-sm text-gray-600">
          © {new Date().getFullYear()} Trippy Tales. All rights reserved.
        </div>
      </footer>

      {/* Utility floating components */}
      <FloatingActions />
      <Chatbot />
    </div>
  );
}
