let binary: number = 11001;
let decimal: number = 0;
let power: number = 0;

let temp: number = binary;

while (temp > 0) {
    let digit: number = temp % 10;
    decimal += digit * Math.pow(2, power);
    power++;
    temp = Math.floor(temp / 10);
}

console.log("Binary Number:", binary);
console.log("Decimal Number:", decimal);
