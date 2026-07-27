"use strict";
let numbers = [10, 20, 30, 40, 50];
let n = 2;
let rotatedArray = [
    ...numbers.slice(n),
    ...numbers.slice(0, n)
];
console.log("Original Array:", numbers);
console.log("Rotated Array:", rotatedArray);
