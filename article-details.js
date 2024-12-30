export class ArticleDetail extends HTMLElement {
    constructor() {
        super();

        // Obtener el ID del artículo desde la URL
        const params = new URLSearchParams(window.location.search);
        const articleId = params.get("id");

        // Definición de artículos (puedes expandir esto según necesites)
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

        // Obtener el artículo correspondiente
        const article = articles[articleId];

        // Crear un contenedor dinámico para el artículo
        const template = document.createElement("template");

        if (article) {
            // Si el artículo existe, mostrar su contenido
            template.innerHTML = `
                <div class="article">
                    <img src="${article.image}" alt="${article.title}">
                    <h1>${article.title}</h1>
                    <p>${article.content}</p>
                    <span class="date">${article.date}</span>
                </div>
            `;
        } else {
            // Si no existe, mostrar un mensaje de error
            template.innerHTML = `<h1>Artículo no encontrado</h1>`;
        }

        // Agregar el contenido dinámico al DOM
        this.appendChild(template.content.cloneNode(true));
    }
}

// Definir el componente personalizado
customElements.define('app-article-detail', ArticleDetail);

// Montar el componente dinámico en el contenedor
const articleContent = document.getElementById("article-content");
if (articleContent) {
    const detailComponent = document.createElement("app-article-detail");
    articleContent.appendChild(detailComponent);
}
