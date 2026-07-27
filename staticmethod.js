"use strict";
class Student {
    name;
    rollNo;
    static collegeName = "SVECW";
    constructor(name, rollNo) {
        this.name = name;
        this.rollNo = rollNo;
    }
    displayDetails() {
        console.log("Student Name:", this.name);
        console.log("Roll Number:", this.rollNo);
        console.log("College Name:", Student.collegeName);
    }
    static displayCollege() {
        console.log("College Name:", Student.collegeName);
    }
}
let student1 = new Student("Ananya", 4582);
let student2 = new Student("Rahul", 4583);
student1.displayDetails();
student2.displayDetails();
Student.displayCollege();
