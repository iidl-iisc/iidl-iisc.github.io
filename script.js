// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.highlight-card, .research-area, .publication-item, .news-item');
    animateElements.forEach(el => observer.observe(el));
});

// Add active state to current page in navigation
document.addEventListener('DOMContentLoaded', () => {
    const currentLocation = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentLocation) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// Mobile menu toggle (for future mobile optimization)
const createMobileMenu = () => {
    const nav = document.querySelector('.nav-menu');
    const navContainer = document.querySelector('.nav-container');
    
    // Check if mobile menu button already exists
    if (document.querySelector('.mobile-menu-toggle')) return;
    
    // Create mobile menu toggle button
    const mobileToggle = document.createElement('button');
    mobileToggle.className = 'mobile-menu-toggle';
    mobileToggle.innerHTML = '☰';
    mobileToggle.setAttribute('aria-label', 'Toggle navigation menu');
    
    mobileToggle.addEventListener('click', () => {
        nav.classList.toggle('mobile-active');
        mobileToggle.innerHTML = nav.classList.contains('mobile-active') ? '✕' : '☰';
    });
    
    // Insert toggle button
    if (window.innerWidth <= 768) {
        navContainer.insertBefore(mobileToggle, nav);
    }
};

// Initialize mobile menu on smaller screens
window.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth <= 768) {
        createMobileMenu();
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth <= 768 && !document.querySelector('.mobile-menu-toggle')) {
        createMobileMenu();
    }
});

// Scroll animations for elements
const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.highlight-card, .research-area, .publication-item');
    fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        fadeInObserver.observe(el);
    });
});
