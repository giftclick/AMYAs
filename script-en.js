function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Close menu after selection and smooth scroll to the section
function closeMenuAndScrollTo(sectionId, buttonId) {
    const navLinks = document.querySelector('.nav-links');
    const section = document.getElementById(sectionId);

    // Smooth scroll to the section
    section.scrollIntoView({ behavior: 'smooth' });

    // Close the hamburger menu
    navLinks.classList.remove('active');

    // Remove 'active' class from all buttons
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));

    // Add 'active' class to the clicked button
    document.getElementById(buttonId).classList.add('active');
}

// Toggle visibility of the "Servicios" section
document.getElementById("servicios-btn").addEventListener("click", function (event) {
    event.preventDefault(); // Evita que el enlace recargue la página
    var serviciosContent = document.getElementById("servicios-content");
    var industriasContent = document.getElementById("industrias-content");

    // Cerrar la sección Industrias si está abierta
    industriasContent.style.display = "none";  // Hide Industrias if open

    // Eliminar la clase 'active' de todos los botones del menú
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));

    // Alternar la sección Servicios
    if (serviciosContent.style.display === "flex") {
        serviciosContent.style.display = "none";
    } else {
        serviciosContent.style.display = "flex";
        this.classList.add('active'); // Añade la clase active si se abre
        serviciosContent.scrollIntoView({ behavior: "smooth" }); // Desplazarse a la sección
    }
});

// Definir la función updateContent
function updateContent(title, text) {
    const contentMenu = document.getElementById('content-menu');
    if (contentMenu) {
        contentMenu.innerHTML = `<h2>${title}</h2><p>${text}</p>`;
        contentMenu.scrollIntoView({ behavior: "smooth" }); // Desplazarse al contenido actualizado
    }
}

// Código que agrega los listeners a los elementos del menú
document.querySelectorAll('.menu-content-item').forEach(item => {
    item.addEventListener('click', function (event) {
        event.preventDefault(); // Evita que el enlace recargue la página
        // Elimina la clase 'active' de todos los elementos
        document.querySelectorAll('.menu-content-item').forEach(el => el.classList.remove('active'));
        // Añade la clase 'active' al elemento actual
        this.classList.add('active');
    });
});


// Listen for clicks on the menu links
document.getElementById('auditorias').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the link from reloading the page
    updateContent('Audits', `At <strong>ARNEZ MIRANDA AND ASSOCIATES</strong>, we use the most advanced international auditing techniques that require planning and coordination of all the resources involved.<br><br>With these techniques, we ensure that the result of each audit is more efficient and cost-effective, developing work plans for each client, considering their market segment and geographic location.
        <ul class="audit-list">
        <li><strong><a href="auditoriasEN.html?scroll=estados-financieros">Financial Statement Audit</a></strong></li>
        <li><strong><a href="auditoriasEN.html?scroll=especiales">Special Audits</a></strong></li>
        <li><strong><a href="auditoriasEN.html?scroll=interna">Internal Audit</a></strong></li>
        <li><strong><a href="auditoriasEN.html?scroll=forense">Forensic Audit</a></strong></li>
        <li><strong><a href="auditoriasEN.html?scroll=seguridad">Information Security Audit</a></strong></li>
         <li><strong><a href="auditoriasEN.html?scroll=normativo">Regulatory Compliance Audit</a></strong></li>
        </ul>`);
});

document.getElementById('outsourcing').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the link from reloading the page
    updateContent('Outsourcing', `At <strong>ARNEZ MIRANDA AND ASSOCIATES</strong>, we aim to meet the information and control needs of companies that do not have the structure to carry out these activities.<br><br>The outsourcing we provide to companies includes:
        <ul class="audit-list">
        <li>Processing company information and issuing required financial reports.</li> 
        <li>Internal audits through compliance reviews according to a work plan designed for that purpose.</li>
        <li><strong><a href="outsourcingEN.html?scroll=interna">Accounting Outsourcing</a></strong></li>
        <li><strong><a href="outsourcingEN.html?scroll=interna1">Internal Audit Outsourcing</a></strong></li>
        </ul>`);
});

