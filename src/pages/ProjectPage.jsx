import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import nanoImage from '../assets/images/nanoImage.jpeg';
import defense from '../assets/images/defense.png';
import lasers from '../assets/images/lasers.png';
import mtnSports from '../assets/images/maiden.jpg';
import martialArts from '../assets/images/bjj.jpeg';
import ropeAccess from '../assets/images/ropepartner.JPG';

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
    'spectroscopy': {
        title: 'Experimental Spectroscopy',
        image: defense,
        description: `Investigation of charge generation and recombination processes in organic materials for improved solar cell efficiency.`,
        longDescription: `My research in experimental spectroscopy has focused on understanding fundamental processes in photosensitive materials, particularly for solar energy applications. I've utilized a range of time-resolved spectroscopic techniques to probe excited state dynamics in various materials.

        This work has contributed to the development of more efficient organic photovoltaic materials by elucidating the mechanisms of charge generation, separation, and recombination that determine device performance.`,
        tags: ['Transient Absorption', 'Time-Resolved Microwave Conductivity', 'Time-Correlated Single Photon Counting', 'Absorption', 'Photoluminescence'],
        projects: [
        {
            title: 'Charge Separation Dynamics in Organic Photovoltaics',
            description: 'Investigated ultrafast dynamics of charge transfer states in donor-acceptor blends using femtosecond transient absorption spectroscopy.'
        },
        {
            title: 'Carrier Mobility Measurements',
            description: 'Applied time-resolved microwave conductivity to measure charge carrier mobility in novel photovoltaic materials.'
        },
        {
            title: 'Exciton Diffusion Studies',
            description: 'Characterized exciton diffusion lengths in organic semiconductors using photoluminescence quenching techniques.'
        }
        ]
    },
    'quantum-chemistry': {
        title: 'Computational Quantum Chemistry',
        image: nanoImage,
        description: `Study of electronic structure and optical properties of photosensitive materials spanning from functionalized carbon nanotube to doped silicon surfaces.`,
        longDescription: `My computational work employs quantum chemical methods to investigate the electronic structure and optical properties of various materials. This computational approach complements experimental characterization and provides insight into structure-property relationships.

        By applying density functional theory (DFT) and time-dependent DFT calculations, I've been able to predict and explain optical and electronic properties of complex systems, guiding experimental design and materials optimization.`,
        tags: ['Molecular Mechanic/Dynamics', 'Density Functional Theory', 'Time-Dependent DFT'],
        projects: [
        {
            title: 'Functionalized Carbon Nanotube Modeling',
            description: 'Simulated optical and electronic properties of chemically modified carbon nanotubes to guide experimental functionalization strategies.'
        },
        {
            title: 'Surface Chemistry of Doped Silicon',
            description: 'Investigated electronic structure changes in silicon surfaces with various dopants to optimize photovoltaic performance.'
        },
        {
            title: 'Excited State Dynamics Simulations',
            description: 'Modeled excited state processes in organic chromophores to understand energy transfer mechanisms.'
        }
        ]
    },
    'rope-access': {
        title: 'Rope Access',
        image: ropeAccess,
        description: `Application of industrial climbing techniques to access difficult-to-reach work locations by use of rope systems.`,
        longDescription: `As a certified rope access technician, I apply specialized climbing and rigging techniques to access difficult work locations safely and efficiently. This skill set has been applied across various industries including renewable energy, construction, and rescue operations.

        Rope access provides a safer, more efficient alternative to traditional access methods such as scaffolding or aerial lifts, particularly in complex industrial environments where conventional access is impractical.`,
        tags: ['Wind Turbine Repair', 'Rope Rescue', 'Composite Layups', 'Abseiling', 'Technical Rigging', 'Confined Space', 'Rappelling', 'Rescue and Triage'],
        projects: [
        {
            title: 'Wind Turbine Maintenance',
            description: 'Performed blade inspections and repairs on utility-scale wind turbines using rope access techniques to identify and address structural issues.'
        },
        {
            title: 'Rescue Team Training',
            description: 'Developed and conducted training for technical rope rescue operations in industrial settings, focusing on confined space and high-angle scenarios.'
        },
        {
            title: 'Composite Repair Work',
            description: 'Conducted on-site composite material repairs for structures at height, including blade leading edge restoration and structural reinforcement.'
        }
        ]
    },
    'martial-arts': {
        title: 'Mixed Martial Arts',
        image: martialArts,
        description: `Dedicated practitioner with over a decade of training, specializing in both gi and no-gi grappling alongside stand-up techniques for comprehensive combat proficiency.`,
        longDescription: `My journey in martial arts spans over a decade of dedicated training across multiple disciplines. I've focused on developing a well-rounded skillset that integrates standing techniques with ground fighting.

        Through consistent training in various arts, I've gained a deep appreciation for the technical aspects, physical demands, and mental discipline required for combat sports.`,
        tags: ['Brazilian Jiu-Jitsu', 'Muay Thai', 'Wrestling', 'Judo', 'Kickboxing', 'Competition Experience'],
        achievements: [
        'Competition experience in regional Brazilian Jiu-Jitsu tournaments',
        'Training in specialized gyms across multiple countries',
        'Cross-training approach incorporating multiple disciplines',
        'Extensive training in both gi and nogi grappling',
        'Focus on both sport and self-defense applications of martial arts techniques'
        ]
    },
    'mountain-sports': {
        title: 'Mountain Sports',
        image: mtnSports,
        description: `Adventure enthusiast exploring diverse mountain environments through various technical sports and wilderness activities.`,
        longDescription: `My passion for mountain environments has led me to develop skills across a spectrum of outdoor activities. From vertical rock faces to backcountry snowboarding to whitewater, I've pursued technical proficiency in various mountain sports.

        These activities not only provide adventure and physical challenge but also deepen my connection to natural landscapes and wilderness environments.`,
        tags: ['Rock Climbing', 'Bouldering', 'Backcountry Splitboarding', 'Whitewater Packrafting', 'Mountain Biking', 'Trail Running', 'Canyoneering'],
        experiences: [
        'Multipitch traditional climbing in various mountain ranges',
        'Backcountry snowboarding expeditions in remote areas',
        'Technical canyoneering descents requiring rope techniques',
        'Whitewater packrafting in alpine environments',
        'Extended wilderness journeys combining multiple mountain disciplines',
        'Alpine rock climbing in the Front Range of Colorado'
        ]
    }
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