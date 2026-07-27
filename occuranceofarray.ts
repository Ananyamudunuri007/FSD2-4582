let numbers: number[] = [10, 20, 10, 30, 20, 10, 40];
let frequency: { [key: number]: number } = {};

for (let num of numbers) {
    if (frequency[num]) {
        frequency[num]++;
    } else {
        frequency[num] = 1;
    }
}

console.log("Array:", numbers);
console.log("Occurrences of Each Element:");

for (let key in frequency) {
    console.log(key + " : " + frequency[Number(key)]);
}