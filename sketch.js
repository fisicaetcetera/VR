function preload() {
  
  sun = loadImage('sun.jpg');
  createVRCanvas();
}

function setup() {
  setVRBackgroundColor(200, 0, 150);
  fill(0);
}

function calculate() {
  // Things you want to happen once per frame
}

function draw() {
  translate(0, 0, -50);
  rotateY(frameCount/1000);
  no
  texture(sun);
  noStroke();
  sphere(15);
}
