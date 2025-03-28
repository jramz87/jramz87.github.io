import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

function Skills() {
    return (
        <section id="skills">
        <h2>Skills & Expertise</h2>
        <div className="skills">
            <div className="skill-category">
                <h3>Scientific Expertise</h3>
                <ul className="skill-list">
                    <li>Laser Technology</li>
                    <li>Optical Engineering</li>
                    <li>Materials Science</li>
                    <li>Computational Chemistry</li>
                    <li>Photonics</li>
                </ul>
            </div>

            <div className="skill-category">
                <h3>Technical Skills</h3>
                <ul className="skill-list">
                    <li>Data Analysis</li>
                    <li>Scientific Computing</li>
                    <li>Experimental Design</li>
                    <li>Spectroscopy</li>
                    <li>Rope Access Techniques</li>
                </ul>
            </div>

            <div className="skill-category">
                <h3>Tools & Software</h3>
                <ul className="skill-list">
                    <li>Python & Scientific Libraries</li>
                    <li><InlineMath math="\LaTeX" /></li>
                    <li>Optical Design Software</li>
                    <li>Quantum Chemistry Tools</li>
                    <li>Data Visualization</li>
                </ul>
            </div>
        </div>
        </section>
    );
}

export default Skills;