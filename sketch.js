let randomx=[], randomy=[], randomz = [];

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
    fill('red');
    if(intersectsSphere(70, 0, 0)) {
      
            fill(255,0,0,80);
            text("Ola!", 50, 30); //teste
            text("Ola!", 100, 100); //teste
    }
    texture(moon);
    sphere(70);
    pop();
  }
}
