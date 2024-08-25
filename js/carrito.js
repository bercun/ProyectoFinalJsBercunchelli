//! defininos variables globales
let totalPagar = 0;
let unidades = 0;
let eleccionDecompra = [];
let carrito = JSON.parse(localStorage.getItem('local-carrito')) || []; 

//? mensajes
let despeida = 'gracias por su compra';
let addproduct = 'se agrego producto';
let delProduct = 'se elimino producto';


//? definir llamadas del dom

const tablaCompras = document.querySelector("#tablaCompras");
const nCarrito = document.querySelector('#carrito-box');
const sumaCompra = document.querySelector('#sumaCompra');
let btnSumar = document.querySelectorAll('.sumar');
let btnRestar = document.querySelectorAll('.restar');
let btnVaciar = document.querySelector('#vaciar');
//? local storage

function cargarCarrito() {
    if (localStorage.getItem('local-carrito')) {
        carrito = JSON.parse(localStorage.getItem('local-carrito'));
        syncnCarrito();
    }
}

//? llamadas de funciones

cargarCarrito();
mostrarCarrito();
total();
updatebtnSumar();
updatebtnRestar();
vaciarCompra();


//? funciones de eventos y acciones

function mostrarCarrito() {
    i = 1;
    tablaCompras.innerHTML = '';
    carrito.forEach((producto) => {
        tablaCompras.innerHTML += `
        <tr>
            <th scope="row">${i}</th>
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
            <td><div class="input-group">
                <div class="input-group-prepend">
                    <button class="btn btn-outline-secondary restar " type="button" id="${producto.id}" >-</button>

                </div>
                <input type="text"  class="form-control-w5" value="${producto.cantidad}">
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary sumar " type="button"
                        id="${producto.id}" >+</button>
                </div></td>
        </tr>
        
        `;
        i++;
        updatebtnSumar();
        updatebtnRestar();
    });
}





function syncnCarrito() {
    nCarrito.innerText = '';
    unidades = carrito.length;
    nCarrito.innerText = unidades; 
}

function localCarrito() {    
    localStorage.setItem('local-carrito', JSON.stringify(carrito));
}
function total () {
    totalPagar = 0;
    carrito.forEach((producto) => {
        totalPagar += producto.precio * producto.cantidad;
    });
    sumaCompra.innerHTML =  totalPagar;
}

function updatebtnSumar() { 
    btnSumar = document.querySelectorAll('.sumar');
    btnSumar.forEach((boton) => {
        boton.addEventListener('click', sumarUnidad);
    });
}


function updatebtnRestar() {
    btnRestar = document.querySelectorAll('.restar');
    btnRestar.forEach((boton) => {
        boton.addEventListener('click', restarUnidad);
    });
}


function sumarUnidad() {
    let idProducto = this.id;
    eleccionDecompra = carrito.find((producto) => producto.id == idProducto);
    eleccionDecompra.cantidad++;
    localCarrito();
    mostrarCarrito();
    total();
    Toastify({
        text: `Se agregó una unidad: ${eleccionDecompra.nombre}`,
        duration: 3000,
        backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
    }).showToast();    

}


function restarUnidad() {
    let idProducto = this.id;   
    eleccionDecompra = carrito.find((producto) => producto.id == idProducto);
    if (eleccionDecompra.cantidad > 1) {
        eleccionDecompra.cantidad--;
    }else{
        carrito = carrito.filter((producto) => producto.id != idProducto);
    }
    localCarrito();
    mostrarCarrito();
    total();
    Toastify({
        text: `Se eliminó una unidad: ${eleccionDecompra.nombre}`,
        duration: 3000,
        backgroundColor: "linear-gradient(to right, #8C182D, #ffffff)",
    }).showToast();
}

function vaciarCompra() {
    btnVaciar.addEventListener('click', vaciarCarrito); 
}


function vaciarCarrito() {
    carrito = [];
    localCarrito();
    mostrarCarrito();
    total();
    syncnCarrito();
    
}   
