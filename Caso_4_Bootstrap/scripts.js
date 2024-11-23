document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário sem validação

    const form = event.target;
    let isValid = true;

    // Limpar classes de erro anteriores
    Array.from(form.elements).forEach(input => {
        input.classList.remove('is-invalid');
    });

    // Validar Nome Completo
    if (!form.fullName.value.trim()) {
        form.fullName.classList.add('is-invalid');
        isValid = false;
    }

    // Validar Email
    if (!form.email.value.trim() || !validateEmail(form.email.value)) {
        form.email.classList.add('is-invalid');
        isValid = false;
    }

    // Validar CPF
    if (!form.cpf.value.trim()) {
        form.cpf.classList.add('is-invalid');
        isValid = false;
    }

    // Validar senha e confirmação
    if (!form.password.value.trim() || form.password.value !== form.confirmPassword.value) {
        form.confirmPassword.classList.add('is-invalid');
        isValid = false;
    }

    if (isValid) {
        alert('Cadastro realizado com sucesso!');
        // Enviar os dados para o backend via fetch ou axios
    }
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}
