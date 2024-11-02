// alert("Bienvenido, haz click en aceptar para utilizar la calculadora.")

// function sumar (){
//                let numero1 = parseInt(prompt ("Ingrese el primer numero"));
//                let numero2 = parseInt(prompt ("Ingrese el segundo numero"));
//                let resultado = numero1 + numero2;
//                alert (numero1 + " + " + numero2 + " = " + resultado)
//             }

// function restar (){
//                 let numero1 = parseInt(prompt ("Ingrese el primer numero"));
//                 let numero2 = parseInt(prompt ("Ingrese el segundo numero"));
//                 let resultado = numero1 - numero2;
//                 alert (numero1 + " - " + numero2 + " = " + resultado)
//              }

// function multiplicar (){
//                 let numero1 = parseInt(prompt ("Ingrese el primer numero"));
//                 let numero2 = parseInt(prompt ("Ingrese el segundo numero"));
//                 let resultado = numero1 * numero2;
//                 alert (numero1 + " X " + numero2 + " = " + resultado)
//              }
// function dividir (){
//                 let numero1 = parseInt(prompt ("Ingrese el primer numero"));
//                 let numero2 = parseInt(prompt ("Ingrese el segundo numero"));
//                 let resultado = numero1 / numero2;
//                 alert (numero1 + " / " + numero2 + " = " + resultado)
//                       if (numero2 === 0) {
//                           alert("Error: División por cero no permitida.");
//                           return;}
//              }

// function ejecutarcalculadora(){
//     let repetir = true;

//      while (repetir){

//         let respuesta = parseInt(prompt("Que tipo de operación quieres hacer?  \n 1) Suma  \n 2) Resta \n 3) Multiplicación  \n 4) Division  \n Otro numero para salir del sistema."));

//         switch (respuesta) {
//             case 1:
//             sumar()
//             break;

//         case 2:
//             restar()
//             break;

//         case 3 :
//             multiplicar()
//             break;

//         case 4 :
//         dividir()
//         break;}

//     default :
//     alert("Gracias por utilizar la calculadora.")
//     repetir = false
//     break;
// }}
// // Función principal para ejecutar el ciclo de la calculadora
// function ejecutarCalculadora() {
//     let repetir = true;

//     while (repetir) {
//         let respuesta = parseInt(prompt("¿Qué tipo de operación quieres hacer? \n 1) Suma \n 2) Resta \n 3) Multiplicación \n 4) División \n Otro número para salir del sistema."), 10);

//         switch (respuesta) {
//             case 1:
//                 sumar();
//                 break;
//             case 2:
//                 restar();
//                 break;
//             case 3:
//                 multiplicar();
//                 break;
//             case 4:
//                 dividir();
//                 break;
//             default:
//                 alert("Gracias por utilizar la calculadora.");
//                 repetir = false; // Salir del ciclo
//                 break;
//         }

//         if (repetir) {
//             repetir = confirm("¿Quieres repetir el ciclo?");
//         }
//     }
// }

// const precioDolar = 1220

// class Celular {
//     static id = 0
//     constructor (modelo, marca, precio) {
//         this.id = ++Celular.id
//         this.modelo = modelo,
//         this.marca = marca,
//         this.precio = precio
//     }

//     enPesos = () => {
//         this.precio = this.precio*precioDolar
//     console.log("precio en pesos :$"+this.precio)
//     }

// }

// const celular1 = new celular ("s24", "samsung", 1000)
// const celular2 = new celular ("Iphone 16", "Apple", 1250)
// const celular3 = new celular ("Iphone 12", "Apple", 400)

// const precioDolar = 1220

// class Celular {
//     static id = 0
//     constructor (modelo, marca, precio) {
//         this.id = ++Celular.id
//         this.modelo = modelo,
//         this.marca = marca,
//         this.precio = precio
//     }

//     enPesos = () => {
//         this.precio = this.precio*precioDolar
//     console.log("precio en pesos :$"+this.precio)
//     }

// }

// const celular1 = new Celular ("s24", "samsung", 1000)
// const celular2 = new Celular ("Iphone 16", "Apple", 1250)
// const celular3 = new Celular ("Iphone 12", "Apple", 400)

// const cargarProductos = () => {
//     let cargaModelo = prompt("Ingrese el modelo del telefono")
//     let cargaMarca = prompt("Ingrese la marca del telefono")
//     let cargaprecio = prompt("Ingrese el precio en USD")

//     const celular = new celular (cargaModelo, cargaMarca, cargaprecio)
//     //console.log(celular)
// }

// cargarProductos()

// const verProductos = () => {
//     if(productos.length === 0){
//         alert("No hay nada en el inventario")
//     }else{
//         console.log(Productos)
//     }
// }
// let menu = parseInt (prompt("Ingrese 1 para ver el catalogo, 2 para cargar un nuevo producto, 3 para salir"))

// while (menu != 3) {
//     switch(menu){
//         case 1:
//             verProductos()
//             break;
//         case 2:
//             cargarProductos()
//             break;
//         default:
//             alert("opcion invalida")

//     }
//     let menu = parseInt (prompt("Ingrese 1 para ver el catalogo, 2 para cargar un nuevo producto, 3 para salir"))

// }

// function elegirOperacion (operacion){
//     if (operacion == "multiplicar"){
//         return(a,b) => a*b
//     }
//     else if(operacion == "dividir"){
//         return(a,b) => a/b
//     }
// }

// let operacionelegida = elegirOperacion ("multiplicar")
// console.log (operacionelegida(10,2))

// const productos = {
//     {
//         id:1,
//         nombre: "televisor",
//         precio: 500
//     },
//     {
//         id:2
//         nombre:"lavarropa
//         precio:8000
//     }
//     {
//         id:3
//         nombre:"secadora",
//         precio: 4000,
//     }
// }
// productos.array.forEach((producto) =>{
//     console.log
// })

// let products = document.getElementById("productos")

// productos.forEach((producto) => {
//     let contenedor = document.createElement("div")
//     contenedor.className = "card"
//     contenedor.innerHTML = `<span>ID: ${producto.id}</span>
//                             <h3>Producto: ${producto.nombre}</h3>
//                             <h4>Precio: $${producto.precio}</h4>`
//     products.appendChild(contenedor)
// })

//CODIGO UTILIZADO EN LA PRIMER ENTREGA DE JS
//Sistema de inventario/stock para un negocio
//Productos en stock y agregar/quitar producots

// const maxproductos = 1000;
// //constante limitando la cantidad máxima de productos

// let inventario = [];
// //array donde guardare los productos

// alert(
//   "🌟 Bienvenido al inventario de tu negocio. \n\nHaz clic en aceptar para acceder al inventario. 📦"
// );

// // funciones

