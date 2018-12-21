/*
    Final Project Proposal
*/
var slide = 0;
var bird, button;

function preload() {
    button = loadImage("Button.jpg");
    bird = loadImage("FlappyBird.jpg");
}

function setup() {
    createCanvas(800, 500);
    textSize(60);
    textFont('Times New Roman');
    textAlign(CENTER, CENTER);
    rectMode(CENTER);
    fill("white")
}

function draw() {
    background(45);
    
    if (slide == 0) {
        textSize(60);
        text("Final Project Idea", 400, height/2);
        
    } else if (slide == 1) {
        textSize(30);
        text("Button Sensor", 400, 100);
        image(button, 300, 200, 200, 200);
    } else if (slide == 2) {
        text("Theme: FlappyBird", 400, 100);
        image(bird, 300, 200, 200, 250)
    } else if (slide == 3) {
        textSize(32);
        text("I will be using the button sensor, to make it interact with the bird to make it jump", 400, 250, 400, 250);
        
    }
}

function mousePressed() {
    if (mouseX > width/2) {
        if (slide < 3) {
            slide++;
        }
    } else {
        if (slide > 0) {
            slide--;
        }
    }
}