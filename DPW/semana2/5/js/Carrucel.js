let indice =0;
const intervalTime = 3000;
const imagenes = document.getElementById('Imagenes');
const botones = document.querySelectorAll('button');
const totalImagenes = Imagenes.children.length;

botones[anterior()].addEventListener('click', () => {
    indice = (indice - 1 + totalImagenes) % totalImagenes;
    actualizarCarrusel();
  });
  botones[siguiente()].addEventListener('click', () => {
    indice = (indice + 1) % totalImagenes;
    actualizarCarrusel();
  });

function siguiente() {
    indice = (indice + 1) % totalImagenes;
    actualizarCarrucel();
}
function anterior() {
    indice = (indice - 1 + totalImagenes) % totalImagenes;
    actualizarCarrucel(); 
}
function actualizarCarrucel() {
    const desplazamiento = -indice * 100;
    Imagenes.style.transform =`translateX(${desplazamiento}%)`;
}
function iniciarCarrucel() {
    setInterval(siguiente,intervalTime);
}
iniciarCarrucel();