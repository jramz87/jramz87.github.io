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
            As a first-generation American, I grew up in Miami, Florida, where I witnessed firsthand the sacrifices my parents made to better our lives. My father hailing from Havana, Cuba, and my mother from Antofagasta, Chile, they made the decision to start over in a foreign country to allow my siblings and I to pursue opportunities that would have otherwise seemed out of reach. My journey has been a meandering one and rough at many times—having faced homelessness and financial hardship in my early years, I found my path forward through education and hard work. After barely making it out of high school alive, I found a second chance at Miami Dade Community College, marking a major turning point in my life. Fueled by the desire to make my life matter, I dedicated myself fully to my studies, all while working minimum wage jobs to make ends meet. This commitment eventually led to numerous opportunities, all of which I am endlessly grateful for.
          </p>
          <p>
            My first research experiences began in the area of computational chemistry, sparked by my intense curiosity in quantum mechanics and its implications for real world systems. I took my first baby steps in the research world within Dr. David Micha's group at the Quantum Theory Project at the University of Florida, where we performed quantum chemical simulations to predict the optical porperties of doped Silicon surfaces. During the summers I performed undergraduate research with Dr. Sergei Tretiak at Los Alamos National Laboratory, performing similar quantum chemical simulations on various organic systems.
          </p>
          <p>
            After completing my studies at the University of Florida, I rejoined Dr. Tretiaks group at LANL to continue my work with them for the year after graduating, where I was first encouraged to pursue graduate studies. During this period, while I was performing research and applying to graduate schools, I attended a seminar in Santa Fe where I heard Dr. Garry Rumbles discuss his research on solar energy with a focus on the fundamental processes that take place during photochemical reactions. His desire to disentangle complex principles deeply resonated with me, as I had been feeling like I lacked an "innate intuition" of alot of the optical properties I had been calculating for years. I ended up joinging Dr. Rumbles as his first graduate student at the University of Colorado, essentially jumping from the ship of computational chemisty into the unknown realm of experimental spectroscopy.
          </p>
          <p>
            Most of my graduate research was performed at the National Renewable Energy Laboratory in Golden, Colorado, where Dr. Rumbles was a staff scientist. It was at NREL that I started to measure experimentally the very same optical properties that I had previously used to calculate computationally. This experience deepened my understanding of chemical systems and significantly impacted my research perspective in exposing me to a more holistic approach to solving difficult problems that utilized theory and experiment in harmony. Interestingly, while pursuing my doctorate at Colorado, I also discovered a passion for outdoor activities, including rock climbing, snowboarding and mountain biking. These activities had a profound impact on both my personal and professional life. They helped me develop resilience and adaptability and later opened the door to unique career opportunities that fell outside traditional scientific roles.
          </p>
          <p>
            Working as a spectroscopist during graduate school taught me invaluable skills relating to the building, alignment and characterization of complex optical systems, which directly led to my first position in industry as a research scientist under Dr. Sterling Backus at a local startup company specializing in building high-power, ultrafast laser systems. I became one of a handful of contributors to the development of our fiber-optic laser line, which was later acquired by Thorlabs in late 2019. The excitement of swicthing to work with a larger company was cut short in early 2020 due to the COVID pandemic. During the pandemic, much of the industry I had been preparing myself for was disrupted and the world was fraught with uncertainty. During this time I moved to Fox, Alaska, where I took on various odd jobs in the areas of foresty, placer gold mining and rope access. These years were wrought with challenge, as many of us know, and taught me how to adapt to whatever circumstances life threw my way. Despite it all, I was able to find my way to contribute to environmental and energy solutions for rural communities, while gaining valuable survivable skills in high-risk environments. This work was deeply humbling, offering me fulfillment and broadening my perspective on life and work in a way that helped redefine who I am as person.
          </p>
          <p>
            As the world and industry started to reopen, I transitioned back to technical work with a contract manufacturer specializing in the design of optical and medical devices. In my tim there, I've gained extensive experience in Good Manufacturing Practices (GMP), ISO standards, precision machining and optical metrology. I also began incorporating more coding into my daily work, focusing on automating processes, conducting data analysis and creating custom project management tools. This re-sparked my interest in computer science, which began in my years as a computational chemist, leading me to pursue a post-baccalaureate degree in Computer Science at Oregon State University. I am excited for this next chapter in my life, and in the prospect of weaving this new discipline and set of skills into my already very colorful toolbox.
          </p>
          <p>
            I believe that diverse experiences make us better problem solvers and more adaptable professionals. Being able to see a problem from different perspectives allows us not only to communicate more effectively within cross-disciiplinary teams, but also to devise more creative solutions. My varied background has provided me with a unique perspective on both scientific research and practical, real-world applications. As I continue to expand my skill set and knowledge base, I am eager to tackle new challenges at the intersection of science, technology and innovation. 
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
