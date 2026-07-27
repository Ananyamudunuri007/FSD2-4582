"use strict";
let numbers = [10, 20, 30, 20, 40, 10, 50, 30];
let duplicates = [];
for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] === numbers[j] && !duplicates.includes(numbers[i])) {
            duplicates.push(numbers[i]);
        }
    }
}
console.log("Array:", numbers);
console.log("Duplicate Elements:", duplicates);
