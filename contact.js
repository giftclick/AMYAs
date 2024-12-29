document.querySelector('.contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Obtener los valores de los campos del formulario
    const name = document.getElementById('name').value.trim();
    const company = document.getElementById('company').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validar que los campos requeridos no estén vacíos
    if (!name || !email || !message) {
        alert('Por favor, complete todos los campos requeridos.');
        return;
    }

    // Crear el mensaje profesional
    const professionalMessage = `Hola, mi nombre es ${name}. Represento a la empresa ${company || 'N/A'}, mi correo es
    ${email} y esta es mi consulta: ${message}`;

    // Número de WhatsApp al que se enviará el mensaje
    const whatsappNumber = '+59165350004';

    // Crear el enlace de WhatsApp con el número y el mensaje
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(professionalMessage)}`;

    // Abrir WhatsApp en una nueva ventana
    window.open(whatsappUrl, '_blank');
});