

var x = 15;

var y = 15;

var xspeed = 3;

var yspeed= 3;

function setup() {
	createCanvas(600,400);
	background (0,0,0);
}
function draw(){
	fill (random(220, 240), random (100,200), random (158, 200));
	ellipse(x,y,100,100);

	x = x + xspeed;
	if (x > 600 || x < 0) {
		xspeed = -xspeed;
	}

	y = y+ yspeed;

	if (y > 400 || y < 0) {
		yspeed = -yspeed;
	}
}

