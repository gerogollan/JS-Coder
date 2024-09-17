//Sistema de inventario/stock para un negocio
//Productos en stock y agregar/quitar producots

const maxproductos = 100;
//constante limitando la cantidad máxima de productos

let inventario = [];
//array donde guardare los productos 

alert("Bienvenido al inventario de tu negocio. \n\nHaz click en aceptar para acceder al inventario.")




// funciones


//function para gregar productos al inventario, pide nombre y cantidad de productos, controla que no se ingresen 0 produtos
//verifica si el producto ya esta en el sistema con un arrow y despues con un push ingresa el objeto a la variable inventario
function agregarproducto (){

 //un prompt para que el usuario ingrese el nombre del producto
    let nombre = prompt("Ingresa el nombre del producto que quieres agregar.")


 //prompt para declarar la cantidad de productos
    let cantidad = parseInt(prompt("¿Cuántos productos desea agregar?"))


 //if por si el usuario quiere agregar 0 productos, saltaría un error
       if (cantidad <= 0){
       alert("El numero ingresado es invalido.")
       return;
                         }


 //verificar si el producto existe en el sistema
 //esta variable busca en el array inventario un producto que tenga el mismo nombre que uno ya existente

    let productoexistente = inventario.find(producto => producto.nombre === nombre);
 //si da true saltaría este error
       if (productoexistente) {
       alert("Atencion, este producto ya existe en nuestro inventario.")
       
                              }

 inventario.push({nombre: nombre, cantidad: cantidad,});
 alert("Producto agregado con exito.")


}


//Funcion para ver el inventario 

function verinventario (){

    //este if es por si no hay productos en el inventario muestra ese alert.
         if(inventario.length === 0){
            alert("No hay productos en el inventario")
         }

         //variable para guardar el mensaje
        let mensaje = ("Inventario de productos: \n");

        //for (desde (variable i igual a 0); hasta que (variable i sea menor que el largo del inventario) actualizacion (variable i sumandose)
        for(let i=0; i < inventario.length ; i++){
            //variable mensaje (+= le agrega al string) nombre y cantidad
            mensaje += `Producto: ${inventario[i].nombre}, cantidad: ${inventario[i].cantidad}`;
        }

    alert(mensaje);

}

function actualizarproductos (){   

    //le pide al usuario nombre del producto que quiere actualizar
    let nombre = prompt("Ingresa el nombre del producto que quieres actualizar.");

    //busca el producto
    let producto = inventario.find( producto => producto.nombre === nombre);
    if (!producto) {
        alert("Producto no encontrado.")
        return;
    }


    //pide la cantidad para agregar
    let cantidadasumar = parseInt(prompt("Ingresa la cantidad a sumar al stock:"))

    //verificar que no sea 0 o menos
    if (cantidadasumar <= 0) {
        alert("Cantidad invalida.")
        return;
    }
     


    //si pasa eso actualiza la cantidad

    producto.cantidad = cantidadasumar;
    alert("Productos sumados con exito al stock");

}

//Funcion para el menu para el usuario

function Menu(){
    let opcion;
    do {
        opcion = parseInt( prompt("Ingrese una opción: \n1. Ver el inventario \n2 Agregar Productos \n3 Actualizar cantidad \n4 Salir  "));
        
        switch(opcion){
            case 1:
                verinventario()
                break;

            case 2:
                agregarproducto()
                break;

            case 3: 
            actualizarproductos()
            break;
            
            case 4:
                  alert("Saliendo del programa.")
                break;

            default:
                alert("Usted ingresó una opcion no valida.")
                break;
            }
        
    } while (opcion !== 4);
}


Menu()