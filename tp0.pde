//Napolitan Revay Valentin 89751/6.
PImage img;

void setup(){
  img= loadImage("retrato.jpg");
  size(800,400);
  
}
void draw(){
  //Fondo y imagen
  background(150,50,100);
  //ellipse (x,y,ancho y alto)
  image(img,400,0,400,400);
  
  //Cabeza
  stroke(5,0,0);
  strokeWeight(3);
  fill(206,150,98);
  ellipse(200,200,400,400);
  
  //Nariz
  stroke(5,0,0);
  strokeWeight(2);
  triangle(200,150,150,250,250,250);
  
  //Lente izq
  stroke(180,178,178);
  strokeWeight(5);
  ellipse(100,150,120,120);
  
  //Lente der
  stroke(180,178,178);
  strokeWeight(5);
  ellipse(300,150,120,120);
  
  //Ojo Izq
  stroke(5,0,0);
  strokeWeight(3);
  fill(255,255,255);
  ellipse(100,150,100,50);
  
  //Ojo der
  stroke(5,0,0);
  strokeWeight(3);
  fill(255,255,255);
  ellipse(300,150,100,50);
  
  //Iris izq
  strokeWeight(3);
  fill(41,25,9);
  ellipse(100,150,50,50);
  
  //Iris der
  strokeWeight(3);
  fill(41,25,9);
  ellipse(300,150,50,50);
  
  //brillo ojo der
  strokeWeight(1);
  fill(222,220,220);
  ellipse(300,150,10,10);
  
  //brillo ojo izq
  strokeWeight(1);
  fill(222,220,220);
  ellipse(100,150,10,10);
  
  //Boca
  stroke(214,84,69);
  strokeWeight(7);
  line(150,330,250,330);
  
  //Paleta central de lente
  stroke(180,178,178);
  strokeWeight(5);
  line(160,150,240,150);
  
  //paleta izq de lente
  stroke(180,178,178);
  strokeWeight(5);
  line(5,170,40,150);
  
  //Paleta der de lente
  stroke(180,178,178);
  strokeWeight(5);
  line(395,170,360,150);
  
  //Oreja izq
  strokeWeight(2);
  stroke(206,150,98);
  fill(206,150,98);
  ellipse(20,230,60,120);
  
  //Agujero de oreja izq
  stroke(147,98,55);
  fill(147,98,55);
  ellipse(15,230,25,100);
  
  //Oreja der
  strokeWeight(2);
  stroke(206,150,98);
  fill(206,150,98);
  ellipse(380,230,60,120);
  
  //Agujero de oreja der
  stroke(147,98,55);
  fill(147,98,55);
  ellipse(390,230,25,100);
  
  //pelo
  fill(5,0,0);
  stroke(5,0,0);
  strokeWeight(2);
  triangle(100,3,300,3,200,100);
  triangle(20,10,200,10,40,100);
  triangle(200,10,380,10,300,100);
  stroke(5,0,0);
  strokeWeight(50);
  line(30,40,350,40);
  line(30,60,350,60);
  
  strokeWeight(20);
  line(20,100,200,50);
  line(100,100,20,50);
  line(150,100,300,50);
  
  strokeWeight(15);
  line(230,100,300,50);
  line(15,150,100,10);
  line(10,150,100,10);
  line(5,150,100,10);
  line(4,150,50,10);
  line(380,150,300,10);
  line(390,150,300,10);
  line(400,150,300,10);
  line(400,150,350,10);
  line(400,150,340,15);
}
