// The class you create should allow each object to have its own unique behavior. Additionally this class should have;
//
// a constructor method that sets up all properties for new objects.
// at least two other methods that cause these objects to do something on the screen.
// In your setup() function, you should create the objects and add them to an array.
//
// In your draw() function, you should call the appropriate methods on each object so they do something, whatever that thing is that they do.
//
// As always, you should comment your code, write a readme, and provide links on the forum to both your git repo, and live sketch.


let ribbon = [];
var outerD = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  let b = new Ribbon(width / 2, height / 2, 10);
  ribbon.push(b);
}

function mouseDragged() {
  let r = (10, 50);
  let b = new Ribbon(mouseX, mouseY, r);
  ribbon.push(b);
}

function draw() {
  background(0);
  for (let i = 0; i < ribbon.length; i++) {
    ribbon[i].move();
    ribbon[i].show();
  }

  for (var i = 0; i < 5; i++) {
    var d = outerD - 30 * i;
    if (d > 0) {

      var fade = map(d, 0, width, 0, 255);
      stroke(fade);
      noFill();
      ellipse(200, 200, d);
    }
  }

  outerD = outerD + 2;
}


class Ribbon {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  move() {
    this.x = this.x;
    this.y = this.y;
  }

  show() {
    stroke(230, 230, 250);
    strokeWeight(4);
    fill(230, 230, 250);
    ellipse(this.x, this.y, this.r * 2);
  }

}
