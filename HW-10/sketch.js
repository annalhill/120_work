// Creating an array for the sketch
var expand = [];



function setup() {
  // Canvas will fit the width and height of the browser screen that the user opens- will only re-adjust if page is refreshed
  createCanvas( windowWidth, windowHeight);
	noStroke();
}

function draw() {
  // Background color is white
  background (255);
  // A variable to help tell the program to load the ellipses in altered dimensions, etc.
  let expandSize = 10

  for(let y = expandSize; y < height; y += pad);
  for(let x = expandSize; x < height; x += pad);

  }

  // Defining where I would like the ellipses to move/ be
  loopingCircles (expandSize, expandSize, 1);
  loopingCircles (expandSize, expandSize, 1);
  loopingCircles (expandSize, expandSize, 1);
  loopingCircles (400, 400, 1);
  loopingCircles (100, 100, 1);
  loopingCircles (500, 200, 1);
  loopingCircles (100, 100, 1);
  loopingCircles (50, 50, 1);

function loopingCircles (posX, posY, scaleX, scaleY) {
  // Starting sandbox
  push();

  // scale and position for the ellipses
  translate(posX, posY);
  scale(scaleX, scaleY);

  //These parameters are defining what the circle looks like and where its starting position is (draw)
  stroke (0);
  strokeWeight(2);
  ellipse (200, 200, 200);

  // Ending sandbox
  pop();

}












}
