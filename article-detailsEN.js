export class ArticleDetail extends HTMLElement {
    constructor() {
        super();

        // Crear Shadow DOM
        const shadow = this.attachShadow({ mode: "open" });

        // Crear el template para HTML y CSS
        const template = document.createElement("template");
        template.innerHTML = `
            <style>
                .article {
                    max-width: 800px;
                    margin: 20px auto;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    background-color: #ffffff;
                    font-family: 'Arial', sans-serif;
                }
                .article img {
                    width: 70%;
                    height: auto;
                    border-radius: 8px;
                    margin-bottom: 20px;
                    margin: auto;
                    align-content: center;
                    display: flex;
                }
                .article h1 {
                    font-size: 2.5rem;
                    color: #333;
                    margin-bottom: 20px;
                }
                .article p {
                    font-size: 1.1rem;
                    line-height: 1.6;
                    color: #555;
                    margin-bottom: 20px;
                }
                .article .date {
                    font-size: 0.9rem;
                    color: #888;
                    text-align: right;
                    font-style: italic;
                    margin-top: 20px;
                }
            </style>
            <div class="article">
                <!-- Contenido dinámico aquí -->
            </div>
        `;

        // Agregar el template al Shadow DOM
        shadow.appendChild(template.content.cloneNode(true));

        // Referencia al contenedor dinámico
        const container = shadow.querySelector(".article");

        // Obtener parámetros de la URL
        const params = new URLSearchParams(window.location.search);
        const articleId = params.get("id");

        // Datos de ejemplo para artículos
        const articles = {
            origami: {
                title: "FUNDRAISING",
                content: "There is a growing demand for project financing worldwide and in the country, which is captured through strategies; one of them is fundraising, which as a public relations strategy designed to raise resources over time becomes an increasingly professionalized practice by nonprofit institutions; this is due to the motivation and inspiration offered by volunteers that, combined with knowledge in many areas such as marketing, IT.<br><br>The goal of fundraising is to support organizations through the direct participation and commitment of their members, through awareness-raising, an essential tool for raising funds. However, an important factor when raising funds is transparency in the management of money regarding its destination and the impact of the collections.",
                image: "./assets/fun.JPG",
                date: "20 Jan 2025",
            },
            robot: {
                title: "Internal Audit",
                content: "Internal audit is a balance that seeks the common good of the company, shareholders, and the country. It is carried out independently and objectively, with the aim of improving the entity's operations.<br><br>Internal audit evaluates the internal controls of an entity, including business management and accounting processes.",
                image: "./assets/articleinter.jpg",
                date: "20 Jan 2025",
            },
            negocio: {
                title: "Artificial Intelligence (AI)",
                content: "Organizations have different needs and in a globalized world, one must have an innovative vision, reduce costs, increase income, and minimize external risks and threats.<br><br>In the business field, AI is still at an experimental stage and is applied only at the operational level, without being an integral part of business decision-making. However, this can change quickly if the level of trust and transparency of algorithms is improved.<br><br>The implementation of AI can save time and effort, and make the desired audit results robust and well-supported. However, while AI has managed to solve and operationalize certain activities, it cannot yet replace analysis and reasoning.",
                image: "./assets/flower.jpg",
                date: "20 Jan 2025",
            },
        };
        
        // Buscar el artículo correspondiente
        const article = articles[articleId];

        // Renderizar contenido
        if (article) {
            container.innerHTML = `
                <img src="${article.image}" alt="${article.title}">
                <h1>${article.title}</h1>
                <p>${article.content}</p>
                <span class="date">${article.date}</span>
            `;
        } else {
            container.innerHTML = `<h1>Artículo no encontrado</h1>`;
        }
    }
}

// Registrar el componente
if (!customElements.get("app-article-detail")) {
    customElements.define("app-article-detail", ArticleDetail);
    console.log("Componente app-article-detail registrado correctamente.");
}

// Insertar el componente en el DOM cuando el contenido esté cargado
document.addEventListener("DOMContentLoaded", () => {
    const articleContent = document.getElementById("article-content");
    if (articleContent) {
        try {
            const detailComponent = document.createElement("app-article-detail");
            articleContent.appendChild(detailComponent);
        } catch (error) {
            console.error("Error al crear o agregar el componente:", error);
        }
    }
});
