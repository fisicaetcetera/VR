function preload() {
  
  sun = loadImage('sun.jpg');
    createVRCanvas();
  setVRBackgroundColor("blue");
}

function setup() {
  //background(0);
  let ii = 1;
}
function draw() {
  setViewerPosition(0, 0, 1);
  //push();
  translate(0, 0, -30);
  rotateY(ii++/1000);
  //texture(sun);
  //noStroke();
  stroke(0);
  sphere(10);
  //pop();
}
