import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import lasers from '../assets/images/lasers.png';

// Define content for each project
const projectData = {
    'optics': {
        title: 'Optics and Photonics',
        image: lasers,
        description: `Research, development and manufacturing of custom optical systems including ultrafast laser systems, confocal microscopes and high-density fiber optic probes.`,
        longDescription: `My work in optics and photonics spans both research and industrial applications. I've focused on the development of specialized optical systems for various applications including medical imaging, telecommunications, and material characterization.

        Key areas of expertise include:
        • Design and optimization of laser-based optical systems
        • Fiber optic component design and characterization
        • Optical manufacturing processes for precision components
        • Integration of optical systems in medical devices
        • Implementation of ISO quality standards for optical manufacturing`,
        tags: ['Laser Physics', 'Fiber Optics', 'Contract Manufacturing', 'Optics', 'Medical Devices', 'ISO Certifications', 'Optical Metrology', '3D Printing'],
        projects: [
        {
            title: 'High-density Fiber Optic Probe Development',
            description: 'Led the design and manufacturing of compact multi-fiber probes for confocal microscopy applications.'
        },
        {
            title: 'Ultrafast Laser System Integration',
            description: 'Designed and implemented optical train components for femtosecond laser systems.'
        },
        {
            title: 'Optical Manufacturing Process Development',
            description: 'Established precision manufacturing processes for specialty optical components.'
        }
        ]
    },
    // ... other project data remains the same
};

function ProjectPage() {
    const { projectId } = useParams();
    const project = projectData[projectId];
    
    if (!project) {
        return (
        <Container className="py-5">
            <h2>Project Not Found</h2>
            <p>The project you're looking for doesn't exist.</p>
            <Link to="/projects">
                <Button className="btn">Back to Projects</Button>
            </Link>
        </Container>
        );
    }

    return (
        <section className="project-detail-page py-5">
        <Container>
            <Row className="mb-4">
                <Col>
                    <Link to="/projects" className="btn btn-outline-secondary mb-3 see-more-btn" style={{ borderColor: '#E26D5C', color: '#E26D5C' }}>
                        &larr; Back to Projects
                    </Link>
                    <h1>{project.title}</h1>
                </Col>
            </Row>
            
            <Row className="mb-5">
                <Col md={6}>
                    <div className="project-detail-card">
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            className="project-detail-img"
                        />
                    </div>
                </Col>
                <Col md={6}>
                    <div className="project-content mt-3 mt-md-0">
                        <h3 className="project-title">Overview</h3>
                        <p className="project-desc lead">{project.description}</p>
                        <p>{project.longDescription}</p>
                        
                        <div className="mt-4">
                            <h4>Areas of Focus</h4>
                            <div className="project-tags">
                                {project.tags.map((tag, index) => (
                                    <span key={index} className="tag">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            
            {/* Projects or Achievements Section */}
            {project.projects && (
                <Row className="mb-4">
                    <Col>
                        <h3>Projects & Experiences</h3>
                        <Row>
                            {project.projects.map((project_, index) => (
                                <Col md={4} key={index} className="mb-4">
                                    <div className="project-card">
                                        <div className="project-content">
                                            <h3 className="project-title">{project_.title}</h3>
                                            <p className="project-desc">{project_.description}</p>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            )}
            
            {/* Achievements Section (for interests without projects) */}
            {project.achievements && (
                <Row className="mb-4">
                    <Col>
                        <h3>Achievements</h3>
                        <ul>
                            {project.achievements.map((achievement, index) => (
                                <li key={index}>{achievement}</li>
                            ))}
                        </ul>
                    </Col>
                </Row>
            )}
            
            {/* Experiences Section (for mountain sports) */}
            {project.experiences && (
                <Row className="mb-4">
                    <Col>
                        <h3>Notable Experiences</h3>
                        <ul>
                            {project.experiences.map((experience, index) => (
                                <li key={index}>{experience}</li>
                            ))}
                        </ul>
                    </Col>
                </Row>
            )}
        </Container>
        </section>
    );
}

export default ProjectPage;