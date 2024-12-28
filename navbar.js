export class Navbar extends HTMLElement {
    constructor() {
        super();
        const template = document.createElement('template');
        template.innerHTML = `
        <nav class="navbar">
        <a href="index.html">
            <div class="logo">
                <img src="./assets/Group 2.svg" alt="Arnez Miranda & Asociados Logo">
            </div>
        </a>
        <div class="hamburger" onclick="toggleMenu()">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
        <ul class="nav-links">
            <li><button id="servicios-btn" class="nav-btn">Servicios</button></li>
            <li><button id="industrias-btn" class="nav-btn">Industrias</button></li>
            <li><button id="contactanos-btn" class="nav-btn">Contáctanos</button></li>
            <li><button id="quienes-somos-btn" class="nav-btn">Acerca de AM</button></li>
            <li><button id="se-parte-btn" class="nav-btn">Se Parte</button></li>
        </ul>
        <div class="language-dropdown">
            <button class="dropbtn" onclick="toggleDropdown()">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                    style="pointer-events: none;">
                    <path
                        d="M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M22 12H2M12 22C6.47715 22 2 17.5228 2 12M12 22C14.5013 19.2616 15.9228 15.708 16 12C15.9228 8.29203 14.5013 4.73835 12 2M12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2M2 12C2 6.47715 6.47715 2 12 2"
                        stroke="#1E1E1E" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                IDIOMA
                <svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                    style="pointer-events: none;">
                    <path d="M7.37939 9L14.7588 15L22.1383 9" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
            </button>
            <div class="dropdown-content" id="languageDropdown">
                <a href="#" onclick="translateContent('es')">Español</a>
                <a href="#" onclick="translateContent('en')">English</a>
            </div>
        </div>
    </nav>


    <!-- Contenido que colapsa -->
    <div id="servicios-content" class="collapsible-content">
        <div class="services">
            <h2>Servicios</h2>
            <p><strong>ARNEZ MIRANDA Y ASOCIADOS</strong> ofrece auditoría, outsourcing contable, asesoramiento
                tributario y consultoría
                integral para empresas en diversos sectores, optimizando eficiencia y cumplimiento con servicios
                personalizados y especializados.</p>
            <button class="contact-btn">Contáctanos</button>
        </div>

        <div class="menu">
            <ul>
                <li>
                    <a href="#" id="auditorias">
                        <div class="menu-content-item">
                            <div>Auditorías</div>
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
                <li><a href="#" id="asesoramiento-tributario">
                        <div class="menu-content-item">
                            <div>Asesoramiento Tributario</div>
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
                    <a href="#" id="consultorias">
                        <div class="menu-content-item">
                            <div>Consultoría</div>
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
            <h2>Somos tus aliados</h2>
        </div>
    </div>
    <div id="industrias-content" class="collapsible-content" style="display: none;">
        <div class="industries">
            <h2>Industrias</h2>
            <p><strong>ARNEZ MIRANDA Y ASOCIADOS</strong> presta sus servicios especializados a una amplia gama de
                industrias, ofreciendo
                soluciones personalizadas que se ajustan a las necesidades únicas de cada sector.</p>
            <button class="contact-btn">Contáctanos</button>
        </div>

        <div class="menu">
            <ul>
                <li>
                    <a href="#" id="comercial">
                        <div class="menu-content-item">
                            <div>Comercial</div>
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
                    <a href="#" id="construccion">
                        <div class="menu-content-item">
                            <div>Construcción</div>
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
                    <a href="#" id="cooperativas">
                        <div class="menu-content-item">
                            <div>Cooperativas</div>
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
                    <a href="#" id="entidades-sin-fines-lucro">
                        <div class="menu-content-item">
                            <div>Entidades sin fines de lucro</div>
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
                    <a href="#" id="industria-manufacturera">
                        <div class="menu-content-item">
                            <div>Industria</div>
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
                    <a href="#" id="no-clasificados">
                        <div class="menu-content-item">
                            <div>No Clasificados</div>
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
                    <a href="#" id="sector-publico">
                        <div class="menu-content-item">
                            <div>Sector Público</div>
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
                    <a href="#" id="servicios">
                        <div class="menu-content-item">
                            <div>Servicios</div>
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


        <div class="content-menu" id="content-menu-industries">
            <h2>Explora las Industrias que Servimos</h2>
        </div>
    </div>
        `;
        this.appendChild(template.content.cloneNode(true));
    }
}

customElements.define('app-navbar', Navbar);