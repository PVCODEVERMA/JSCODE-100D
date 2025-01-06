// Importing the readline module
const readline = require("readline");

// Creating an interface to take input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Asking the user for the radius
rl.question("Enter the radius of the circle: ", (radius) => {
  // Calculating the area of the circle
  let area = Math.PI * radius * radius;

  // Displaying the output
  console.log(`Area of circle is ${area} having the radius ${radius}`);

  // Closing the input interface
  rl.close();
});


