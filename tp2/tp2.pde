//Napolitan Revay Valentin 89751/6
//https://youtu.be/oVT8kWlZTBY
PImage img;
float r, g, b;
boolean useDifferenceBlendMode = false;
void setup(){
  img= loadImage("obra.jpg");
  size(800,400);
  rectMode(CENTER);
  r = random(0);
  g = random(0);
  b = random(0);
  drawTriangles();
}
void draw() {
  background(255);
  pushMatrix();
  cuadrado();
  popMatrix();
  image(img,0,0,400,400);
  if (useDifferenceBlendMode) {
    blendMode(DIFFERENCE);
    fill(255);
    drawTriangles();
    blendMode(BLEND);   
  }
  botonR();
}
//cambia de color en modo random al tocar la letra c.
void keyPressed() {
  if (key == 'c' || key == 'C') {
    r = random(0,255);
    g = random(0,255);
    b = random(0,255);
  }
//Aplica un blendMode DIFFERENCE y se ven los 4 triangulos al tocar la letra E.
    {
    if (key == 'e' || key == 'E') {
      useDifferenceBlendMode = true;
    }
  }
}
//Descativa el blendMode DIFFERENCE y se dejan de ver los 4 triangulos al tocar la letra B.
void keyReleased() {
  if (key == 'b' || key == 'B') {
    useDifferenceBlendMode = false;
  }
}
void drawTriangles() {
  //coordenadas de los triangulos
  int[][] triangleCoordinates = {
    {600, 200, 540, 400, 660, 400},
    {540, 0, 660, 0, 600, 200},
    {600, 200, 800, 140, 800, 260},
    {600, 200, 400, 140, 400, 260}
  };
//for anidado para crear los triangulos
  for (int i = 0; i < triangleCoordinates.length; i++) {
    int[] currentTriangle = triangleCoordinates[i];
    for (int j = 0; j < 6; j += 2) {
      int x1 = currentTriangle[j];
      int y1 = currentTriangle[j + 1];
      int x2 = currentTriangle[(j + 2) % 6];
      int y2 = currentTriangle[(j + 3) % 6];
      int x3 = currentTriangle[(j + 4) % 6];
      int y3 = currentTriangle[(j + 5) % 6];
      triangle(x1, y1, x2, y2, x3, y3);
    }
  }
}
void mouseClicked() {
  if (botonR()==true){
    r = 0;
    g = 0;
    b= 0;
  }
}