// //function para gregar productos al inventario, pide nombre y cantidad de productos, controla que no se ingresen 0 produtos
// //verifica si el producto ya esta en el sistema con un arrow y despues con un push ingresa el objeto a la variable inventario
// function agregarproducto() {
//   //un prompt para que el usuario ingrese el nombre del producto
//   let nombre = prompt("🆕 Ingresa el nombre del producto que quieres agregar:");

//   //prompt para declarar la cantidad de productos
//   let cantidad = parseInt(prompt("📊 ¿Cuántos productos deseas agregar?"));

//   //if por si el usuario quiere agregar 0 productos, saltaría un error
//   if (cantidad <= 0) {
//     alert("⚠️ El número ingresado es inválido. Por favor, ingresa un número mayor que 0.");
//     return;
//   }

//   //verificar si el producto existe en el sistema
//   //esta variable busca en el array inventario un producto que tenga el mismo nombre que uno ya existente

//   let productoexistente = inventario.find(
//     (producto) => producto.nombre === nombre
//   );
//   //si da true saltaría este error
//   if (productoexistente) {
//     alert("⚠️ Atención: Este producto ya existe en nuestro inventario.")
//     return;
//   }

//   inventario.push({ nombre: nombre, cantidad: cantidad });
//   alert("✅ Producto agregado con éxito al inventario.");
// }

// // Función para restar productos
// function restarProductos() {
//   let nombre = prompt("🔻 Ingresa el nombre del producto del cual deseas restar stock:");
//   let producto = inventario.find((producto) => producto.nombre === nombre);

//   if (!producto) {
//     alert("❌ Producto no encontrado en el inventario.");
//     return;
//   }

//   let cantidadARestar = parseInt(prompt("🔽 Ingresa la cantidad a restar del stock:"));
//   if (cantidadARestar <= 0 || isNaN(cantidadARestar)) {
//     alert("⚠️ Cantidad inválida. Por favor, ingresa un número mayor que 0.");
//     return;
//   }

//   if (cantidadARestar > producto.cantidad) {
//     alert("⚠️ No puedes restar más productos de los que hay en stock.");
//     return;
//   }

//   producto.cantidad -= cantidadARestar;
//   alert("✅ Cantidad restada con éxito. ¡El stock ha sido actualizado!");
// }

// //Funcion para ver el inventario

// function verinventario() {
//   //este if es por si no hay productos en el inventario muestra ese alert.
//   if (inventario.length === 0) {
//     alert("🔍 El inventario está vacío. ¡Agrega algunos productos!")
//     return;
//   }

//   //variable para guardar el mensaje
//   let mensaje = "📦 Inventario de productos: \n";

//   //for (desde (variable i igual a 0); hasta que (variable i sea menor que el largo del inventario) actualizacion (variable i sumandose)
//   for (let i = 0; i < inventario.length; i++) {
//     //variable mensaje (+= le agrega al string) nombre y cantidad
//     mensaje += `🔹 Producto: ${inventario[i].nombre}, cantidad: ${inventario[i].cantidad} \n`;
//   }

//   alert(mensaje);
// }

// function actualizarproductos() {
//   //le pide al usuario nombre del producto que quiere actualizar
//   let nombre = prompt("✏️ Ingresa el nombre del producto que deseas actualizar:");

//   //busca el producto
//   let producto = inventario.find((producto) => producto.nombre === nombre);
//   if (!producto) {
//     alert("❌ Producto no encontrado en el inventario.");
//     return;
//   }

//   //pide la cantidad para agregar
//   let cantidadnueva = parseInt(
//     prompt("🔄 Ingresa la cantidad a sumar al stock:")
//   );

//   //verificar que no sea 0 o menos
//   if (cantidadnueva <= 0) {
//     alert("⚠️ Cantidad inválida. Por favor, ingresa un número mayor que 0.");
//     return;
//   }

//   //si pasa eso actualiza la cantidad

//   producto.cantidad = cantidadnueva;
//   alert("✅ Cantidad actualizada con éxito. ¡El stock ha sido actualizado!");
// }

// //Funcion para el menu para el usuario
// //switch y do para que se repita el menu

// function Menu() {
//   let opcion;
//   do {
//     opcion = parseInt(
//       prompt(
//         "🔧 Menú del Inventario: \n1. Ver el inventario 📋\n2. Agregar productos ➕\n3. Actualizar cantidad ✏️ \n4. Restar productos 🔻 \n5. Salir 🚪 "
//       )
//     );

//     switch (opcion) {
//       case 1:
//         verinventario();
//         break;

//       case 2:
//         agregarproducto();
//         break;

//       case 3:
//         actualizarproductos();
//         break;

//       case 4:
//         restarProductos();
//         break;

//       case 5:
//         alert("👋 ¡Hasta luego! Saliendo del programa.");
//         break;

//       default:
//         alert("⚠️ Opción no válida. Por favor, selecciona una opción del 1 al 5.");
//         break;
//     }
//   } while (opcion !== 5);
// }

// Menu();

//FIN DE CODIGO UTILIZADO EN LA PRIMER ENTREGA DE JS CODER HOUSE

// let transacciones = []

// localStorage.getItem('transacciones')
// if(transacciones == true ){

// } CODIGO 1
// let transacciones = []; // Array para guardar las transacciones

// const form = document.querySelector("#form")
// //constante que reune los datos del form

// const montoInput = document.getElementById("formMonto") //constante que reune el monto ingresado en el form
// const descripcionInput = document.getElementById("descripcion") //constante que reune la descripcion de la transaccion
// const tipoSelect = document.getElementById("tipo") //constante que reune el tipo de dato de la transaccion (ingreso / egreso)

// form.addEventListener ('submit', function (event)); {
//     Event.preventDefault() //previene que la pagina se reinicie.
// }

// const monto = parseFloat(montoInput.value); // convierte el monto a un número

// const descripcion = descripcionInput.value; // obtiene la descripción

// const tipo = tipoSelect.value; // obtiene el tipo de movimiento(ingreso o gasto)

// const transaccion = {
//     tipo: tipo,
//     monto: monto,
//     descripcion: descripcion
// };

// transacciones.push(transaccion); // mete la transaccion al array

// localStorage.setItem('transacciones', JSON.stringify(transacciones)); // Guarda el array en localStorage

// // Al cargar la página, intenta cargar las transacciones desde localStorage
// if (localStorage.getItem('transacciones')) {
//     transacciones = JSON.parse(localStorage.getItem('transacciones'));
// }

// function renderizarTransacciones() {
//     const listaTransacciones = document.querySelector('#transacciones'); // Selecciona la lista en el DOM
//     listaTransacciones.innerHTML = ''; // Limpia la lista antes de renderizar

