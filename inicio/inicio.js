// Futuristic e-commerce home JavaScript

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    const exploreBtn = document.getElementById('exploreBtn');
    const comprarBtns = document.querySelectorAll('.comprar-btn');
    const produtoCards = document.querySelectorAll('.produto-card');
    const categoriaCards = document.querySelectorAll('.categoria-card');

    // Add glowing effect on hover for product cards
    produtoCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 25px #00ffea, 0 0 50px #00ffea inset';
            this.style.transform = 'scale(1.05)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 0 15px #00ffea, 0 0 30px #00ffea inset';
            this.style.transform = 'scale(1)';
        });
    });

    // Add glowing effect on hover for category cards
    categoriaCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 25px #00ffea, 0 0 50px #00ffea inset';
            this.style.transform = 'scale(1.05)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 0 15px #00ffea, 0 0 30px #00ffea inset';
            this.style.transform = 'scale(1)';
        });
    });

    // Explore button click
    exploreBtn.addEventListener('click', function() {
        document.getElementById('produtos').scrollIntoView({ behavior: 'smooth' });
    });

    // Buy button clicks
    comprarBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const productName = this.parentElement.querySelector('h3').textContent;
            alert(`Produto "${productName}" adicionado ao carrinho! (Funcionalidade simulada)`);
        });
    });

    // Add some futuristic floating animation
    setInterval(() => {
        const main = document.querySelector('main');
        if (main) {
            main.style.transform = `translateY(${Math.sin(Date.now() / 1000) * 3}px)`;
        }
    }, 100);

    // Add parallax effect to header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        const scrollY = window.scrollY;
        header.style.transform = `translateY(${scrollY * 0.5}px)`;
    });

    // Toggle menu on hamburger click
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});
