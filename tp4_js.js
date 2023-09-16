//Valentin Napolitan Revay 89751/6
//https://youtu.be/rrovAIspGI8
let circles = [];
let lives = 3;
let score = 0;
let timer = 60;
let gameover = false;
let screenState = "inicio"; // Variable de estado para rastrear la pantalla actual

function setup() {
  createCanvas(800, 600);
  textAlign(CENTER, CENTER);
  noStroke();
  createCircle();
  setInterval(timeIt, 1000);
}

function draw() {
  background(220);

  if (screenState === "inicio") {
    drawInicio();
  } else if (screenState === "creditos") {
    drawCreditos();
  } else if (screenState === "instrucciones") {
    drawInstrucciones();
  } else if (screenState === "juego") {
    drawJuego();
  }
}

function drawInicio() {
  fill(0);
  textSize(32);
  text("¡Bienvenido al juego!", width / 2, height / 4);
  
  // Botón "Jugar"
  if (mouseX > width / 4 && mouseX < width * 3 / 4 && mouseY > height / 2 - 50 && mouseY < height / 2) {
    fill(100);
  } else {
    fill(150);
  }
  rect(width / 4, height / 2 - 50, width / 2, 50);
  fill(0);
  textSize(24);
  text("Jugar", width / 2, height / 2 - 25);
  
  // Botón "Créditos"
  if (mouseX > width / 4 && mouseX < width * 3 / 4 && mouseY > height / 2 && mouseY < height / 2 + 50) {
    fill(100);
  } else {
    fill(150);
  }
  rect(width / 4, height / 2, width / 2, 50);
  fill(0);
  textSize(24);
  text("Créditos", width / 2, height / 2 + 25);
  
  // Botón "Instrucciones"
  if (mouseX > width / 4 && mouseX < width * 3 / 4 && mouseY > height / 2 + 50 && mouseY < height / 2 + 100) {
    fill(100);
  } else {
    fill(150);
  }
  rect(width / 4, height / 2 + 50, width / 2, 50);
  fill(0);
  textSize(24);
  text("Instrucciones", width / 2, height / 2 + 75);
}

function drawCreditos() {
  fill(0);
  textSize(24);
  text("Programado por Valentin Napolitan Revay", width / 2, height / 2 - 50);
  text("Ideado por Valentin Napolitan Revay", width / 2, height / 2);
  text("Creador del juego Valentin Napolitan Revay", width / 2, height / 2 + 50);
  
  // Botón "Volver a Inicio"
  if (mouseX > width / 4 && mouseX < width * 3 / 4 && mouseY > height / 2 + 100 && mouseY < height / 2 + 150) {
    fill(100);
  } else {
    fill(150);
  }
  rect(width / 4, height / 2 + 100, width / 2, 50);
  fill(0);
  textSize(24);
  text("Volver a Inicio", width / 2, height / 2 + 125);
}

function drawInstrucciones() {
  fill(0);
  textSize(24);
  text("Instrucciones:", width / 2, height / 4);
  textSize(18);
  text("1. Haz clic en los círculos para ganar puntos.", width / 2, height / 2 - 50);
  text("2. No dejes que los círculos desaparezcan sin clic.", width / 2, height / 2);
  text("3. Gana 10 puntos antes de que se acabe el tiempo para ganar.", width / 2, height / 2 + 50);
  
  // Botón "Volver a Inicio"
  if (mouseX > width / 4 && mouseX < width * 3 / 4 && mouseY > height / 2 + 100 && mouseY < height / 2 + 150) {
    fill(100);
  } else {
    fill(150);
  }
  rect(width / 4, height / 2 + 100, width / 2, 50);
  fill(0);
  textSize(24);
  text("Volver a Inicio", width / 2, height / 2 + 125);
}

