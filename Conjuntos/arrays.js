
/*
// Acceder a los elementos
console.log(sabores.Andrea); // imposible
console.log(sabores['Andrea']); // imposible
console.log(sabores[0]); // devuelve el dato
*/


var sabores = [
 'chocolate',
 'chocolate blanco',
 'dulce de leche'
];

var busqueda = prompt('Ingrese el sabor a buscar');

var contador = 0;

while(contador < 4) {
    if(sabores[contador] == busqueda) {
        alert('Encontrado en la posición ' + contador);
        contador = 'salir';
    }
    contador = contador + 1;
}

sabores.push('frutilla');

console.log(sabores);