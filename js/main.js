
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
