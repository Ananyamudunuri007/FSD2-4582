"use strict";
// Program 15: Check Whether a Number is an Armstrong Number
let num = 153;
let originalNum = num;
let sum = 0;
let digits = num.toString().length;
// Calculate the sum of each digit raised to the power of total digits
while (num > 0) {
    let digit = num % 10;
    sum += Math.pow(digit, digits);
    num = Math.floor(num / 10);
}
// Check if the number is an Armstrong number
if (sum === originalNum) {
    console.log(originalNum + " is an Armstrong Number.");
}
else {
    console.log(originalNum + " is not an Armstrong Number.");
}
