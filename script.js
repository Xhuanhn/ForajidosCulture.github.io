// Obtener elementos del DOM
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-image");
const modalTitle = document.getElementById("modal-title");
const closeModal = document.querySelector(".close");
const categorySelect = document.getElementById("category-select");
const searchInput = document.querySelector(".search-bar-inline input");
const imageCards = document.querySelectorAll(".image-card");

// Abrir el modal al hacer clic en una imagen
imageCards.forEach((card) => {
    const image = card.querySelector("img");
    const text = card.querySelector("p").textContent;

    image.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = image.src;
        modalTitle.textContent = text;
    });
});

// Cerrar modal al hacer clic en el botón de cierre o fuera del contenido
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// Función para filtrar imágenes
function filterImages() {
    const selectedCategory = categorySelect.value.toLowerCase();
    const searchText = searchInput.value.toLowerCase();

    imageCards.forEach(card => {
        const cardCategory = card.getAttribute("data-category").toLowerCase();
        const cardText = card.querySelector("p").textContent.toLowerCase();

        // Mostrar u ocultar según el filtro
        if (
            (selectedCategory === "all" || cardCategory === selectedCategory) &&
            cardText.includes(searchText)
        ) {
            card.style.display = "block"; // Mostrar imagen
        } else {
            card.style.display = "none"; // Ocultar imagen
        }
    });
}

// Event listeners para aplicar filtros dinámicamente
categorySelect.addEventListener("change", filterImages);
searchInput.addEventListener("input", filterImages);

// Inicializar mostrando todas las imágenes
filterImages();
