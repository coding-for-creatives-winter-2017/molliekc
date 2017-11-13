sketch.js


var x = 15;

var y = 15;

var xspeed = 3;

var yspeed= 3;

function setup() {
	createCanvas(600,400);
	background (0,200,0);
}
function draw(){
	background(0,200,0);
	stroke(240);
	strokeWeight(4);
	noFill();
	ellipse(x,y,24,24);
	
	if (x > 600 || x < 0) {
		xspeed = xspeed * -1;
	}

	if (y > 400 || y < 0) {
		yspeed = yspeed * -1;
	}
	x=x+xspeed;
	y=y+yspeed;
}
