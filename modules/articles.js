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
                    <p>El liderazgo decisivo, la capacidad de respuesta basada en datos y la capacidad de remodelar
                        rápidamente son la clave...</p>
                    <span class="date">8 jul 2019</span>
                </div>
            </div>
            <div class="card">
                <img src="./assets/robot.jpg" alt="Robot and technology visualization">
                <div class="card-content">
                    <h2><a href="articulo.html?id=robot">Is your portfolio fit for the future or fashioned only on the past?</a></h2>
                    <p>El liderazgo decisivo, la capacidad de respuesta basada en datos y la capacidad de remodelar
                        rápidamente son la clave...</p>
                    <span class="date">8 jul 2019</span>
                </div>
            </div>
            <div class="card">
                <img src="./assets/negocio.jpg" alt="Origami on colored paper">
                <div class="card-content">
                    <h2><a href="articulo.html?id=negocio">Is your portfolio fit for the future or fashioned only on the past?</a></h2>
                    <p>El liderazgo decisivo, la capacidad de respuesta basada en datos y la capacidad de remodelar
                        rápidamente son la clave...</p>
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