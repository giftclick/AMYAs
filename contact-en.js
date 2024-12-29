document.querySelector('.contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevents the form from submitting

    // Get the values from the form fields
    const name = document.getElementById('name').value.trim();
    const company = document.getElementById('company').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validate that the required fields are not empty
    if (!name || !email || !message) {
        alert('Please fill in all required fields.');
        return;
    }

    // Create the professional message
    const professionalMessage = `Hello, my name is ${name}. I represent the company ${company || 'N/A'}, my email is
    ${email} and this is my query: ${message}`;

    // WhatsApp number to which the message will be sent
    const whatsappNumber = '+59165350004';

    // Create the WhatsApp link with the number and message
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(professionalMessage)}`;

    // Open WhatsApp in a new window
    window.open(whatsappUrl, '_blank');
});
