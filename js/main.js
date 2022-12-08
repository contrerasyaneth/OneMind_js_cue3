// Constante para el body
const body = document.querySelector('body');

// Llamar nuestras constantes principales
const main = document.getElementById('main');
const form = document.getElementById('form');
const seccionPrincipal = document.getElementById('contenido-1');

// Inputs de la forma
const sentimiento = document.getElementById('sentimiento');

// Crear un escuchador de eventos para la forma
form.addEventListener('submit', (e) => {
  // Evitar accion por defecto de la forma
  e.preventDefault();

});

// Crear un evento global 
main.addEventListener('click', (e) => {
  if(e.target.id === 'feliz') {
    // Agregar clases a body
    body.removeAttribute('class');
    body.classList.add('feliz');

    // Agregar la clase a la seccion
    seccionPrincipal.classList.add('feliz-s');
  }

  if(e.target.id === 'triste') {
    body.removeAttribute('class');
    body.classList.add('triste');
  }

  if(e.target.id === 'tranquilo') {
    body.removeAttribute('class');
    body.classList.add('tranquilo');
  }

  if(e.target.id === 'enojado') {
    body.removeAttribute('class');
    body.classList.add('enojado');

    // Agregar la clase a la seccion
    seccionPrincipal.classList.add('enojado-s');
  }
});
