
let num1: number = 24;
let num2: number = 36;

let a: number = num1;
let b: number = num2;

while (b !== 0) {
    let temp: number = b;
    b = a % b;
    a = temp;
}

let gcd: number = a;

let lcm: number = (num1 * num2) / gcd;

console.log("First Number :", num1);
console.log("Second Number:", num2);
console.log("GCD =", gcd);
console.log("LCM =", lcm);