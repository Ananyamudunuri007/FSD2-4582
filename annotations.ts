let studentName: string = "Ananya";
let age: number = 19;
let isStudent: boolean = true;

function greet(name: string): string {
    return "Hello, " + name + "!";
}

function displayDetails(name: string, age: number, status: boolean): void {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Student:", status);
}

console.log(greet(studentName));
displayDetails(studentName, age, isStudent);