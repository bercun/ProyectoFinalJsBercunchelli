//! defininos variables globales
let totalPagar = 0;
let unidades = 0;


//? mensajes 

let saludos = 'Bienvenidos al sistema de gestión de productos';
let addproduct = 'se agrego producto';
let delProduct = 'se elimino producto';
let despedida = 'Hasta la próxima';


//! definimos objetos globales

//? array inicial del carrito
let carrito = []; 

//? array de productos
const productosEntrantes = [
    {id: 1, 
    nombre: 'Carpacio de gambas',
    descripcion: 'Gambas de Denia con vinagreta de lima,rúcula y tomate cherry',
    precio: 560,
    },
    {id: 2, 
    nombre: 'Ensalada caprese',
    descripcion: 'Tomate ecológico, muzarella de bufala,rúcula y aceite de oliva',
    precio: 250,
        },
    {id: 3, 
    nombre: 'Pan de queso',
    descripcion: 'Pancitos recién horneados de queso',
    precio: 550,
    },
    {id: 4,
    nombre: 'Pan de molde con semillas',
    descripcion: 'Pan de molde, de 600gr , con sésamo, lino, chía y avena',
    precio: 550,
    },
    
    
];

const productosPrincipales = [
    {id:1, 
    nombre: 'Raviolones de espinaca', 
    descripcion: 'Raviolones rellenos de espinaca, ricotta y parmesano con masa de tomates secos', 
    precio: 560},
    {id:2,  
    nombre: 'Lasaña de pollo y verduras',
    descripcion: 'Lasaña artesanal, de supremas de pollos cocidas al tomillo y verduras de temporada',
    precio: 250},
    {id:3,
    nombre: 'Milanesas de carne',
    descripcion: 'Milanesas de novillo, empanadas con nuestra mezcla especial de pan rallado sin gluten',
    precio: 550},
    {id:4,
    nombre: 'Strudel de verduras',
    descripcion: 'Strudel, con masa de hojaldre artesanal y relleno de verduras de temporada',
    precio: 550},
];


//! funciones



const tablaEntrantes = document.querySelector('#tablaEntrantes');

function mostrarEntrantes() {
    productosEntrantes.forEach((producto) => {
        tablaEntrantes.innerHTML += `
        <tr>
            <th scope="row">${producto.nombre}</th>
            <td>${producto.descripcion}</td>
            <td>${producto.precio}</td>
            <td><button type="button" class="btn btn-sm btn-outline-danger" onclick="agregarAlCarrito(${producto.id})"><i
                        class="fa-solid fa-cart-shopping"></i></button></td>
        </tr>
        `;
    });
}

const tablaPrincipales = document.querySelector('#tablaPrincipales');
    
function mostrarPrincipales() {
        productosPrincipales.forEach((producto) => {
        tablaPrincipales.innerHTML += `
        <tr>
            <th scope="row">${producto.nombre}</th>
            <td>${producto.descripcion}</td>
            <td>${producto.precio}</td>
            <td><button type="button" class="btn btn-sm btn-outline-danger" onclick="agregarAlCarrito(${producto.id})"><i
                        class="fa-solid fa-cart-shopping"></i></button></td>
        </tr>
        `;
    });
}
//? llado a las funciones

mostrarEntrantes();
mostrarPrincipales();


// localStorage.setItem('carrito', JSON.stringify(carrito));
// localStorage.setItem('productos', JSON.stringify(productos));

