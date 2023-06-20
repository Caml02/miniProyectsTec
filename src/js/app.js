document.addEventListener('DOMContentLoaded', function() {

    darkMode();
    eventListeners();
    toggleProject();
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
  var miniproyectsContainer = document.getElementById('miniproyects');
  var project = document.getElementById(projectId);

  if (activeProject !== null) {
    var activeProjectElement = document.getElementById(activeProject);
    activeProjectElement.classList.add('hidden');
  }

  if (activeProject === projectId) {
    miniproyectsContainer.classList.add('hidden');
    activeProject = null;
  } else {
    project.classList.remove('hidden');
    miniproyectsContainer.classList.remove('hidden');
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

  var miniproyectsContainer = document.getElementById('miniproyectsPY');
  var project = document.getElementById(projectId);

  if (activeProject !== null) {
    var activeProjectElement = document.getElementById(activeProject);
    activeProjectElement.classList.add('hidden');
  }

  if (activeProject === projectId) {
    miniproyectsContainer.classList.add('hidden');
    activeProject = null;
  } else {
    project.classList.remove('hidden');
    miniproyectsContainer.classList.remove('hidden');
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