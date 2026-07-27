let numbers: number[] = [12, 45, 7, 89, 34, 89, 67];

let largest: number = Number.NEGATIVE_INFINITY;
let secondLargest: number = Number.NEGATIVE_INFINITY;

for (let num of numbers) {
    if (num > largest) {
        secondLargest = largest;
        largest = num;
    } else if (num > secondLargest && num !== largest) {
        secondLargest = num;
    }
}

console.log("Array:", numbers);
console.log("Largest Number:", largest);
console.log("Second Largest Number:", secondLargest);