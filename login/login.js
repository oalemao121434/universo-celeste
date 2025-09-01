// Futuristic login JavaScript

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');

    // Add glowing effect on focus
    [usernameInput, passwordInput].forEach(input => {
        input.addEventListener('focus', function() {
            this.style.boxShadow = '0 0 20px #00fff0';
        });
        input.addEventListener('blur', function() {
            this.style.boxShadow = '0 0 8px #00ffea inset';
        });
    });

    // Form submission
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        let isValid = true;

        // Validate username
        if (usernameInput.value.trim() === '') {
            showError(usernameError, 'Usuário é obrigatório');
            isValid = false;
        } else {
            hideError(usernameError);
        }

        // Validate password
        if (passwordInput.value.trim() === '') {
            showError(passwordError, 'Senha é obrigatória');
            isValid = false;
        } else {
            hideError(passwordError);
        }

        if (isValid) {
            // Simulate login success
            alert('Login bem-sucedido! Bem-vindo ao universo celeste.');
            // Here you could redirect or perform actual login
        }
    });

    function showError(element, message) {
        element.textContent = message;
        element.style.display = 'block';
    }

    function hideError(element) {
        element.style.display = 'none';
    }

    // Add some futuristic effects
    setInterval(() => {
        const container = document.querySelector('.login-container');
        container.style.transform = `translateY(${Math.sin(Date.now() / 1000) * 2}px)`;
    }, 100);
});
