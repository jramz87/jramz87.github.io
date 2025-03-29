import React, { useState } from 'react';
import { OverlayTrigger, Tooltip, Button, Collapse } from 'react-bootstrap';

function PublicationItem({ id, title, authors, journal, year, abstract, link, firstPageImage }) {
    const [open, setOpen] = useState(false);
    
    return (
        <div className="publication-item">
            <div className="publication-item-content">
                {/* Thumbnail on the left */}
                <div className="publication-thumbnail-container">
                    {firstPageImage ? (
                        <img 
                            src={firstPageImage} 
                            alt={`First page of ${title}`}
                            className="publication-thumbnail"
                        />
                    ) : (
                        <div className="publication-thumbnail-placeholder">
                            <span>No Preview</span>
                        </div>
                    )}
                </div>
                
                {/* Publication details on the right */}
                <div className="publication-content">
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
            </div>
        </div>
    );
}

export default PublicationItem;