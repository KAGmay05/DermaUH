
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