function preload() {
  
  sun = loadImage('sun.jpg');
  createVRCanvas();
}

function setup() {
  setVRBackgroundColor(0);
  fill(0);
}

function calculate() {
  // Things you want to happen once per frame
}

function draw() {
  translate(0, 0, -30);
  //rotateY(frameCount/100);
  //noStroke();
  texture(sun);
  //noStroke();
  sphere(15);
}
