/*
Final Project
Bird creation
By Mohammad Islam
*/



var Birdimg;
function preload() {
    Birdimg = loadImage("Bird.png");
}


function Bird() {
	this.x = 80;
	this.y = height / 2;
	this.size = 45;
// this controls the gravity and velocity of the bird and it gets pulled down
	this.gravity = 4;
	this.velocity = 0;


	this.show = function() {
		fill(255);
		//ellipse(this.x, this.y, this.size);
        image(Birdimg,this.x, this.y, this.size);

        
	}

	this.update = function() {
		this.velocity += this.gravity;
		this.velocity *= 0.5;
		this.y += this.velocity;

		if(this.y > height) {
			this.y = height;
		}

		if(this.y < 0) {
			this.y = 0;
		}
	}

	this.jump = function() {
		this.y -= 100;
	}
}
