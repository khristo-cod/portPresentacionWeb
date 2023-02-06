const typed = new Typed('.typed', {
  strings: [
    '<i class="animado">Cristialvi Aponte</i>',
    '<i class="animado">Desarrollador de Software</i>',
  ],
  stringsElement: '#cadenas-texto', //ID del elemento que contiene cadenas de texto a mostrar.
  typeSpeed: 75, //velocidad en milisegundos para mostrar una letra.
  startDelay: 300, //tiempo de restraseo en iniciar la animacion.
  backSpeed: 75, //velocidad en milisegundos para borrar una letra.
  shuffle: true, //alternar el orden en que se escriben las palabras.
  backDelay: 1500, //tiempo de espera despues de terminar una palabra.
  loop: true, //repetir el array.
  contentType: 'html', //html o null para texto sin formato.
})
