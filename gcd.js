"use strict";
let num1 = 24;
let num2 = 36;
let a = num1;
let b = num2;
while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
}
let gcd = a;
let lcm = (num1 * num2) / gcd;
console.log("First Number :", num1);
console.log("Second Number:", num2);
console.log("GCD =", gcd);
console.log("LCM =", lcm);
