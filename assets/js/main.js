// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

// Back to top button visibility
const backToTopButton = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.style.display = 'flex';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Initialize back to top button as hidden
backToTopButton.style.display = 'none';

// Form submission placeholder (would need backend processing)
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('This is a demo form. In a real implementation, this would send your message.');
    });
}
