# HW- 9

## Anna Hill- MART 120

This is a break week so all that this will contain is notes on array's.

#### Arrays
1. Single variables... var = 0
2. Objects... {}

```
let myVar = []; // array
let myArray = ["tree", "hat", "cat"]; // pre- filled array
myArray[1];
```

- The element "tree" is at index 0
- The element "hat" is at index 1
- The element "cat" is at index 2

3. A nested array or a 2D array

 ```
 let nestedArr = [
    [ 2, 100, 34 ],
    [ 20, 80, 72 ],
    [ 120, 3, 90 ],
    [ 90, 90, 90 ]
];

nestedArr[0][2] // ← returns '34'
```

4. Rotating through elements
  - idx = index
  - idx++ = incremented every frame
  - Finally, in order to prevent an error by trying to access an element that does not exist, we will need to wrap our incrementing index variable in the length of the array. We can do this suing the modulo operator (%), along with the length of the array (i.e. stringArray.length).

```
let stringArray = ["Ha", "JS", ":)", "arrays are fun", "p5 is AWESOME!!"];

let bg_color = 'rgb( 230, 240, 200 )';
function setup() {
    createCanvas(windowWidth,400);
    frameRate(1);
}

// initialize a variable 'idx' to the Number 0
let idx = 0;
function draw() {
    background(bg_color);
    textSize(56);

    text("The index value is: " + idx, 20, 80);
    text("The element is: " + stringArray[idx], 20, 200);

    // increment the idx variable
    // also make sure it stays within the bounds of the array
    idx = ( idx + 1 ) % stringArray.length;
```

5. Using Numbers

```
let circles = {
    diam: [ 20, 400, 150 ],
    pos: [ 40, 150, 250 ],
    idx: 0
};
circles.numCircles = circles.diam.length;

function setup() {
   createCanvas( windowWidth, 400 );
   frameRate( 1 );
}

function draw() {
    background( ‘rgb(30, 200, 120)’ );

    fill( ‘rgb(230, 30, 120)’ );
    ellipse(
        circles.pos[circles.idx],
        circles.pos[circles.idx],
        circles.diam[circles.idx]
    );

    circles.idx = ( circles.idx + 1 ) % circles.numCircles;
}
```

#### Looping Arrays

```
let xPosArr = [ 20, 30, 180, 250, 462 ];

function setup() {
    createCanvas( windowWidth, 400 );
}

let yPos = 0;
function draw() {
    background( 'rgb( 200, 37, 52 )' );

    stroke( 255 );
    fill( 'rgb( 100, 255, 0 )' );

    for( let idx = 0; idx < xPosArr.length; idx++ ) {
        // draw some boxes!
        rect( xPosArr[idx], yPos, 20, 40 );
    }

    yPos = (yPos + 1) % windowHeight;
}
```
