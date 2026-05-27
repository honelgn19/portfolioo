import { useState } from 'react';
import Skills from './pages/Skills';
import About from './pages/About';
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import Projects from './pages/Projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;