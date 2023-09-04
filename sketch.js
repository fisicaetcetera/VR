let moon;
let venus;
let stars;

function preload() {
  createVRCanvas(3000);
  moon = loadImage("moonmap1k.jpg");
  stars = loadImage("whole-sky-nasa.jpg");
  sun = loadImage("sun.jpg");
}

function setup() {
  //setVRBackgroundColor(0,0,0);

}

function draw() {
  setViewerPosition(0, 0, 0);
  push();
    translate(0,0,-100);
    texture(moon);
    noStroke();
    rotateY(frameCount/1000);
    //sphere(30);
  pop();

  
  push();
 
    translate(0,-100,-100);
    //rotateY(1.507);
    texture(sun);
    noStroke();
    rotateY(frameCount/1000);
    sphere(30);
  pop();


   push();
  translate(0, 0, 0);
      rotateX(0.3);
  texture(stars);
  sphere(1500);
  pop();
} //draw
