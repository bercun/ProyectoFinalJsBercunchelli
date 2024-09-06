//! defininos variables globales
let totalPagar = 0;
let unidades = 0;
let eleccionDecompra = [];


//? mensajes 

let saludos = 'Bienvenidos al sistema de gestión de productos';
let addproduct = 'se agrego producto';
let delProduct = 'se elimino producto';
let despedida = 'Hasta la próxima';


//! definimos objetos globales

//? array inicial del carrito
let carrito = JSON.parse(localStorage.getItem('local-carrito')) || []; 
let productosEntrantes = [];
let productosPrincipales = [];
let carta =[];



//! definimos variables de los elementos del DOM
let tablaEntrantes = document.querySelector('#tablaEntrantes');
let tablaPrincipales = document.querySelector('#tablaPrincipales');
let btnAgregar = document.querySelectorAll('.btnAgregar');
let nCarrito = document.querySelector('#carrito-box');


// //? array de productos



//? definimos fetch para traer productos de un archivo json



fetch ("../database/productosEn.json")
    .then((response) =>  response.json())
    .then((data) => {
        productosEntrantes = data;
        tablaEntrantes = document.querySelector('#tablaEntrantes');
        // console.log(tablaEntrantes);
        mostrarEntrantes();
        carta = carta.concat(productosEntrantes);
        btnAgregar = document.querySelectorAll('.btnAgregar');
        btnAgregar.forEach((boton) => {
            boton.addEventListener('click', agregarCarrito);
            
        });
    
    });

    fetch ("../database/productosPr.json")
    .then((response) =>  response.json())
    .then((data) => {
        productosPrincipales = data;
        tablaPrincipales = document.querySelector('#tablaPrincipales');
        // console.log(tablaEntrantes);
        mostrarPrincipales();
        carta = carta.concat(productosPrincipales);
        btnAgregar = document.querySelectorAll('.btnAgregar');
        btnAgregar.forEach((boton) => {
            boton.addEventListener('click', agregarCarrito);
            
        });
    
    });    
    
;
//! funciones para mostrar productos en la tabla
function mostrarEntrantes() {
    if(tablaEntrantes) {
    productosEntrantes.forEach((producto) => {
        tablaEntrantes.innerHTML += `
        <tr>
            <th scope="row">${producto.nombre}</th>
            <td>${producto.descripcion}</td>
            <td>${producto.precio}</td>
            <td><button type="button" class="btn btn-sm btn-outline-danger btnAgregar" id="${producto.id}">
            <i class="fa-solid fa-cart-shopping"></i></button></td>
        </tr>
        `;
    });
    }else{
    console.warn('no hay tabala de entrantes');
    }
}


function mostrarPrincipales() {
    if(tablaPrincipales) {
        productosPrincipales.forEach((producto) => {
            tablaPrincipales.innerHTML += `
        <tr>
            <th scope="row">${producto.nombre}</th>
            <td>${producto.descripcion}</td>
            <td>${producto.precio}</td>
            <td><button type="button" class="btn btn-sm btn-outline-danger btnAgregar" id="${producto.id}">
            <i class="fa-solid fa-cart-shopping"></i></button></td>
        </tr>
        `;
        });
    }else{
        console.warn('no hay tabla de principales');
    }   
}




//? llamado a las funciones
mostrarEntrantes();
mostrarPrincipales();
updatebtnAgregar();
syncnCarrito();
localCarrito();

//!funciones de eventos y acciones


function updatebtnAgregar() {
    btnAgregar = document.querySelectorAll('.btnAgregar');
    btnAgregar.forEach((boton) => {
    boton.addEventListener('click', agregarCarrito);
    });
}

function agregarCarrito() {
    let idProducto = this.id;
    // console.log( idProducto);
    eleccionDecompra = carta.find((producto) => producto.id == idProducto);
    if (carrito.some((producto) => producto.id == idProducto)) {
        eleccionDecompra.cantidad++;
        
    }else{
        eleccionDecompra.cantidad = 1;
        carrito.push(eleccionDecompra);

    }
    
    syncnCarrito();
    localCarrito();
    Toastify({
        text: `Se agregó el producto: ${eleccionDecompra.nombre}`,
        duration: 3000,
        backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
    }).showToast();
}   

function syncnCarrito() {
    nCarrito.innerText = '';
    unidades = carrito.length;
    nCarrito.innerText = unidades; 
}

//? guardamos en el local storage

function localCarrito() {    
    localStorage.setItem('local-carrito', JSON.stringify(carrito));
}

function cargarCarrito() {
    if (localStorage.getItem('local-carrito')) {
        carrito = JSON.parse(localStorage.getItem('local-carrito'));
        syncnCarrito();
    }
}

function vaciarCarrito() {
    carrito = [];
    localStorage.removeItem('local-carrito');
    syncnCarrito();
    localCarrito();
}

