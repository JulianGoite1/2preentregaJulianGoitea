//Simulador de Ollie Skate & Surf 

const OPCION_SALIR = 5;
const Envio = 2500;
let totalDeProducto = 1000;

//Objeto con sus Elementos

const productosDisponibles = [
        {
                id:1,
             nombre:"Skateboard Element Edicion Ilimitada",
             precio:100000,
             categoria: "skate"   
        },
        {
                id:2,
                nombre:"Campera volcom",
                precio:50000,
                categoria: "campera"   
        },
        {
                id:3,
                nombre:"Gorro Vans",
                precio:15000,
                categoria: "accesorios"   
        },
        {
                id:4,
                nombre:"Oversizes Santa Cruz",
                precio:38000,
                categoria: "oversizes"   
        },
]
const carrito = []; 
const historial = [];

const verSkate = () => {
        let mensaje = 'Lista de producto: \n';
        productosDisponibles.forEach(el =>{
                if(el.categoria === "skate"){
                        mensaje = mensaje + `${el.id}-${el.nombre}  $${el.precio} \n` 
                }
        })

        const opcion = parseInt(prompt(mensaje)); 

        const productoSeleccionado = productosDisponibles.find(producto => producto.id === opcion)
        carrito.push(productosDisponibles) 
        alert("Exelente! Agregaste tu producto al carrito")
}

const verCampera = () => {
        let mensaje = 'Lista de producto: \n';
        productosDisponibles.forEach(el =>{
                if(el.categoria === "campera"){
                        mensaje = mensaje + `${el.id}-${el.nombre}  $${el.precio} \n` 
                }
        })

        const opcion = parseInt(prompt(mensaje)); 

        const productoSeleccionado = productosDisponibles.find(producto => producto.id === opcion)
        carrito.push(productoSeleccionado) 
        alert("Exelente! Agregaste tu producto al carrito")
}

const verAccesorios = () => {
    let mensaje = 'Lista de producto: \n';
    productosDisponibles.forEach(el =>{
            if(el.categoria === "accesorios"){
                    mensaje = mensaje + `${el.id}-${el.nombre}  $${el.precio} \n` 
            }
    })

    const opcion = parseInt(prompt(mensaje)); 

    const productoSeleccionado = productosDisponibles.find(producto => producto.id === opcion)
    carrito.push(productoSeleccionado) 
    alert("Exelente! Agregaste tu producto al carrito")
}

const verOver = () => {
    let mensaje = 'Lista de producto: \n';
    productosDisponibles.forEach(el =>{
            if(el.categoria === "oversizes"){
                    mensaje = mensaje + `${el.id}-${el.nombre}  $${el.precio} \n` 
            }
    })

    const opcion = parseInt(prompt(mensaje));

    const productoSeleccionado = productosDisponibles.find(producto => producto.id === opcion)
    carrito.push(productoSeleccionado) 
    alert("Exelente! Agregaste tu producto al carrito")
}

//Caracteristicas de los productos

const mostrarDetalle = () => {
        carrito.forEach(el => 
                alert("Primer producto:" + el.nombre + ", precio: " + el.precio)
                )
}

//Menu de seleccion de productos

const verProductos = () => {
    let opcion ;
    opcion = parseInt(prompt("Escoje la operacion que deseas: \n 1-Skate \n 2-Campera \n 3-Accesorios \n 4-Oversizes \n 5-Volver Atras"));
    while(opcion != OPCION_SALIR){
        switch(opcion){
            case 1: 
                    verSkate();
                    break;
            case 2: 
                    verCampera();
                    break;
            case 3: 
                    verAccesorios();
                    break;
            case 4: 
                    verOver();
                    break;
            case 5: mostrarDetalle();
                    break;
            
            default:
                alert("Ingreso una opcion invalida.");
                break;
        }
        opcion = parseInt(prompt("Escoje la operacion que deseas: \n 1-Skate \n 2-Campera \n 3-Accesorios \n 4-Oversizes \n 5-Volver Atras"));
    }
}

//Estructura del Carrito de compras

const verCarritoDeCompras = () => {
        let mensaje = 'Carrito: \n';
        const numeroCompra = Math.round(Math.random() * 10000000 + 100000)

        carrito.forEach(el =>{               
                        mensaje = mensaje + `${el.id}-${el.nombre}  $${el.precio} \n` 
                
        })
        const total = carrito.reduce((acumulador,producto)=> acumulador + producto.precio,0)
        mensaje += `TOTAL                    $${total}`;
        mensaje += " Desea hacer la orden ? (si/no)";
        const respuesta = prompt(mensaje);
        if(respuesta.toLowerCase() == "si"){
                historial.push({
                        numero: numeroCompra,
                        nombre: prompt("Ingrese su Nombre y Apellido"),
                        tel: prompt("Ingrese su nº de movil"),
                        dni: parseInt(prompt("Ingrese su nº de DNI")),
                        direccion: prompt("Ingresa SU direccion")
                })
                alert("Felicitacidades tu compra en Ollie a sido un exito \n N° " + numeroCompra + "\n necesitaras este nº luego")
                carrito.splice(); 
        }
}

//Total mas el valor del envio

const calcularEnvio = (total) => {
    const resultado = Envio * total
    alert("El total con Envio incluido $" + resultado + "\n .El total es: $" + total);
}

//Menu Principal de Navegacion

let opcion = parseInt(prompt("Elija que quiera realizar, \n 1-Ver Productos \n 2-Ver Carrito \n 5 Salir "))

while(opcion != OPCION_SALIR ){

    switch(opcion){
        case 1: 
                verProductos();
                break;
        case 2: 
                verCarritoDeCompras();
                break;
        default:
            alert("Ingreso una opcion invalida.");
            break;
    }

    opcion = parseInt(prompt("Elija que quiera realizar, \n 1-Ver Productos \n 2-Ver Carrito \n 5-Salir "));
}
alert("Gracias por confiar en Ollie.");