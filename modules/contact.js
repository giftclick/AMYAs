export class Contact extends HTMLElement {
    constructor() {
        super();
        const template = document.createElement('template');
        template.innerHTML = `
       <section id="contactanos-section" class="preview">
        <h1>Contáctanos</h1>
        <p>Descubre cómo nuestras auditorías internas pueden mejorar la eficiencia y seguridad de tu organización.</p>
        <button onclick="window.location.href='contacto.html'"><svg width="66" height="66" viewBox="0 0 96 96"
                fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M88 24C88 19.6 84.4 16 80 16H16C11.6 16 8 19.6 8 24M88 24V72C88 76.4 84.4 80 80 80H16C11.6 80 8 76.4 8 72V24M88 24L48 52L8 24"
                    stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            </svg></button>
    </section>
        `;
        this.appendChild(template.content.cloneNode(true));
    }
}

customElements.define('app-contact', Contact);