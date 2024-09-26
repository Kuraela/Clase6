const PI2 = Math.PI * 2;
const CANVAS = document.getElementById("lienzo");
const CTX = CANVAS.getContext("2d");
CANVAS.width = window.innerWidth;
CANVAS.height = window.innerHeight;

function updateCanvasSize() {
    CANVAS.width = CANVAS.getBoundingClientRect().width;
    CANVAS.height = CANVAS.getBoundingClientRect().height;
}

// Definimos el radio y la distancia entre círculos
const radius = 30;
const distanceY = 10; // Espacio entre círculos

class Circulo {
    constructor(x, y) {
        this.borderColor = "#00ff99";
        this.borderWidth = 4;
        this.radiusX = radius;
        this.radiusY = radius;
        this.x = x;
        this.y = y;
    }

    draw() {
        CTX.strokeStyle = this.borderColor;
        CTX.lineWidth = this.borderWidth;
        CTX.beginPath();
        CTX.ellipse(this.x, this.y, this.radiusX, this.radiusY, 0, 0, PI2);
        CTX.closePath();
        CTX.stroke();
    }
}

let listaDeCirculos = [];

// Calculamos la cantidad de círculos que caben en la altura del canvas
const totalHeight = CANVAS.height;
let currentY = radius; // Comenzamos en el primer círculo

while (currentY + radius <= totalHeight) {
    let nuevoCirculo = new Circulo(CANVAS.width / 2, currentY); // Centrado horizontalmente
    listaDeCirculos.push(nuevoCirculo);
    currentY += (radius * 2 + distanceY); // Avanzamos la posición Y para el siguiente círculo
}

function render() {
    CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);

    for (let i = 0; i < listaDeCirculos.length; i++) {
        listaDeCirculos[i].draw();
    }

    requestAnimationFrame(render);
}

window.addEventListener("resize", () => {
    updateCanvasSize();
    // Al cambiar el tamaño de la ventana, volvemos a calcular los círculos
    listaDeCirculos = []; // Limpiamos la lista
    currentY = radius; // Reiniciamos la posición Y

    while (currentY + radius <= CANVAS.height) {
        let nuevoCirculo = new Circulo(CANVAS.width / 2, currentY);
        listaDeCirculos.push(nuevoCirculo);
        currentY += (radius * 2 + distanceY);
    }
});

requestAnimationFrame(render);




/* Happy Coding! 👾 */