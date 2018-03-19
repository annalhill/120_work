function setup(){
  createCanvas(800, 800);

}

function draw(){
  //Set Bakcground color to blue
  background("blue");

  //Sandbox for the entire sketch
  push();
  translate(250, 250);
  pop();

  //Body and Head of Lars the Snowball Yeti
  push();
  //Moving the Body further down the screen so that my triangle mountain background will look good :)
  translate(300, 300);
  ellipse(250, 250, 360, 360);
  pop();
  // End Body

  //Eyes
  push();
      stroke("red");
      translate(540, 470);
      rotate(radians(90));
      arc( 50, 70, 100, 100, HALF_PI, 0, PIE );
  pop();
  push();
      stroke("red");
      translate(570, 450);
      arc( 50, 70, 100, 100, HALF_PI, 0, PIE );
  pop();

  push();
      stroke('black');
      translate(460, 500);
      ellipse(20, 20, 30, 30);
  pop();
  push();
      stroke('black');
      translate(590, 500);
      ellipse(20, 20, 30, 30);
  pop();
  // End Eyes

  //Goggles
  push();
      // Body of Glasses
      line(400, 480, 690, 480);
      line(400, 485, 690, 485);
      line(400, 490, 690, 490);
      line(400, 495, 690, 495);
      line(400, 500, 690, 500);
      line(400, 505, 690, 505);
      line(400, 510, 690, 510);
      line(400, 515, 690, 515);
      line(400, 520, 690, 520);

      //Lower Left of Glasses
      line(560, 525, 690, 525);
      line(570, 530, 690, 530);
      line(580, 535, 690, 535);
      line(590, 540, 690, 540);
      line(600, 545, 690, 545);

      //Lower right of glasses
      line(400, 525, 530, 525);
      line(400, 530, 520, 530);
      line(400, 535, 510, 535);
      line(400, 540, 500, 540);
      line(400, 545, 490, 545);

  pop();
  // End Goggles

  //Arms
  push();
      stroke('black');
      fill('black');
      line(290, 540, 370, 600);
  pop();

  push();
      line(640, 670, 690, 600);
  pop();
  //End Arms

  //Legs
  push();
  //Main Leg Left
  line(500, 720, 500, 770);
  // Foot?
  line(500, 770, 480, 770);
  pop();

  push();
  //Main Leg Right
  line(600, 720, 600, 770);
  // Foot?
  line(600, 770, 620, 770);
  pop();
  //End Legs

  //Nose
  push();
      translate(540, 600);
      fill('red');
      ellipse(5, 5, 10, 10);
  pop();
  //End Nose

  //Mouth
  push();
      translate(510, 600);
      stroke('red');
      arc(20, 50, 60, 60, 0, PI);
  pop();
  //End Mouth

}
