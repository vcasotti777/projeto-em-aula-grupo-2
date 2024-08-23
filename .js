document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    validateField('firstName', 'firstNameError', 'Por favor, insira seu nome.');
    validateField('email', 'emailError', 'Por favor, insira um email válido.');
    validateField('password', 'passwordError', 'Por favor, insira sua senha.');
    validateField('phone', 'phoneError', 'Por favor, insira seu telefone.');
    validateRadioButtons('horario', 'horarioError', 'Por favor, selecione um horário.');
    
    if (document.querySelectorAll('.error:empty').length === 5) {
        alert('Formulário enviado com sucesso!');
    }
});

function validateField(fieldId, errorId, errorMessage) {
    const field = document.getElementById(fieldId);
    const errorElement = document.getElementById(errorId);
    
    if (field.value.trim() === '') {
        errorElement.textContent = errorMessage;
    } else {
        errorElement.textContent = '';
    }
}

function validateRadioButtons(name, errorId, errorMessage) {
    const radioButtons = document.getElementsByName(name);
    let isChecked = false;
    
    for (const radio of radioButtons) {
        if (radio.checked) {
            isChecked = true;
            break;
        }
    }
    
    const errorElement = document.getElementById(errorId);
    if (!isChecked) {
        errorElement.textContent = errorMessage;
    } else {
        errorElement.textContent = '';
    }
}
