// Toggle the navigation menu
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

// Toggle visibility of the "Services" section
document.getElementById("services-btn").addEventListener("click", function (event) {
    event.preventDefault(); // Prevents the link from reloading the page
    var servicesContent = document.getElementById("services-content");
    var industriesContent = document.getElementById("industries-content");

    // Close the Industries section if it's open
    industriesContent.style.display = "none";  // Hide Industries if open

    // Remove 'active' class from all menu buttons
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));

    // Toggle the Services section
    if (servicesContent.style.display === "flex") {
        servicesContent.style.display = "none";
    } else {
        servicesContent.style.display = "flex";
        this.classList.add('active'); // Add the active class if it's opened
        servicesContent.scrollIntoView({ behavior: "smooth" }); // Scroll to the section
    }
});

// Define the updateContent function
function updateContent(title, text) {
    const contentMenu = document.getElementById('content-menu');
    if (contentMenu) {
        contentMenu.innerHTML = `<h2>${title}</h2><p>${text}</p>`;
        contentMenu.scrollIntoView({ behavior: "smooth" }); // Scroll to the updated content
    }
}

// Code to add event listeners to the menu items
document.querySelectorAll('.menu-content-item').forEach(item => {
    item.addEventListener('click', function (event) {
        event.preventDefault(); // Prevents the link from reloading the page
        // Remove the 'active' class from all elements
        document.querySelectorAll('.menu-content-item').forEach(el => el.classList.remove('active'));
        // Add the 'active' class to the current element
        this.classList.add('active');
    });
});

// Event listeners for the main menu items
document.getElementById('audits').addEventListener('click', function (event) {
    event.preventDefault(); // Prevents the link from reloading the page
    updateContent('Audits', `At <strong>ARNEZ MIRANDA Y ASOCIADOS</strong>, we use the most advanced auditing techniques at an international level that require planning and coordination of all resources involved.<br><br>With these techniques, we ensure that the result of each audit is more efficient and cost-effective, developing work plans for each client, considering their market segment and geographical location. 
        <ul class="audit-list">
       <li><strong><a href="audits.html?scroll=financial-statements">Financial Statement Audit</a></strong></li>
        <li><strong><a href="audits.html?scroll=special">Special Audits</a></strong></li>
        <li><strong><a href="audits.html?scroll=internal">Internal Audit</a></strong></li>
        <li><strong><a href="audits.html?scroll=forensic">Forensic Audit</a></strong></li>
        </ul>`);
});

document.getElementById('outsourcing').addEventListener('click', function (event) {
    event.preventDefault(); // Prevents the link from reloading the page
    updateContent('Outsourcing', `At <strong>ARNEZ MIRANDA Y ASOCIADOS</strong>, we aim to meet the information and control needs of companies that do not have the structure to carry out these activities.<br><br>The outsourcing services we provide to companies include:
        <ul class="audit-list">
        <li>Processing company information and issuing required financial reports.</li> 
        <li>Internal audits through compliance reviews according to a designed work plan.</li>
        <li><strong><a href="outsourcing.html?scroll=internal">Accounting Outsourcing</a></strong></li>
        <li><strong><a href="outsourcing.html?scroll=internal1">Internal Audit Outsourcing</a></strong></li>
        </ul>`);
});

document.getElementById('tax-advisory').addEventListener('click', function (event) {
    event.preventDefault(); // Prevents the link from reloading the page
    updateContent('Tax Advisory', `At <strong>ARNEZ MIRANDA Y ASOCIADOS</strong>, we recognize that one of the main current needs of companies is the correct determination of the tax burden by the National Tax Service (SIN), both at the corporate and individual level. <br><br>
    Our expert tax professionals understand the fiscal consequences of each decision; they work closely with our clients to ensure that no opportunity to economize on taxes is missed by utilizing all available fiscal tools.<br><br>
    We keep our clients constantly informed about changes in laws, decrees, and regulatory standards.<br><br>
    <ul class="audit-list">
    <li><strong><a href="tax.html?scroll=internal">Our Professional Services</a></strong></li>
    </ul>
`);
});

