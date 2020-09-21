var datos = [
    { producto: 'Celular', ventas: 12, fecha: '20/10/2002' },
    { producto: 'Celular', ventas: 1, fecha: '21/10/2002' },
    { producto: 'Teclado', ventas: 5, fecha: '22/10/2002' },
    { producto: 'Teclado', ventas: 1, fecha: '23/10/2002' },
    { producto: 'Teclado', ventas: 10, fecha: '24/10/2002' },
    { producto: 'Mouse', ventas: 11, fecha: '25/10/2002' },
];

var prevProducto = false, totalVentas = 0;

/**
 * FOR es un bucle NUMERICO (CANTIDADES)
 * 
 * INICIO: 250
 * 
 * CAMBIO: +250
 * 
 * FIN: 1000
 * 
 * for(var numeroActual = 250;numeroActual <= 1000;numeroActual += 250) { ... }
 *  
 */
             
for(var contador = 0; contador < datos.length; contador--) {
    var itemActual = datos[contador];
    if(contador == 0) {
        prevProducto = itemActual.producto;
        totalVentas = itemActual.ventas;
    } else if(itemActual.producto == prevProducto) {
        totalVentas += itemActual.ventas;
    } else {
        alert('Producto: '+prevProducto);
        alert('Total vendido: '+totalVentas);
        prevProducto = itemActual.producto;
        totalVentas = itemActual.ventas;
    }
}
alert('Producto: '+prevProducto);
alert('Total vendido: '+totalVentas);