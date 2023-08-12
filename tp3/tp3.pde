int [] arreglopan = new int [13]; //0,1,2,3,4,5,6,7,8,9,10,11,12
PImage[] imagenes = new PImage[13];

int pan0;
int pan1;
int pan2;
int pan3;
int pan4;
int pan5;
int pan6;
int pan7;
int pan8;
int pan9;
int pan10;
int pan11;
int pan12;
//prox pantallas

int panactual;



void setup() {

  size(600, 600);

  pan0=0;
  pan1=1;
  pan2=2;
  pan3=3;
  pan4=4;
  pan5=5;
  pan6=6;
  pan7=7;
  pan8=8;
  pan9=9;
  pan10=10;
  pan11=11;
  pan12=12;



  for (int j = 0; j < imagenes.length; j++) {
    imagenes[j] = loadImage("img" + (j + 1) + ".jpg");
  }
}
void draw() {

  if (arreglopan[0]==0) {
    panactual=0;
  } else if (arreglopan[1]==0) {
    panactual=1;
  } else if (arreglopan[2]==0) {
    panactual=2;
  } else if (arreglopan[3]==0) {
    panactual=3;
  } else if (arreglopan[4]==0) {
    panactual=4;
  } else if (arreglopan[5]==0) {
    panactual=5;
  } else if (arreglopan[6]==0) {
    panactual=6;
  } else if (arreglopan[7]==0) {
    panactual=7;
  } else if (arreglopan[8]==0) {
    panactual=8;
  } else if (arreglopan[9]==0) {
    panactual=9;
  } else if (arreglopan[10]==0) {
    panactual=10;
  } else if (arreglopan[11]==0) {
    panactual=11;
  } else if (arreglopan[12]==0) {
    panactual=12;
  }

  println("img=");
  println(imagenes[panactual]);
  println("panactual=");
  println(panactual);
  println("arreglopan=");
  println(arreglopan);




  if (arreglopan[0]==0) {
    image(imagenes[panactual], 0, 0, 600, 600);
    texto("Alicia en el pais ed las maravillas.", 200, 25, 300, 100, 30, 255);
    texto("Alicia cae por un hoyo hacia un mundo fantastico. ", 50, 470, 300, 100, 20, 255);
    continuar(450, 503, 100, 50); //cont
  } else if (arreglopan[1]==0) {
    image(imagenes[panactual], 0, 0, 600, 600);
    texto("Alicia encuentra y se sienta en una mesa con distintos personajes.", 50, 470, 300, 200, 20, 0);
    continuar(450, 503, 100, 50);//cont
  } else if (arreglopan[2]==0) {
    image(imagenes[panactual], 0, 0, 600, 600);// decision
    texto("Alicia se queda hablando con ellos y estos le cuentan que hay una reina malvada que los maltrata.", 150, 10, 350, 200, 20, 0);
    opciones(0, 530, 280, 70, color (255, 0, 0));
    texto("Alicia quiere conocer a la reina.", 10, 560, 350, 224, 15, 0);
    opciones(320, 530, 300, 70, color (0, 0, 255));
    texto("Alicia decide quedarse con ellos.", 330, 540, 250, 60, 15, 0);
    opciones(150, 480, 300, 50, color (0, 255, 0));
    texto("Alicia decide ir a hablar con los demas personajes.", 180, 490, 250, 60, 15, 0);
  } else if (arreglopan[3]==0) {
    image(imagenes[panactual], 0, 0, 600, 600);
    fill(255);
    texto("Estos personajes le cuentan a alicia que la reina es una reina falsa.", 100, 430, 450, 100, 20, 255);
    opciones(0, 530, 280, 70, color(255, 0, 0));
    texto("Alicia decide irse y les agradece.", 20, 530, 240, 80, 15, 0);
    opciones(320, 530, 600, 70, color(0, 0, 255));//decision
    texto("Alicia decide ir hacia el castillo de la reina.", 325, 540, 280, 60, 15, 0);
  } else if (arreglopan[4]==0) {
    image(imagenes[panactual], 0, 0, 600, 600);
    texto("Alicia volvio a su mundo.", 50, 470, 300, 100, 20, 255);
    reiniciar(450, 450, 100, 50);//final y reinicio
  } else if (arreglopan[5]==0) {
    image(imagenes[panactual], 0, 0, 600, 600);
    texto("Alicia quiere ir al castillo de la reina.", 90, 30, 450, 200, 20, 255);
    continuar(450, 503, 100, 50);//continuar
  } else if (arreglopan[6]==0) {
    image(imagenes[panactual], 0, 0, 600, 600);
    texto("Alicia habla con los que estaban tomando el te.", 150, 30, 350, 200, 20, 255);
    continuar(450, 503, 100, 50);//continuar
  } else if (arreglopan[7]==0) {
    image(imagenes[panactual], 0, 0, 600, 600);
    texto("Alicia decide quedarse tomando el te.", 100, 30, 400, 170, 25, 255);
    reiniciar(450, 450, 100, 50);//final y reinicio
  } else if (arreglopan[8]==0) {
    image(imagenes[panactual], 0, 0, 600, 600);
    continuar(450, 503, 100, 50);//continar
    texto("Alicia encuentra un gato rayado.", 110, 370, 300, 200, 20, 255);
  } else if (arreglopan[9]==0) {
    image(imagenes[panactual], 0, 0, 600, 600);
    texto("El gato guia a alicia hacia la una puerta con un labrinto.", 155, 10, 400, 200, 20, 255);
    continuar(450, 503, 100, 50);
  } else if (arreglopan[10]==0) {
    image(imagenes[panactual], 0, 0, 600, 600);
    texto("Alicia entra al laberinto.", 120, 10, 400, 200, 20, 255);
    texto("Alicia sigue por el laberinto.", 130, 360, 400, 200, 20, 255);
    opciones(0, 530, 280, 70, color(255, 0, 0));
    texto("Alicia encuentra unos guardias y le pide que la lleven con la reina.", 40, 560, 240, 80, 16, 0);
    opciones(320, 530, 600, 70, color(0, 0, 255));//decision
    texto("Alicia encuentra a la reina jugando al golf.", 325, 540, 280, 60, 15, 0);
  } else if (arreglopan[11]==0) {
    image(imagenes[panactual], 0, 0, 600, 600);
    texto("La reina adopta a alicia.", 120, 10, 400, 200, 20, 255);
    reiniciar(450, 450, 100, 50);//final y reinicio
  } else if (arreglopan[12]==0) {
    image(imagenes[panactual], 0, 0, 600, 600);
    texto("Alicia reta  la reina a un partido de golf por la corona.", 120, 10, 400, 200, 20, 0);
    reiniciar(450, 450, 100, 50);//final y reinicio
  }
}




