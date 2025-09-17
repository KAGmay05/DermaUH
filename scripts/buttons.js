
function Menu() {
    event.stopPropagation();
    const lista = document.getElementById("menu");
    lista.classList.toggle("visible");
}

document.querySelector("html").onclick = function () {
  const lista = document.getElementById("menu");
  lista.classList.remove("visible");
};

function Home(){
     window.location.href = "index.html";
}

function Somos(){
     window.location.href = "index2.html";
}

function Hacemos(){
     window.location.href = "index3.html";
}

function Contacto(){
     window.location.href = "index4.html";
}

function Dist(){
     window.location.href = "index5.html";
}

//carrusel
let indice = 0;
const slides = document.querySelectorAll('.slide');
const slidesPerView = 3;
const groupIndices = [0, 2];
const totalGroups = groupIndices.length;

function moverSlide(direccion) {
    indice += direccion;

    if (indice < 0) indice = totalGroups - 1;
    if (indice >= totalGroups) indice = 0;

    const startIndex = groupIndices[indice];
    const desplazamiento = -(startIndex / slidesPerView) * 100;

    document.querySelector(".slides").style.transform = `translateX(${desplazamiento}%)`;
}

//cortina
const cortina = document.getElementById("cortina");
const arrowLeft = document.getElementById("arrowLeft");
const arrowRight = document.getElementById("arrowRight");

//abrir cortina
arrowLeft.addEventListener('click', () => {
     cortina.classList.add("cortina-activa");
});

//cerrar cortina
arrowRight.addEventListener('click', () => {
     cortina.classList.remove("cortina-activa");
});
