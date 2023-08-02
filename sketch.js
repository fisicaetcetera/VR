let moon;

function preload() {
  createVRCanvas();
  moon = loadImage("moonmap1k.jpg");
}

function setup() {
  setVRBackgroundColor(0,0,0);

}

function draw() {
  setViewerPosition(0, 0, 200);
  push();
    translate(0,0,0);
    texture(moon);
    noStroke();
    sphere(70);
  pop();
  
} //draw
