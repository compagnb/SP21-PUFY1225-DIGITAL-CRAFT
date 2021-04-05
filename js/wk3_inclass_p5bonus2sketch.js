// runs once and  setups the scene
function setup(){
	createCanvas(600, 600);
}

// runs FOREVER
function draw(){
	// no background is drawn so the old ellipse is not cleared, and a trail is drawn
	// setting the stroke as black and the fill as red
	stroke(0);
	fill("red");
	// by using mouseX and mouseY you can draw a mouse every time this runs where ever the mouse is.  
	ellipse(mouseX, mouseY, 100, 100);
}