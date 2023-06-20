document.addEventListener('DOMContentLoaded', function() {
  toggleScroll();
  startScrollInfinito();
});

function toggleScroll() {
  var toggleScrollContainer = document.getElementById("infiniteScroll");
  toggleScrollContainer.classList.toggle("hidden");
}

function startScrollInfinito() {
  var scrollContainer = document.getElementById("infiniteScrollContainer");
  var miniproyectsContainer = document.getElementById("miniproyects");
  var isLoading = false;
  var pageNumber = 1;

  function loadMoreContent() {
    if (isLoading) {
      return;
    }

    isLoading = true;

    setTimeout(function() {
      var newContent = "<p>Nuevo contenido cargado en la página " + pageNumber + "</p>";
      scrollContainer.innerHTML += newContent;

      pageNumber++;
      isLoading = false;
    }, 1000);
  }

  function isElementAtBottom() {
    var miniproyectsRect = miniproyectsContainer.getBoundingClientRect();
    var scrollContainerRect = scrollContainer.getBoundingClientRect();
    var scrollContainerBottom = scrollContainerRect.top + scrollContainerRect.height;
    var miniproyectsBottom = miniproyectsRect.top + miniproyectsRect.height;

    return scrollContainerBottom >= miniproyectsBottom;
  }

  function handleScroll() {
    if (isElementAtBottom()) {
      loadMoreContent();
    }
  }

  window.addEventListener("scroll", handleScroll);

  handleScroll();
}