void mousePressed() {
  //continuar(450,503,100,50);
  if (arreglopan[0]==0 && boton(450, 550, 503, 553, pan1)) {
  } else if (arreglopan[1]==0 && boton(450, 550, 503, 553, pan2)) {
  } else if (arreglopan[5]==0 && boton(450, 550, 503, 553, pan8)) {
  } else if (arreglopan[6]==0 && boton(450, 550, 503, 553, pan7)) {
  } else if (arreglopan[8]==0 && boton(450, 550, 503, 553, pan9)) {
  } else if (arreglopan[9]==0 && boton(450, 550, 503, 553, pan10)) {
  }


  //decisiones pantalla 2
  if (opcion(0, 280, 530, 600) && arreglopan[2]==0) {
    arreglopan[5]=0;
    arreglopan[2]=1;
  } else if (opcion(320, 600, 530, 600) && arreglopan[2]==0) {
    arreglopan[6]=0;
    arreglopan[2]=1;
  } else if (opcion(150, 450, 480, 530) && arreglopan[2]==0) {
    arreglopan[3]=0;
    arreglopan[2]=1;
  }
  //decisiones pantalla 3
  if (opcion(0, 280, 530, 600) && arreglopan[3]==0) {
    arreglopan[4]=0;
    arreglopan[3]=1;
  } else if (opcion(320, 600, 530, 600) && arreglopan[3]==0) {
    arreglopan[5]=0;
    arreglopan[3]=1;
  }

  //decisiones pantalla10
  if (opcion(0, 280, 530, 600) && arreglopan[10]==0) {
    arreglopan[12]=0;
    arreglopan[10]=1;
  } else if (opcion(320, 600, 530, 600) && arreglopan[10]==0) {
    arreglopan[11]=0;
    arreglopan[10]=1;
  }

  //reinician

  //reiniciar(450,450,100,50);
  if (funreiniciar(450, 550, 450, 500) && arreglopan[12]==0) {
    arreglopan[0]=0;
  }
  if (funreiniciar(450, 550, 450, 500) && arreglopan[11]==0) {
    arreglopan[0]=0;
  }
  if (funreiniciar(450, 550, 450, 500) && arreglopan[4]==0) {
    arreglopan[0]=0;
  }
  if (funreiniciar(450, 550, 450, 500) && arreglopan[7]==0) {
    arreglopan[0]=0;
  }
}boolean boton(int x1, int x2, int y1, int y2, int mipan) {

  for (int i=0; i<13; i++) {
    arreglopan[i]=1;
    arreglopan[mipan]=0;
  }
  return (mouseX>x1 && mouseX<x2 && mouseY >y1 && mouseY<y2);
}

boolean opcion ( int x1, int x2, int y1, int y2) {

  return(mouseX>x1 && mouseX< x2 && mouseY> y1 && mouseY<y2);
}


boolean funreiniciar(int x1, int x2, int y1, int y2) {

  return(mouseX>x1 && mouseX< x2 && mouseY> y1 && mouseY<y2);
}

void opciones(int x, int y, int ancho, int alto, color relleno) {
  fill(relleno);//255, 0, 0
  rect(x, y, ancho, alto);
}



void continuar(int x, int y, int ancho, int alto) {
  fill(255);
  rect(x, y, ancho, alto);
  fill(0);
  textSize(20);
  text("Continuar", 457, 530);
}

void reiniciar(int x, int y, int ancho, int alto) {

  fill(0);
  rect(x, y, ancho, alto);
  fill(255);
  textSize(20);
  text("Reiniciar", 465, 480);
}
void texto(String textpan, int x, int y, int espaciox, int espacioy, int tamtext, int col) {
  fill(col);
  textSize(tamtext);
  text(textpan, x, y, espaciox, espacioy);
}
