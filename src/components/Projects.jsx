import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import nanoImage from '../assets/images/nanoImage.jpeg';
import defense from '../assets/images/defense.png';
import lasers from '../assets/images/lasers.png';
import mtnSports from '../assets/images/maiden.jpg';
import martialArts from '../assets/images/bjj.jpeg';
import ropeAccess from '../assets/images/ropepartner.JPG';
import '../assets/css/style.css';

function Projects() {
    return (
        <section id="projects">
        <Container>
            <h2>My Projects</h2>
            <Row>
                <Col md={4} className="mb-4">
                    <Link to="/projects/optics" className="text-decoration-none">
                        <div className="project-card">
                            <img src={lasers} alt="Optics and Photonics" className="project-img" />
                            <div className="project-content">
                                <h3 className="project-title">Optics and Photonics</h3>
                                <p className="project-desc">Research, development and manufacturing of custom optical systems including ultrafast laser systems, confocal microscopes and high-density fiber optic probes.</p>
                                <div className="project-tags">
                                    <span className="tag">Laser Physics</span>
                                    <span className="tag">Fiber Optics</span>
                                    <span className="tag">Contract Manufacturing</span>
                                    <span className="tag">Optics</span>
                                    <span className="tag">Medical Devices</span>
                                    <span className="tag">ISO Certifications</span>
                                    <span className="tag">Optical Metrology</span>
                                    <span className="tag">3D Printing</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </Col>
                
                <Col md={4} className="mb-4">
                    <Link to="/projects/spectroscopy" className="text-decoration-none">
                        <div className="project-card">
                            <img src={defense} alt="Organic Photovoltaics" className="project-img" />
                            <div className="project-content">
                                <h3 className="project-title">Experimental Spectroscopy</h3>
                                <p className="project-desc">Investigation of charge generation and recombination processes in organic materials for improved solar cell efficiency.</p>
                                <div className="project-tags">
                                    <span className="tag">Transient Absorption</span>
                                    <span className="tag">Time-Resolved Microwave Conductivity</span>
                                    <span className="tag">Time-Correlated Single Photon Counting</span>
                                    <span className="tag">Absorption</span>
                                    <span className="tag">Photoluminescence</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </Col>
                
                <Col md={4} className="mb-4">
                    <Link to="/projects/quantum-chemistry" className="text-decoration-none">
                        <div className="project-card">
                            <img src={nanoImage} alt="Carbon Nanotubes" className="project-img" />
                            <div className="project-content">
                                <h3 className="project-title">Computational Quantum Chemistry</h3>
                                <p className="project-desc">Study of electronic structure and optical properties of photosensitive materials spanning from functionalized carbon nanotube to doped silicon surfaces.</p>
                                <div className="project-tags">
                                    <span className="tag">Molecular Mechanic/Dynamics</span>
                                    <span className="tag">Density Functional Theory</span>
                                    <span className="tag">Time-Dependent DFT</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </Col>
            </Row>
            
            <Row className="mt-4">
                <Col md={4} className="mb-4">
                    <Link to="/projects/rope-access" className="text-decoration-none">
                        <div className="project-card">
                            <img src={ropeAccess} alt="Coming Soon" className="project-img" />
                            <div className="project-content">
                                <h3 className="project-title">Rope Access</h3>
                                <p className="project-desc">Application of industrial climbing techniques to access difficult-to-reach work locations by use of rope systems.</p>
                                <div className="project-tags">
                                    <span className="tag">Wind Turbine Repair</span>
                                    <span className="tag">Rope Rescue</span>
                                    <span className="tag">Composite Layups</span>
                                    <span className="tag">Abseiling</span>
                                    <span className="tag">Technical Rigging</span>
                                    <span className="tag">Confined Space</span>
                                    <span className="tag">Rappelling</span>
                                    <span className="tag">Rescue and Triage</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </Col>
                
                <Col md={4} className="mb-4">
                    <Link to="/projects/martial-arts" className="text-decoration-none">
                        <div className="project-card">
                            <img src={martialArts} alt="Coming Soon" className="project-img" />
                            <div className="project-content">
                                <h3 className="project-title">Mixed Martial Arts</h3>
                                <p className="project-desc">Dedicated practitioner with over a decade of training, specializing in both gi and no-gi grappling alongside stand-up techniques for comprehensive combat proficiency.</p>
                                <div className="project-tags">
                                    <span className="tag">Brazilian Jiu-Jitsu</span>
                                    <span className="tag">Muay Thai</span>
                                    <span className="tag">Wrestling</span>
                                    <span className="tag">Judo</span>
                                    <span className="tag">Kickboxing</span>
                                    <span className="tag">Competition Experience</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </Col>
                
                <Col md={4} className="mb-4">
                    <Link to="/projects/mountain-sports" className="text-decoration-none">
                        <div className="project-card">
                            <img src={mtnSports} alt="Coming Soon" className="project-img" />
                            <div className="project-content">
                                <h3 className="project-title">Mountain Sports</h3>
                                <p className="project-desc">Adventure enthusiast exploring diverse mountain environments through various technical sports and wilderness activities.</p>
                                <div className="project-tags">
                                    <span className="tag">Rock Climbing</span>
                                    <span className="tag">Bouldering</span>
                                    <span className="tag">Backcountry Splitboarding</span>
                                    <span className="tag">Whitewater Packrafting</span>
                                    <span className="tag">Mountain Biking</span>
                                    <span className="tag">Trail Running</span>
                                    <span className="tag">Canyoneering</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </Col>
            </Row>
        </Container>
        </section>
    );
}

export default Projects;