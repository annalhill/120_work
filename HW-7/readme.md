Anna Hill, MART 120

[Live Sketch Link](Your Live Link)


# HW 7 | Describe then Alter the Bouncing Ball

## Description of What the Original Code is Doing

```
// Via Google- Delta means a variable or function/ a finite increment
let ball = {};  // Calls in the function that allows the ball to preform actions called on within the brackets
ball.width = 40; // Defining the ball width to 40px
ball.x = 10; // The ball starts on 10px, x- axis
ball.y = 10; // The ball starts on 10px, y- axis
ball.delta_x = 1; // x- axis that the ball starts on
ball.delta_y = 1; // y- axis that the ball starts on
ball.scale_x = 1; // Starting at 1px width
ball.scale_y = 1; // Starting at 1px height

function setup() { // calling in the parts of the sketch that will not change
    createCanvas(windowWidth, 400); // Creating a canvas (width, height)
    background(255); // Setting the background color to white
}

function draw() { // calling in the parts of the sketch that will be changing

    ball.x += ball.delta_x * ball.scale_x; // Adds a value of one to the position of the ball in relation to it's starting point on the x- axis and starting width of 1px
    ball.y += ball.delta_y * ball.scale_y; // Adds a value of one to the position of the ball in relation to its starting point on the y- axis and starting height of 1px

    // The above functions together keep the scale the same and add one variable to the position of the ball, allowing it to move in increments across the screen


    if (ball.x >= width || ball.x <= 0) { // if the x- axis of the ball is greater than or equal to the width and/ or if the x- axis of the ball is less than or equal to 0 then...
        ball.delta_x = -1 * ball.delta_x; // ... then the x-axis should be equal to negative one multiplied by the x- axis of the ball
    }
    if (ball.y >= height || ball.y <= 0) { // If the y- axis of the ball is greater than or equal to the height and/ or the y-axis of the ball is less than or equal to 0 then...
        ball.delta_y = -1 * ball.delta_y; // ... then the y- axis should be equal to negative one multiplied by the y- axis of the ball
    }

    fill(255); // Fill color of the ball is white
    ellipse(ball.x, ball.y, ball.width, ball.width); // Defining the actual dimensions of the ellipse that are being used based on the x and y axis of where the ball is located and the widths of the ball
}

function mousePressed() { // Creating a function that allows pressing your mouse to change a variable of your function draw()
    ball.scale_x = map(mouseX, 0, width, 0.5, 10); // Takes the position of mouse pressed on the x- axis and alters not only the spacing between the balls but also the axis on which the ball is traveling on
    ball.scale_y = map(mouseY, 0, height, 0.5, 10); // Takes the position of mouse pressed on the y- axis and alters not only the spacing between the balls but also the axis on which the ball is traveling on
}
```

## How did you alter the sketch?

- Changed the height of my sketch so that it would fill a greater portion of the screen- this simply looks nicer to me
- Made the ball black on a blue screen
- Altered the shape that is being used and the starting point of the Sketch
  - The sketch now starts at 10px x 10px
  - The shape being used is a triangle at 0.5px x 0.5px, essentially making it a line, making fractal movements out from the starting point
- I then alter the px of the triangle in order to create a thicker 'stroke'
- When the sketch fractures across the screen, without mouseX or mouseY, the sketch eventually stops creating visual new lines because it's overlapping the same pattern over and over. This is where the mouseX and mouseY come into play because they change the original axis and direction in which the sketch is being drawn.
