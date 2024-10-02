const PI2 = Math.PI * 2; //Para hacer círculos
const CANVAS = document.getElementById("lienzo");
const CTX = CANVAS.getContext("2d");
CANVAS.width = window.innerWidth;
CANVAS.height = window.innerHeight;

//Que se updateé el canvas con el tamaño de la ventana
function updateCanvasSize() {
    CANVAS.width = CANVAS.getBoundingClientRect().width;
    CANVAS.height = CANVAS.getBoundingClientRect().height;
}


const radius = 10;
const distaY = 20; //Espacio que hay entre los círculos
const distanceX = 20;

class Circulo1 {
    constructor(x, y) {
        this.borderColor = "#ccd7fe";
        this.fillStyle = "#ccd7fe";
        this.borderWidth = 20;
        this.radiusX = radius;
        this.radiusY = radius;
        this.x = x;
        this.y = y;
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

class Circulo2 {
    constructor(x, y) {
        this.borderColor = "#ffb5e6";
        this.fillStyle = "#ffb5e6";
        this.borderWidth = 20;
        this.radiusX = radius;
        this.radiusY = radius;
        this.x = x;
        this.y = y;
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

let listaCirculos = []; //El array (lista) que guarda los círculos

const totalHeight = CANVAS.height; //Creamos una variable para representar la alturatotal del lienzo
let posActualY = radius; //Creamos una variable que sea la posición actual de Y y le asignamos el valor del radio 
//porque es donde se va a dibujar el primer círculo

while (posActualY + radius < totalHeight) { //Mientras la posición actual + el radio que vaya avanzando sea menor a la altura total del lienzo
    let nuevoCirculo = new Circulo(CANVAS.width/28, posActualY); 
    listaCirculos.push(nuevoCirculo); //Agrega un elemento (un círculo más) al final de la lista
    posActualY += (radius * 2 + distanceY); //Avanzamos la posición del siguiente círculo (sumándole el diámetro + el espacio que dijimos
    //que hay entre cada círculo)
}

function render() {
    CTX.clearRect(0, 0, CANVAS.width, CANVAS.height); //Limpiamos el lienzo del contenido anterior para que no se superponga

    for (let i = 0; i < listaCirculos.length; i++) { //Este for recorre todos los círculos almacenados en listaCirculos y 
        //llama al método draw() de cada uno para que se dibujen
        listaCirculos[i].draw();
    }

    requestAnimationFrame(render); 
}

window.addEventListener("resize", () => {//Se agrega un "listener" que escucha el evento resize en la ventana del navegador. 
    //Cada vez que se redimensione la ventana, se ejecutará la función vacía
    updateCanvasSize();
    //Al cambiar el tamaño de la ventana, volvemos a calcular los círculos
    listaCirculos = []; //Limpiamos la lista de círculos porque el espacio disponible para dibujarlos puede haber cambiado
    posActualY = radius; //Reiniciamos la posición Y

    while (posActualY + radius <= CANVAS.height) {
        let nuevoCirculo = new Circulo(CANVAS.width/28, posActualY);
        listaCirculos.push(nuevoCirculo);
        posActualY += (radius * 2 + distanceY);
    }
});

requestAnimationFrame(render);




