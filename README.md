# 🎒 TU ALIVIO ESCOLAR - Landing Page

¡Bienvenido al repositorio oficial de **Tu Alivio Escolar**! Esta es una plataforma diseñada para facilitar la compra de útiles escolares mediante combos personalizados y económicos.

## 🚀 Demo
Puedes ver la página en funcionamiento aquí: 
👉 [PONÉ ACÁ EL LINK QUE TE DIO GITHUB PAGES]

---

## ✨ Características
* **Diseño Pastel:** Una paleta de colores suave (Azul Cielo, Lavanda y Crema) para una experiencia relajante.
* **Combos Dinámicos:** Los productos se cargan automáticamente desde JavaScript.
* **Contacto Directo:** Botones integrados con WhatsApp para consultas inmediatas.
* **Responsive:** Se ve bien tanto en celulares como en computadoras.

## 🛠️ Tecnologías utilizadas
* **HTML5:** Estructura de la landing page y sección de combos.
* **CSS3:** Estilos personalizados con Flexbox y Grid.
* **JavaScript (ES6):** Manipulación del DOM para mostrar los kits escolares de forma dinámica.

## 📂 Estructura del Proyecto
* `index.html`: Página de inicio y presentación de confianza.
* `combos.html`: Galería de productos.
* `style.css`: Estilos globales y paleta de colores.
* `script.js`: Base de datos de los combos y lógica de carga.
* `/imagenes`: Carpeta con las fotos de los kits y el favicon.

---

## 📝 Cómo actualizar los precios o combos
Para cambiar un precio o agregar un combo nuevo, solo debes editar el array `combos` en el archivo `script.js`:

```javascript
{
    nombre: "Nombre del Combo",
    imagen: "imagenes/foto.jpg",
    items: ["Producto 1", "Producto 2"],
    precio: "$00.000",
    whatsapp: "link-de-wa"
}

Desarrollado con ❤️ para ayudar a las familias en la vuelta al cole.