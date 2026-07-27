"use strict";
let num = 145;
let originalNum = num;
let sum = 0;
// Function to calculate factorial
function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}
while (num > 0) {
    let digit = num % 10;
    sum += factorial(digit);
    num = Math.floor(num / 10);
}
if (sum === originalNum) {
    console.log(originalNum + " is a Strong Number.");
}
else {
    console.log(originalNum + " is not a Strong Number.");
}
