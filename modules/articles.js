export class Articles extends HTMLElement {
    constructor() {
        super();
        const template = document.createElement('template');
        template.innerHTML = `
        <div class="publish-section">
        <h1>Publicaciones recientes</h1>
        <div class="card-container">
            <div class="card">
                <img src="./assets/fun.JPG" alt="Origami on colored paper">
                <div class="card-content">
                    <h2><a href="articulo.html?id=origami">FUNDRAISING</a></h2>
                    <p>En el mundo y el país existe una creciente demanda de financiación de proyectos que son captados a través de estrategias; una de ellas es el fundraising, que al ser una estrategia...
                    </p>
                    <span class="date">20 ene 2025</span>
                </div>
            </div>
            <div class="card">
                <img src="./assets/flower.jpg" alt="Origami on colored paper" id="ia">
                <div class="card-content">
                    <h2><a href="articulo.html?id=negocio">Inteligencia artificial (IA)</a></h2>
                    <p>Las organizaciones tienen diferentes necesidades y en un mundo globalizado se debe tener una visión innovadora, reducir costos, incrementar ingresos, minimizar los riesgos y amenazas externas.</p>
                    <span class="date">20 ene 2025</span>
                </div>
            </div>
            <div class="card">
                <img src="./assets/articleinter.jpg" alt="Robot and technology visualization">
                <div class="card-content">
                    <h2><a href="articulo.html?id=robot">Auditoría interna</a></h2>
                    <p>La auditoría interna es un equilibrio que busca el bien común de la empresa, accionistas y del país. Se realiza de forma independiente y objetiva, siendo su objetivo la mejora...</p>
                    <span class="date">20 ene 2025</span>
                </div>
            </div>
        </div>

    </div>
        `;
        this.appendChild(template.content.cloneNode(true));
    }
}

customElements.define('app-articles', Articles);