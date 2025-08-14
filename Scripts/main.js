// Minimal JavaScript for The Agentic State website
document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile menu toggle
    const modalToggle = document.querySelector('.modal-toggle');
    const body = document.body;
    
    if (modalToggle) {
        modalToggle.addEventListener('click', function() {
            body.classList.toggle('is-modal-open');
        });
    }
    
    // Close modal when clicking outside
    document.addEventListener('click', function(e) {
        if (body.classList.contains('is-modal-open') && 
            !e.target.closest('.modal') && 
            !e.target.closest('.modal-toggle')) {
            body.classList.remove('is-modal-open');
        }
    });
    
    // Scroll to top button functionality
    const upButton = document.querySelector('.up');
    if (upButton) {
        upButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Show/hide scroll to top button
    let isScrolledDown = false;
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset > 100;
        if (scrolled !== isScrolledDown) {
            isScrolledDown = scrolled;
            body.classList.toggle('is-scrolled-down', scrolled);
        }
    });
    
    // Whitepaper navigation functionality (only on whitepaper page)
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    if (navLinks.length > 0 && sections.length > 0) {
        // Smooth scrolling for navigation links
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
        
        // Active navigation highlighting on scroll
        window.addEventListener('scroll', function() {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.pageYOffset >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + current) {
                    link.classList.add('active');
                }
            });
        });
    }
    
    // Add JavaScript class to body for enhanced functionality
    body.classList.add('is-js');
}); 