//     transacciones.forEach(transaccion => {
//         // Crea un nuevo elemento y agrega el contenido
//         const li = document.createElement('li');
//         li.textContent = `${transaccion.descripcion}: ${transaccion.monto} (${transaccion.tipo})`;
//         listaTransacciones.appendChild(li); // Agrega el nuevo elemento a la lista
//     });
// }

// renderizarTransacciones(); // Llama a la función para actualizar la lista

// function calcularSaldo() {
//     let totalIngresos = 0;
//     let totalGastos = 0;

//     transacciones.forEach(transaccion => {
//         if (transaccion.tipo === 'ingreso') {
//             totalIngresos += transaccion.monto;
//         } else {
//             totalGastos += transaccion.monto;
//         }
//     });

//     const saldo = totalIngresos - totalGastos;
//     document.querySelector('#saldo').textContent = saldo; // Actualiza el saldo en el DOM
// }

// renderizarTransacciones();
// calcularSaldo();

// transacciones.forEach((transaccion, index) => {
//     const li = document.createElement('li');
//     li.textContent = `${transaccion.descripcion}: ${transaccion.monto} (${transaccion.tipo})`;

//     // Crear el botón de eliminar
//     const btnEliminar = document.createElement('button');
//     btnEliminar.textContent = 'Eliminar';
//     btnEliminar.addEventListener('click', () => eliminarTransaccion(index)); // Pasar el índice

//     li.appendChild(btnEliminar); // Agregar el botón al elemento de la lista
//     listaTransacciones.appendChild(li); // Agregar el nuevo elemento a la lista
// });

// function eliminarTransaccion(index) {
//     transacciones.splice(index, 1); // Elimina la transacción del array
//     localStorage.setItem('transacciones', JSON.stringify(transacciones)); // Actualiza el localStorage
//     renderizarTransacciones(); // Vuelve a renderizar las transacciones
//     calcularSaldo(); // Actualiza el saldo
// }

// const btnEditar = document.createElement('button');
// btnEditar.textContent = 'Editar';
// btnEditar.addEventListener('click', () => {
//     montoInput.value = transaccion.monto; // Rellenar el campo de monto
//     descripcionInput.value = transaccion.descripcion; // Rellenar el campo de descripción
//     tipoSelect.value = transaccion.tipo; // Rellenar el campo de tipo
//     eliminarTransaccion(index); // Eliminar la transacción para que se agregue de nuevo
// });

// const btnEditar = document.createElement('button');
// btnEditar.textContent = 'Editar';
// btnEditar.addEventListener('click', () => {
//     montoInput.value = transaccion.monto; // Rellenar el campo de monto
//     descripcionInput.value = transaccion.descripcion; // Rellenar el campo de descripción
//     tipoSelect.value = transaccion.tipo; // Rellenar el campo de tipo
//     eliminarTransaccion(index); // Eliminar la transacción para que se agregue de nuevo
// });

// let isEditing = false; // Variable para indicar si se está editando

// formulario.addEventListener('submit', function(event) {
//     event.preventDefault();

//     // Captura los valores...

//     if (isEditing) {
//         // Actualiza la transacción en lugar de agregar una nueva
//         // Usa el mismo índice para actualizar
//     } else {
//         // Agrega nueva transacción
//     }

//     // Luego de agregar o editar, resetea el formulario y el estado
//     formulario.reset();
//     isEditing = false; // Restablece el estado
// });

// if (isNaN(monto) || monto <= 0) {
//     alert("Por favor, ingresa un monto válido."); // Mensaje de error
//     return; // Detener el proceso
// }

// if (descripcion.trim() === '') {
//     alert("La descripción no puede estar vacía."); // Mensaje de error
//     return;
// }

// function mostrarHistorial() {
//     // Muestra u oculta el historial
// }

// const filtroSelect = document.querySelector('#filtro');

// filtroSelect.addEventListener('change', function() {
//     const tipoFiltrado = filtroSelect.value;
//     renderizarTransacciones(tipoFiltrado); // Pasa el tipo para filtrar
// });

// formulario.addEventListener('submit', function(event) {
//     event.preventDefault();

//     const monto = parseFloat(montoInput.value);
//     const descripcion = descripcionInput.value.trim();
//     const tipo = tipoSelect.value;

//     // Validaciones
//     if (isNaN(monto) || monto <= 0) {
//         alert("Por favor, ingresa un monto válido.");
//         return;
//     }

//     if (descripcion === '') {
//         alert("La descripción no puede estar vacía.");
//         return;
//     }

//     // Aquí continuarías con la lógica de agregar o editar la transacción...
// });

// transacciones.forEach((transaccion, index) => {
//     const li = document.createElement('li');
//     li.textContent = `${transaccion.descripcion}: ${transaccion.monto}`;
//     li.className = transaccion.tipo === 'ingreso' ? 'ingreso' : 'gasto'; // Aplica la clase

//     // Botones de editar y eliminar...
// });
// document.querySelector('#toggleHistorial').addEventListener('click', function() {
//     const historial = document.querySelector('#historial');
//     historial.style.display = historial.style.display === 'none' ? 'block' : 'none';
//     renderizarHistorial();
// });

// function renderizarHistorial() {
//     const historial = document.querySelector('#historial');
//     historial.innerHTML = ''; // Limpiar el historial antes de renderizar

//     transacciones.forEach(transaccion => {
//         const li = document.createElement('li');
//         li.textContent = `${transaccion.descripcion}: ${transaccion.monto} (${transaccion.tipo})`;
//         historial.appendChild(li);
//     });
// }

// const filtroSelect = document.querySelector('#filtro');

// filtroSelect.addEventListener('change', function() {
//     renderizarTransacciones(filtroSelect.value);
// });

// function renderizarTransacciones(filtro) {
//     const listaTransacciones = document.querySelector('#transacciones');
//     listaTransacciones.innerHTML = '';

//     transacciones.forEach((transaccion, index) => {
//         if (filtro === 'todos' || transaccion.tipo === filtro) {
//             const li = document.createElement('li');
//             li.textContent = `${transaccion.descripcion}: ${transaccion.monto}`;
//             li.className = transaccion.tipo === 'ingreso' ? 'ingreso' : 'gasto';
//             // Botones de editar y eliminar...
//             listaTransacciones.appendChild(li);
//         }
//     });
// }

//CODIGO 2
// let transacciones = []; // Array para guardar las transacciones

// const form = document.querySelector("#form"); //constante que selecciona el formulario
// const montoInput = document.getElementById("formMonto"); //const para los datos del form, monto
// const descripcionInput = document.getElementById("descripción");//descripcion
// const tipoSelect = document.getElementById("tipo");//tipo de movimiento

// form.addEventListener("submit", function (event) { //evento
//   event.preventDefault(); //sin esto se me reinicia la pagina

