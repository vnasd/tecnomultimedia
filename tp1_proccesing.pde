PFont font;
int PantallaActual = 1;
int Tiempo = 0;
int DuracionPantalla = 5000; // Duración de cada pantalla en milisegundos
PImage img1, img2, img3;
boolean MostrarBotonReset = false;
float x1 = 0;   // coordenada x inicial
float y1 = -120;   // coordenada y inicial
float speed1 = 0.5; // velocidad de movimiento
float posX = 200;
float posY = height+300;


void setup() {
  size(640, 480);
  font = createFont("Fontu.vlw", 32);
  textAlign(CENTER, CENTER);
  img1 = loadImage("imagen1.jpg");
  img2 = loadImage("imagen2.jpg");
  img3 = loadImage("imagen3.jpg");
}

void draw() {
  background(255);
  // actualizar coordenadas
  x1 += speed1;
  y1 += speed1;
  
  if (x1 > width || x1 < 0) {
    speed1 *= -1;
  }

  switch(PantallaActual) {
    case 1:
      Pantalla1();
      break;
    case 2:
      Pantalla2();
      break;
    case 3:
      Pantalla3();
      break;
  }
  
  // Verificar si ha pasado el tiempo suficiente para cambiar de pantalla
  if (millis() - Tiempo > DuracionPantalla) {
    PantallaActual++;
    if (PantallaActual > 3) {
      PantallaActual = 3; // Parar en la pantalla 3
      MostrarBotonReset = true;
    }
    Tiempo = millis();
  }
}

void Pantalla1() {
  background(255);
  image(img1, 0, 0, width, height);
  textFont(font);
  textSize(26);
  translate(x1, y1);
  fill(255);
  text("Esta obra se titula: SANDWORM.", width/2, height/2);
}

void Pantalla2() {
  background(255);
  image(img2, 0, 0, width, height);
  textFont(font);
  textSize(17);
  fill(255);
  text("El autor de estas obras se llama Mike Winkelmann mas conocido como BEEPLE", posX, height/2);
   if (posX > width) {
    posX = 0;
  } else {
    posX = posX + 1; // Mueve el texto 1 pixel hacia la derecha
  }
}


void Pantalla3() {
  background(255);
  image(img3, 0, 0, width, height);
  textFont(font);
  textSize(17);
  fill(255);
  text("ha trabajado en conciertos visuales para Justin Bieber, One Direction, Etc ",  width/2, posY);
    posY = posY - 1; // Mueve el texto 1 pixel hacia la derecha
if (MostrarBotonReset) {
    fill(255, 160, 180);
    rectMode(CENTER);
    rect(width/2, height-50, 200, 50);
    fill(255);
    textSize(24);
    text("Reiniciar", width/2, height-50);
  }
}

void mouseClicked() {
  if (MostrarBotonReset && mouseX > width/2-100 && mouseX < width/2+100 && mouseY > height-75 && mouseY < height-25) {
    PantallaActual = 1;
    Tiempo = millis();
    MostrarBotonReset = false;
  }
}
 
