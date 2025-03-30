import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Education() {
    const location = useLocation();

    const isHomePage = location.pathname === '/';

    return (
        <section id="education">
            <h2>Education</h2>
            <div className="experience-item">
                <h3 className="experience-title">PhD in <span className="experience-company">Physical Chemistry</span></h3>
                <p className="experience-date">University of Colorado, Boulder, CO (2017)</p>
                <p>Dissertation: "Charge Generation and Recombination in Organic Materials for Photovoltaics"</p>
                <p>GPA: 3.8</p>
            </div>
        
        {!isHomePage && (
            <section className="education-full-content">
                <div className="experience-item">
                    <h3 className="experience-title">BS in <span className="experience-company">Computer Science</span></h3>
                    <p className="experience-date">University of Oregon, Corvallis, OR (2026, expected)</p>
                    <p>Currently performing research with Dr. Tim Zuehlsdorff in the area of Computational Chemistry</p>
                    <p>Current GPA: 4.0</p>
                </div>
                <div className="experience-item">
                    <h3 className="experience-title">BS in <span className="experience-company">Chemistry</span></h3>
                    <p className="experience-date">University of Florida, Gainesville, FL (2010)</p>
                    <p>Dissertation: "Modifying the Opto-Electronic Properties of Crystalline and Amorphous Semi-Conducting Silicon Surfaces via Absorptive Ag<sub>n</sub> Functionalization"</p>
                    <p>GPA: 3.9, <i>Summa Cum Laude</i></p>
                </div>
                <div className="experience-item">
                    <h3 className="experience-title">AA in <span className="experience-company">Chemistry</span></h3>
                    <p className="experience-date">Miami Dade Community College, Miami, FL (2007)</p>
                    <p>GPA: 4.0, On Dean's List</p>
                </div>
            </section>
        )}
        
        {isHomePage && (
            <div className="read-more-container">
                <Link to="/education">
                    <Button
                    variant="outline-secondary"
                    className="w-100 see-more-btn"
                    style={{ borderColor: '#E26D5C', color: '#E26D5C' }}
                    >
                    See Full Education
                    </Button>
                </Link>
            </div>
        )}
        </section>
    );
}

export default Education;