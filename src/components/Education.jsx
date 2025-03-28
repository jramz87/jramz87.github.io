import React from 'react';

function Education() {
    return (
        <section id="education">
            <h2>Education</h2>
            <div className="experience-item">
                <h3 className="experience-title">PhD in <span className="experience-company">Physical Chemistry</span></h3>
                <p className="experience-date">University of Colorado, Boulder, CO (2017)</p>
                <p>Dissertation: "Charge Generation and Recombination in Organic Materials for Photovoltaics"</p>
            </div>
            <div className="experience-item">
                <h3 className="experience-title">BS in <span className="experience-company">Computer Science</span></h3>
                <p className="experience-date">University of Oregon, Corvallis, OR (2026, expected)</p>
                <p>Currently performing research with Dr. Tim Zuehlsdorff in the area of Computational Chemistry</p>
            </div>
            <div className="experience-item">
                <h3 className="experience-title">BS in <span className="experience-company">Chemistry</span></h3>
                <p className="experience-date">University of Florida, Gainesville, FL (2010)</p>
                <p>Dissertation: "Modifying the Opto-Electronic Properties of Crystalline and Amorphous Semi-Conducting Silicon Surfaces via Absorptive Ag<sub>n</sub> Functionalization"</p>
            </div>
        </section>
    );
}

export default Education;