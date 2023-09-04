let randomx=[], randomy=[], randomz = [];
let moon;

function preload() {
  createVRCanvas();
  moon = loadImage("moonmap1k.jpg");
}

function setup() {
  setVRBackgroundColor(0, 0, 0);
  for(let i=0; i<150; ++i) {
    randomx[i] = random(-5000, 5000);
    randomy[i] = random(-500, 500);
    randomz[i] = random(-500, 500);
  }
  
}

function draw() {
  setViewerPosition(0, 0, 0);
  for(let i=0; i<150; ++i) {
    push();
    translate(randomx[i], randomy[i], randomz[i]);
    
    if(intersectsSphere(70, 0, 0)) {
      
    }
    texture(moon);
    rotateY(frameRate/500);
    noStroke();
    sphere(70);
    
    pop();
  }
}
