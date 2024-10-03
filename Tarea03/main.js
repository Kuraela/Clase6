const PI2 = Math.PI * 2;
const CANVAS = document.getElementById("lienzo");
const CTX = CANVAS.getContext("2d");
CANVAS.width = window.innerWidth;
CANVAS.height = window.innerHeight;

function updateCanvasSize() {
    CANVAS.width = CANVAS.getBoundingClientRect().width;
    CANVAS.height = CANVAS.getBoundingClientRect().height;
}

class Rectangulo {
    constructor(params = {}) {
        this.borderColor = "#CC4CD9";
        this.borderWidth = 40;
        this.fillStyle = "#CC4CD9";
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.speed = {
            x: Math.random() * 4,
            y: 9
        };
    }
  
  checarDireccionRectangulo(){
        if (this.x >= window.innerWidth) {
     this.speed.x = this.speed.x * -1; 
          
    } else if (this.x <= 0) {
      this.speed.x = this.speed.x * -1;
        }
    
    
    if (this.y >= window.innerHeight) {
            this.speed.y = this.speed.y * -1;

        } else if (this.y <= 0) {
            this.speed.y = this.speed.y * -1;
        }
  }
  

   updatePosition() {
        this.checarDireccionRectangulo();

        this.x += this.speed.x;
        this.y += this.speed.y;
    }
  
    draw() {
        CTX.strokeStyle = this.borderColor;
        CTX.lineWidth = this.borderWidth;
        CTX.beginPath();
        CTX.rect(this.x, this.y, 100, 100);
        CTX.closePath();
        CTX.stroke();
        CTX.fillStyle = this.fillStyle;
        this.updatePosition();
    }
}


//////////////
class Circulo {
    constructor(params = {}) {
        this.borderColor = params.borderColor || "#DB0B91";
        this.borderWidth = 5;
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.speed = {
            x: Math.random() * 4,
            y: 15
        };
    }
    
    checarDireccionCirculo(){
        if (this.x >= window.innerWidth) {
     this.speed.x = this.speed.x * -1; 
          
    } else if (this.x <= 0) {
      this.speed.x = this.speed.x * -1;
        }
      
        if (this.y >= window.innerHeight) {
            this.speed.y = this.speed.y * -1;

        } else if (this.y <= 0) {
            this.speed.y = this.speed.y * -1;
        }
  }
  
     updatePosition() {
        this.checarDireccionCirculo();

        this.x += this.speed.x;
        this.y += this.speed.y;
    }

    draw() {
        CTX.strokeStyle = this.borderColor;
        CTX.lineWidth = this.borderWidth;
        CTX.beginPath();
        CTX.ellipse(this.x, this.y, 30, 30, 0, 0, PI2);
        CTX.closePath();
        CTX.stroke();
        this.updatePosition();
    }
}

let circulo1 = new Circulo();
let misCirculos = [];
let rectangulo = new Rectangulo();



for (let i = 0; i < 500; i++) {  
    let nuevoCirculo = new Circulo({ borderColor: "#DB9BDA" });
    misCirculos.push(nuevoCirculo);
}



misCirculos[2].borderColor = "white";
misCirculos[3].borderColor = "#89DB3B";
misCirculos[4].borderColor = "#89DB3B";
misCirculos[5].borderColor = "#89DB3B";
misCirculos[6].borderColor = "#89DB3B";
misCirculos[7].borderColor = "#89DB3B";
misCirculos[19].borderColor = "#D94C68";
misCirculos[20].borderColor = "#D94C68";
misCirculos[21].borderColor = "#D94C68";
misCirculos[22].borderColor = "#D94C68";
misCirculos[23].borderColor = "#D94C68";
misCirculos[24].borderColor = "#D9BB4C";
misCirculos[25].borderColor = "#D9BB4C";
misCirculos[26].borderColor = "#D9BB4C";
misCirculos[27].borderColor = "#D9BB4C";
misCirculos[28].borderColor = "#D9BB4C";
misCirculos[29].borderColor = "#D9BB4C";
misCirculos[30].borderColor = "#D9BB4C";
misCirculos[31].borderColor = "#89DB3B";
misCirculos[32].borderColor = "#89DB3B";
misCirculos[33].borderColor = "#89DB3B";
misCirculos[34].borderColor = "#89DB3B";

function render() {
    CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);

    for (let i = 0; i < misCirculos.length; i++) {
        misCirculos[i].draw();
    }

    circulo1.draw();
    rectangulo.draw();

    requestAnimationFrame(render);
}

window.addEventListener("resize", updateCanvasSize);
requestAnimationFrame(render);
