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


// Escucha los clics en los enlaces del menú
document.getElementById('auditorias').addEventListener('click', function (event) {
    event.preventDefault(); // Evita que el enlace recargue la página
    updateContent('Auditorías', `En <strong>ARNEZ MIRANDA Y ASOCIADOS</strong> utilizamos las técnicas más avanzadas de
        auditoría a nivel internacional que requieren una planificación y una coordinación de todos
        los recursos que interviene en ella.<br><br>Con estas técnicas logramos que el resultado de cada auditoría sea más eficiente y
        económica, desarrollando planes de trabajo para cada cliente en particular, considerando su
        segmento de mercado y ubicación geográfica. 
        <ul class="audit-list">
       <li><strong><a href="auditorias.html?scroll=estados-financieros">Auditoría de estados financieros</a></strong></li>
        <li><strong><a href="auditorias.html?scroll=especiales">Auditorias especiales</a></strong></li>
        <li><strong><a href="auditorias.html?scroll=interna">Auditoría Interna</a></strong></li>
        <li><strong><a href="auditorias.html?scroll=forense">Auditoría forence</a></strong></li>
        <li><strong><a href="auditorias.html?scroll=seguridad">Auditoría de Seguridad de la Información</a></strong></li>
         <li><strong><a href="auditorias.html?scroll=normativo">Auditoría de Cumplimiento Normativo</a></strong></li>
        </ul>`);
});

document.getElementById('outsourcing').addEventListener('click', function (event) {
    event.preventDefault(); // Evita que el enlace recargue la página
    updateContent('Outsourcing', `En <strong>ARNEZ MIRANDA Y ASOCIADOS</strong> buscamos satisfacer las necesidades de
información y control que tienen aquellas Empresas que no cuentan con una estructura que
les permita desarrollar dichas actividades.<br><br>El outsourcing que brindamos a las Empresas comprende:
        <ul class="audit-list">
        <li>El procesamiento de la información de la empresa y la emisión de información financiera requerida.</li> 
        <li>Auditorías internas mediante el cumplimiento de revisiones de acuerdo a un plan de trabajo diseñado a tal efecto.</li>
        <li><strong><a href="outsourcing.html?scroll=interna">Outsourcing Contable</a></strong></li>
        <li><strong><a href="outsourcing.html?scroll=interna1">Outsourcing de Auditoría Interna</a></strong></li>
        </ul>`);
});

document.getElementById('asesoramiento-tributario').addEventListener('click', function (event) {
    event.preventDefault(); // Evita que el enlace recargue la página
    updateContent('Asesoramiento Tributario', `En <strong>ARNEZ MIRANDA Y ASOCIADOS</strong> reconocemos como una de las principales
    necesidades actuales de las empresas es la correcta determinación de la carga tributaria por
    el Servicio de Impuestos Nacionales SIN. <br><br>
    Nuestros profesionales expertos en tributación, comprenden las consecuencias fiscales
    implícitas en cada decisión; para lo cual trabajan en forma conjunta con nuestros clientes
    para asegurar que no se pierda ninguna oportunidad de optimizar en el pago de impuestos
    mediante el uso de todas las herramientas fiscales disponibles.<br><br>
    Mantenemos permanentemente informados a nuestros clientes sobre los cambios en leyes y
    decretos supremos y normas reglamentarias.<br><br>
    <ul class="audit-list">
    <li><strong><a href="tributario.html?scroll=interna">Nuestros Servicios Profesionales</a></strong></li>
    </ul>
`);
});


document.getElementById('consultorias').addEventListener('click', function (event) {
    event.preventDefault(); // Evita que el enlace recargue la página
    updateContent('Consultoría', `En <strong>ARNEZ MIRANDA Y ASOCIADOS</strong> ampliamos nuestros servicios para brindar un
    asesoramiento integral a las instituciones, por lo que ofrecemos los siguientes servicios de
    consultoría.<br><br>
    Nuestros consultores expertos en revaluos técnicos, inventarios, elaboración de manuales,
etc. Comprenden la necesidad de nuestros clientes y se encuentran comprometidos en
brindar un servicio eficiente y económico.<br><br>
    <strong>Nuestros Servicios Profesionales:</strong><ul class="audit-list">
    <li><strong><a href="consultoria.html?scroll=evaluaciones">Evaluaciones Técnicas de Medio Término, Finales y Post a Proyectos.</a></strong></li>
    <li><strong><a href="consultoria.html?scroll=fundraising">Fundraising para entidades sin fines de lucro.</a></strong></li>
    <li><strong><a href="consultoria.html?scroll=exp">Sistematización de experiencias.</a></strong></li>
    <li><strong><a href="consultoria.html?scroll=lineas">Líneas base de proyectos.</a></strong></li>
    <li><strong><a href="consultoria.html?scroll=revaluo">Revaluó Técnico de Activos Fijos.</a></strong></li>
    <li><strong><a href="consultoria.html?scroll=inventario">Inventarios.</a></strong></li>
    <li><strong><a href="consultoria.html?scroll=sistemas">Elaboración e implementación de sistemas administrativos contables y de costos.</a></strong></li>
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

// Add event listeners for industries menu items
document.getElementById('comercial').addEventListener('click', function (event) {
    event.preventDefault();
    updateIndustriesContent('Comercial', 'Arnez Miranda & Asociados brinda soluciones integrales para el sector comercial, mejorando la rentabilidad y eficiencia.');
});

document.getElementById('servicios').addEventListener('click', function (event) {
    event.preventDefault();
    updateIndustriesContent('Servicios', 'Nuestra firma entiende la necesidad de mejora continua y resiliente en la venta de servicios.');
});

document.getElementById('industria-manufacturera').addEventListener('click', function (event) {
    event.preventDefault();
    updateIndustriesContent('Industria', 'La industria en el actual mundo globalizado requiere asesoría constante para la mejora de sus procesos. Estamos dispuestos a acompañar esta mejora continua.');
});

document.getElementById('construccion').addEventListener('click', function (event) {
    event.preventDefault();
    updateIndustriesContent('Construcción', 'Nuestra experiencia en la industria de la construcción nos permite ofrecer auditoría y asesoramiento especializado en proyectos de edificación.');
});

document.getElementById('entidades-sin-fines-lucro').addEventListener('click', function (event) {
    event.preventDefault();
    updateIndustriesContent('Entidades sin fines de lucro', 'Brindamos toda nuestra experiencia de trabajo con la cooperación internacional para el cumplimiento exitoso de los proyectos ejecutados por estas instituciones.');
});

document.getElementById('cooperativas').addEventListener('click', function (event) {
    event.preventDefault();
    updateIndustriesContent('Cooperativas', 'El sector corporativo enfrenta objetivos desafiantes ante la coyuntura actual y nuestra firma como asesores de negocios ofrece las herramientas necesarias para el cumplimiento exitoso de estos objetivos.');
});

document.getElementById('sector-publico').addEventListener('click', function (event) {
    event.preventDefault();
    updateIndustriesContent('Sector público', 'Las instituciones estatales presentan desafíos a largo plazo, por lo que demandan equipos multidisciplinarios.');
});

document.getElementById('no-clasificados').addEventListener('click', function (event) {
    event.preventDefault();
    updateIndustriesContent('No Clasificados', 'Este sector tiene características peculiares, por lo que requiere soluciones a medida de sus desafíos.');
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
                window.location.href = "separte.html?scroll=se-parte-section";
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
                window.location.href = "quienessomos.html?scroll=quienes-somos-section";
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