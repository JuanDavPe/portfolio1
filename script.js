// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
const html = document.documentElement;

function getPreferredTheme() {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

function setTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

setTheme(getPreferredTheme());

themeToggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
});

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
    }
});

// Mobile Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuBtn.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuBtn.classList.remove('active');
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// Header background on scroll
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.background = 'rgba(10, 10, 15, 0.95)';
    } else {
        header.style.background = 'rgba(10, 10, 15, 0.9)';
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -80px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for animation
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(section);
});

// Scroll Spy
const navLinksAll = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section[id]');

function updateActiveLink() {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinksAll.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveLink);
updateActiveLink();

// Typing effect for hero
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    heroTitle.style.borderRight = '2px solid var(--accent)';

    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            heroTitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 80);
        } else {
            setTimeout(() => {
                heroTitle.style.borderRight = 'none';
            }, 1500);
        }
    }

    setTimeout(typeWriter, 500);
}

// Certificates Carousel
const certificatesScroll = document.getElementById('certificatesScroll');
const certificatesDots = document.getElementById('certificatesDots');
const scrollPrevBtn = document.querySelector('.scroll-prev');
const scrollNextBtn = document.querySelector('.scroll-next');

if (certificatesScroll && certificatesDots) {
    const cards = certificatesScroll.querySelectorAll('.certificate-card');
    const dots = certificatesDots.querySelectorAll('.dot');
    let activeIndex = 0;

    function updateActiveDot() {
        const scrollLeft = certificatesScroll.scrollLeft;
        const cardWidth = cards[0] ? cards[0].offsetWidth + 24 : 1;
        activeIndex = Math.round(scrollLeft / cardWidth);

        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === activeIndex);
        });

        // Update button states
        if (scrollPrevBtn) {
            scrollPrevBtn.disabled = scrollLeft <= 10;
        }
        if (scrollNextBtn) {
            const maxScroll = certificatesScroll.scrollWidth - certificatesScroll.clientWidth;
            scrollNextBtn.disabled = scrollLeft >= maxScroll - 10;
        }
    }

    certificatesScroll.addEventListener('scroll', updateActiveDot);
    updateActiveDot();

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            const card = cards[i];
            if (card) {
                certificatesScroll.scrollTo({
                    left: card.offsetLeft - 24,
                    behavior: 'smooth'
                });
            }
        });
    });

    if (scrollPrevBtn) {
        scrollPrevBtn.addEventListener('click', () => {
            const cardWidth = cards[0] ? cards[0].offsetWidth + 24 : 400;
            certificatesScroll.scrollTo({
                left: certificatesScroll.scrollLeft - cardWidth,
                behavior: 'smooth'
            });
        });
    }

    if (scrollNextBtn) {
        scrollNextBtn.addEventListener('click', () => {
            const cardWidth = cards[0] ? cards[0].offsetWidth + 24 : 400;
            certificatesScroll.scrollTo({
                left: certificatesScroll.scrollLeft + cardWidth,
                behavior: 'smooth'
            });
        });
    }
}
