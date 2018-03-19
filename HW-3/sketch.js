//Declare the SetUp Function
function setup(){
  //Create a Canvas that is 500px width and 600px height
  createCanvas(600,600);
  //Define the Color of the background
  background('blue');
  //Create an Ellipse in the upper left hand corner of the Canvas
  // Added this to give myself an example of hpw a shape would fit into the sketch
  ellipse(20, 20, 30, 30);

}

// Declare the drawn funcitons within the sketch
function draw(){
  // Write "Hello World" 40 x 40 on the x and y axis
  text('Hello World!', 40, 40)
}
