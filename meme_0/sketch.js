/*
Meme Project
By Mohammad Islam
v 0
10.2.2018
*/

var curry; //global
var lebron; //global


    //Image Position
var imgX = 0; // X Position for both images
var imgY = 0; // Y Position for lebron image

    //Colors
var b = 45 //BackGround
var t = "yellow" ; // Text 
   
var ts = 45; //TextSize

    //Text Postion
var textX = 0 //x position
var textY = 400 // y position
 
function preload() {
    lebron = loadImage("Lebron.jpg");
    curry = loadImage("Curry.jpg");
}

function setup() {
	createCanvas(800, 800); 
}


function draw() {
    background(b);
    
    image(Lebron, imgX, imgY, width, height/2);  
    image(Curry, imgX, height/2, width, height/2);

    fill(t);
    textSize(ts);
    textFont("Comic Sans MS");
    text("The Same Thing That Makes You Cry", textX, textY -5);
    text("Makes Me Smile", textX, textY +35);
    
}
