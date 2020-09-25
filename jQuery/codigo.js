// 1. Que son los eventos
// a. Evento que sucede
// Acontecimiento importante
// b. Escuchador del evento que sucede (Listeners)
// Asignador de callback al 'dispatch' de un evento
// 2. Para qué sirven
// 3. Como se implementan
// Crear un evento
// Crear el escuchador de un evento ya existente
// a. Mediante los atributos on de HTML
//  V: Es simple y rápido
//  D: No fomenta PRU
// b. Mediante propiedades del Document
//  V: Fomenta PRU
//  D: Al igual que el anterior, puedo asignar solo un callback a la vez
// c. API EventTarget


/*
Lugar donde ocurre el evento: button
El evento en sí mismo: click con boton izquierdo
        
Callback a ejecutar cuando suceda el evento: function() {
    alert('Hiciste click en el code');
}
*/
var btnClick = document.getElementById('btnClick');

btnClick.onclick = function() {
    alert("Hiciste click en el boton :) - DESDE JS x2");
};

btnClick.onclick = function() {
    alert('Otro callback');
}