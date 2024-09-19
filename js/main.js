//Sistema de inventario/stock para un negocio
//Productos en stock y agregar/quitar producots

const maxproductos = 1000;
//constante limitando la cantidad máxima de productos

let inventario = [];
//array donde guardare los productos

alert(
  "🌟 Bienvenido al inventario de tu negocio. \n\nHaz clic en aceptar para acceder al inventario. 📦"
);

// funciones

//function para gregar productos al inventario, pide nombre y cantidad de productos, controla que no se ingresen 0 produtos
//verifica si el producto ya esta en el sistema con un arrow y despues con un push ingresa el objeto a la variable inventario
function agregarproducto() {
  //un prompt para que el usuario ingrese el nombre del producto
  let nombre = prompt("🆕 Ingresa el nombre del producto que quieres agregar:");

  //prompt para declarar la cantidad de productos
  let cantidad = parseInt(prompt("📊 ¿Cuántos productos deseas agregar?"));

  //if por si el usuario quiere agregar 0 productos, saltaría un error
  if (cantidad <= 0) {
    alert("⚠️ El número ingresado es inválido. Por favor, ingresa un número mayor que 0.");
    return;
  }

  //verificar si el producto existe en el sistema
  //esta variable busca en el array inventario un producto que tenga el mismo nombre que uno ya existente

  let productoexistente = inventario.find(
    (producto) => producto.nombre === nombre
  );
  //si da true saltaría este error
  if (productoexistente) {
    alert("⚠️ Atención: Este producto ya existe en nuestro inventario.")
    return;
  }

  inventario.push({ nombre: nombre, cantidad: cantidad });
  alert("✅ Producto agregado con éxito al inventario.");
}

// Función para restar productos
function restarProductos() {
  let nombre = prompt("🔻 Ingresa el nombre del producto del cual deseas restar stock:");
  let producto = inventario.find((producto) => producto.nombre === nombre);

  if (!producto) {
    alert("❌ Producto no encontrado en el inventario.");
    return;
  }

  let cantidadARestar = parseInt(prompt("🔽 Ingresa la cantidad a restar del stock:"));
  if (cantidadARestar <= 0 || isNaN(cantidadARestar)) {
    alert("⚠️ Cantidad inválida. Por favor, ingresa un número mayor que 0.");
    return;
  }

  if (cantidadARestar > producto.cantidad) {
    alert("⚠️ No puedes restar más productos de los que hay en stock.");
    return;
  }

  producto.cantidad -= cantidadARestar;
  alert("✅ Cantidad restada con éxito. ¡El stock ha sido actualizado!");
}

//Funcion para ver el inventario

function verinventario() {
  //este if es por si no hay productos en el inventario muestra ese alert.
  if (inventario.length === 0) {
    alert("🔍 El inventario está vacío. ¡Agrega algunos productos!")
    return;
  }

  //variable para guardar el mensaje
  let mensaje = "📦 Inventario de productos: \n";

  //for (desde (variable i igual a 0); hasta que (variable i sea menor que el largo del inventario) actualizacion (variable i sumandose)
  for (let i = 0; i < inventario.length; i++) {
    //variable mensaje (+= le agrega al string) nombre y cantidad
    mensaje += `🔹 Producto: ${inventario[i].nombre}, cantidad: ${inventario[i].cantidad} \n`;
  }

  alert(mensaje);
}

function actualizarproductos() {
  //le pide al usuario nombre del producto que quiere actualizar
  let nombre = prompt("✏️ Ingresa el nombre del producto que deseas actualizar:");

  //busca el producto
  let producto = inventario.find((producto) => producto.nombre === nombre);
  if (!producto) {
    alert("❌ Producto no encontrado en el inventario.");
    return;
  }

  //pide la cantidad para agregar
  let cantidadnueva = parseInt(
    prompt("🔄 Ingresa la cantidad a sumar al stock:")
  );

  //verificar que no sea 0 o menos
  if (cantidadnueva <= 0) {
    alert("⚠️ Cantidad inválida. Por favor, ingresa un número mayor que 0.");
    return;
  }

  //si pasa eso actualiza la cantidad

  producto.cantidad = cantidadnueva;
  alert("✅ Cantidad actualizada con éxito. ¡El stock ha sido actualizado!");
}





//Funcion para el menu para el usuario
//switch y do para que se repita el menu


function Menu() {
  let opcion;
  do {
    opcion = parseInt(
      prompt(
        "🔧 Menú del Inventario: \n1. Ver el inventario 📋\n2. Agregar productos ➕\n3. Actualizar cantidad ✏️ \n4. Restar productos 🔻 \n5. Salir 🚪 "
      )
    );

    switch (opcion) {
      case 1:
        verinventario();
        break;
    
      case 2:
        agregarproducto();
        break;
    
      case 3:
        actualizarproductos();
        break;
    
      case 4:
        restarProductos();
        break;
    
      case 5:
        alert("👋 ¡Hasta luego! Saliendo del programa.");
        break;
    
      default:
        alert("⚠️ Opción no válida. Por favor, selecciona una opción del 1 al 5."); 
        break;
    }
  } while (opcion !== 5);
}



Menu();
