boolean botonR(){
  float mouse=dist(mouseX,mouseY, 400, 340);
  int radius=50/2;
  stroke(120);
  fill(140);
  circle(400,340,50);
  if(radius > mouse){
   return true; 
  }else{
  return false;
  }
}
