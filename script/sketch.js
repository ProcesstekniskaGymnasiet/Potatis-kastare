// Felix Tolleson
// januari 2018
// Potatis kastare v1.0
// Strömstads Gymnasium - Teknikprogrammet

var kastare;
var potatis;
var parabol = [];

var vinkel = 45.0;
var angleKastare = 90.0 - vinkel; // grader
var initialVelocity = 20.0;       // meter/sekund
//var potatisMassa = 0.3;         // kilogram
var altura = 0.0;
var distans = 0.0;
var longScala = 0.0;
var unitScala = 1.0;

var kaboom;

const GRAVITY = 9.81;            // meter/sekund varje sekund / 10
const Y_RANGE = 40;

function preload() {
  kaboom = loadSound('sound/kaboom.mp3');
}

function setup() {
  angleMode(DEGREES);
  minCanvas = createCanvas(800, 500);
  // Göra att Canvas är i den <div> med id="parentCanvas" vi skapade i våran HTML fil.
  minCanvas.parent('parentCanvas');
  //translate(0, height - Y_RANGE);
  reset();
  altura = sq(initialVelocity) * sin(angleKastare) / (2 * GRAVITY);
  distans = sq(initialVelocity) * sin(2 * angleKastare) / GRAVITY;
  if (distans < 25) {
    unitScala = 1;
  } else if (distans < 100) {
    unitScala = 10;
  } else if (distans < 500) {
    unitScala = 50;
  } else {
    unitScala = 100;
  }
  longScala = (int(distans / unitScala) + 1) * unitScala;
  console.log("Altura: " + precisionRound(altura, 2) + "   Distancia: " + precisionRound(distans, 2) + " Scala: " + longScala);
}

function draw() {
  background(51);
  translate(0, height - Y_RANGE);
  // Rita en regel som visar distansen
  distantsRule();
  kastare.show();
  potatis.show();
  potatis.move();

  if (potatis.position.y > 0) {
    noLoop();
  }
}

function distantsRule() {
  var x = 0;
  var textMeter;
  textSize(15);
  textAlign(RIGHT);
  fill(200, 200, 200);
  stroke(255);
  line(0, 0, width, 0);

  for (var i = unitScala; i <= longScala; i += unitScala) {
    x = map(i, 0, longScala, 0, width);
    textMeter = str(i) + " m ";
    stroke(255);
    line(x, 0, x, 10);
    noStroke();
    text(textMeter, x, 30);
  }
}

function mousePressed() {
  reset();
}

// Börjar opm med Potatiskastaren när man trycker på musen
function reset() {
  kastare = new Kastare();
  potatis = new Potatis();
  if (kaboom.isPlaying()) { // .isPlaying() returns a boolean
    kaboom.stop();
    kaboom.play();
  } else {
    kaboom.play();
  }
  loop();
}

function precisionRound(number, precision) {
  var factor = Math.pow(10, precision);
  return Math.round(number * factor) / factor;
}