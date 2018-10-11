/*
Meme Project
By Mohammad Islam
v 1
10.11.2018
*/

var curry; //global
var lebron; //global

 
function preload() {
    lebron = loadImage("Lebron.jpg");
    curry = loadImage("Curry.JPG");
}

function setup() {
	createCanvas(650, 650);
    background(45); 
}

function draw() {
    fill('yellow');
    textSize(25);
    textFont("Comic Sans MS");
    textAlign(CENTER);   
}

function mouseClicked() {
        background(45);
        if (mouseX > 250){
            text("Makes Me Smile", 150, 500);
            image(curry, width/2, height/2, width/2, height/2);
        } else {
            text("The Same Thing That Makes You Cry", 400, 125, 200, 100);
            image(lebron, 0, 0, width/2, height/2);
        }
    
}
