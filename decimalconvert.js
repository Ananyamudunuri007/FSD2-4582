"use strict";
let decimal = 25;
let binary = "";
let temp = decimal;
while (temp > 0) {
    let remainder = temp % 2;
    binary = remainder + binary;
    temp = Math.floor(temp / 2);
}
console.log("Decimal Number:", decimal);
console.log("Binary Number:", binary);
