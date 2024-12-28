export class Footer extends HTMLElement {
    constructor() {
        super();
        const template = document.createElement('template');
        template.innerHTML = `
        <footer>
        <div class="footer-logo">
            <img src="./assets/Group 2.svg" alt="Logo de la Empresa">
            <p><a href="https://maps.app.goo.gl/4n2KNGoQAqrmXB257" target="_blank">Calle Chuquisaca N.464 Esq.
                    Valdiviezo 1er Piso</a><br> Teléfonos: (591-4) 4018004 / 4018005<br>Fax:
                (591-4) 4018004<br>Cochabamba – Bolivia</p>
            <p class="santa"><a href="https://maps.app.goo.gl/Lsf9b52k8EJLRtoaA" target="_blank">Edificio Portofino I
                    Segundo piso Of. 2-E</a><br>
                Zona Equipetrol 3º anillo interno<br>
                Celular: 65350004<br>
                Santa Cruz - Bolivia</p>
            <p class="santa"><a href="https://maps.app.goo.gl/vUpbjZYvsDyzbBQc7" target="_blank">Edificio Cobija
                    Segundo piso Of. 202</a><br>
                Av. Arce N° 2355<br>
                Celular: 65350004<br>
                La Paz - Bolivia</p>
        </div>
        <div class="footer-nav">
            <ul>
                <li><a href="servicios.html">Servicios</a></li>
                <li><a href="industrias.html">Industrias</a></li>
                <li><a href="contactanos.html">Contáctanos</a></li>
            </ul>
            <ul>
                <li><a href="quienessomos.html">Acerca de AM</a></li>
                <li><a href="separte.html">Se Parte de AM</a></li>
            </ul>
        </div>
    </footer>
        `;
        this.appendChild(template.content.cloneNode(true));
    }
}

customElements.define('app-footer', Footer);