document.getElementById('consulting').addEventListener('click', function (event) {
    event.preventDefault(); // Prevents the link from reloading the page
    updateContent('Consulting', `At <strong>ARNEZ MIRANDA Y ASOCIADOS</strong>, we expand our services to provide comprehensive advice to institutions, offering the following consulting services.<br><br>
    Our consultants, experts in technical revaluations, inventories, manual preparation, etc., understand the needs of our clients and are committed to providing efficient and cost-effective services.<br><br>
    <strong>Our Professional Services:</strong><ul class="audit-list">
    <li>Mid-term, Final, and Post Project Technical Evaluations.</li>
    <li>Fundraising for non-profit entities.</li>
    <li>Experience systematization.</li>
    <li>Project baseline development.</li>    
    <li>Technical Revaluation of Fixed Assets.</li>
    <li>Inventories.</li>
    <li>Preparation and implementation of administrative, accounting, and cost systems.</li></ul>
`);
});

// Toggle visibility of the "Industries" section
document.getElementById("industries-btn").addEventListener("click", function (event) {
    event.preventDefault();
    var industriesContent = document.getElementById("industries-content");
    var servicesContent = document.getElementById("services-content");

    // Close the Services section if it's open
    servicesContent.style.display = "none";

    // Remove 'active' class from all menu buttons
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));

    // Toggle the Industries section
    if (industriesContent.style.display === "flex") {
        industriesContent.style.display = "none";
    } else {
        industriesContent.style.display = "flex";
        this.classList.add('active'); // Add the active class if it's opened
        industriesContent.scrollIntoView({ behavior: "smooth" }); // Scroll to the section
    }
});

// Update content dynamically for Industries
function updateIndustriesContent(title, text) {
    const contentMenu = document.getElementById('content-menu-industries');
    if (contentMenu) {
        contentMenu.innerHTML = `<h2>${title}</h2><p>${text}</p>`;
        contentMenu.scrollIntoView({ behavior: "smooth" }); // Scroll to the updated content
    }
}

// Add event listeners for industries menu items
document.getElementById('commercial').addEventListener('click', function (event) {
    event.preventDefault();
    updateIndustriesContent('Commercial', 'Arnez Miranda & Asociados provides integrated solutions for the commercial sector, improving profitability and efficiency.');
});

document.getElementById('services').addEventListener('click', function (event) {
    event.preventDefault();
    updateIndustriesContent('Services', 'Our firm understands the need for continuous and resilient improvement in the sale of services.');
});

document.getElementById('manufacturing-industry').addEventListener('click', function (event) {
    event.preventDefault();
    updateIndustriesContent('Industry', 'The industry in today\'s globalized world requires constant advice to improve its processes. We are ready to support this continuous improvement.');
});

document.getElementById('construction').addEventListener('click', function (event) {
    event.preventDefault();
    updateIndustriesContent('Construction', 'Our experience in the construction industry allows us to offer specialized audit and advisory services for building projects.');
});

document.getElementById('non-profit-entities').addEventListener('click', function (event) {
    event.preventDefault();
    updateIndustriesContent('Non-profit Entities', 'We bring all our experience working with international cooperation to ensure the successful completion of projects executed by these institutions.');
});

document.getElementById('cooperatives').addEventListener('click', function (event) {
    event.preventDefault();
    updateIndustriesContent('Cooperatives', 'The corporate sector faces challenging objectives in the current context, and our firm, as business advisors, offers the necessary tools for the successful achievement of these objectives.');
});

document.getElementById('public-sector').addEventListener('click', function (event) {
    event.preventDefault();
    updateIndustriesContent('Public Sector', 'State institutions face long-term challenges and require multidisciplinary teams.');
});

document.getElementById('unclassified').addEventListener('click', function (event) {
    event.preventDefault();
    updateIndustriesContent('Unclassified', 'This sector has unique characteristics, requiring tailored solutions to its challenges.');
});

// Function to smooth scroll and highlight the active button
function scrollToSection(sectionId, buttonId) {
    // Smooth scroll to the section
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });

    // Remove the active class from all menu buttons
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));

    // Add the active class to the current button
    document.getElementById(buttonId).classList.add('active');
}

// Listeners for menu buttons
document.getElementById('services-btn').addEventListener('click', function () {
    closeMenuAndScrollTo('services-content', 'services-btn');
});

document.getElementById('industries-btn').addEventListener('click', function () {
    closeMenuAndScrollTo('industries-content', 'industries-btn');
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