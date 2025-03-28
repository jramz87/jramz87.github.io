import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import nanoImage from '../assets/images/nanoImage.jpeg';
import defense from '../assets/images/defense.png';
import lasers from '../assets/images/lasers.png';

function Projects() {
    return (
        <section id="projects">
        <Container>
            <h2>Research Projects</h2>
            <Row>
                <Col md={4} className="mb-4">
                    <div className="project-card">
                        <img src={lasers} alt="Ultrafast Optics" className="project-img" />
                        <div className="project-content">
                            <h3 className="project-title">Ultrafast Vacuum-Ultraviolet Sources</h3>
                            <p className="project-desc">Research on highly cascaded harmonic generation in negative-curvature hollow core fibers for ultrafast optics applications.</p>
                            <div className="project-tags">
                                <span className="tag">Laser Physics</span>
                                <span className="tag">Fiber Optics</span>
                                <span className="tag">Harmonics</span>
                            </div>
                        </div>
                    </div>
                </Col>
                
                <Col md={4} className="mb-4">
                    <div className="project-card">
                        <img src={defense} alt="Organic Photovoltaics" className="project-img" />
                        <div className="project-content">
                            <h3 className="project-title">Organic Photovoltaics</h3>
                            <p className="project-desc">Investigation of charge generation and recombination processes in organic materials for improved solar cell efficiency.</p>
                            <div className="project-tags">
                                <span className="tag">Materials Science</span>
                                <span className="tag">Photovoltaics</span>
                                <span className="tag">Organic Electronics</span>
                            </div>
                        </div>
                    </div>
                </Col>
                
                <Col md={4} className="mb-4">
                    <div className="project-card">
                    <img src={nanoImage} alt="Carbon Nanotubes" className="project-img" />
                        <div className="project-content">
                            <h3 className="project-title">Functionalized Carbon Nanotubes</h3>
                            <p className="project-desc">Study of electronic structure and optical properties of chemically modified carbon nanotubes for advanced applications.</p>
                            <div className="project-tags">
                                <span className="tag">Nanomaterials</span>
                                <span className="tag">Spectroscopy</span>
                                <span className="tag">Quantum Chemistry</span>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
        </section>
    );
}

export default Projects;