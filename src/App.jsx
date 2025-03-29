import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Publications from './components/Publications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import './assets/css/style.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Publications />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;