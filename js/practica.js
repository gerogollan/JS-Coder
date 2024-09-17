

alert("Bienvenido, haz click en aceptar para utilizar la calculadora.")



function sumar (){
               let numero1 = parseInt(prompt ("Ingrese el primer numero"));
               let numero2 = parseInt(prompt ("Ingrese el segundo numero"));
               let resultado = numero1 + numero2;
               alert (numero1 + " + " + numero2 + " = " + resultado)
            }

function restar (){
                let numero1 = parseInt(prompt ("Ingrese el primer numero"));
                let numero2 = parseInt(prompt ("Ingrese el segundo numero"));
                let resultado = numero1 - numero2;
                alert (numero1 + " - " + numero2 + " = " + resultado)
             }

function multiplicar (){
                let numero1 = parseInt(prompt ("Ingrese el primer numero"));
                let numero2 = parseInt(prompt ("Ingrese el segundo numero"));
                let resultado = numero1 * numero2;
                alert (numero1 + " X " + numero2 + " = " + resultado)
             }
function dividir (){
                let numero1 = parseInt(prompt ("Ingrese el primer numero"));
                let numero2 = parseInt(prompt ("Ingrese el segundo numero"));
                let resultado = numero1 / numero2;
                alert (numero1 + " / " + numero2 + " = " + resultado)
                      if (numero2 === 0) {
                          alert("Error: División por cero no permitida.");
                          return;}
             }

 


function ejecutarcalculadora(){
    let repetir = true;


     while (repetir){ 

        let respuesta = parseInt(prompt("Que tipo de operación quieres hacer?  \n 1) Suma  \n 2) Resta \n 3) Multiplicación  \n 4) Division  \n Otro numero para salir del sistema."));

        switch (respuesta) {
            case 1:
            sumar()
            break;
    
        case 2:
            restar()
            break;

        case 3 :
            multiplicar()
            break;

        case 4 :
        dividir()
        break;}

    default :
    alert("Gracias por utilizar la calculadora.")
    repetir = false
    break; 
}}
// Función principal para ejecutar el ciclo de la calculadora
function ejecutarCalculadora() {
    let repetir = true;

    while (repetir) {
        let respuesta = parseInt(prompt("¿Qué tipo de operación quieres hacer? \n 1) Suma \n 2) Resta \n 3) Multiplicación \n 4) División \n Otro número para salir del sistema."), 10);

        switch (respuesta) {
            case 1:
                sumar();
                break;
            case 2:
                restar();
                break;
            case 3:
                multiplicar();
                break;
            case 4:
                dividir();
                break;
            default:
                alert("Gracias por utilizar la calculadora.");
                repetir = false; // Salir del ciclo
                break;
        }

        if (repetir) {
            repetir = confirm("¿Quieres repetir el ciclo?");
        }
    }
}