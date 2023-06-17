document.addEventListener('DOMContentLoaded', function() {
    setRating();
  });
  
  let selectedRating = 0;
  
  function setRating(rating) {
    const stars = document.querySelectorAll('.star');
  
    for (let i = 0; i < stars.length; i++) {
      if (i < rating) {
        stars[i].classList.add('selected');
      } else {
        stars[i].classList.remove('selected');
      }
    }
  
    selectedRating = rating; // Actualización: asignar el rating seleccionado
  
    document.getElementById('selectedRating').textContent = rating;
  }
  
  function submitRating() {
    var rating = document.getElementById("selectedRating").textContent;
    var comments = document.getElementById("comments").value;
    
    fetch("http://localhost:5000/submit_rating", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ rating: rating, comments: comments })
    })
    .then(function(response) {
      if (response.ok) {
        alert("Calificación enviada correctamente");
      } else {
        alert("Error en la respuesta del servidor");
      }
    })
    .catch(function(error) {
      alert("Error en la solicitud: " + error.message);
    });
  }
  