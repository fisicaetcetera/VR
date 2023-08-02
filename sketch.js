let moon;
let stars;

function preload() {
  createVRCanvas();
  moon = loadImage("moonmap1k.jpg");
  stars = loadImage("whole-sky-nasa.jpg");
}

function setup() {
  setVRBackgroundColor(0,0,0);

}

function draw() {
  setViewerPosition(0, 0, 100);
  push();
    translate(0,0,0);
    texture(moon);
    noStroke();
    rotateY(frameCount/1000);
    sphere(70);
  pop();

   push();
  translate(0, 0, 0);
  texture(stars);
  sphere(6000);
  pop();
} //draw
