// Variables
var idActual = 0,
  juegoActual = "",
  ventaActual = 0,
  fechaActual = "",
  esPrimeraVuelta = true,
  idPrevio = 0,
  total = 0;

// INICIO

// Repetir ....
do {
  // Pedir idActual, juegoActual, ventaActual, fechaActual
  idActual = Number(prompt("Ingrese el id actual"));
  juegoActual = prompt("Ingrese el juego actual");
  ventaActual = Number(prompt("Ingrese las ventas del juego"));
  fechaActual = prompt("Ingrese la fecha");

  // Si esPrimeraVuelta
  if (esPrimeraVuelta) {
    // idPrevio = idActual
    idPrevio = idActual;
    // total = ventaActual
    total = ventaActual;
    // esPrimeraVuelta = Falso
    esPrimeraVuelta = false;
    // Sino
  } else {
    // Si idActual == idPrevio
    if (idActual == idPrevio) {
      // total = total + ventaActual
      total = total + ventaActual;
    }
    // Sino
    else {
      // Mostrar "ID: "+idPrevio
      alert("ID: " + idPrevio);
      // Mostrar "Total: "+total
      alert("Total: " + total);
      // idPrevio = idActual
      idPrevio = idActual;
      // total = ventaActual
      total = ventaActual;
    }
  }
  // ... mientras haya nuevos registros
} while (confirm("¿Hay más registros?"));

// Mostrar "ID: "+idPrevio
alert("ID: " + idPrevio);
// Mostrar "Total: "+total
alert("Total: " + total);

// FIN
