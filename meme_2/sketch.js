/*
Meme Project
By Mohammad Islam
v 2
10.11.2018
*/

var curry; //global
var lebron; //global
var isiah;  //global
var jordan; //global
var r, g, b;
var x = 70;
var y = 0;
var speed = 1;
var speed2 = 3;
 
function preload() {
    lebron = loadImage("Lebron.jpg");
    jordan = loadImage("Jordan.jpg");
    curry = loadImage("Curry.JPG");
    isiah = loadImage("Isiah.jpg");
}

function setup() {
	createCanvas(650, 650);
    background(0); 
    r = random(0,255);
	g = random(0,255);
	b = random(0,255);
	
}
function draw() {
	background(45);
        if (frameCount % 80 === 0) {
		r = random(0,255);
		g = random(0,255);
		b = random(0,255);
	}
    fill(r, g, b);
    textSize(25);
    textFont("Comic Sans MS");
    textAlign(CENTER);
    
    text("The Same Thing That Makes You Cry",x, y, 200, 100);
    if (mouseIsPressed) {
		image(jordan, width/2, 0, width/2, height/2);
	} else {
		image(lebron, width/2, 0, width/2, height/2);
	}
    
	y += speed2;
	if (y > 225 || y < 0) {
		speed2 *= -1;
	}
    if (mouseIsPressed) {
		image(isiah, 0, height/2, width/2, height/2);
	} else {
		image(curry, 0, height/2, width/2, height/2);
	}

    translate(500, 500);
    var r = frameCount / 100 * PI;
	rotate(r);
    text("Makes Me Smile", 0, 0);
    

}