// Creating an array for the sketch
var expand = [ ];
let a = 0;

let option = 1
function setup() {
  // Canvas will fit the width and height of the browser screen that the user opens- will only re-adjust if page is refreshed
  createCanvas( windowWidth, windowHeight);
	noStroke();

  for (var i = 0; i < 20; i++) {

  expand.push(
    {
          period: { x: random(100, 100), y: random(100, 100) },
          maxSize: random(4),
          pos: {
              x: random(width),
              y: random(height)
          }
      } //end looping circles
   );// end array push
} // end for loop

}

function draw() {
  // Background color is white
  background (0);
  // A variable to help tell the program to load the ellipses in altered dimensions, etc.

  let pad = width / height;

  // determine the number of smileys to draw in the array
// based on mouse position
// i.e. left=0 - right=all
let numToDraw = map( mouseX, mouseY, width, 1, expand.length );
for ( let i = 0; i < numToDraw; i++ ) {
    // draw the smileys
    drawLoopingCircles( expand[i], a );
}

}

function drawLoopingCircles () {

  let numPerRow = 50;
  let circleSize = 10;
  let pad = width / numPerRow;

  if ( option == 1) {
    for(var y = circleSize; y < height; y = y + pad ) {
    for(var x = circleSize; x < width; x = x + pad ){
        fill(120, 280, random(255) );
        loopingCircles(mouseX, mouseY);
        circleSize = Math.abs(random(5, 10)) | 0;
    }

    }

  }
}

function loopingCircles (posX, posY, scaleX, scaleY) {
  // Starting sandbox
  push();

  // scale and position for the ellipses
  translate(posX, posY);
  scale(scaleX, scaleY);

  //These parameters are defining what the circle looks like and where its starting position is (draw)
  stroke (255);
  strokeWeight(2);
  fill ('rgb(78, 62, 121)');
  ellipse (30, 30, 30);

  // Ending sandbox
  pop();

}