document.getElementById('asesoramiento-tributario').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the link from reloading the page
    updateContent('Tax Advisory', `At <strong>ARNEZ MIRANDA AND ASSOCIATES</strong>, we recognize that one of the main current needs of companies is the correct determination of tax liabilities by the National Tax Service (SIN), both at the corporate and individual levels. <br><br>
    Our tax experts understand the fiscal consequences of each decision and work closely with our clients to ensure that no opportunity to save on taxes is missed through the use of all available tax tools.<br><br>
    We keep our clients continuously informed about changes in laws, supreme decrees, and regulatory standards.<br><br>
    <ul class="audit-list">
    <li><strong><a href="tributarioEN.html?scroll=interna">Our Professional Services</a></strong></li>
    </ul>
`);
});

document.getElementById('consultorias').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the link from reloading the page
    updateContent('Consulting', `At <strong>ARNEZ MIRANDA AND ASSOCIATES</strong>, we expand our services to provide comprehensive consulting to institutions, offering the following consulting services.<br><br>
    Our consultants, experts in technical appraisals, inventories, manual preparation, etc., understand our clients' needs and are committed to providing efficient and cost-effective services.<br><br>
    <strong>Our Professional Services:</strong>
    <ul class="audit-list">
    <li><strong><a href="consultoriaEN.html?scroll=evaluaciones">Mid-term, Final, and Post-Project Technical Evaluations.</a></strong></li>
    <li><strong><a href="consultoriaEN.html?scroll=fundraising">Fundraising for non-profit organizations.</a></strong></li>
    <li><strong><a href="consultoriaEN.html?scroll=exp">Systematization of experiences.</a></strong></li>
    <li><strong><a href="consultoriaEN.html?scroll=lineas">Project baseline development.</a></strong></li>
    <li><strong><a href="consultoriaEN.html?scroll=revaluo">Technical Revaluation of Fixed Assets.</a></strong></li>
    <li><strong><a href="consultoriaEN.html?scroll=inventario">Inventories.</a></strong></li>
    <li><strong><a href="consultoriaEN.html?scroll=sistemas">Development and implementation of administrative, accounting, and cost systems.</a></strong></li>
    `);
});

// Toggle visibility of the "Industrias" section
document.getElementById("industrias-btn").addEventListener("click", function (event) {
    event.preventDefault();
    var industriasContent = document.getElementById("industrias-content");
    var serviciosContent = document.getElementById("servicios-content");

    // Cerrar la sección Servicios si está abierta
    serviciosContent.style.display = "none";

    // Eliminar la clase 'active' de todos los botones del menú
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));

    // Alternar la sección Industrias
    if (industriasContent.style.display === "flex") {
        industriasContent.style.display = "none";
    } else {
        industriasContent.style.display = "flex";
        this.classList.add('active'); // Añade la clase active si se abre
        industriasContent.scrollIntoView({ behavior: "smooth" }); // Desplazarse a la sección
    }
});

// Update content dynamically for Industrias
function updateIndustriesContent(title, text) {
    const contentMenu = document.getElementById('content-menu-industries');
    if (contentMenu) {
        contentMenu.innerHTML = `<h2>${title}</h2><p>${text}</p>`;
        contentMenu.scrollIntoView({ behavior: "smooth" }); // Desplazarse al contenido actualizado
    }
}

// Agregar oyentes de eventos para los elementos del menú de industrias
document.getElementById('comercial').addEventListener('click', function (event) {
    event.preventDefault();
    updateIndustriesContent('Commercial', 'ARNEZ MIRANDA AND ASSOCIATES provides comprehensive solutions for the commercial sector, improving profitability and efficiency.');
});

document.getElementById('servicios').addEventListener('click', function (event) {
    event.preventDefault();
    updateIndustriesContent('Services', 'Our firm understands the need for continuous and resilient improvement in service sales.');
});

document.getElementById('industria-manufacturera').addEventListener('click', function (event) {
    event.preventDefault();
    updateIndustriesContent('Industry', 'The industry in today’s globalized world requires constant advice to improve its processes. We are ready to support this continuous improvement.');
});

document.getElementById('construccion').addEventListener('click', function (event) {
    event.preventDefault();
    updateIndustriesContent('Construction', 'Our experience in the construction industry allows us to offer specialized auditing and consulting services for building projects.');
});

