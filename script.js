// Productos (ejemplo de los productos disponibles)
const productos = [
    { title: "Tinaco de 500L", description: "Tinaco de 500 litros, ideal para hogares pequeños.", image: "assets/Tinaco1.png", cost: 2200, category: "500L" },
    { title: "Tinaco de 1000L", description: "Tinaco de 1000 litros, ideal para hogares grandes. Resistente y duradero.", image: "assets/imagen2.jpg", cost: 3500, category: "1000L" },
    { title: "Tinaco de 1500L", description: "Tinaco de 1500 litros, adecuado para viviendas de tamaño medio.", image: "assets/imagen3.png", cost: 4000, category: "1500L" },
    { title: "Tinaco de 2000L", description: "Tinaco de 2000 litros, perfecto para comunidades o negocios pequeños.", image: "assets/imagen4.jpg", cost: 4500, category: "2000L" },
    { title: "Tinaco de 2500L", description: "Tinaco de 2500 litros ideal para riego agrícola o almacenamiento grande.", image: "assets/imagen5.png", cost: 5200, category: "2500L" },
    { title: "Tinaco de 3000L", description: "Tinaco de 3000 litros, resistente para industrias o grandes construcciones.", image: "assets/imagen6.png", cost: 6000, category: "3000L" },
    { title: "Tinaco de 3500L", description: "Tinaco de 3500 litros, ideal para grandes fincas y almacenes.", image: "assets/imagen7.jpg", cost: 6500, category: "3500L" },
    { title: "Tinaco de 4000L", description: "Tinaco de 4000 litros, adecuado para comunidades grandes.", image: "assets/imagen8.jpg", cost: 7000, category: "4000L" },
    { title: "Tinaco de 5000L", description: "Tinaco de 5000 litros, ideal para grandes instalaciones comerciales.", image: "assets/imagen9.jpg", cost: 8000, category: "5000L" },
    { title: "Tinaco de 6000L", description: "Tinaco de 6000 litros, excelente para grandes proyectos industriales.", image: "assets/imagen10.jpg", cost: 9000, category: "6000L" }
];

// Función para cargar productos en el DOM
function loadProducts(products) {
    const container = document.getElementById('productos');
    container.innerHTML = ''; // Limpiar productos anteriores

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('col-md-6', 'col-lg-4', 'd-flex', 'justify-content-center', 'mb-4');
        productCard.innerHTML = `
            <div class="card text-center shadow-sm">
                <img src="${product.image}" class="card-img-top" alt="${product.title}">
                <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">${product.description}</p>
                    <p class="card-text"><strong>Precio:</strong> $${product.cost}</p>
                    <button class="btn btn-primary btn-lg">Comprar Ahora</button>
                </div>
            </div>
        `;
        container.appendChild(productCard);
    });
}

// Función para filtrar productos por categoría
function filterCategory(category) {
    const filteredProducts = productos.filter(product => product.category === category);
    loadProducts(filteredProducts);
}

// Cargar todos los productos al iniciar la página
document.addEventListener('DOMContentLoaded', () => loadProducts(productos));

// Función para buscar productos por título
function searchProducts(query) {
    const filteredProducts = productos.filter(product => 
        product.title.toLowerCase().includes(query.toLowerCase()) || 
        product.description.toLowerCase().includes(query.toLowerCase())
    );
    loadProducts(filteredProducts);
}

// Agregar evento de búsqueda
document.getElementById('searchInput').addEventListener('input', (e) => {
    const query = e.target.value;
    searchProducts(query);
});
