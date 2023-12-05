
function setup() {

  Aventura.setup();
}

function draw() {
  Aventura.draw();
}

function mousePressed() {
  Aventura.mousePressed();
}

function keyPressed(){
  Aventura.keyPressed();
}

let objuego

  function setup() {
  createCanvas(800, 400)
    objuego= new juego()
}


function draw() {
background(5, 150, 255)
    fill(3, 140, 0)
    rect(0,350,800,50)
    
    objuego.dibujar()
}



function keyPressed() {
  objuego.teclapres(keyCode)
}
