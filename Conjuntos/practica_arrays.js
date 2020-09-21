var sabores = [];

do {

    var item = prompt('¿Qué sabor quieres agregar?');

    if(item != '') {
        sabores.push(item);
    }

} while(confirm('¿Desea agregar más sabores?'));

alert('Mira tus gustos en la consola');
console.log(sabores);