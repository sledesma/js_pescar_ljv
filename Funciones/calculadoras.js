// Calculadoras
/**
 * @param numero1 Primer numero
 * @param numero2 Segundo numero
 * @returns Un array con las cuatro operaciones aritméticas
 */

 // Mostrar por consola las cuatro operaciones
 // básicas
function calculadoraInicial(numero1, numero2) {
    var suma = numero1 + numero2;
    var resta = numero1 - numero2;
    var multiplicacion = numero1 * numero2;
    var división = numero1 / numero2;

    var resultado = {
        suma: suma,
        resta: resta,
        multiplicacion: multiplicacion,
        división: división
    }

    console.log(resultado);
}

// Retorna un objeto con las cuatro operaciones básicas
function calculadoraBasica(numero1, numero2) {
    var suma = numero1 + numero2;
    var resta = numero1 - numero2;
    var multiplicacion = numero1 * numero2;
    var división = numero1 / numero2;

    var resultado = {
        suma: suma,
        resta: resta,
        multiplicacion: multiplicacion,
        división: división
    }

    return resultado;
}

// Retorna el resultado de la operación elegida
// o false en caso de error
function calculadoraMedia(numero1, numero2, operacion) {

    var resultado = false; // false 
    switch(operacion) {
        case 'sumar':
            resultado = numero1 + numero2;
        break;

        case 'restar':
            resultado = numero1 - numero2;
        break;

        case 'multiplicar': 
            resultado = numero1 * numero2;
        break;

        case 'dividir':
            if(numero2 != 0) {
                resultado = numero1 / numero2;
            }
        break;
    }
    return resultado;
}

// Retorna el resultado de la operación elegida
// o false en caso de error. Si no se pasa la 
// operacion, asume que es una suma.
function calculadoraMediaAvanzada(numero1, numero2, operacion = 'sumar') {
    var resultado = false; // false 
    switch(operacion) {
        case 'sumar':
            resultado = numero1 + numero2;
        break;

        case 'restar':
            resultado = numero1 - numero2;
        break;

        case 'multiplicar': 
            resultado = numero1 * numero2;
        break;

        case 'dividir':
            if(numero2 != 0) {
                resultado = numero1 / numero2;
            }
        break;
    }
    return resultado;
}

// Callbacks: función que se pasa como
// parámetro a otra función
// PARAMETRIZAR ACCIONEs
function calculadoraAvanzada(numero1, numero2, procesarResultado, operacion = 'sumar') {
    var resultado = false; // false 
    switch(operacion) {
        case 'sumar':
            resultado = numero1 + numero2;
        break;

        case 'restar':
            resultado = numero1 - numero2;
        break;

        case 'multiplicar': 
            resultado = numero1 * numero2;
        break;

        case 'dividir':
            if(numero2 != 0) {
                resultado = numero1 / numero2;
            }
        break;
    }
    procesarResultado(resultado);
}

