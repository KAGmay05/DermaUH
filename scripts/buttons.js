
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

// Los índices donde comienza cada grupo de slides
// Por ejemplo, si tienes 5 imágenes y muestras 3 por vez: [0, 2]
const groupIndices = [0, 2];
const totalGroups = groupIndices.length;

function moverSlide(direccion) {
    if (direccion > 0) {
        // Avanzar (solo si no estamos en el último grupo)
        if (indice < totalGroups - 1) {
            indice++;
        }
    } else if (direccion < 0) {
        // Retroceder (solo si no estamos ya en el inicio)
        if (indice > 0) {
            indice--;
        }
    }

    const startIndex = groupIndices[indice];
    const desplazamiento = -(startIndex / slidesPerView) * 100;

    document.querySelector(".slides").style.transform = `translateX(${desplazamiento}%)`;
}

//cortina
const cortina = document.getElementById("cortina");
const arrowLeft = document.getElementById("arrowLeft");

arrowLeft.addEventListener('click', () => {
     if(cortina.classList.contains("cortina-activa"))
     cortina.classList.remove("cortina-activa");

     else
     cortina.classList.add("cortina-activa");
});