document.getElementById('entidades-sin-fines-lucro').addEventListener('click', function (event) {
    event.preventDefault();
    updateIndustriesContent('Non-profit Entities', 'We offer all our experience working with international cooperation to successfully implement projects executed by these institutions.');
});

document.getElementById('cooperativas').addEventListener('click', function (event) {
    event.preventDefault();
    updateIndustriesContent('Cooperatives', 'The corporate sector faces challenging goals in the current context, and our firm as business advisors offers the necessary tools to successfully achieve these objectives.');
});

document.getElementById('sector-publico').addEventListener('click', function (event) {
    event.preventDefault();
    updateIndustriesContent('Public Sector', 'State institutions face long-term challenges, requiring multidisciplinary teams.');
});

document.getElementById('no-clasificados').addEventListener('click', function (event) {
    event.preventDefault();
    updateIndustriesContent('Unclassified', 'This sector has unique characteristics, so it requires tailored solutions to its challenges.');
});


// Función para hacer scroll suave y marcar el botón activo
function scrollToSection(sectionId, buttonId) {
    // Desplazar suavemente a la sección
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });

    // Eliminar la clase active de todos los botones del menú
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));

    // Añadir la clase active al botón actual
    document.getElementById(buttonId).classList.add('active');
}

// Listeners para los botones del menú
document.getElementById('servicios-btn').addEventListener('click', function () {
    closeMenuAndScrollTo2('servicios-content', 'servicios-btn');
});

document.getElementById('industrias-btn').addEventListener('click', function () {
    closeMenuAndScrollTo2('industrias-content', 'industrias-btn');
});

document.getElementById('contactanos-btn').addEventListener('click', function () {
    closeMenuAndScrollTo('contactanos-section', 'contactanos-btn');
});

document.getElementById('quienes-somos-btn').addEventListener('click', function () {
    closeMenuAndScrollTo('quienes-somos-section', 'quienes-somos-btn');
});

//document.getElementById("se-parte-btn").addEventListener("click", function() {
//    window.location.href = "separte.html";
//});

//document.getElementById('se-parte-btn').addEventListener('click', function () {
//    closeMenuAndScrollTo('se-parte-section', 'se-parte-btn');
//});
document.addEventListener("DOMContentLoaded", function () {
    const seParteBtn = document.getElementById('se-parte-btn');
    const quienesSomosBtn = document.getElementById('quienes-somos-btn');

    if (seParteBtn) {
        seParteBtn.addEventListener('click', function (event) {
            const targetSection = document.getElementById('se-parte-section');
            if (targetSection) {
                event.preventDefault();
                targetSection.scrollIntoView({ behavior: "smooth" });
            } else {
                window.location.href = "joinAM.html?scroll=se-parte-section";
            }
        });
    }

    if (quienesSomosBtn) {
        quienesSomosBtn.addEventListener('click', function (event) {
            const targetSection = document.getElementById('quienes-somos-section');
            if (targetSection) {
                event.preventDefault();
                targetSection.scrollIntoView({ behavior: "smooth" });
            } else {
                window.location.href = "aboutus.html?scroll=quienes-somos-section";
            }
        });
    }

    // Detectar el parámetro 'scroll' o el hash en la URL para hacer el desplazamiento suave
    const urlParams = new URLSearchParams(window.location.search);
    const scrollToSection = urlParams.get('scroll') || window.location.hash.slice(1);

    if (scrollToSection) {
        window.addEventListener("load", function () {
            const targetSection = document.getElementById(scrollToSection);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    }
});




// Close menu after selection and smooth scroll to the section
function closeMenuAndScrollTo2(sectionId, buttonId) {
    const navLinks = document.querySelector('.nav-links');
    const section = document.getElementById(sectionId);

    // Smooth scroll to the section
    section.scrollIntoView({ behavior: 'smooth' });

    // Close the hamburger menu
    navLinks.classList.remove('active');
}

// Función para mostrar/ocultar el dropdown de idioma
function toggleDropdown() {
    document.getElementById("languageDropdown").classList.toggle("show");
}

// Cerrar el dropdown si se hace clic fuera de él
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) { // Cambia el número según cuándo quieres activar el efecto
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});