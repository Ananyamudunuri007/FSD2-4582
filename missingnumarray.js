"use strict";
let numbers = [1, 2, 3, 5, 6];
let n = 6;
let expectedSum = (n * (n + 1)) / 2;
let actualSum = 0;
for (let num of numbers) {
    actualSum += num;
}
let missingNumber = expectedSum - actualSum;
console.log("Array:", numbers);
console.log("Missing Number:", missingNumber);
