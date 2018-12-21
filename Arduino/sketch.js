/*
    Arduino + p5 
*/
var serial;
var portName = "/dev/cu.usbmodem14201";
var sensorValue;
var background;


function setup() {
    createCanvas(640, 360);
    
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
    trim(currentString);
    if (!currentString) {
        return;
    }
    sensorValue = currentString;
}

function preload() {
    back = loadImage("Background.jpg");
    sun = loadImage("Sun.png");
    
}

function draw() {
	var c = map(sensorValue, 0, 1023, 0, 180);
    
    image(back, 0,0, width, height);
    tint(c, c, c);

	// sky
	//background(c, c, c + 85);

	// sun
	var y = map(sensorValue, 0, 1023, height, 0);
    image(sun, 250, y, width/4, height/4);

}
