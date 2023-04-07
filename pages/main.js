const productos = [
    {
    id: "zapatilla_1",
    nombre: "Zapatilla blanca con detalles en reptil y suela", 
    imagen: "../imagenes/catalogo/foto1.jpg",
    precio: 25000,
    tipo: "Zapatillas"
    },


    {
    id: "zapatilla_2",
    nombre: "Zapatilla negra con detalle en reptil", 
    imagen:"../imagenes/catalogo/foto2.jpg",
    precio: 25000,
    tipo: "Zapatillas"
    } ,


    { 
    id: "botineta_3",    
    nombre: "Botineta verde suela blanca", 
    imagen: "../imagenes/catalogo/foto3.jpg",
    precio: 35000,
    tipo: "Botinetas"
    },


    {
    id: "botineta_4",
    nombre: "Botineta plateda con suela negra", 
    imagen: "../imagenes/catalogo/foto4.jpg",
    precio: 30000,
    tipo: "Botinetas"
    },


    {
    id: "zapatilla_5",
    nombre: "Zapatilla negra con taco interno", 
    imagen: "../imagenes/catalogo/foto5.jpg",
    precio:30000,
    tipo: "Zapatillas",
    },


    {
    id: "zapatilla_6",
    nombre: "Zapatilla plateada con taco interno", 
    imagen:"../imagenes/catalogo/foto6.jpg",
    precio: 30000,
    tipo: "Zapatillas"
    },


    {
    id: "botineta_7",
    nombre: "Botineta color suela con medio taco", 
    imagen:"../imagenes/catalogo/foto7.jpg",
    precio: 27000,
    tipo: "Botinetas"
    },


    {
    id: "botineta_8",
    nombre: "Botineta color camel con medio taco", 
    imagen:"../imagenes/catalogo/foto8.jpg",
    precio: 27000,
    tipo: "Botinetas"
    },

    {
    
    id: "bota_9",  
    nombre: "Bota texana negra caña alta", 
    imagen:"../imagenes/catalogo/foto9.jpg",
    precio:40000,
    tipo: "Botas"
    }
]

const catalogoContainer = document.querySelector ( "#catalogoContainer");
const botonesTipo = document.querySelectorAll(".tipoCalzado");
const tituloTipos = document.querySelector("#tipos");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const cantEnCarrito = document.querySelector(".cantidad");


function inyectarProductos (productosSeleccionados) {

    catalogoContainer.innerHTML = "";

    productosSeleccionados.forEach (producto => {
        const cardProducto = document.createElement ("div");
        cardProducto.classList.add("producto", "item");
        cardProducto. innerHTML = `
                                    <img src= "${producto.imagen}" alt ="${producto.nombre}" style= "width: 30%">
                                    <div>
                                        <h5>${producto.nombre}</h5>
                                        <h5>${producto.precio}</h5>
                                        <button class= "producto-agregar" id="${producto.id}">Agregar</button>
                                    </div>
        `;
        catalogoContainer.append(cardProducto);
    })
    actualizarBotonesAgregar();
}

inyectarProductos(productos);

botonesTipo.forEach(boton => {
    boton.addEventListener("click", (e) => {

        if (e.currentTarget.id != "todo") {
            const productoTipo = productos.find(producto => producto.tipo === e.currentTarget.id);
            tituloTipos.innerText = productoTipo.tipo
            const seleccionTipo = productos.filter(producto => producto.tipo === e.currentTarget.id);
            inyectarProductos(seleccionTipo);
        } else {
            tituloTipos.innerText = "Calzado";
            inyectarProductos(productos);
        }
    });
})

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

const carrito = [];

function agregarAlCarrito(e) {
    
    const id = e.currentTarget.id;
    const prodAgregado = productos.find(producto => producto.id === id);

    if (carrito.some(producto => producto.id === id)) {
        const index = carrito.findIndex(producto => producto.id === id);
        carrito[index].cantidad++;
    } else {
        prodAgregado.cantidad = 1;
        carrito.push(prodAgregado);
    }
    actualizarCantEnCarrito();

    localStorage.setItem("prod-seleccionado", JSON.stringify(carrito));
}

function actualizarCantEnCarrito() {
    let actualizacionEnCarrito = carrito.reduce((acumulador, producto) => acumulador + producto.cantidad, 0);
    cantEnCarrito.innerText = actualizacionEnCarrito;
}















// let botonesAgregar = document.querySelectorAll (".producto-agregar")
// botonesAgregar.forEach (el => {
//     el.addEventListener ('click', (e) =>{
//         agregarAlCarrito (e.target.id)
//     })
// })

// const carrito= [];

// function agregarAlCarrito (id) {
//     const existe = carrito.some ( prod => prod.id === parseInt (id));
//     if (existe) {
//         carrito.map (prod => prod.cantidad ++) 
//     } else {
//         let prodEncontrado = productos.find (prod => prod.id === parseInt(id));
    
//         carrito.push (prodEncontrado);

//     }
    
    
//     console.log (carrito);
// }

