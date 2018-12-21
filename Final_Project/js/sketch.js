/*
Final Project
Sketch
By Mohammad Islam
*/


var Backimg;
function preload() {
    Backimg = loadImage("Back.jpeg");
}

var bird;
var lines = [];
var scoreDiv = document.getElementById('score');

var serial;
var portName = "/dev/cu.usbmodem14201";
var sensorValue;
var oldValue = 0;

function setup() {
	createCanvas(500,800);
	bird = new Bird();
	lines.push(new Line());
    
    serial = new p5.SerialPort();
    serial.on('connected', serverConnected);
    serial.on('open', portOpen);
    serial.on('data', serialEvent);
    serial.on('error', serialError);
    serial.on('close', portClose);
    
    serial.open(portName); 
}

function serverConnected() {
    console.log("connected");
}

function portOpen() {
    console.log("port open");
}

function portClose() {
    console.log("port close");
}

function serialError() {
    console.log("error");
}

function serialEvent() {
    var currentString = serial.readLine();
//    trim(currentString);
    if (!currentString) {
        return;
    }
    sensorValue = currentString;
    console.log(sensorValue);
}


function draw() {
    
    //This is where we control the bird with a button
    console.log(sensorValue);
        if (sensorValue == 1 && oldValue ==0) {
		bird.jump();
	}
    oldValue = sensorValue;

	background(45);
    //image(Backimg, width/2, height/2, width/2, height/2);
    
	if(frameCount % 120 == 0) {
		lines.push(new Line());
	}

	bird.update();
	bird.show();

	for(var i = lines.length - 1; i >= 0; i--) {
		lines[i].show();
		lines[i].update();

		if(lines[i].detect(bird) === 1) {

		} else if(lines[i].detect(bird) === 2) {
            scoreDiv.className = "finished";
			remove();
		}
		if(lines[i].visible()) {
			lines.splice(i, 1); // [1]
		}
	}

    
    
    
    
    //bird.jump(sensorValue);
	//bird.jump = map(sensorValue, 0, 1023, 0, 180);
}


function keyPressed() {
	if (keyCode == SHIFT) {
		bird.jump();
	}
} 
