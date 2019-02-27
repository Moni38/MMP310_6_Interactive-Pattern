
var x=0;
var y=0;
var speed=3;
var yspeed=5;


function setup() {
	
	createCanvas(600,400);

}

function draw() {
	background(0);

//color change
  if (x> width/2){
    stroke(255,0,0);
  }
  else {
    stroke (0,255,0);
  }

  if (y> height/2){
    fill( random(205), random(2),random(2) ) ;
  }
  else {
    fill (10,255,9);
  }



	strokeWeight(4);
	//noFill();
	ellipse(x, y,100,100);
   

  if (x> width){
    speed= random(-20,-1);
  }

  if (x < 0){
  	speed= random(1,10);
  }
  if (y > height){
  	yspeed= random(-15,-1);
  }

  if (y < 0){
  	yspeed= random(2,15);
  }

 x=x + speed;
 y=y + yspeed;

 console.log("x postition"+x);

}