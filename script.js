// Datos de tus combos corregidos
const combos = [
    {
        nombre: "Combo Primaria Inicial",
        imagen: "imagenes/primaria-inicial.jpg",
        items: ["Cuadernos tapa dura Exito", "Colores x36", "Plasticola", "Goma y Sacapuntas","etc."],
        precio: "$40.000",
        whatsapp: "https://wa.me/+541131608489"
    },
    {
        nombre: "Combo Primaria",
        imagen: "imagenes/primaria (2).jpg", 
        items: ["Cartuchera", "Lápices de colores x12", "Goma y sacapuntas", "Regla 20cm","etc."],
        precio: "$30.000",
        whatsapp: "https://wa.me/+541131608489"
    },
    {
        nombre: "Combo Secundaria",
        imagen: "imagenes/secundaria (1).jpg",
        items: ["Cuadernillo", "carpeta", "Goma y sacapuntas", "Regla 20cm","etc."],
        precio: "$35.000",
        whatsapp: "https://wa.me/+541131608489"
    },
    {
        nombre: "Combo Universidad",
        imagen: "imagenes/universitario.jpg",
        items: ["Cartuchera", "Resaltadores", "Lapiceras de colores", "Lapiz","etc."],
        precio: "$25.000",
        whatsapp: "https://wa.me/+541131608489"
    },
    {
        nombre: "Combo utiles",
        imagen: "imagenes/combos.jpg",
        items: ["Resaltador", "Lápices de colores x12", "Goma y sacapuntas", "Regla 20cm","etc."],
        precio: "$25.000",
        whatsapp: "https://wa.me/+541131608489"
    },
    {
        nombre: "Combo Uniforme",
        imagen: "imagenes/iniforme.png",
        items: ["Guardapolvo", "Pecheras", "Ropa de Gimnasia", "Medias","etc."],
        precio: "$10.000",
        whatsapp: "https://wa.me/+541131608489"
    }
];

// UNA SOLA FUNCIÓN corregida con comillas invertidas y la etiqueta <img>
function cargarCombos() {
    const contenedor = document.getElementById('grid-combos');
    if (!contenedor) return;

    // Limpiamos el contenedor por si acaso
    contenedor.innerHTML = "";

    combos.forEach(combo => {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'card-combo';

        const listaItems = combo.items.map(item => `<li>${item}</li>`).join('');

        // Usamos BACKTICKS (``) para que las variables ${} funcionen
        tarjeta.innerHTML = `
            <img src="${combo.imagen}" class="img-combo" alt="${combo.nombre}">
            <div class="info-combo">
                <h3>${combo.nombre}</h3>
                <ul>${listaItems}</ul>
                <span class="precio">${combo.precio}</span>
                <a href="${combo.whatsapp}" target="_blank" class="btn-whatsapp">Consultar por WhatsApp</a>
            </div>
        `;
        contenedor.appendChild(tarjeta);
    });
}

// Ejecutar una sola vez al cargar la página
document.addEventListener('DOMContentLoaded', cargarCombos);