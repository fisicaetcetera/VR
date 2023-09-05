let randomx=[], randomy=[], randomz = [];
let moon;
let sun;
let planets = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'pluto'];

function preload() {
  //createVRCanvas();
  createCanvas(1000,1000, WEBGL);
  moon = loadImage("moonmap1k.jpg");
  sun = loadImage("sun.jpg");
  earth = loadImage("earthcloud.jpg");
  mercury = loadImage("mercury.jpg");
  venus = loadImage("venus.jpg");
  mars = loadImage("mars.jpg");
  jupiter = loadImage("jupiter.jpg");
  saturn = loadImage("saturn.jpg");
  uranus = loadImage("uranus.jpg");
  neptune = loadImage("neptune.jpg");
  pluto = loadImage("pluto.jpg");
}

function setup() {
  //setVRBackgroundColor(0, 0, 0);
  background(0);
  for(let i=0; i<150; ++i) {
    randomx[i] = random(-5000, 5000);
    randomy[i] = random(-500, 500);
    randomz[i] = random(-500, 500);
    console.log(planets);
  }
  
}

function draw() {
  //setViewerPosition(0, 0, 0);
  for(let i=0; i<150; ++i) {
    push();
    translate(randomx[i], randomy[i], randomz[i]);
    noStroke();
    //if(intersectsSphere(70, 0, 0)) {
    //   stroke(0); 
    //}
    let planet = random(planets);
    console.log(planet);
    texture(sun);
    //rotateY(frameRate()/500);
    sphere(70);
    pop();
  }
}
