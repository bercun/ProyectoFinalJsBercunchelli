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

//? local storage

function cargarCarrito() {
    if (localStorage.getItem('local-carrito')) {
        carrito = JSON.parse(localStorage.getItem('local-carrito'));
        syncnCarrito();
    }
}
console.log(carrito);

//? llamadas de funciones

cargarCarrito();
mostrarCarrito();


//? funciones de eventos y acciones

function mostrarCarrito() {
    tablaCompras.innerHTML = '';
    carrito.forEach((producto) => {
        tablaCompras.innerHTML += `
        <tr>
            <th scope="row">${producto.id}</th>
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
            <td><div class="input-group">
                <div class="input-group-prepend">
                    <button class="btn btn-outline-secondary" type="button"
                        onclick="decrementar()">-</button>
                </div>
                <input type="text"  class="form-control-w5" value="${producto.cantidad}">
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button"
                        onclick="incrementar()">+</button>
                </div></td>
        </tr>
        
        `;
    });
}

function syncnCarrito() {
    nCarrito.innerText = '';
    unidades = carrito.length;
    nCarrito.innerText = unidades; 
}


/* <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>pizza</td>
                            <td>500</td>
                            <td><div class="input-group">
                                <div class="input-group-prepend">
                                    <button class="btn btn-outline-secondary" type="button"
                                        onclick="decrementar()">-</button>
                                </div>
                                <input type="text"  class="form-control-w5" value="0">
                                <div class="input-group-append">
                                    <button class="btn btn-outline-secondary" type="button"
                                        onclick="incrementar()">+</button>
                                </div></td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Raviolones de espinaca</td>
                            <td>600</td>
                            <td>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <button class="btn btn-outline-secondary" type="button"
                                            onclick="decrementar()">-</button>
                                    </div>
                                    <input type="text"  class="form-control-w5" value="0">
                                    <div class="input-group-append">
                                        <button class="btn btn-outline-secondary" type="button"
                                            onclick="incrementar()">+</button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Pastafrola membrillo</td>
                            <td>300</td>
                            <td>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <button class="btn btn-outline-secondary" type="button"
                                            onclick="decrementar()">-</button>
                                    </div>
                                    <input type="text"  class="form-control-w5" value="0">
                                    <div class="input-group-append">
                                        <button class="btn btn-outline-secondary" type="button"
                                            onclick="incrementar()">+</button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td><h3>Total</h3></td>
                            <td></td>
                            <td><h3>1400</h3></td>
                            <td><button type="button" class="btn btn-danger">Pagar</button></td>
                        </tr>
                    </tbody> */