class Student {
    name: string;
    rollNo: number;

    static collegeName: string = "SVECW";

    constructor(name: string, rollNo: number) {
        this.name = name;
        this.rollNo = rollNo;
    }

    displayDetails(): void {
        console.log("Student Name:", this.name);
        console.log("Roll Number:", this.rollNo);
        console.log("College Name:", Student.collegeName);
    }

    static displayCollege(): void {
        console.log("College Name:", Student.collegeName);
    }
}

let student1: Student = new Student("Ananya", 4582);
let student2: Student = new Student("Rahul", 4583);

student1.displayDetails();
student2.displayDetails();

Student.displayCollege();