// Llama a la función de Login al cargar la página
if (localStorage.getItem("sesionIniciada") === "true") {
    alreadylogued();
} else {
    login();
}

const usuarioCorrecto = "gero";
const contraseñaCorrecta = "1";

let usuario;
let contraseña;

// Saludo 
function renderizarSaludo(){
    const saludo = document.querySelector("#saludo");
    const nombreUsuario = localStorage.getItem("nombreUsuario");
    if (nombreUsuario) {
        saludo.innerText = `Hola, ${nombreUsuario.toUpperCase()}`;
    }
}

async function login() {
    while (true) {
        const { value: userInput } = await Swal.fire({
            title: "¡Bienvenido a VanguardBank!",
            text: "Ingresa tu usuario.",
            input: "text",
            allowOutsideClick: false,
            backdrop: `rgba(0, 0, 0, 0.98)`,
            inputAttributes: {
                autocapitalize: "off",
            },
            showCancelButton: false,
            confirmButtonText: "Siguiente",
            showLoaderOnConfirm: true,
            preConfirm: (login) => {
                if (!login) {
                    Swal.showValidationMessage("Por favor, ingresa un usuario");
                }
                return login;
            },
        });

        usuario = userInput;

        if (usuario) {
            const { value: passwordInput } = await Swal.fire({
                title: "Ingresá tu contraseña",
                input: "password",
                allowOutsideClick: false,
                backdrop: `rgba(0, 0, 0, 0.98)`,
                inputAttributes: {
                    autocapitalize: "off",
                    autocorrect: "off",
                },
                showCancelButton: false,
                confirmButtonText: "Loguearme",
                showLoaderOnConfirm: true,
                preConfirm: (password) => {
                    if (!password) {
                        Swal.showValidationMessage("Por favor, ingresá una contraseña");
                    }
                    return password;
                },
            });

            contraseña = passwordInput;

            if (usuario === usuarioCorrecto && contraseña === contraseñaCorrecta) {
                // Guardar el estado de la sesión en localStorage
                localStorage.setItem("sesionIniciada", "true");
                localStorage.setItem("nombreUsuario", usuario); // Guardar el nombre del usuario

                Swal.fire({
                    icon: "success",
                    title: "¡Bienvenido!",
                    text: "Has iniciado sesión correctamente.",
                    timer: 1700,
                    backdrop: `rgba(0, 0, 0, 0.98)`,
                });
                
                renderizarSaludo();
                renderizarTransacciones();
                calcularSaldo(); // Calcula y muestra el saldo
                break;
            } else {
                await Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "Usuario o contraseña incorrectos.",
                    backdrop: `rgba(0, 0, 0, 0.98)`,
                });
            }
        }
    }
}

// Función ya logueado
function alreadylogued() {
    Swal.fire({
        icon: "success",
        title: "¡Bienvenido!",
        text: "Has iniciado sesión correctamente.",
        timer: 1700,
        backdrop: `rgba(0, 0, 0, 0.98)`,
    });

    calcularSaldo();
    renderizarSaludo();

    // Agregar evento al botón de cerrar sesión
    const logoutButton = document.getElementById("logoutButton");
    logoutButton.style.display = "block"; 
    logoutButton.addEventListener("click", cerrarSesion); 
}

// Función para calcular el saldo
function calcularSaldo() {
    const saldoElement = document.querySelector("#saldo");
    saldoElement.innerText = `Saldo: $${saldo}`;
}

// Función cerrar sesión
function cerrarSesion() {
    localStorage.removeItem("sesionIniciada");
    localStorage.removeItem("nombreUsuario"); // Limpiar el nombre del usuario
    Swal.fire({
        icon: "success",
        title: "Sesión cerrada exitosamente",
        backdrop: `rgba(0, 0, 0, 0.98)`,
        timer: 1700,
    });
    location.reload();
}
