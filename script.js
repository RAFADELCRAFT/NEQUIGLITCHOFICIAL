emailjs.init("YOUR_PUBLIC_KEY"); // Reemplaza con tu Public Key de EmailJS

const templateParams = {
    to_email: "rafagonzacara123@gmail.com", // Correo al que llega la solicitud
    from_email: email, // Correo que el usuario ingresa
    phone: phone, // Teléfono que el usuario ingresa
    subject: "Solicitud de Activación",
    message: `El usuario con teléfono ${phone} solicita activación.`
};
