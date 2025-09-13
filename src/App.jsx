// src/App.jsx
import React from 'react';

// Core sections
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Packages from './components/Packages';
import ResortCatalog from './components/ResortCatalog';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import FloatingActions from './components/FloatingActions';
import Chatbot from './components/Chatbot';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Destinations />
      <Packages />
      <ResortCatalog />
      <Gallery />
      <About />
      <Contact />
      <FloatingActions />
      <Chatbot />
    </div>
  );
}
