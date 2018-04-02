## HW- 10
## Anna Hill MART 120

#### Notes:
1. Functions!
  - nameOfFunction()

  ```
  function functionOne (input1, input2) {

  }

  function setup(){
    createCanvas( windowWidth, 400 );
}

function draw() {
    background( 'rgb(91, 255, 147)' );

    // call our newly defined function
    drawCircle();  // An easier way to call in the function as defined below- makes looping functions easier
}

// Our newly defined function
function drawCircle() {
    fill( 'grey' );
    noStroke();
    ellipse( 150, 150, 150 );
}
  ```

  - Function definition/ function statement
    - This is the way that I should be using functions in this course
    - The variables that are within the parenthesis make the function do something

  ```
  function setup(){
    createCanvas( windowWidth, 400 );
    frameRate(1);
}

function draw() {
    background( 'rgb(91, 255, 147)' );

    // create numbers to pass our function
    let num1 = floor(random(0, 100));
    let num2 = floor(random(0, 100));
    // call our newly defined function
    addThings( num1, num2 );
}

// Our newly defined function
function addThings( value1, value2 ) {
    // 1. Add the values together. Store them into some variable.
    let result = value1 + value2;

    // 2. Print the results as a string to the canvas.
    result = "The result of adding '" + value1 + "' and '" + value2 + "' is '" + result + "'.";
    textSize(18);
    textAlign( CENTER );
    text( result, width/2, height/2 );
}
```

2. Reusing
  - If you are planning on reusing code, create a function for the numbers, words, or objects you are Reusing
  - ex: function larsTheYeti() {  }
    - posX, posY, scaleX, scaleY

3. Function returns
  - floor() = Takes a parameter and rounds it down to the nearest whole numbers
    - can be used later or right away
    - keyword, return

    ```
    function addThings( value1, value2 ) {
    // 1. Add the values together. Store them into some variable.
    let result = value1 + value2;

    // 2. Return the value
    return result;
    }
    ```


#### Process:
What I am going to attempt to do in this homework sample is adapt an array to create a visual effect such as a spiral or ellipses that will loop over each other passing from the middle to the outer edge of the screen. Fingers crossed that I can do this!

Thus far in the project, I have managed to get all of the ellipses to show up in the sandbox function loopingCircles.
Now I am looking to try and animate those ellipses.

I came back to this project today, 4/1 to see if I could make it more interesting/ use my array in a more appropriate manner.
After working through some weird syntax and html kinks with Emily at office hours I was able to get the original sketch up and running.

From there I worked on the expand array and how it functions with expand.push, a class function in which I was not familiar with and also didn't see very many notes on in the lesson.

In the end I was able to get a purple dot to track my mouse around the screen in specific intervals through my sandbox functions and the array that I built and hopefully properly used.
