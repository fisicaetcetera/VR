let randomx=[], randomy=[], randomz = [];
let moon;
let sun;
let planets = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'pluto'];

function preload() {
  createVRCanvas();
  moon = loadImage("moonmap1k.jpg");
  sun = loadImage("sun.jpg");
  earth = loadImage("earthcloud.jpg");
  mercury = loadImage("mercury.jpg");
  venus = loadImage("venus.jpg");
  mars = loadImage("mars.jpg");
  jupiter = loadImage("jupiter.jpg");
  saturn = loadImage("saturn.jpg");
  uranus = loadImage("uranus.jpg");
  neptune = loadImage("neptune");
  pluto = loadImage("pluto.jpg");
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
    let planet = random(planets);
    texture(planet);
    //rotateY(frameRate()/500);
    noStroke();
    sphere(70);
    
    pop();
  }
}
