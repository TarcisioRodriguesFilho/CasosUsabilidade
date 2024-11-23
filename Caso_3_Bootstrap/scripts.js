document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário sem validação

    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    let isValid = true;

    // Limpa classes de validação anteriores
    emailInput.classList.remove('is-invalid');
    passwordInput.classList.remove('is-invalid');

    // Valida email
    if (!validateEmail(emailInput.value)) {
        emailInput.classList.add('is-invalid');
        isValid = false;
    }

    // Valida senha
    if (passwordInput.value.trim() === '') {
        passwordInput.classList.add('is-invalid');
        isValid = false;
    }

    // Se válido, simula envio do formulário
    if (isValid) {
        alert('Login bem-sucedido!');
        // Aqui você pode adicionar integração com API para autenticação
    }
});

// Função para validar email
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}
