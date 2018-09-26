/*
Self Portrait 
v2
By Mohammad Islam
*/


function setup() {
	createCanvas(640, 360);
    background(220);
}


function draw() {
    background(220);
      

//eyeVar
var eyeColor = "#0CE83A"
var eyeStrokeFill = "#0DFF84"
var pupilStroke = "#17FF00"
var eyeX = mouseX;
var eyeY = mouseY;
var eyeSize = frameCount;

//headVar
var headStroke = "black"
var headColor = "tan"
var headX = mouseX -50;
var headY = mouseY -60;
var headSize = 200

//noseVar
var noseColor = "orange"

//mouth
var mouthColor = "red"

//teeth
var teethFill = "white"
var teethStroke = "yellow"

//arc Mouth teeth Noise
var arcX = mouseX +50;
var arcY = mouseY +60;
var arcSize = 100
var arcSNS = 0
    

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
    
 
    
    
    //Nose
    stroke(noseColor);
    fill(noseColor);
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
