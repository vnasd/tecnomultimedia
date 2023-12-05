class Aventura {
  constructor() {
    this.pantallas = new Array(17);
    this.fotos = new Array(17);
    this.numerocero = 0;
    this.textoPantallas = new Array(17);
    this.x1 = 480;
    this.x2 = 480;
    this.y1 = 550;
    this.y2 = 20;
    this.botonalto = 100;
    this.botonancho = 40;
    this.primerfinal = false;
    this.segundofinal = false;
    this.tercerfinal = false;
    this.nuevaSecuencia = false;

    this.cargarPantallas();
    this.cargarFotos();
  }

  cargarPantallas() {
    this.textoPantallas[0] = "un joven hereda un molino \n y un gato de su pobre padre, el joven \n se deprime al ver que se va \n a morir de hambre ";
    this.textoPantallas[1] = "el gato se siente mal por su dueño \n y le procede a comentar que él \n lo puede ayudar";
    this.textoPantallas[2] = "el gato le pide a \n su dueño que le consiga\n un par de botas, un sombrero y \n una bolsa para que lo \n pueda ayudar";
    this.textoPantallas[3] = "el dueño sin tener otra \n opción, le consigue lo que el \n gato le pide";
    this.textoPantallas[4] = "sin tardar tanto, el gato \n se dirige al bosque con \n muchas verduras para cazar animales ";
    this.textoPantallas[5] = "el gato obtiene muchas presas y decide ir \n al reinado  para ofrecerles las presas a\n nombre de joven. el rey queda muy \n agradecido y le ofrece que se case con su \n hija.  ";
    this.textoPantallas[6] = "en busca de un castillo para impresionar \n al reinado, el gato con botas se dirige \nal castillo del ogro mágico para robarle \n su imperio";
    this.textoPantallas[7] = "cuando llega al castillo le dice al ogro\n que se convierta en un ratón para que \nle crea que es mágico, \ncuando se convierte \nen ratón el gato se lo come";
    this.textoPantallas[8] = "ya con un castillo, la novia del rey \n y un gato que fue y será su mejor amigo,\n decide casarse y hacer una familia ";
    this.textoPantallas[9] = " el gato se decepciona por no \n tener una recompensa \n después de todo. \n  PRIMER FINAL ";
    this.textoPantallas[10] = "el gato se va rápido a comentarle \n lo sucedido al molinero \npara organizar un plan para sorprender\n a la realeza";
    this.textoPantallas[11] = "el dueño no lo puede creer,\n el único peso que tenía lo\n había gastado para las botas del gato";
    this.textoPantallas[12] = "la desesperación por no conseguir\n nada hace que se rindan y sigan\n su vida como si nada. \n SEGUNDO FINAL";
    this.textoPantallas[13] = "el gato se siente mal por\n la reacción de su nuevo dueño al \nver lo poco que heredó ";
    this.textoPantallas[14] = "el gato se le ocurre una \n idea para levantar la economía\n del molinero. le comenta que él,\n es muy bueno apostando.";
    this.textoPantallas[15] = "entonces el joven vende su molino \nle da todo al gato para \nque apueste en un bar. esto funciona \ny obtiene mucho dinero";
    this.textoPantallas[16] = "con el dinero recaudado,\n el joven y el gato compran \nun campo hermoso para vivir juntos\n TERCER FINAL";
  }

  cargarFotos() {
    for (let i = 0; i < this.fotos.length; i++) {
      this.fotos[i] = loadImage("./data/image" + (i + 1) + ".png");
    }
  }

  reiniciar() {
    this.numerocero = 0;
    this.primerfinal = false;
    this.segundofinal = false;
    this.tercerfinal = false;
    this.nuevaSecuencia = false;
  }

  avanzar() {
    this.numerocero++;
  }

  imagenesYTexto() {
    if (this.numerocero >= 0 && this.numerocero <= 16) {
      image(this.fotos[this.numerocero], 0, 0, 600, 600);
      fill(137, 242, 255, 100);
      noStroke();
      rect(150, 200, 300, 200);
      fill(0);
      textSize(18);
      text(this.textoPantallas[this.numerocero], 300, 300);

      if ((this.numerocero == 6 || this.numerocero == 0) && !this.primerfinal) {
        this.drawButton("camino a", this.x1, this.y1, this.botonalto, this.botonancho);
        this.drawButton("camino b", this.x2, this.y2, this.botonalto, this.botonancho);
      } else if (this.numerocero == 9 && (!this.primerfinal || !this.segundofinal) && !this.nuevaSecuencia) {
        this.drawButton("Reiniciar", this.x1, this.y1, this.botonalto, this.botonancho);
      } else if ((this.numerocero == 12 || this.numerocero == 16) && this.nuevaSecuencia) {
        this.drawButton("Reiniciar", this.x2, this.y2, this.botonalto, this.botonancho);
      } else {
        this.drawButton("Avanzar", this.x1, this.y1, this.botonalto, this.botonancho);
      }
    }
  }

  drawButton(texto, x, y, width, height) {
    fill(50, 134, 34);
    rect(x, y, width, height);
    fill(0);
    textAlign(CENTER, CENTER);
    text(texto, x + width / 2, y + height / 2);
  }

  mousePressed() {
    if (this.numerocero == 9) {
      if ((!this.primerfinal && !this.segundofinal) || this.nuevaSecuencia) {
        if (mouseX >= this.x1 && mouseX <= this.x1 + this.botonalto && mouseY >= this.y1 && mouseY <= this.y1 + this.botonancho) {
          this.reiniciar();
        }
      }
    } else if ((this.numerocero == 12 || this.numerocero == 16) && this.nuevaSecuencia) {
      if (mouseX >= this.x2 && mouseX <= this.x2 + this.botonalto && mouseY >= this.y2 && mouseY <= this.y2 + this.botonancho) {
        this.reiniciar();
      }
    } else {
      if (mouseX >= this.x1 && mouseX <= this.x1 + this.botonalto && mouseY >= this.y1 && mouseY <= this.y1 + this.botonancho) {
        this.avanzar();
      } else if (this.numerocero == 6 && !this.tercerfinal) {
        if (mouseX >= this.x2 && mouseX <= this.x2 + this.botonalto && mouseY >= this.y2 && mouseY <= this.y2 + this.botonancho) {
          this.tercerfinal = true;
          this.nuevaSecuencia = true;
          this.numerocero = 10; // Cambiar a la pantalla 10
        }
      } else if (this.numerocero == 0 && !this.primerfinal) {
        if (mouseX >= this.x2 && mouseX <= this.x2 + this.botonalto && mouseY >= this.y2 && mouseY <= this.y2 + this.botonancho) {
          this.primerfinal = true;
          this.nuevaSecuencia = true;
          this.numerocero = 13; // Cambiar a la pantalla 13
        }
      }
    }
  }
}

let juego;

function preload() {
  juego = new Juego();
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);
  juego.imagenesYTexto();
}

function mousePressed() {
  juego.mousePressed();
}
