//! defininos variables globales
let totalPagar = 0;
let unidades = 0;
let eleccionDecompra = [];
let carrito = JSON.parse(localStorage.getItem('local-carrito')) || [];

//? mensajes
let despedida = 'Gracias por su compra';
let addproduct = 'se agrego producto';
let delProduct = 'se elimino producto';
let productoPago = 'producto pagado';

//? definir llamadas del dom

const tablaCompras = document.querySelector("#tablaCompras");
const nCarrito = document.querySelector('#carrito-box');
const sumaCompra = document.querySelector('#sumaCompra');
let btnSumar = document.querySelectorAll('.sumar');
let btnRestar = document.querySelectorAll('.restar');
let btnVaciar = document.querySelector('#vaciar');
let btnPagar = document.querySelector('#pagar');

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
        pagarCarrito();
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
function total() {
    totalPagar = 0;
    carrito.forEach((producto) => {
        totalPagar += producto.precio * producto.cantidad;
    });
    sumaCompra.innerHTML = totalPagar;
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
    } else {
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
    Swal.fire({
        title: "Peligro!",
        text: "Seguro que desea eliminar el carrito?.No se puede deshacer esta acción!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "si, vaciar!"
    }).then((result) => {
        if (result.isConfirmed) {
            carrito = [];
            localCarrito();
            mostrarCarrito();
            total();
            syncnCarrito();
            Swal.fire({
                title: "Vaciado!",
                text: "Su carrito ha sido vaciado",
                icon: "success"
            });
        }
    });
    

}

function pagar() {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
        title: `Total a pagar: ${totalPagar}`,
        text: ` Formas de pago: efectivo, tarjeta, transferencia`,
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Proceder al pago",
        cancelButtonText: "No, cancel!",
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            swalWithBootstrapButtons.fire({
                title: despedida ,
                text: `pagado con exito`,
                icon: "success"
            });
            carrito = [];
            localCarrito();
            mostrarCarrito();
            total();
            syncnCarrito();
        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire({
                title: "Cancelled",
                text: "El pago fue cancelado",
                icon: "error"
            });
        }
    });
}



function pagarCarrito() {
    btnPagar.addEventListener('click', pagar);
}