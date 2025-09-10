document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    // Add some futuristic effects
    setInterval(() => {
        const main = document.querySelector('main');
        if (main) {
            main.style.transform = `translateY(${Math.sin(Date.now() / 1000) * 2}px)`;
        }
    }, 100);

    // Toggle menu on hamburger click
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
});
