// This week, you should develop a sketch where objects, created from one or more classes, are “aware” of each other
// , and can interact with each other.
//
// Use the examples from in class to study how to make your objects aware of each other.
//
// You are free to create whatever you want for this sketch. If you are having a hard time coming
// up with ideas, perhaps consider implementing a simple game that you know of, some sort of generative pacman sketch
// (similar to the last page), or a “basic ecosystem” where objects search around for each other.

// A HTML range slider
var changeOne;
var changeTwo;
var changeThree;

function setup() {
  createCanvas(windowWidth, 800);
  // hue, saturation, and brightness
  colorMode(HSB, 255);
  // slider has a range between 0 and 255 with a starting value of 127
  changeOne = createSlider(0, 255, 127);
  changeTwo = createSlider(0, 255, 127);
  changeThree = createSlider(0, 255, 127);
}

function draw() {
  background(230, 230, 250);
  one();
  two();
  three();

function one(){
  // Set the hue according to the slider
  stroke(changeOne.value(), 255, 255);
  fill(changeOne.value(), 255, 255, 127);
  rect(400, 200, 400, 200);
  stroke(0);
  strokeWeight(4);
}

function two(){
  // Set the hue according to the slider
  stroke(changeTwo.value(), 255, 255);
  fill(changeTwo.value(), 255, 255, 127);
  ellipse(400, 200, 200, 200);
  stroke(255);
  strokeWeight(4);
}

function three(){
  // Set the hue according to the slider
  stroke(changeThree.value(), 255, 255);
  fill(changeThree.value(), 255, 255, 127);
  quad(660, 800, 300, 200);
  stroke(60);
  strokeWeight(4);
}
}
