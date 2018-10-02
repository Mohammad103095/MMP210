/*
Self Portrait 
v3
By Mohammad Islam
*/

    //eyeVar
    var eyeColor = "#0CE83A";
    var eyeStrokeFill = "#0DFF84";
    var pupilStroke = "#17FF00";
    var eyeSize = 50;

    //headVar
    var headStroke = "tan";
    var headColor = "tan";
    var headSize = 200;

    //noseVar
    var noseColor = "orange";

    //mouthVar
    var mouthColor = "red";

    //teethVar
    var teethFill = "white";
    var teethStroke = "yellow";

    //arc mouth teeth noise

    var arcSize = 100;
    var arcSNS = 0;



function setup() {
	createCanvas(750, 560); 
}


function draw() {
    background(120, 20);

    //mouseVarEyes
    var eyeX = mouseX;
    var eyeY = mouseY;
    
    //mouseVarHead
    var headX = mouseX -50;
    var headY = mouseY -60;

    //mouseVarNose,Teeth,Noise
    var arcX = mouseX +50;
    var arcY = mouseY +60;

    // Head
    var r = mouseX; // red;
	var g = 45; // green
	var b = mouseY; // blue
	fill(r, g, b);
	stroke(headStroke);
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


function mousePressed() {
    eyeSize = map(mouseX, height, 50, 80, 50);
    //eyeSize += 5;
}