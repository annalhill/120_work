// Global Variables
let bg; //background color

var qty = 100;
var xPos = [];
var yPos = [];
var SnowSize = [];
var direction = [];
var minSnow = 1; // Minimum Snowflake Size
var maxSnow = 5; // Maximum Snowflake Size
var sc = 255; // Color of the snow

// Calling in the static variables that won't change
function setup() {
  bg = color ('black');

  createCanvas(windowWidth, 800);
  background(bg);
  framerate(40);
  noStroke();

  // Starting positions of draw
  for(var i = 0; i < qty; i++) {
    flakeSize[i] = round(random(minSnow, maxSnow));
    xPos[i] = random(0, width);
    yPos[i] = random(0, height);
    direction[i] = round(random(0, 1));
  }

}

// Calling in all the variabled that will change throughout the sketch
function draw() {
  fill(sc);
  drawSnow();
}

function drawSnow(){
  for(var i = 0; i < xPos.length; i++) {

    ellipse(xPos[i], yPos[i], snowSize[i], snowSize[i]);

    if(direction[i] == 0) {
      xPos[i] += map(snowSize[i], minSnow, maxSnow, .1, .5);
    } else {
      xPosition[i] -= map(snowSize[i], minSnow, maxSnow, .1, .5);
    }

    yPos[i] += snowSize[i] + direction[i];

    if(xPos[i] > width + snowSize[i] || xPos[i] < -snowSize[i] || yPos[i] > height + snowSize[i]) {
      xPos[i] = random(0, width);
      yPos[i] = -snowSize[i];
    }
  }
}


// Copied this part from Dr. Musick's example
/* FULLSCREEN FUNCTIONALITY */
//function windowResized() {
//    resizeCanvas(windowWidth, windowHeight);//
//    background(bg);
//}

//function mousePressed() {
//    if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
//        let fs = fullscreen();
//        fullscreen(!fs);
//    }
//}


//}
