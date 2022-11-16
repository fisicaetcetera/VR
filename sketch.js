function preload() {
  
  sun = loadImage('sun.jpg');
  createVRCanvas();
}

function setup() {
  setVRBackgroundColor(0);
  let ii = 1;
}

function calculate() {
  // Things you want to happen once per frame
}

function draw() {
  translate(0, 0, -50);
  rotateY(ii++/100);
  texture(sun);
  sphere(10);
}
