import React, { useEffect, useState } from 'react';

function BackToTop() {
    const [visible, setVisible] = useState(false);
    
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };
        
        window.addEventListener('scroll', toggleVisibility);
        
        // Clean up the event listener when component unmounts
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);
    
    const scrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    
    return (
        <a 
            href="#top"
            aria-label="Scroll to top of page" 
            className="back-to-top" 
            onClick={scrollToTop} 
            style={{ display: visible ? 'flex' : 'none' }}
        >
        ↑
        </a>
    );
}

export default BackToTop;