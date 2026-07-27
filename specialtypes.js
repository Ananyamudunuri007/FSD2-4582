"use strict";
let data = 100;
console.log("Any type (number):", data);
data = "Hello TypeScript";
console.log("Any type (string):", data);
data = true;
console.log("Any type (boolean):", data);
let value = "TypeScript";
if (typeof value === "string") {
    console.log("Unknown type (string):", value.toUpperCase());
}
value = 500;
if (typeof value === "number") {
    console.log("Unknown type (number):", value);
}
function displayMessage() {
    console.log("This function does not return any value.");
}
displayMessage();
