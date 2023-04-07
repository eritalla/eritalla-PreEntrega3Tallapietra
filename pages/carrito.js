
const prodsEnCarrito = JSON.parse(localStorage.getItem("prod-seleccionado"));
console.log(prodsEnCarrito);

const vacio = document.querySelector("#vacio");
const productosCarrito = document.querySelector("#productosAgregadosCarrito");
const carritoBotones = document.querySelector("#carritoBotones");
const agradecimiento = document.querySelector("#agradecimiento");

productosCarrito.innerHTML = "";


if (prodsEnCarrito) {
    vacio.innerHTML = "";

    prodsEnCarrito.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("prodCarrito");
        div.innerHTML = `
        <p>Producto: ${producto.nombre}</p>
        <p>Precio:${producto.precio}</p>
        <p>Cantidad:${producto.cantidad}</p>
        <p>Subtotal:${producto.precio * producto.cantidad}</p>
        <button id="${producto.id}">Eliminar del carrito</button>
        `
        productosCarrito.append(div);
    });
}