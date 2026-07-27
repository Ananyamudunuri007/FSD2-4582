let num: number = 145;
let originalNum: number = num;
let sum: number = 0;

// Function to calculate factorial
function factorial(n: number): number {
    let fact: number = 1;

    for (let i = 1; i <= n; i++) {
        fact *= i;
    }

    return fact;
}

while (num > 0) {
    let digit: number = num % 10;
    sum += factorial(digit);
    num = Math.floor(num / 10);
}

if (sum === originalNum) {
    console.log(originalNum + " is a Strong Number.");
} else {
    console.log(originalNum + " is not a Strong Number.");
}