# HW 6-

##  Anna Hill- MART 120

#### Lesson Notes because I will forget:
1. Addition and Subtraction (You'd think this would be easy...)
  ```
  // declare a variables to hold result values
  var result;
  // add two numbers together, and store it in a variable
  // 'result' will be 13
  result = 10 + 3;

  // declare and set two variables
  var foo = 5;
  var bar = 4;
  // add to numbers stored in variables together
  // 'result' will be 9.
  result = foo + bar;
  ```
  - Can also be used with subtraction (-)

 2. Multiplication and Division (Don't even get me started on how much I've forgotten since High School...)
  ```
  // declare a variables to hold result values
  var result;
  // add two numbers together, and store it in a variable
  // 'result' will be 30
  result = 10 * 3;

  // declare and set two variables
  var foo = 5;
  var bar = 4;
  // add to numbers stored in variables together
  // 'result' will be 20.
  result = foo * bar;
  ```
  - Can also be used with Division
  - I must admit that the more I look at these equations the easier they seem and the more unintelligent I think I am for freaking out about them.

3. Dividing by 0
  - Can't divide by 0, however in the right equation, you can create an equation that is infinite.
  ```
  var result;
  result = 1 / 0;
  // results in infinity
  console.log( result );

  var result;
  result = 0 / 0;
  // results in infinity
  console.log( result );
  ```
  - NEVER DIVIDE BY 0, IT WILL CRASH YOUR COMPUTER OR BREAK YOU CODE.

4. Modulo (%)
  - 7 / 3 = 2 (remainder) 1
  - 7 Modulo 3 = 1 (The remainder)

  - This function is used to create boundaries for values
  ```
  var value = 0;

  function draw() {
    value = (value + 1) % 3;
  }
  ```
    - The above example increments the value by one and the modulo by three, therefore keeping all valuables between '0', the original value and '2' the value below the modulo.

#### I am a bit confused at this point because there is both P5 and javascript code with these examples and I am not sure if I should be learning just P5 or both languages at this point.

5. Exponentiation (So, just exponents?)
  - 2 to the power of 2
  - (2**2) = The number of * represents the power

  - If larger exponential values are being used then you can write the code like below:
  ```
  var exponent = 0;

  function draw() {
    var operator_result = 2 ** exponent;
    var func_result = pow( 2, exponent );
    exponent = exponent + 1;
  }
  ```

6. Increment and Decrement
  - (++) and (--)
    - Increase or decrease the values by a variable of one
    ```
    var inc_val = 0;
    var dec_val = 100;

    function draw() {
      inc_val++;
      dec_val--;
    }
    ```
  - Used with loops

7. Unary operator
  - Use this (-) to create a negative number, pretty straight forward

8. Characters with (=)
  - += addition assignment operator
  - -= subtraction assignment operator
  - * = multiplication assignment operator
  - / = division assignment operator
  - % = modulus assignment operator
  - * * = exponentiation assignment operator

9. Order of Operations
  - Parenthesis – ( )
  - Incrementation, Decrementation – ++, --
  - Exponentiation – **
  - Multiplication, Division, Modulus – * , /, %
  - Addition, Subtraction – +, -

10. Additional Math Functions
  - abs() = absolute values
  - round() = rounds to the nearest whole number <-- Don't know why I would use this?
  - floor() = round a value down to the nearest whole number
  - ceil() = round a value up to the nearest whole number
  - sqrt() = finds the square root of whatever number to place in the parenthesis (can't use negative numbers)

11. The Number Data Type
  - Integers = Int
    - Stores a whole value number
  - Floating = float
    - Stores numbers that require a decimal
  - Bits and Bytes (Binary)
    - 1 bit = 0 or 1
    - 2 bits = 00, 01, 10, 11
    - Stores the number of values defined * 2?
      - 1 = 2 values
      - 2 = 4 values
      - 3 = 6 values
      - 4 = 8 values

12. Exposing Data
  - text()
    - x_pos and y_pos is where variables are stored
      - let x_pos = 0
      - text(x_pos, 20, 80);
      - x_pos += 5
    - var der = ...
      - I don't understand how this works or what it stands for
    - console.log() = ?
      - A console is a sandbox where you can text your code to see if it works
      - log() is the program that displays things on the screen
      - In side the parenthesis, you place what you'd like to have displayed
        - numbers:
          console.log(1234);

          or characters:
          console.log("a,b,c");

          Or declared variables:
          console.log(myAge);
      - Google was helpful to get this info but I'm still not exactly sure of the point and why I can't simple display this through general shape, and text call- ins

13. The map() function
    - Parameters:
      1. value = Number, incoming value to be converted
      2. start1 = Number, lower bound of the values current range
      3. stop1 = Number, upper bound of the values current range
      4. start2 = Number, lower bound of the values target range
      5. stop2 = Number, upper bound of the values target range
      6. withinBounds = Boolean, constrain the value to the newly mapped range
      - Returns, number, remapped number

14. Constraining values
    - constrain()
    - protect values from going out of range

15. Random Number Generators
    - random()
    - floor() = values are integer values for the background function
    ```
    function setup() {
      // createCanvas( windowWidth, windowHeight );
      createCanvas( windowWidth, 600 );
      frameRate(20);
    }

    function draw() {
      let red = floor( random(256) );
      let green = floor( random(256) );
      let blue = floor( random(256) );
      background( red, green, blue );
    }
    ```

16. Strings
    - "string"
    - 'string'
    - '12345'  <-- strings are not numbers but can contain numbers
    - "12345"  <-- can convert a string to a number --> string(123), "44", +"44", number("123")
    - '?!?!'

17. Javascript Objects
  - Smiley
  ```
    // define a smiley variable.
    // instantiate the variable as an object
    let smiley = {};

    // we can then assign qualities to the object
    smiley.size = 150;
    smiley.eye_mouth_y = -25;
    smiley.color = 'yellow';
    smiley.mouth_h = 90;
    smiley.pos_x = 0;
    smiley.pos_y = 0;

    function setup() {
      // createCanvas( windowWidth, windowHeight );
      createCanvas( windowWidth, 600 );
      background( '0' );

      smiley.pos_x = width/2;
      smiley.pos_y = height/2;
    }


    function draw() {

      // draw the smiley
      translate( smiley.pos_x, smiley.pos_y );

      fill( smiley.color );
      ellipse( 0, 0, smiley.size );

      fill('black');
      ellipse( smiley.eye_mouth_y, smiley.eye_mouth_y, smiley.size * 0.25 );
      ellipse( -smiley.eye_mouth_y, smiley.eye_mouth_y, smiley.size * 0.25 );

      arc( 0, -smiley.eye_mouth_y, smiley.size * 0.8, smiley.mouth_h, 0, PI );

      // update pos
      smiley.pos_x += random( -2, 2 );
      smiley.pos_y += random( -2, 2 );
    }
  ```


## Guidelines for HW 6 assignment
1. 2 of each of the following
  - abs()
  - ceil()
  - ceil()
  - constrain()
  - floor()
  - pow()
  - round()
  - sq()
  - sqrt()
2. Addition/ Subtraction
3. Multiplication/ division
4. Modulo
5. random()
6. map()

- Avoid calling in background(), place it in setup

#### Process
  - The first thing I wanted to do was take in the example that Dr. Musick had posted at the end of the lesson and see if I could alter it and/ or make it work to see how all the variables interacted together but unfortunately this did not pan out. Therefore, here I am trying to start from scratch and figure it out all on my own. I suppose that is what i am supposed to do regardless so here I go!
  - tick, tock, tick, tock, this is taking forever.
  
