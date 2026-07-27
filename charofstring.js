"use strict";
let str = "typescript";
let frequency = {};
for (let ch of str) {
    if (frequency[ch]) {
        frequency[ch]++;
    }
    else {
        frequency[ch] = 1;
    }
}
console.log("String:", str);
console.log("Character Frequencies:");
for (let ch in frequency) {
    console.log(ch + " : " + frequency[ch]);
}
