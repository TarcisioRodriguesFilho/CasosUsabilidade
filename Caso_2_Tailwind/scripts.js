const form = document.getElementById('registrationForm');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário sem validação

    // Limpa mensagens de erro anteriores
    clearErrors();

    // Validações
    let hasError = false;

    if (!form.fullName.value.trim()) {
        showError(form.fullName, 'O nome completo é obrigatório.');
        hasError = true;
    }

    if (!form.email.value.trim() || !validateEmail(form.email.value)) {
        showError(form.email, 'Por favor, insira um email válido.');
        hasError = true;
    }

    if (!form.address.value.trim()) {
        showError(form.address, 'O endereço é obrigatório.');
        hasError = true;
    }

    if (!form.city.value.trim()) {
        showError(form.city, 'A cidade é obrigatória.');
        hasError = true;
    }

    if (!form.zipCode.value.trim() || !/^\d{5}-\d{3}$/.test(form.zipCode.value)) {
        showError(form.zipCode, 'O CEP deve estar no formato XXXXX-XXX.');
        hasError = true;
    }

    if (!form.password.value.trim()) {
        showError(form.password, 'A senha é obrigatória.');
        hasError = true;
    } else if (form.password.value !== form.confirmPassword.value) {
        showError(form.confirmPassword, 'As senhas não coincidem.');
        hasError = true;
    }

    // Se não houver erros, envia o formulário (ou chama uma API)
    if (!hasError) {
        console.log('Formulário válido! Dados prontos para serem enviados.');
        // Adicione aqui a lógica de envio do formulário para sua API
    }
});

// Função para exibir mensagens de erro
function showError(input, message) {
    const error = document.createElement('p');
    error.className = 'text-red-600 text-sm mt-1';
    error.innerText = message;
    input.parentElement.appendChild(error);
    input.classList.add('border-red-600');
}

// Função para limpar mensagens de erro
function clearErrors() {
    document.querySelectorAll('.text-red-600').forEach(e => e.remove());
    document.querySelectorAll('input').forEach(input => input.classList.remove('border-red-600'));
}

// Função para validar email
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}
