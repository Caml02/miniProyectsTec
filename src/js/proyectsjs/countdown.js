document.addEventListener('DOMContentLoaded', function() {

    toggleCountDown();
    startCountDown();

});

function toggleCountDown() {
    var cuentaRegresivaDiv = document.getElementById("countDown");
    cuentaRegresivaDiv.style.display = cuentaRegresivaDiv.style.display === "none" ? "block" : "none";
  
    if (cuentaRegresivaDiv.style.display === "block") {
      startCountDown();
    }
  }
  
  function startCountDown() {
    var contadorDiv = document.getElementById("count-time");
    var fechaObjetivo = new Date("January 1, " + (new Date().getFullYear() + 1) + " 00:00:00").getTime();
  
    var intervalo = setInterval(function() {
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
  