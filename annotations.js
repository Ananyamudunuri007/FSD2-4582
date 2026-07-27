"use strict";
let studentName = "Ananya";
let age = 19;
let isStudent = true;
function greet(name) {
    return "Hello, " + name + "!";
}
function displayDetails(name, age, status) {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Student:", status);
}
console.log(greet(studentName));
displayDetails(studentName, age, isStudent);
