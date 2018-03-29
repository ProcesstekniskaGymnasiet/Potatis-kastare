// Felix Tolleson
// januari 2018
// Potatis kastare v1.0
// Strömstads Gymnasium - Teknikprogrammet

function Kastare() {
  this.x = 0;
  this.y = 0;
  this.diam = 14;
  this.long = 60;

  this.show = function () {  
    fill(255);
    push();
      rotate(angleKastare);
      rectMode(CENTER);
      rect(0, 0, this.diam, this.long);
      fill(255, 0, 0);
      rect(0, 0, 5, 5);
    pop();
  };


}


