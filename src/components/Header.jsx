import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import profileImage from '../assets/images/profile.png';
import cvPdf from '../assets/documents/cv.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Header() {
  return (
    <>
      <Navbar expand="lg" className="navbar-dark" style={{ backgroundColor: '#723D46' }}>
        <Container>
          <Navbar.Brand href="#home">Jessica Ramirez</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#experience">Experience</Nav.Link>
              <Nav.Link href="#publications">Publications</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      <header>
        <img src={profileImage} alt="Jessica Ramirez" className="profile-img" />
        <h1>Jessica Ramirez</h1>
        <p className="tagline">Research Scientist • Optical Manufacturing Engineer • Rope Access Technician</p>
        <div className="social-links">
          <a href="https://github.com/jramz87" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} style={{ marginRight: '8px' }} />
            <span className="hide-mobile">GitHub</span>
          </a>
          <a href={cvPdf} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faBriefcase} style={{ marginRight: '8px' }} />
            <span className="hide-mobile">Curriculum Vitae</span>
          </a>
          <a href="mailto:jramz1897@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '8px' }} />
            <span className="hide-mobile">Email</span>
          </a>
          <a href="tel:+13059657012">
            <FontAwesomeIcon icon={faPhone} style={{ marginRight: '8px' }} />
            <span className="hide-mobile">+1 (305) 965-7012</span>
          </a>
        </div>
      </header>
    </>
  );
}

export default Header;