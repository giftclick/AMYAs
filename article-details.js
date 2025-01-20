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
                title: "FUNDRAISING",
                content: "En el mundo y el país existe una creciente demanda de financiación de proyectos que son captados a través de estrategias; una de ellas es el fundraising, que al ser una estrategia de relaciones públicas diseñada para captar recursos a medida que pasa el tiempo se convierte en una práctica cada vez más profesionalizada por las instituciones sin fines de lucro; esto debido a la motivación e inspiración ofrecida por los voluntarios que sumado al conocimiento muchas áreas como ser marketing, IT.<br><br>Con el fundraising se pretende apoyar a las organizaciones mediante la participación directa y compromiso de sus miembros, a través de la sensibilización, herramienta esencial para recaudar fondos. Sin embargo, un factor importante a la hora de recaudar fondos es la transparencia en el manejo del dinero en cuanto a su destino e impacto de las recaudaciones.",
                image: "./assets/fun.JPG",
                date: "20 ene 2025",
            },
            robot: {
                title: "Auditoría interna",
                content: "La auditoría interna es un equilibrio que busca el bien común de la empresa, accionistas y del país. Se realiza de forma independiente y objetiva, siendo su objetivo la mejora de las operaciones de la entidad.<br><br>La auditoría interna evalúa los controles internos de una entidad incluyendo la gestión empresarial y los procesos contables.",
                image: "./assets/articleinter.jpg",
                date: "8 jul 2019",
            },
            negocio: {
                title: "Inteligencia artificial (IA)",
                content: "Las organizaciones tienen diferentes necesidades y en un mundo globalizado se debe tener una visión innovadora, reducir costos, incrementar ingresos, minimizar los riesgos y amenazas externas.<br><br>En el ámbito empresarial, la IA aún está en una etapa experimental y se aplica a nivel operativo nada más, sin ser una parte integrante de la toma de decisiones en los negocios. Sin embargo, esto puede cambiar rápidamente si se mejora el nivel de confianza y transparencia de los algoritmos.<br><br>La implementación de IA puede ahorrar tiempo y esfuerzo, y hacer que los resultados deseados de la auditoría sean sólidos y estén bien respaldados, sin embargo, si bien se ha logrado que la IA resuelva y operativice ciertas actividades, aún no puede reemplazar el análisis y razonamiento.",
                image: "./assets/flower.jpg",
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
