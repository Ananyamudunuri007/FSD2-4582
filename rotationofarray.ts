let numbers: number[] = [10, 20, 30, 40, 50];
let n: number = 2;

let rotatedArray: number[] = [
    ...numbers.slice(n),
    ...numbers.slice(0, n)
];

console.log("Original Array:", numbers);
console.log("Rotated Array:", rotatedArray);