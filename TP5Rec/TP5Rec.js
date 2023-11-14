//Napolitan Revay Valentin 89751/6  https://youtu.be/L2tzOoDATQM
let juego;
let botonReiniciar;
let sueloY;
let timer;
let tiempoLimite = 10; // Tiempo límite en segundos
let juegoGanado = false;
let separacionMinima = 120; // Separación mínima entre obstáculos

function setup() {
  createCanvas(windowWidth, windowHeight);
  sueloY = height - 20; // Mover aquí la declaración de sueloY
  juego = new Juego();

  // Crear botón de reiniciar
  botonReiniciar = createButton('Reiniciar');
  botonReiniciar.position(width / 2 - 50, height / 2);
  botonReiniciar.mousePressed(reiniciarJuego);
  botonReiniciar.hide();

  // Iniciar el temporizador
  timer = createP('Tiempo: ' + tiempoLimite);
  timer.position(width / 2, 10);
  timer.style('font-size', '18px');
  setInterval(actualizarTimer, 1000); // Actualizar cada segundo
}

function draw() {
  background(200); // Fondo gris

  // Dibujar el suelo
  stroke(0);
  line(0, sueloY, width, sueloY);

  juego.actualizar();
  juego.mostrar();

  // Mostrar botón de reiniciar si el juego ha terminado
  if (juego.juegoTerminado) {
    if (juegoGanado) {
      mostrarResultado("¡Ganaste!");
    } else {
      mostrarResultado("¡Perdiste!");
    }
    botonReiniciar.show();
  }
}

function reiniciarJuego() {
  juego.resetearJuego();
  botonReiniciar.hide();
  reiniciarTimer();
  juegoGanado = false;
}

function mousePressed() {
  // Saltar solo si el juego no ha terminado
  if (!juego.juegoTerminado) {
    juego.saltar();
  }
}

function mostrarResultado(mensaje) {
  textSize(32);
  fill(255, 0, 0);
  textAlign(CENTER, CENTER);
  text(mensaje, width / 2, height / 2 - 50);
}

function actualizarTimer() {
  if (juegoGanado) {
    return; 
  }

  tiempoLimite--;
  timer.html('Tiempo: ' + tiempoLimite);

  if (tiempoLimite === 0) {
    // Si el temporizador llega a cero, terminar el juego
    juego.juegoTerminado = true;
    juegoGanado = true;
  }
}

function reiniciarTimer() {
  tiempoLimite = 10;
  timer.html('Tiempo: ' + tiempoLimite);
  juegoGanado = false;
}

class Juego {
  constructor() {
    this.alicia = new Alicia();
    this.obstaculos = [];
    this.juegoTerminado = false;
  }

  actualizar() {
    if (!this.juegoTerminado) {
      this.alicia.actualizar();

      // Crear hasta dos obstáculos aleatorios con separación mínima
      if (random(1) < 0.02 && (this.obstaculos.length === 0 || this.obstaculos[this.obstaculos.length - 1].x < width - separacionMinima)) {
        this.obstaculos.push(new Obstaculo());
      }

      // Actualizar y verificar colisión con obstáculos
      for (let i = this.obstaculos.length - 1; i >= 0; i--) {
        this.obstaculos[i].actualizar();
        if (this.obstaculos[i].colision(this.alicia)) {
          // Si hay colisión, terminar el juego
          this.juegoTerminado = true;
        }

        // Eliminar obstáculos fuera de la pantalla
        if (this.obstaculos[i].fueraDePantalla()) {
          this.obstaculos.splice(i, 1);
        }
      }
    }
  }

  mostrar() {
    this.alicia.mostrar();
    for (let obstaculo of this.obstaculos) {
      obstaculo.mostrar();
    }
  }

  saltar() {
    this.alicia.saltar();
  }

  resetearJuego() {
    this.alicia = new Alicia();
    this.obstaculos = [];
    this.juegoTerminado = false;
    reiniciarTimer();
  }
}

class Alicia {
  constructor() {
    this.x = 50;
    this.y = sueloY - 50;
    this.tamano = 30;
    this.velY = 0;
    this.gravedad = 0.8;
  }

  mostrar() {
    fill(0, 255, 255); // Celeste
    rect(this.x, this.y - this.tamano, this.tamano, this.tamano);

    fill(0); // Texto negro
    textSize(12);
    textAlign(CENTER, CENTER);
    text('Alicia', this.x + this.tamano / 2, this.y - this.tamano / 2);
  }

  saltar() {
    if (this.y === sueloY - 50) {
      this.velY = -15;
    }
  }

  actualizar() {
    this.y += this.velY;
    this.velY += this.gravedad;

    // Evitar que Alicia se salga del lienzo
    this.y = constrain(this.y, 0, sueloY - 50);
  }
}

class Obstaculo {
  constructor() {
    this.x = width;
    this.y = sueloY - 50;
    this.tamano = 30;
    this.velX = 5;
  }

  mostrar() {
    fill(255); // Color blanco
    triangle(
      this.x, this.y,
      this.x - this.tamano, this.y + this.tamano,
      this.x + this.tamano, this.y + this.tamano
    );
  }

  actualizar() {
    this.x -= this.velX;
  }

  colision(alicia) {
    // Verificar colisión con el cuadrado de Alicia
    return alicia.x < this.x + this.tamano &&
           alicia.x + alicia.tamano > this.x &&
           alicia.y < this.y + this.tamano &&
           alicia.y + alicia.tamano > this.y;
  }

  fueraDePantalla() {
    return this.x < 0;
  }
}
