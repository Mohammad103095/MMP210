/*
Final Project
Bird creation
By Mohammad Islam
*/


function Line() {
	//How wide the gaps will appear
    this.gap = random(300, 350);
	this.top = random(100, height - this.gap - 200);
	this.bottom = this.top + this.gap;

	this.x = width;
	this.w = 50;
	//This controls how fast the lines appear
    this.speed = 5;

	this.show = function() {
		fill(0, 255, 0);
		rect(this.x, 0, this.w, this.top);
		rect(this.x, this.bottom, this.w, height - this.bottom);
	}

	this.update = function() {
		this.x -= this.speed;
	}

	this.visible = function() {
		if(this.x < -this.w) return true;
		return false;
	}

	// Detect if a bird hits the line or passes in the middle

	   this.detect = function(bird) {
		if((bird.x == this.x + this.w) && (bird.y > this.top && bird.y < this.bottom)) {
			return 1;
		} else if ((bird.x >= this.x && bird.x <= this.x + this.w) && (bird.y < this.top || bird.y > this.bottom))
			return 2;

		return 0
	}
}
