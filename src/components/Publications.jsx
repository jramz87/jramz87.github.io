import React, { useState } from 'react';
import { Container, OverlayTrigger, Tooltip, Button, Collapse } from 'react-bootstrap';
import { publications } from '../data/publications';

// Publication component with collapsible abstract
function PublicationItem({ id, title, authors, journal, year, abstract, link }) {
    const [open, setOpen] = useState(false);
    
    return (
        <div className="publication-item">
            <div className="publication-title">
                <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Click to view publication</Tooltip>}
                >
                <a href={link} target="_blank" rel="noopener noreferrer">{title}</a>
                </OverlayTrigger>
            </div>
        <div className="publication-authors">{authors}</div>
        <div className="publication-journal">
            {journal} <span className="publication-year">{year}</span>
            {abstract && (
                <Button 
                    variant="link" 
                    onClick={() => setOpen(!open)}
                    aria-controls={`abstract-collapse-${id}`}
                    aria-expanded={open}
                    className="p-0 ms-2"
                    style={{ color: '#E26D5C', textDecoration: 'none' }}
                >
                    {open ? 'Hide Abstract' : 'Show Abstract'}
                </Button>
            )}
        </div>
        {abstract && (
            <Collapse in={open}>
                <div id={`abstract-collapse-${id}`} className="mt-2">
                    {abstract}
                </div>
            </Collapse>
        )}
        </div>
    );
    }

    function Publications() {
    return (
        <section id="publications">
            <Container>
                <h2>Selected Publications</h2>
                <div className="publication-list">
                    {publications.map((pub) => (
                        <PublicationItem 
                            key={pub.id}
                            id={pub.id}
                            title={pub.title}
                            authors={pub.authors}
                            journal={pub.journal}
                            year={pub.year}
                            link={pub.link}
                            abstract={pub.abstract}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
}

export default Publications;