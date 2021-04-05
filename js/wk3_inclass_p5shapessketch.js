// runs once and  setups the scene
function setup(){
	createCanvas(600, 600);
}

// runs FOREVER
function draw(){
  // set background color
  background(200, 200, 225);
 
  // set a fill color (red, green, blue)
  fill(0, 180, 180);
  
  // set stroke properties
  stroke(0, 0, 255);
  strokeWeight(10);
  
  // draw a circle
  ellipse(100, 100, 100, 100);  
  
  // set a new fill color
  fill(255, 0, 0);
  
  // set a new stroke property
  noStroke();
  
  // draw a triangle
  triangle(200, 150, 250, 25, 310, 150);

  // draw a quadrilareral
  quad(38, 31, 86, 20, 69, 63, 30, 76);

  // Draw a rectangle at location (30, 20) with a width and height of 55.
  rect(30, 20, 55, 55);

  // Draw a rectangle with rounded corners, each having a radius of 20.
  rect(30, 20, 55, 55, 20);

  // Draw a rectangle with rounded corners having the following radii:
  // top-left = 20, top-right = 15, bottom-right = 10, bottom-left = 5.
  rect(30, 20, 55, 55, 20, 15, 10, 5);

  // Draw a line
  line(30, 20, 85, 75);

  // Change the color
  stroke('purple'); 
  // Make the points 10 pixels in size
  strokeWeight(10); 
  // Draw a point
  point(85, 75);

  // Draw a custom shape
  beginShape();
  vertex(30, 20);
  vertex(85, 20);
  vertex(85, 75);
  vertex(30, 75);
  endShape(CLOSE);

}