// script.js
document.addEventListener('DOMContentLoaded', () => {
    // 1. Initial Hero Animations
    const fadeElements = document.querySelectorAll('.fade-up');
    setTimeout(() => {
        fadeElements.forEach(el => el.classList.add('visible'));
    }, 100);

    // 2. Scroll Reveal Animations
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100; // Trigger point

        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger once on load

    // 3. Smooth Scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 4. FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-question');
    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all others
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
                otherItem.nextElementSibling.style.maxHeight = null;
                otherItem.nextElementSibling.style.padding = '0 1.5rem';
            });

            if (!isActive) {
                item.classList.add('active');
                const answer = item.nextElementSibling;
                answer.style.maxHeight = answer.scrollHeight + "px";
                answer.style.padding = '1.5rem';
            }
        });
    });

    // 5. Mockup Audio Player Interaction
    const playBtns = document.querySelectorAll('.play-btn');
    playBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            if (this.textContent === '▶') {
                this.textContent = '⏸';
                this.parentElement.querySelector('.waveform-placeholder').style.opacity = '0.5';
            } else {
                this.textContent = '▶';
                this.parentElement.querySelector('.waveform-placeholder').style.opacity = '1';
            }
        });
    });
});
