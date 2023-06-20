document.addEventListener('DOMContentLoaded', function() {
  var intervalo; // Declarar la variable intervalo en un ámbito superior

  toggleCountDown();
  startCountDown();

  function toggleCountDown() {
    var cuentaRegresivaDiv = document.getElementById("countDown");
    cuentaRegresivaDiv.classList.toggle("hidden");

    if (cuentaRegresivaDiv.classList.contains("hidden")) {
      clearInterval(intervalo);
    } else {
      startCountDown();
    }
  }

  function startCountDown() {
    var contadorDiv = document.getElementById("count-time");
    var fechaObjetivo = new Date("January 1, " + (new Date().getFullYear() + 1) + " 00:00:00").getTime();

    intervalo = setInterval(function() { // Asignar el intervalo a la variable intervalo
      var ahora = new Date().getTime();
      var diferencia = fechaObjetivo - ahora;

      var dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
      var horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
      var segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

      contadorDiv.innerHTML = dias + "d " + horas + "h " + minutos + "m " + segundos + "s ";

      if (diferencia < 0) {
        clearInterval(intervalo);
        contadorDiv.innerHTML = "¡Feliz año nuevo!";
      }
    }, 1000);
  }
});
