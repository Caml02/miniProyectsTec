document.addEventListener('DOMContentLoaded', function() {

    darkMode();
    eventListeners();
    toggleMiniproyect();
    
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

/**Miniproyects-container **/

function toggleMiniproyect(buttonIndex) {
    var miniproyectosContainers = document.querySelectorAll(".miniproyectos-container");
    var selectedContainer = miniproyectosContainers[buttonIndex];
  
    if (selectedContainer.style.display === "none" || selectedContainer.style.display === "") {
      selectedContainer.style.display = "block";
    } else {
      selectedContainer.style.display = "none";
    }
  }
  