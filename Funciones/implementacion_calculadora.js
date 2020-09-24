      /*
        // Probar calculadoras.js
        var numero1 = Number(prompt('..'));
        var resultados = calculadoraMediaAvanzada(numero1, 1);

        if(resultados) {
            console.log(resultados);
        } else {
            console.log('Incorrecto');
        }
*/

calculadoraAvanzada(
    20,
    10,
    function (res) {
      if (res > 10) {
        console.log("Es mayor a 10");
      } else {
        alert("Error");
      }
    },
    "sumar"
  );

  /**
   * B. calculadoraAvanzada(1, 2, auxiliar)
   */