//   const monto = parseFloat(montoInput.value); //recibe el monto y lo transpasa como numero
//   const descripcion = descripcionInput.value.trim();
//   const tipo = tipoSelect.value;

//   // Valida que el usuario ingrese bien los datos
//   if (isNaN(monto) || monto <= 0) { //si isnotanumber(monto) o monto igual o menor a 0 tira el alert
//     alert("Por favor, ingresa un monto válido.");
//     return;
//   }
//   if (descripcion === "") { //si la descripcion esta vacia te tira el alert
//     alert("La descripción no puede estar vacía.");
//     return;
//   }

//   const transaccion = { tipo, monto, descripcion };
//   transacciones.push(transaccion); // Agrega la transacción al array
//   localStorage.setItem("transacciones", JSON.stringify(transacciones)); // Guarda en localStorage
//   renderizarTransacciones();
//   calcularSaldo();
//   form.reset(); // resetea el formulario
// });

// // recarga las transacciones cuando abrimos la pagina
// if (localStorage.getItem("transacciones")) {
//   transacciones = JSON.parse(localStorage.getItem("transacciones")); //trae las transacciones guardadas
// }

// // muestra las transacciones
// function renderizarTransacciones(filtro = "todos") {
//   const listaTransacciones = document.querySelector("#transacciones");
//   listaTransacciones.innerHTML = ""; // Limpia la lista antes de renderizar

//   transacciones.forEach((transaccion, index) => {
//     if (filtro === "todos" || transaccion.tipo.toLowerCase() === filtro) {
//       const li = document.createElement("li");
//       li.textContent = `${transaccion.descripcion}: ${transaccion.monto}`;
//       li.className =
//         transaccion.tipo.toLowerCase() === "ingreso" ? "ingreso" : "gasto";

//       //boton para eliminar
//       const btnEliminar = document.createElement("button"); //crea el button
//       btnEliminar.textContent = "Eliminar"; //este es el texto del button
//       btnEliminar.addEventListener("click", () => eliminarTransaccion(index));
//       li.appendChild(btnEliminar);

//       //button para editar
//       const btnEditar = document.createElement("button");
//       btnEditar.textContent = "Editar";
//       btnEditar.addEventListener("click", () => editarTransaccion(index)); //evento para editar
//       li.appendChild(btnEditar);

//       listaTransacciones.appendChild(li); // Agrega el nuevo elemento a la lista
//     }
//   });
// }

// //calcular y mostrar saldo
// function calcularSaldo() {
//   const totalIngresos = transacciones.reduce(
//     (sum, transaccion) =>
//       transaccion.tipo === "Ingreso" ? sum + transaccion.monto : sum,
//     0
//   );
//   const totalGastos = transacciones.reduce(
//     (sum, transaccion) =>
//       transaccion.tipo === "Gasto" ? sum + transaccion.monto : sum,
//     0
//   );
//   const saldo = totalIngresos - totalGastos;
//   if (saldo <= 0) { //ifSI saldo <= 0 genera un alert
//     alert("El Saldo de tu cuenta no puede ser un numero negativo");
//   }
//   document.querySelector("#saldo").textContent = saldo;
// }

// //function para eliminar transacción
// function eliminarTransaccion(index) {
//   transacciones.splice(index, 1); //elimina la transacción del array
//   localStorage.setItem("transacciones", JSON.stringify(transacciones)); //actualiza localStorage
//   renderizarTransacciones(); //vuelve a mostrar
//   calcularSaldo(); //actualiza el saldo
// }

// //funcion para editar transacciónes
// function editarTransaccion(index) {
//   montoInput.value = transacciones[index].monto; //rellena el monto
//   descripcionInput.value = transacciones[index].descripcion; //rellena ladescripción
//   tipoSelect.value = transacciones[index].tipo; //
//   eliminarTransaccion(index); //elimina la transacción para que se agregue de nuevo al guardar
// }

// //Historial
// document.querySelector("#toggleHistorial").addEventListener("click", function () {
//     const historial = document.querySelector("#transacciones"); //selecciona el historial
//     //constante nombreconstante = document(html).queryselector(seleccionador)("#nombre")

//     const mostrando =
//       historial.style.display === "none" || historial.style.display === "";
//       //verificacion para ver si esta oculto el historial

//     historial.style.display =
//       historial.style.display === "none" ? "block" : "none";
//       historialText.style.display === "none" ? "block" : "none";
//       //historial > estilo > estilo display

//     if (mostrando) {
//       renderizarHistorial();
//     }
//   });

// //renderizar el historial
// function renderizarHistorial() {
//   const historial = document.querySelector("#transacciones");
//   historial.innerHTML = ""; //esto limpia el historial antes de renderizar

// const h4 = document.createElement("h4"); //crea un elemento h4
// h4.textContent = `Ultimos Movimientos`; // el texto del h4
// historial.appendChild(h4); //agrega el h4 a #transacciones > historial

//   transacciones.forEach((transaccion) => {
//     const li = document.createElement("li"); //crea un li
//     li.textContent = `${transaccion.descripcion}: ${transaccion.monto} (${transaccion.tipo})`;
//     //li.texcontent(el texto del li) = `$(variabletransaccion.valordescripcion)`

//     historial.appendChild(li); //lo sube como hijo al historial html
//   });
// }

// //filtrar transaccion
// const filtroSelect = document.querySelector("#filtro");
// filtroSelect.addEventListener("change", function () {
//   renderizarTransacciones(filtroSelect.value.toLowerCase());
// });

// //al cargar la página, renderiza transacciones
// renderizarTransacciones(); //esto muestra/ renderiza las transacciones
// calcularSaldo(); //calcula el saldo cada vez que se ejecuta la pagina.

//codigo 3

//Form
// let transacciones = [];

// const form = document.querySelector("#form");
// const montoInput = document.getElementById("formMonto");
// const descripcionInput = document.getElementById("descripción");
// const tipoSelect = document.getElementById("tipo");

// form.addEventListener("submit", function (event) {
//   event.preventDefault(); //sin esto se me reinicia la pagina

//   const monto = parseFloat(montoInput.value);
//   const descripcion = descripcionInput.value.trim();
//   const tipo = tipoSelect.value;

//   // Validación que el usuario ingrese bien los datos
//   if (isNaN(monto) || monto <= 0) {
//     Swal.fire({
//       icon: "question",
//       title: "Por favor",
//       text: "Ingresa un monto válido!",
//       timer: 1500,
//       showConfirmButton: false,
//     });
//     return;
//   }
//   if (descripcion === "") {
//     Swal.fire({
//       icon: "error",
//       title: "Oops...",
//       text: "La descripción no puede estar vacía!",
//       timer: 1500,
//       showConfirmButton: false,
//     });
//     return;
//   }

//   const saldoActual = calcularSaldo();

