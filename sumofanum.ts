let number: number = 12345;
let sum: number = 0;
let temp: number = number;

while (temp > 0) {
    let digit: number = temp % 10;
    sum += digit;
    temp = Math.floor(temp / 10);
}

console.log("Number:", number);
console.log("Sum of digits:", sum);