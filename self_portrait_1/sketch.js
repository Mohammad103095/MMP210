/*
Self Portrait 
v1 
By Mohammad Islam

*/


function setup() {
	createCanvas(640, 360);
    background(220);
}

//headVar
var headStroke = "black"
var headColor = "tan"
var headX = 220
var headY = 90
var headSize = 200

//eyeVar
var eyeColor = "#0CE83A"
var eyeStrokeFill = "#0DFF84"
var pupilStroke = "#17FF00"
var eyeX = 270
var eyeY = 150
var eyeSize = 50

//noiseVar
var noiseColor = "orange"

//mouth
var mouthColor = "red"

//teeth
var teethFill = "white"
var teethStroke = "yellow"

//arc Mouth teeth Noise
var arcX = 320
var arcY = 200
var arcSize = 100
var arcSNS = 0




function draw() {
    // Head
	stroke(headStroke);
    fill(headColor);
    rect (headX, headY, headSize, headSize + 40);
    
    //Left Eye
    stroke(eyeStrokeFill);
    fill(eyeColor);
    ellipse(eyeX, eyeY, eyeSize);
    
    //Left Pupil
    stroke(pupilStroke);
    fill(eyeStrokeFill);
    ellipse(eyeX, eyeY, eyeSize - 20);
    
    //Right Eye
    stroke(eyeStrokeFill);
    fill(eyeColor);
    ellipse(eyeX + 100, eyeY, eyeSize);
    
    //Right Pupil
    stroke(pupilStroke);
    fill(eyeStrokeFill);
    ellipse(eyeX + 100, eyeY, eyeSize - 20);
    
    //Noise
    stroke(noiseColor);
    fill(noiseColor);
    arc(arcX, arcY, arcSize - 50, arcSize -50, arcSNS, PI);
    
    //Mouth
    stroke(mouthColor);
    fill(mouthColor);
    arc(arcX, arcY + 50, arcSize, arcSize, arcSNS, PI);
    
    //Teeth
    stroke(teethStroke);
    fill(teethFill);
    arc(arcX, arcY + 55, arcSize -25 ,arcSize- 25, arcSNS, PI);
    
    

}
