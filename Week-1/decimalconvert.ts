let decimal: number = 25;
let binary: string = "";

let temp: number = decimal;

while (temp > 0) {
    let remainder: number = temp % 2;
    binary = remainder + binary;
    temp = Math.floor(temp / 2);
}

console.log("Decimal Number:", decimal);
console.log("Binary Number:", binary);
