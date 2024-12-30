export class Articles extends HTMLElement {
    constructor() {
        super();
        const template = document.createElement('template');
        template.innerHTML = `
        <div class="publish-section">
        <h1>Publicaciones recientes</h1>
        <div class="card-container">
            <div class="card">
                <img src="./assets/origami.jpg" alt="Origami on colored paper">
                <div class="card-content">
                    <h2><a href="articulo.html?id=origami">Cómo reconstruir un negocio con agilidad y crear resiliencia</a></h2>
                    <p>En un entorno empresarial en constante cambio, la capacidad de adaptación se ha convertido en un pilar fundamental para la supervivencia y el éxito.</p>
                    <span class="date">8 jul 2019</span>
                </div>
            </div>
            <div class="card">
                <img src="./assets/robot.jpg" alt="Robot and technology visualization">
                <div class="card-content">
                    <h2><a href="articulo.html?id=robot">Is your portfolio fit for the future or fashioned only on the past?</a></h2>
                    <p>In an era defined by rapid technological advancements and shifting market dynamics, the composition of your investment portfolio speaks volumes about your readiness for the future.</p>
                    <span class="date">8 jul 2019</span>
                </div>
            </div>
            <div class="card">
                <img src="./assets/negocio.jpg" alt="Origami on colored paper">
                <div class="card-content">
                    <h2><a href="articulo.html?id=negocio">El futuro de los negocios: Innovación y sostenibilidad</a></h2>
                    <p>El mundo empresarial enfrenta un punto de inflexión donde la innovación y la sostenibilidad no son opcionales, sino imprescindibles.</p>
                    <span class="date">8 jul 2019</span>
                </div>
            </div>
        </div>

    </div>
        `;
        this.appendChild(template.content.cloneNode(true));
    }
}

customElements.define('app-articles', Articles);