//   if (tipo === "gasto" && saldoActual - monto < 0) {
//     Swal.fire({
//       icon: "error",
//       title: "Oops...",
//       text: "No puedes ingresar un gasto cuando tu saldo es 0!",
//       timer: 1500,
//       showConfirmButton: false,
//     });
//     return;
//   }

//   const transaccion = { tipo, monto, descripcion };
//   transacciones.push(transaccion); // Agrega la transacción al array del inicio
//   localStorage.setItem("transacciones", JSON.stringify(transacciones));
//   renderizarTransacciones();
//   calcularSaldo();
//   form.reset();
// });

// // Carga las transacciones cuando abrimos la pagina
// if (localStorage.getItem("transacciones")) {
//   transacciones = JSON.parse(localStorage.getItem("transacciones")); //trae las transacciones guardadas
// }

// // Muestra las transacciones
// function renderizarTransacciones(filtro = "todos") {
//   const listaTransacciones = document.querySelector("#transacciones");
//   listaTransacciones.innerHTML = ""; // Limpia la lista antes de renderizar

//   transacciones.forEach((transaccion, index) => {
//     if (filtro === "todos" || transaccion.tipo.toLowerCase() === filtro) {
//       const li = document.createElement("li");
//       li.textContent = `${transaccion.descripcion}: ${transaccion.monto}`;
//       li.className =
//         transaccion.tipo.toLowerCase() === "ingreso" ? "ingreso" : "gasto";

//       // Botón para eliminar
//       const btnEliminar = document.createElement("button");
//       btnEliminar.textContent = "Eliminar";
//       btnEliminar.addEventListener("click", () => eliminarTransaccion(index));
//       li.appendChild(btnEliminar);

//       // Botón para editar
//       const btnEditar = document.createElement("button");
//       btnEditar.textContent = "Editar";
//       btnEditar.addEventListener("click", () => editarTransaccion(index));
//       li.appendChild(btnEditar);

//       listaTransacciones.appendChild(li);
//     }
//   });
// }

// // Calcular y mostrar saldo
// function calcularSaldo() {
//   const totalIngresos = transacciones.reduce(
//     (sum, transaccion) =>
//       transaccion.tipo.toLowerCase() === "ingreso"
//         ? sum + transaccion.monto
//         : sum,
//     0
//   );
//   const totalGastos = transacciones.reduce(
//     (sum, transaccion) =>
//       transaccion.tipo.toLowerCase() === "gasto"
//         ? sum + transaccion.monto
//         : sum,
//     0
//   );

//   const saldo = totalIngresos - totalGastos;

//   if (saldo < 0) {
//     Swal.fire({
//       icon: "error",
//       title: "Oops...",
//       text: "El saldo de tu cuenta no puede ser un número negativo.",
//       timer: 1500,
//       showConfirmButton: false,
//     });
//     return 0; // Devuelve 0 si el saldo es negativo
//   }

//   document.querySelector("#saldo").textContent = saldo;
//   return saldo;
// }

// // Function para eliminar transacción
// function eliminarTransaccion(index) {
//   transacciones.splice(index, 1); //elimina la transacción del array
//   localStorage.setItem("transacciones", JSON.stringify(transacciones)); //actualiza localStorage
//   renderizarTransacciones(); //vuelve a mostrar
//   calcularSaldo(); //actualiza el saldo
// }

// // Function para editar transacciónes
// function editarTransaccion(index) {
//   montoInput.value = transacciones[index].monto; //rellena el monto
//   descripcionInput.value = transacciones[index].descripcion; //rellena la descripción
//   tipoSelect.value = transacciones[index].tipo; //
//   eliminarTransaccion(index); //elimina la transacción para que se agregue de nuevo al guardar
// }

// //HISTORIAL
// document
//   .querySelector("#toggleHistorial")
//   .addEventListener("click", function () {
//     const historial = document.querySelector("#transacciones");
//     const mostrando =
//       historial.style.display === "none" || historial.style.display === "";
//     historial.style.display =
//       historial.style.display === "none" ? "block" : "none";
//     if (mostrando) {
//       renderizarHistorial();
//     }
//   });

// //funcion renderizar historial
// function renderizarTransacciones(filtro = "todos") {
//   const listaTransacciones = document.querySelector("#transacciones");
//   listaTransacciones.innerHTML = "";

//   transacciones.forEach((transaccion, index) => {
//     if (filtro === "todos" || transaccion.tipo.toLowerCase() === filtro) {
//       const li = document.createElement("li");
//       li.textContent = `${transaccion.descripcion}: ${transaccion.monto}`;

//       // Asigna clase según el tipo de transacción
//       li.className =
//         transaccion.tipo.toLowerCase() === "ingreso" ? "ingreso" : "gasto";

//       const btnEliminar = document.createElement("button");
//       btnEliminar.textContent = "Eliminar";
//       btnEliminar.addEventListener("click", () => eliminarTransaccion(index));
//       li.appendChild(btnEliminar);

//       const btnEditar = document.createElement("button");
//       btnEditar.textContent = "Editar";
//       btnEditar.addEventListener("click", () => editarTransaccion(index));
//       li.appendChild(btnEditar);

//       listaTransacciones.appendChild(li);
//     }
//   });
// }

// //filtrar transaccion
// const filtroSelect = document.querySelector("#filtro");
// filtroSelect.addEventListener("change", function () {
//   renderizarTransacciones(filtroSelect.value.toLowerCase());
// });

// //al cargar la página, renderiza transacciones
// renderizarTransacciones(); //esto muestra/ renderiza las transacciones
// calcularSaldo(); //calcula el saldo cada vez que se ejecuta la pagina,


// fetch("https://dolarapi.com/v1/dolares/blue")
//   .then(response => response.json())
//   .then(data => console.log(data));

//   async function getPrecioDolar(saldoActual) {
//     let precioDolar = 0;
  
//     try {
//       const response = await fetch("https://dolarapi.com/v1/dolares/blue");
//       if (!response.ok) {
//         throw new Error(`Caída en la red: ${response.status}`);
//       }
  
//       const data = await response.json();
//       precioDolar = data.venta;
  
//       if (typeof saldoActual === 'undefined' || isNaN(saldoActual)) {
//         throw new Error("El saldo actual no es válido.");
//       }
  
//       const saldoUsd = saldoActual / precioDolar;
//       let h3Saldo = document.querySelector("#saldoUsd");
//       h3Saldo.innerText = `Equivalente en USD (Dólar Blue): $ ${saldoUsd.toFixed(2)}`;
  
//     } catch (err) {
//       let h3Saldo = document.querySelector("#saldoUsd");
//       h3Saldo.innerText = `Equivalencia a USD no disponible`;
//       console.error("Error al obtener el precio del dólar:", err);
//     } finally {
//       console.log("Proceso de obtención del dólar finalizado");
//     }
//   }
  
