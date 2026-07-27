"use strict";
const welcome = () => {
    console.log("Welcome to Full Stack Development Lab!");
};
const greet = (name) => {
    return `Hello, ${name}!`;
};
const studentInfo = (name, branch) => {
    return `${name} is studying ${branch}.`;
};
const showCity = (city = "Hyderabad") => {
    return `City: ${city}`;
};
const hobbies = (...items) => {
    console.log("Hobbies:", items.join(", "));
};
welcome();
console.log(greet("Ananya"));
console.log(studentInfo("Rahul", "AI & DS"));
console.log(showCity());
console.log(showCity("Bhimavaram"));
hobbies("Photography", "Coding", "Reading");
