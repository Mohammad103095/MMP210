function setup() {
	createCanvas(640, 360);
    background(220);
}

function draw() {
    // fill("#FEB616")
	stroke('black');
    fill('tan');
    rect (220, 90, 200, 240);
    
    //Left Eye
    stroke('#0DFF84');
    fill('#0CE83A');
    ellipse(270, 150, 50);
    
    //Left Pupil
    stroke('#17FF00');
    fill('#0DFF84');
    ellipse(270, 150, 30);
    
    //Right Eye
    stroke('#0DFF84');
    fill('#0CE83A');
    ellipse(370, 150, 50);
    
    //Right Pupil
    stroke('#17FF00');
    fill('#0DFF84');
    ellipse(370, 150, 30);
    
    //Noise
    stroke("orange");
    fill('orange');
    arc(320, 200, 50, 50, 0, PI);
    
    //Mouth
    stroke("red");
    fill('red');
    arc(320, 250, 100, 100, 0, PI);
    
    //Teeth
    stroke("yellow");
    fill('white');
    arc(320, 255, 75, 75, 0, PI);
    
    

}