//   getPrecioDolar();
//Codigo 4
// let transacciones = [];

// const form = document.querySelector("#form");
// const montoInput = document.getElementById("formMonto");
// const descripcionInput = document.getElementById("descripción");
// const tipoSelect = document.getElementById("tipo");

// form.addEventListener("submit", function (event) {
//   event.preventDefault(); // Sin esto se me reinicia la página

//   const monto = parseFloat(montoInput.value);
//   const descripcion = descripcionInput.value.trim();
//   const tipo = tipoSelect.value;

//   // Validación que el usuario ingrese bien los datos
//   if (isNaN(monto) || monto <= 0) {
//     Swal.fire({
//       icon: "question",
//       title: "Por favor",
//       text: "Ingresa un monto válido!",
//       timer: 1500,
//       showConfirmButton: false,
//     });
//     return;
//   }
//   if (descripcion === "") {
//     Swal.fire({
//       icon: "error",
//       title: "Oops...",
//       text: "La descripción no puede estar vacía!",
//       timer: 1500,
//       showConfirmButton: false,
//     });
//     return;
//   }

//   const saldoActual = calcularSaldo();

//   if (tipo === "gasto" && saldoActual - monto < 0) {
//     Swal.fire({
//       icon: "error",
//       title: "Oops...",
//       text: "No puedes ingresar un gasto cuando tu saldo es 0!",
//       timer: 1500,
//       showConfirmButton: false,
//     });
//     return;
//   }

//   const transaccion = { tipo, monto, descripcion };
//   transacciones.push(transaccion); // Agrega la transacción al array del inicio
//   localStorage.setItem("transacciones", JSON.stringify(transacciones));
//   renderizarTransacciones();
//   calcularSaldo();
//   form.reset();
// getPrecioDolar(saldoActual);
//   // Llama getPrecioDolar después de calcular el saldo
  
// });

// // Carga las transacciones cuando abrimos la página
// if (localStorage.getItem("transacciones")) {
//   transacciones = JSON.parse(localStorage.getItem("transacciones")); // Trae las transacciones guardadas
// }

// // Muestra las transacciones
// function renderizarTransacciones(filtro = "todos") {
//   const listaTransacciones = document.querySelector("#transacciones");
//   listaTransacciones.innerHTML = ""; // Limpia la lista antes de renderizar

//   transacciones.forEach((transaccion, index) => {
//     if (filtro === "todos" || transaccion.tipo.toLowerCase() === filtro) {
//       const li = document.createElement("li");
//       li.textContent = `${transaccion.descripcion}: ${transaccion.monto}`;
//       li.className =
//         transaccion.tipo.toLowerCase() === "ingreso" ? "ingreso" : "gasto";

//       // Botón para eliminar
//       const btnEliminar = document.createElement("button");
//       btnEliminar.textContent = "Eliminar";
//       btnEliminar.addEventListener("click", () => eliminarTransaccion(index));
//       li.appendChild(btnEliminar);

//       // Botón para editar
//       const btnEditar = document.createElement("button");
//       btnEditar.textContent = "Editar";
//       btnEditar.addEventListener("click", () => editarTransaccion(index));
//       li.appendChild(btnEditar);

//       listaTransacciones.appendChild(li);
//     }
//   });
// }

// // Calcular y mostrar saldo
// function calcularSaldo() {
//   const totalIngresos = transacciones.reduce(
//     (sum, transaccion) =>
//       transaccion.tipo.toLowerCase() === "ingreso"
//         ? sum + transaccion.monto
//         : sum,
//     0
//   );
//   const totalGastos = transacciones.reduce(
//     (sum, transaccion) =>
//       transaccion.tipo.toLowerCase() === "gasto"
//         ? sum + transaccion.monto
//         : sum,
//     0
//   );

//   const saldo = totalIngresos - totalGastos;

//   if (saldo < 0) {
//     Swal.fire({
//       icon: "error",
//       title: "Oops...",
//       text: "El saldo de tu cuenta no puede ser un número negativo.",
//       timer: 1500,
//       showConfirmButton: false,
//     });
//     return 0; // Devuelve 0 si el saldo es negativo
//   }

//   document.querySelector("#saldo").textContent = saldo;
//   return saldo;
// }

// // Función para eliminar transacción
// function eliminarTransaccion(index) {
//   transacciones.splice(index, 1); // Elimina la transacción del array
//   localStorage.setItem("transacciones", JSON.stringify(transacciones)); // Actualiza localStorage
//   renderizarTransacciones(); // Vuelve a mostrar
//   calcularSaldo(); // Actualiza el saldo
// }

// // Función para editar transacciones
// function editarTransaccion(index) {
//   montoInput.value = transacciones[index].monto; // Rellena el monto
//   descripcionInput.value = transacciones[index].descripcion; // Rellena la descripción
//   tipoSelect.value = transacciones[index].tipo; // Rellena el tipo
//   eliminarTransaccion(index); // Elimina la transacción para que se agregue de nuevo al guardar
// }

// // HISTORIAL
// document
//   .querySelector("#toggleHistorial")
//   .addEventListener("click", function () {
//     const historial = document.querySelector("#transacciones");
//     const mostrando =
//       historial.style.display === "none" || historial.style.display === "";
//     historial.style.display =
//       historial.style.display === "none" ? "block" : "none";
//     if (mostrando) {
//       renderizarHistorial();
//     }
//   });

// // Filtrar transacción
// const filtroSelect = document.querySelector("#filtro");
// filtroSelect.addEventListener("change", function () {
//   renderizarTransacciones(filtroSelect.value.toLowerCase());
// });

// // Al cargar la página, renderiza transacciones
// renderizarTransacciones(); // Esto muestra/ renderiza las transacciones
// calcularSaldo(); // Calcula el saldo cada vez que se ejecuta la página

// async function getPrecioDolar(saldoActual) {
//   let precioDolar = 0;

//   try {
//     const response = await fetch("https://dolarapi.com/v1/dolares/blue");
//     if (!response.ok) {
//       throw new Error(`Caída en la red: ${response.status}`);
//     }

//     const data = await response.json();
//     precioDolar = data.venta;

//     if (typeof saldoActual === 'undefined' || isNaN(saldoActual)) {
//       throw new Error("El saldo actual no es válido.");
//     }

//     const saldoUsd = saldoActual / precioDolar;
//     let h3Saldo = document.querySelector("#saldoUsd");
//     h3Saldo.innerText = `Equivalente en USD (Dólar Blue): $ ${saldoUsd.toFixed(2)}`;

//   } catch (err) {
//     let h3Saldo = document.querySelector("#saldoUsd");
//     h3Saldo.innerText = `Equivalencia a USD no disponible`;
//     console.error("Error al obtener el precio del dólar:", err);
//   } finally {
//     console.log("Proceso de obtención del dólar finalizado");
//   }
// }

