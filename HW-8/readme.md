# HW- 8: Loopity- Loops!

## Anna Hill- MART 120

In this lesson we get to create a sketch of any sort as long as it uses loops or while loops.

#### Notes
1. for loops
  - Required: definition of a number variable, a conditional statement to evaluate when to stop running the loop, and a specification to define when to update the defined number variable

  ```
  let i = 0 <-- how to define the number variable
  for (let i = 0) <-- How it would look in a for Loop

  for( numberVariable; conditionalStatement; incrementDetails ) {
    // function block
    // loop statements go in here!
  }
  ```

  - Works on a true = false function
    - true, will execute the function
    - false, ends the function and executes the rest of the sketch

  ```
  i < 2 // If it returns as less that 2, the function will be executed and if not, it will end and move on

  for ( let i = 0; i < 2; ) // i am assuming that the colons are needed to end the statement
  ```

  - Updating the statement

  ```
  i++

  for( vasr i=0; i < 2; i++ ) {
    // do something
  }
  ```

  - In order to create defined variables that don't change you can use other variable names

  ```
  for( let i=0; i<10; i++ ) {
    // find the x_pos
    pos_x = width * i/10;
    // draw an ellipse
    ellipse( pos_x, pos_y, d );
  }
```

  - In the example above, we are defining the for loop, and then the x- position of the ellipse that we call in after it
  - It says that the width multiplied by the variable i divided by 10 objects will transform in the the 10 ellipses, evenly spaced by the width * i to get the ratio of each ellipse
  - What does d represent?

  ```
  i++; // Will eventually end the loop
  i--; // Never exits the loop
  i+=2; // alters the pixel spacing between objects in the sketch
  i-=2; // ???
  i = (i ** 10) / 3; // i to the power of 10 divided by 3
  ```

2. Let vs Var
  - Two ways to call in variables
  - Let keeps the variables in the if Loop parenthesis, you also cannot redefine any variables
  - Var allows the variables to be used in other functions outside of if loops

3. While Loops
  - Will do something as long as the function returns true
  - when there is some condition that will change in the course of the loop, but is not necessarily incremental based or the number of executions needed is known.

  ```
  // while loop syntax example
  while( conditionStatement ) {
	   // function block to do something
   }
   ```

#### Progress and Ideas for sketch

In this project I thought I could try to make disco effects with what I have learned in the lesson overall. The first step I took was recreating the changing ellipses- in my case I made them changing rectangles that would fill the entire window that is open.

Next I am adding a mouse pressed function to be able to switch to different variations of what I am working on as shown in the lesson as well. 
