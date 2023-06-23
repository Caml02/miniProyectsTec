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
      initializeHangman();
    })
    .catch(function(error) {
      console.error("Error en la solicitud: " + error.message);
    });

  function initializeHangman() {
    const form = document.getElementById('guessForm');
    const restartButton = document.getElementById('restartButton');

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

        remainingAttempts = data.remaining_attempts;
        gameOver = data.game_over;

        document.getElementById('message').textContent = message;
        document.getElementById('guessedLetters').textContent = "Letras adivinadas: " + guessedLetters;
        document.getElementById('remainingAttempts').textContent = "Intentos restantes: " + remainingAttempts;

        if (gameOver) {
          if (remainingAttempts === 0) {
            alert("Has perdido. La palabra era: " + word);
          } else {
            alert("¡Has adivinado la palabra oculta!");
          }
          restartButton.disabled = false;
        }
      })
      .catch(function(error) {
        console.error("Error en la solicitud: " + error.message);
      });
    });

    restartButton.addEventListener('click', function(event) {
      event.preventDefault();

      fetch("http://localhost:5000/restart", {
        method: "POST"
      })
      .then(function(response) {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error en la respuesta del servidor");
        }
      })
      .then(function(data) {
        word = data.word;
        gameOver = false;
        remainingAttempts = 5;

        document.getElementById('message').textContent = "Adivina la palabra";
        document.getElementById('guessedLetters').textContent = "Letras adivinadas: ";
        document.getElementById('remainingAttempts').textContent = "Intentos restantes: " + remainingAttempts;
        restartButton.disabled = true;
      })
      .catch(function(error) {
        console.error("Error en la solicitud: " + error.message);
      });
    });
  }
});
