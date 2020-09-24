// 1. Reutilizar código
// 2. Encapsular codigo
/*
2 + 2 = 4
2 + 4 = 6
2 + 5 = 7
---------------
2 + n = on // GENERALIZAR
*/
/*
var num = 10;
var num2 = 20;
var resultado = num + num2;
console.log(resultado);

var num = 18;
var num2 = 27;
var resultado = num + num2;
console.log(resultado);

var num = 56;
var num2 = 70;
var resultado = num + num2;
console.log(resultado);

var num = Number(prompt('Ingrese el numero 1'));
var num2 = Number(prompt('Ingrese el numero 2'));
var resultado = num + num2;
console.log(resultado);
// ---------------------------------
// GENERALIZAMOS LOS CASOS ANTERIORES
var num = PRIMER_NUMERO_AQUI;
var num2 = SEGUNDO_NUMERO_AQUI;
var resultado = num + num2;
console.log(resultado);
*/

// Declarar la función
function sumarDosNumeros(numero1, numero2) {
    var resultado = numero1 + numero2;
    console.log(resultado);
}

// Invocar o Llamar
sumarDosNumeros(1, 2);
sumarDosNumeros(5, 2);
sumarDosNumeros(1, 10);