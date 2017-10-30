var rectangle1=50;
var ellipse1=100;
var rectangle2=300;
var rectangle3=200;



function setup () {
	createCanvas(1600,900);
	background(10,200,250);
	rectangle1=50;
	ellipse1=100;
	rectangle2=300;
	rectangle3=200;
}

function draw () {
	//rectangle
	fill (250,200,200);
	stroke(250,200,200);
	rect (rectangle1,300,140,260);
	rectangle1=rectangle1+2;

	//ellipse
	fill (200,250,200);
	stroke (200,250,200);
	ellipse (ellipse1,100,100,100);
	ellipse1=ellipse1+2;


	//rectangle2
	fill (250,200,200);
	stroke (250.200,200);
	rect (rectangle2, 90,50,50);
	rectangle2=rectangle2+1;

	//rectangle3
	fill (250,200,200);
	stroke (250,200,200);
	rect (rectangle3, 80, 150,50);
	rectangle3=rectangle3+2;

}
function mousePressed(){
	background (10,200,250);
	rect (rectangle3, 10,150,50);
	

}


	

