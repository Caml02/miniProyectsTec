document.addEventListener('DOMContentLoaded', function() {

    darkMode();
    eventListeners();
    toggleProjectJS();
    changeProject();
    toggleProjectPY();
    changeProjectPY();
        
});


/** DARK MODE FUNCTION**/


function darkMode() {
    const preferenceDarkMode = window.matchMedia('(prefers-color-sheme: dark)');

    if(preferenceDarkMode.matches) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }

    preferenceDarkMode.addEventListener('change', function() {
        if(preferenceDarkMode.matches) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    });

    const botonDarkMode = document.querySelector('.dark-mode-boton');
    botonDarkMode.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });
}

/** MOBILE MENU FUNCTION**/

function eventListeners() {
    const mobileMenu = document.querySelector('.mobile-menu');

    mobileMenu.addEventListener('click', navegacionResponsive);
}

function navegacionResponsive() {
    const navegacion = document.querySelector('.navegacion');

    navegacion.classList.toggle('mostrar')
}

/**Miniprojects-container  JS **/

var activeProject = null;

function toggleProjectJS(projectId) {
  var miniprojectsContainer = document.getElementById('miniprojects');
  var project = document.getElementById(projectId);

  if (activeProject !== null) {
    var activeProjectElement = document.getElementById(activeProject);
    activeProjectElement.classList.add('hidden');
  }

  if (activeProject === projectId) {
    miniprojectsContainer.classList.add('hidden');
    activeProject = null;
  } else {
    project.classList.remove('hidden');
    miniprojectsContainer.classList.remove('hidden');
    activeProject = projectId;
  }
}

function changeProject(projectId) {
  var projects = document.getElementsByClassName('project-content');
  for (var i = 0; i < projects.length; i++) {
    projects[i].style.display = 'none';
  }

  var project = document.getElementById(projectId);
  project.style.display = 'block';
}


// Miniproyects Python 

function toggleProjectPY(projectId) {

  var miniprojectsContainer = document.getElementById('miniprojectsPY');
  var project = document.getElementById(projectId);

  if (activeProject !== null) {
    var activeProjectElement = document.getElementById(activeProject);
    activeProjectElement.classList.add('hidden');
  }

  if (activeProject === projectId) {
    miniprojectsContainer.classList.add('hidden');
    activeProject = null;
  } else {
    project.classList.remove('hidden');
    miniprojectsContainer.classList.remove('hidden');
    activeProject = projectId;
  }
}

function changeProjectPY(projectId) {
  var projects = document.getElementsByClassName('project-contentPY');
  for (var i = 0; i < projects.length; i++) {
    projects[i].style.display = 'none';
  }

  var project = document.getElementById(projectId);
  project.style.display = 'block';
}

// Go to ID

document.addEventListener('DOMContentLoaded', function() {
  var enlaces = document.querySelectorAll('.navegacion a');

  for (var i = 0; i < enlaces.length; i++) {
    enlaces[i].addEventListener('click', function(event) {
      event.preventDefault(); // Evita el comportamiento predeterminado del enlace

      var destino = this.getAttribute('href'); // Obtiene el valor del atributo href del enlace
      var elementoDestino = document.querySelector(destino); // Encuentra el elemento con el ID correspondiente

      if (elementoDestino) {
        // Desplázate suavemente hacia el elemento usando el método scrollTo
        window.scrollTo({
          top: elementoDestino.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  }
});
  function scrollToSection(sectionId) {
    var elementoDestino = document.querySelector(sectionId);

    if (elementoDestino) {
      window.scrollTo({
        top: elementoDestino.offsetTop,
        behavior: 'smooth'
      });
    }
  }
