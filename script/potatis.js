// Felix Tolleson
// januari 2018
// Potatis kastare v1.0
// Strömstads Gymnasium - Teknikprogrammet

function Potatis() {

	this.acceleration = createVector(0, GRAVITY);
	this.velocity = createVector(initialVelocity * cos(angleKastare), -initialVelocity * sin(angleKastare));
  this.position = createVector(0, 0);
  this.r = 5;

	// Metod för att updatera positionen
	this.move = function () {
    this.velocity.add(this.acceleration);
		this.position.add(this.velocity);
	};

	// Metod för att rita i canvas potatisen
	this.show = function () {
		stroke(04, 102, 0);
		strokeWeight(1);
    fill(04, 153, 0);
    ellipse(round(this.position.x * width / longScala), round(this.position.y * width / longScala, 2 * this.r), 2 * this.r);
	};
}