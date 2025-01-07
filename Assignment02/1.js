
function getUnitDigit(number){
    return number % 10;
}

let num = 9876;
let result = getUnitDigit(num)
console.log(`The unit digit of ${result} is:`,getUnitDigit(result));