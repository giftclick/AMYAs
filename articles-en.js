export class Articles extends HTMLElement {
    constructor() {
        super();
        const template = document.createElement('template');
        template.innerHTML = `
        <div class="publish-section">
        <h1>Recent Posts</h1>
        <div class="card-container">
            <div class="card">
                <img src="./assets/origami.jpg" alt="Origami on colored paper">
                <div class="card-content">
                    <h2><a href="#">How to rebuild a business with agility and create resilience</a></h2>
                    <p>Decisive leadership, data-driven responsiveness, and the ability to quickly reshape are key...</p>
                    <span class="date">Jul 8, 2019</span>
                </div>
            </div>
            <div class="card">
                <img src="./assets/robot.jpg" alt="Robot and technology visualization">
                <div class="card-content">
                    <h2><a href="#">Is your portfolio fit for the future or fashioned only on the past?</a></h2>
                    <p>Decisive leadership, data-driven responsiveness, and the ability to quickly reshape are key...</p>
                    <span class="date">Jul 8, 2019</span>
                </div>
            </div>
            <div class="card">
                <img src="./assets/negocio.jpg" alt="Business concept on colored paper">
                <div class="card-content">
                    <h2><a href="#">Is your portfolio fit for the future or fashioned only on the past?</a></h2>
                    <p>Decisive leadership, data-driven responsiveness, and the ability to quickly reshape are key...</p>
                    <span class="date">Jul 8, 2019</span>
                </div>
            </div>
        </div>

    </div>
        `;
        this.appendChild(template.content.cloneNode(true));
    }
}

customElements.define('app-articles', Articles);
