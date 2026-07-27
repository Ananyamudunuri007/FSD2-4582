let numbers: number[] = [1, 2, 3, 5, 6];
let n: number = 6;

let expectedSum: number = (n * (n + 1)) / 2;

let actualSum: number = 0;

for (let num of numbers) {
    actualSum += num;
}

let missingNumber: number = expectedSum - actualSum;

console.log("Array:", numbers);
console.log("Missing Number:", missingNumber);