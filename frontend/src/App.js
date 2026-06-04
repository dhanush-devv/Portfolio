import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import AnimatedBackground from './components/AnimatedBackground';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import ScrollProgress from './components/ScrollProgress';
import './App.css';
import './styles/sections.css';

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('darkMode') !== null 
      ? localStorage.getItem('darkMode') === 'true'
      : true // Default to dark mode if no preference is stored
  );

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`app ${darkMode ? 'dark' : ''}`}>
      <ScrollProgress />
      <AnimatedBackground darkMode={darkMode} />
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} onNavClick={scrollToSection} />
      <main className="main-content">
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
