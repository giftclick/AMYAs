export class Navbar extends HTMLElement {
    constructor() {
        super();
        const template = document.createElement('template');
        template.innerHTML = `
        <nav class="navbar">
        <a href="index.html">
            <div class="logo">
                <img src="./assets/Group 2.svg" alt="Arnez Miranda & Associates Logo">
            </div>
        </a>
        <div class="hamburger" onclick="toggleMenu()">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
        <ul class="nav-links">
            <li><button id="services-btn" class="nav-btn">Services</button></li>
            <li><button id="industries-btn" class="nav-btn">Industries</button></li>
            <li><button id="contact-us-btn" class="nav-btn">Contact Us</button></li>
            <li><button id="about-us-btn" class="nav-btn">About AM</button></li>
            <li><button id="join-us-btn" class="nav-btn">Join AM</button></li>
        </ul>
        <div class="language-dropdown">
            <button class="dropbtn" onclick="toggleDropdown()">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                    style="pointer-events: none;">
                    <path
                        d="M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M22 12H2M12 22C6.47715 22 2 17.5228 2 12M12 22C14.5013 19.2616 15.9228 15.708 16 12C15.9228 8.29203 14.5013 4.73835 12 2M12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2M2 12C2 6.47715 6.47715 2 12 2"
                        stroke="#1E1E1E" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                LANGUAGE
                <svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                    style="pointer-events: none;">
                    <path d="M7.37939 9L14.7588 15L22.1383 9" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
            </button>
            <div class="dropdown-content" id="languageDropdown">
                 <a href="index.html">Spanish</a>
                 <a href="index-en.html">English</a>
            </div>
        </div>
    </nav>

    <!-- Collapsible content -->
    <div id="services-content" class="collapsible-content">
        <div class="services">
            <h2>Services</h2>
            <p><strong>ARNEZ MIRANDA AND ASSOCIATES</strong> offers auditing, accounting outsourcing, tax advisory, and
                consulting services for companies in various sectors, optimizing efficiency and compliance with
                personalized and specialized services.</p>
            <button class="contact-btn">Contact Us</button>
        </div>

        <div class="menu">
            <ul>
                <li>
                    <a href="#" id="audits">
                        <div class="menu-content-item">
                            <div>Audits</div>
                            <div>
                                <svg width="40" height="32" viewBox="0 0 40 32" fill="#EEEDDF"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.28955 16.0784H31.5238M31.5238 16.0784L19.9067 6.89758M31.5238 16.0784L19.9067 25.2592"
                                        stroke="#EEEDDF" stroke-width="4" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </a>
                </li>
                <li><a href="#" id="tax-advisory">
                        <div class="menu-content-item">
                            <div>Tax Advisory</div>
                            <div>
                                <svg width="40" height="32" viewBox="0 0 40 32" fill="#EEEDDF"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.28955 16.0784H31.5238M31.5238 16.0784L19.9067 6.89758M31.5238 16.0784L19.9067 25.2592"
                                        stroke="#EEEDDF" stroke-width="4" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#" id="consulting">
                        <div class="menu-content-item">
                            <div>Consulting</div>
                            <div>
                                <svg width="40" height="32" viewBox="0 0 40 32" fill="#EEEDDF"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.28955 16.0784H31.5238M31.5238 16.0784L19.9067 6.89758M31.5238 16.0784L19.9067 25.2592"
                                        stroke="#EEEDDF" stroke-width="4" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#" id="outsourcing">
                        <div class="menu-content-item">
                            <div>Outsourcing</div>
                            <div>
                                <svg width="40" height="32" viewBox="0 0 40 32" fill="#EEEDDF"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.28955 16.0784H31.5238M31.5238 16.0784L19.9067 6.89758M31.5238 16.0784L19.9067 25.2592"
                                        stroke="#EEEDDF" stroke-width="4" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>

        <div class="content-menu" id="content-menu">
            <h2>We are your allies</h2>
        </div>
    </div>
    <div id="industries-content" class="collapsible-content" style="display: none;">
        <div class="industries">
            <h2>Industries</h2>
            <p><strong>ARNEZ MIRANDA AND ASSOCIATES</strong> provides specialized services to a wide range of industries,
                offering
                customized solutions tailored to the unique needs of each sector.</p>
            <button class="contact-btn">Contact Us</button>
        </div>

        <div class="menu">
            <ul>
                <li>
                    <a href="#" id="commercial">
                        <div class="menu-content-item">
                            <div>Commercial</div>
                            <div>
                                <svg width="40" height="32" viewBox="0 0 40 32" fill="#EEEDDF"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.28955 16.0784H31.5238M31.5238 16.0784L19.9067 6.89758M31.5238 16.0784L19.9067 25.2592"
                                        stroke="#EEEDDF" stroke-width="4" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#" id="construction">
                        <div class="menu-content-item">
                            <div>Construction</div>
                            <div>
                                <svg width="40" height="32" viewBox="0 0 40 32" fill="#EEEDDF"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.28955 16.0784H31.5238M31.5238 16.0784L19.9067 6.89758M31.5238 16.0784L19.9067 25.2592"
                                        stroke="#EEEDDF" stroke-width="4" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#" id="cooperatives">
                        <div class="menu-content-item">
                            <div>Cooperatives</div>
                            <div>
                                <svg width="40" height="32" viewBox="0 0 40 32" fill="#EEEDDF"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.28955 16.0784H31.5238M31.5238 16.0784L19.9067 6.89758M31.5238 16.0784L19.9067 25.2592"
                                        stroke="#EEEDDF" stroke-width="4" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#" id="non-profit-entities">
                        <div class="menu-content-item">
                            <div>Non-profit Entities</div>
                            <div>
                                <svg width="40" height="32" viewBox="0 0 40 32" fill="#EEEDDF"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.28955 16.0784H31.5238M31.5238 16.0784L19.9067 6.89758M31.5238 16.0784L19.9067 25.2592"
                                        stroke="#EEEDDF" stroke-width="4" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#" id="manufacturing-industry">
                        <div class="menu-content-item">
                            <div>Industry</div>
                            <div>
                                <svg width="40" height="32" viewBox="0 0 40 32" fill="#EEEDDF"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.28955 16.0784H31.5238M31.5238 16.0784L19.9067 6.89758M31.5238 16.0784L19.9067 25.2592"
                                        stroke="#EEEDDF" stroke-width="4" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>

        <div class="content-menu" id="content-menu">
            <h2>We are your allies</h2>
        </div>
    </div>
</div>
</nav>
`;
        this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true));
    }
}

customElements.define('nav-bar', Navbar);