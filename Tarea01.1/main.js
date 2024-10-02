const PI2 = Math.PI * 2; // Para hacer círculos
const CANVAS = document.getElementById("lienzo");
const CTX = CANVAS.getContext("2d");
CANVAS.width = window.innerWidth;
CANVAS.height = window.innerHeight;

const radius = 30;
const distanceX = 20; //Espacio entre círculos en horizontal
const distanceY = 20; //Espacio entre círculos en vertical
let listaCirculos = []; //El array que guarda los círculos

class Circulo {
    constructor(x, y) {
        this.borderColor = "#b38bfe";
        this.fillStyle = "#b38bfe";
        this.borderWidth = 20;
        this.radiusX = radius;
        this.radiusY = radius;
        this.x = x;
        this.y = y;
      
       let valorcolor = Math.random(); // Usar Math.random() para un número aleatorio entre 0 y 1
        this.fillStyle = valorcolor < 0.50 ? "#b38bfe" : "#ffffff";
    }

    draw() {
        CTX.strokeStyle = this.borderColor;
        CTX.fillStyle = this.fillStyle;
        CTX.lineWidth = this.borderWidth;
        CTX.beginPath();
        CTX.ellipse(this.x, this.y, this.radiusX, this.radiusY, 0, 0, PI2);
        CTX.closePath();
        CTX.stroke();
        CTX.fill();
    }
}

function updateCanvasSize() {
    CANVAS.width = window.innerWidth;
    CANVAS.height = window.innerHeight;
    crearCirculos(); // Recalcular círculos al cambiar el tamaño
}

function crearCirculos() {
    listaCirculos = []; // Limpiar la lista de círculos
    let posActualY, posActualX;

    // Iterar sobre el ancho del lienzo
    for (posActualX = radius; posActualX < CANVAS.width; posActualX += (radius * 2 + distanceX)) {
        // Iterar sobre la altura del lienzo
        for (posActualY = radius; posActualY < CANVAS.height; posActualY += (radius * 2 + distanceY)) {
            let nuevoCirculo = new Circulo(posActualX, posActualY);
            listaCirculos.push(nuevoCirculo); // Agrega el círculo a la lista
        }
    }

  

  
  
}

function render() {
    CTX.clearRect(0, 0, CANVAS.width, CANVAS.height); // Limpiar el lienzo
    listaCirculos.forEach(circulo => circulo.draw()); // Dibujar cada círculo
    requestAnimationFrame(render); 
}

window.addEventListener("resize", updateCanvasSize);

crearCirculos(); // Inicializar círculos
requestAnimationFrame(render);

