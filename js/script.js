
let botonArriba = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    botonArriba.style.display = "block";
  } else {
    botonArriba.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 

botonArriba.addEventListener("click", topFunction);

   
document.getElementById('boton__input').onclick = function pregunta(){
var mensaje = "Esta seguro que quiere enviar el mensaje?";
var opcion = confirm(mensaje);
if (opcion == true)  { 
    alert('El mensaje fue enviado.');
} else {
    alert('El mensaje no fue enviado.');
}
}
