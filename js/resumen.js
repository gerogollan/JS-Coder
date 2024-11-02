// Verifica si el usuario está logueado
if (localStorage.getItem("sesionIniciada") !== "true") {
    Swal.fire({
        text: "Debes iniciar sesión para ver el resumen de tu cuenta.",
        allowOutsideClick: false,
        backdrop: `rgba(0, 0, 0, 0.98)`,
    });
    window.location.href = "index.html";
} else {
    document.getElementById("fechaActual").innerText = new Date().toLocaleDateString();
    cargarTransacciones();
}


//numero cuenta generado aleatoriamente
let numeroCuenta = document.querySelector("#numeroCuenta");

const creoNumeroCuenta = () => Math.floor(Math.random() * 5000000);
numeroCuenta.innerText = creoNumeroCuenta();




// Cargar las transacciones y calcula el saldo total en el resumen
function cargarTransacciones() {
    const transacciones = JSON.parse(localStorage.getItem("transacciones")) || [];
    const listaTransacciones = document.querySelector("#listaTransacciones");

    let totalSaldo = 0;

    transacciones.forEach(transaccion => {
        const li = document.createElement("li");
        li.textContent = `${transaccion.fecha} | ${transaccion.descripcion.toUpperCase()} : ${transaccion.monto} (${transaccion.tipo})`;
        listaTransacciones.appendChild(li);

        // Calcular saldo total
        if (transaccion.tipo.toLowerCase() === "ingreso") {
            totalSaldo += transaccion.monto;
        } else if (transaccion.tipo.toLowerCase() === "gasto") {
            totalSaldo -= transaccion.monto;
        }
    });

    document.getElementById("totalSaldo").textContent = totalSaldo;
}

// Cerrar sesión en el resumen
document.getElementById("logoutButton").addEventListener("click", () => {
    localStorage.removeItem("sesionIniciada");
    localStorage.removeItem("nombreUsuario");
    Swal.fire("Sesión cerrada correctamente, volverás al inicio");
    window.location.href = "../index.html";
});


