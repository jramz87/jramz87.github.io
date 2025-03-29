import React, { useState } from 'react';
import { Container, Button, Collapse } from 'react-bootstrap';
import PublicationItem from './PublicationItem';
import CircularPublicationsCarousel from './CircularPublicationsCarousel';
import { publications } from '../data/publications';
import '../assets/css/style.css';

function Publications() {
    const [showAllPublications, setShowAllPublications] = useState(false);
    const [activeAccordion, setActiveAccordion] = useState(null);
    
    // Assume the first few publications are the selected ones
    const selectedPublications = publications.slice(0, 3); // Adjust the number as needed
    const additionalPublications = publications.slice(3); // The rest of the publications

    const toggleAccordion = (index) => {
        if (activeAccordion === index) {
            setActiveAccordion(null);
        } else {
            setActiveAccordion(index);
        }
    };
    
    return (
        <section id="publications">
            <Container>
                <h2>Selected Publications</h2>
                <div className="publication-list">
                    {selectedPublications.map((pub) => (
                        <PublicationItem 
                            key={pub.id}
                            id={pub.id}
                            title={pub.title}
                            authors={pub.authors}
                            journal={pub.journal}
                            year={pub.year}
                            link={pub.link}
                            abstract={pub.abstract}
                            firstPageImage={pub.firstPageImage} // Pass the image to the component
                        />
                    ))}
                </div>
                
                {additionalPublications.length > 0 && (
                    <div className="see-more-publications mt-4">
                        <Button
                            onClick={() => setShowAllPublications(!showAllPublications)}
                            aria-controls="additional-publications"
                            aria-expanded={showAllPublications}
                            variant="outline-secondary"
                            className="w-100 see-more-btn"
                            style={{ borderColor: '#E26D5C', color: '#E26D5C' }}
                        >
                            {showAllPublications ? 'Hide More Publications' : 'See More Publications'}
                        </Button>
                        
                        <Collapse in={showAllPublications}>
                            <div id="additional-publications" className="mt-3">
                                {/* Desktop Carousel */}
                                <CircularPublicationsCarousel publications={additionalPublications} />
                                
                                {/* Mobile Accordion */}
                                <div className="mobile-publications-accordion">
                                    {additionalPublications.map((pub, index) => (
                                        <div key={pub.id}>
                                            <div 
                                                className="mobile-publication-header"
                                                onClick={() => toggleAccordion(index)}
                                            >
                                                <span className="mobile-publication-title">{pub.title}</span>
                                                <span>{activeAccordion === index ? '−' : '+'}</span>
                                            </div>
                                            
                                            <Collapse in={activeAccordion === index}>
                                                <div className="mobile-publication-content">
                                                    <div className="publication-authors">{pub.authors}</div>
                                                    <div className="publication-journal">
                                                        {pub.journal} <span className="publication-year">{pub.year}</span>
                                                    </div>
                                                    {pub.abstract && (
                                                        <div className="mt-2">{pub.abstract}</div>
                                                    )}
                                                    <Button 
                                                        href={pub.link} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        variant="outline-primary"
                                                        size="sm"
                                                        className="mt-3 view-publication-btn"
                                                    >
                                                        View Publication
                                                    </Button>
                                                </div>
                                            </Collapse>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Collapse>
                    </div>
                )}
            </Container>
        </section>
    );
}

export default Publications;