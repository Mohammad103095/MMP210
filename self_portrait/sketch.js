function setup() {
	createCanvas(640, 360);
    background(220);
}

function draw() {
    // fill("#FEB616")
	stroke('black');
    fill('nofill');
    rect (220, 90, 200, 240);
    
    //Left Eye
    fill('brown')
    ellipse(270, 150, 50);
    
    //Right Eye
    ellipse(370, 150, 50);
    
    //Mouth
    stroke("red");
    fill('red')
    arc(320, 250, 100, 100, 0, PI);
    
    

}
