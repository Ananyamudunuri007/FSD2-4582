"use strict";
let binary = 11001;
let decimal = 0;
let power = 0;
let temp = binary;
while (temp > 0) {
    let digit = temp % 10;
    decimal += digit * Math.pow(2, power);
    power++;
    temp = Math.floor(temp / 10);
}
console.log("Binary Number:", binary);
console.log("Decimal Number:", decimal);