// // Inicializa la obtención del precio del dólar al cargar la página
// getPrecioDolar(calcularSaldo());
//codigo 5
// let transacciones = [];

// const form = document.querySelector("#form");
// const montoInput = document.getElementById("formMonto");
// const descripcionInput = document.getElementById("descripción");
// const tipoSelect = document.getElementById("tipo");

// form.addEventListener("submit", function (event) {
//   event.preventDefault(); // Sin esto se me reinicia la página

//   const monto = parseFloat(montoInput.value);
//   const descripcion = descripcionInput.value.trim();
//   const tipo = tipoSelect.value;

//   // Validación que el usuario ingrese bien los datos
//   if (isNaN(monto) || monto <= 0) {
//     Swal.fire({
//       icon: "question",
//       title: "Por favor",
//       text: "Ingresa un monto válido!",
//       timer: 1500,
//       showConfirmButton: false,

//     });
//     return;
//   }
//   if (descripcion === "") {
//     Swal.fire({
//       icon: "error",
//       title: "Oops...",
//       text: "La descripción no puede estar vacía!",
//       timer: 1500,
//       showConfirmButton: false,
//     });
//     return;
//   }

//   const saldoActual = calcularSaldo();

//   if (tipo === "gasto" && saldoActual - monto < 0) {
//     Swal.fire({
//       icon: "error",
//       title: "Oops...",
//       text: "No puedes ingresar un gasto cuando tu saldo es 0!",
//       timer: 1500,
//       showConfirmButton: false,
//     });
//     return;
//   }

//   const transaccion = { tipo, monto, descripcion };
//   transacciones.push(transaccion); // Agrega la transacción al array del inicio
//   localStorage.setItem("transacciones", JSON.stringify(transacciones));
//   renderizarTransacciones();
//   calcularSaldo();
//   form.reset();

//   // Actualiza el saldo en USD
//   getPrecioDolar(saldoActual);
// });

// // Carga las transacciones cuando abrimos la página
// if (localStorage.getItem("transacciones")) {
//   transacciones = JSON.parse(localStorage.getItem("transacciones")); // Trae las transacciones guardadas
// }

// // Muestra las transacciones
// function renderizarTransacciones(filtro = "todos") {
//   const listaTransacciones = document.querySelector("#transacciones");
//   listaTransacciones.innerHTML = ""; // Limpia la lista antes de renderizar

//   transacciones.forEach((transaccion, index) => {
//     if (filtro === "todos" || transaccion.tipo.toLowerCase() === filtro) {
//       const li = document.createElement("li");
//       li.textContent = `${transaccion.descripcion}: ${transaccion.monto}`;
//       li.className =
//         transaccion.tipo.toLowerCase() === "ingreso" ? "ingreso" : "gasto";

//       // Botón para eliminar
//       const btnEliminar = document.createElement("button");
//       btnEliminar.textContent = "Eliminar";
//       btnEliminar.addEventListener("click", () => {
//         eliminarTransaccion(index);
//         const saldoActual = calcularSaldo();
//         getPrecioDolar(saldoActual); // Actualiza el saldo en USD después de eliminar
//       });
//       li.appendChild(btnEliminar);
//       listaTransacciones.appendChild(li);
//     }
//   });
// }

// // Calcular y mostrar saldo
// function calcularSaldo() {
//   const totalIngresos = transacciones.reduce(
//     (sum, transaccion) =>
//       transaccion.tipo.toLowerCase() === "ingreso"
//         ? sum + transaccion.monto
//         : sum,
//     0
//   );
//   const totalGastos = transacciones.reduce(
//     (sum, transaccion) =>
//       transaccion.tipo.toLowerCase() === "gasto"
//         ? sum + transaccion.monto
//         : sum,
//     0
//   );

//   const saldo = totalIngresos - totalGastos;

//   if (saldo < 0) {
//     Swal.fire({
//       icon: "error",
//       title: "Oops...",
//       text: "El saldo de tu cuenta no puede ser un número negativo.",
//       timer: 1500,
//       showConfirmButton: false,
//     });
//     return 0; // Devuelve 0 si el saldo es negativo
//   }

//   document.querySelector("#saldo").textContent = saldo;
//   return saldo;
// }

// // Función para eliminar transacción
// function eliminarTransaccion(index) {
//   transacciones.splice(index, 1); // Elimina la transacción del array
//   localStorage.setItem("transacciones", JSON.stringify(transacciones)); // Actualiza localStorage
//   renderizarTransacciones(); // Vuelve a mostrar
//   calcularSaldo(); // Actualiza el saldo
// }


// // HISTORIAL
// document
//   .querySelector("#toggleHistorial")
//   .addEventListener("click", function () {
//     const historial = document.querySelector("#transacciones");
//     const mostrando =
//       historial.style.display === "none" || historial.style.display === "";
//     historial.style.display =
//       historial.style.display === "none" ? "block" : "none";
//     if (mostrando) {
//       getPrecioDolar(saldoActual);
//       renderizarHistorial();
//     }
//   });

// // Filtrar transacción
// const filtroSelect = document.querySelector("#filtro");
// filtroSelect.addEventListener("change", function () {
//   renderizarTransacciones(filtroSelect.value.toLowerCase());
// });

// // Al cargar la página, renderiza transacciones
// renderizarTransacciones(); // Esto muestra/ renderiza las transacciones
// const saldoActualInicial = calcularSaldo(); // Calcula el saldo inicial
// getPrecioDolar(saldoActualInicial); // Obtiene el saldo en USD al cargar la página



// //precio dolar / saldo en usd
// async function getPrecioDolar(saldoActual) {
//   let precioDolar = 0;

//   try {
//     const response = await fetch("https://dolarapi.com/v1/dolares/blue");
//     if (!response.ok) {
//       throw new Error(`Caída en la red: ${response.status}`);
//     }

//     const data = await response.json();
//     precioDolar = data.venta;

//     if (typeof saldoActual === 'undefined' || isNaN(saldoActual)) {
//       throw new Error("El saldo actual no es válido.");
//     }

//     const saldoUsd = saldoActual / precioDolar;
//     let h3Saldo = document.querySelector("#saldoUsd");
//     h3Saldo.innerText = `Equivalente en USD: $ ${saldoUsd.toFixed(2)}`;

//   } catch (err) {
//     let h3Saldo = document.querySelector("#saldoUsd");
//     h3Saldo.innerText = `Equivalencia a USD no disponible`;
//     console.error("Error al obtener el precio del dólar:", err);
//   } finally {
//     console.log("Proceso de obtención del dólar finalizado");
//   }
// }

//codigo 6
let transacciones = [];

