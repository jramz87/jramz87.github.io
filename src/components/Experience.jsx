import React from 'react';

function Experience() {
    return (
        <section id="experience">
            <h2>Work Experience</h2>
            <div className="experience-item">
                <h3 className="experience-title">Optical Manufacturing Engineer at <span className="experience-company">Access Optics</span></h3>
                <p className="experience-date">2023 - Present</p>
                <ul>
                    <li>Pioneered manufacturing processes and established robust supply chains for cutting-edge optical systems</li>
                    <li>Designed and implemented comprehensive quality control protocols ensuring precise validation of optical materials</li>
                    <li>Engineered production techniques and tooling for specialized photonic applications</li>
                    <li>Developed and deployed a comprehensive Laser Safety Program for the safe operation of Class 3B lasers, ensuring regulatory compliance</li>
                </ul>
            </div>
            
            <div className="experience-item">
                <h3 className="experience-title">Lead Rope Access Technician at <span className="experience-company">Rope Partner</span></h3>
                <p className="experience-date">2021 - 2024</p>
                <ul>
                    <li>Led and technical teams performing high-risk maintenance on wind turbines across various field environments</li>
                    <li>Executed complex lockout procedures and engineered rope systems enabling safe access to challenging work locations</li>
                    <li>Specialized in advanced fiberglass composite repairs utilizing vacuum-assisted curing and precision thermal cycling processes</li>
                </ul>
            </div>

            <div className="experience-item">
                <h3 className="experience-title">Research Scientist at <span className="experience-company">Kapetyn-Murnane Laboratories/Thorlabs</span></h3>
                <p className="experience-date">2018 - 2020</p>
                <ul>
                    <li>Conducted innovative research on novel ultrafast laser systems spanning visible, VUV and NIR spectral ranges</li>
                    <li>Secured over $1.5M in funding as key contributor to three SBIR Phase II grants through strategic research proposals, grant capture planning and patentable innovation</li>
                    <li>Performed precise characterization of laser systems using sophisticated commercial instrumentation and custom-built diagnostic tools</li>
                    <li>Facilitated smooth technological integration during the acquisition of fiber-optic laser research division by Thorlabs</li>
                </ul>
            </div>

            <div>
                <h5>
                    To see a more detailed timeline of my work experience please click on my CV link above!
                </h5>
            </div>
        </section>
    );
}

export default Experience;