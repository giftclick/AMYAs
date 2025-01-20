export class Footer extends HTMLElement {
    constructor() {
        super();
        const template = document.createElement('template');
        template.innerHTML = `
        <div class="social-media-section">
            <h1 class="title">Our Social Media</h1>
            <div class="social-media">
                <div class="social-item">
                    <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M49.9582 16.0415H49.989M17.5832 2.1665H48.4165C56.9309 2.1665 63.8332 9.06878 63.8332 17.5832V48.4165C63.8332 56.9309 56.9309 63.8332 48.4165 63.8332H17.5832C9.06878 63.8332 2.1665 56.9309 2.1665 48.4165V17.5832C2.1665 9.06878 9.06878 2.1665 17.5832 2.1665ZM45.3332 31.0573C45.7137 33.6234 45.2754 36.2442 44.0806 38.5468C42.8858 40.8494 40.9954 42.7167 38.6782 43.883C36.361 45.0493 33.7351 45.4553 31.1738 45.0431C28.6126 44.631 26.2466 43.4218 24.4123 41.5874C22.5779 39.7531 21.3687 37.387 20.9565 34.8258C20.5444 32.2646 20.9504 29.6387 22.1167 27.3215C23.283 25.0043 25.1502 23.1139 27.4529 21.9191C29.7555 20.7243 32.3762 20.286 34.9423 20.6665C37.5599 21.0546 39.9831 22.2744 41.8542 24.1454C43.7253 26.0165 44.945 28.4398 45.3332 31.0573Z"
                            stroke="#758D70" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <a class="social-button" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">INSTAGRAM</a>
                </div>
                <div class="social-item">
                    <svg width="44" height="69" viewBox="0 0 44 69" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right: 22px;">
                        <path
                            d="M41.5002 2.4165H30.7502C25.9984 2.4165 21.4412 4.1066 18.0812 7.115C14.7211 10.1234 12.8335 14.2037 12.8335 18.4582V28.0832H2.0835V40.9165H12.8335V66.5832H27.1668V40.9165H37.9168L41.5002 28.0832H27.1668V18.4582C27.1668 17.6073 27.5444 16.7912 28.2164 16.1895C28.8884 15.5879 29.7998 15.2498 30.7502 15.2498H41.5002V2.4165Z"
                            stroke="#758D70" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <a class="social-button" href="https://www.facebook.com/profile.php?id=100063928607895" target="_blank" rel="noopener noreferrer">FACEBOOK</a>
                </div>
            </div>
        </div>
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
                 <li><a href="#" id="servicios-btn">Services</a></li>
                <li><a href="#" id="industrias-btn">Industries</a></li>
                <li><a href="?scroll=contactanos-section">Contact Us</a></li>
            </ul>
            <ul>
                <li><a href="https://giftclick.github.io/AMYAs/aboutus.html?scroll=quienes-somos-section">About AM</a></li>
                <li><a href="https://giftclick.github.io/AMYAs/joinAM.html?scroll=se-parte-section">Join AM</a></li>
            </ul>
        </div>
    </footer>
        `;
        this.appendChild(template.content.cloneNode(true));
    }
}

customElements.define('app-footer', Footer);