const form = document.querySelector("#form");
const montoInput = document.getElementById("formMonto");
const descripcionInput = document.getElementById("descripción");
const tipoSelect = document.getElementById("tipo");


//submit
form.addEventListener("submit", function (event) {
  event.preventDefault(); //sin esto se me reinicia la pagina

  const monto = parseFloat(montoInput.value);
  const descripcion = descripcionInput.value.trim();
  const tipo = tipoSelect.value;


  //fecha del movimiento
  const fecha = new Date();
  const dia = fecha.getDate().toString().padStart(2, '0'); 
  const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');


  // Validación que el usuario ingrese bien los datos
  if (isNaN(monto) || monto <= 0) {
    Swal.fire({
      icon: "question",
      title: "Por favor",
      text: "Ingresa un monto válido!",
      timer: 1500,
      showConfirmButton: false,
    });
    return;
  }
  if (descripcion === "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "La descripción no puede estar vacía!",
      timer: 1500,
      showConfirmButton: false,
    });
    return;

  }

  

  const transaccion = { tipo, monto, descripcion,fecha:`${dia}/${mes}` };
  transacciones.push(transaccion); // Agrega la transacción al array del inicio
  localStorage.setItem("transacciones", JSON.stringify(transacciones));
  renderizarTransacciones();
  calcularSaldo();
  actualizarSaldoUSD();
  form.reset();
});

// Carga las transacciones cuando abrimos la pagina
if (localStorage.getItem("transacciones")) {
  transacciones = JSON.parse(localStorage.getItem("transacciones")); //trae las transacciones guardadas
}

// Calcular y mostrar saldo
function calcularSaldo() {
  const totalIngresos = transacciones.reduce(
    (sum, transaccion) =>
      transaccion.tipo.toLowerCase() === "ingreso"
        ? sum + transaccion.monto
        : sum,
    0
  );
  const totalGastos = transacciones.reduce(
    (sum, transaccion) =>
      transaccion.tipo.toLowerCase() === "gasto"
        ? sum + transaccion.monto
        : sum,
    0
  );

  const saldo = totalIngresos - totalGastos;
  

  if (saldo < 0) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "El saldo de tu cuenta no puede ser un número negativo.",
      timer: 1500,
      showConfirmButton: false,
    });
    return 0; // Devuelve 0 si el saldo es negativo
  
  }

  document.querySelector("#saldo").textContent = "$ " + saldo;
  return saldo;
}


// Function para eliminar transacción
function eliminarTransaccion(index) {
  transacciones.splice(index, 1); //elimina la transacción del array
  localStorage.setItem("transacciones", JSON.stringify(transacciones));
  renderizarTransacciones(); 
  calcularSaldo(); 
  actualizarSaldoUSD(); 
}

// HISTORIAL
document
  .querySelector("#toggleHistorial")
  .addEventListener("click", function () {
    const historial = document.querySelector("#transacciones");
    const filtroSelect = document.querySelector("select#filtro");
    const mostrando =
      historial.style.display === "none" || historial.style.display === "";

    historial.style.display = mostrando ? "block" : "none";
    filtroSelect.style.display = mostrando ? "block" : "none";

    if (mostrando) {
      renderizarHistorial();
    }
  });


//funcion renderizar historial
function renderizarTransacciones(filtro = "todos") {
  const listaTransacciones = document.querySelector("#transacciones");
  listaTransacciones.innerHTML = "";

  transacciones.forEach((transaccion, index) => {
    if (filtro === "todos" || transaccion.tipo.toLowerCase() === filtro) {
      const li = document.createElement("li");
      li.textContent = `${transaccion.fecha} | ${transaccion.descripcion.toUpperCase()} : ${transaccion.monto}`;

      li.className =
        transaccion.tipo.toLowerCase() === "ingreso" ? "ingreso" : "gasto";

      const btnEliminar = document.createElement("button");
      btnEliminar.textContent = "Eliminar";
      btnEliminar.addEventListener("click", () => eliminarTransaccion(index));
      li.appendChild(btnEliminar);

      listaTransacciones.appendChild(li);
    }
  });
}

//filtrar transaccion
const filtroSelect = document.querySelector("#filtro");
filtroSelect.addEventListener("change", function () {
  renderizarTransacciones(filtroSelect.value.toLowerCase());
});

//al cargar la página, renderiza transacciones
renderizarTransacciones(); //esto muestra/ renderiza las transacciones
calcularSaldo(); //calcula el saldo cada vez que se ejecuta la pagina



//equivalente en usd
async function getPrecioDolar() {
  let precioDolar = 0;

  try {
    const response = await fetch("https://dolarapi.com/v1/dolares/blue");
    if (!response.ok) {
      throw new Error(`Caída en la red: ${response.status}`);
    }

    const data = await response.json();
    precioDolar = data.venta;

    return precioDolar;

  } catch (err) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'No se pudo obtener el precio del dólar.',
      confirmButtonText: "Entendido"
  });
  }
}

// Función para actualizar el saldo en USD
async function actualizarSaldoUSD() {
  const saldoActual = calcularSaldo();
  const precioDolar = await getPrecioDolar();
  if (precioDolar) {
    const saldoUsd = saldoActual / precioDolar;
    let h3Saldo = document.querySelector("#saldoUsd");
    h3Saldo.innerText = `Equivalente en USD (Dólar Blue): $ ${saldoUsd.toFixed(2)}`;
  }
}

actualizarSaldoUSD();



//usd compra y venta 
async function obtenerValoresDolar() {
  try {
    const response = await fetch("https://dolarapi.com/v1/dolares/blue");
    
    if (!response.ok) {
      throw new Error(`Error en la API: ${response.status}`);
    }

    const data = await response.json();

    console.log("Datos de la API:", data);

    if (data.compra && data.venta) {
      document.getElementById("compraDolar").textContent = data.compra.toFixed(2);
      document.getElementById("ventaDolar").textContent = data.venta.toFixed(2);
      
    } else {
       }
  } catch (err) {
    console.error("Error cuando se intento obtener el valor del dólar:", err);
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'No se pudo obtener el precio del dólar.',
      confirmButtonText: "Entendido"
    });
  }
}

// Llama a la función para obtener y mostrar los valores del dólar en la carga de la página
obtenerValoresDolar();


// Llama a la función para obtener y mostrar los valores del dólar en la carga de la página
obtenerValoresDolar();

//resumen
document.getElementById("resumenCuenta").addEventListener("click", () => {
  if (localStorage.getItem("sesionIniciada") === "true") {
      window.location.href = "resumen.html"; 
  } else {
      Swal.fire({
          icon: "warning",
          title: "No estás logueado",
          text: "Por favor, inicia sesión para acceder al resumen de cuenta.",
      });
  }
});
