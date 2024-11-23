// Seleciona o formulário e os inputs
const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

// Adiciona evento de submissão ao formulário
loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita recarregar a página

    // Reseta mensagens de erro
    clearErrors();

    // Verifica se os campos estão preenchidos
    if (!emailInput.value) {
        showError(emailInput, 'O campo de email é obrigatório.');
    } else if (!validateEmail(emailInput.value)) {
        showError(emailInput, 'Por favor, insira um email válido.');
    }

    if (!passwordInput.value) {
        showError(passwordInput, 'O campo de senha é obrigatório.');
    }

    // Se não houver erros, submeter o formulário (integrar com API)
    if (document.querySelectorAll('.error-message').length === 0) {
        console.log('Formulário válido!'); 
        // Aqui você pode adicionar a lógica para enviar os dados para a API.
    }
});

// Função para exibir mensagens de erro
function showError(input, message) {
    const error = document.createElement('p');
    error.className = 'error-message text-sm text-red-600 mt-1';
    error.innerText = message;
    input.parentElement.appendChild(error);
    input.classList.add('border-red-600');
}

// Função para limpar mensagens de erro
function clearErrors() {
    document.querySelectorAll('.error-message').forEach(error => error.remove());
    emailInput.classList.remove('border-red-600');
    passwordInput.classList.remove('border-red-600');
}

// Função para validar email
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}
