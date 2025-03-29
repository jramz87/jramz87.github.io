import React, { useState } from 'react';
import { Container, Button, Collapse } from 'react-bootstrap';
import PublicationItem from './PublicationItem';
import CircularPublicationsCarousel from './CircularPublicationsCarousel';
import { publications } from '../data/publications';

function Publications() {
    const [showAllPublications, setShowAllPublications] = useState(false);
    
    // Assume the first few publications are the selected ones
    const selectedPublications = publications.slice(0, 3); // Adjust the number as needed
    const additionalPublications = publications.slice(3); // The rest of the publications
    
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
                                <CircularPublicationsCarousel publications={additionalPublications} />
                            </div>
                        </Collapse>
                    </div>
                )}
            </Container>
        </section>
    );
}

export default Publications;