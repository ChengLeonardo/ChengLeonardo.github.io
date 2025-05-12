// Obtener todos los botones de "Comprar"
const botones = document.querySelectorAll('button');

botones.forEach((boton) => {
  boton.addEventListener('click', () => {
    // Buscar el nombre del producto (el <h2>)
    const nombre = boton.parentElement.querySelector('h2').textContent;
    alert(`Agregado al carrito: ${nombre}`);
  });
});
