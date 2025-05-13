
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Education from '../components/Education';
import DrawingArts from '../components/DrawingArts';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <main className="bg-navy text-slate-lightest min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <DrawingArts />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
