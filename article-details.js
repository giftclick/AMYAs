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
                    width: 100%;
                    height: auto;
                    border-radius: 8px;
                    margin-bottom: 20px;
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
                title: "Cómo reconstruir un negocio con agilidad y crear resiliencia",
                content: "El liderazgo decisivo, la capacidad de respuesta basada en datos y la capacidad de remodelar rápidamente son la clave...",
                image: "/assets/origami.jpg",
                date: "8 jul 2019",
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
