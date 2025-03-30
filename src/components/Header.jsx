import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import profileImage from '../assets/images/profile.png';
import cvPdf from '../assets/documents/cv.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Header() {
  // Custom Nav.Link component that uses React Router's Link
  const NavLink = ({ to, children }) => (
    <Nav.Link as={Link} to={to}>
      {children}
    </Nav.Link>
  );

  return (
    <>
      <Navbar expand="lg" className="navbar-dark" style={{ backgroundColor: '#723D46' }}>
        <Container>
          <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink to="/about">About</NavLink>
              <NavLink to="/projects">Projects</NavLink>
              <NavLink to="/skills">Skills</NavLink>
              <NavLink to="/experience">Experience</NavLink>
              <NavLink to="/publications">Publications</NavLink>
              <NavLink to="/contact">Contact</NavLink>
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