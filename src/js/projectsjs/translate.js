// Variables globales
var recognition;
var transcription = "";
var transcriptionDisplay;

document.addEventListener('DOMContentLoaded', function() {
  setupSpeechToText();
  webkitSpeechRecognition();
});

function setupSpeechToText() {
  var startButton = document.getElementById("startButton");
  var stopButton = document.getElementById("stopButton");
  transcriptionDisplay = document.getElementById("transcription");

  // Verificar compatibilidad con la API de reconocimiento de voz
  if (!('webkitSpeechRecognition' in window)) {
    alert("Tu navegador no admite la API de reconocimiento de voz");
    return;
  }

  // Crear instancia de reconocimiento de voz
  recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;

  // Evento cuando se inicia el reconocimiento de voz
  recognition.onstart = function() {
    startButton.disabled = true;
    stopButton.disabled = false;
    transcriptionDisplay.textContent = "Escuchando...";
  };

  // Evento cuando se detiene el reconocimiento de voz
  recognition.onend = function() {
    startButton.disabled = false;
    stopButton.disabled = true;
    transcriptionDisplay.textContent = transcription;
  };

  // Evento cuando se obtiene un resultado de reconocimiento de voz
  recognition.onresult = function(event) {
    var interimTranscript = "";

    // Recorrer los resultados obtenidos
    for (var i = event.resultIndex; i < event.results.length; ++i) {
      // Verificar si el resultado es final o provisional
      if (event.results[i].isFinal) {
        transcription += event.results[i][0].transcript;
      } else {
        interimTranscript += event.results[i][0].transcript;
      }
    }

    // Mostrar el texto provisional en tiempo real
    transcriptionDisplay.textContent = transcription + interimTranscript;
  };

  // Evento click en el botón de iniciar
  startButton.addEventListener("click", function() {
    // Borrar contenido anterior
    transcription = "";
    transcriptionDisplay.textContent = "";

    // Iniciar reconocimiento de voz
    recognition.start();
  });

  // Evento click en el botón de detener
  stopButton.addEventListener("click", function() {
    recognition.stop();
  });

  // Borrar transcripción
  var clearButton = document.getElementById("clearButton");

  // Agregar evento click al botón de eliminar
  clearButton.addEventListener("click", function() {
    // Borrar contenido de transcripción
    clearTranscription();
  });
}

// Función para borrar el contenido de la transcripción
function clearTranscription() {
  transcription = "";
  transcriptionDisplay.textContent = "";
}
