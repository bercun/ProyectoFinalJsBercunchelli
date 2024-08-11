//! defininos valiables globales
let total = 0;
let unidades = 0;

//! definimos objetos globales

//? array inicial del carrito
let carrito = []; 

//? array de productos
let productos = [
    {id: 1, 
    nombre: 'Raviolones de espinaca',
    descripcion: 'Raviolones rellenos de espinaca, ricotta y parmesano con masa de tomates secos',
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
    {id: 5,
    nombre: 'Pan de molde con semillas',
    descripcion: 'Pan de molde, de 600gr , con sésamo, lino, chía y avena',
    precio: 550,
    },
    
];


/* <table class="table table-xl-responsive">
<table class="table">
    <thead class="thead-light">
        <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">Raviolones de espinaca</th>
            <td>Raviolones rellenos de espinaca, ricotta y parmesano con masa de tomates secos</td>
            <td>560$</td>
            <td><button type="button" class="btn btn-sm btn-outline-danger"><i
                        class="fa-solid fa-cart-shopping"></i></button></td>

        </tr>
        <tr>
            <th scope="row">Ensalada caprese</th>
            <td>Tomate ecológico, muzarella de bufala,rúcula y aceite de oliva</td>
            <td>250$</td>
            <td><button type="button" class="btn btn-sm btn-outline-danger"><i
                        class="fa-solid fa-cart-shopping"></i></button></td>
        </tr>
        <tr>
            <th scope="row">Pan de queso</th>
            <td>Pancitos recién horneados de queso </td>
            <td>550$</td>
            <td><button type="button" class="btn btn-sm btn-outline-danger"><i
                        class="fa-solid fa-cart-shopping"></i></button></td>
        </tr>
        <tr>
            <th scope="row">Pan de molde con semillas</th>
            <td>Pan de molde, de 600gr , con sésamo, lino, chía y avena </td>
            <td>550$</td>
            <td><button type="button" class="btn btn-sm btn-outline-danger"><i
                        class="fa-solid fa-cart-shopping"></i></button></td>
        </tr>
    </tbody>
</table>
</table> */




localStorage.setItem('carrito', JSON.stringify(carrito));
localStorage.setItem('productos', JSON.stringify(productos));

