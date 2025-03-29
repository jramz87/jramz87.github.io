import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import '../assets/css/style.css';

function CircularPublicationsCarousel({ publications }) {
    const [activeIndex, setActiveIndex] = useState(0);
    
    const totalPublications = publications.length;
    
    // Get previous, current, and next indices in a circular manner
    const getPrevIndex = (current) => (current === 0 ? totalPublications - 1 : current - 1);
    const getNextIndex = (current) => (current === totalPublications - 1 ? 0 : current + 1);
    
    // Handle navigation
    const goToPrev = () => {
        setActiveIndex(getPrevIndex(activeIndex));
    };
    
    const goToNext = () => {
        setActiveIndex(getNextIndex(activeIndex));
    };
    
    // Calculate indices for visible publications
    const prevIndex = getPrevIndex(activeIndex);
    const nextIndex = getNextIndex(activeIndex);
    
    // Get publications for display
    const prevPub = publications[prevIndex];
    const activePub = publications[activeIndex];
    const nextPub = publications[nextIndex];
    
    return (
        <div className="circular-carousel-container">
            <div className="circular-carousel-track">
                {/* Previous Publication */}
                <div className="carousel-item prev" onClick={goToPrev}>
                    <div className="publication-card">
                        <div className="publication-image-container">
                            {prevPub.firstPageImage ? (
                                <img 
                                    src={prevPub.firstPageImage} 
                                    alt={`First page of ${prevPub.title}`}
                                    className="publication-image"
                                />
                            ) : (
                                <div className="publication-image-placeholder">
                                    <span>No Preview</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                
                {/* Active Publication */}
                <div className="carousel-item active">
                    <div className="publication-card">
                        <div className="publication-image-container">
                            {activePub.firstPageImage ? (
                                <img 
                                    src={activePub.firstPageImage} 
                                    alt={`First page of ${activePub.title}`}
                                    className="publication-image"
                                />
                            ) : (
                                <div className="publication-image-placeholder">
                                    <span>No Preview</span>
                                </div>
                            )}
                        </div>
                        <div className="publication-details">
                            <h4 className="publication-title">
                                <a href={activePub.link} target="_blank" rel="noopener noreferrer">
                                    {activePub.title}
                                </a>
                            </h4>
                            <p className="publication-authors">{activePub.authors}</p>
                            <p className="publication-journal">
                                {activePub.journal} <span className="publication-year">{activePub.year}</span>
                            </p>
                            {activePub.abstract && (
                                <div className="publication-abstract">
                                    <p>{activePub.abstract}</p>
                                </div>
                            )}
                            <Button 
                                href={activePub.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                variant="outline-primary"
                                size="sm"
                                className="mt-2 view-publication-btn"
                            >
                                View Publication
                            </Button>
                        </div>
                        
                        {/* Navigation Controls - Using the wrapper from your CSS */}
                    </div>

                                            <div className="carousel-controls-wrapper">
                            <div className="carousel-controls">
                                <button className="carousel-control prev" onClick={goToPrev}>
                                    <span>&#10094;</span>
                                </button>
                                <div className="carousel-indicators">
                                    {publications.map((_, index) => (
                                        <span 
                                            key={index} 
                                            className={`indicator ${index === activeIndex ? 'active' : ''}`}
                                            onClick={() => setActiveIndex(index)}
                                        />
                                    ))}
                                </div>
                                <button className="carousel-control next" onClick={goToNext}>
                                    <span>&#10095;</span>
                                </button>
                            </div>
                        </div>
                </div>
                
                {/* Next Publication */}
                <div className="carousel-item next" onClick={goToNext}>
                    <div className="publication-card">
                        <div className="publication-image-container">
                            {nextPub.firstPageImage ? (
                                <img 
                                    src={nextPub.firstPageImage} 
                                    alt={`First page of ${nextPub.title}`}
                                    className="publication-image"
                                />
                            ) : (
                                <div className="publication-image-placeholder">
                                    <span>No Preview</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CircularPublicationsCarousel;