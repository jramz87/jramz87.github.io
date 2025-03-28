import React from 'react';

function Experience() {
    return (
        <section id="experience">
            <h2>Work Experience</h2>
            <div className="experience-item">
                <h3 className="experience-title">Research Scientist at <span className="experience-company">Research Laboratory</span></h3>
                <p className="experience-date">2020 - Present</p>
                <ul>
                    <li>Lead research in ultrafast vacuum-ultraviolet source development via highly cascaded harmonic generation</li>
                    <li>Design and implement experiments using negative-curvature hollow core fibers</li>
                    <li>Collaborate with multidisciplinary teams to advance optical technologies</li>
                </ul>
            </div>

            <div className="experience-item">
                <h3 className="experience-title">Optical Manufacturing Engineer at <span className="experience-company">Optics Industry</span></h3>
                <p className="experience-date">2017 - 2020</p>
                <ul>
                    <li>Developed manufacturing processes for advanced optical components</li>
                    <li>Implemented quality control procedures for optical materials</li>
                    <li>Optimized production techniques for specialized photonic applications</li>
                </ul>
            </div>
        </section>
    );
}

export default Experience;