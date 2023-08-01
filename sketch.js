function preload() {
  
  sun = loadImage('sun.jpg');
  //setVRBackgroundColor(0);
}

function setup() {
  //background(0);
  let ii = 1;
}
function draw() {
  //setViewerPosition(0, 0, 400);
  //push();
  translate(0, 0, -30);
  //rotateY(ii++/100);
  texture(sun);
  noStroke();
  sphere(10);
  
  //pop();
}
