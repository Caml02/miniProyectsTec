document.addEventListener('DOMContentLoaded', function() {
    let remainingAttempts = 5;
    let gameOver = false;
    let word = '';
  
    fetch("http://localhost:5000/get_word")
      .then(function(response) {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error en la respuesta del servidor");
        }
      })
      .then(function(data) {
        word = data.word;
      })
      .catch(function(error) {
        console.error("Error en la solicitud: " + error.message);
      });
  
    const form = document.getElementById('guessForm');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const letterInput = document.getElementById('letterInput');
      const letter = letterInput.value.toUpperCase();
      letterInput.value = '';
  
      if (gameOver) {
        return;
      }
  
      fetch("http://localhost:5000/guess", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ letter: letter })
      })
      .then(function(response) {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error en la respuesta del servidor");
        }
      })
      .then(function(data) {
        const message = data.message;
        const guessedLetters = data.guessed_letters.join(', ');
  
        if (data.remaining_attempts >= 0) {
          remainingAttempts = data.remaining_attempts;
        }
  
        document.getElementById('message').textContent = message;
        document.getElementById('guessedLetters').textContent = "Letras adivinadas: " + guessedLetters;
        document.getElementById('remainingAttempts').textContent = "Intentos restantes: " + remainingAttempts;
  
        if (remainingAttempts === 0) {
          gameOver = true;
          swal("Has perdido. La palabra era: " + word, {
            className: "red-bg",
          });
        } else if (!message.includes("La letra no se encuentra")) {
          if (guessedLetters.length === word.length) {
            gameOver = true;
            swal("¡Has adivinado la palabra oculta!", {
              className: "green-bg",
            });
          }
        }
      })
      .catch(function(error) {
        console.error("Error en la solicitud: " + error.message);
      });
    });
  });
  