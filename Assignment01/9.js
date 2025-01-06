// Program to take time as input and display it in the specified format

// Taking user input
let inputTime = prompt("Enter the time in HH:MM format:");

// Splitting the input into hours and minutes
let [hours, minutes] = inputTime.split(":");

// Displaying the output in the required format
console.log(`${hours} Hour and ${minutes} Minute`);
