// Minimal JavaScript for The Agentic State website
document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
  
    // Mobile menu toggle
    const modalToggle = document.querySelector('.modal-toggle');
    if (modalToggle) {
      modalToggle.addEventListener('click', function() {
        body.classList.toggle('is-modal-open');
      });
    }
  
    // Close site-modal when clicking outside
    document.addEventListener('click', function(e) {
      if (
        body.classList.contains('is-modal-open') &&
        !e.target.closest('.site-modal') &&
        !e.target.closest('.modal-toggle')
      ) {
        body.classList.remove('is-modal-open');
      }
    });
  
    // Scroll to top button (if you add one with class .up)
    const upButton = document.querySelector('.up');
    if (upButton) {
      upButton.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
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
  
    // ===== Whitepaper Reader: Bootstrap Scrollspy init =====
    const headerHeight = parseInt(getComputedStyle(document.documentElement)
      .getPropertyValue('--headerHeight')) || 64;
  
    const scrollbox = document.getElementById('wp-scrollbox');
    if (scrollbox && window.bootstrap) {
      // Initialize / reinitialize Scrollspy tied to the scrollbox
      const instance = bootstrap.ScrollSpy.getOrCreateInstance(scrollbox, {
        target: '#wp-navbar',
        offset: headerHeight + 16
      });
  
      // Smooth-scroll when choosing a chapter; close dropdown afterward
      document.querySelectorAll('#wp-navbar .dropdown-item').forEach(a => {
        a.addEventListener('click', (e) => {
          const id = a.getAttribute('href');
          if (id && id.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(id);
            if (target) {
              target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            const dd = a.closest('.dropdown');
            if (dd) {
              const toggle = dd.querySelector('[data-bs-toggle="dropdown"]');
              if (toggle) bootstrap.Dropdown.getOrCreateInstance(toggle).hide();
            }
          }
        });
      });
  
      // Recalculate on content/size changes
      window.addEventListener('resize', () => instance.refresh());
    }
  
    // Add JS-enabled class
    body.classList.add('is-js');
  });
  