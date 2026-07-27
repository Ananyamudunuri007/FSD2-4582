"use strict";
function greet(name) {
    return `Hello, ${name}! Welcome to TypeScript.`;
}
function showCity(name, city = "Hyderabad") {
    return `${name} is from ${city}.`;
}
function studentDetails(name, branch) {
    if (branch) {
        return `${name} studies ${branch}.`;
    }
    return `${name}'s branch is not specified.`;
}
// Function with rest parameters
function hobbies(name, ...items) {
    return `${name}'s hobbies are: ${items.join(", ")}`;
}
console.log(greet("Ananya"));
console.log(showCity("Rahul"));
console.log(showCity("Sneha", "Bhimavaram"));
console.log(studentDetails("Kiran"));
console.log(studentDetails("Meghana", "AI & DS"));
console.log(hobbies("Ananya", "Photography", "Coding", "Travelling"));
