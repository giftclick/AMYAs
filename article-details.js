export class ArticleDetail extends HTMLElement {
    constructor() {
        super();

        const params = new URLSearchParams(window.location.search);
        const articleId = params.get("id");

        const articles = {
            origami: {
                title: "Cómo reconstruir un negocio con agilidad y crear resiliencia",
                content: "El liderazgo decisivo, la capacidad de respuesta basada en datos y la capacidad de remodelar rápidamente son clave para el éxito.",
                image: "./assets/origami.jpg",
                date: "8 jul 2019",
            },
            robot: {
                title: "Is your portfolio fit for the future or fashioned only on the past?",
                content: "La clave para un futuro próspero es la innovación y la sostenibilidad.",
                image: "./assets/robot.jpg",
                date: "8 jul 2019",
            },
            negocio: {
                title: "El futuro de los negocios: Innovación y sostenibilidad",
                content: "La tecnología y la resiliencia son fundamentales en el mundo actual.",
                image: "./assets/negocio.jpg",
                date: "8 jul 2019",
            },
        };

        const article = articles[articleId];
        const template = document.createElement("template");

        if (article) {
            template.innerHTML = `
                <div class="article">
                    <img src="${article.image}" alt="${article.title}">
                    <h1>${article.title}</h1>
                    <p>${article.content}</p>
                    <span class="date">${article.date}</span>
                </div>
            `;
        } else {
            template.innerHTML = `<h1>Artículo no encontrado</h1>`;
        }

        this.appendChild(template.content.cloneNode(true));
    }
}

// Verificar el registro
if (!customElements.get('app-article-detail')) {
    customElements.define('app-article-detail', ArticleDetail);
    console.log("Componente app-article-detail registrado correctamente.");
}

// Agregar al DOM cuando esté listo
document.addEventListener("DOMContentLoaded", () => {
    const articleContent = document.getElementById("article-content");
    if (articleContent) {
        try {
            const detailComponent = document.createElement("app-article-detail");
            articleContent.appendChild(detailComponent);
        } catch (error) {
            console.error("Error al crear app-article-detail:", error);
        }
    }
});
