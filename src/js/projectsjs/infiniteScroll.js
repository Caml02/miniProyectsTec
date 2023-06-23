document.addEventListener('DOMContentLoaded', function() {
  var isLoading = false;
  var pageNumber = 1;
  var container = document.getElementById('infiniteScrollContainer');
  var threshold = 200; // Píxeles antes del final del contenido para cargar más elementos

  // Función para cargar más contenido
  function loadMoreContent() {
    if (!isLoading) {
      isLoading = true;
      var loader = document.createElement('div');
      loader.classList.add('loader');
      container.appendChild(loader);

      // Simular una solicitud de contenido
      setTimeout(function() {
        for (var i = 1; i <= 10; i++) {
          var item = document.createElement('p');
          item.textContent = 'Elemento ' + ((pageNumber - 1) * 10 + i);
          container.appendChild(item);
        }

        isLoading = false;
        pageNumber++;
        container.removeChild(loader);
      }, 1000);
    }
  }

  // Función para verificar si se debe cargar más contenido al hacer scroll
  function checkScroll() {
    var scrollPosition = window.innerHeight + window.pageYOffset;
    var contentHeight = container.offsetHeight;

    if (scrollPosition > contentHeight - threshold) {
      loadMoreContent();
    }
  }

  // Agregar el evento de scroll para cargar más contenido
  window.addEventListener('scroll', checkScroll);

  // Cargar contenido inicial
  loadMoreContent();
});
