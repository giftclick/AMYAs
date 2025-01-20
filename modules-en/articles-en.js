export class Articles extends HTMLElement {
    constructor() {
        super();
        const template = document.createElement('template');
        template.innerHTML = `
        <div class="publish-section">
        <h1>Recent Publications</h1>
        <div class="card-container">
            <div class="card">
                <img src="./assets/fun.JPG" alt="Origami on colored paper">
                <div class="card-content">
                    <h2><a href="articulo.html?id=origami">FUNDRAISING</a></h2>
                    <p>There is a growing demand for project financing worldwide and in the country, which is captured through strategies; one of them is fundraising, which as a strategy...</p>
                    <span class="date">20 Jan 2025</span>
                </div>
            </div>
            <div class="card">
                <img src="./assets/flower.jpg" alt="Origami on colored paper" id="ia">
                <div class="card-content">
                    <h2><a href="articulo.html?id=negocio">Artificial Intelligence (AI)</a></h2>
                    <p>Organizations have different needs and in a globalized world, one must have an innovative vision, reduce costs, increase income, and minimize external risks and threats.</p>
                    <span class="date">20 Jan 2025</span>
                </div>
            </div>
            <div class="card">
                <img src="./assets/articleinter.jpg" alt="Robot and technology visualization">
                <div class="card-content">
                    <h2><a href="articulo.html?id=robot">Internal Audit</a></h2>
                    <p>Internal audit is a balance that seeks the common good of the company, shareholders, and the country. It is carried out independently and objectively, with the aim of improvement...</p>
                    <span class="date">20 Jan 2025</span>
                </div>
            </div>
        </div>

    </div>
        `;
        this.appendChild(template.content.cloneNode(true));
    }
}

customElements.define('app-articles', Articles);
