let transacciones = []; // Array para guardar las transacciones

const form = document.querySelector("#form"); //constante que selecciona el formulario
const montoInput = document.getElementById("formMonto"); //const para los datos del form, monto
const descripcionInput = document.getElementById("descripción");//descripcion
const tipoSelect = document.getElementById("tipo");//tipo de movimiento

form.addEventListener("submit", function (event) { //evento
  event.preventDefault(); //sin esto se me reinicia la pagina

  const monto = parseFloat(montoInput.value); //recibe el monto y lo transpasa como numero
  const descripcion = descripcionInput.value.trim(); 
  const tipo = tipoSelect.value;

  // Valida que el usuario ingrese bien los datos
  if (isNaN(monto) || monto <= 0) { //si isnotanumber(monto) o monto igual o menor a 0 tira el alert
    alert("Por favor, ingresa un monto válido.");
    return;
  }
  if (descripcion === "") { //si la descripcion esta vacia te tira el alert
    alert("La descripción no puede estar vacía.");
    return;
  }

  const transaccion = { tipo, monto, descripcion };
  transacciones.push(transaccion); // Agrega la transacción al array
  localStorage.setItem("transacciones", JSON.stringify(transacciones)); // Guarda en localStorage
  renderizarTransacciones();
  calcularSaldo();
  form.reset(); // resetea el formulario
});

// recarga las transacciones cuando abrimos la pagina
if (localStorage.getItem("transacciones")) {
  transacciones = JSON.parse(localStorage.getItem("transacciones")); //trae las transacciones guardadas
}

// muestra las transacciones
function renderizarTransacciones(filtro = "todos") {
  const listaTransacciones = document.querySelector("#transacciones");
  listaTransacciones.innerHTML = ""; // Limpia la lista antes de renderizar

  transacciones.forEach((transaccion, index) => {
    if (filtro === "todos" || transaccion.tipo.toLowerCase() === filtro) {
      const li = document.createElement("li");
      li.textContent = `${transaccion.descripcion}: ${transaccion.monto}`;
      li.className =
        transaccion.tipo.toLowerCase() === "ingreso" ? "ingreso" : "gasto";

      //boton para eliminar
      const btnEliminar = document.createElement("button"); //crea el button
      btnEliminar.textContent = "Eliminar"; //este es el texto del button
      btnEliminar.addEventListener("click", () => eliminarTransaccion(index));
      li.appendChild(btnEliminar);

      //button para editar
      const btnEditar = document.createElement("button");
      btnEditar.textContent = "Editar";
      btnEditar.addEventListener("click", () => editarTransaccion(index)); //evento para editar
      li.appendChild(btnEditar);

      listaTransacciones.appendChild(li); // Agrega el nuevo elemento a la lista
    }
  });
}

//calcular y mostrar saldo
function calcularSaldo() {
  const totalIngresos = transacciones.reduce(
    (sum, transaccion) =>
      transaccion.tipo === "Ingreso" ? sum + transaccion.monto : sum,
    0
  );
  const totalGastos = transacciones.reduce(
    (sum, transaccion) =>
      transaccion.tipo === "Gasto" ? sum + transaccion.monto : sum,
    0
  );
  const saldo = totalIngresos - totalGastos;
  if (saldo < 0) { //if(SI) saldo < 0 genera un alert
    alert("El Saldo de tu cuenta no puede ser un numero negativo");
  }
  document.querySelector("#saldo").textContent = saldo;
}

//function para eliminar transacción
function eliminarTransaccion(index) {
  transacciones.splice(index, 1); //elimina la transacción del array
  localStorage.setItem("transacciones", JSON.stringify(transacciones)); //actualiza localStorage
  renderizarTransacciones(); //vuelve a mostrar
  calcularSaldo(); //actualiza el saldoz
}

//funcion para editar transacciónes
function editarTransaccion(index) {
  montoInput.value = transacciones[index].monto; //rellena el monto
  descripcionInput.value = transacciones[index].descripcion; //rellena ladescripción
  tipoSelect.value = transacciones[index].tipo; //
  eliminarTransaccion(index); //elimina la transacción para que se agregue de nuevo al guardar
}

//Historial
document.querySelector("#toggleHistorial").addEventListener("click", function () {
    const historial = document.querySelector("#transacciones"); //selecciona el historial
    //constante nombreconstante = document(html).queryselector(seleccionador)("#nombre")

    const mostrando =
      historial.style.display === "none" || historial.style.display === "";
      //verificacion para ver si esta oculto el historial

    historial.style.display =
      historial.style.display === "none" ? "block" : "none";
      historialText.style.display === "none" ? "block" : "none";
      //historial > estilo > estilo display 

    if (mostrando) {
      renderizarHistorial();
    }
  });

//renderizar el historial
function renderizarHistorial() {
  const historial = document.querySelector("#transacciones");
  historial.innerHTML = ""; //esto limpia el historial antes de renderizar

const h4 = document.createElement("h4"); //crea un elemento h4
h4.textContent = `Ultimos Movimientos`; // el texto del h4
historial.appendChild(h4); //agrega el h4 a #transacciones > historial

  transacciones.forEach((transaccion) => {
    const li = document.createElement("li"); //crea un li
    li.textContent = `${transaccion.descripcion}: ${transaccion.monto} (${transaccion.tipo})`; 
    //li.texcontent(el texto del li) = `$(variabletransaccion.valordescripcion)`

    historial.appendChild(li); //lo sube como hijo al historial html
  });
}

//filtrar transaccion
const filtroSelect = document.querySelector("#filtro");
filtroSelect.addEventListener("change", function () {
  renderizarTransacciones(filtroSelect.value.toLowerCase());
});

//al cargar la página, renderiza transacciones
renderizarTransacciones(); //esto muestra/ renderiza las transacciones
calcularSaldo(); //calcula el saldo cada vez que se ejecuta la pagina.
