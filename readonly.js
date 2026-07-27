"use strict";
class Student {
    rollNo;
    name;
    static collegeName = "Sri Vishnu Engineering College for Women";
    constructor(rollNo, name) {
        this.rollNo = rollNo;
        this.name = name;
    }
    displayDetails() {
        console.log("Roll Number :", this.rollNo);
        console.log("Name        :", this.name);
        console.log("College     :", Student.collegeName);
    }
    static displayCollege() {
        console.log("College Name:", Student.collegeName);
    }
}
let student1 = new Student(4582, "Ananya");
let student2 = new Student(4583, "Rahul");
student1.displayDetails();
console.log();
student2.displayDetails();
console.log();
Student.displayCollege();
