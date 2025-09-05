document.addEventListener('DOMContentLoaded', function() {
    // Add some futuristic effects
    setInterval(() => {
        const main = document.querySelector('main');
        if (main) {
            main.style.transform = `translateY(${Math.sin(Date.now() / 1000) * 2}px)`;
        }
    }, 100);
});
