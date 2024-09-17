//1.3 Variables

//let = "variable";
//ejemplo
//let = "platopinripal";
// variable con un valor que puede cambiar

//const = "variable-constante";
//ejemplo
//const = "NombreRestaurant";
//variable con un valor inalterable
//para volver a modificar una variable let, solo tengo que referenciarla por su nombre
//Platoprincipal = "milanesaconpapa";

//1.4 Funciones nativas
//para poner un prompt necesito declarar una variable antes
//let nombre = prompt ("Como te llamas?"); 
//para un confirm booleano se hace así
//let respuesta = confirm ("Aceptas los cookies de la pagina?");
//y para poner un alert se hace así
//alert ("Apaga el adblock porfavor")

//1.5 concatenación y operaciones con variables.
// let comida = prompt ("Que te gustaria comer hoy?");
// alert ("hoy esta espectacular para comer " + comida)


//SUMA
// let platovalor = 1000
// let bebidavalor = 500
// let total = platovalor + bebidavalor;
// alert ("el precio total del pedido es " + total)

//MULTIPLICACION
// let platovalor = 1000
// let Valordoble = platovalor * 2;
// alert ("el costo de tu pedido es " + Valordoble);

//DIVISION
// let platovalor = 1000
// let comensales = 4
// let cuenta = platovalor / comensales;
// alert ("Cada comensal deberá pagar " + cuenta)

//RESTA
// let platopinripal = 1000
// let descuento = 100
// let preciocondescuento = platopinripal - descuento;
// alert ("Este es el total, con el descuento aplicado, debes pagar " + preciocondescuento);

//2.1 CONDICIONALES Y OPERADORES
//IF (SI)
// let booleano = confirm ("Aceptas los terminos y condiciones?");
// if (true){
//     alert ("Bienvenido, puedes navegar tranquilo");
// }

//Operadores de comparación ==
// == Comparacion / Puede haber varios IF
// let tiempo = "lluvioso"
// if(tiempo == "lluvioso"){
// console.warn ("Recordá llevar paragua")
// }
// if(tiempo == "soleado"){
//     alert("Disfruta el dia")
// }

//ELSE (SINO)
// let tiempo = "lluvioso";
// if (tiempo == "lluvioso"){
//     alert ("Disfruta tu dia, pero lleva paragua")
// }else{
//     alert("Disfruta tu día")
// }

//Operador de comparacion <= o >= ( < o > )
// let edadminima = 18
// if (edadminima >=18){
//     alert("Disfruta de la disco");
// }
// else{
//     alert("no puedes entrar en la discotek")
// }

//ELSE IF (sino si)
// let edadminima = 20 ;
// if (edadminima < 18){
//     alert("Tu no pasas a la discotek")
// }
// else if(edadminima > 18){
//     alert ("Puedes pasar a la discotek")
// } 

//&& = ((TRUE) Y (TRUE)) los 2 deben ser true
// let idiomanecesario = "ingles";
// let lenguajenecesario = "html";
// if((lenguajenecesario == "html") && (Idiomanecesario == "ingles")){
//     alert ("Cumples con los requisitos para el puesto.")
// }else{
//     alert("No cumples con los requisitos para el puesto")
// }

// OR || =  ((TRUE) O (FALSE)) al menos 1 debe ser true
// let Idiomanecesario = "ingles"
// let lenguajenecesario = "html"
// if ((Idiomanecesario == "ingles") || (lenguajenecesario="html")){
//     alert("puedes acceder al puesto")
// } else{
//     alert("no puedes acceder al puesto")
// }


//true &Y& true |O| true

// let idiomanecesario = "ingles";
// let lenguajenecesario = "html";

// if ((idiomanecesario == "frances" )&&(lenguajenecesario == "html") || (idiomanecesario == "ingles") ){
//     alert ("Felicidades, tienes aptitudes para el puesto");
// }else {
//     alert ("No cumples con las habilidades necesarias para el puesto.");
// }

// 2.4 CICLOS

// for(let i=0; i<10; i++){
//     console.log ("Intento nº " + i)
// }

//break y continue 
// for(let i=1; i<=10; i++){
//     if(i==5){
//         console.log("Intento detenido")
//         continue //o break
//     }else{console.log("Intento numero "+ i)}
// }


//2.5 While
// let i = 1;
// while (i<6){
//     console.log("intento Nº "+ i);
//     i++;
// }
//while primero evalua la condicion y despues lo ejecuta

//do while
//do while ejecuta lo que pone el usuario y luego lo evalua,entonces
//si el usuario pone una letra este se "imprime" y luego detecta y corta el ciclo
// let numero = 0;
// do{ numero = prompt ("Ingrese un número");
//     console.log(numero);
// }while(parseInt(numero));

//2.6 SWITCH
// let numero = parseInt (prompt("Bienvenido al banco, Ingrese el numero de la accion que quiere ejecutar, 1 Cuentas , 2 Retiros , 3 Deposito, otro numero para salir "))

// switch (numero){
//     case 1:
//     alert("Su numero de cuentas es 19321/3")
//     break;

//     case 2:
//     alert ("su limite de retiro es de 5000")
//     break;

//     case 3:
//     alert ("su limite de deposito es de 10000")
//     break;

//     default:
//     alert ("gracias por su visita")
//     break 
// }


//calculadora clase 3

// function sumar (){
//     let numeroA = parseInt(prompt("ingrese el primer numero"))
//     let numeroB = parseInt(prompt("Ingrese el segundo numero"))
//     let resultado = numeroA + numeroB
//     alert(numeroA+ " + "+ numeroB + "="+ resultado)
// }
// sumar() 

//3.1 Concepto de función

//funciones declaradas


//funcion () {codigo a ejecutar}
// function mifuncion(){
//     console.log("uno");
//     console.log("dos");
// }

//"invocando" la funcion o ejecutandola de esta manera
//hay que hacerlo despues de declarar la funcion sino no anda
// mifuncion()


//RETURN
//ejemplo

// function sumar (){
//     let num = 10;
//     let num2 = 5;

//     return num * num2;
// }

// console.log(sumar())
//para ver com funciona una funcion debemos meterla en un console.log

//FUNCION CONTENIDA DENTRO DE UNA VARIABLE

// function retornarstring(){
//     console.log("uno")
//     console.log("dos")
//     return "la funcion devuelve un string de texto"
// }

// para ingresarla dentro de la variable lo haremos así

// let devuelvevalor = retornarstring()

// y Para llamarla lo haremos llamando a la variable y no a la funcion

// console.log(devuelvevalor)

//parametros

// function saludar (nombre,edad) {
// console.log("Hola mi nombre es " + nombre + " y tengo " + edad + "años")
// }
// saludar("gero",22)


//Funciones Expresadas

// const funcionexpresada = function(){
//     console.log("hola, soy una funcion expresada");
// }

// funcionexpresada()
//-------------
//si la "invocamos" antes de declarar la funcion de igual forma funciona
 
