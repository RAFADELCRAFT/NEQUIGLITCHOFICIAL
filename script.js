document.addEventListener('DOMContentLoaded', () => {
    // Pantallas
    const loginScreen = document.querySelector('.login-screen');
    const dashboard = document.querySelector('.dashboard');
    const comprobante = document.querySelector('.comprobante');

    // Elementos de formulario
    const phoneInput = document.getElementById('phone');
    const pinInput = document.getElementById('pin');
    const loginButton = document.getElementById('login-btn');

    // Elementos de comprobante
    const nameInput = document.getElementById('name');
    const numberInput = document.getElementById('number');
    const amountInput = document.getElementById('amount');
    const generateButton = document.getElementById('generate-btn');

    // Comprobante y datos generados
    const compName = document.getElementById('comp-name');
    const compNumber = document.getElementById('comp-number');
    const compAmount = document.getElementById('comp-amount');
    const userName = document.getElementById('user-name');

    // Datos de usuario (para simular un login)
    const userPhone = '3000000000';
    const userPin = '1234';
    const userFullName = 'Juan Pérez';

    // Función para iniciar sesión
    loginButton.addEventListener('click', () => {
        const phone = phoneInput.value;
        const pin = pinInput.value;

        if (phone === userPhone && pin === userPin) {
            userName.textContent = userFullName;
            loginScreen.style.display = 'none';
            dashboard.style.display = 'block';
        } else {
            alert('Número o clave incorrectos');
        }
    });

    // Función para generar el comprobante
    generateButton.addEventListener('click', () => {
        const name = nameInput.value.trim();
        const number = numberInput.value.trim();
        const amount = parseFloat(amountInput.value);

        if (name && number && !isNaN(amount)) {
            compName.textContent = name;
            compNumber.textContent = number;
            compAmount.textContent = `$${amount.toLocaleString('es-CO')}`;

            dashboard.style.display = 'none';
            comprobante.style.display = 'block';
        } else {
            alert('Por favor complete todos los campos correctamente');
        }
    });
});