function drawJuego() {
  // Muestra vidas y puntaje
  fill(255, 0, 0);
  text('Vidas: ' + lives, 70, 30);
  text('Puntuación: ' + score, width - 70, 30);
  text('Tiempo: ' + timer, width / 2, 30);
  textSize(20);
  // Si el juego no ha terminado
  if (!gameover) {
    // Actualiza y muestra los círculos
    for (let i = circles.length - 1; i >= 0; i--) {
      circles[i].update();
      circles[i].display();

      // Verifica si se hizo clic en un círculo
      if (circles[i].click()) {
        circles.splice(i, 1); // Elimina el círculo clicado
        score++;
        createCircle(); // Crea un nuevo círculo
      }

      // Verifica si un círculo desaparece sin clic
      if (circles[i].timer <= 0) {
        circles.splice(i, 1); // Elimina el círculo no clicado
        lives--;
        if (lives <= 0) {
          gameOver(false); // Pierde si se quedó sin vidas
        }
        createCircle(); // Crea un nuevo círculo
      }
    }

    // Verifica si se quedó sin tiempo
    if (timer <= 0) {
      gameOver(score >= 10); // Gana si tiene 10 o más puntos, pierde de lo contrario
    }
  } else {
    // Pantalla de final de juego
    fill(0);
    rect(125, height / 4, 550, height / 2);
    fill(255);
    textSize(48);
    if (score >= 10) {
      text('¡Ganaste, sos rapidaso pa!', width / 2, height / 2 - 30);
    } else {
      text('¡Perdiste, sos muy lento!', width / 2, height / 2 - 30);
    }
    textSize(24);
    text('Puntuación final: ' + score, width / 2, height / 2 + 30);
    
    // Botón de reinicio
    fill(255);
    rect(width / 4 + 10, height / 2 + 60, width / 2 - 20, 40);
    fill(0);
    textSize(18);
    text('Reiniciar', width / 2, height / 2 + 80);
  }
}

function createCircle() {
  let x = random(width);
  let y = random(height);
  let diameter = random(20, 50);
  let c = color(random(255), random(255), random(255));
  let circle = new Circle(x, y, diameter, c);
  circles.push(circle);
}

function timeIt() {
  if (timer > 0) {
    timer--;
  }
}

function gameOver(win) {
  gameover = true;
}

class Circle {
  constructor(x, y, diameter, c) {
    this.x = x;
    this.y = y;
    this.diameter = diameter;
    this.c = c;
    this.timer = 1.5; // 1.5 segundos
  }

  update() {
    this.timer -= 1 / frameRate();
  }

  display() {
    fill(this.c);
    ellipse(this.x, this.y, this.diameter);
  }

  click() {
    let d = dist(mouseX, mouseY, this.x, this.y);
    if (d < this.diameter / 2) {
      return true;
    } else {
      return false;
    }
  }
}

function mouseClicked() {
  if (gameover) {
    // Verifica si se hizo clic en el botón de reinicio
    if (mouseX > width / 4 + 10 && mouseX < width / 4 + width / 2 - 10 && mouseY > height / 2 + 60 && mouseY < height / 2 + 100) {
      resetGame();
    }
  } else {
    for (let i = circles.length - 1; i >= 0; i--) {
      if (circles[i].click()) {
        circles.splice(i, 1);
        score++;
        createCircle();
      }
    }
  }
  if (screenState === "inicio") {
    // Botón "Jugar"
    if (mouseX > width / 4 && mouseX < width * 3 / 4 && mouseY > height / 2 - 50 && mouseY < height / 2) {
      screenState = "juego"; // Cambia a la pantalla de juego
    }
    // Botón "Créditos"
    else if (mouseX > width / 4 && mouseX < width * 3 / 4 && mouseY > height / 2 && mouseY < height / 2 + 50) {
      screenState = "creditos"; // Cambia a la pantalla de créditos
    }
    // Botón "Instrucciones"
    else if (mouseX > width / 4 && mouseX < width * 3 / 4 && mouseY > height / 2 + 50 && mouseY < height / 2 + 100) {
      screenState = "instrucciones"; // Cambia a la pantalla de instrucciones
    }
  } else if (screenState === "creditos" || screenState === "instrucciones") {
    // Botón "Volver a Inicio"
    if (mouseX > width / 4 && mouseX < width * 3 / 4 && mouseY > height / 2 + 100 && mouseY < height / 2 + 150) {
      screenState = "inicio"; // Vuelve a la pantalla de inicio
    }
  }
}


function resetGame() {
  circles = [];
  lives = 3;
  score = 0;
  timer = 60;
  gameover = false;
  createCircle();
}
