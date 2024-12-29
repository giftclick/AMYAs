export class Footer extends HTMLElement {
    constructor() {
        super();
        const template = document.createElement('template');
        template.innerHTML = `
        <footer>
        <div class="footer-logo">
            <img src="./assets/Group 2.svg" alt="Company Logo">
            <p><a href="https://maps.app.goo.gl/4n2KNGoQAqrmXB257" target="_blank">Chuquisaca Street N.464 Corner Valdiviezo 1st Floor</a><br> 
                Phones: (591-4) 4018004 / 4018005<br>Fax: (591-4) 4018004<br>Cochabamba – Bolivia</p>
            <p class="santa"><a href="https://maps.app.goo.gl/Lsf9b52k8EJLRtoaA" target="_blank">Portofino I Building
                    Second Floor Office 2-E</a><br>
                Equipetrol Area, 3rd Anillo<br>
                Mobile: 65350004<br>
                Santa Cruz - Bolivia</p>
            <p class="santa"><a href="https://maps.app.goo.gl/vUpbjZYvsDyzbBQc7" target="_blank">Cobija Building
                    Second Floor Office 202</a><br>
                Arce Avenue No. 2355<br>
                Mobile: 65350004<br>
                La Paz - Bolivia</p>
        </div>
        <div class="footer-nav">
            <ul>
                <li><a href="services.html">Services</a></li>
                <li><a href="industries.html">Industries</a></li>
                <li><a href="contactus.html">Contact Us</a></li>
            </ul>
            <ul>
                <li><a href="aboutus.html">About AM</a></li>
                <li><a href="joinus.html">Join AM</a></li>
            </ul>
        </div>
    </footer>
        `;
        this.appendChild(template.content.cloneNode(true));
    }
}

customElements.define('app-footer', Footer);
