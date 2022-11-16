function preload() {
  
  sun = loadImage('sun.jpg');
  createCanvas(710,400,WEBGL);
}

function setup() {
  background(0);
  let ii = 1;
}
function draw() {
  push();
  translate(0, 0, -30);
  //rotateY(ii++/100);
  texture(sun);
  noStroke();
  sphere(10);
  pop();
}
