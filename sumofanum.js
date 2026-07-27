"use strict";
let number = 12345;
let sum = 0;
let temp = number;
while (temp > 0) {
    let digit = temp % 10;
    sum += digit;
    temp = Math.floor(temp / 10);
}
console.log("Number:", number);
console.log("Sum of digits:", sum);
