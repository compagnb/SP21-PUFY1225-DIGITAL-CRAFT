// runs once and  setups the scene
function setup(){
	createCanvas(600, 600);
}

// runs FOREVER
function draw(){
	// background will draw every time this runs, remove this to draw a trail
	background(200);
	// setting the stroke as black and the fill as red
	stroke(0);
	fill("red");
	// by using mouseX and mouseY you can draw a mouse every time this runs where ever the mouse is.  
	ellipse(mouseX, mouseY, 100, 100);
}