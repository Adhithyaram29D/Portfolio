import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Internship from './components/Internship';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedSection from './components/AnimatedSection';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      
      <AnimatedSection>
        <Skills />
      </AnimatedSection>
      
      <AnimatedSection>
        <Projects />
      </AnimatedSection>
      
      <AnimatedSection>
        <Education />
      </AnimatedSection>
      
      <AnimatedSection>
        <Internship />
      </AnimatedSection>
      
      <AnimatedSection>
        <Resume />
      </AnimatedSection>
      
      <AnimatedSection>
        <Contact />
      </AnimatedSection>
      
      <Footer />
    </div>
  );
}

export default App;