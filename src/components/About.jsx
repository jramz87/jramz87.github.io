import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function About() {
  const location = useLocation();
  
  const isHomePage = location.pathname === '/';
  
  return (
    <section id="about">
      <h2>About Me</h2>
      <p>
        I am an experienced researcher and scientist specializing in laser technology, materials science, computational quantum chemistry, and data analysis. With expertise in both theoretical and experimental chemical physics, my current focus is on optical engineering and advanced photonics applications. Based in Oklahoma City, I bring a strong foundation in scientific research and technical problem-solving to a wide range of research and development projects.
      </p>
      
      {!isHomePage && (
        <div className="about-full-content">
          <p>
            As a first-generation American, I grew up in Miami, Florida, where I witnessed firsthand the sacrifices my parents made. My father is from Havana, Cuba, and my mother is from Antofagasta, Chile. Their commitment to providing a better life allowed me to pursue opportunities that would otherwise have seemed out of reach. My journey has been non-traditional—having faced homelessness and financial hardship in my early years, I found my path through education. After nearly dropping out of high school, I attended Miami Dade Community College, which marked the turning point in my life. Fueled by the belief that education was my opportunity, I dedicated myself fully to my studies. This commitment led to numerous opportunities, including research projects across academia, national laboratories, and industry, where I have worked in areas ranging from computational quantum chemistry to the development of novel ultrafast laser technologies.
          </p>
          <p>
            My professional journey in computational chemistry began with an intense curiosity about quantum mechanics and its impact on chemical systems. I gained valuable research experience at the Quantum Theory Project at the University of Florida, Los Alamos National Laboratory, and La Universidad de Chile. After completing my studies at the University of Florida, I rejoined my research group at Los Alamos National Laboratory to continue my work in computational chemistry.
          </p>
          <p>
            During this period, I attended a seminar in Santa Fe where I heard Dr. Garry Rumbles discuss his pioneering research on solar energy and the basic science of solar photoconversion processes. His work in photochemistry, particularly his studies on photoinduced electron transfer processes and time-resolved laser-based experiments, deeply resonated with me. This exposure to experimental spectroscopy sparked my interest in bridging the gap between theoretical and experimental chemistry, motivating me to shift my focus to experimental spectroscopy for my graduate studies at the University of Colorado, Boulder.
          </p>
          <p>
            While pursuing my doctorate at Colorado, I also discovered a passion for outdoor activities, including rock climbing, backcountry snowboarding, and whitewater paddling. These activities had a profound impact on both my personal and professional life. They helped me develop resilience and adaptability and later opened the door to unique career opportunities that fell outside traditional scientific roles.
          </p>
          <p>
            At the National Renewable Energy Laboratory, I further expanded my expertise by measuring the optical properties of materials, connecting theoretical computations with practical, real-world spectroscopic experimentation. This experience deepened my understanding of chemical systems and significantly impacted my research perspective. I also became skilled in building and maintaining complex optical systems, which led to my first position in industry as a research scientist at a startup specializing in ultrafast laser systems. I was one of a handful of contributors to the development of our fiber-optic laser line, which was acquired by Thorlabs in 2019. However, the subsequent COVID pandemic disrupted the industry, prompting me to seek new opportunities.
          </p>
          <p>
            During the pandemic, I moved to Alaska, where I took on roles such as a backcountry botanist, worked in placer gold mining, and became a rope access technician repairing wind turbines. These experiences allowed me to contribute to energy solutions for remote communities while gaining valuable skills in high-risk industrial environments. The work was deeply humbling, offering me fulfillment and broadening my perspective on life and work.
          </p>
          <p>
            As the world reopened, I transitioned to work with a contract manufacturer specializing in optical and medical devices. There, I gained extensive experience in Good Manufacturing Practices (GMP), ISO standards, precision machining, and optical metrology. I also began incorporating more coding into my work, focusing on automating processes, conducting data analysis, and creating custom project management tools. This sparked an interest in computer science, which led me to pursue a post-baccalaureate degree in Computer Science at Oklahoma State University. I am excited about integrating this new knowledge with my existing expertise in science and technology.
          </p>
          <p>
            I believe that diverse experiences make us better problem solvers and more adaptable professionals. My varied background has provided me with a unique perspective on both scientific research and practical, real-world applications. As I continue to expand my skills and knowledge, I am eager to tackle new challenges at the intersection of science, technology, and innovation.
          </p>
        </div>
      )}
      
      {isHomePage && (
        <div className="read-more-container">
          <Link to="/about">
            <Button
              variant="outline-secondary"
              className="w-100 see-more-btn"
              style={{ borderColor: '#E26D5C', color: '#E26D5C' }}
            >
              See More About Me
            </Button>
          </Link>
        </div>
      )}
    </section>
  );
}

export default About;
