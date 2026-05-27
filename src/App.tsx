import { useState } from 'react';
import Skills from './pages/Skills';
import About from './pages/About';
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import Projects from './pages/Projects';
import Services from './pages/service';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
const App = () => {
  return (
    <div className="bg-[#121212] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Experience />
      <Contact />
      <Footer />  
    </div>
  );
};

export default App;