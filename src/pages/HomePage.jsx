import React from 'react';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Publications from '../components/Publications';
import Contact from '../components/Contact';

function HomePage() {
    return (
        <>
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Publications />
        <Contact />
        </>
    );
}

export default HomePage;