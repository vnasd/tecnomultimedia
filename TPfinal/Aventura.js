class JuegoC {
  constructor() {
    this.objuego = new juego1 () ;
    
    this.pantallas = new Array(16);
    this.fotos = new Array(16);
    this.minumero = 0;
    this.textoPantallas = new Array(16);
    this.botonX1;
    this.botonY1;
    this.botonX2;
    this.botonY2;
    this.anchoBoton = 100;
    this.altoBoton = 40;
    this.decisionTomada1 = false; // Flujo 1, pantalla 1-9
    this.decisionTomada2 = false; // Flujo 2, pantalla 1-13
    this.decisionTomada3 = false; // Flujo 3, pantalla 6-10
    this.nuevaSecuencia = false;
    this.mouseSobreBoton1 = false; // Variable para detectar si el mouse está sobre el botón 1
    this.mouseSobreBoton2 = false; // Variable para detectar si el mouse está sobre el botón 2
    this.inicializarJuego();
  }

  inicializarJuego() {
    createCanvas(600, 600);

    for (let i = 0; i < this.pantallas.length; i++) {
      this.pantallas[i] = 0;
    }

    for (let i = 0; i < this.fotos.length; i++) {
      this.fotos[i] = loadImage("data/image" + (i + 1) + ".png");
    }

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

    this.botonX1 = width - this.anchoBoton * 2;
    this.botonY1 = height - this.altoBoton;
    this.botonX2 = 20;
    this.botonY2 = 20;
    this.jugar1 = false
      
  }

  dibujar() {

    background(0);
    this.imagenesytexto();

     if (this.jugar1 == true) {
    createCanvas(800, 400);
    background(5, 150, 255);
    fill(50, 255, 0);
    rect(0, 350, 800, 50);
    this.objuego.dibujar();
  }

    
  }

  imagenesytexto() {
    if (this.minumero >= 0 && this.minumero <= 16) {
      image(this.fotos[this.minumero], 0, 0, 600, 600);
      fill(137, 242, 255, 100);
      noStroke();
      rect(150, 200, 300, 200);
      fill(0);
      textSize(15);
      text(this.textoPantallas[this.minumero], 300, 300);

      if ((this.minumero == 6 || this.minumero == 0) && !this.decisionTomada1) {
        this.boton("Avanzar", this.botonX1, this.botonY1, this.anchoBoton, this.altoBoton, this.mouseSobreBoton1);
        this.boton("Otro camino", this.botonX2, this.botonY2, this.anchoBoton, this.altoBoton, this.mouseSobreBoton2);
      } else if (this.minumero == 9 && (!this.decisionTomada1 || !this.decisionTomada2) && !this.nuevaSecuencia) {
        this.boton("Reiniciar", this.botonX1, this.botonY1, this.anchoBoton, this.altoBoton, this.mouseSobreBoton1);
      } else if ((this.minumero == 12 || this.minumero == 16) && this.nuevaSecuencia) {
        this.boton("Reiniciar", this.botonX2, this.botonY2, this.anchoBoton, this.altoBoton, this.mouseSobreBoton2);
      } else {
        this.boton("Avanzar", this.botonX1, this.botonY1, this.anchoBoton, this.altoBoton, this.mouseSobreBoton1);
      }
    } else if (this.minumero == 16) {
      image(this.fotos[16], 0, 0, 600, 600);
      this.boton("Volver al inicio", this.botonX2, this.botonY2, this.anchoBoton, this.altoBoton, this.mouseSobreBoton2);
    }
  }

  boton(etiqueta, x, y, ancho, alto, mouseSobreBoton) {
    if (mouseSobreBoton) {
      fill(255, 255, 0);
    } else {
      fill(255);
    }
    rect(x, y, ancho, alto);

    fill(0);
    textAlign(CENTER, CENTER);
    text(etiqueta, x + ancho / 2, y + alto / 2);
  }

  reiniciar() {
    this.minumero = 16;
    this.decisionTomada1 = false;
    this.decisionTomada2 = false;
    this.decisionTomada3 = false;
    this.nuevaSecuencia = false;
  }

   avanzar() {
    this.minumero++;
    if (this.minumero==0) {
      this.jugar1=false
    } else if (this.minumero==12 || this.minumero==9 || this.minumero==15) {
      this.jugar1=true
    } 
  }

  manejarMouseMovido() {
    if (mouseX >= this.botonX1 && mouseX <= this.botonX1 + this.anchoBoton && mouseY >= this.botonY1 && mouseY <= this.botonY1 + this.altoBoton) {
      this.mouseSobreBoton1 = true;
    } else {
      this.mouseSobreBoton1 = false;
    }

    if (mouseX >= this.botonX2 && mouseX <= this.botonX2 + this.anchoBoton && mouseY >= this.botonY2 && mouseY <= this.botonY2 + this.altoBoton) {
      this.mouseSobreBoton2 = true;
    } else {
      this.mouseSobreBoton2 = false;
    }
  }

  manejarMousePresionado() {
    if (this.minumero == 9) {
      if ((!this.decisionTomada1 && !this.decisionTomada2) || this.nuevaSecuencia) {
        if (mouseX >= this.botonX1 && mouseX <= this.botonX1 + this.anchoBoton && mouseY >= this.botonY1 && mouseY <= this.botonY1 + this.altoBoton) {
          this.reiniciar();
        }
      }
    } else if ((this.minumero == 12 || this.minumero == 16) && this.nuevaSecuencia) {
      if (mouseX >= this.botonX2 && mouseX <= this.botonX2 + this.anchoBoton && mouseY >= this.botonY2 && mouseY <= this.botonY2 + this.altoBoton) {
        this.reiniciar();
      }
    } else if (this.minumero == 16) {
      if (mouseX >= this.botonX2 && mouseX <= this.botonX2 + this.anchoBoton && mouseY >= this.botonY2 && mouseY <= this.botonY2 + this.altoBoton) {
        this.minumero = 0;
        this.decisionTomada1 = false;
        this.decisionTomada2 = false;
        this.decisionTomada3 = false;
        this.nuevaSecuencia = false;
      }
    } else {
      if (mouseX >= this.botonX1 && mouseX <= this.botonX1 + this.anchoBoton && mouseY >= this.botonY1 && mouseY <= this.botonY1 + this.altoBoton) {
        this.avanzar();
      } else if (this.minumero == 6 && !this.decisionTomada3) {
        if (mouseX >= this.botonX2 && mouseX <= this.botonX2 + this.anchoBoton && mouseY >= this.botonY2 && mouseY <= this.botonY2 + this.altoBoton) {
          this.decisionTomada3 = true;
          this.nuevaSecuencia = true;
          this.minumero = 10;
        }
      } else if (this.minumero == 0 && !this.decisionTomada1) {
        if (mouseX >= this.botonX2 && mouseX <= this.botonX2 + this.anchoBoton && mouseY >= this.botonY2 && mouseY <= this.botonY2 + this.altoBoton) {
          this.decisionTomada1 = true;
          this.nuevaSecuencia = true;
          this.minumero = 13;
        }
      }
    }
  }
}
