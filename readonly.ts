class Student {

    readonly rollNo: number;

    name: string;

    static collegeName: string = "Sri Vishnu Engineering College for Women";

    constructor(rollNo: number, name: string) {
        this.rollNo = rollNo;
        this.name = name;
    }

    displayDetails(): void {
        console.log("Roll Number :", this.rollNo);
        console.log("Name        :", this.name);
        console.log("College     :", Student.collegeName);
    }

    static displayCollege(): void {
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