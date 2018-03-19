// This is a practice sketch where I am making the mouse x, mouse y ball loop
//function setup(){
    //createCanvas(windowWidth, 600);
    //background('yellow');

//}

//function draw(){
    //noCursor();
    //fill('white');
    //ellipse(mouseX, mouseY, 40);

//}


//The Actual HW 5 assignment

//My character Lars from the last assignment will roll across the page following the computer cursor
let r = 10;
let g = 10;
let b = 10;

let colorChange = 10


function setup() {
    //createCanvas( windowWidth, 800 );
    createCanvas( windowWidth, windowHeight );
}

//let circleRate = 0;
let angle = 0;

function draw() {
    //Set background color to blue
    background( 'blue' );
    //cursor off, you'll only see lars
    noCursor();


    r = r + 10
    g = g + 10
    b = b + 10


    fill(r, g, b);
    translate(width*0.5, height*0.5);
    rotate(radians(angle) );
    ellipse(mouseX, mouseY, 100 , 200);

    angle = angle + 40;


   }
