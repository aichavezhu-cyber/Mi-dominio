// La lista en memoria del carrito se mantiene exactamente igual
let carrito = [];
let totalAcumulado = 0;

function agregarAlCarrito(nombreProducto, precioProducto) {
    // Esto añade los productos de forma normal en la lista
    carrito.push({ nombre: nombreProducto, precio: precioProducto });
    totalAcumulado += precioProducto;
    
    // Sigue actualizando la pantalla del carrito tal como te gusta
    actualizarVistaCarrito();
}

function actualizarVistaCarrito() {
    const contenedorLista = document.getElementById('carrito-lista');
    const contenedorTotal = document.getElementById('monto-total');
    
    contenedorLista.innerHTML = '';
    
    carrito.forEach(item => {
        const fila = document.createElement('li');
        fila.classList.add('carrito-item');
        fila.innerHTML = `<span>${item.nombre}</span> <span>S/. ${item.precio.toFixed(2)}</span>`;
        contenedorLista.appendChild(fila);
    });
    
    contenedorTotal.textContent = totalAcumulado.toFixed(2);
}

// NUEVAS FUNCIONES PARA LA PANTALLA EMERGENTE

// Muestra la ventana en el centro cambiando el estilo 'none' por 'flex'
function mostrarMensajeFinal() {
    const modal = document.getElementById('pantalla-emergente');
    modal.style.display = 'flex';
}

// Vuelve a ocultar la ventana cuando se presiona el botón "Cerrar"
function cerrarPantalla() {
    const modal = document.getElementById('pantalla-emergente');
    modal.style.display = 'none';
}
