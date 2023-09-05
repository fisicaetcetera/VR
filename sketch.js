let x = [], y = [], z = [];
let moon;
let sun;
let planets = [];
let numeros = [0, 1,2,3,4,5,6,7,8,9];
let fr = 25;  //frame rate

function preload() {
  createVRCanvas();
  moon = loadImage("moonmap1k.jpg");
  planets[0] = loadImage("sun.jpg");
  planets[3] = loadImage("earthcloud.jpg");
  planets[1] = loadImage("mercury.jpg");
  planets[2] = loadImage("venus.jpg");
  planets[4] = loadImage("mars.jpg");
  planets[5] = loadImage("jupiter.jpg");
  planets[6] = loadImage("saturn.jpg");
  planets[7] = loadImage("uranus.jpg");
  planets[8] = loadImage("neptune.jpg");
  planets[9] = loadImage("pluto.jpg");
  myfont = loadFont('Catallina.otf');
}

function setup() {
  setVRBackgroundColor(0, 0, 0);
  //createCanvas(1366, 768 , WEBGL);
  background(0);
  frameRate(fr);
  for(let i=0; i<150; ++i) {
    x[i] = random(-500, 500);
    y[i] = random(-500, 500);
    z[i] = random(-500, 500);
    }
  console.log(planets[0], planets[1]);
}

function draw() {
  setViewerPosition(0, 0, 0);
  for(let i=0; i < 10; i++) {
    push();
    translate(x[i], y[i], z[i]/50);
    noStroke();
    if(intersectsSphere(70, 0, 0)) {
       //textFont(myfont, 10 );
      textFont('Georgia');
       text("Planet name...", x[i]+40, y[i]+40) ;
    }
    ii = random(numeros);
    texture(planets[i]);
    rotateY(frameCount/500);
    sphere(70);
    pop();
  }
}
