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
                content: "En un entorno empresarial en constante cambio, la capacidad de adaptación se ha convertido en un pilar fundamental para la supervivencia y el éxito. Reconstruir un negocio con agilidad implica desarrollar estrategias que permitan responder rápidamente a los desafíos del mercado y a las necesidades cambiantes de los clientes. Esto requiere liderazgo decisivo, donde los líderes sean capaces de tomar decisiones informadas y oportunas basadas en datos confiables. <br><br>La capacidad de respuesta basada en datos permite identificar patrones, anticipar tendencias y minimizar riesgos. Además, la capacidad de remodelar rápidamente procesos, productos y modelos de negocio asegura que la organización no solo sobreviva, sino que prospere en tiempos de incertidumbre. La resiliencia empresarial no es un destino, sino un proceso continuo que se construye a través de la innovación, la colaboración y el aprendizaje constante.",
                image: "./assets/origami.jpg",
                date: "8 jul 2019",
            },
            robot: {
                title: "Is your portfolio fit for the future or fashioned only on the past?",
                content: "In an era defined by rapid technological advancements and shifting market dynamics, the composition of your investment portfolio speaks volumes about your readiness for the future. A forward-looking portfolio is one that embraces innovation, integrates sustainable practices, and remains agile in the face of disruption. Relying solely on past performance is no longer sufficient; instead, investors must evaluate emerging trends such as artificial intelligence, renewable energy, and digital transformation. <br><br> Sustainability is not just a buzzword but a necessity for long-term growth, as businesses and markets increasingly prioritize environmental, social, and governance (ESG) criteria. Diversification across industries and geographies further mitigates risk and enhances resilience. The question remains: Is your portfolio a relic of the past, or is it strategically positioned to thrive in the future? The answer lies in your willingness to innovate, adapt, and invest in a vision that aligns with the evolving global landscape.",
                image: "./assets/robot.jpg",
                date: "8 jul 2019",
            },
            negocio: {
                title: "El futuro de los negocios: Innovación y sostenibilidad",
                content: "El mundo empresarial enfrenta un punto de inflexión donde la innovación y la sostenibilidad no son opcionales, sino imprescindibles. La tecnología juega un papel crucial en esta transformación, permitiendo a las empresas automatizar procesos, mejorar la eficiencia y ofrecer experiencias personalizadas a los clientes. Sin embargo, la innovación no debe ser a expensas del medio ambiente o la sociedad. La sostenibilidad es un principio que debe integrarse en cada nivel de la operación empresarial, desde la cadena de suministro hasta la estrategia corporativa. <br><br>Empresas que priorizan la responsabilidad social y ambiental no solo cumplen con las expectativas regulatorias, sino que también ganan la lealtad de los consumidores y atraen talento comprometido con valores compartidos. En este contexto, la resiliencia también es clave, ya que las organizaciones deben estar preparadas para adaptarse rápidamente a las disrupciones y mantener su competitividad. El futuro de los negocios pertenece a aquellos que pueden equilibrar la innovación con la sostenibilidad, asegurando un impacto positivo tanto a corto como a largo plazo.",
                image: "./assets/negocio.jpg",
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
