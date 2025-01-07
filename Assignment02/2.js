// Write a program to print a given number without its last digit.

function removeLastDigit(number){
    return Math.floor(number / 10);
}
let number = 123
let result = removeLastDigit(number);
console.log(result)