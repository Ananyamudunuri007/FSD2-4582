"use strict";
let numbers = [12, 45, 7, 89, 34, 89, 67];
let largest = Number.NEGATIVE_INFINITY;
let secondLargest = Number.NEGATIVE_INFINITY;
for (let num of numbers) {
    if (num > largest) {
        secondLargest = largest;
        largest = num;
    }
    else if (num > secondLargest && num !== largest) {
        secondLargest = num;
    }
}
console.log("Array:", numbers);
console.log("Largest Number:", largest);
console.log("Second Largest Number:", secondLargest);
